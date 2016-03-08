'use strict';

import React from 'react';
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
            placeholder: '请输入名称',
            tips: ''
          }
        ]
      }
    ];

    if (this.props.type === 2) {
      data[0].formData.push({
        type: 'input',
        title: 'ClassName',
        key: 'fn_class',
        defaultValue: record.fn_class || '',
        placeholder: '请输入ClassName',
        tips: ''
      });
    }

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
        title: '确定',
        onClick: (validator) => {
          validator((isValid, validData) => {
            if (isValid) {
              validData = validData[0];

              // 如果标题为空
              if (!validData.name) {
                SP.message.error('名称不能为空');
                return;
              }

              var postData = {
                name: validData.name,
                type: this.props.type
              };

              // 如果标题为空
              if (this.props.type === 2 && !validData.fn_class) {
                SP.message.error('ClassName不能为空');
                return;
              }

              postData.fn_class = validData.fn_class;

              if (this.props.record && this.props.record.id) {
                // 编辑
                webapi.tags.tag.update(this.props.record.id, postData).then((res) => {
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
                webapi.tags.tag.add(postData).then((res) => {
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
      title: '编辑标签',
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
