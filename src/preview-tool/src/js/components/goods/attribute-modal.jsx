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
            defaultValue: record && record.attribute && record.attribute.name || '',
            placeholder: '请输入属性或者规格名称',
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
        title: ' 确定 ',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {
              var validData = validData[0];

              // 如果标题为空
              if (!validData.name) {
                SP.message.error('名称不能为空');
                return;
              }

              var postData = {
                name: validData.name,
                type: self.props.typeId,
                remarks: ''
              };

              if (self.props.record && self.props.record.attribute) {

                postData.id = self.props.record.attribute.id;
                // 编辑
                webapi.goods.updateAttribute(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('编辑成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('编辑失败:' + res.msg);
                  }
                });
              } else {
                postData.group_id = self.props.groupId;
                // 新增
                webapi.goods.addAttribute(postData).then(function (res) {
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
      title: '编辑规格属性',
      component: (<BaseForm actionButtons={actionButtons} data={this.state.data}/>),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 500,
      bottomBar: false // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
