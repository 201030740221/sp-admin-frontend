'use strict';

import {Icon, Menu} from 'antd';
const SubMenu = Menu.SubMenu;

let SideBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {current: null};
  },
  handleMenu(item) {
    this.context.router.push(item.key);
    this.setState({current: item.key});
  },
  render() {
    let menus = [
      {
        title: '运营中心',
        subMenus: [
          {
            title: '商品管理',
            icon: 'tags-o',
            items: [
              {
                name: '商品列表',
                path: '/goods'
              }, {
                name: '商品分类',
                path: '/goods/category'
              }, {
                name: '属性规格',
                path: '/goods/attribute/0'
              }, {
                name: '商品标签',
                path: '/goods/tags/2'
              }
            ]
          }, {
            title: '文章管理',
            icon: 'file-text',
            items: [
              {
                name: '添加文章',
                path: '/article/add'
              }, {
                name: '文章列表',
                path: '/article'
              }, {
                name: '文章分类',
                path: '/article/category'
              }, {
                name: '节点管理',
                path: '/article/node/1'
              }
            ]
          }, {
            title: '专题管理',
            icon: 'folder',
            items: [
              {
                name: '专题列表',
                path: '/topic'
              }
            ]
          }, {
            title: '用户管理',
            icon: 'user',
            items: [
              {
                name: '用户管理',
                path: '/member'
              }, {
                name: '用户注册统计',
                path: '/member/register'
              }
            ]
          }, {
            title: '推荐位管理',
            icon: 'link',
            items: [
              {
                name: '页面列表',
                path: '/frame'
              }
            ]
          }, {
            title: '订单管理',
            icon: 'shopping-cart',
            items: [
              {
                name: '订单列表',
                path: '/order'
              }, {
                name: '订单回收站',
                path: '/order/recycle'
              }
            ]
          }, {
            title: '评价晒单管理',
            icon: 'meh',
            items: [
              {
                name: '评价列表',
                path: '/comment/list'
              }, {
                name: '积分设置',
                path: '/comment/config'
              }
            ]
          }, {
            title: '栏目管理',
            icon: 'bars',
            items: [
              {
                name: '栏目列表',
                path: '/navigation'
              }
            ]
          }, {
            title: '卡券管理',
            icon: 'book',
            items: [
              {
                name: '卡券列表',
                path: '/coupon'
              }
            ]
          }, {
            title: '活动管理',
            icon: 'book',
            items: [
              {
                name: '活动列表',
                path: '/activity'
              }
            ]
          }
        ]
      }, {
        title: '商品中心',
        subMenus: [
          {
            title: '供应商管理',
            icon: 'team',
            items: [
              {
                name: '供应商列表',
                path: '/supplier'
              }
            ]
          }, {
            title: '产品管理',
            icon: 'tablet',
            items: [
              {
                name: '产品列表',
                path: '/product'
              }, {
                name: '产品分类',
                path: '/product/category'
              }, {
                name: '产品回收站',
                path: '/product/recycle-bin'
              }
            ]
          }
        ]
      }, {
        title: '系统中心',
        subMenus: [
          {
            title: '权限管理',
            icon: 'setting',
            items: [
              {
                name: '后台用户列表',
                path: '/privilege/users'
              }, {
                name: '角色管理',
                path: '/privilege/roles'
              }
            ]
          }
        ]
      }
    ];
    return (
      <aside className="aside-container">
        {menus.map(function (menu, index) {
          return (
            <div key={'menu-' + index}>
              <h4 className="aside-title">{menu.title}</h4>
              <Menu mode="inline" onClick={this.handleMenu} selectedKeys={[this.state.current]}>
                {menu.subMenus.map(function (subMenu, subIndex) {
                  return (
                    <SubMenu key={'sub-menu-' + subIndex} title={<span><Icon type={subMenu.icon}/>{subMenu.title}</span>}>
                      {subMenu.items.map(function (item) {
                        return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
                      })}
                    </SubMenu>
                  );
                })}
              </Menu>
            </div>
          );
        }.bind(this))}
      </aside>
    );
  }
});

module.exports = SideBar;
