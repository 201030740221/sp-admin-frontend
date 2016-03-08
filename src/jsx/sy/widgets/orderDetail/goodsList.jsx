/** @jsx React.DOM */
var Store = flux.store("orderDetailStore").getState;
var actions = flux.actions.orderDetailActions;

// 获得SKU

var GoodsList = React.createClass({
    getInitialState: function(){
        return {
            showEditDelivery: false,
            showEditInstallation: false,
            deliveryVal:0,
            installationVal:0
        }
    },
    onRemoveGood: function(){

    },
    onEditGood: function(){

    },
    onEditDelivery: function(){
        var store = Store();
        this.setState({
            deliveryVal: store.detail.delivery_abatement,
            showEditDelivery: true
        });
    },
    onEditDeliveryFalse: function(){
        this.setState({
            showEditDelivery: false
        });
    },
    onEditInstallation: function(){
        var store = Store();
        this.setState({
            installationVal: store.detail.installation_abatement,
            showEditInstallation: true
        });
    },
    onEditInstallationFalse: function(){
        this.setState({
            showEditInstallation: false
        });
    },
    changeDeliveryVal: function(e){
        this.setState({
            deliveryVal: e.target.value
        });
    },
    changeInstallationVal: function(e){
        this.setState({
            installationVal: e.target.value
        });
    },
    enterDeliveryVal: function(){
        var val = $("#j-delivery-val").val();
        //改变运费
        this.onEditDeliveryFalse();
        actions.onEditDelivery(val);
    },
    enterInstallationVal: function(){
        var val = $("#j-installation-val").val();
        //改变安装费
        this.onEditInstallationFalse();
        actions.onEditInstallation(val);
    },
    render: function () {
        var self = this;
        var store = Store();
        var showEditDelivery = classSet({
            'hidden': !this.state.showEditDelivery,
            'fl': true,
            'clearfix': true
        });
        var showEditInstallation = classSet({
            'hidden': !this.state.showEditInstallation,
            'fl': true,
            'clearfix': true
        });
        var showEditDeliveryBtn = classSet({
            'hidden': store.detail.status_id!=1 || this.state.showEditDelivery
        });
        var showCancelDeliveryBtn = classSet({
            'hidden': !this.state.showEditDelivery
        });
        var showEditInstallationBtn = classSet({
            'hidden': store.detail.status_id!=1 || this.state.showEditInstallation
        });
        var showCancelInstallationBtn = classSet({
            'hidden': !this.state.showEditInstallation
        });
        var $goodNode = this.props.goods.map(function(item){
            if(item.goods_sku.goods){
                return (
                    <tr key={item.id}>
                        <td></td>
                        <td>123</td>
                        <td>
                            <img src={item['goods_sku']['has_cover']['media']['full_path']+'?imageView2/1/w/80'} width="80" />
                        </td>
                        <td><a target="_blank" href={frontHost+"/item/"+item['goods_sku']['sku_sn']+".html"}>{item['goods_sku']['goods']['title']}</a></td>
                        <td>{item['goods_sku']['attribute_name']}</td>
                        <td>￥{item['price']}</td>
                        <td>{item['amount']}</td>
                        <td>￥{item['amount']*item['price']}</td>
                    </tr>
                );
            }
        });

        var couponArr = this.props.coupon || [];

        return (
            <div className="goodsList">
                <h4 className="list-title">
                    <span className="fl list-title__text">商品清单：</span>
                </h4>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="100">商品编号</th>
                            <th width="100">商品图</th>
                            <th width="200">商品名</th>
                            <th width="*">SKU</th>
                            <th width="100">单价</th>
                            <th width="50">数量</th>
                            <th width="100">小计</th>
                        </tr>
                    </thead>
                    <tbody>
                        {$goodNode}
                    </tbody>
                </Table>
                <div className="totalDiv">
                    <Grid>
                        <Row className='hidden-print'>
                            <Col xs={8}>
                                <h4 className="list-title">
                                    <span className="fl list-title__text">优惠券信息</span>
                                </h4>
                                {
                                    couponArr.map(function(item,key){
                                        item.coupon = item.coupon || {};
                                        item.coupon.task = item.coupon.task || {};
                                        var task = item.coupon.task;
                                        if(task){
                                            return (
                                                <Row style={{width:'300',border: '1px dashed #E20892'}} key={key}>
                                                    <Col sm={6}>
                                                        <a href={"#/promotion/coupon/detail/"+task.id}>{task.name}</a>
                                                    </Col>
                                                    <Col sm={6}>￥{task.value}</Col>
                                                </Row>
                                            )
                                        }else{
                                            return (
                                                <Row style={{width:'300',border: '1px dashed #E20892'}} key={key}>
                                                    <Col sm={6}>无</Col>
                                                </Row>
                                            )
                                        }

                                    })
                                }
                            </Col>
                            <Col xs={4}>
                                <Table width="100%">
                                    <tr>
                                        <td width="160" style={{textAlign: "right"}}>总计：</td>
                                        <td style={{textAlign: "left"}}>￥{self.props.price}</td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>运费：</td>
                                        <td style={{textAlign: "left"}}>
                                            <div className="fl mr10">￥{self.props.delivery} <span className="fg-orange65">{" - "+store.detail.delivery_abatement}</span></div>
                                            <a className={showEditDeliveryBtn} onClick={this.onEditDelivery} href="javascript:void(0);">减免</a>
                                            <a className={showCancelDeliveryBtn} onClick={this.onEditDeliveryFalse} href="javascript:void(0);">取消</a>
                                            <div className={showEditDelivery}>
                                                <Input id="j-delivery-val" className="fl mr10" style={{width: 100}} type='text' placeholder='减免运费' value={this.state.deliveryVal} onChange={this.changeDeliveryVal} />
                                                <Button type='submit' onClick={this.enterDeliveryVal} className="fl" >确定</Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>安装费：</td>
                                        <td style={{textAlign: "left"}}>
                                            <div className="fl mr10">￥{self.props.installation} <span className="fg-orange65">{" - "+store.detail.installation_abatement}</span> </div>
                                            <a
                                                className={showEditInstallationBtn}
                                                onClick={this.onEditInstallation}
                                                href="javascript:void(0);">减免
                                            </a>
                                            <a
                                                className={showCancelInstallationBtn} onClick={this.onEditInstallationFalse}
                                                href="javascript:void(0);">取消
                                            </a>
                                            <div className={showEditInstallation}>
                                                <Input
                                                    id="j-installation-val"
                                                    className="fl mr10"
                                                    style={{width: 100}}
                                                    type='text'
                                                    placeholder='减安装费'
                                                    value={this.state.installationVal} onChange={this.changeInstallationVal}
                                                />
                                                <Button type='submit' onClick={this.enterInstallationVal} className="fl" >确定</Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>商品费用减免：</td>
                                        <td style={{textAlign: "left"}}>￥<span className="fg-orange65">- {self.props.price_abatement}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>优惠券：</td>
                                        <td style={{textAlign: "left"}}>￥<span className="fg-orange65">- {self.props.coupon_abatement}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>订单积分抵现：</td>
                                        <td style={{textAlign: "left"}}>￥<span className="fg-orange65">- {self.props.point_abatement || '0.00'}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}>商品积分消耗：</td>
                                        <td style={{textAlign: "left"}}><span className="fg-orange65">- {self.props.total_point || '0'}</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: "right"}}><span className="fg-orange65 f16">应付金额：</span></td>
                                        <td style={{textAlign: "left"}}><span className="fg-orange65 f16">￥{self.props.total}</span></td>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
});

module.exports = GoodsList;
