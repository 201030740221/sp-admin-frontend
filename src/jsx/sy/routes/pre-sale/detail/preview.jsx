/** @jsx React.DOM */

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/preSale/listStore.jsx');
var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');

/*设置sku基本信息*/
var PreSaleSkuSet = React.createClass({
    getInitialState: function () {
        return {

        }
    },
    render: function(){
        var item = this.props.item || {};
        var url = '';
        if(item.images){
            url = item.images+'?imageView2/1/w/100';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="12%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} width='100' />
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="12%" className='text_center'>{item.attribute_name}</td>
                            <td width="6%" className='text_center'>{item.price}</td>
                            <td width="8%" className='text_center'>
                                {item.presale_price}
                            </td>
                            <td width="8%" className='text_center'>
                                {item.earnest_money}
                            </td>
                            <td width="8%" className='text_center'>
                                {item.quantity}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

var Widget = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('preSale','goodsSkuList')],
    getInitialState: function () {
        return {
            source: {},
            batches: {},
            skuData: []
        }
    },
    componentDidMount: function () {
        var _this = this;
        var request_data = {};
        var id = this.props.id;
        liteFlux.action("preSale").getPreSaleDetail(id,request_data,function(data){
            _this.setState({
                source: data
            })
        });

        liteFlux.action("preSale").getPreSaleBatchs(id,request_data,function(data){
            _this.setState({
                batches: data
            });
            var request_data = {
                goods_ids: _this.props.goods_id
            };
            liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
                _this.setState({
                    skuData: data.data
                })
            });
        });
    },
    render: function () {

        var source = this.state.source;

        /*预售阶段一*/
        var preSaleNode1 = (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding label_nav'>阶段一:</Label>
                    <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}>
                        <Label className='label_nav'>即将预售</Label>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>原价说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        {source.old_price_tip}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售价说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        {source.presale_price_tip}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售订金说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        {source.earnest_money_tip}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>单品优惠卡券ID:</Label>
                    <Col sm={9} className="mb15 pr0">
                        {source.coupon_id}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售规则ID:</Label>
                    <Col sm={9} className="mb15 pr0">
                        {source.article_id}
                    </Col>
                </FormGroup>
            </div>
        );

        var skuList = this.state.skuData,
            batchesData = this.state.batches,
            batchArr = batchesData.data || [];
        /*预售阶段二*/
        var preSaleNode2 = batchArr.map(function(item,key){
            return (
                <div key={key}>
                    <FormGroup>
                        <Label control sm={3} className='right_padding label_nav'>阶段二:</Label>
                        <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}>
                            <Label className='label_nav'>预售批次{key+1}</Label>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>限购:</Label>
                        <Col sm={9} className="mb15 pr0">
                            {item.quantity_limit}
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>开始时间:</Label>
                        <Col sm={9} className="mb15 pr0">{item.begin_at}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>结束时间:</Label>
                        <Col sm={9} className="mb15 pr0">{item.end_at}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>尾款支付期限:</Label>
                        <Col sm={9} className="mb15 pr0">{item.pay_deadline}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>预计发货时间:</Label>
                        <Col sm={9} className="mb15 pr0">{item.delivery_time}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Table striped>
                            <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="12%" style={{paddingLeft:'50'}}>商品</th>
                                <th width="12%" className='text_center'>规格</th>
                                <th width="6%" className='text_center'>原价（元）</th>
                                <th width="8%" className='text_center'>预售价（元）</th>
                                <th width="8%" className='text_center'>预售订金（元）</th>
                                <th width="8%" className='text_center'>库存</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                item.skus.map(function(this_item,this_key){
                                    for(var i in skuList){
                                        if(skuList[i].sku_id == this_item.goods_sku_id){
                                            this_item.images = skuList[i].images;
                                            this_item.attribute_name = skuList[i].attribute_name;
                                            this_item.price = skuList[i].price;
                                        }
                                    }
                                    return (
                                        <PreSaleSkuSet item={this_item} key={this_key} ></PreSaleSkuSet>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} >是否闪电发货:</Label>
                        <Col sm={9} style={{marginTop:'5'}}>{item.is_quick?'是':'否'}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} >是否首发优惠:</Label>
                        <Col sm={9} style={{marginTop:'5'}}>{item.is_preferential?'是':'否'}</Col>
                    </FormGroup>
                    <hr style={{borderColor:'#364F77'}}/>
                </div>
            )
        });
        return (
            <div>
                <Form horizontal>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>活动名称:</Label>
                        <Col sm={9} className="mb15 pr0">{source.name}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>预售商品:</Label>
                        <Col sm={9} className="mb15 pr0">{source.goods_id}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>商品PC模板:</Label>
                        <Col sm={9} className="mb15 pr0">{source.template}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>商品M端模板:</Label>
                        <Col sm={9} className="mb15 pr0">{source.m_template}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>活动开始时间:</Label>
                        <Col sm={9} className="mb15 pr0">{source.begin_at}</Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>活动结束时间:</Label>
                        <Col sm={9} className="mb15 pr0">{source.end_at}</Col>
                    </FormGroup>
                    {preSaleNode1}
                    <FormGroup>
                        <Label control sm={3} >是否在频道显示:</Label>
                        <Col sm={9} style={{marginTop:'5'}}>{source.is_show?'显示':'隐藏'}</Col>
                    </FormGroup>
                    <hr style={{borderColor:'#364F77'}}/>
                    {preSaleNode2}
                </Form>
            </div>
        )
    }
});

module.exports = Widget;
