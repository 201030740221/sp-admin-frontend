import Event from 'lite-flux/lib/event';
import BaseModalMixin from 'modules/page-components/modal-mixin';
var UserInfoModal = require('../modal/user-info-modal');

var thisComponent = React.createClass({
  mixins: [ BaseModalMixin ],
  getInitialState() {
      return {
          orderData: this.props.orderData,
          visible: false,
          record: {}
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  editHandle: function () {
      this.setState({
          visible: true,
          record: this.state.orderData
        });
    },
  render: function ()  {

      let self = this;
      let orderData = this.state.orderData;
      let delivery = orderData.delivery || {};
      let member_address = delivery.member_address || {};
      let member = orderData.member || {};

      return (
            <div className='u-mt-50'>

                <UserInfoModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible} />

                <button type="button" style={{float:'right', marginTop:'13'}} className="ant-btn ant-btn-primary ant-btn-lg" onClick={self.editHandle}>修改</button>
                <h2 className='u-mb-30'>用户信息：</h2>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">收货人：</div>
                    <div className="col-14 f14">{member_address.consignee}</div>
                </div>
                <div className='row section_list'>
                    <div className="col-8 f14">用户名：</div>
                    <div className="col-14 f14">{member.name}</div>
                </div>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">手机：</div>
                    <div className="col-14 f14">{member_address.mobile}</div>
                </div>
                <div className='row section_list'>
                    <div className="col-8 f14">备用手机：</div>
                    <div className="col-14 f14">{member_address.second_mobile}</div>
                </div>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">收货地址：</div>
                    <div className="col-14 f14">{member_address.province_name} {member_address.city_name} {member_address.district_name} {member_address.address}</div>
                </div>
                <div className='row section_list '>
                    <div className="col-8 f14">邮箱：</div>
                    <div className="col-14 f14">{member_address.email}</div>
                </div>
                <h2 className='u-mt-15 u-mb-10'>用户备注：{orderData.note || '无'}</h2>
                <h2 className='u-mb-10'>渠道来源：{orderData.order_source || '未知'}</h2>
            </div>
        );
    }

});

module.exports = thisComponent;
