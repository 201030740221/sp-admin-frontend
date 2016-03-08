'use strict';

var Table = antd.Table;
var Modal = antd.Modal;
var Button = antd.Button;
var Form = antd.Form;
var Select = antd.Select;
var Option = Select.Option;
var message = antd.message;
var Popconfirm = antd.Popconfirm;
var Switch = antd.Switch;

import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';
import CategorySelector from 'modules/category-selector/category-selector';

const article_attributeMap = {
  1: '原创',
  2: '转载'
};
const article_sourceMap = {
  1: '内部',
  2: '外部'
};

function tip(res) {
  res = res || {
    code: true,
    msg: '失败，服务器返回异常'
  };

  let method = res.code
    ? 'error'
    : 'success';
  message[method](res.msg);
}

// 获取容器内的表单域值
function getParams($wrap) {
  let inputSelector = '[name]';
  let $inputs = $wrap.find(inputSelector);
  let params = {};

  $inputs.each(function () {
    let $input = $(this);
    params[$input.attr('name')] = $input.val();
  });

  return params;
}

var CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector type={this.props.type} onChange={this.onChange}/>);
  }
});

/* 文章列表 */
var ArticleList = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  refreshData() {
    Event.emit('baselist-refresh');
  },

  sync() {
    // 同步
    this.context.router.push('/article/sync');
  },
  addArticle() {
    this.context.router.push('/article/add');
  },
  // 编辑文章
  edit(id) {
    this.context.router.push('/article/edit/' + id);
  },
  // 删除
  removeArticle(id) {
    let self = this;
    webapi.article.remove(id).then(function (res) {
      tip(res);
      this.refreshData();
    }.bind(this));
  },
  // 发布文章
  // 历史遗留：0为发布，1为未发布
  publish(article) {
    var isPublish = !article.status;

    let params = {
      'status': + isPublish
    };
    webapi.article.status(article.id, params).then(function (res) {
      tip(res);

      if (res && res.code === 0)
        this.refreshData();
    }
    .bind(this));
  },

  render() {

    var self = this;

    var columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '文章标题',
        dataIndex: 'title'
      }, {
        title: '文章分类',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>{record.category
                ? record.category.name
                : '未匹配分类'}</span>
          );
        }
      }, {
        title: '文章属性',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>{article_attributeMap[record.attribute]}</span>
          );
        }
      }, {
        title: '作者',
        dataIndex: 'author'
      }, {
        title: '文章来源',
        dataIndex: 'source',
        render: function (text, record) {
          return (
            <span>{article_sourceMap[record.create_source]}</span>
          );
        }
      }, {
        title: '状态',
        dataIndex: 'status',
        render: function (text, record) {
          return (
            <span>{record.status
                ? '未'
                : '已'}发布</span>
          );
        }
      }, {
        title: ' 操作',
        dataIndex: null,
        render: function (text, record) {
          var divider = <span className="ant-divider"></span>;
          var publish = <Popconfirm title="确定要发布吗？" onConfirm={self.publish.bind(self, record)}>
            <a>发布</a>
          </Popconfirm>;

          // 0 = 发布 1 = 未发布
          if (!record.status) {
            publish = <Popconfirm title="确定取消发布吗？" onConfirm={self.publish.bind(self, record)}>
              <a>取消发布</a>
            </Popconfirm>;
          }

          return (
            <span>
              {publish}
              {divider}
              <a href="javascript:;" onClick={self.edit.bind(self, record.id)}>编辑</a>
              {divider}
              <a href={record.link} target="_blank">预览</a>
              {divider}
              <Popconfirm title="确定要删除这个文章吗？" onConfirm={self.removeArticle.bind(self, record.id)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let rowKey = function (record, index) {
      return record.id;
    };

    let resolve = function (result) {
      return result && result.data && result.data.data || [];
    };

    let tableData = {
      columns: columns,
      url: webapi.article.list,
      isList: true,
      resolve: resolve,
      rowKey: rowKey,
      //childrenColumnName: 'xx'
      //expandedRowRender: expandedRowRender
    };

    let actionButtons = [
      {
        title: '添加文章',
        onClick: function (selectedRows) {
          self.addArticle();
        }
      }, {
        title: '同步',
        onClick: function (selectedRows) {
          self.sync();
        }
      }
    ];

    let filters = [
      {
        title: '文章分类',
        key: 'category_id',
        defaultValue: null,
        type: 'other',
        render: function () {
          return (<CategorySearch type="article"/>);
        }
      }, {
        title: '文章名称',
        key: 'title',
        defaultValue: null,
        type: 'input'
      }, {
        title: '作者',
        key: 'author',
        defaultValue: null,
        type: 'input'
      }, {
        title: '状态',
        key: 'status',
        defaultValue: null,
        values: [
          {
            name: '所有状态',
            key: null,
            disabled: false
          }, {
            name: '未发布',
            key: 1,
            disabled: false
          }, {
            name: '已发布',
            key: '0',
            disabled: false
          }
        ],
        type: 'select'
      }, {
        title: '文章来源',
        key: 'create_source',
        defaultValue: null,
        values: [
          {
            name: '所有来源',
            key: null,
            disabled: false
          }, {
            name: '内部',
            key: 1,
            disabled: false
          }, {
            name: '外部',
            key: 2,
            disabled: false
          }
        ],
        type: 'select'
      }, {
        title: '文章属性',
        key: 'attribute',
        defaultValue: null,
        values: [
          {
            name: '所有属性',
            key: null,
            disabled: false
          }, {
            name: '原创',
            key: 1,
            disabled: false
          }, {
            name: '转载',
            key: 2,
            disabled: false
          }
        ],
        type: 'select'
      }
    ];

    return (
      <div className="article-list">
        <BaseList filters={filters} table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }

});

module.exports = ArticleList;
