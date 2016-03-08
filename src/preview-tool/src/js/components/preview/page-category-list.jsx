'use strict';


import {
  Switch,
  Modal,
  Table,
  Popconfirm,
  message
} from 'antd';
const confirm = Modal.confirm;
import CategoryListChangeModal from 'modules/category-change-modal/category-change-modal';
require('stores/category-list');
import PreviewBtn from './preview-btn';

const myComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps() {
    return {params: {}};
  },
  getInitialState() {
    let self = this;
    return {
      mounted: false,
      visible: false,
      previewMode: this.props.query.preview !== 'true',
      columns: [
        {
          title: '位置',
          dataIndex: '',
          render: function (text, record, index) {
            return (
              <span>位置{index + 1}</span>
            );
          }
        }, {
          title: '分类名称',
          dataIndex: '',
          render: function (text, record) {
            if (record.category_name) {
              return (
                <div>
                  分类：
                  <span className="mr20">{record.category_name.name}</span>
                  类型：
                  <span>{record.name}</span>
                </div>
              );
            } else {
              return (
                <span>暂时没有指定分类</span>
              );
            }
          }
        }, {
          title: '是否激活',
          dataIndex: '',
          render: function (text, record) {
            return (<Switch checked={record.status} onChange={self.onChangeCategoryVisiable.bind(null, record.id)}/>);
          }
        }, {
          title: '操作',
          dataIndex: '',
          render: function (text, record) {
            return (
              <span className="clearfix">
                <a href="javascript:;" onClick={self.setPosition.bind(null, record.id, 'up')}>上移</a>
                <span className="ant-divider"></span>
                <a href="javascript:;" onClick={self.setPosition.bind(null, record.id, 'down')}>下移</a>
                <span className="ant-divider"></span>
                <a
                  href="javascript:;"
                  onClick={self.openTabModal.bind(null, record.id, record.category, record.category_name, record.name)}>修改信息</a>
                <span className="ant-divider"></span>
                <a href="javascript:;" onClick={self.jumpEditPage.bind(null, record.category)}>修改推荐位</a>
                <Popconfirm title="确定要删除这个任务吗？" onConfirm={self.removeTab.bind(null, record.id)}>
                  <a className="fr" href="javascript:;">删除选项卡</a>
                </Popconfirm>
              </span>
            );
          }
        }
      ],
      dataSource: []
    };
  },
  componentDidMount() {
    this.getList();
    this.setState({mounted: true});
  },
  componentWillUnmount: function () {
    this.setState({mounted: false});
    liteFlux.store('category-list').reset();
  },
  setPosition(id, position) {
    var self = this;
    A('category-list').setPosition(id, position, function (data) {
      self.setState({
        dataSource: data
      }, function () {
        message.success('位置调整成功');
      });
    });
  },
  onChangeCategoryVisiable(id, status) {
    var store = S('category-list');
    var viewData = store.data;
    var index = _.findIndex(viewData, function (chr) {
      return chr.id === id;
    });
    viewData[index].status = status;

    S('category-list', {data: viewData});
    this.setState({dataSource: S('category-list').data});
  },
  jumpEditPage(category_id) {
    var self = this;
    var params = this.props.params;
    this.setState({
      mounted: false
    }, function () {
      if (params.page === 'goods-detail') {
        self.context.router.push('/frame/module/' + params.page + '/similar-list?category=' + category_id);
      } else {
        self.context.router.push('/frame/module/' + params.page + '/category?category=' + category_id);
      }

    });

  },
  removeTab(id) {

    if (this.state.previewMode) {
      var store = S('category-list');
      var viewData = store.data;
      var index = _.findIndex(viewData, function (chr) {
        return chr.id === id;
      });
      viewData.splice(index, 1);
      // 更新显示数据
      S('category-list', {data: viewData});
      this.setState({dataSource: S('category-list').data});
      message.success('删除成功');
    } else {
      webapi.frame.removeFrame(id).then(function (res) {
        if (res && res.code === 0) {
          message.success('删除成功');
        } else {
          message.error('删除失败');
        }
      });
    }

  },
  openTabModal(id, category_id, category, name) {
    if (!id) {
      message.error('错误操作');
      return false;
    }

    var selected = {
      action: 'edit',
      page: this.props.params.page,
      module: this.props.params.module,
      id: null,
      category_id: null,
      category: null,
      name: null
    };

    if (this.props.params.page === 'index') {
      selected.module = 'category';
    }

    // 设置已选择主题
    if (category) {
      selected = _.assign({}, selected, {
        id: id,
        category_id: category_id,
        old_category_id: category_id,
        category: category,
        name: name
      });
    }

    S('category-list', {selected: selected});

    this.setModalVisible(true);
  },
  onCreateTab() {

    var selected = {
      action: 'new',
      page: this.props.params.page,
      module: this.props.params.module,
      id: null,
      category_id: null,
      category: null,
      name: null
    };

    if (this.props.params.page === 'index') {
      selected.module = 'category';
    }

    S('category-list', {selected: selected});

    this.setModalVisible(true);
  },
  setModalVisible(val) {

    this.setState({
      visible: val
    }, function () {
      if (!val) {
        ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
      }
    });

  },
  modalCallback() {
    if (this.state.previewMode) {
      this.setState({dataSource: S('category-list').data});
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
      page: this.props.params.page,
      module: this.props.params.module
    };

    if (this.props.params.page === 'index') {
      params.module = 'category';
    }

    var resultFn = function (res) {
      if (res && res.code === 0) {
        var data = res.data;
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        self.setState({dataSource: data});
        S('category-list', {data: data});
      } else if (res && res.code === 40001) {
        message.error(res.msg);
      } else {
        message.error('请求数据有误');
      }
    };
    // if (this.state.previewMode) {
    //     params.version = 1;
    //     webapi.frame.getStashFrame(params).then(resultFn);
    // } else {
    webapi.frame.getFrame(null, params).then(resultFn);
    // }

  },
  // 保存预览
  onSavePreview(callback) {
    // 保存 JSON，并返回 iframe
    var self = this;
    var params = this.props.params;
    var json_data = S('category-list').data;
    var data = {
      frame_json: JSON.stringify(json_data),
      page: this.props.params.page,
      module: this.props.params.module,
      // version: 1
    };

    if (this.props.params.page === 'index') {
      data.module = 'category';
    }

    webapi.frame.saveStashFrame(data).then(function (res) {
      if (res && res.code === 0) {
        if (callback && typeof callback === 'function') {
          callback();
        } else {
          message.success('保存成功');
          self.context.router.push('/frame/preview');
          A('app').refreshPreview();
        }
      } else {
        message.error('保存失败');
      }
    });
  },
  // 保存发布
  onSavePublish() {
    var self = this;
    confirm({
      title: '您是否确认要发布到官网',
      content: '确认要发布到官网，分类位置将会立即生效',
      onOk: function () {
        // 保存数据，并返回 iframe
        self.onSavePreview(function () {
          var params = self.props.params;
          var json_data = S('category-list').data;
          var data = {
            page: params.page,
            frame_json: JSON.stringify(json_data),
            // module: "category",
            version: 1
          };
          webapi.frame.publishStashFrame(data).then(function (res) {
            if (res && res.code === 0) {
              message.success('发布成功');
            } else {
              mssage.error('发布失败');
            }
          });
        });
      },
      onCancel: function () {}
    });

  },
  render() {
    self = this;

    var renderModel = function () {
      var depth = 3;
      var showParent = true;
      if (self.props.params.page === 'goods-detail' && self.props.params.module === 'similar-list') {
        depth = 2;
        showParent = false;
      }

      if (self.state.mounted) {
        return (<CategoryListChangeModal
          data={{
            visible: self.state.visible,
            visibleCallback: self.setModalVisible,
            callback: self.modalCallback
          }}
          previewMode={self.state.previewMode || false}
          depth={depth}
          showParent={showParent}
          params={self.props.params}/>);
      }
    };
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
        {renderModel()}
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
            <button className="ant-btn ant-btn-primary u-fr" onClick={this.onCreateTab}>新建位置</button>
          </div>
          <Table rowKey={rowKey} bordered={true} columns={this.state.columns} dataSource={this.state.dataSource}/>
        </div>
      </div>
    );
  }
});

module.exports = myComponent;
