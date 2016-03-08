'use strict';

import BaseList from 'modules/page-components/base-list';
import CategorySelector from 'modules/category-selector/category-selector';
import Event from 'lite-flux/lib/event';
import RequestProxy from 'modules/helpers/request-proxy';
import getValue from 'modules/helpers/get-value';
import {
  Popconfirm
} from 'antd';

const CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector type="product" onChange={this.onChange}/>);
  }
});

const Goods = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  editSku: function (id) {
    this.context.router.push('/product/sku/' + id);
  },
  editItem: function (id) {
    this.context.router.push('/product/edit/' + id);
  },
  removeItem: function (id) {
    webapi.erp.removeProduct({product_ids: [id]}).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('删除成功');
    }));
  },
  render: function () {

    let self = this;

    let columns = [
      {
        title: '产品图片',
        dataIndex: '',
        render: function (text, record) {
          let ImgUrl = null;
          if (getValue(record, 'attachment.media')) {
            ImgUrl = <img width="100" src={getValue(record, 'attachment.media.full_path')}/>;
          }

          return (
            <a href="javascript:;">
              {ImgUrl}
            </a>
          );
        }
      }, {
        title: '产品信息',
        dataIndex: '',
        render: function (text, record) {
          return (
            <div>
              <div>产品名称：{getValue(record, 'title')}</div>
              <div>产品分类：{getValue(record, 'product_category.name')}</div>
            </div>
          );
        }
      }, {
        title: '供应商',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{getValue(record, 'supplier.name')}</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.editItem.bind(self, record.id)}>编辑</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.editSku.bind(self, record.id)}>管理SKU</a>
              <span className="ant-divider"></span>

              <Popconfirm title="确定要删除这个产品吗？" onConfirm={self.removeItem.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '添加产品',
        onClick: function (selectedRows) {
          self.context.router.push('/product/add');
        }
      }, {
        title: '批量删除',
        popconfirm: '确定要删除选择的产品吗？',
        useSelectRow: true,
        onClick: function (selectedRows) {
          let selectedRowsRes = selectedRows;
          let ids = [];
          selectedRowsRes.map(function (item) {
            ids.push(item.id);
          });
          webapi.erp.removeProduct({product_ids: ids}).then(RequestProxy(function (res) {
            Event.emit('baselist-refresh');
            SP.message.success('删除成功');
          }));
        }
      }
    ];

    let filters = [
      {
        title: '产品分类',
        key: 'product_category_id',
        defaultValue: null,
        type: 'other',
        render: function () {
          return (<CategorySearch/>);
        }
      }, {
        title: '供应商',
        key: 'supplier_name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '产品名称',
        key: 'product_title',
        defaultValue: null,
        type: 'input'
      }
    ];

    //   	let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productList,
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
