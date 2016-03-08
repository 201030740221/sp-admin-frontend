/** @jsx React.DOM */

/**
 * @tofishes
 * 打印入库单
 * */

var classSet = React.addons.classSet;
var Sp = require("../../widgets/Sp.jsx");
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
 
/**
 * @tofishes
 */
var SimpleDatePicker = require('../../widgets/datepicker/SimpleDatePicker.jsx');
var LineInput = require('../../widgets/form/LineInput.jsx');

var DX = Sp.DX;
var Calc = Sp.Calc;
var Date_format = Sp.Date_format;

require('../../widgets/form/Params.jsx');
require('../../widgets/form/sp-validate.jsx');

var sm = new Sp.Model({
    'api': {
        'savePurchase': '/api/order/document'
    }
})
/**
 * 标题
 */
// <span className="fl list-title__text">打印出货单</span>
var TitleBar = React.createClass({
    onBack: function () {
        window.history.back(-1);
    },
    render: function () {
        return (
            <h4 className="list-title">
                <Button type='submit' onClick={this.onBack} className="fl mr10" >返回</Button>
            </h4>
        )
    }
});

/**
 * @tofishes 获取货物的总价格
 * @param  {[type]} goodList [description]
 * @return {[type]}          [description]
 */
function goods_total(goodList) {
    var total = 0;
    goodList.forEach(function (item) {
        total = Calc.Add(total, Calc.Mul(item.amount, item.price))
    });
    return total;
}
/**
 * @tofishes 按传入格式显示的日期时间
 * @param  {[type]}   _date [description]
 * @return {[type]}   [description]
 */
var DateShow = React.createClass({
    render: function () {
        var _date =  Date_format({
            'date': this.props.date, 
            'format': this.props.format
        });
        return (
            <time>{_date}</time>
        )
    }
})

/**
 * 主体
 */
var GoodsRow = React.createClass({
    render: function () {
        var goods = this.props.item;

        return (
            <tr key={goods.id} data-serial={this.props.serial} className="goods-item-row" data-goods={JSON.stringify(goods)}>
                <td>{this.props.serial}</td>
                <td>{goods.sku_sn}</td>
                <td className="factory-no"><LineInput name="factory_no" value={goods.factory_no}></LineInput></td>
                <td dangerouslySetInnerHTML={goods.title}></td>
                <th>{goods.sellerinfo}</th>
                <td>{goods.amount}</td>
                <td>{goods.pieces}</td>
                <th>{goods.dimension}</th>
                <th>{goods.dimension_total}</th>
                <th>{goods.weight}</th>
                <th>{goods.weight_total}</th>
            </tr>
        )
    }
});

var Body = React.createClass({
    getInitialState: function () {
        return {
            'purchase_bill': {
                'goods_json': [],
                'order': {
                    'delivery': {
                        'member_address': {}
                    },
                    'member': {}
                }
            }
        }
    },
    update: function () {
        var _this = this
        ,   $form = $('#order-print-box')
        ,   params = $form.paramMap()
        ,   $goodsItems = $('#goods-list-wrap tr')
        ,   goodsList = [];

        var valid = $form.valid();

        if (!valid) {
            return false;
        };

        $goodsItems.each(function () {
            var goods = $(this).data('goods')
            ,   $factory = $(this).find('.factory-no input');

            if (!goods) return;

            goods.factory_no = $factory.val();
console.log('factory-no: ', goods.factory_no)
            goodsList.push(goods);
        })

        params.goods_json = JSON.stringify(goodsList);

        var msgs = {
            'warehouse_date': '入库日期',
            'warehouse_delivery': '送货方式',
            'warehouse_pay': '支付方式',
            'delivery_tel': '送货司机电话',
            'delivery_name': '送货司机姓名',
            'car_number': '车牌号'
        };

        var method = 'post'
        ,   uri = sm.getUri('/api/order/updateWarehouse');

        sm[method](uri, params, function (data) {
            if (data.code) {
                var error = data.data.error;
                for (var name in error) {
                    if (msgs[name]) {
                        Sp.alert('请正确填写' + msgs[name])
                    }
                }

                return false;
            };
            data.data.goods_json = JSON.parse(data.data.goods_json);
            Sp.message('更新入库单成功。');
        })
    },
    showGoodsName: function (name) {
        return {__html: name.split(/\s+/).join('<br/>')};
    },
    showGoodsAttrs: function (attrs) {
        var _attrs = attrs.split(',').map(function (attr) {
            // 去掉前缀
            return attr.slice(attr.indexOf('-') + 1);
        });
        return {__html: _attrs.join('<br/>')};
    },
    componentDidMount: function () {
        var self = this;
        $('#order-print-box').validate();
        // 初始化
        var purchase_id = this.props.pid;

        if (purchase_id) {
            sm.get(sm.getUri('/api/order/document/' + purchase_id), {}, function (rst) {
                var data = rst.data;
                if (rst.code) return;

                data.goods_json = JSON.parse(data.goods_json);
                self.setState({
                    'purchase_bill': data
                })
            });
        };
    },
    render: function () {
console.log(this.state.purchase_bill, '======')
        var purchase_bill = this.state.purchase_bill
        ,   goods = purchase_bill.goods_json

        ,   summation_amount = 0
        ,   summation_pieces = 0
        ,   summation_dimension = 0
        ,   summation_weight = 0;

        var $goodNode = goods.map(function(item, index){
            item.dimension_total = Calc.Mul(item.dimension, item.amount);
            item.weight_total = Calc.Mul(item.weight, item.amount);

            summation_amount += +item.amount;
            summation_pieces += +item.pieces;
            summation_dimension = Calc.Add(summation_dimension, item.dimension_total);
            summation_weight = Calc.Add(summation_weight, item.weight_total);

            return (
                <GoodsRow serial={index + 1} item={item} />
            )
        });

        if (!purchase_bill.warehouse_date || purchase_bill.warehouse_date.indexOf('0000-00-00') != -1) {
            purchase_bill.warehouse_date = null;
        }

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className="search-box">
                                                        <Grid>
                                                            <Row className='hidden-print'>
                                                                <Col xs={5}>
                                                                    <TitleBar></TitleBar>
                                                                </Col>
                                                                <Col xs={7}>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </div>
                                                    <form id="order-print-box" className="order-print-box">
                                                        <input type="hidden" name="id" value={this.props.pid}/>
                                                        <img src="http://www.sipin.com/static/images/logo.png" className="order-print-box-logo" />
                                                        <h2 className="list-title mb30" style={{textAlign:"center"}}>
                                                            <span className="list-title__text">入库单</span>
                                                        </h2>
                                                        <Row>
                                                            <div className="fr">
                                                                <p>{purchase_bill.contract_no}</p>
                                                                <p><SimpleDatePicker name="warehouse_date" initDate={purchase_bill.warehouse_date}/></p>
                                                            </div>
                                                            <div className="fr text-right">
                                                                <p>采购单号：</p>
                                                                <p>日期：</p>
                                                            </div>
                                                        </Row>
                                                        <p>供应商名称：{purchase_bill.seller_name}</p>
                                                        <p>收货人/电话：曾振，13824490532</p>
                                                        <p>收货地址：佛山市南海区九江镇九樵路真龙物流园斯品商城仓库</p>
                                                        <p>送货方式：<LineInput name="warehouse_delivery" value={purchase_bill.warehouse_delivery} /></p>
                                                        <p>运费支付方式：<LineInput name="warehouse_pay" value={purchase_bill.warehouse_pay} /></p>
                                                        <p>送货司机名：<LineInput name="delivery_name" value={purchase_bill.delivery_name} /></p>
                                                        <p>送货司机电话：<LineInput name="delivery_tel" value={purchase_bill.delivery_tel} /></p>
                                                        <p>车牌号：<LineInput name="car_number" value={purchase_bill.car_number} /></p>
                                                      
                                                        <Table width="100%" className="bg-white mt10 common-table" striped>
                                                            <thead className='bg-orange65 fg-white'>
                                                                <tr>
                                                                    <th>序号</th>
                                                                    <th>斯品货号</th>
                                                                    <th>工厂货号</th>
                                                                    <th>产品名称</th>
                                                                    <th>产品描述</th>
                                                                    <th>数量<br/>(PC)</th>
                                                                    <th>箱数<br/>(CTN)</th>
                                                                    <th>体积<br/>(CBM)</th>
                                                                    <th>总体积<br/>(CBM)</th>
                                                                    <th>毛重<br/>(KGS)</th>
                                                                    <th>总毛重<br/>(KGS)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="goods-list-wrap">
                                                                {$goodNode}
                                                                <tr>
                                                                    <td colSpan="5" className="text-right">合计：</td>
                                                                    <td>{summation_amount}</td>
                                                                    <td>{summation_pieces}</td>
                                                                    <td></td>
                                                                    <td>{summation_dimension}</td>
                                                                    <td></td>
                                                                    <td>{summation_weight}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <p>注意事项：</p>
                                                        <ol className="order-list">
                                                            <li>送货到达时间需在斯品仓库上班时间：周一到周五早上9：00~~12：00，下午1：30~~5：00，送货到达前需提前2个小时告知仓库相关管理人员，以便安排搬运工人卸货</li>
                                                            <li>如是选择速递或物流，要当天扫描单据给我司</li>
                                                            <li>我司委派承运公司以散件形式出货，卖方务必要求承运公司出示我司的“供应商出货单”方可装货</li>
                                                            <li>专车形式出运，务必根据我司提供的车牌号，司机名和司机电话，核对后，再装货</li>
                                                            <li>装货前必须检查车厢、货柜是否潮湿，有漏洞，漏水等，若有此现象，请要求换车</li>
                                                            <li>装箱时产品应采用垒砖式交叉叠放，确保每一行列堆放稳定，防止开箱时货物倾斜倒塌，并叫搬运工人不要踩上外箱，以免造成货物损坏，导致贵司赔偿</li>
                                                            <li>所有工厂在装完货物后，必须在第二天早上9:00前将实装货物数量传真或发邮件（签名版）给我司</li>
                                                            <li>此出货单一式二份，随货物一起交付收货人签收，一份交收货人，一份工厂保留，并以此单据为对账凭证</li>
                                                        </ol>
                                                        <Row>
                                                            <Col xs={4}>收货人签名：</Col>
                                                            <Col xs={4}>发货人签名：</Col>
                                                            <Col xs={4}>送货司机签名：</Col>
                                                        </Row>
                                                        <div className="print-ignore text-center mt20 mb20">
                                                            <Button onClick={this.update} lg bsStyle='primary'>更新</Button>
                                                            <Button onClick={window.print} lg bsStyle='primary' style={{marginLeft: '10px'}}>点此打印</Button>
                                                        </div>
                                                    </form>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
                {this.props.children}
            </Container>
        );
    }
});


var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id} pid={this.props.purchase_id} flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
