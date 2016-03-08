'use strict';

import moment from 'moment';
import Event from 'lite-flux/lib/event';
import BaseModalMixin from 'modules/page-components/modal-mixin';
var DeliveryInfoModal = require('../modal/delivery-info-modal');

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
      let predict_delivery = orderData.predict_delivery || {};
      var start = predict_delivery.start || '   ', end = predict_delivery.end || '   ';
      var start_time = start.split(' ')[0],
          end_time = end.split(' ')[0];

      if (!orderData.not_only_textile) {
          return null;
        }

      return (
            <div className='u-mt-50'>

                <DeliveryInfoModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible} />

                <button type="button" style={{float:'right'}} className="ant-btn ant-btn-primary ant-btn-lg" onClick={self.editHandle}>修改</button>
                <h2 className='u-mb-10'>送装时间：</h2>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">送货时间：</div>
                    <div className="col-14 f14">
                        {delivery.reserve_delivery_time==='0000-00-00 00:00:00' ? '用户未指定':moment(delivery.reserve_delivery_time).format('YYYY-MM-DD')}
                        <span style={{color:'red', marginLeft:'50'}}>（ 可送货时间时间段： {start_time} 到  {end_time} ）</span>
                    </div>
                </div>
                <div className='row section_list'>
                    <div className="col-8 f14">安装时间：</div>
                    <div className="col-14 f14">
                        {delivery.reserve_installation_time==='0000-00-00 00:00:00' ? '用户未指定':moment(delivery.reserve_installation_time).format('YYYY-MM-DD')}
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = thisComponent;
