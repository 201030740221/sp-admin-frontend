/** @jsx React.DOM */

/**
 * @tofishes
 * 采购单添加，打印
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

var parseDate = function (dateString) {
    return dateString && dateString.replace('年', '-').replace('月', '-').replace('日', '');
}

/**
 * 主体
 */
var GoodsRow = React.createClass({
    getInitialState: function () {
        var item = this.props.item;
    
        return {
            'amount': item.amount,
            'price': item.price,
            'total': this.getTotal(item.amount, item.price)
        }
    },
    getTotal: function (amount, price) {
        return Calc.Mul(amount, price);
    },
    updateAmount: function (e) {
        var amount = e.target.value;
        this.state.amount = amount;
        this.setState(this.state);
        this.updateTotal();
    },
    updatePrice: function (e) {
        var price = e.target.value;
        this.state.price = price;
        this.setState(this.state);
        this.updateTotal();
    },
    updateTotal: function () {
        this.setState({
            'total': this.getTotal(this.state.amount, this.state.price)
        });

        // 更新总数据
        var $items = $('tr.goods-item-row')
        ,   $total = $('#goods-total-price')
        ,   $totalDX = $('#goods-total-price-dx')
        ,   total = 0;

        $items.each(function () {
            var $amount = $(this).find('.amount-input')
            ,   $price = $(this).find('.price-input')
            ,   itemTotal = Calc.Mul($amount.val(), $price.val())

            total = Calc.Add(total, itemTotal);
        });

        $total.html(total);
        $totalDX.html(DX(total));
    },
    removeItem: function (e) {
        var $row = $(e.target).closest('tr');
        Sp.confirm('确定要移除序号为 ' + $row.data('serial') + ' 的产品吗？', function () {
            $row.remove();
        });
    },
    render: function () {
        var goods = this.props.item;

        return (
            <tr key={goods.id} data-serial={this.props.serial} className="goods-item-row" data-goods={JSON.stringify(goods)}>
                <td className="print-ignore">
                    <i onClick={this.removeItem} title="删除" style={{color: 'red', fontSize: 16}} className="icon-outlined-delete"></i>
                </td>
                <td>{this.props.serial}</td>
                <td>{goods.sku_sn}</td>
                <td dangerouslySetInnerHTML={goods.title}></td>
                <td><img src={goods.thumb} width="80" height="80"/></td>

                <td><LineInput readonly={this.props.readonly} className="sellerinfo" value={goods.sellerinfo}/></td>

                <td><Input className="amount-input" type='float' onChange={this.updateAmount} value={this.state.amount} /></td>
                <td><Input className="price-input" type='float' onChange={this.updatePrice} value={this.state.price} /></td>
                <td data-total={this.state.total}>{this.state.total}</td>
            </tr>
        )
    }
});

var Body = React.createClass({
    getInitialState: function () {
        return {
            'purchase_bill': {
                'id': this.props.pid,
                'created_at': new Date(),
                'document_name': '',
                'contract_no': '',
                'seller_name': '',
                'seller_address': '',
                'seller_tel': '',
                'seller_fax': '',
                'seller_contact_person': '',
                'seller_mobile': '',
                'delivery_date': null,
                'delivery_place': '',
                'buyer_contact_person': '',
                'buyer_tel': '',
                'buyer_mobile': '',
                'pay_type': '',
                'expiration_date': '',
                'replacement': '',
                'repair': '',
                'goods_json': [],
                'order_no': ''
            }
        }
    },
    showGoodsName: function (name) {
        return {__html: name.split(/\s+/).join('<br>')};
    },
    showGoodsAttrs: function (attrs) {
        var _attrs = attrs.split(',').map(function (attr) {
            // 去掉前缀
            return attr.slice(attr.indexOf('-') + 1);
        });
        return {__html: _attrs.join('<br>')};
    },
    componentDidMount: function () {
        var self = this;
        $('#order-print-box').validate();
        // 初始化
        var purchase_id = this.props.pid;

        if (purchase_id != 0) {
            sm.get(sm.getUri('/api/order/document/' + purchase_id), {}, function (rst) {
                var data = rst.data;
                if (rst.code) return;

                data.goods_json = JSON.parse(data.goods_json);

                // 查看采购单的order_no从order字段拿取
                if (data.order && data.order.order_no)
                    data.order_no = data.order.order_no;

                self.setState({
                    'purchase_bill': data
                })
            });

            return;
        };
        // 没有purchase_id，表示新建采购单，需要从订单获取数据
        var store = flux.store("orderDetailStore").getState();
        
        if (!store.init || this.props.id !== store.id) {
            flux.actions.orderDetailActions.onUpdateOrderId(this.props.id)
            flux.actions.orderDetailActions.onGetOrderDetail(function(data){
                console.log(data, '~~~~~~~')
                if (!data) return;

                self.getPurchaseGoods(data);
            });
        } else {
            console.log(store.detail, '####')
            self.getPurchaseGoods(store.detail);
        }
    },
    getPurchaseGoods: function (data) {
        var self = this
        ,   goods = data.goods
        ,   _goods = goods.map(function (item) {
          
            var thumb = Sp.getSmallThumb(item['goods_sku']['has_cover']['media']['full_path']);
console.log(item, '*********')
            return {
                    'amount': item.amount,
                    'price': item.price,
                    'sku_sn': item.goods_sku.sku_sn,
                    'title': self.showGoodsName(item['goods_sku']['goods']['title']),
                    'attrs': self.showGoodsAttrs(item['goods_sku']['attribute_name']),
                    'pieces': item.goods_sku.pieces,
                    'thumb': thumb,
                    // 新增体积，毛重
                    'dimension': item.goods_sku.dimension,
                    'weight': item.goods_sku.weight
                }
        })
        ,   purchase_bill = self.state.purchase_bill;

        purchase_bill.goods_json = _goods;
        purchase_bill.delivery_date = parseDate(purchase_bill.delivery_date)
        purchase_bill.order_no = data.order_no;

        // 查看采购单的order_no从order字段拿取
        if (data.order && data.order.order_no)
            purchase_bill.order_no = data.order.order_no;

        console.log(data, '**^^%%')
        self.setState({
            'purchase_bill': purchase_bill
        });
    },
    updatePurchase: function () {
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
            ,   $amount = $(this).find('.amount-input')
            ,   $price = $(this).find('.price-input');

            goods.price = $price.val();
            goods.amount = $amount.val();
            goods.sellerinfo = $(this).find('input.sellerinfo').val();

            goodsList.push(goods);
        })

        params.document_name = params.seller_name;
        params.goods_json = JSON.stringify(goodsList);
        params.delivery_date = parseDate(params.delivery_date);

        var msgs = {
            'contract_no': '合同号',
            'seller_name': '卖方姓名',
            'seller_address': '卖方地址',
            'seller_tel': '卖方电话',
            'seller_fax': '卖方传真',
            'seller_contact_person': '卖方联系人',
            'seller_mobile': '卖方联系人手机',
            'delivery_date': '交货时间',
            'delivery_place': '交货地址',
            'buyer_contact_person': '买方收货联系人',
            'buyer_tel': '买方收货联系人电话',
            'buyer_mobile': '买方收货联系人手机',
            'pay_type': '购买方式',
            'expiration_date': '质保期',
            'replacement': '包换天数',
            'repair': '包修天数'
        };

        var method = 'post'
        ,   uri = sm.getUri('/api/order/document');

        if (this.state.purchase_bill.id != 0) {
            method = 'put';
            uri = uri + '/' + this.state.purchase_bill.id
        }

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
            _this.setState({
                'purchase_bill': data.data
            })
            Sp.message('保存采购单成功。');
            console.log(_this.state)
        })
    },
    render: function () {
        var self = this;
        var order_date = moment(this.state.purchase_bill.created_at)._d
        ,   goods = this.state.purchase_bill.goods_json;

        var $goodNode = goods.map(function(item, index){
            return (
                <GoodsRow serial={index + 1} item={item} />
            )
        });
        var goods_total_price = goods_total(goods);

        // var action_btn = 
        //         <Button onClick={this.updatePurchase} lg bsStyle='primary'>{this.state.purchase_bill.id != 0 ? '更新' : '保存'}</Button>;
        var readonly = this.state.purchase_bill.id != 0
        var action_btn = readonly ? <span /> : <Button onClick={this.updatePurchase} lg bsStyle='primary'>保存</Button>
            
        console.log(this.state.purchase_bill, moment('2015-3-4'.replace()),   '================')
        var initDate = this.state.purchase_bill.delivery_date

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

                                                        <input type="hidden" name="id" value={this.state.purchase_bill.id}/>
                                                        <input type="hidden" name="order_id" value={this.props.id}/>

                                                        <img src="http://www.sipin.com/static/images/logo.png" className="order-print-box-logo" />
                                                        <h4 className="list-title" style={{textAlign:"center"}}>广州斯品电子商务有限公司</h4>
                                                        <p style={{textAlign:'right'}}>合同号<LineInput readonly={readonly} name='contract_no' value={this.state.purchase_bill.contract_no} required/></p>
                                                        <h2 className="list-title mb20" style={{textAlign:"center"}}>
                                                            <span className="list-title__text">采购订单</span>
                                                        </h2>
                                                        <Row>
                                                            <Col xs={6}>
                                                                <p>买方：广州斯品电子商务有限公司</p>
                                                                <p>地址：广州市海珠区保利世贸C座1910室</p>
                                                                <p>电话：020-89203069<span className="ml10">传真：020-89447550</span></p>
                                                                <p>联系人：肖海峰<span className="ml10">手机：</span>18664721472</p>
                                                            </Col>
                                                            <Col xs={6}>
                                                                <p>卖方：<LineInput readonly={readonly} name={'seller_name'} value={this.state.purchase_bill.seller_name}/></p>
                                                                <p>地址：<LineInput readonly={readonly} name={'seller_address'} value={this.state.purchase_bill.seller_address}/></p>
                                                                <p>电话：<LineInput readonly={readonly} name={'seller_tel'} value={this.state.purchase_bill.seller_tel}/> <span className="ml10">传真：</span><LineInput readonly={readonly} name={'seller_fax'} value={this.state.purchase_bill.seller_fax}/></p>
                                                                <p>联系人：<LineInput readonly={readonly} name={'seller_contact_person'} value={this.state.purchase_bill.seller_contact_person}/><span className="ml10">手机：</span><LineInput readonly={readonly} name={'seller_mobile'} value={this.state.purchase_bill.seller_mobile}/></p>
                                                            </Col>
                                                        </Row>
                                                        <div className="mt15">
                                                            <p>订单号：{this.state.purchase_bill.order_no} <span className="ml10">下单日期：<DateShow date={order_date} format="yyyy年MM月dd日" /></span> <span className="ml10">货币：人民币</span></p>
                                                            <div className="clearfix" style={{margin: '0 0 9px'}}><span className="fl">交货时间：</span>
                                                                <div className="fl">
                                                                <SimpleDatePicker name="delivery_date" initDate={initDate} dateFormat="YYYY年MM月DD日"/>
                                                                </div> <span className="ml10">交货地点：<LineInput readonly={readonly} name="delivery_place" value={this.state.purchase_bill.delivery_place}/></span>
                                                            </div>
                                                            <p>买方收货联系人：<LineInput readonly={readonly} name="buyer_contact_person" value={this.state.purchase_bill.buyer_contact_person}/>   
                                                                电话：<LineInput readonly={readonly} name="buyer_tel" value={this.state.purchase_bill.buyer_tel}/>    
                                                                手机：<LineInput readonly={readonly} name="buyer_mobile" value={this.state.purchase_bill.buyer_mobile}/>
                                                            </p>
                                                        </div>
                                                        <Table width="100%" className="bg-white mt10" striped>
                                                            <thead className='bg-orange65 fg-white'>
                                                                <tr>
                                                                    <th width="30" className="print-ignore"></th>
                                                                    <th width="80">序号</th>
                                                                    <th width="150">产品货号</th>
                                                                    <th className="order-goods-name">产品名称</th>
                                                                    <th width="200">商品图</th>
                                                                    <th width="250">厂家信息</th>
                                                                    <th width="100">数量</th>
                                                                    <th width="100">单价</th>
                                                                    <th width="110">金额</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="goods-list-wrap">
                                                                {$goodNode}
                                                            </tbody>
                                                        </Table>

                                                        <div className="total-show">
                                                           合计： <span id="goods-total-price">{goods_total_price}</span>(数字）      <span id="goods-total-price-dx">{DX(goods_total_price)}</span>（大写）
                                                        </div>
                                                        <p>备注：</p>
                                                        <ol className="note-bill">
                                                            <li>合同确认后，采取<LineInput readonly={readonly} name="pay_type" value={this.state.purchase_bill.pay_type}/>的付款方式 。</li>
                                                            <li>工厂在接到本订单后，如8小时内没有签章确认回传，将视为接收本订单的内容；工厂回签日起的2个工作日内需寄出正本订单到我司的本订单业务收，以作为我司财务部的付款凭证，否则付款延迟概属贵工厂责任。</li>
                                                            <li>请按照订单每个货号的原材料进行生产，如检测原材料不符国家标准，所发生的一切责任均由卖方承担，我司验货员在验货后，会对产品抽取一定的样板作为检测之用，请配合提供产品。</li>
                                                            <li>请按照卖方的签板样进行大货生产，我司验货时，严格按照签板及检验标准执行，如有不符，我司有权拒绝验收。</li>
                                                            <li>验货时，产品需完成100%的订单数量，首次验货费用，我司承担，如果第一次验货不通过，产生的重验费以及其他费用均由卖方承担。</li>
                                                            <li>自买方收货之日起，质保期：<LineInput readonly={readonly} name="expiration_date" value={this.state.purchase_bill.expiration_date}/>个月。
                                                                <LineInput readonly={readonly} name="replacement" value={this.state.purchase_bill.replacement}/>天内包换，
                                                                <LineInput readonly={readonly} name="repair" value={this.state.purchase_bill.repair}/>天内包修。
                                                                在质保期内，卖方负责产品的更换或维修，由此产生的一切费用由卖方承担。
                                                            </li>
                                                        </ol>

                                                        <Row>
                                                            <Col xs={6}>
                                                                <p>买方签名：</p>
                                                                <p>（盖章）</p>
                                                                日&nbsp;期： <DateShow format="yyyy年MM月dd日" />
                                                            </Col>
                                                            <Col xs={6}>
                                                                <p>卖方签名：</p>
                                                                <p>（盖章）</p>
                                                                日&nbsp;期： <DateShow format="yyyy年MM月dd日" />
                                                            </Col>
                                                        </Row>
                                                        <div className="print-ignore text-center mt20 mb20">
                                                            {action_btn}{' '}
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
                <Body id={this.props.id} pid={this.props.purchase_id} flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
