'use strict';

var Table = antd.Table;
var Alert = antd.Alert;
var Tag = antd.Tag;
var Menu = antd.Menu;
var Dropdown = antd.Dropdown;
import CategorySelector from 'modules/category-selector/category-selector';
import BaseList from 'modules/page-components/base-list';

var CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector onChange={this.onChange}/>);
  }
});

var GoodsSelectBox = React.createClass({
  getInitialState() {
    var self = this;
    return {
      selected: this.initSelectData(),
      searchParams: {
        category_id: 0,
        title: '',
        sku_sn: '',
        sort: 'default'
      },
      dataSource: []
    };
  },
  componentWillUnmount: function () {
    this.setState({selected: this.initSelectData()});
  },
  initSelectData() {
    return this.props.selected;
  },
  // 选择商品
  selectGoodsSuccess(record) {
    var self = this;
    var data = {
      sku_id: record.sku_id,
      sku_sn: record.sku_sn,
      name: record.title,
      attribute_name: record.attribute_name,
      goods_picture: record.full_path,
      goods_picture_id: null
    };
    this.setState({
      selected: data
    }, function () {
      self.props.success(data);
    });
  },
  renderGoodsName() {
    if (this.state.selected && this.state.selected.sku_id) {
      return (
        <div className="select-goods-title fl clearfix">
          <span className="fl">已选择商品：</span>
          <span className="fl">
            <Tag color="yellow">{this.state.selected.name + ' - ' + this.state.selected.attribute_name}</Tag>
          </span>
        </div>
      );
    } else {
      return (
        <div className="select-goods-title fl clearfix">
          <Alert message="你还没有选择商品，请选择一件商品" type="warn"/>
        </div>
      );
    }

  },
  render() {

    let self = this;

    let columns = [
      {
        title: '商品图片',
        dataIndex: 'full_path',
        render: function (text) {
          return (
            <a href="javascript:;">
              <img src={text} width="50"/>
            </a>
          );
        }
      }, {
        title: '商品名称',
        dataIndex: 'title'
      }, {
        title: '商品规格',
        dataIndex: 'attribute_name'
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.selectGoodsSuccess.bind(null, record)}>选择</a>
            </span>
          );
        }
      }
    ];

    let filters = [
      {
        title: '商品分类',
        key: 'category_id',
        defaultValue: null,
        type: 'other',
        render: function () {
          return (<CategorySearch/>);
        }
      }, {
        title: '商品名称',
        key: 'title',
        defaultValue: null,
        type: 'input'
      }, {
        title: 'SKU编号',
        key: 'sku_sn',
        defaultValue: null,
        type: 'input'
      }
    ];

    //   	let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record, index) {
      return record.sku_id;
    };

    let tableData = {
      //rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 3,
      url: webapi.goods.getSkuList,
      params: { // 额外的请求参数
        sku_status: 1,
        sort: 'default'
        //product_category_id: 1
      },
      //resolve: resolve,
      rowKey: rowKey,
      isList: true
    };

    return (
      <div className="goods-select-box">
        <div className="mb10 clearfix">
          <button className="ant-btn ant-btn-ghost ant-btn-circle ant-btn-menu fl" onClick={this.props.goBack}>
            <span className="anticon anticon-left"></span>
          </button>
          {this.renderGoodsName()}
        </div>
        <BaseList filters={filters} table={tableData}/>
      </div>
    );
  }
});

module.exports = GoodsSelectBox;
