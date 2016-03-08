'use strict';

import {
  Modal,
  Select,
  message,
  Popconfirm,
  Switch
} from 'antd';
const Option = Select.Option;
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';

function tip(res) {
  res = res || {
    code: true,
    msg: '失败，服务器返回异常'
  };

  let method = res.code
    ? 'error'
    : 'success';
  message[method](res.msg);
}

// 获取容器内的表单域值
function getParams($wrap) {
  let inputSelector = '[name]';
  let $inputs = $wrap.find(inputSelector);
  let params = {};

  $inputs.each(function () {
    let $input = $(this);
    params[$input.attr('name')] = $input.val();
  });

  return params;
}

/* 商品分类列表 */
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
      },
      skuAttrGroup: [],
      specsAttrGroup: []
    };
  }

  /**
     * 转换属性组为原生对象，id作为key
     * @param  {[type]} attrs 属性组数组
     * @return {[type]}       属性对象
     */
  getAttrMap(attrs) {
    let attrMap = {};

    if (!attrs) {
      return attrMap;
    }

    attrs.forEach(function (attr) {
      attrMap[attr.id] = attr;
    });

    return attrMap;
  }

  componentDidMount() {
    let _this = this;

    // 加载属性组信息
    webapi.goods.getSkuAttrGroup().then(function (res_sku) {
      webapi.goods.getSpecsAttrGroup().then(function (res_specs) {
        let skuAttrGroup = res_sku.data.data;
        let specsAttrGroup = res_specs.data.data;
        _this.setState({'skuAttrGroup': skuAttrGroup, 'specsAttrGroup': specsAttrGroup, 'skuAttrGroupMap': _this.getAttrMap(skuAttrGroup), 'specsAttrGroupMap': _this.getAttrMap(specsAttrGroup)});
      });
    });
  }

  updateCategorySort(id, type) {
    var self = this,
      method = 'sort';

    if (type === 'upTop' || type === 'downBottom') {
      method = 'sortDigg';
      type = type === 'upTop'
        ? 'up'
        : 'down';
    }

    webapi.category[method]({handle_id: id, type: type}).then(function (res) {
      if (res.code === 0)
        self.refreshData();

// 重刷数据
      tip(res);
    });
  }

  refreshData() {
    Event.emit('baselist-refresh');
  }

  handleModalOk() {
    let self = this;
    let modal = this.state.modal;
    let method = 'add';

    if (modal.type === 'edit') {
      method = 'update';
    }

    let params = getParams($('#category-info-edit'));
    let valid = true;
    let errorMsg = '';

    if (!params.name.trim()) {
      valid = false;
      errorMsg = '请填写分类名';
    } else if (params.goods_attribute_group_id < 1 || params.goods_specification_group_id < 1) {
      valid = false;
      errorMsg = '请选择SKU属性组和规格组';
    }

    if (!valid) {
      message.error(errorMsg);
      modal.confirmLoading = false;
      self.setState(modal);

      return valid;
    }

    webapi.category[method](params).then(function (res) {
      if (res && !res.code) {
        modal.visible = false;
        self.refreshData(); // 重刷数据
        self.setState(modal);
        message.success('修改成功');
      } else {
        message.error(res.msg);
        modal.confirmLoading = false;
        self.setState(modal);
      }
    });
  }

  handleModalCancel() {
    let modal = this.state.modal;
    modal.visible = false;
    this.setState(modal);
  }

  // 根据传递data来判定 添加or编辑
  // 根据parent_id判定 是否是添加子分类
  onEditCategory(category, parent_id) {
    let self = this;
    parent_id = parent_id || 1;
    let isEdit = !!category;

    let modal = this.state.modal;
    let title = '添加分类';
    let type = 'add';
    let passProps = null;

    if (isEdit) {
      parent_id = category.parent_id;
      title = '编辑分类';
      type = 'edit';
      passProps = {
        parent_id: parent_id,
        id: category.id,
        name: category.name
      };
    }

    if (!isEdit && parent_id !== 1) {
      title = '添加子分类';
    }

    let attrSelect = function (input_id, value) {
      $('#' + input_id).val(value);
    };

    let getExtraParams = function () {
      // 编辑返回的参数
      if (isEdit) {
        return (
          <span>
            <input type="hidden" defaultValue={category.id} name="id"/>
          </span>
        );
      }
      // 添加返回的额外参数
      return (
        <div className="u-mt-10">
          <input type="hidden" defaultValue={parent_id} name="parent_id"/>
          <input type="hidden" defaultValue={0} name="tag"/>
          <input type="hidden" defaultValue={0} name="visible"/>
          <div className="u-mb-10">
            <label className="u-mr-20">请选择SKU组：</label>
            <Select
              defaultValue="-1"
              style={{
                width: '50%'
              }}
              onSelect={attrSelect.bind(null, 'sku-attr-group')}>
              <Option value="-1" key={'sku-attr-1'}>请选择</Option>
              {self.state.skuAttrGroup.map(function (skuAttr) {
                return <Option key={skuAttr.id} value={skuAttr.id}>{skuAttr.name}</Option>;
              })
}
            </Select>
            <input type="hidden" name="goods_attribute_group_id" id="sku-attr-group"/>
          </div>
          <div>
            <lable className="u-mr-20">请选择规则组：</lable>
            <Select
              defaultValue="-1"
              style={{
                width: '50%'
              }}
              onSelect={attrSelect.bind(null, 'specs-attr-group')}>
              <Option value="-1" key={'specs-1'}>请选择</Option>
              {self.state.specsAttrGroup.map(function (specs) {
                return <Option key={specs.id} value={specs.id}>{specs.name}</Option>;
              })
}
            </Select>
            <input type="hidden" name="goods_specification_group_id" id="specs-attr-group"/>
          </div>
        </div>
      );
    };

    let CategoryEditForm = React.createClass({
      render() {
        category = category || {};

        return (
          <div id="category-info-edit">
            <input name="name" defaultValue={category.name} className="ant-input" type="text" placeholder="请输入分类中文名称"/>
            <input name="slug" defaultValue={category.slug} className="ant-input u-mt-10" type="text" placeholder="请输入分类英文名称"/>
            {getExtraParams()}
            <p style={{
              margin: '10px 0 0'
            }}>SEO信息：</p>
            <input name="title" defaultValue={category.title} className="ant-input u-mt-10" type="text" placeholder="请输入标题"/>
            <input name="keywords" defaultValue={category.keywords} className="ant-input u-mt-10" type="text" placeholder="请输入关键词"/>
            <input
              name="description"
              defaultValue={category.description}
              className="ant-input u-mt-10"
              type="text"
              placeholder="请输入描述"/>
          </div>
        );
      }
    });

    modal.visible = true;
    modal.title = title;
    modal.type = type;
    modal.passProps = passProps;
    modal.context = <CategoryEditForm/>;

    this.setState(modal);
  }

  // 删除分类
  onRemoveCategory(id) {
    let self = this;
    webapi.category.remove({id: id}).then(function (res) {
      if (res && !res.code) {
        self.refreshData(); // 重刷数据
        message.success('删除分类成功');
      } else {
        message.error(res.msg);
      }
    });
  }

  switchShow(cid, checked) {
    let params = {
      'id': cid,
      'visible': + checked
    };
    webapi.category.update(params).then(function (res) {
      tip(res);
    });
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
        title: 'SKU组',
        dataIndex: null,
        render: function (text, record) {
          if (!self.state.skuAttrGroupMap) {
            return <span/>;
          }

          let skuAttrGroupId = record.goods_attribute_group_id;
          let skuAttrGroup = self.state.skuAttrGroupMap[skuAttrGroupId] || {};

          return (
            <span>{skuAttrGroup.name}</span>
          );
        }
      }, {
        title: '规格参数组',
        dataIndex: null,
        render: function (text, record) {
          if (!self.state.specsAttrGroupMap) {
            return <span/>;
          }

          let specsAttrGroupId = record.goods_specification_group_id;
          let specsAttrGroup = self.state.specsAttrGroupMap[specsAttrGroupId] || {};

          return (
            <span>{specsAttrGroup.name}</span>
          );
        }
      }, {
        title: '是否显示',
        dataIndex: null,
        render: function (text, record) {
          return (<Switch onChange={self.switchShow.bind(self, record.id)} checked={record.visible}/>);
        }
      }, {
        title: '移动',
        dataIndex: null,
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
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onEditCategory.bind(self, null, record.id)}>添加子分类</a>
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
      url: webapi.category.getList,
      resolve: resolve,
      rowKey: rowKey,
      //childrenColumnName: 'xx'
      //expandedRowRender: expandedRowRender
    };

    let actionButtons = [
      {
        title: '添加分类',
        onClick: function (selectedRows) {
          self.onEditCategory();
        }
      }
    ];

    return (
      <div className="category-list">
        <Modal
          title={this.state.modal.title}
          visible={this.state.modal.visible}
          onOk={this.handleModalOk.bind(this)}
          onCancel={this.handleModalCancel.bind(this)}
          confirmLoading={this.state.modal.confirmLoading}>
          {this.state.modal.context}
        </Modal>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }

}
