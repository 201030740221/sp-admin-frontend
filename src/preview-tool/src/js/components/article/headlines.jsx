'use strict';

import {
  message,
  Popconfirm,
  Switch
} from 'antd';

import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';
import HeadlineEditModal from './headline-edit-modal';

const SwitchBox = React.createClass({
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
  render: function () {
    return (<Switch checked={this.state.checked} onChange={this.onChange}/>);
  }
});

/* 文章列表 */
const HeadlinesList = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  setModalVisible: function (visible, node) {
    this.setState({
      visible: visible
    }, function () {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  },

  getInitialState: function () {
    return {record: null, node_id: this.props.params.parent_id, visible: false};
  },

  onShowModal: function (record) {
    this.setState({record: record, visible: true});
  },

  refreshData() {
    Event.emit('baselist-refresh');
  },

  // 删除头条
  removeHeadlines(id) {
    let self = this;
    webapi.article.removeHeadlines(id).then(function (res) {
      if (res && !res.code) {
        self.refreshData(); // 重刷数据
        message.success('删除成功');
      } else {
        message.error('删除失败,' + res.msg);
      }
    });
  },

  // 编辑文章
  edit(id) {
    this.context.router.push('/article/edit/' + id);
  },

  render() {
    let self = this;

    let columns = [
      {
        title: '头条标题',
        dataIndex: 'title'
      }, {
        title: '图片',
        dataIndex: null,
        render: function (text, record) {
          let pic = null;
          if (record.cover) {
            pic = <img src={record.cover.media.full_path + '?imageView2/2/w/100/h/100/q/80'} width="100"/>;
          }
          return (
            <span>{pic}</span>
          );
        }
      }, {
        title: '文章',
        dataIndex: 'article_id'
      }, {
        title: '排序',
        dataIndex: 'sort_id',
        render: function (text, record) {
          let sort_id = record.sort_id;
          let onChange = function (event) {
            let _sort_id = event.target.value;
            webapi.article.setHeadlinesSort({
              ids: [record.id],
              sort_ids: [_sort_id]
            }).then(function (res) {
              if (res && !res.code) {
                //self.refreshData(); // 重刷数据
                message.success('设置成功');
              } else {
                message.error('设置失败,' + res.msg);
              }

            });
          };
          return (
            <span>
              <input
                onBlur={onChange}
                style={{
                  width: 80,
                  textAlign: 'center'
                }}
                className="ant-input"
                defaultValue={sort_id}
                type="text"/>
            </span>
          );
        }
      }, {
        title: '是否展示',
        dataIndex: 'status',
        render: function (text, record) {
          let checked = record.status
            ? true
            : false;
          let onChange = function (updateState, checked) {
            webapi.article.setHeadlinesStatus({
              ids: [record.id],
              status: checked
                ? 1
                : 0
            }).then(function (res) {
              if (res && !res.code) {
                message.success('设置成功');
              } else {
                message.error('设置失败,' + res.msg);
                updateState({
                  checked: !checked
                });
              }

            });

          };
          return (
            <span>
              <SwitchBox checked={checked} callback={onChange}/>
            </span>
          );
        }
      }, {
        title: '操作',
        dataIndex: null,
        render: function (text, record) {
          let divider = <span className="ant-divider"></span>;

          return (
            <span>
              <a href="javascript:;" onClick={self.onShowModal.bind(self, record)}>编辑</a>
              {divider}
              <Popconfirm title="确定要删除这个头条吗？" onConfirm={self.removeHeadlines.bind(self, record.id)}>
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
      return result.data;
    };

    let tableData = {
      columns: columns,
      url: webapi.article.getHeadlines,
      params: {
        node_id: self.props.params.parent_id
      },
      isList: false,
      resolve: resolve,
      rowKey: rowKey
      // childrenColumnName: 'xx'
      // expandedRowRender: expandedRowRender
    };

    let actionButtons = [
      {
        title: '添加头条',
        onClick: function (selectedRows) {
          self.onShowModal({});
        }
      }
    ];

    return (
      <div className="headlines-list">
        <HeadlineEditModal
          nodeId={this.state.node_id}
          record={this.state.record}
          setModalVisible={this.setModalVisible}
          visible={this.state.visible}/>
        <BaseList actionButtons={actionButtons} table={tableData}/>
      </div>
    );
  }

});

module.exports = HeadlinesList;
