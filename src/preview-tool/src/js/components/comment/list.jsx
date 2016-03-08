'use strict';

let Modal = antd.Modal;
let Icon = antd.Icon;
let Input = antd.Input;
let message = antd.message;
let Popconfirm = antd.Popconfirm;
let Switch = antd.Switch;

let ImageViewer = require('modules/page-components/image-viewer');
let Event = require('lite-flux/lib/event');
let BaseList = require('modules/page-components/base-list');

const commentTypes = [{
  name: '全部评论',
  key: '-1'
}, {
  name: '仅晒单',
  key: 1
}, {
  name: '非晒单',
  key: '0'
}];
const commentStatus = [{
  key: '-1',
  name: '所有状态'
}, {
  key: '0',
  name: '待审核'
}, {
  key: 1,
  name: '审核通过'
}, {
  key: 2,
  name: '审核不通过'
}];
const commentStatusMap = {
  0: <Icon type="minus-circle-o" />,
  1: <Icon type="check-circle-o" />,
  2: <Icon type="cross-circle-o" />
};
const passed = 1;

const rateMap = {
  0: '好评',
  1: '中评',
  2: '差评'
};
const lightMap = {
  0: 'yellow',
  1: 'green',
  2: 'gray'
};

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

let SwitchBox = React.createClass({
  getInitialState: function () {
    return {
      checked: this.props.checked
    };
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      checked: nextProps.checked
    });
  },
  onChange: function (checked) {
    if (this.props.onChange) {
      this.props.onChange(checked, this.fallback);
    }
  },
  fallback: function () {
    this.setState({
      checked: !this.state.checked
    });
  },
  render: function () {
    return (
      <Switch checked={this.state.checked} onChange={this.onChange} />
    );
  }
});

/* 评论列表 */
let List = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      reply: {
        editing: false,
        commentId: null,
        show: false,
        content: ''
      }
    };
  },

  refreshData() {
    Event.emit('baselist-refresh');
  },

  // 切换审核状态
  verify(items, status) {
    let ids = items.map(item => item.id);
    let params = {
      ids: ids,
      status: status ? 1 : 2
    };
    webapi.comment.batchUpdateComment(params).then(function (res) {
      if (res && res.code === 0) {
        message.success('修改状态成功！');
        this.refreshData();
      } else {
        message.error('修改状态失败！');
      }
    }.bind(this));
  },
  // 查看订单
  viewOrder(orderNo) {
    this.context.router.push('/order/edit/' + orderNo + '/invoiceId/see');
  },
  // 新增或编辑回复
  reply(comment, reply) {
    if (!reply) {
      reply = {
        commentId: comment.id,
        content: '',
        editing: false
      };
    } else {
      reply.editing = true;
    }

    reply.show = true;

    let EditContext = React.createClass({
      render() {
        let idName = 'comment_id';
        if (reply.id) {
          idName = 'id';
        }

        return (
            <div id="edit-reply-form">
                <input type="hidden" name={idName} value={reply[idName]}/>
                <Input type="textarea" name="content" defaultValue={reply.content} placehoder="请输入回复内容" />
            </div>
        );
      }
    });
    reply.context = <EditContext />;

    this.setState({
      reply: reply
    });
  },
  // 提交回复
  submitReply() {
    let params = getParams($('#edit-reply-form'));
    let isEdit = !!params.id;
    let apiName = isEdit ? 'updateReply' : 'replyComment';
    let self = this;

    webapi.comment[apiName](params).then(function (res) {
      if (res && res.code === 0) {
        message.success('回复成功！');
        self.refreshData();
        self.cancelReply();
      } else {
        message.error('操作失败，请稍后再试！');
      }
    });
  },
  // 取消回复
  cancelReply() {
    this.setState({
      reply: {
        content: '',
        show: false
      }
    });
  },

  // 移除回复
  removeReply(reply) {
    webapi.comment.removeReply(reply.id).then(function (res) {
      if (res.code === 0) {
        this.refreshData();
        message.success('删除回复成功');
      } else {
        message.error('删除回复失败');
      }
    }.bind(this));
  },

  render() {
    let self = this;

    let columns = [{
      title: '评价内容',
      width: 400,
      render: function (text, record) {
        let replies = record.replys.map(function (reply, index) {
          return (
            <div key={index} className="comment-reply" >
                小编{reply.user_id}号：{reply.content}

                <div className="actions">
                    <a onClick={self.reply.bind(self, record, reply)}>编辑</a>
                    <Popconfirm title="确定要删除这个回复吗？" onConfirm={self.removeReply.bind(self, reply)}>
                        <a>删除</a>
                    </Popconfirm>
                </div>
            </div>
          );
        });

        return (
          <div>
            {record.content}
            {replies}
          </div>
        );
      }
    }, {
      title: '晒单图片',
      render: function (text, record) {
        let images = record.pics || [];
        return (
          <ImageViewer images={images} />
        );
      }
    }, {
      title: '订单号',
      render: function (text, record) {
        return (
          <a onClick={self.viewOrder.bind(self, record.order_no)} >{record.order_no}</a>
        );
      }
    }, {
      title: '评价等级',
      render: function (text, record) {
        return (
          <span>{rateMap[record.rate]}</span>
        );
      }
    }, {
      title: '评价时间',
      dataIndex: 'created_at'
    }, {
      title: '状态',
      dataIndex: 'status',
      width: 40,
      render: function (text, record) {
        return (
          <span className={'light-' + lightMap[record.status]}>{commentStatusMap[record.status]}</span>
        );
      }
    }, {
      title: '审核',
      render: function (text, record) {
        return (
          <SwitchBox checked={record.status === passed} onChange={self.verify.bind(self, [record])}></SwitchBox>
        );
      }
    }, {
      title: ' 操作',
      width: 40,
      render: function (text, record) {
        return (
          <span>
            <a onClick={self.reply.bind(self, record, null)}>回复{record.status ? '' : '并审核通过'}</a>
          </span>
        );
      }
    }];

    function rowKey(record) {
      return record.id;
    }

    function resolve(result) {
      return result && result.data && result.data.data || [];
    }

    let tableData = {
      columns: columns,
      url: webapi.comment.getCommentList,
      isList: true,
      resolve: resolve,
      rowKey: rowKey,
      rowSelection: true
    };

    function handleAction(selectedRows, status) {
      let items = selectedRows;
      if (items.length) {
        self.verify(items, status);
      } else {
        message.error('未选择评论！');
      }
    }
    let actionButtons = [{
      title: '批量审核通过',
      useSelectRow: true,
      onClick: function (selectedRows) {
        handleAction(selectedRows, true);
      }
    }, {
      title: '批量审核不通过',
      useSelectRow: true,
      onClick: function (selectedRows) {
        handleAction(selectedRows, false);
      }
    }];

    let filters = [{
      title: '关键词',
      key: 'keywords',
      defaultValue: null,
      placehoder: '请输入关键词',
      type: 'input'
    }, {
      title: '评论类型',
      key: 'has_pic',
      defaultValue: '-1',
      values: commentTypes,
      type: 'select'
    }, {
      title: '状态',
      key: 'status',
      defaultValue: '-1',
      values: commentStatus,
      type: 'select'
    }, {
      title: '评价时间',
      key: [
        'start_at', 'end_at'
      ],
      type: 'dateRange'
    }];

    let modalTitle = this.state.reply.editing ? '编辑回复' : '回复评论';

    return (
        <div className="comment-list">
            <Modal title={modalTitle}
                visible={this.state.reply.show}
                onOk={this.submitReply}
                onCancel={this.cancelReply}>
                {this.state.reply.context}
            </Modal>
            <BaseList filters = {filters} table = {tableData} actionButtons = {actionButtons}/>
        </div>
    );
  }

});

module.exports = List;
