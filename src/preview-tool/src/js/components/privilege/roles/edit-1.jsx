'use strict';

var Tree = antd.Tree;
var TreeNode = Tree.TreeNode;

var message = antd.message;
import Event from 'lite-flux/lib/event';

const imageView = '?imageView2/2/w/80';

var RoleEdit = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {source: {}};
  },
  componentDidMount: function () {

    let self = this;
    let id = this.props.params.id;

    if (id !== 'create') {
      webapi.privilege.getRolesDetail(+ id, {}).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取数据成功');
          self.setState({source: res.data});
        } else {
          SP.message.error(res.msg);
        }
      });
    }
    if (id === 'create') {
      webapi.privilege.getRoleResources({}).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取权限列表成功');
          self.setState({
            source: {
              resource_group: res.data
            }
          });
        } else {
          SP.message.error(res.msg);
        }
      });
    }
  },

  /*input 或 textarea change*/
  changHandle: function (e) {

    let val = e.target.value,
      index = e.target.id;
    let source = this.state.source;

    source[index] = val;

    this.setState({source: source});

  },

  setCheckAllChildren: function (list, type) {
    var _this = this;
    list.map(function (item, index) {
      if (type) {
        item.role_has_privilege = true;
      } else {
        item.role_has_privilege = false;
      }
      _this.setCheckAllChildren(item.resources, type);
    });

  },
  /*设置 选中状态*/
  isCheckHandle: function (list, name, el) {

    var _this = this,
      value = el.target.value;

    if (name === 'parentNode') {
      list.map(function (item, index) {
        if (item.id ===+ value) {
          if (el.target.checked) {

            item.role_has_privilege = true;
            _this.setCheckAllChildren(item.resources, true);

          } else {

            item.role_has_privilege = false;
            _this.setCheckAllChildren(item.resources, false);

          }
        }
      });
    }

    if (name === 'childrenNode') {
      var length = list.length;
      list.map(function (item, index) {
        item.resources.forEach(function (_item, _key) {
          if (_item.id ===+ value) {
            if (el.target.checked) {
              _item.role_has_privilege = true;
            } else {

              _item.role_has_privilege = false;

              if (_item.group_id === item.id) {
                item.role_has_privilege = false;
              }

            }
          }
        });
      });
    }

  },
  /*check change*/
  onChangeCheckBox: function (e) {
    var value = e.target.value,
      name = e.target.name,
      _this = this,
      source = this.state.source,
      list = source.resource_group || [];

    _this.isCheckHandle(list, name, e);

    source.resource_group = list;
    this.setState({source: source});
  },

  showNode: function (list, type, margin_class) {

    var _this = this;
    var _this_node = list.map(function (item, key) {

      item.resources = item.resources || [];

      return (
        <div key={item.id} className={margin_class}>
          <div className='row u-mt-15' key={key}>
            <div className={'col-2 ' + margin_class}>
              <input
                className='each_checkbox'
                type="checkbox"
                name={type}
                value={item.id}
                onChange={_this.onChangeCheckBox}
                checked={item.role_has_privilege}/>
            </div>
            <div className={'col-4 ' + margin_class}>{item.name}</div>
          </div>
          {_this.showNode(item.resources, 'childrenNode', 'u-ml-20')
}
        </div>
      );
    });
    return _this_node;
  },

  saveHandle: function () {

    let self = this;
    var source = this.state.source;
    source.resource_group = source.resource_group || [];
    var ids = [];

    source.resource_group.map(function (item, index) {

      /* if(item.role_has_privilege){
                ids.push(item.id)
            }
            */
      item.resources.forEach(function (_item, _key) {
        if (_item.role_has_privilege) {
          ids.push(_item.id);
        }
      });
    });

    let id = self.props.params.id;
    let data = {
      name: source.name,
      remark: source.remark,
      resource_ids: ids
    };

    if (id !== 'create') {
      webapi.privilege.updatePrivilegeRoles(+ id, data).then(function (res) {
        if (res && !res.code) {
          SP.message.success('更新数据成功');
        } else {
          SP.message.error(res.msg);
        }
      });
    }
    if (id === 'create') {
      webapi.privilege.addPrivilegeRoles(data).then(function (res) {
        if (res && !res.code) {
          SP.message.success('添加数据成功');
          self.context.router.push('/privilege/rolesList');
        } else {
          SP.message.error(res.msg);
        }
      });
    }

  },
  return: function () {
    this.context.router.push('/privilege/roles');
  },

  render: function () {

    let self = this;
    var source = this.state.source;
    source.resource_group = source.resource_group || [];

    return (
      <div className="ant-form-horizontal">
        <div style={{
          height: '60'
        }}>
          <button
            type="button"
            style={{
              float: 'right'
            }}
            className="ant-btn ant-btn-lg u-mr-10"
            onClick={this.return}>返回角色列表</button>
        </div>
        <h3 className='u-mb-10'>角色信息</h3>
        <h4 className="ant-form-item">
          <label htmlFor="title" className="col-2" required={true}>角色名称：</label>
          <div className="col-14">
            <textarea className="ant-input" id="name" placeholder="" value={source.name} onChange={self.changHandle}></textarea>
          </div>
        </h4>
        <h4 className="ant-form-item">
          <label htmlFor="dec" className="col-2">角色描述：</label>
          <div className="col-14">
            <textarea className="ant-input" id="remark" placeholder="" value={source.remark} onChange={self.changHandle}></textarea>
          </div>
        </h4>
        <h3>权限列表</h3>
        <div>
          {self.showNode(source.resource_group, 'parentNode', 'u-ml-10')
}
        </div>
        <div className='u-mt-30' style={{
          textAlign: 'center'
        }}>
          <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.saveHandle}>保存</button>
        </div>
      </div>
    );
  }
});

module.exports = RoleEdit;
