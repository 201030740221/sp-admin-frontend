'use strict';

import BaseList from 'modules/page-components/base-list';
import BaseForm from 'modules/page-components/base-form';
var message = antd.message;
var Popconfirm = antd.Popconfirm;
import Event from 'lite-flux/lib/event';
var UserEditModal = require('./user-edit-modal');

var GoodsUploadModal = require('../../goods/goods-upload-modal');
import BaseModalMixin from 'modules/page-components/modal-mixin';

const imageView = '?imageView2/2/w/80';

var Users = React.createClass({
  mixins: [
    BaseModalMixin
  ],
  getInitialState() {
    return {visible: false, record: {}, roleData: []};
  },
  componentDidMount: function () {

    let self = this;
    webapi.privilege.getPrivilegeRoles({}).then(function (res) {
      if (res && !res.code) {

        let role = [];
        res.data = res.data || [];
        res.data.forEach(function (item, key) {
          role.push({name: item.name, key: item.id, disabled: false});
        });

        self.setState({roleData: role});
        message.success('获取角色成功');
      } else {
        message.error(res.msg);
      }
    });

  },

  editUser(type, record) {

    record.type = type;
    record.roleData = this.state.roleData;
    console.log(record, '..', type);

    this.setState({record: record, visible: true});
  },
  // 删除
  removeUser(id) {
    let self = this;
    webapi.privilege.removePrivilegeUser(id, {}).then(function (res) {
      if (res && !res.code) {
        Event.emit('baselist-refresh'); // 重刷数据
        message.success('删除该用户成功');
      } else {
        message.error(res.msg);
      }
    });
  },

  render: function () {

    let self = this;

    let columns = [
      {
        title: '用户名',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.name}</span>
          );
        }
      }, {
        title: '邮箱',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.email}</span>
          );
        }
      }, {
        title: '角色',
        dataIndex: '',
        render: function (text, record) {
          var roles = record.roles || [];
          return (
            <span>
              {roles.map(function (role) {
                return role.name;
              }).join(' | ')
}
            </span>
          );
        }
      }, {
        title: '头像',
        dataIndex: '',
        render: function (text, record) {
          return <span>暂不开放</span>;

          let ImgUrl = null;
          let pictureData = [];
          let dataId = [];

          // if(getValue(record,'goods_sku.has_cover')){
          //     dataId.push(getValue(record,'goods_sku.has_cover.id'));
          //     ImgUrl = <img width="50" src={getValue(record,'goods_sku.has_cover.media.full_path')+imageView} />
          //     pictureData.push({
          //         id: getValue(record,'goods_sku.has_cover.media.id'),
          //         url: getValue(record,'goods_sku.has_cover.media.full_path')
          //     })
          // }

          let params = {
            entity_type: 18,
            entity_id: record.id,
            type: 10
          };

          return (
            <GoodsUploadModal pictureData={pictureData} pictureLength={1} params={params}>
              {ImgUrl}
            </GoodsUploadModal>
          );
        }
      }, {
        title: '最后登录时间',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.last_login}</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.editUser.bind(self, 'edit', record)}>编辑</a>
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
        title: '添加用户',
        onClick: function (selectedRows) {
          self.editUser('create', {});
        }
      }
    ];

    let filters = [
      {
        title: '角色选择',
        key: 'role_id',
        defaultValue: null,
        values: self.state.roleData,
        type: 'select'
      }, {
        title: '邮箱',
        key: 'keyword',
        defaultValue: null,
        type: 'input'
      }
    ];

    let resolve = function (result) {
      return result && result.data && result.data.data || [];
    };

    let rowKey = function (record, index) {
      return index;
    };

    let tableData = {
      columns: columns,
      url: webapi.privilege.getPrivilegeUsers,
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (
      <div>
        <UserEditModal visible={this.state.visible} record={this.state.record} setModalVisible={this.setModalVisible}/>
        <BaseList filters={filters} table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
});

module.exports = Users;
