'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';

const Selector = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {},
  updateData(record) {
    let self = this;

    let data = [
      {
        formData: [
          {
            type: 'input',
            title: '供方型号',
            key: 'supplier_sn',
            defaultValue: record.supplier_sn,
            placeholder: '请输入供方型号',
            tips: ''
          }, {
            type: 'input',
            title: '包装数量',
            key: 'pieces',
            defaultValue: record.pieces,
            placeholder: '请输入包装数量',
            tips: ''
          }, {
            type: 'input',
            title: '产品尺寸',
            key: 'product_size',
            defaultValue: record.product_size,
            placeholder: '请输入产品尺寸',
            tips: ''
          }, {
            type: 'input',
            title: '包装尺寸',
            key: 'pack_size',
            defaultValue: record.pack_size,
            placeholder: '请输入包装尺寸',
            tips: ''
          }, {
            type: 'input',
            title: '体积',
            key: 'dimension',
            defaultValue: record.dimension,
            placeholder: '请输入体积',
            tips: ''
          }, {
            type: 'input',
            title: '重量',
            key: 'weight',
            defaultValue: record.weight,
            placeholder: '请输入重量',
            tips: ''
          }, {
            type: 'input',
            title: '成本价(不含税)',
            key: 'cost_without_tax',
            defaultValue: record.cost_without_tax,
            placeholder: '请输入成本价(不含税)',
            tips: ''
          }, {
            type: 'input',
            title: '成本价(含税)',
            key: 'cost_with_tax',
            defaultValue: record.cost_with_tax,
            placeholder: '请输入成本价(含税)',
            tips: ''
          }
        ]
      }
    ];

    self.setState({data: data});
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.updateData(nextProps.record);
    }
  },
  render: function () {
    let self = this;

    let actionButtons = [
      {
        title: ' 确 定 ',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {

              var postData = {};
              delete validData.fieldError;

              for (var key in validData) {
                postData = $.extend(postData, validData[key]);
              }

              webapi.erp.editProductSku(self.props.record.id, postData).then(function (res) {
                if (res && !res.code) {
                  SP.message.success('修改成功');
                  Event.emit('baselist-refresh');
                  self.props.setModalVisible(false);
                } else {
                  SP.message.error(res.msg);
                }
              });

            }
          });
        }
      }
    ];

    let modalProps = {
      title: (this.props.record && this.props.record.attributeName) || '编辑SKU',
      component: <BaseForm isNew={true} data={this.state.data} actionButtons={actionButtons}/>,
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
