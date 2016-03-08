/** @jsx React.DOM */

var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;

/**
 * === 创建换货订单Model start ====
 */
var moment = require('moment');
var DatePicker = require('../../widgets/datepicker/datepicker.jsx');
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var PlaceSelector = require('../placeSelector/placeSelector.jsx');

var CCOModalTitle = React.createClass({
    render: function(){
        var detail = Store().detail;
        var Style = {
            Grid: {
                borderBottom: "1px solid #eee",
                paddingBottom: 15,
                marginBottom:15
            }
        };
        return (
            <Grid style={Style.Grid}>
                <Row className='hidden-print'>
                    <Col xs={4}>
                        服务单号：{detail['after_sales_no']}
                    </Col>
                    <Col xs={4}></Col>
                    <Col xs={4}></Col>
                </Row>
            </Grid>
        )
    }
});

var CCOModalGoodList = React.createClass({
    render: function(){
        var detail = Store().detail;
        var $goodNode = function(){
            var item = detail.goods;
            return (
                <tr key={item.id}>
                    <td></td>
                    <td>{item.id}</td>
                    <td>
                        <img src={item['goods_sku']['has_cover']['media']['full_path']+'?imageView2/1/w/80'} width="80" />
                    </td>
                    <td><a target="_blank" href={frontHost+"/item/"+item['goods_sku']['sku_sn']+".html"}>{item['goods_sku']['goods']['title']}</a></td>
                    <td>{item['goods_sku']['attribute_name']}</td>
                    <td>￥{item['price']}</td>
                    <td>{item['amount']}</td>
                    <td>￥{item['amount']*item['price']}</td>
                </tr>
            )
        };
        return (
            <div>
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
                        {$goodNode()}
                    </tbody>
                </Table>
            </div>
        )
    }
});

var CCOModalAddress = React.createClass({
    getInitialState: function(){
        var detail = Store().detail;
        return {
            memberId: detail.member_id,
            addressId: 0,
            consignee: detail['name'],
            mobile: detail['mobile'],
            address: detail['address'],
            place: {
                region:[],
                province:{
                    id: detail['province']['id'],
                    name: detail['province']['name']
                },
                city:{
                    id: detail['city']['id'],
                    name: detail['city']['name']
                },
                district:{
                    id: detail['district']['id'],
                    name: detail['district']['name']
                }
            }
        }
    },
    // 收货人
    onChangeConsignee: function(e){
        var val = e.target.value;
        var state = this.state;
        state.consignee = val;
        this.setState(state, function(){
            this.props.onChange(state);
        });
    },
    // 手机
    onChangeMobile: function(e){
        var val = e.target.value;
        var state = this.state;
        state.mobile = val;
        this.setState(state, function(){
            this.props.onChange(state);
        });
    },
    // 地区
    onChangePlace: function(res){
        var state = this.state;
        state.place = res;
        this.setState(state, function(){
            this.props.onChange(state);
        });
    },
    // 详细地址
    onChangeAddress: function (e) {
        var val = e.target.value;
        var state = this.state;
        state.address = val;
        this.setState(state, function(){
            this.props.onChange(state);
        });
    },
    componentDidMount: function(){
        //var detail = Store().detail;

    },
    render: function(){
        var state = this.state;
        return (
            <div className="edit_userinfo">
                <h4 className="list-title">
                    <span className="list-title__text">收货信息：</span>
                </h4>
                <div className="edit_userinfo">
                    <div className="mb10">
                        <label>收货人：</label>
                        <Input
                            type='text'
                            id="j-user-model-realname"
                            onChange={this.onChangeConsignee}
                            value={state['consignee']}
                            placeholder='请输入收货人'
                        />
                    </div>
                    <div className="mb10">
                        <label>手机：</label>
                        <Input
                            type='text'
                            id="j-user-model-phone"
                            onChange={this.onChangeMobile}
                            value={state['mobile']}
                            placeholder='请输入手机'
                        />
                    </div>
                    <div className="mb10 clearfix">
                        <label>选择地区：</label>
                        <PlaceSelector
                            place={state.place}
                            onChange={this.onChangePlace}
                        />
                    </div>
                    <div className="mb10">
                        <label>详细地址：</label>
                        <Input
                            type='text'
                            id="j-user-model-second-phone"
                            onChange={this.onChangeAddress}
                            value={state['address']}
                            placeholder='请输入收货地址'
                        />
                    </div>
                </div>
            </div>
        )
    }
});


var CCOModalDeliveryTime = React.createClass({
    getInitialState: function(){
        return {
            delivery: moment(),
            installation: moment()
        }
    },
    onChangeDelivery:function(e){
        var val = e.target.value;
        var self = this;
        this.setState({
            delivery: moment(val)
        },function(){
            self.props.onChange(self.state)
        });
    },
    onChangeInstallation: function(e){
        var val = e.target.value;
        var self = this;
        this.setState({
            installation: moment(val)
        },function(){
            self.props.onChange(self.state)
        });
    },
    componentDidMount: function(){
    },
    render: function(){
        var state = this.state;
        return (
            <div className="edit_userinfo">
                <h4 className="list-title">
                    <span className="list-title__text">送装时间：</span>
                </h4>
                <div className="mb10">
                    <label className="fl">送货时间：</label>
                    <input className="w3c-date-input" type="date" onChange={this.onChangeDelivery} value={this.state.delivery.format('YYYY-MM-DD')} />
                </div>
                <div className="mb10">
                    <label className="fl">安装时间：</label>
                    <input className="w3c-date-input" type="date" onChange={this.onChangeInstallation} value={this.state.installation.format('YYYY-MM-DD')} />
                </div>
            </div>
        )
    }
});

var CCOModalSelectDelivery = React.createClass({
    getInitialState: function(){
        return {
            selectDelivery: 1
        }
    },
    onChangeDelivery: function(e){
        var val = e.target.value;
        var self = this;
        this.setState({
            selectDelivery: parseInt(val)
        },function(){
            self.props.onChange(self.state)
        })
    },
    render: function(){
       return (
           <div>
               <h4 className="list-title">
                   <span className="list-title__text">运费：</span>
               </h4>
               <div>
                   <Radio onChange={this.onChangeDelivery} inline defaultChecked name="delivery_radio" value="1">免运费</Radio>
                   <Radio onChange={this.onChangeDelivery} inline name="delivery_radio" value="2">用户承担单程运费</Radio>
                   <Radio onChange={this.onChangeDelivery} inline name="delivery_radio" value="3">用户承担往返运费</Radio>
               </div>
           </div>
       )
    }
});

var CCOModalSelectInstall = React.createClass({
    getInitialState: function(){
        return {
            selectInstall: 1
        }
    },
    onChangeInstall: function(e){
        var val = e.target.value;
        var self = this;
        this.setState({
            selectInstall: parseInt(val)
        },function(){
            self.props.onChange(self.state)
        })
    },
    render: function(){
        return (
            <div>
                <h4 className="list-title">
                    <span className="list-title__text">安装费：</span>
                </h4>
                <div>
                    <Radio onChange={this.onChangeInstall} inline defaultChecked name="install_radio" value="1">免安装费</Radio>
                    <Radio onChange={this.onChangeInstall} inline name="install_radio" value="2">用户承担安装费</Radio>
                </div>
            </div>
        )
    }
});

var CCOModalTotal = React.createClass({
    render: function(){
        return (
            <div className="totalDiv">
                <Grid>
                    <Row className='hidden-print'>
                        <Col xs={8}>
                        </Col>
                        <Col xs={4}>
                            <Table width="100%">
                                <tr>
                                    <td width="100" style={{textAlign: "right"}}>运费：</td>
                                    <td style={{textAlign: "left"}}>￥111</td>
                                </tr>
                                <tr>
                                    <td width="100" style={{textAlign: "right"}}>安装费：</td>
                                    <td style={{textAlign: "left"}}>￥111</td>
                                </tr>
                                <tr>
                                    <td width="100" style={{textAlign: "right"}}>总计：</td>
                                    <td style={{textAlign: "left"}}>￥111</td>
                                </tr>
                            </Table>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
})

var CreateCsOrderModal = React.createClass({
    getInitialState: function(){
        var detail = Store().detail;
        return {
            address: {
                memberId: detail.member_id,
                addressId: null,
                consignee: detail['name'],
                mobile: detail['mobile'],
                address: detail['address'],
                place: {
                    region:[],
                    province:{
                        id: detail['province']['id'],
                        name: detail['province']['name']
                    },
                    city:{
                        id: detail['city']['id'],
                        name: detail['city']['name']
                    },
                    district:{
                        id: detail['district']['id'],
                        name: detail['district']['name']
                    }
                }
            },
            time: {
                delivery: moment(),
                installation: moment()
            },
            selectDelivery: 1,
            selectInstall:1
        }
    },
    onChangeAddress: function(address){
        var self = this;
        var state = this.state.address;
        state = address;
        this.setState(state, function(){
            self.props.onChange(self.state);
        });
    },
    onChangeDeliveryTime: function(time){
        var self = this;
        var state = this.state.time;
        state = time;
        this.setState(state, function(){
            self.props.onChange(self.state);
        });
    },
    onChangeSelectDelivery: function(selectDelivery){
        var self = this;
        var state = this.state.selectDelivery;
        state = selectDelivery;
        this.setState(state, function(){
            self.props.onChange(self.state);
        });
    },
    onChangeSelectInstall: function(selectInstall){
        var self = this;
        var state = this.state.selectInstall;
        state = selectInstall;
        this.setState(state, function(){
            self.props.onChange(self.state);
        });
    },
    componentDidMount: function() {
        this.props.onChange(this.state);
    },
    render: function(){
        return (
            <div className="cs_modalbox">
                <CCOModalTitle />
                <CCOModalGoodList />
                <CCOModalAddress onChange={this.onChangeAddress} />
                <CCOModalDeliveryTime onChange={this.onChangeDeliveryTime} />
                <CCOModalSelectDelivery onChange={this.onChangeSelectDelivery} />
                <CCOModalSelectInstall onChange={this.onChangeSelectInstall} />

            </div>
        )
    }
});

/**
 * === 创建换货订单Model end ====
 */

var TrList = React.createClass({
    render: function(){
        var detail = Store().detail;
        return (
            <tr>
                <td></td>
                <td>{detail['type']}</td>
                <td>{detail['goods_amount']}</td>
                <td>{detail['reason']}</td>
            </tr>
        )
    }
});

var TrUserList = React.createClass({
    render: function(){
        var detail = Store().detail;
        var getAddress = function (detail) {
            var key = ['province', 'city', 'district']
            ,   address = [];

            for (var i = 0, item; i < key.length; i++) {
                item = detail[key[i]];

                address.push(item ? item.name : '');
            }
            address.push(detail.address);

            return address.join('');
        }
        return (
            <tr>
                <td></td>
                <td>{detail['name']}</td>
                <td>{detail['mobile']}</td>
                <td>{ getAddress(detail) }</td>
            </tr>
        )
    }
});

var Widget = React.createClass({
    mixins:[ModalMixins],
    onPass: function(){
        var detail = Store().detail;
        Sp.confirm('确认要修改状态?',function(){
            var data = {
                audit_id: 2,
                status_id: 2,
                member_id: detail.member_id
            }
            Actions.onUpAfterSales(data);
        });
    },
    onUnPass: function(){
        var detail = Store().detail;
        Sp.confirm('确认要修改状态?',function(){
            var data = {
                audit_id:3,
                status_id: 2,
                member_id: detail.member_id
            }
            Actions.onUpAfterSales(data);
        });
    },
    onCancal: function(){
        var detail = Store().detail;
        Sp.confirm('确认要修改状态?',function(){
            var data = {
                status_id:5,
                member_id: detail.member_id
            }
            Actions.onUpAfterSales(data);
        });
    },
    createCsOrder: function(){

        var self = this;
        var change = function(res){
            self.setState(res);
        }

        var model = this.showModal( <CreateCsOrderModal onChange={change} className="createCsOrderModal" /> , '创建换货订单', function(){
            // 创建收货地址
            Actions.onCreateAddress(self.state.address,function(res){
                var address_data = res.data;
                var detail = Store().detail;
                // 创建换货订单
                Actions.onCreateAftersalesOrder({
                    member_address_id: address_data.id,
                    reserve_delivery_time: self.state.time.delivery.format('YYYY-MM-DD'),
                    reserve_installation_time: self.state.time.installation.format('YYYY-MM-DD'),
                    order_goods_id: detail.goods.id,
                    after_sales_id: detail.id,
                    member_id: detail.member_id,
                    delivery_type_id: self.state.selectDelivery,
                    installation_type_id: self.state.selectInstall
                },function(res){
                    if(res && res.code){
                        Actions.onGetDetail();
                    };
                });
            });

        });
        ModalManager.create(model);
    },
    render: function () {
        var detail = Store().detail;
        var picList = detail.upload.map(function(item){
            var path = item.attachment.media.full_path;
            return (
                <li key={item.id}>
                    <a target="_blank" href={path}><img src={path} width="80" /></a>
                </li>
            )
        });

        var passClass = React.addons.classSet({
          'mr10': true,
          'hidden': detail['status_id']>2
        });
        var cancalClass = React.addons.classSet({
          'mr10': true,
          'hidden': detail['status_id']>3
        });

        var exchangeOrderClass = React.addons.classSet({
          'mr10': true,
          'hidden': !detail['exchange_order']
        });

        return (
            <div className="mb20">
                <h4 className="list-title">
                    <span className="fl list-title__text">服务单明细：</span>
                </h4>
                <div className="clearfix">
                    <Table width="100%" className="bg-white mt10" striped>
                        <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="50"></th>
                                <th width="200">服务类型</th>
                                <th width="200">提交数量</th>
                                <th width="*">申请原因</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrList />
                        </tbody>
                    </Table>
                </div>
                <h5 className="list-title">
                    <span className="fl list-title__text">问题描述：</span>{detail.description}
                </h5>
                <h5 className="list-title">
                    <span className="fl list-title__text">图片信息：</span>
                </h5>
                <div className="cs-pic-list">
                    <ul className="clearfix">
                        {picList}
                    </ul>
                </div>
                <h5 className="list-title">
                    <span className="fl list-title__text">联系人信息：</span>
                </h5>
                <div className="clearfix">
                    <Table width="100%" className="bg-white mt10" striped>
                        <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="50"></th>
                                <th width="200">联系人姓名</th>
                                <th width="200">联系人电话</th>
                                <th width="*">取货地址</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrUserList />
                        </tbody>
                    </Table>
                </div>
                <h5 className="list-title">
                    <span className="fl list-title__text">审核操作：</span>
                </h5>
                <div className="clearfix">
                    <Button bsStyle='pink' className={passClass} onClick={this.onPass} onlyOnHover>通过</Button>
                    <Button bsStyle='pink' className={passClass} onClick={this.onUnPass} onlyOnHover>不通过</Button>

                    <Button bsStyle='darkgreen45' className={exchangeOrderClass} onClick={this.createCsOrder} outlined>创建换货订单</Button>

                    <Button bsStyle='darkgreen45' className={cancalClass} onClick={this.onCancal} outlined>取消售后</Button>
                </div>
            </div>
        )
    }
});

module.exports = Widget;
