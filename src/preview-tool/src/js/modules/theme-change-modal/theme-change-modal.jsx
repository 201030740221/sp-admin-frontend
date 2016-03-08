'use strict';

var Modal = antd.Modal;
var message = antd.message;
var Menu = antd.Menu;
var Table = antd.Table;
var Dropdown = antd.Dropdown;
import BaseList from 'modules/page-components/base-list';

var AlertModal = React.createClass({
  mixins: [liteFlux.mixins.storeMixin('theme-collocation')],
  getInitialState: function () {
    var self = this;
    return {loading: false, visible: false, dataSource: []};
  },
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data);
  },
  changeTheme(id, name, status) {
    if (status) {
      S('theme-collocation', {
        selected: {
          id: id,
          name: name
        }
      });
    } else {
      message.error('不能添加未上架搭配');
    }

  },
  showModal() {
    this.setState({visible: true});
    this.props.data.visibleCallback(true);
  },
  handleOk() {
    var self = this;
    this.setState({loading: true});
    var store = S('theme-collocation');

    if (!store.selected.id) {
      message.error('请先选择搭配方案');
      this.setState({loading: false});
      return;
    }

    var data = {
      id: store.id,
      theme_collocation_id: store.selected.id
    };

    if (this.props.previewMode) {
      data.name = store.selected.name;
      A('theme-collocation-list').update(data);
      self.setState({loading: false});
      self.props.data.callback();
    } else {
      webapi.themeCollocation.updateIndexAdData(data).then(function (res) {
        if (res && res.code === 0) {
          message.success('修改成功');
          self.props.data.callback();
        } else {
          message.error('修改失败');
        }
        self.setState({loading: false});
      });
    }

  },
  handleCancel() {
    this.setState({loading: false, visible: false});
    this.props.data.visibleCallback(false);
  },
  renderPutaway() {
    return (
      <Menu onSelect={this.onChangeSearchMenu}>
        <Menu.Item key={0}>全部状态</Menu.Item>
        <Menu.Item key={1}>未发布</Menu.Item>
        <Menu.Item key={2}>已发布</Menu.Item>
      </Menu>
    );
  },
  render() {
    var self = this;

    var footer = [< button key = "back" className = "ant-btn ant-btn-lg" onClick = {
        this.handleCancel
      } > 关 闭 < /button>, <button key="submit" className={'ant-btn ant-btn-primary ant-btn-lg ' + (this.state.loading ? 'ant-btn-loading':'')} onClick={this.handleOk}> 保 存 </button >];

    var selectHtml = '';
    if (S('theme-collocation').selected.id) {
      selectHtml = (
        <div>已选择：{S('theme-collocation').selected.name}</div>
      );
    }

    let columns = [
      {
        title: '主题名称',
        dataIndex: 'name'
      }, {
        title: '状态',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              {record.status
                ? '已发布'
                : '未发布'}
            </span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.changeTheme.bind(null, record.id, record.name, record.status)}>选择</a>
            </span>
          );
        }
      }
    ];

    let filters = [
      {
        title: '主题名称',
        key: 'name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '发布状态',
        key: 'status',
        defaultValue: '',
        values: [
          {
            name: '所有状态',
            key: '',
            disabled: false
          }, {
            name: '已发布',
            key: '1',
            disabled: false
          }, {
            name: '未发布',
            key: '0',
            disabled: false
          }
        ],
        type: 'select'
      }
    ];

    // let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      //rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 3,
      url: webapi.themeCollocation.getThemeCollocationList,
      params: { // 额外的请求参数
        //product_category_id: 1
      },
      //resolve: resolve,
      rowKey: rowKey,
      isList: true
    };

    return (
      <Modal
        footer={footer}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        ref="upload-box-modal"
        title="主题推荐位管理"
        visible={this.state.visible}
        width="900">
        <div className="theme-select-box clearfix">
          <div className="mb10 clearfix">
            {selectHtml}
          </div>
          <BaseList filters={filters} table={tableData}/>
        </div>
      </Modal>
    );
  }
});

module.exports = AlertModal;
