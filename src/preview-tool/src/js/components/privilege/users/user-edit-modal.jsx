'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';

var Selector = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {},
  updateData(record) {

    let self = this;
    let roles = record.roles || [];
    let role_id = null;
    roles.forEach(function (item, key) {
      if (key === 0) {
        role_id = item.id;
      }
    });

    let data = [
      {
        formData: [
          {
            type: 'input',
            title: '用户名',
            key: 'name',
            defaultValue: record.name,
            placeholder: '请输入用户名',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '邮箱',
            key: 'email',
            defaultValue: record.email,
            placeholder: '请输入邮箱',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'password',
            title: '设置密码',
            key: 'password',
            defaultValue: '',
            placeholder: '',
            tips: ''
          }, {
            type: 'password',
            title: '确认密码',
            key: 'sure_password',
            defaultValue: '',
            placeholder: '',
            tips: ''
          }, {
            type: 'select',
            title: '角色选择',
            key: 'role_id',
            defaultValue: role_id,
            placeholder: '',
            values: record.roleData,
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
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
    let record = this.props.record;

    let actionButtons = [
      {
        title: ' 确 定 ',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {
              console.log(validData, '0000');
              var postData = {};
              delete validData.fieldError;

              for (var key in validData) {
                postData = $.extend(postData, validData[key]);
              }

              if (postData.password !== postData.sure_password) {
                SP.message.error('两次密码输入不同！');
                return false;
              }
              if (!postData.password) {
                delete postData.password;
              }

              delete postData.sure_password;

              let type = self.props.record.type;
              let request_id = null;
              if (type === 'edit') {
                request_id = record.id;
              }

              if (postData.role_id) {
                postData.role_id = +postData.role_id;
              }

              if (type === 'edit') {
                webapi.privilege.updatePrivilegeUser(request_id, postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('修改成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error(res.msg);
                  }
                });
              } else {
                webapi.privilege.createPrivilegeUser(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('添加成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    if (res.data.errors) {
                      if (res.data.errors.email) {
                        SP.message.error(res.data.errors.email);
                      }
                    }
                  }
                });
              }

            }
          });
        }
      }
    ];

    let modalProps = {
      title: this.props.record.type === 'edit'
        ? '编辑后台用户信息'
        : '添加后台用户',
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
