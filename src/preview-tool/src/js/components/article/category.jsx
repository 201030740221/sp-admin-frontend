'use strict';

import {
  Modal,
  Switch,
  message,
  Popconfirm
} from 'antd';
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';

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

/* 分类列表 */
export default class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: {
        title: '温馨提示',
        passProps: null,
        type: null,
        visible: false,
        context: null
      }
    };
  }

  handleModalOk() {
    let self = this;
    let modal = this.state.modal;

    let val = $('#input-category-name').val();
    let alias = $('#input-category-alias').val();

    function submitFilter(callback) {

      let val = $('#input-category-name').val();
      let alias = $('#input-category-alias').val();

      if (val && alias) {
        callback(val, alias);
      } else {
        message.error('分类名称与代码不能为空');
      }

    }

    switch (modal.type) {
      case 'addCategory':
        submitFilter(function (val, alias) {
          webapi.article.addCategory({name: val, alias: alias, parent_id: 0}).then(function (res) {
            if (res && !res.code) {
              modal.visible = false;
              self.refreshData(); // 重刷数据
              self.setState(modal);
            } else {
              message.error(res.msg);
            }
          });
        });

        break;
      case 'addChildCategory':
        submitFilter(function (val, alias) {
          webapi.article.addCategory({name: val, alias: alias, parent_id: modal.passProps.id}).then(function (res) {
            if (res && !res.code) {
              modal.visible = false;
              self.refreshData(); // 重刷数据
              self.setState(modal);
            } else {
              message.error(res.msg);
            }
          });
        });

        break;
      case 'editCategory':
        submitFilter(function (val, alias) {
          webapi.article.updateCategory(modal.passProps.id, {
            name: val,
            alias: alias,
            parent_id: modal.passProps.parent_id
          }).then(function (res) {
            if (res && !res.code) {
              modal.visible = false;
              self.refreshData(); // 重刷数据
              self.setState(modal);
            } else {
              message.error(res.msg);
            }
          });
        });

        break;
      default:
        break;
    }
  }

  handleModalCancel() {
    let modal = this.state.modal;
    modal.visible = false;
    $('#input-category-name').val('');
    $('#input-category-alias').val('');
    this.setState(modal);
  }

  refreshData() {
    Event.emit('baselist-refresh');
  }

  showAddCategoryModal() {
    let modal = this.state.modal;
    modal.visible = true;
    modal.title = '添加分类';
    modal.type = 'addCategory';
    modal.passProps = null;
    let EditContext = React.createClass({
      render() {
        return (
          <div>
            <input id="input-category-name" className="ant-input" type="text" placeholder="请输入分类名称"/>
            <input id="input-category-alias" className="ant-input u-mt-10" type="text" placeholder="请输入展示名称"/>
          </div>
        );
      }
    });
    modal.context = <EditContext/>;
    this.setState(modal);
  }

  // 添加子分类
  onAddChildCategory(id) {
    let modal = this.state.modal;
    modal.visible = true;
    modal.title = '添加子分类';
    modal.type = 'addChildCategory';
    modal.passProps = {
      id: id
    };
    let EditContext = React.createClass({
      render() {
        return (
          <div>
            <input id="input-category-name" className="ant-input" type="text" placeholder="请输入子分类名称"/>
            <input id="input-category-alias" className="ant-input u-mt-10" type="text" placeholder="请输入子分类展示名称"/>
          </div>
        );
      }
    });
    modal.context = <EditContext/>;
    this.setState(modal);
  }

  // 删除分类
  onRemoveCategory(id) {
    let self = this;
    webapi.article.removeCategory(id).then(function (res) {
      if (res && !res.code) {
        self.refreshData(); // 重刷数据
        message.success('删除分类成功');
      } else {
        message.error(res.msg);
      }
    });
  }

  onEditCategory(data) {
    let self = this;
    let modal = this.state.modal;
    modal.visible = true;
    modal.title = '编辑分类';
    modal.type = 'editCategory';
    modal.passProps = {
      id: data.id,
      parent_id: data.parent_id,
      name: data.name,
      alias: data.alias
    };
    let EditContext = React.createClass({
      render() {
        return (
          <div>
            <input id="input-category-name" className="ant-input" type="text" defaultValue={data.name} placeholder="请输入分类名称"/>
            <input
              id="input-category-alias"
              className="ant-input u-mt-10"
              type="text"
              defaultValue={data.alias}
              placeholder="请输入展示名称"/>
          </div>
        );
      }
    });
    modal.context = <EditContext/>;
    this.setState(modal);
  }

  render() {
    let self = this;
    let columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        render: function (text, record) {
          return (
            <span>{text}</span>
          );
        }
      }, {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '展示名称',
        dataIndex: 'alias'
      }, {
        title: '是否展示',
        dataIndex: 'status',
        render: function (text, record) {
          let checked = record.status
            ? true
            : false;
          let onChange = function (updateState, checked) {
            //console.log(updateState, checked);

            webapi.article.updateCategoryStatus(record.id, {
              status: checked
                ? 1
                : 0
            }).then(function (res) {
              if (res && !res.code) {
                self.refreshData(); // 重刷数据
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
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onAddChildCategory.bind(self, record.id)}>添加子分类</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.onEditCategory.bind(self, record)}>编辑</a>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除这个分类吗？" onConfirm={self.onRemoveCategory.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let rowKey = function (record, index) {
      return record.id;
    };

    // let expandedRowRender = function(record, index){
    // 	console.log(record, index);
    // 	return (
    // 		<div>1111</div>
    // 	)
    // }

    function getCategoryList(data) {
      data.map(function (_data) {
        if (_data.children && _data.children.length) {
          getCategoryList(_data.children);
        } else {
          delete _data.children;
        }
      });
    }

    let resolve = function (result) {
      getCategoryList(result.data || []);
      return result.data || [];
    };

    let tableData = {
      columns: columns,
      pagination: false,
      pageSize: 10,
      url: webapi.article.listCategory,
      resolve: resolve,
      rowKey: rowKey
      // childrenColumnName: 'xx'
      // expandedRowRender: expandedRowRender
    };

    let actionButtons = [
      {
        title: '添加分类',
        onClick: function (selectedRows) {
          self.showAddCategoryModal();
          // console.log(selectedRows;
        }
      }
    ];

    return (
      <div className="category-list">
        <Modal
          onCancel={this.handleModalCancel.bind(this)}
          onOk={this.handleModalOk.bind(this)}
          title={this.state.modal.title}
          visible={this.state.modal.visible}>
          {this.state.modal.context}
        </Modal>
        <BaseList actionButtons={actionButtons} table={tableData}/>
      </div>
    );
  }

}
