import { Select } from 'antd';
const Option = Select.Option;
var Icon = antd.Icon;

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
      record: this.props.record || {},
      loading: true
    };
  },
  componentDidMount: function () {
    let self = this;
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        record: nextProps.record,
        loading: false
      });
    }
  },
  render: function () {

    if (this.state.loading) {
      return (
        <p>
          <Icon type="loading" /> 加载数据中...
        </p>
      );
    }

    let self = this;
    let record = this.state.record;

    let express_info = [
      {
        name: '无需物流',
        key: 0,
        disabled: false
      },
      {
        name: '卡行天下',
        key: 1,
        disabled: false
      },
      {
        name: '顺丰快递',
        key: 2,
        disabled: false
      },
      {
        name: '德邦物流',
        key: 3,
        disabled: false
      },
      {
        name: '申通快递',
        key: 4,
        disabled: false
      },
      {
        name: '圆通快递',
        key: 5,
        disabled: false
      },
      {
        name: '中通快递',
        key: 6,
        disabled: false
      },
      {
        name: '韵达快递',
        key: 7,
        disabled: false
      },
      {
        name: '汇通快递',
        key: 8,
        disabled: false
      }
    ];

    let data = [{
      formData: [{
        title: '快递公司',
        type: 'select',
        key: 'partner_id',
        defaultValue: record.partner_id?record.partner_id:0,
        placeholder: '',
        values: express_info,
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      }, {
        type: 'input',
        title: '运单号',
        key: 'express_no',
        defaultValue: record.express_no,
        placeholder: '请输入快递单号',
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

            let record = self.state.record;
            let _data = {
              order_id: record.order_id,
              partner_id: postData.partner_id,
              express_no: postData.express_no
            };
            let _id = record.id;
            let orderId = record.order_id;

            if (record.isNew) {
              webapi.order.createExpress(_data).then(function (_res_data) {
                  if (_res_data && !_res_data.code) {
                      self.props.setModalVisible(false);
                      self.context.router.push('/order/edit/' + orderId + '/invoiceId/see');
                    }else {
                      SP.message.error(_res_data.msg);
                    }
                });
            }else {
              webapi.order.updateExpress(_id, _data).then(function (_res_data) {
                  if (_res_data && !_res_data.code) {
                      self.props.setModalVisible(false);
                      self.context.router.push('/order/edit/' + orderId + '/invoiceId/see');
                    }else {
                      SP.message.error(_res_data.msg);
                    }
                });
            }

          }
        });
      }
    }];

    let modalProps = {
      title: '配送方式',
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
