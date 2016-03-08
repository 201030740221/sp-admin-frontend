'use strict';

import {
  Modal,
  Table,
  message
} from 'antd';
const confirm = Modal.confirm;
import ThemeChangeModal from 'modules/theme-change-modal/theme-change-modal';
require('stores/theme-collocation-store');
require('stores/theme-collocation-list');
import PreviewBtn from './preview-btn';

const myComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps() {
    return {params: {}};
  },
  getInitialState() {
    var self = this;
    return {
      visible: false,
      previewMode: this.props.query.preview !== 'true',
      columns: [
        {
          title: '主题位置',
          dataIndex: 'sort_id',
          render: function (text, record) {
            return (
              <span>位置{record.sort_id}</span>
            );
          }
        }, {
          title: '主题名称',
          dataIndex: 'theme_collocation',
          render: function (text, record) {
            if (record.theme_collocation) {
              return (
                <span>{record.theme_collocation.name}</span>
              );
            } else {
              return (
                <span>暂时没有搭配</span>
              );
            }
          }
        }, {
          title: '操作',
          dataIndex: '',
          render: function (text, record) {
            return (
              <span>
                <a href="javascript:;" onClick={self.openThemeChangeModal.bind(null, record.id, record.theme_collocation)}>修改搭配方案</a>
              </span>
            );
          }
        }
      ],
      dataSource: []
    };
  },
  componentWillUnmount: function () {
    liteFlux.store('theme-collocation-list').reset();
  },
  openThemeChangeModal(id, theme_collocation) {
    if (!id) {
      mssage.error('错误操作');
      return false;
    }

    var selected = {
      id: null,
      name: null
    };

    // 设置已选择主题
    if (theme_collocation) {
      selected = {
        id: theme_collocation.id,
        name: theme_collocation.name
      };
    }

    S('theme-collocation', {
      id: id,
      data: theme_collocation,
      selected: selected
    });

    this.setModalVisible(true);
  },
  setModalVisible(val) {

    this.setState({visible: val});

  },
  modalCallback() {
    if (this.state.previewMode) {
      this.setState({dataSource: S('theme-collocation-list').data});
    } else {
      this.getList(); // 刷新页面
    }

    this.setModalVisible(false);
  },
  onBack() {
    this.context.router.push('/');
  },
  getList() {
    var self = this;
    var params = {
      size: 3,
      page: 1
    };
    if (self.state.previewMode) {
      params['type'] = 'preview';
    } else {
      params['type'] = 'publish';
    }

    webapi.themeCollocation.getIndexAdList(params).then(function (res) {
      if (res && res.code === 0) {
        self.setState({dataSource: res.data});
        S('theme-collocation-list', {data: res.data});
      } else if (res && res.code === 40001) {
        message.error(res.msg);
      } else {
        message.error('请求数据有误');
      }
    });
  },
  componentDidMount() {
    this.getList();
  },
  // 保存预览
  onSavePreview(callback) {
    // 保存 JSON，并返回 iframe
    var self = this;
    var store = S('theme-collocation-list').data;
    var data = {
      ids: [],
      sorts: []
    };
    store.map(function (item) {
      data.ids.push(item.theme_collocation_id);
      data.sorts.push(item.sort_id);
    });

    if (self.state.previewMode) {
      data['type'] = 'preview';
    } else {
      data['type'] = 'publish';
    }
    webapi.themeCollocation.updateIndexMultiply(data).then(function (res) {
      if (res && res.code === 0) {
        if (callback && typeof callback === 'function') {
          callback();
        } else {
          message.success('保存主题推荐位数据成功');
          self.context.router.push('/frame/preview');
          A('app').refreshPreview();
        }
      } else {
        message.error('保存主题推荐位数据失败');
      }
    });
  },
  // 保存发布
  onSavePublish() {
    var self = this;
    confirm({
      title: '您是否确认要发布到官网',
      content: '确认要发布到官网，主题推荐位将会立即生效',
      onOk: function () {
        // 保存数据，并返回 iframe
        self.onSavePreview(function () {
          webapi.themeCollocation.updateIndexPreviewToPublish(function (res) {
            if (res && res.code === 0) {
              message.success('发布主题推荐位成功');
            } else {
              message.error('发布主题推荐位失败');
            }
          });
        });
      },
      onCancel: function () {}
    });

  },
  render() {
    self = this;
    var returnBtn = function () {
      var returnBack = function () {
        window.history.back();
      };
      return (
        <div className="fl">
          <button className="ant-btn ant-btn-primary" onClick={returnBack}>
            <span className="anticon anticon-left"></span>
            <span className="ml10">返回</span>
          </button>
        </div>

      );
    };

    var rowKey = function (data) {
      return data.id;
    };

    return (
      <div>
        <ThemeChangeModal
          data={{
            visible: this.state.visible,
            visibleCallback: this.setModalVisible,
            callback: this.modalCallback
          }}
          previewMode={this.state.previewMode || false}/>
        <div className="xpage">
          <div className="row mb20 u-mt-20 clearfix">
            {returnBtn()}
            <PreviewBtn/>
            {(this.state.previewMode) && (
              <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={self.onSavePreview}>保存预览</button>
            )}
            {(this.state.previewMode) && (
              <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={self.onSavePublish}>发布官网</button>
            )}
          </div>
          <Table bordered={true} rowKey={rowKey} columns={this.state.columns} dataSource={this.state.dataSource}/>
        </div>
      </div>
    );
  }
});

module.exports = myComponent;
