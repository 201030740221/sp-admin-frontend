'use strict';

import {
  Modal,
  message,
  Popconfirm
} from 'antd';
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';

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

    function submitFilter(callback) {

      var val = $('#input-category-name').val();
      var code = $('#input-category-code').val();

      if (val && code) {
        callback(val, code);
      } else {
        message.error('分类名称与代码不能为空');
      }

    }

    switch (modal.type) {
      case 'addCategory':
        submitFilter(function (val, code) {
          webapi.erp.addCategory({name: val, code: code, parent_id: 1}).then(function (res) {
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

        submitFilter(function (val, code) {
          webapi.erp.addCategory({name: val, code: code, parent_id: modal.passProps.id}).then(function (res) {
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

        submitFilter(function (val, code) {
          webapi.erp.editCategory(modal.passProps.id, {
            name: val,
            code: code
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
    $('#input-category-code').val('');
    this.setState(modal);
  }

  updateCategorySort(id, type) {
    var self = this;
    if (type === 'up' || type === 'down') {
      webapi.erp.updateCategorySortBySibling({handle_id: id, type: type}).then(function (res) {
        if (res && !res.code) {
          self.refreshData(); // 重刷数据
          message.success('调整排序成功');
        } else {
          message.error(res.msg);
        }
      });
    } else if (type === 'upTop' || type === 'downBottom') {
      type = type === 'upTop'
        ? 'up'
        : 'down';
      webapi.erp.updateCategorySortByParent({handle_id: id, type: type}).then(function (res) {
        if (res && !res.code) {
          self.refreshData(); // 重刷数据
          message.success('调整排序成功');
        } else {
          message.error(res.msg);
        }
      });
    }
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
            <input id="input-category-code" className="ant-input u-mt-10" type="text" placeholder="请输入分类代码"/>
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
            <input id="input-category-code" className="ant-input u-mt-10" type="text" placeholder="请输入子分类代码"/>
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
    webapi.erp.removeCategory(id).then(function (res) {
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
      name: data.name,
      code: data.code
    };
    let EditContext = React.createClass({
      render() {
        return (
          <div>
            <input id="input-category-name" className="ant-input" type="text" defaultValue={data.name} placeholder="请输入分类名称"/>
            <input
              id="input-category-code"
              className="ant-input u-mt-10"
              type="text"
              defaultValue={data.code}
              placeholder="请输入分类代码"/>
          </div>
        );
      }
    });
    modal.context = <EditContext/>;
    this.setState(modal);
  }

  render() {

    var self = this;

    var columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        render: function (text, record) {
          return (
            <span>{text}</span>
          );
        }
      }, {
        title: '分类代码',
        dataIndex: 'code'
      }, {
        title: '移动',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.updateCategorySort.bind(self, record.id, 'upTop')}>置顶</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.updateCategorySort.bind(self, record.id, 'up')}>上移</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.updateCategorySort.bind(self, record.id, 'down')}>下移</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.updateCategorySort.bind(self, record.id, 'downBottom')}>置底</a>
            </span>
          );
        }
      }, {
        title: ' 操作',
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
          delete _data['children'];
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
      url: webapi.erp.getCategoryList,
      resolve: resolve,
      rowKey: rowKey,
      //childrenColumnName: 'xx'
      //expandedRowRender: expandedRowRender
    };

    let actionButtons = [
      {
        title: '添加分类',
        onClick: function (selectedRows) {
          self.showAddCategoryModal();
          //console.log(selectedRows);
        }
      }
    ];

    return (
      <div className="category-list">
        <Modal
          title={this.state.modal.title}
          visible={this.state.modal.visible}
          onOk={this.handleModalOk.bind(this)}
          onCancel={this.handleModalCancel.bind(this)}>
          {this.state.modal.context}
        </Modal>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }

}
