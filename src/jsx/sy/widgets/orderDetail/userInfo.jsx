/** @jsx React.DOM */
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var actions = flux.actions.orderDetailActions;
// 地区选择组件
var PlaceSelector = require('../placeSelector/placeSelector.jsx');

var EditModal = React.createClass({
    getInitialState: function(){
        var props = this.props;
        var address = props.address;
        return {
            memberId: props.memberId,
            addressId: props.addressId,
            consignee: address['consignee'],
            mobile: address['mobile'],
            second_mobile: address['second_mobile'],
            address: address['address'],
            email: address['email'],
            place: {
                region:[],
                province:{
                    id: address['province_id'],
                    name: address['province_name']
                },
                city:{
                    id: address['city_id'],
                    name: address['city_name']
                },
                district:{
                    id: address['district_id'],
                    name: address['district_name']
                }
            }
        }
    },
    // 收货人
    onChangeConsignee: function(e){
        var val = e.target.value;
        var state = this.state;
        state.consignee = val;
        this.setState(state);
        this.props.onChange(state);
    },
    // 手机
    onChangeMobile: function(e){
        var val = e.target.value;
        var state = this.state;
        state.mobile = val;
        this.setState(state);
        this.props.onChange(state);
    },
    // 备用手机
    onChangeSecondMobile: function (e) {
        var val = e.target.value;
        var state = this.state;
        state.second_mobile = val;
        this.setState(state);
        this.props.onChange(state);
    },
    // 地区
    onChangePlace: function(res){
        var state = this.state;
        state.place = res;
        this.setState(state);
        this.props.onChange(state);
    },
    // 详细地址
    onChangeAddress: function (e) {
        var val = e.target.value;
        var state = this.state;
        state.address = val;
        this.setState(state);
        this.props.onChange(state);
    },
    // 邮箱
    onChangeEmail: function (e) {
        var val = e.target.value;
        var state = this.state;
        state.email = val;
        this.setState(state);
        this.props.onChange(state);
    },
    componentDidMount: function(){

    },
    render: function(){
        var state = this.state;
        return (
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
                <div className="mb10">
                    <label>备用手机：</label>
                    <Input
                        type='text'
                        id="j-user-model-second-phone"
                        onChange={this.onChangeSecondMobile}
                        value={state['second_mobile']}
                        placeholder='请输入备用手机'
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
                <div className="mb10">
                    <label>邮箱：</label>
                    <Input
                        type='text'
                        id="j-user-model-second-phone"
                        onChange={this.onChangeEmail}
                        value={state['email']}
                        placeholder='请输入邮箱'
                    />
                </div>
            </div>
        )
    }
});

var UserInfo = React.createClass({
    mixins:[ModalMixins],
    getInitialState: function(){
        return {
            modalData: null
        }
    },
    onShowModel: function(){
        var self = this;

        var props = this.props;
        var address = props['delivery']['member_address'];
        var onChange = function(res){
            self.setState({
                modalData : res
            });
        };
        var model = this.showModal( <EditModal onChange={onChange} addressId = {props['delivery']['member_address_id']} memberId = {props['member']['id']}  address={address} /> , '修改配送地址', function(){
            var modalData = self.state.modalData;
            if(modalData)
                actions.onUpdateOrderAddress(props['delivery']['id'],modalData);
        });
        ModalManager.create(model);

    },
    render: function () {
        var props = this.props;
        var address = props['delivery']['member_address'];
        var member = props['member'];
        var Store = flux.store("orderDetailStore").getState;
        return (
            <div className="userInfo clearfix">
                <h4 className="list-title">
                    <span className="fl list-title__text">用户信息：</span>
                </h4>
                <div className="mt20" style={{textAlign: "right"}}>
                    <Button onClick={this.onShowModel} bsStyle='warning'>修改</Button>
                </div>
                <div className="userInfoTable">
                    <Table width="100%" className="bg-white mt10" striped>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>收货人：</td>
                                <td>{address['consignee']}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>用户名：</td>
                                <td>{member['name']}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>手机：</td>
                                <td>{address['mobile']}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>备用手机：</td>
                                <td>{address['second_mobile']}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>收货地址：</td>
                                <td>{address['province_name']} {address['city_name']} {address['district_name']} {address['address']}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>邮箱：</td>
                                <td>{address['email']}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <h4 className="list-title" style={{height:'auto'}}>
                    <span className="fl list-title__text">用户备注：</span>
                    <span className="f14 text_overflow">{Store().detail.note || '无'}</span>
                    <span style={{clear:'both'}}></span>
                </h4>
                <h4 className="list-title" style={{height:'auto'}}>
                    <span className="fl list-title__text">渠道来源：</span>
                    <span className="f14 text_overflow">{Store().detail.order_source || '未知'}</span>
                    <span style={{clear:'both'}}></span>
                </h4>
            </div>
        )
    }
});

module.exports = UserInfo;
