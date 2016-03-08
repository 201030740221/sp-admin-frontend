'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

const Selector = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {visible: false, data: []};
  },
  onShowModal: function () {
    this.setModalVisible(true);
  },
  componentDidMount: function () {
    let self = this;
    let data = [];
    let itemData = {
      formData: []
    };
    webapi.erp.getAttributeGroup({product_id: this.props.productId}).then(function (res) {
      if (res && !res.code) {
        res.data.map(function (item) {
          let attrItem = {
            type: 'checkbox',
            title: item.name,
            key: '' + item.id,
            defaultValue: '',
            placeholder: '',
            tips: '',
            values: []
          };

          item.value.map(function (val) {
            attrItem.values.push({
              name: val.attribute_value,
              key: '' + val.id,
              disabled: false
            });
          });

          itemData.formData.push(attrItem);
        });

        data.push(itemData);

        self.setState({data: data});
      } else {
        SP.message.error(res.msg);
      }
    });
  },
  render: function () {
    let self = this;

    let selectBtn = (
      <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={this.onShowModal}>添加SKU</button>
    );

    let actionButtons = [
      {
        title: ' 生成SKU ',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {
              let attribute = {};
              _.mapKeys(validData[0], function (value, key) {

                if (value) {
                  attribute[key] = value;
                }
                //return key + value;
              });

              if (isEmptyObject(attribute)) {
                SP.message.error('选择不能为空');
              } else {
                webapi.erp.addProductSku({product_id: self.props.productId, attribute: attribute}).then(function (res) {
                  if (res && !res.code) {
                    Event.emit('baselist-refresh');
                    SP.message.success('生成 sku 成功');
                    self.setModalVisible(false);
                  } else {
                    SP.message.error(res.msg);
                  }
                });
              }

              //console.log(validData);
            }
          });
        }
      }
    ];

    let modalProps = {
      title: '选择规格组合',
      component: <BaseForm isNew={true} data={this.state.data} actionButtons={actionButtons}/>,
      setModalVisible: this.setModalVisible,
      visible: this.state.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return (
      <span>
        <BaseModal {...modalProps}/>
        {selectBtn}
      </span>
    );
  }
});

module.exports = Selector;
