'use strict';
/**
  * Copyright (c) 2015 Sipin Frontend, All rights reserved.
  * http://www.sipin.com/
  * @author wilson
  * @date  2015-12-02
  * @description 基础列表，用于渲染后台常规列表
  *
  */

let Event = require('lite-flux/lib/event');
import {Table, Pagination, Popconfirm, Select, DatePicker, Button} from 'antd';
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

/**
 * 搜索字段缓存，默认为数组.
 * @type {array}
 */
let selectedObj;
let isSearch = false;

// 重置搜索字段
function resetSelected() {
  selectedObj = [];
}

// 获取搜索字段
function getSelectedObj() {
  return selectedObj;
}

// 首次渲染时清空搜索字段
resetSelected();

// 数组去重
function uniqueArray(array){
  let n = []; //临时数组
  for(let i = 0;i < array.length; i++){
    if (n.indexOf(array[i]) == -1) {
      n.push(array[i])
    }
  }
  return n;
}

// 删除某个数组
function removeArray(target, array){
  let n = []; //临时数组
  let index = array.indexOf(target);
  if( index > -1) {
    array.splice(index, 1);
  }
  return array;
}

/**
 * @description  搜索区域渲染
 * @type {React Object}
 */
class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
    let self = this;
    props.filters.map(function (filter) {
      self.state.result[filter.key] = filter.defaultValue;
    });
  }
  onSearch() {
    let data = {};
    let result = this.state.result;

    for (let key in result) {
      if (result[key]) {
        data[key] = result[key];
      }
    }

    // 通过命名list组件，分别绑定刷新事件
    let name = this.props.name || '';
    Event.emit('baselist-search' + name, data);
  }
  onInputChange(key, e) {
    let result = this.state.result;
    result[key] = e.target.value;
    this.setState(result);
  }
  onSelectChange(key, selectKey, selectValue) {
    let result = this.state.result;
    result[key] = selectKey;
    this.setState(result);
  }
  onCustomComponentChange(key, value) {
    let result = this.state.result;
    result[key] = value;
    this.setState(result);
  }
  onDateRangeChange(keys, format, values) {
    let result = this.state.result;
    values.forEach(function (value, index) {
      result[keys[index]] = value && moment(value).format();
    });
    this.setState(result);
  }
  render() {
    let self = this;
    let searchFields = this.props.filters.map(function (item, index) {
      var search_field;

      switch (item.type) {
        case 'input':
          search_field = (
            <input
              {...item}
              title={item.key}
              className={"ant-input search-base-item"}
              defaultValue={item.defaultValue}
              onChange={self.onInputChange.bind(self, item.key)}
              type="search"></input>
          );

          break;

        case 'select':
          let optionTags = item.values.map(function (val) {
            return (
              <Option key={val.key} value={val.key} disabled={val.disabled}>{val.name}</Option>
            );
          });

          search_field = (
            <Select
              defaultValue={item.defaultValue}
              style={{
              width: 200
            }}
              onChange={self.onSelectChange.bind(self, item.key)}>
              {optionTags}
            </Select>
          );

          break;

        case 'dateRange':
          let date_format = item.format || 'yyyy-MM-dd';
          search_field = <RangePicker {...item} format={date_format} onChange={self.onDateRangeChange.bind(self, item.key, date_format)}/>;

          break;

        default:
          search_field = React.cloneElement(item.render(), {
            onChange: self.onCustomComponentChange.bind(self, item.key)
          });

          break;
      }

      return (
        <div key={index} className="search-base-items col-8 clearfix u-mt-10 u-pr-20">
          <label style={{
            width: 90,
            textAlign: 'right'
          }} className="u-fl">{item.title}：</label>
          <div style={{
            marginLeft: '100px'
          }}>
            {search_field}
          </div>
        </div>
      );

    });
    return (
      <div className="search-box u-mt-20">
        <form className="ant-form-horizontal clearfix">
          <div className="ant-form-item">
            {searchFields}
            <input type="button" className="ant-btn ant-btn-primary u-mt-10 u-fr" onClick={this.onSearch.bind(this)} value="查 询"/>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * 操作按钮区域渲染
 * @type {React Object}
 */
class ActionBox extends React.Component {
  render() {
    let self = this;
    let dir = this.props.dir;
    let btnClasses = 'u-mr-10';
    let actionButtons = this.props.buttons.map( (btn, index)=>{
      let disabled = !btn.useSelectRow?false:(this.props.selectedRowKeys.length?false:true);

      if (btn.render) {
        return React.cloneElement(btn.render(), {key: index});
      } else {
        if (btn.popconfirm) {
          return (
            <Popconfirm
              key={index}
              title={btn.popconfirm}
              onConfirm={btn.onClick && btn.onClick.bind(null, this.props.selectedRows) || null}>
              <Button type="primary" className={btnClasses} disabled={disabled}>{btn.title}</Button>
            </Popconfirm>
          );
        } else if (btn.link) {
          return (
            <a key={index} className={btnClasses} href={btn.link}>{btn.title}</a>
          );
        } else {
          return (
            <Button type="primary" className={btnClasses} disabled={disabled} key={index} onClick={btn.onClick && btn.onClick.bind(null, this.props.selectedRows) || null}>{btn.title}</Button>
          );
        }
      }

    });

    let selectedRowKeys = !this.props.selectedRowKeys.length
      ? null
      : (
        <span>选择了
          {this.props.selectedRowKeys.length+'个对象'}
          <a href="#" onClick={this.props.cancelSelect} className="u-ml-10">取消选择</a>
        </span>
      );

    return (
      <div className="action-box row u-mt-20 u-mb-20">
        {actionButtons}
        {selectedRowKeys}
      </div>
    );
  }
}

/**
 * 列表区域渲染
 * @type {React Object}
 */
class ListBox extends React.Component {

  constructor(props) {
    super(props);

    let filters = this.handleFilters(props.filters);

    // 融合参数
    let tableParams = _.merge({
      pagination: {
        current: 1
      },
      filters: {},
      sorter: {}
    }, props.params);

    if (props.isList) {
      tableParams.size = props.pageSize || 10;
      tableParams.page = 1;
      tableParams.total = 0;
    }

    this.state = {
      selectedRowKeys: [],
      selectedRows: [],
      filters: filters,
      columns: props.columns,
      tableParams: tableParams,
      total: 0,
      result: {}
    };

    // 通过命名list组件，分别绑定刷新事件
    let name = props.name || '';
    this.events = {
      eventRefresh: 'baselist-refresh' + name,
      eventSearch: 'baselist-search' + name
    };
  }

  handleFilters(filters) {
    let filterMap = {};

    _.forIn(filters || {}, function (value, key) {
      if (value.defaultValue)
        filterMap[value.key] = value.defaultValue;
      }
    );

    return filterMap;
  }

  parseParams() {

    let params = {};
    let isList = this.props.isList;
    if (isList) {
      params.size = this.state.tableParams.size;
      params.page = this.state.tableParams.pagination.current || 1;
    }

    if (isSearch) {
      params.page = 1;
      if (this.state.tableParams.pagination.current !== 1) {
        resetSelected(); // 重置选择项
      }
    } else {
      resetSelected(); // 重置选择项
    }
    isSearch = false;

    _.assign(params, this.props.params, this.state.filters);
    return params;
  }

  fetchData(params) {
    let self = this;
    this.props.url(params || this.parseParams()).then(function (res) {
      if (res && !res.code) {
        if (self.props.isList) {
          let tableParams = self.state.tableParams;
          tableParams.page = 1;
          tableParams.total = res.data.total;
          let data = {
            result: res,
            tableParams: tableParams
          };
          self.setState(data);
          self.props.onChange({data: res.data.data});
        } else {
          self.setState({result: res});
          self.props.onChange({data: res.data});
        }

      }
    });
  }

  getDataSource() {
    if (this.props.resolve) {
      return this.props.resolve(this.state.result || []);
    } else {
      return (this.state.result.data && this.state.result.data.data)
        ? this.state.result.data && this.state.result.data.data
        : [];
    }
  }

  componentDidMount() {
    let self = this;
    resetSelected(); // 重置选择项
    // 初始化表格
    this.fetchData();

    // 刷新表格
    Event.on(this.events.eventRefresh, function () {
      let dataSource = self.state.dataSource;
      self.fetchData();
      // resetSelected(); // 重置选择项
    });
    // 搜索
    Event.on(this.events.eventSearch, function (data) {
      isSearch = true;
      // 改变搜索条件
      self.setState({
        filters: data
      }, function () {
        // 修改原来的 dataSource， 再发请求
        self.fetchData();
        // resetSelected(); // 重置选择项
      });
    });
  }

  componentWillUnmount() {
    // 搜索
    Event.off(this.events.eventSearch);
    Event.off(this.events.eventRefresh);
    resetSelected(); // 重置选择项
  }

  onPaginationChange(page) {
    let self = this;
    let tableParams = this.state.tableParams;
    tableParams.pagination.current = page;
    this.setState({
      tableParams: tableParams
    }, function () {
      self.fetchData();
    });
  }

  // 取消选择
  cancelSelect(e) {
    e.preventDefault();
    this.setState({selectedRowKeys: []});
    this.setState({selectedRows: []});
  }

  // 监听选择事件
  onSelectChange(selectedRowKeys) {
    this.setState({selectedRowKeys: selectedRowKeys});
  }

  render() {
    let rowSelection = null;
    let actionbox = null;

    if (this.props.rowSelection) {
      rowSelection = {
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: this.onSelectChange.bind(this),
        onSelect: (record, selected, selectedRows)=> {
          // 如果是选中的，则添加到列表中
          // 否则从列表中去掉
          const oldSelectedRows = this.state.selectedRows;
          let newSelectedRows = [];
          if (selected) {
            newSelectedRows = uniqueArray(oldSelectedRows.concat([record]));
          } else {
            newSelectedRows = removeArray(record, oldSelectedRows);
          }
          this.setState({selectedRows: newSelectedRows});
        },
        onSelectAll: (selected, selectedRows)=> {
          // 取消全选 ANTD 没有返回取消后的列表
          // 无法进行对比，所以取消全选直接取消所有的选择
          const oldSelectedRows = this.state.selectedRows;
          let newSelectedRows = [];
          if (selected) {
            newSelectedRows = uniqueArray(oldSelectedRows.concat(selectedRows));
          } else {
            this.setState({selectedRowKeys: []});
          }
          this.setState({selectedRows: newSelectedRows});
        }
      };
    }

    if (this.props.actionButtons) {
      actionbox = (<ActionBox cancelSelect={this.cancelSelect.bind(this)} selectedRows={this.state.selectedRows} selectedRowKeys={this.state.selectedRowKeys} buttons={this.props.actionButtons}/>);
    }

    return (
      <div className="list-box u-mt-20">
        {actionbox}
        <Table
          bordered={true}
          rowSelection={rowSelection}
          columns={this.state.columns}
          dataSource={this.getDataSource()}
          expandedRowRender={this.props.expandedRowRender}
          pagination={false}
          rowKey={this.props.rowKey}
          childrenColumnName={this.props.childrenColumnName || 'children'}/>
        <Pagination
          className="ant-table-pagination"
          onChange={this.onPaginationChange.bind(this)}
          pageSize={this.state.tableParams.size}
          total={this.state.tableParams.total}/>
      </div>
    );

  }
}

/**
 * 基础列表
 * @type {React Object}
 */
export default class BaseList extends React.Component {
  render() {

    let searchbox = null;
    let listbox = null;

    if (this.props.filters) {
      searchbox = (<SearchBox name={this.props.name} filters={this.props.filters}/>);
    }

    if (this.props.table) {
      listbox = (<ListBox
        name={this.props.name}
        actionButtons={this.props.actionButtons}
        rowSelection={this.props.table.rowSelection}
        filters={this.props.filters}
        pageSize={this.props.table.pageSize}
        columns={this.props.table.columns}
        url={this.props.table.url}
        params={this.props.table.params}
        expandedRowRender={this.props.table.expandedRowRender}
        pagination={this.props.table.pagination}
        resolve={this.props.table.resolve}
        rowKey={this.props.table.rowKey}
        expandIconAsCell={true}
        isList={this.props.table.isList || false}
        childrenColumnName={this.props.table.childrenColumnName}
        onChange=
        {this.props.table.onListDataChange || ()=>{}}/>);
    }

    return (
      <div className="list-base">
        {searchbox}
        {listbox}
      </div>
    );
  }
}
