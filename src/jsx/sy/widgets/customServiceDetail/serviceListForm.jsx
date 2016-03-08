/** @jsx React.DOM */

var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;
var placeSelector = require('../placeSelector/placeSelector.jsx');
var moment = require('moment');
var DatePicker = require('../../widgets/datepicker/datepicker.jsx');

var Widget = React.createClass({
    getInitialState: function(){
        return {
            mobile: null,
            name: null,
            address: null,
            type_id: null,
            place: null,
            refund: null,
            return_mode: null,
            booked_at: null
        }
    },
    onChangeMobile: function(e){
        var val = e.target.value;
        var state = this.state;
        state.mobile = val;
        Actions.onChangeMobile(val);
        this.setState(state);
    },
    onChangeName: function(e){
        var val = e.target.value;
        var state = this.state;
        state.name = val;
        Actions.onChangeName(val);
        this.setState(state);
    },
    onChangeAddress: function(e){
        var val = e.target.value;
        var state = this.state;
        state.address = val;
        Actions.onChangeAddress(val);
        this.setState(state);
    },
    onChangeBookTime: function(date){
        var state = this.state;
        state.booked_at = date;
        Actions.onChangeBookTime(date);
        this.setState(state);
    },
    onChangeType: function(e){
        var val = e.target.value;
        var state = this.state;
        state.type_id = val;
        Actions.onChangeType(val);
        this.setState(state);
    },
    onChangeRefund: function(e){
        var val = e.target.value;
        var state = this.state;
        state.refund = val;
        Actions.onChangeRefund(val);
        this.setState(state);
    },
    onChangeReturnMode: function(e){
        var val = e.target.value;
        var state = this.state;
        state.return_mode = val;
        Actions.onChangeReturnMode(val);
        this.setState(state);
    },
    onSubmit: function(){
        var detail = Store().detail;

        function isPhone(val){
            return /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(val)
        }

        var data = {};
        if(this.state.mobile){
            if(!isPhone(isPhone)){
                alert('手机格式不正确');
                return false;
            }else{
                data.mobile =  this.state.mobile
            }
        }

        if(this.state.name){
            data.name =  this.state.name
        }

        if(this.state.address){
            data.address =  this.state.address
        }

        if(this.state.type_id){
            data.type_id =  this.state.type_id
        }

        if(this.state.place){
            if(this.state.place.province.id!=0)
                data.province_id =  this.state.place.province.id
            if(this.state.place.city.id!=0)
                data.city_id =  this.state.place.city.id
            if(this.state.place.district.id!=0)
                data.district_id =  this.state.place.district.id
        }

        if(this.state.refund){
            data.refund = this.state.refund
        }

        if(this.state.return_mode){
            data.return_mode = this.state.return_mode
        }

        if(this.state.booked_at){
            data.booked_at = this.state.booked_at.format('YYYY-MM-DD')
        }

        Actions.onUpAfterSales(data);

    },
    // 地区
    onChangePlace: function(res){
        var state = this.state;
        state.place = res;
        this.setState(state);
    },
    componentDidMount: function(){

    },
    render: function () {
        var detail = Store().detail;
        var self = this;
        var place = function(){
            if(Store().place.province.id!=0){
                return (
                    <placeSelector place={Store().place} onChange={self.onChangePlace} />
                )
            }
            return '';
        };
        var booked_at = Store().booked_at;

        if(detail['refund']==null){
            return (
                <div className="mb20">
                    <h4 className="list-title">
                        <span className="fl list-title__text">目前没有售后信息</span>
                    </h4>
                </div>
            )
        }else{
            return (
                <div className="mb20">
                    <h4 className="list-title">
                        <span className="fl list-title__text">售后信息：</span>
                    </h4>
                    <div className="clearfix">
                        <Form horizontal>
                            <FormGroup>
                                <Label sm={2}>退款详情</Label>
                                <Col sm={10}>
                                    <Input
                                        style={{width:300}}
                                        onChange={this.onChangeRefund}
                                        value={detail['refund']['total']}
                                        type='text'
                                        placeholder='退款详情'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>商品返回方式</Label>
                                <Col sm={10}>
                                    <Select
                                        value={detail['return_mode']}
                                        onChange={this.onChangeReturnMode}
                                        style={{width:300}}>
                                      <option value='0'>请选择</option>
                                      <option value='1'>用户自退</option>
                                      <option value='2'>上门取件</option>
                                    </Select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>商品处理方式</Label>
                                <Col sm={10}>
                                    <Select
                                        value={detail['type_id']}
                                        onChange={this.onChangeType}
                                        style={{width:300}}>
                                      <option value="1">上门换新</option>
                                      <option value="2">上门维护</option>
                                      <option value="3">退货处理</option>
                                    </Select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>预约取件时间</Label>
                                <Col sm={10}>
                                    <DatePicker
                                        key="bookTime"
                                        onChange={this.onChangeBookTime}
                                        dateFormat='YYYY-MM-DD'
                                        placeholderText='预约取件时间'
                                        selected={booked_at}>
                                    </DatePicker>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>收货地址</Label>
                                <Col sm={10}>
                                    {place()}
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>详细地址</Label>
                                <Col sm={10}>
                                    <Input
                                        style={{width:300}}
                                        type='text'
                                        onChange={this.onChangeAddress}
                                        value={detail['address']}
                                        placeholder='收货地址'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>联系人</Label>
                                <Col sm={10}>
                                    <Input
                                        style={{width:300}}
                                        type='text'
                                        onChange={this.onChangeName}
                                        value={detail['name']}
                                        placeholder='联系人'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label sm={2}>手机</Label>
                                <Col sm={10}>
                                    <Input
                                        style={{width:300}}
                                        type='text'
                                        onChange={this.onChangeMobile}
                                        value={detail['mobile']}
                                        placeholder='手机' />
                                </Col>
                            </FormGroup>
                            <Button onClick={this.onSubmit} lg bsStyle='primary'>确定</Button>
                        </Form>
                    </div>
                </div>
            )
        }

    }
});

module.exports = Widget;
