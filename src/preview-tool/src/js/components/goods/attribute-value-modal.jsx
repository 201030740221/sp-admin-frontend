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
            defaultValue: record.attribute_value || '',
            placeholder: '请输入值名称',
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
                attribute_value: validData.name
              };

              if (self.props.record && self.props.record.id) {

                postData.id = self.props.record.id;
                // 编辑
                webapi.goods.updateAttributeValue(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('编辑成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('编辑失败:' + res.msg);
                  }
                });
              } else {
                postData.attribute_id = self.props.attributeId;
                postData.template_type = 0;
                postData.sort = 0;
                // 新增
                webapi.goods.addAttributeValue(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('添加成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error(res.msg);
                  }
                });
              }

            }
          });
        }
      }
    ];

    if (self.props.record && self.props.record.id) {
      actionButtons.push({
        title: '删除',
        render: function () {
          function confirm() {
            webapi.goods.removeAttributeValue({id: self.props.record.id}).then(function (res) {
              if (res && !res.code) {
                SP.message.success('删除成功');
                Event.emit('baselist-refresh');
                self.props.setModalVisible(false);
              } else {
                SP.message.error(res.msg);
              }
            });
          }
          return (
            <antd.Popconfirm key={"del-attr"} title="确定要删除这个值吗？" onConfirm={confirm}>
              <a href="#">删除</a>
            </antd.Popconfirm>
          );
        }
      });
    }

    let modalProps = {
      title: '编辑值',
      component: (<BaseForm data={this.state.data} actionButtons={actionButtons}/>),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 500,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
