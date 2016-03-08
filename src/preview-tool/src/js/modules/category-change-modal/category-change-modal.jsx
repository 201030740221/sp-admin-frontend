'use strict';

var Modal = antd.Modal;
var message = antd.message;
var Menu = antd.Menu;
var Table = antd.Table;
var Dropdown = antd.Dropdown;
import CategorySelector from 'modules/category-selector/category-selector';

var AlertModal = React.createClass({
  mixins: [liteFlux.mixins.storeMixin('category-list')],
  getInitialState: function () {
    var self = this;
    return {loading: false, visible: false};
  },
  componentWillReceiveProps(nextProps) {
    var store = S('category-list');
    var selected = store.selected;
    selected.category_id = 0;
    selected.name = '';
    S('category-list', {selected: selected});
    this.setState(nextProps.data);
  },
  showModal() {
    this.setState({visible: true});
    this.props.data.visibleCallback(true);
  },
  handleOk() {
    var self = this;
    this.setState({loading: true});
    var store = S('category-list');

    if (!store.selected.category_id) {
      message.error('请先选择分类');
      this.setState({loading: false});
      return;
    }

    if (this.props.previewMode) {

      var module = self.props.params.module;
      if (self.props.params.module === 'category-list') {
        module = 'category';
      }

      webapi.frame.getFrame(null, {
        page: self.props.params.page,
        module: module,
        category: store.selected.category_id
      }).then(function (result) {

        if (store.selected.action === 'edit') { // 更新

          if ((store.selected.old_category_id === store.selected.category_id && result.data.length) || !result.data.length) {
            A('category-list').update(store.selected);
            self.setState({loading: false});
            self.props.data.callback();
          } else {
            message.error('分类已存在');
            self.setState({loading: false});
          }
        }

        if (store.selected.action === 'new') {

          if (!result.data.length) {
            if (store.selected.module === 'similar-list') {
              store.selected.name = 'similar-list';
            } else if (!store.selected.name) {
              store.selected.name = '1-2-2';
            }
            var amount = store.selected.module === 'similar-list'
              ? 4
              : 9;
            var data = {
              page: store.selected.page,
              module: store.selected.module,
              name: store.selected.name || store.selected.module,
              category: store.selected.category_id,
              version: 1,
              terminal: 1,
              description: store.selected.category.name,
              amount: amount,
              status: 0,
              publish: 0
            };
            webapi.frame.addFrame(data).then(function (res) {
              if (res && res.code === 0) {
                message.success('添加成功');
                var newFrame = S('category-list').data;
                newFrame.push(res.data);
                S('category-list', {data: newFrame});

                self.setState({loading: false});
                self.props.data.callback();
              } else {
                message.error('添加失败');
              }
              self.setState({loading: false});
            });
          } else {
            message.error('分类已存在');
            self.setState({loading: false});
          }

        }

      });

    } else {

      if (store.selected.action === 'edit') { // 更新
        var data = {
          //name: store.selected.name,
          category: store.selected.category_id
        };
        webapi.frame.updateFrame(store.selected.id, data).then(function (res) {
          if (res && res.code === 0) {
            message.success('修改成功');
            self.props.data.callback();
          } else {
            message.error('修改失败');
          }
          self.setState({loading: false});
        });
      }

      if (store.selected.action === 'new') { // 新建
        if (!store.selected.name) {
          store.selected.name = '1-2-2';
        }
        var amount = store.selected.module === 'similar-list'
          ? 4
          : 9;
        var data = {
          page: store.selected.page,
          module: store.selected.module,
          name: store.selected.name || store.selected.module,
          category: store.selected.category_id,
          version: 1,
          terminal: 1,
          description: store.selected.category.name,
          amount: amount,
          status: 0,
          publish: 0
        };
        webapi.frame.addFrame(store.selected.id, data).then(function (res) {
          if (res && res.code === 0) {
            message.success('添加成功');
            self.props.data.callback();
          } else {
            message.error('添加失败');
          }
          self.setState({loading: false});
        });
      }

    }

  },
  handleCancel() {
    this.setState({loading: false, visible: false});
    this.props.data.visibleCallback(false);
  },
  changeCategroy(cate) { // 改变搜索分类
    var store = S('category-list');
    var selected = store.selected;
    selected.category_id = cate.id;
    selected.category = selected.category || {};
    selected.category.name = cate.name;
    S('category-list', {selected: selected});
  },
  // 改变展现类型
  onChangeSearchMenu(event) {
    var store = S('category-list');
    var selected = store.selected;
    var name = '';
    switch (parseInt(event.key)) {
      case 1:
        name = '1-2-2';
        break;
      case 2:
        name = '1-0-3';
        break;
      default:
        break;

    }
    selected.name = name;
    S('category-list', {selected: selected});
  },
  renderPutaway() {
    return (
      <Menu onSelect={this.onChangeSearchMenu}>
        <Menu.Item key={1}>{"1-2-2"}</Menu.Item>
        <Menu.Item key={2}>{"1-0-3"}</Menu.Item>
      </Menu>
    );
  },
  render() {
    var self = this;

    var footer = [< button key = "back" className = "ant-btn ant-btn-lg" onClick = {
        this.handleCancel
      } > 关 闭 < /button>, <button key="submit" className={'ant-btn ant-btn-primary ant-btn-lg ' + (this.state.loading ? 'ant-btn-loading':'')} onClick={this.handleOk}> 保 存 </button >];

    var selectHtml = '';
    if (S('category-list').selected.category_id) {
      var _name = S('category-list').selected.module === 'category'
        ? ' - ' + S('category-list').selected.name
        : '';
      selectHtml = (
        <div>已选择：{S('category-list').selected.category.name + _name}</div>
      );
    }

    var putawayName = function () {
      if (S('category-list').selected.name === '1-2-2') {
        return "1-2-2";
      } else if (S('category-list').selected.name === '1-0-3') {
        return "1-0-3";
      } else {
        return "请选择展示样式";
      }
    };

    var selectStyleBox = '';
    if (S('category-list').selected.action === 'new' && S('category-list').selected.module === 'category') {
      selectStyleBox = (
        <Dropdown overlay={this.renderPutaway()} trigger={['click']}>
          <button className="ant-btn ant-btn-menu">
            {putawayName()}
            <i className="anticon anticon-down"></i>
          </button>
        </Dropdown>
      );
    }

    return (
      <Modal
        footer={footer}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        ref="category-change-modal"
        title="选项卡 分类管理"
        visible={this.state.visible}
        width="500">
        <div className="theme-select-box">
          <div className="mb10 clearfix">
            {selectHtml}
          </div>
          <div className="row clearfix mt20 mb10">
            <div className="col-8">
              <div className="pl5 pr5">
                <CategorySelector
                  showParent={this.props.showParent}
                  depth={this.props.depth}
                  onChange={this.changeCategroy}
                  selected={this.state['category-list'].selected.category_id}/>
              </div>
            </div>
            <div className="col-8">
              <div className="pl5 pr5">
                {selectStyleBox}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = AlertModal;
