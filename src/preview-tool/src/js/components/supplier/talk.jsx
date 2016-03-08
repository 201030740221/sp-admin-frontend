'use strict';

import BaseList from 'modules/page-components/base-list';
var Modal = antd.Modal;
var Popconfirm = antd.Popconfirm;
import Event from 'lite-flux/lib/event';
import BaseForm from 'modules/page-components/base-form';

var Form = React.createClass({
  handleSubmit: function (data) {
    var _this = this;
    var submitType = this.props.edit
      ? 'editTalkRecord'
      : 'addTalkRecord';
    var postData = data['0'];
    postData.supplier_id = this.props.id;
    if (this.props.edit) {
      postData.id = this.props.edit.id;
    }
    postData.negotiation_time = moment(postData.negotiation_time).format('YYYY-MM-DD HH:mm:ss');
    webapi.supplier[submitType](postData).then(function (res) {
      if (res.code === 0) {
        SP.message.success('保存成功！');
        _this.props.handleModal(false);
        Event.emit('baselist-refresh');
      } else {
        SP.message.success(res.msg);
      }
    });
  },
  render: function () {
    var _this = this;
    var defaultValue = this.props.edit
      ? this.props.edit
      : {};
    var data = [
      {
        formData: [
          {
            type: 'input',
            title: '创建人',
            key: 'creater',
            defaultValue: defaultValue.creater || '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'datepicker',
            title: '谈判时间时间',
            key: 'negotiation_time',
            defaultValue: defaultValue.negotiation_time || ''
          }, {
            type: 'textarea',
            title: '谈判目的与结果',
            key: 'negotiation_result',
            defaultValue: defaultValue.negotiation_result || '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'textarea',
            title: '参与人员',
            key: 'colleague',
            defaultValue: defaultValue.colleague || '',
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

    var actionButtons = [
      {
        title: '保 存',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (!isValid) {
              SP.message.error('填写有误！');
            } else {
              _this.handleSubmit(validData);
            }
          });
        }
      }, {
        title: '取消',
        onClick: function () {
          _this.props.handleModal(false);
        }
      }
    ];

    return (<BaseForm isNew={true} data={data} actionButtons={actionButtons}/>);
  }
});

var FormModal = React.createClass({
  getInitialState: function () {
    return {visible: false};
  },
  handleModal: function (v) {
    this.setState({visible: v});
  },
  render: function () {
    return (
      <span>
        <Modal
          title="添加拜访纪录"
          visible={this.state.visible}
          onCancel={this.handleModal.bind(null, false)}
          width={700}
          footer={false}>
          <Form id={this.props.id} handleModal={this.handleModal} edit={this.props.edit}/>
        </Modal>
        <span onClick={this.handleModal.bind(null, true)}>{this.props.children}</span>
      </span>
    );
  }
});

var Talk = React.createClass({
  getInitialState: function () {
    return {edit: null};
  },
  remove: function (id) {
    webapi.supplier.removeTalkRecord({id: id}).then(function (res) {
      if (res.code === 0) {
        SP.message.success('删除成功！');
        Event.emit('baselist-refresh');
      } else {
        SP.message.error('出错了！');
      }
    });
  },
  edit: function (id) {
    if (this._DATA) {
      this._DATA.map(function (item) {
        if (item.id === id) {
          this.setState({edit: item});
        }
      }.bind(this));
    }
  },
  render: function () {
    var _this = this;
    var columns = [
      {
        title: '谈判日期',
        dataIndex: 'negotiation_time'
      }, {
        title: '谈判目的与结果',
        dataIndex: 'negotiation_result'
      }, {
        title: '参与人员',
        dataIndex: 'colleague'
      }, {
        title: '创建日期',
        dataIndex: 'created_at'
      }, {
        title: '创建人',
        dataIndex: 'creater'
      }, {
        title: '操作',
        dataIndex: 'id',
        render: function (id) {
          return (
            <span>
              <FormModal id={_this.props.id} edit={_this.state.edit}>
                <a onClick={_this.edit.bind(null, id)}>编辑</a>
              </FormModal>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除这条纪录吗？" onConfirm={_this.remove.bind(null, id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    var actionButtons = [
      {
        title: '添加纪录',
        render: function () {
          return (
            <FormModal id={_this.props.id}>
              <botton className="ant-btn ant-btn-primary u-fr u-ml-10">添加纪录</botton>
            </FormModal>
          );
        }
      }
    ];

    var resolve = function (result) {
      _this._DATA = result.data.data;
      return result.data.data;
    };

    var rowKey = function (record) {
      return record.id;
    };

    var data = {
      columns: columns,
      url: webapi.supplier.talkListUrl,
      params: {
        supplier_id: this.props.id
      },
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (<BaseList table={data} actionButtons={actionButtons}/>);
  }
});

module.exports = Talk;
