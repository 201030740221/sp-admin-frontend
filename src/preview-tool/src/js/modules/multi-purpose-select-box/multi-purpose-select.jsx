'use strict';

import {
  Button, Modal
} from 'antd';

import BaseList from 'modules/page-components/base-list';
import CategorySelector from 'modules/category-selector/category-selector';

let CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector type={this.props.type} onChange={this.onChange}/>);
  }
});

function getTreeList(data) {
  let list = [];

  data.forEach(function (item) {
    list.push(item);

    if (item.children) {
      list = list.concat(getTreeList(item.children));
    }
  });

  return list;
}

/**
 * 选择器的配置部分，一般只需通过这里来定制选择器，就可以增加或修改某种类型的选择
 * @type {Object}
 */
let selectTypeMap = {
  article: {
    buttonText: '选择文章',
    getFilters: function () {
      return [
        {
          title: '文章标题',
          key: 'title',
          type: 'input'
        }, {
          title: '文章来源',
          key: 'create_source',
          values: [
            {
              name: '所有来源',
              key: null
            }, {
              name: '内部',
              key: 1
            }, {
              name: '外部',
              key: 2
            }
          ],
          type: 'select'
        }, {
          title: '文章分类',
          key: 'category_id',
          type: 'other',
          render: function () {
            return (<CategorySearch type="article"/>);
          }
        }, {
          title: '文章属性',
          key: 'attribute',
          values: [
            {
              name: '所有属性',
              key: null
            }, {
              name: '原创',
              key: 1
            }, {
              name: '转载',
              key: 2
            }
          ],
          type: 'select'
        }
      ];
    },
    getColumns: function () {
      return [
        {
          title: '文章ID',
          dataIndex: 'id'
        }, {
          title: '文章标题',
          dataIndex: 'title'
        }
      ];
    },
    // resolve: null, // 如无必要，可不配置该项目
    getValue: function (item) {
      // 用于指定返回 选中项 的数据
      return item.id;
    },
    dataApi: webapi.article.list,
    params: { // api需要的参数
      status: 0 // 筛选已发布状态的文章
    }
  },
  articleCategory: {
    buttonText: '选择分类',
    getFilters: function () {
      return [
        {
          title: '分类名称',
          key: 'name',
          type: 'input'
        }, {
          title: '状态',
          key: 'status',
          values: [
            {
              name: '所有状态',
              key: null
            }, {
              name: '隐藏',
              key: '0'
            }, {
              name: '显示',
              key: '1'
            }
          ],
          type: 'select'
        }
      ];
    },
    getColumns: function () {
      return [
        {
          title: '分类ID',
          dataIndex: 'id'
        }, {
          title: '分类名称',
          dataIndex: 'name',
          render: function (text, record) {
            let depth = record.depth;
            let prefix = '';
            let marginLeft = 0;
            if (depth > 1) {
              prefix = '└ ';
              marginLeft = 10;
            }
            if (depth > 2) {
              marginLeft = 20 * (depth - 1);
            }
            return (
              <span style={{
                marginLeft: marginLeft
              }}>{prefix}{text}</span>
            );
          }
        }
      ];
    },
    resolve: function (res) {
      return getTreeList(res.data || []);
    }, // 如无必要，可不配置该项目
    getValue: function (item) {
      // 用于指定返回 选中项 的数据
      return item.id;
    },
    dataApi: webapi.article.listCategory,
    isList: false
  }
};

// 多功能选择器
let MultiPurposeSelect = React.createClass({
  getInitialState: function () {
    return {
      active: false, // 默认不激活
      value: this.props.value
    };
  },
  getDefaultProps: function () {
    return {
      type: 'article', // 选择器类型, article | article_category
      multiple: false, // 是否是多选
      getValue: null, // 获取值的方法
      onChange: function (values) {return values;} // 选中的值回调给调用者
    };
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.type !== this.props.type) {
      this.setState({
        value: null
      });

      this.props.onChange(null);
    }
  },
  show: function (visible) {
    let active = visible;
    if (visible !== false) {
      active = true;
    }
    this.setState({active: active});
  },
  hide: function () {
    this.show(false);
  },

  render: function () {
    let self = this;
    let selectType = selectTypeMap[this.props.type];
    let filters = selectType.getFilters();
    let columns = selectType.getColumns();
    let getValue = this.props.getValue || selectType.getValue;
    function resolveResData(res) {
      return res.data && res.data.data || [];
    }
    function rowKey(record, index) {
      return index;
    }
    function selectItem(item) {
      let value = getValue(item);

      this.setState({
        value: item.id
      });

      this.props.onChange(value);
      this.hide();
    }
    let actions = {
      title: '操作',
      render: function (text, record) {
        return <Button onClick={selectItem.bind(self, record)}>选择</Button>;
      }
    };

    columns.push(actions);

    let tableData = {
      columns: columns,
      url: selectType.dataApi,
      params: selectType.params,
      isList: selectType.isList !== false,
      resolve: selectType.resolve || resolveResData,
      rowKey: rowKey,
      childrenColumnName: this.props.type
    };
    let baselist = null;
    let name = this.props.type + '-multi-purpose-select'; // 增加name属性，区分和主页面中的列表事件

    if (this.state.active) {
      baselist = <BaseList name={name} filters={filters} table={tableData}/>;
    }

    return (
      <div>
        <Modal visible={this.state.active}
          width={900}
          onCancel={this.hide}>
          <div className="multi-purpose-select">{baselist}</div>
        </Modal>

        <span>
          <Button onClick={this.show}>{selectType.buttonText}</Button>
          <span className="u-ml-10">{self.state.value ? '已选择：' + self.state.value : '未选择'}</span>
        </span>
      </div>
    );
  }

});

module.exports = MultiPurposeSelect;
