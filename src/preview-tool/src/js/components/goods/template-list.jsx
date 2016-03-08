'use strict';

import {
  Select,
} from 'antd';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseList from 'modules/page-components/base-list';
import getValue from 'modules/helpers/get-value';

const SelectBox = React.createClass({
  getInitialState: function () {
    return {checked: this.props.checked};
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({checked: nextProps.checked});
  },
  onChange: function (checked) {
    if (this.props.callback) {
      this.props.callback(this.updateState, checked);
    }
  },
  updateState: function (state) {
    this.setState(state);
  },
  renderOption: function () {
    return this.props.values.map(function (item, index) {
      return <Option key={index} value={item.key}>{item.name}</Option>;
    });
  },
  render: function () {
    return (
      <Select defaultValue="1" style={{
        width: 120
      }} onChange={this.onChange}>
        {this.renderOption()}
      </Select>
    );
  }
});

const TemplateList = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [
    BaseModalMixin
  ],
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {},

  editItem: function (goods_detail, sku_id, id) {

    if (goods_detail && sku_id && id) {
      this.context.router.push('/goods/sku/' + sku_id + '/template-detail/' + id);
    } else {/*为空，跳到默认模板*/
      if (!sku_id) {
        SP.message.error('sku不存在！');
        return false;
      }
      this.context.router.push('/goods/sku/' + sku_id + '/template-detail/default');
    }

  },

  /*商品详情列表*/
  goodsInfoTable: function () {

    let self = this;

    let columns = [
      {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: 'PC端详情模板',
        dataIndex: '',
        render: function (text, record) {
          let values = [
            {
              key: '1',
              name: 'PC端详情模板1'
            }
          ];
          return (<SelectBox values={values}/>);
        }
      }, {
        title: 'M端详情模板',
        dataIndex: '',
        render: function (text, record) {
          let values = [
            {
              key: '1',
              name: '手机端模板1'
            }
          ];
          return (<SelectBox values={values}/>);
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          record.goods_sku = record.goods_sku || {};
          record.goods_sku.goods_detail = record.goods_sku.goods_detail || {};
          return (
            <span>
              <a
                href="javascript:;"
                onClick={self.editItem.bind(self, record.goods_sku.goods_detail.detail_data, getValue(record, 'goods_sku.id'), getValue(record, 'goods_sku.goods_detail_id'))}>编辑</a>
            </span>
          );
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.id,
        //product_category_id: 1
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (<BaseList table={tableData}/>);
  },

  render: function () {

    return (
      <div>
        {this.goodsInfoTable()}
      </div>
    );
  }
});

module.exports = TemplateList;
