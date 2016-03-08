'use strict';

import BaseList from 'modules/page-components/base-list';
import Event from 'lite-flux/lib/event';
import RequestProxy from 'modules/helpers/request-proxy';
import {
  Popconfirm
} from 'antd';

const Goods = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  editItem: function (id) {
    this.context.router.push('/topic/edit/' + id);
  },
  turnToResources: function (id) {
    this.context.router.push('/topic/resources/' + id);
  },
  removeItem: function (id) {
    webapi.topic.removeTopic(id).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('删除成功');
    }));
  },
  changeStatus: function (id, status) {
    webapi.topic.updateTopic(id, {status: status}).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('修改成功');
    }));
  },
  render: function () {

    let self = this;

    let columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '专题名称',
        dataIndex: 'title'
      }, {
        title: '作者',
        dataIndex: 'author'
      }, {
        title: '创建时间',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.created_at}</span>
          );
        }
      }, {
        title: '修改时间',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.updated_at}</span>
          );
        }
      }, {
        title: '专题状态',
        dataIndex: 'status',
        render: function (text, record) {
          let status = '未发布';
          if (record.status === 1)
            status = '已发布';
          if (record.status === 2)
            status = '已禁用';
          return (
            <span>{status}</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          let actionMenu = '';
          let host = 'http://' + location.host.replace('admin', 'www');
          let previewUrl = host + '/topic/' + record.id + '.html?preview';
          let viewUrl = host + '/topic/' + record.id + '.html';
          // 未发布
          if (record.status === 0) {
            actionMenu = (
              <span>
                <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 1)}>发布</a>
                <span className="ant-divider"></span>
              </span>
            );
          }
          // 已发布
          if (record.status === 1) {
            actionMenu = (
              <span>
                <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 2)}>禁用</a>
                <span className="ant-divider"></span>
                <a href={viewUrl} target="_blank">查看</a>
                <span className="ant-divider"></span>
              </span>
            );
          }
          // 已禁用
          if (record.status === 2) {
            actionMenu = (
              <span>
                <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 1)}>发布</a>
                <span className="ant-divider"></span>
              </span>
            );
          }
          return (
            <span>
              {actionMenu}
              <a href={previewUrl} target="_blank">预览</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.editItem.bind(self, record.id)}>编辑</a>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除这个专题吗？" onConfirm={self.removeItem.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.turnToResources.bind(self, record.id)}>图片视频管理</a>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '专题推荐位管理',
        onClick: function (selectedRows) {
          self.context.router.push('/frame/pages/pc/topic');
        }
      }, {
        title: '添加专题',
        onClick: function (selectedRows) {
          self.context.router.push('/topic/add');
        }
      }
    ];

    let filters = [
      {
        title: '专题ID',
        key: 'id',
        defaultValue: null,
        type: 'input'
      }, {
        title: '专题名称',
        key: 'keyword',
        defaultValue: null,
        type: 'input'
      }, {
        title: '专题状态',
        key: 'status',
        defaultValue: '-1',
        values: [
          {
            name: '不限制',
            key: '-1',
            disabled: false
          }, {
            name: '未发布',
            key: '0',
            disabled: false
          }, {
            name: '已发布',
            key: '1',
            disabled: false
          }, {
            name: '已禁用',
            key: '2',
            disabled: false
          }
        ],
        type: 'select'
      }
    ];

    //   	let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      //rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.topic.getTopics,
      params: { // 额外的请求参数
        //sku_status: 2,
        //product_category_id: 1
      },
      //resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (<BaseList filters={filters} table={tableData} actionButtons={actionButtons}/>);
  }
});

module.exports = Goods;
