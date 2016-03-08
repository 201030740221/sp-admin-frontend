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

    let invoice = record.invoice || {};
    let express = invoice.express || {};
    console.log(record, '+++');

    let title_type = null;

    if (invoice.title_type === 1) {
      title_type = {
        type: 'input',
        title: '公司名称',
        key: 'company_name',
        defaultValue: invoice.company_name,
        placeholder: '请输入公司名',
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      };
    }else {
      title_type = {
        type: 'hidden',
        key: 'company_name'
      };
    }

    let data = [{
      formData: [{
        title: '类型',
        type: 'select',
        key: 'title_type',
        defaultValue: invoice.title_type ? invoice.title_type : '0',
        placeholder: '',
        values: [{
          name: '个人',
          key: 0,
          disabled: false
        }, {
          name: '公司',
          key: 1,
          disabled: false
        }],
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        },
        onChange: function (val) {
          let record = self.state.record;
          record.invoice = record.invoice || {};
          record.invoice.title_type = +val;
          self.setState({
            record: record
          });
        }

      }, title_type, {
        type: 'custom',
        title: '是否已开发票',
        key: '',
        defaultValue: '',
        placeholder: '',
        render: function () {
          return (
                        <p className="ant-form-text">{invoice.invoice_tax_no ? '是' : '否'}</p>
                    );
        }
      }, {
        type: 'input',
        title: '发票单号',
        key: 'invoice_tax_no',
        defaultValue: invoice.invoice_tax_no,
        placeholder: '请输入发票单号',
        tips: '',
        validator: {
          required: true,
          message: {
              required: '必填'
            }
        }
      }, {
        type: 'select',
        title: '快递公司',
        key: 'partner_id',
        defaultValue: express.partner_id || 2,
        placeholder: '',
        values: [{
            name: '顺丰快递',
            key: 2,
            disabled: false
          }],
        tips: '',
        validator: {
            required: true,
            message: {
                required: '必填'
              }
          }
      }, {
          type: 'input',
          title: '快递单号',
          key: 'express_no',
          defaultValue: express.express_no,
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
            console.log(validData, '0000');

            let postData = {};
            for (var key in validData) {
              postData = $.extend(postData, validData[key]);
            }

            let record = self.state.record;
            let invoice = record.invoice;

            let request_data = {
              id: record.invoice_id,
              member_id: record.member_id,
              type: invoice.type || 0,
              content_type: invoice.content_type || 0,
              title_type: postData.title_type,
              company_name: postData.company_name,
              invoice_tax_no: postData.invoice_tax_no
            };

            if (invoice.id) { /*已有发票的情况下*/
              webapi.order.updateInvoice(request_data).then(function (res) {

                  let invoiceId = res.data.id;
                  if (res && !res.code) {

                      let _data1 = {
                          id: invoice.id,
                          print: 1
                        };
                      webapi.order.updateInvoicePrint(_data1).then(function (_res_data) {
                          if (_res_data && !_res_data.code) {

                            }else {
                              SP.message.error(_res_data.msg);
                            }
                        });

                      let _data2 = {
                          invoice_id: invoiceId,
                          partner_id: postData.partner_id,
                          express_no: postData.express_no
                        };
                      webapi.order.createInvoiceExpress(_data2).then(function (_res) {
                          if (_res && !_res.code) {
                              SP.message.success('更新成功');
                              self.props.setModalVisible(false);
                              self.context.router.push('/order/edit/' + record.id + '/invoiceId/' + invoiceId);
                            }else {
                              SP.message.error(_res.msg);
                            }
                        });

                    }else {
                      SP.message.error(res.msg);
                    }
                });
            }else { /*没开发票的情况*/

              delete request_data.id;
              request_data.order_id = record.id;

              webapi.order.createInvoice(request_data).then(function (res) {

                  let invoice_id = res.data.id;
                  if (res && !res.code) {

                      let _data3 = {
                          invoice_id: invoice_id,
                          partner_id: postData.partner_id,
                          express_no: postData.express_no
                        };
                      webapi.order.createInvoiceExpress(_data3).then(function (_res) {
                          if (_res && !_res.code) {
                              SP.message.success('更新成功');
                              self.props.setModalVisible(false);
                              self.context.router.push('/order/edit/' + record.id + '/invoiceId/' + invoice_id);
                            }else {
                              SP.message.error(_res.msg);
                            }
                        });

                    }else {
                      SP.message.error(res.msg);
                    }
                });
            }

          }
        });
      }
    }];

    let modalProps = {
      title: '发票信息',
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
