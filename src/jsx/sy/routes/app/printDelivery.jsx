/** @jsx React.DOM */

/**
 * @tofishes
 * 打印用户收货单
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
            <tr key={goods.id} data-serial={this.props.serial} className="goods-item-row">
                <td className="print-ignore-no">{this.props.serial}</td>
                <td dangerouslySetInnerHTML={goods.title}></td>
                <td>{goods.sku_sn}</td>
                <td dangerouslySetInnerHTML={goods.attrs}></td>
                <td>{goods.price}</td>
                <td>{goods.amount}</td>
                <td>{goods.totalPrice}</td>
            </tr>
        )
    }
});

var Body = React.createClass({
    getInitialState: function () {
        return {
            'bar_code': '<p/>',
            'orderInfo': {},
            'goods': []
        }
    },
    showGoodsName: function (name) {
        return {__html: name.split(/\s+/).join('')};
    },
    showGoodsAttrs: function (attrs) {
        var _attrs = attrs.split(',').map(function (attr) {
            // 去掉前缀
            return attr.slice(attr.indexOf('-') + 1);
        });
        return {__html: _attrs.join('|')};
    },
    componentDidMount: function () {
        var self = this;
        flux.actions.orderDetailActions.onUpdateOrderId(this.props.id)
        flux.actions.orderDetailActions.onGetOrderDetail(function(data){
            if (!data) return;
            console.log(data, '&&&&&&&&&&&&&&')
            var goods = data.goods
            ,   total_pieces = 0
            ,   _goods = goods.map(function (item) {
                total_pieces = Calc.Add(total_pieces, Calc.Mul(item.amount, item.goods_sku.pieces))
                return {
                        'id': item.id,
                        'amount': item.amount,
                        'price': item.price,
                        'totalPrice': Calc.Mul(item.amount, item.price),
                        'sku_sn': item.goods_sku.sku_sn,
                        'title': self.showGoodsName(item['goods_sku']['goods']['title']),
                        'attrs': self.showGoodsAttrs(item['goods_sku']['attribute_name']),
                        'pieces': item.goods_sku.pieces
                    }
            });

            var member_address = data.delivery.member_address || {}
            var orderInfo = {
                'delivery_time': data.delivery.reserve_delivery_time,
                'installation_time': data.delivery.reserve_installation_time,
                'order_no': data.order_no,
                'total_price': data.total_price, // 商品总计
                'total': data.total, // 实际支付
                'total_delivery': data.total_delivery, // 运费
                'total_installation': data.total_installation, // 安装费
                'point_abatement': data.point_abatement, // 积分抵扣
                'total_point': data.total_point, // 积分抵扣
                'coupon_abatement': data.coupon_abatement, // 优惠券抵扣
                'partner': data.payment ? data.payment.partner : '无数据',
                'total_pieces': total_pieces,
                'consignee': member_address.consignee, // 收货人
                'contact': member_address.mobile || member_address.second_mobile || member_address.email,
                'address': member_address.province_name + member_address.city_name + member_address.district_name + member_address.address
            };

            self.setState({
                'goods': _goods,
                'orderInfo': orderInfo
            });

            // $.get(host + '/api/order/getBarcode', {
            //     'order_no': data.order_no
            // }, function (rst) {
            //     var bar_code = rst.data; // 返回base64图片地址
            //     self.setState({
            //         'bar_code': bar_code
            //     })

            //     console.log(self.state)
            // })
        });
    },
    render: function () {
        var orderInfo = this.state.orderInfo
        ,   goods = this.state.goods
        ,   order_date = orderInfo.delivery_time == '0000-00-00 00:00:00' ? '用户未指定' : moment(orderInfo.delivery_time).format('YYYY-MM-DD')
        ,   install_date = orderInfo.installation_time == '0000-00-00 00:00:00' ? '用户未指定' : moment(orderInfo.installation_time).format('YYYY-MM-DD');

        var $goodNode = goods.map(function(item, index){
            return (
                <GoodsRow serial={index + 1} item={item} />
            )
        });

        // var bar_code = <div className="bar-code fr text-center">
        //     <img src={this.state.bar_code}/>
        //     <p>{orderInfo.order_no}</p>
        // </div>

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
                                                        <Row style={{padding: '0 20px'}}>
                                                            <Col xs={6}>
                                                                <img src="static-admin/imgs/logo-print.png" style={{height: 90}} className="order-print-box-logo" />
                                                            </Col>

                                                            <Col xs={6} className="qr-code-weixin">
                                                                <p className="fr mt15">有奖征稿<br/>分享您的居家生活故事</p>
                                                                <img className="fr" style={{height: 90}} src="static-admin/imgs/qr-code/sipin-weixin.png" alt=""/>
                                                            </Col>
                                                        </Row>
                                                        <h2 className="list-title mb30" style={{textAlign:"center"}}>
                                                            <span className="list-title__text">发货单</span>
                                                        </h2>
                                                        <Table width="100%" style={{marginBottom: 0}} className="user-info-table bg-white" striped>
                                                            <tbody id="goods-list-wrap">
                                                                <tr>
                                                                    <td>订单编号：<span style={{marginRight: 30}}>{orderInfo.order_no}</span>
                                                                        包装件数：<span style={{marginRight: 30}}>{orderInfo.total_pieces}</span>
                                                                        收货人：<span style={{marginRight: 30}}>{orderInfo.consignee}</span>
                                                                        联系方式：<span style={{marginRight: 30}}>{orderInfo.contact}</span>
                                                                        <span>收货地址：{orderInfo.address}</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <Table width="100%" className="bg-white" striped>
                                                            <thead className='bg-orange65 fg-white'>
                                                                <tr>
                                                                    <th width="55" className="print-ignore-no">序号</th>
                                                                    <th>商品名</th>
                                                                    <th>商品编号</th>
                                                                    <th>规格属性</th>
                                                                    <th width="150">单价</th>
                                                                    <th width="100">数量</th>
                                                                    <th width="100">小计</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="goods-list-wrap">
                                                                {$goodNode}
                                                            </tbody>
                                                        </Table>
                                                        <div className="delivery-print-meta mb15">
                                                            <p>商品总额：<em>￥{orderInfo.total_price}</em></p>
                                                            <p>运费：<em>￥{orderInfo.total_delivery}</em></p>
                                                            <p>安装费：<em>￥{orderInfo.total_installation}</em></p>
                                                            <p>订单积分抵现：<em>￥{orderInfo.point_abatement}</em></p>
                                                            <p>商品积分消耗：<em>{orderInfo.total_point}</em></p>
                                                            <p>优惠券抵扣：<em>￥{orderInfo.coupon_abatement}</em></p>
                                                            <p className="meta-total">合计：<em>￥{orderInfo.total}</em></p>
                                                        </div>
                                                        <div className="mt20">
                                                            <p>感谢您把斯品的产品带回家！希望它们能融入到您的家庭，为全家人带来舒适和欢乐。如果在进家的30天内，它们无端调皮捣蛋带来不快，还请第一时间告知我们，我们会尽快为您消除困扰。</p>
                                                            <p className="mt10">希望斯品的陪伴，能让您的居家生活更美好！</p>
                                                            <p className="mt10">
                                                                <span className="fr">斯品家居在线商城（sipin.com）</span>
                                                                客服热线：400-884-8688 客服邮箱：service@sipin.com
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="print-ignore text-center mt20 mb20">
                                                            <Button onClick={window.print} lg bsStyle='primary'>点此打印</Button>
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
                <Body id={this.props.id} flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
