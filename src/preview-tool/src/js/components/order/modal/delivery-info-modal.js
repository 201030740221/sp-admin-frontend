import { Select } from 'antd';
const Option = Select.Option;

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';

var Selector = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      record: this.props.record || {}
    };
  },
  componentDidMount: function () {
    let self = this;
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        record: nextProps.record
      });
    }
  },
  render: function () {

    let self = this;
    let record = this.state.record;
    let delivery = record.delivery || {};

    let data = [{
      formData: [{
        type: 'datepicker',
        title: '送货时间',
        key: 'reserve_delivery_time',
        defaultValue: delivery.reserve_delivery_time,
        placeholder: '请输入送货时间',
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      }, {
        type: 'datepicker',
        title: '安装时间',
        key: 'reserve_installation_time',
        defaultValue: delivery.reserve_installation_time,
        placeholder: '请输入安装时间',
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      }]
    }];

    let actionButtons = [{
      title: ' 确 定 ',
      onClick: function (validator) {
        validator(function (isValid, validData) {
          if (isValid) {

            let postData = {};
            for (var key in validData) {
              postData = $.extend(postData, validData[key]);
            }
            console.log(postData, 'postData');

            let record = self.state.record;
            let _data = {
              reserve_delivery_time: postData.reserve_delivery_time,
              reserve_installation_time: postData.reserve_installation_time
            };
            let _id = record.id;

            webapi.order.updateDelivery(_id, _data).then(function (_res_data) {
              if (_res_data && !_res_data.code) {
                  self.props.setModalVisible(false);
                  self.context.router.push('/order/edit/' + _id + '/invoiceId/see');
                }else {
                  SP.message.error(_res_data.msg);
                }
            });

          }
        });
      }
    }];

    let modalProps = {
      title: '送装时间',
      component: <BaseForm
                isNew = {true}
                data = {data}
                actionButtons={actionButtons}
                />,
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps} />;
  }
});

module.exports = Selector;
