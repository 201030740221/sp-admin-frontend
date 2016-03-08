'use strict';

import BaseList from 'modules/page-components/base-list';
import BaseForm from 'modules/page-components/base-form';
var message = antd.message;
var Popconfirm = antd.Popconfirm;
import Event from 'lite-flux/lib/event';

import BaseModalMixin from 'modules/page-components/modal-mixin';

const imageView = '?imageView2/2/w/80';

var Users = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [
    BaseModalMixin
  ],
  getInitialState() {
    return {record: null};
  },

  editRole(record) {
    this.context.router.push('/privilege/roles/edit/' + record.id);
  },
  // 删除
  removeUser(id) {
    let self = this;
    webapi.privilege.removeRolesDetail(id, {}).then(function (res) {
      if (res && !res.code) {
        Event.emit('baselist-refresh'); // 重刷数据
        message.success('删除该角色成功');
      } else {
        message.error(res.msg);
      }
    });
  },

  render: function () {

    let self = this;

    let columns = [
      {
        title: '角色',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.name}</span>
          );
        }
      }, {
        title: '描述',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.remark}</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.editRole.bind(self, record)}>编辑</a>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除这个用户吗？" onConfirm={self.removeUser.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '添加新角色',
        onClick: function (selectedRows) {
          self.editRole({id: 'create'});
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record, index) {
      return index;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.privilege.getPrivilegeRoles,
      params: { // 额外的请求参数
        //sku_status: 2,
        //product_category_id: 1
      },
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (
      <div>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
});

module.exports = Users;
