'use strict';

import BaseForm from 'modules/page-components/base-form';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import CategorySelector from 'modules/category-selector/category-selector';
import SupplierSelector from 'modules/supplier-selector/supplier-selector';
import {
  Select
} from 'antd';
const Option = Select.Option;

/* 数组中插入 */
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/* 图片上传 */
const PictureUploadComponent = React.createClass({
  getInitialState: function () {
    let data = [];
    this.props.data.map(function (item) {
      data.push(item.id);
    });

    return {data: data};
  },
  onChange: function (data) {
    let res = [];
    data.map(function (item) {
      res.push(item.id);
    });
    if (this.props.onChange) {
      this.props.onChange(res);
    }
  },
  render: function () {
    return (<PictureUploader {...this.props} onChange={this.onChange}/>);
  }
});

/* 分类 */
const CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id, data.meta.goods_specification_group_id);
    }
  },
  render: function () {
    return (<CategorySelector
      selected={this.props.selected}
      style={{
        width: 200
      }}
      type={this.props.type}
      onChange={this.onChange}/>);
  }
});

/* 测试例子 */
let Test = React.createClass({
  onChange: function (e) {
    if (this.props.onChange)
      this.props.onChange(e.target.value);
  },
  render: function () {
    return (
      <input className={"ant-input search-base-item"} defaultValue='test' onChange={this.onChange} type="search"></input>
    );
  }
});

/* 通用规格编辑 */
let AttrEditor = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isGeneral: true,
      attr: {},
      KeyValue: this.props.KeyValue || '0',
      InputValue: this.props.InputValue
    };
  },
  componentDidMount: function () {
    if (this.state.InputValue) {
      this.setState({isGeneral: false});

      let attr = {
        type: 'custom',
        value: this.state.InputValue
      };
      this.props.onChange(attr);
    } else if (this.state.KeyValue !== '0') {
      let attr = {
        type: 'general',
        value: this.state.KeyValue
      };
      this.props.onChange(attr);
    }
  },
  onInputChange: function (e) {
    let attr = {
      type: 'custom',
      value: e.target.value
    };
    this.setState({attr: attr, InputValue: e.target.value});
    if (this.props.onChange) {
      this.props.onChange(attr);
    }
  },
  onSelectChange: function (val) {
    let attr = {
      type: 'general',
      value: val
    };
    let self = this;
    this.setState({attr: attr, KeyValue: val});
    if (this.props.onChange) {
      this.props.onChange(attr);
    }
  },
  changeStatus: function () {
    this.setState({
      isGeneral: !this.state.isGeneral
    });
  },
  render: function () {

    let optionTags = this.props.values.map(function (val) {
      return (
        <Option key={val.key} value={val.key} disabled={val.disabled}>
          {val.name}
        </Option>
      );
    });

    if (this.state.isGeneral) {
      return (
        <span>
          <Select
            value={this.state.KeyValue}
            size="large"
            style={{
              width: 200
            }}
            onChange={this.onSelectChange}>
            {optionTags}
          </Select>
          <span className="u-ml-15">
            <a onClick={this.changeStatus} href="javascript:;">使用自定义规格</a>
          </span>
        </span>
      );
    } else {
      return (
        <span>
          <input
            value={this.state.InputValue}
            style={{
              width: 200
            }}
            type="text"
            className="ant-input"
            onChange={this.onInputChange}/>
          <span className="u-ml-15">
            <a onClick={this.changeStatus} href="javascript:;">选择通用规格</a>
          </span>
        </span>
      );
    }

  }
});

/* 添加商品 */
const AddGoods = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {data: [], actionButtons: []};
  },
  renderAttrList: function (id, specification) {
    var self = this;
    var formData = self.state.data;
    var attrData = {
      title: '商品规格',
      formData: []
    };

    function renderSpecification(data) {
      data.map(function (attr) {
        // 只取 template_type = 1
        if (attr.template_type === 1) {

          let values = [];
          let custom = '';
          let attrId = attr.current_value || 0;
          values.push({name: '请选择', key: '0', disabled: false});

          attr.value.map(function (val) {
            // 只取 template_type = 1

            if (val.template_type === 1) {
              values.push({
                name: val.attribute_value,
                key: '' + val.id,
                disabled: false
              });
            }

            if (val.template_type === 0 && val.id === attr.current_value) {
              custom = val.attribute_value;
              attrId = 0;
            }

          });

          var attrPanel = {
            type: 'custom',
            title: attr.name,
            key: '' + attr.id,
            defaultValue: '',
            placeholder: '',
            render: function () {
              return (<AttrEditor KeyValue={'' + attrId} InputValue={custom} values={values}/>);
            }
          };

          attrData.formData.push(attrPanel);

        }
      });

      formData[1] = attrData;
      self.setState({data: formData});
    }

    if (specification) {
      renderSpecification(specification);
    } else {
      webapi.erp.attributeGroupDetail({id: id, type: 1}).then(function (res) {
        if (res && !res.code) {
          renderSpecification(res.data);
        }
      });
    }

  },
  setProductData: function (productData = {}, specification) {
    let self = this;
    let media = [];
    if (productData.media) {
      productData.media.map(function (item) {
        media.push(item.id);
      });
    }
    // 准备产品图片数据
    var picture_data = [];
    if (productData.media) {
      productData.media.map(function (_media) {
        picture_data.push({id: _media.id, url: _media.full_path});
      });
    }

    let data = [
      {
        title: '基本信息',
        formData: [
          {
            type: 'input',
            title: '产品名称',
            key: 'title',
            defaultValue: productData.title || '',
            placeholder: '请输入产品名称，100字节内',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填，100字节'
              }
            }
          }, {
            type: 'custom',
            title: '产品分类',
            key: 'product_category_id',
            defaultValue: productData.product_category_id || '',
            placeholder: '',
            render: function () {
              return (<CategorySearch type="product" selected={parseInt(productData.product_category_id || '0')}/>);
            },
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'custom',
            title: '商品分类',
            key: 'goods_category_id',
            defaultValue: productData.goods_category_id || '',
            placeholder: '',
            onChange: function (id, goods_specification_group_id) {
              if (!productData.product_category_id && goods_specification_group_id) {
                self.renderAttrList(goods_specification_group_id);
              }
            },
            render: function () {
              if (productData.goods_category_id) {
                return (
                  <p className="ant-form-text">{productData.category.name}</p>
                );
              } else {
                return (<CategorySearch selected={parseInt(productData.goods_category_id || '0')}/>);
              }

            },
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'custom',
            title: '供应商',
            key: 'supplier_id',
            defaultValue: productData.supplier_id || '',
            placeholder: '',
            render: function () {
              return (<SupplierSelector selected={productData.supplier_id || null}/>);
            },
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'input',
            title: '生产周期',
            key: 'product_circle',
            defaultValue: productData.product_circle || '',
            placeholder: '单位为天',
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'input',
            title: '起订量',
            key: 'minimum_quantity',
            defaultValue: productData.minimum_quantity || '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'pictureUploader',
            title: '图片',
            key: 'media',
            defaultValue: media,
            placeholder: '',
            render: function () {
              return (<PictureUploadComponent
                data={picture_data}
                pictureLength="1"
                removeSuccess={null}
                uploadSuccess={null}
                useQiniu={true}/>);
            }
          }, {
            type: 'textarea',
            title: '备注',
            key: 'remarks',
            defaultValue: productData.remarks || '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }
        ]
      }
    ];

    webapi.erp.getUnit().then(function (res) {
      let unitPanel = {
        type: 'select',
        title: '计量单位',
        key: 'unit',
        defaultValue: productData.unit || '0',
        placeholder: '',
        values: [],
        validator: {
          required: true,
          message: {
            required: '必选'
          }
        }
      };
      if (res && !res.code) {
        res.data.map(function (unit, index) {
          unitPanel.values.push({
            name: unit,
            key: '' + index,
            disabled: false
          });
        });

        data[0].formData.insert(4, unitPanel);

        self.setState({
          data: data,
          actionButtons: [
            {
              title: ' 确   定 ',
              onClick: function (validator) {
                validator(function (isValid, validData) {

                  if (isValid) {

                    let specification = {};

                    if (validData[1]) {
                      _.mapKeys(validData[1], function (value, key) {

                        if (value && typeof value === 'object') {
                          specification[key] = {
                            general: value.type === 'general'
                              ? value.value
                              : 0,
                            custom: value.type === 'custom'
                              ? value.value
                              : ''
                          };
                        }
                      });
                    }

                    let postData = {
                      title: validData[0].title,
                      unit: parseInt(validData[0].unit),
                      product_circle: validData[0].product_circle,
                      minimum_quantity: validData[0].minimum_quantity,
                      remarks: validData[0].remarks,
                      supplier_id: validData[0].supplier_id,
                      product_category_id: validData[0].product_category_id,
                      goods_category_id: validData[0].goods_category_id,
                      media: validData[0].media,
                      specification: specification
                    };

                    if (!isEmptyObject(productData)) {
                      // 编辑
                      webapi.erp.editProduct(productData.id, postData).then(function (res) {
                        if (res && !res.code) {
                          SP.message.success('产品基本信息编辑成功！');
                        } else {
                          SP.message.error(res.msg);
                        }
                      });
                    } else {
                      // 添加
                      webapi.erp.addProduct(postData).then(function (res) {
                        if (res && !res.code) {
                          SP.message.success('产品基本信息添加成功！');
                          self.context.router.push('/product/sku/' + res.data.id);
                        } else {
                          SP.message.error(res.msg);
                        }
                      });
                    }

                  }

                });

                return false;
              }
            }
          ]
        }, function () {
          if (productData.goods_category_id) {
            self.renderAttrList(productData.goods_category_id, specification);
          }
        });

      }
    });
  },
  componentDidMount: function () {
    this.getProduct(this.props.params.id);
  },
  getProduct: function (id) {
    let self = this;
    let productData = {};
    let specification = null;

    if (id) {
      webapi.erp.getProduct(id).then(function (res) {
        if (res && !res.code) {
          productData = res.data.product;
          specification = res.data.specification;
          self.setProductData(productData, specification);
        } else {
          SP.message.error('获取产品信息失败');
        }
      });
    } else {
      self.setProductData();
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.id) {
      this.getProduct(nextProps.params.id);
    } else {
      this.getProduct();
    }
  },
  render: function () {

    return (<BaseForm data={this.state.data} actionButtons={this.state.actionButtons}/>);
  }
});

module.exports = AddGoods;
