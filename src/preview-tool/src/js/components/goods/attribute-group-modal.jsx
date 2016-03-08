'use strict';

import BaseModal from 'modules/page-components/base-modal';
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
            title: '名称',
            key: 'name',
            defaultValue: record.name || '',
            placeholder: '请输入属性组名称',
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
        title: '确 定',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {
              let _validData = validData[0];

              // 如果标题为空
              if (!_validData.name) {
                SP.message.error('名称不能为空');
                return;
              }

              let postData = {
                name: _validData.name,
                type: self.props.typeId
              };

              if (self.props.record && self.props.record.id) {
                postData.id = self.props.record.id;
                // 编辑
                webapi.goods.updateAttributeGroup(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('编辑成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('编辑失败:' + res.msg);
                  }
                });
              } else {
                // 新增
                webapi.goods.addAttributeGroup(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('添加成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('添加失败:' + res.msg);
                  }
                });
              }
            }
          });
        }
      }
    ];

    let modalProps = {
      title: '编辑属性组',
      component: (<BaseForm data={this.state.data} actionButtons={actionButtons}/>),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 500,
      bottomBar: false // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
