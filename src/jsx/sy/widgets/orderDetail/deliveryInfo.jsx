/** @jsx React.DOM */

var moment = require('moment');
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var actions = flux.actions.orderDetailActions;

var EditModal = React.createClass({
    getInitialState: function(){
        var delivery = this.props.delivery;
        var predict_delivery = this.props.predict_delivery;
        return {
            delivery: '',
            predict_delivery:'',
            installation: ''
        };
    },
    onChangeDelivery:function(e){
        var val = e.target.value;

        if(moment(val).format('X')-moment(this.props.mustBeginTime).format('X')<0){
            alert('不允许设置比'+this.props.mustBeginTime+'更早的时间!');
        }else{
            this.setState({
                delivery: val
            });
        }

    },
    onChangeInstallation: function(e){
        var val = e.target.value;

        if(moment(val).format('X')-moment(this.state.delivery).format('X')<0){
            alert('安装时间不能比送货时间早!');
        }else{
            this.setState({
                installation: val
            });
        }

    },
    componentDidMount: function(){
        var delivery = this.props.delivery,
            state = this.state;

        var reserve_delivery_time = (delivery.reserve_delivery_time!=='0000-00-00 00:00:00' && delivery.reserve_delivery_time) || this.props.mustBeginTime;
        var reserve_installation_time = (delivery.reserve_installation_time !=='0000-00-00 00:00:00' && delivery.reserve_installation_time) || this.props.mustBeginTime;

        state.delivery = moment(reserve_delivery_time).format('YYYY-MM-DD');
        state.installation = moment(reserve_installation_time).format('YYYY-MM-DD');

        this.setState(state);
    },
    render: function(){
        var state = this.state;
        return (
            <div className="edit_userinfo">
                <div className="mb10">
                    <label>送货时间：</label>
                    <Input
                         type='date'
                         id="j-delivery-model-delivery"
                         onChange={this.onChangeDelivery}
                         value={state['delivery']}
                         placeholder='请输入送货时间'
                    />
                </div>
                <div className="mb10">
                    <label>安装时间：</label>
                    <Input
                        type='date'
                        id="j-delivery-model-installation"
                        onChange={this.onChangeInstallation}
                        value={state['installation']}
                        placeholder='请输入安装时间'
                    />
                </div>
            </div>
        )
    }
});


var DeliveryInfo = React.createClass({
    mixins:[ModalMixins],
    getInitialState: function(){
        return {
            mustBeginTime: moment()
        };
    },
    onShowModel: function(){
        var self = this;
        if(self.props.orderId){
            $.ajax({
                url: Sp.config.host+'/api/order/orderPredictDelivery',
                method:"GET",
                data: {
                    "order_id": self.props.orderId
                },
                success: function(res){
                    if(res && res.code === 0){

                        self.setState({
                            mustBeginTime: res.data
                        });

                        var delivery = self.props.delivery;
                        var model = self.showModal( <EditModal mustBeginTime={self.state.mustBeginTime} delivery={delivery} /> , '修改送装时间', function(){
                            var delivery_val = $("#j-delivery-model-delivery").val(),
                                installation_val = $("#j-delivery-model-installation").val();
                            actions.onUpdateDelivery( delivery['member_address_id'],delivery_val,installation_val);
                        });
                        ModalManager.create(model);

                    }else{
                        //Sp.message('获得订单状态标签列表失败','error');
                    }
                }
            })
        }


    },
    componentDidMount: function(){

    },
    render: function () {
        if (this.props.isPureTextile) {
            return null;
        }
        
        var delivery = this.props.delivery;
        var predict_delivery = this.props.predict_delivery || {};
        var start = predict_delivery['start'] , end = predict_delivery['end'];
        var start_time = start.split(' ')[0],
            end_time = end.split(' ')[0];
        return (
            <div className="deliveryInfo clearfix">
                <h4 className="list-title">
                    <span className="fl list-title__text">送装时间：</span>
                </h4>
                <div className="mt20" style={{textAlign: "right"}}>
                    <Button onClick={this.onShowModel} bsStyle='warning'>修改</Button>
                </div>
                <div className="userInfoTable">
                    <Table width="100%" className="bg-white mt10" striped>
                        <tbody>
                            <tr>
                                <td width='50'></td>
                                <td width='200'>送货时间：</td>
                                <td>
                                    {delivery['reserve_delivery_time']=='0000-00-00 00:00:00'?'用户未指定':moment(delivery['reserve_delivery_time']).format('YYYY-MM-DD')}
                                    <span style={{color:'red',marginLeft:'50'}}>（ 可送货时间时间段： {start_time} 到  {end_time} ）</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>安装时间：</td>
                                <td>{delivery['reserve_installation_time']=='0000-00-00 00:00:00'?'用户未指定':moment(delivery['reserve_installation_time']).format('YYYY-MM-DD')}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
});

module.exports = DeliveryInfo;
