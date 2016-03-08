'use strict';

import Event from 'lite-flux/lib/event';
import {
  Popconfirm
} from 'antd';
import BaseList from 'modules/page-components/base-list';

const View = React.createClass({
  remove: function (id) {
    webapi.supplier.remove({id: id}).then((res) => {
      if (res.code === 0) {
        Event.emit('baselist-refresh');
        SP.message.success('删除成功！');
      }
    });
  },
  render: function () {

    let _this = this;

    let columns = [
      {
        title: '供应商名称',
        dataIndex: 'name'
      }, {
        title: '供应商编号',
        dataIndex: 'no'
      }, {
        title: '操作',
        dataIndex: 'id',
        render: function (id) {
          return (
            <span>
              <a href={'#/supplier/edit/' + id + '/basic'}>查看</a>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除该供应商吗？" onConfirm={_this.remove.bind(null, id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '添加供应商',
        link: '#/supplier/add'
      }
    ];

    let filters = [
      {
        title: '供应商名称',
        key: 'name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '供应商编号',
        key: 'no',
        defaultValue: null,
        type: 'input'
      }
    ];

    let resolve = function (result) {
      return result.data && result.data.data || [];
    };

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      columns: columns,
      url: webapi.supplier.get,
      params: { // 额外的请求参数
        //sku_status: 1
      },
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };

    return (<BaseList filters={filters} table={tableData} actionButtons={actionButtons}/>);
  }
});

module.exports = View;
