'use strict';

import {Popconfirm} from 'antd';
import BaseList from 'modules/page-components/base-list';
import getValue from 'modules/helpers/get-value';

export default class ActivityList extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  editItem() {

  }
  removeItem() {

  }
  showStat() {

  }
  render() {
    let columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      },
      {
        title: '活动名称',
        dataIndex: 'title'
      }, {
        title: '起止/创建时间',
        dataIndex: ''
      }, {
        title: '页面',
        dataIndex: ''
      }, {
        title: '浏览量',
        dataIndex: ''
      }, {
        title: '销售额',
        dataIndex: ''
      }, {
        title: '订单',
        dataIndex: ''
      }, {
        title: '规则',
        dataIndex: ''
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record)=> {
          return (
            <span>
              <a href="javascript:;" onClick={this.editItem.bind(this, record.id)}>编辑</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={this.showStat.bind(this, record.id)}>统计</a>
              <span className="ant-divider"></span>

              <Popconfirm title="确定要删除这个产品吗？" onConfirm={this.removeItem.bind(this, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '创建活动',
        onClick: (selectedRows)=> {
          this.context.router.push('/activity/add');
        }
      }
    ];

    let filters = [
      {
        title: '活动名称',
        key: ' name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '创建时间',
        key: 'supplier_name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '状态',
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
}
