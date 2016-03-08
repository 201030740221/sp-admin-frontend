'use strict';

import React from 'react';
import BaseForm from 'modules/page-components/base-form';
import CategorySelector from 'modules/category-selector/category-selector';

/* 数组中插入 */
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

/* 分类 */
var CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    if (this.props.disabled) {
      return (
        <p className="ant-form-text">
          <CategorySelector {...this.props} onChange={this.onChange} style={{
            width: 200
          }}/>
        </p>
      );
    } else {
      return (<CategorySelector {...this.props} onChange={this.onChange} style={{
        width: 200
      }}/>);
    }
  }
});

/* 添加商品 */
var AddGoods = React.createClass({
  getInitialState: function () {
    return {data: [], actionButtons: []};
  },
  setGoodsData: function (goodsData = {}) {
    let self = this;

    if (!goodsData.product) {
      SP.message.error('产品信息获取失败！');
      goodsData.product = {};
    }

    let data = [
      {
        formData: [
          {
            type: 'input',
            title: '商品名称',
            key: 'title',
            defaultValue: goodsData.title || '',
            placeholder: '请输入商品名称',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '副标题',
            key: 'subtitle',
            defaultValue: goodsData.subtitle || '',
            placeholder: '请输入商品副标题',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'select',
            title: '商品类型',
            key: 'production_type',
            defaultValue: goodsData.production_type || 0,
            placeholder: '',
            tips: '',
            values: [
              {
                name: '提供安装大件',
                key: 0,
                disabled: false
              }, {
                name: '不提供安装小件',
                key: 1,
                disabled: false
              }, {
                name: '不提供安装大件',
                key: 2,
                disabled: false
              }, {
                name: '提供安装小件',
                key: 3,
                disabled: false
              }
            ],
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'radio',
            title: '商品区分',
            key: 'goods_type',
            defaultValue: goodsData.goods_type || 0,
            placeholder: '',
            tips: '',
            values: [
              {
                name: '普通商品',
                key: 0,
                disabled: false
              }, {
                name: '积分商品',
                key: 1,
                disabled: false
              }, {
                name: '虚拟商品',
                key: 2,
                disabled: false
              }
            ],
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'custom',
            title: '产品名称',
            key: 'product_name',
            defaultValue: '',
            placeholder: '',
            render: () => {
              return (
                <p className="ant-form-text">{goodsData.product.title}</p>
              );
            }
          }, {
            type: 'custom',
            title: '产品分类',
            key: 'product_category_id',
            defaultValue: goodsData.product.product_category_id || 0,
            placeholder: '',
            render: () => {
              return (<CategorySearch disabled={true} type="product" selected={parseInt(goodsData.product.product_category_id || 0)}/>);
            }
          }, {
            type: 'custom',
            title: '商品分类',
            key: 'goods_category_id',
            defaultValue: goodsData.product.goods_category_id || '0',
            placeholder: '',
            render: () => {
              return (<CategorySearch disabled={true} selected={parseInt(goodsData.goods_category.category_id || 0)}/>);
            }
          }, {
            type: 'custom',
            title: '生产周期',
            key: 'product',
            placeholder: '',
            render: () => {
              return (
                <p className="ant-form-text">{goodsData.product.product_circle}天</p>
              );
            }
          }
        ]
      }
    ];

    webapi.erp.getUnit().then((res) => {
      if (res && !res.code) {
        let unitPanel = {
          type: 'custom',
          title: '计量单位',
          key: 'unit',
          defaultValue: '',
          placeholder: ''
        };
        res.data.map(function (unit, index) {
          if (index === goodsData.product.unit) {
            unitPanel.text = unit;
          }
        });
        unitPanel.render = function () {
          return <p className="ant-form-text">{unitPanel.text}</p>;
        };

        data[0].formData.insert(7, unitPanel);

        self.setState({
          data: data,
          actionButtons: [
            {
              title: '确定',
              onClick: function (validator) {
                validator(function (isValid, validData) {

                  if (isValid) {

                    let postData = {
                      title: validData[0].title,
                      subtitle: validData[0].subtitle,
                      product_id: goodsData.product.id,
                      goods_type: validData[0].goods_type,
                      production_type: validData[0].production_type
                    };

                    if (goodsData) {
                      // 编辑
                      webapi.goods.editGoods(goodsData.id, postData).then(function (res) {
                        if (res && !res.code) {
                          SP.message.success('商品基本信息编辑成功！');
                        } else {
                          SP.message.error(res.msg);
                        }
                      });
                    }

                  }

                });
              }
            }
          ]
        });

      }
    });
  },
  componentDidMount: function () {
    this.getGoods(this.props.id);
  },
  getGoods: function (id) {
    let self = this;
    let goodsData = {};

    if (id) {
      webapi.goods.getGoods(id).then(function (res) {
        if (res && !res.code) {
          goodsData = res.data;
          self.setGoodsData(goodsData);
        } else {
          SP.message.error('获取产品信息失败');
        }
      });
    } else {
      self.setGoodsData(self);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.id) {
      this.getGoods(nextProps.id);
    } else {
      this.getGoods();
    }
  },
  render: function () {
    return (
      <div style={{
        marginTop: 50
      }}>
        <BaseForm data={this.state.data} actionButtons={this.state.actionButtons}/>
      </div>
    );
  }
});

module.exports = AddGoods;
