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
  0: '原创',
  1: '转载'
};
const article_sourceMap = {
  0: '内部',
  1: '外部'
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
var PostList = React.createClass({

  // 发布文章
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
        dataIndex: 'post_id'
      }, {
        title: '文章标题',
        dataIndex: 'title'
      }, {
        title: '作者',
        dataIndex: 'author'
      }, {
        title: '文章分类',
        dataIndex: 'category'
      }, {
        title: '文章属性',
        dataIndex: 'attribute'
      }, {
        title: '文章来源',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>外部（wordpress）</span>
          );
        }
      }
    ];

    let rowKey = function (record, index) {
      return index;
    };

    let resolve = function (result) {
      return result.data;
    };

    let tableData = {
      columns: columns,
      url: webapi.article.sync,
      resolve: resolve,
      rowKey: rowKey,
      rowSelection: true
    };

    let actionButtons = [
      {
        title: '同步并发布文章',
        popconfirm: '确定要发布选择的文章吗？',
        onClick: function (selectedRows) {
          var selectedItems = selectedRows;

          if (!selectedItems.length) {
            message.error('您还未选择任何文章！');
            return;
          }

          message.success('正在同步，完成后自动刷新。');
          var post_ids = selectedItems.map(post => post.post_id);
          webapi.article.syncPublish({'post_ids': post_ids}).then(function (res) {
            if (res && res.code === 0) {
              Event.emit('baselist-refresh');
            } else {
              message.error('同步失败：', res.msg || '服务器异常');
            }
          });
        }
      }
    ];

    return (
      <div className="article-list">
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }

});

module.exports = PostList;
