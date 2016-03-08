'use strict';

var Dropdown = antd.Dropdown;
var Menu = antd.Menu;
var MenuItem = Menu.Item;
var SubMenu = Menu.SubMenu;
import uuid from 'modules/helpers/uuid';

var myComponent = React.createClass({
  getInitialState() {
    return {
      data: [],
      selected: {
        id: 0,
        name: '所有分类'
      }
    };
  },
  getDefaultProps: function () {
    return {depth: 3, showParent: true};
  },
  componentDidMount() {
    this.init();
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.init();
    }
  },
  init() {
    var self = this;
    // 默认商品分类
    var getCategory = webapi.category.getList;
    // 如果是产品分类
    if (this.props.type === 'product') {
      getCategory = webapi.erp.getCategoryList;
    } else if (this.props.type === 'article') {
      getCategory = webapi.article.getCategory;
    }

    getCategory().then(function (res) {
      if (res && res.code === 0) {
        var selected = {
          id: 0,
          name: '所有分类'
        };
        if (self.props.selected) {
          var category = self.getCategory(self.props.selected, res.data);
          if (category) {
            selected.id = self.props.selected;
            selected.name = category.name;
          }
        }
        self.setState({data: res.data, selected: selected});
      }
    });
  },
  getCategory(id, data) {
    var self = this;
    var category = null;
    var mapCategory = function (id, data) {
      data.map(function (_category) {
        if (_category && _category.id !== id && _category.children.length) {
          mapCategory(id, _category.children);
        } else if (_category && _category.id === id) {
          category = _category;
        }
      });
    };
    mapCategory(id, data);
    return category;
  },
  selectCategory(obj) {
    var meta = obj.item.props.meta;
    var data = {
      id: obj.item.props.id,
      name: obj.item.props.children.replace('父级分类:', ''),
      meta: meta // 提供完整的分类信息，例如商品规格id
    };

    this.setState({selected: data});

    // 响应回调
    if (this.props.onChange) {
      this.props.onChange(data);
    }
  },
  renderSubCateMenu(item) {
    var self = this;

    if (this.props.showParent) {
      //  && item.children && item.children.length && item.children[0].id !== item.id
      if (item.children && item.children.length && item.children[0].id === item.id) {} else {
        var newItem = _.assign({}, item);
        delete newItem.children;
        newItem.name = '父级分类:' + newItem.name;
        item.children.unshift(newItem);
      }

    }

    return (
      <SubMenu key={item.id} title={item.name}>
        {item.children && item.children.map(function (sub_item) {
          if (sub_item.children && sub_item.children.length && sub_item.depth < self.props.depth) {
            return self.renderSubCateMenu(sub_item);
          } else {
            return (
              <MenuItem id={sub_item.id} key={uuid()} meta={sub_item}>
                {sub_item.name}
              </MenuItem>
            );
          }
        })}
      </SubMenu>
    );
  },
  renderCateMenu() {
    var self = this;

    return (
      <Menu mode="vertical" onClick={self.selectCategory}>
        <SubMenu key="0" title={this.state.selected.name}>
          {this.state.data.map(function (item) {
            return self.renderSubCateMenu(item);
          })}
        </SubMenu>
      </Menu>
    );
  },
  renderStaticText() {
    var self = this;
    return (
      <span>{this.state.selected.name}</span>
    );
  },
  render() {
    var cateMemuHtml = '';
    if (this.state.data.length) {
      cateMemuHtml = this.renderCateMenu();
    }
    if (this.props.disabled) {
      return this.renderStaticText();
    } else {
      return (
        <div style={this.props.style} className="category-selector">
          {cateMemuHtml}
        </div>
      );
    }

  }
});

module.exports = myComponent;
