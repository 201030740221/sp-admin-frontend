'use strict';

import React from 'react';
import {Switch, Select} from 'antd';
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';
import RequestProxy from 'modules/helpers/request-proxy';
import getValue from 'modules/helpers/get-value';
import CouponSelector from 'modules/coupon-selector/coupon-selector';

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
  updateState: function () {
    // this.setState(state);
  },
  render: function () {
    return (<Switch checked={this.state.checked} onChange={this.onChange}/>);
  }
});

const InputBox = React.createClass({
  getInitialState: function () {
    return {val: this.props.val, oldval: this.props.val};
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({checked: nextProps.val});
  },
  onChange: function (e) {
    let val = e.target.value;
    this.setState({val: val});
  },
  getOldVal: function (e) {
    let val = e.target.value;
    this.setState({oldval: val});
  },
  updateVal: function (e) {
    let val = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(val, this.state.oldval);
    }
  },
  render: function () {
    return (<input
      type="text"
      className="ant-input"
      onFocus={this.getOldVal}
      onBlur={this.updateVal}
      onChange={this.onChange}
      value={this.state.val}/>);
  }
});

const Specifications = React.createClass({
  getInitialState: function () {
    return {data: [], couponData: {}, tags: []};
  },
  componentDidMount: function () {

    var self = this;

    webapi.coupon.getCouponList({}).then(function (res) {
      if (res && !res.code) {
        self.setState({couponData: res.data});
      } else {
        SP.message.error(res.msg);
      }
    });

    webapi.tags.tag.find({type: 2}).then((tagRes) => {
      if (tagRes && !tagRes.code) {
        this.setState({tags: tagRes.data});
      }
    });

  },

  updateSkuInfo: function (id, data, success, error) {
    webapi.goods.editGoodsSku(id, data).then(RequestProxy(() => {
      Event.emit('baselist-refresh');
      SP.message.success('设置成功');
      if (success)
        success();
    }
    , function () {
      if (error)
        error();
    }
    ));
  },

  updateSkuSeo: function (data, success, error) {
    webapi.goods.updateSkuSeo(data).then(RequestProxy(() => {
      Event.emit('baselist-refresh');
      SP.message.success('设置成功');
      if (success)
        success();
    }
    , function () {
      if (error)
        error();
    }
    ));
  },

  updateSkuSale: function (data, success, error) {
    webapi.goods.updateSkuSale(data).then(RequestProxy(() => {
      Event.emit('baselist-refresh');
      SP.message.success('设置成功');
      if (success)
        success();
    }
    , function () {
      if (error)
        error();
    }
    ));
  },

  updateSkuPrice: function (id, data, success, error) {
    webapi.goods.editGoodsSkuPrice(id, data).then(RequestProxy(() => {
      Event.emit('baselist-refresh');
      SP.message.success('设置成功');
      if (success)
        success();
    }
    , function () {
      if (error)
        error();
    }
    ));
  },

  updateDefaultSku: function (goods_id, primary_sku_id, success, error) {
    webapi.goods.updateDefaultSku({goods_id: goods_id, primary_sku_id: primary_sku_id}).then(RequestProxy(() => {
      Event.emit('baselist-refresh');
      SP.message.success('设置成功');
      if (success)
        success();
    }
    , function () {
      if (error)
        error();
    }
    ));
  },

  onSelectChange: function (val) {},

  /*规格列表*/
  specificationsTable: function () {

    let self = this;

    let columns = [
      {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: '展示名',
        dataIndex: '',
        render: function (text, record) {

          function updateSkuSale(val, oldval) {
            if (val !== oldval) {
              self.updateSkuSale({
                id: getValue(record, 'goods_sku.id'),
                goods_id: getValue(record, 'goods_sku.goods_id'),
                sku_display: getValue(record, 'goods_sku.sku_display'),
                name: val
              });
            }
          }

          return (<InputBox onBlur={updateSkuSale} val={getValue(record, 'goods_sku.name')}/>);
        }
      }, {
        title: '默认SKU',
        dataIndex: '',
        render: function (text, record) {
          let status = false;
          if (getValue(record, 'goods_sku.goods.primary_sku_id') === getValue(record, 'goods_sku.id')) {
            status = true;
          }
          function onChange(updateState, checked) {
            if (getValue(record, 'goods_sku.goods_id')) {
              if (checked) {
                self.updateDefaultSku(getValue(record, 'goods_sku.goods_id'), getValue(record, 'goods_sku.id'), function () {
                  updateState({checked: checked});
                }, function () {
                  updateState({
                    checked: !checked
                  });
                });
              } else {
                updateState({
                  checked: !checked
                });
              }
            } else {
              SP.message.error('设置失败');
            }
          }
          return (<SwitchBox checked={status} callback={onChange}/>);
        }
      }, {
        title: '列表页展示',
        dataIndex: '',
        render: function (text, record) {
          let status = false;
          if (getValue(record, 'goods_sku.sku_display') === 1) {
            status = true;
          }
          function onChange(updateState, checked) {
            self.updateSkuSale({
              id: getValue(record, 'goods_sku.id'),
              goods_id: getValue(record, 'goods_sku.goods_id'),
              sku_display: checked
                ? 1
                : 0,
              name: getValue(record, 'goods_sku.name')
            }, function () {
              updateState({checked: checked});
            }, function () {
              updateState({
                checked: !checked
              });
            });
          }
          return (<SwitchBox checked={status} callback={onChange}/>);
        }
      }, {
        title: '商品标签',
        dataIndex: '',
        render: (text, record) => {
          let handleTagChange = (tag_id) => {
            // 绑定或者删除标签
            webapi.goods.goodsSkuTagUpdate({
              goods_sku_id: getValue(record, 'goods_sku.id'),
              tag_id: parseInt(tag_id)
            }).then((tagRes) => {
              if (tagRes && !tagRes.code) {
                SP.message.success('商品标签绑定成功！');
              } else {
                SP.message.error('商品标签绑定失败！');
              }
            });
          };
          let options = this.state.tags.map((tag) => {
            return (
              <Select.Option key={tag.id} value={tag.id + ''}>{tag.name}</Select.Option>
            );
          });
          return (
            <Select
              onChange={handleTagChange}
              value={getValue(record, 'goods_sku.goods_sku_tag.0.tag_id') + '' || '0'}
              style={{
                width: 150
              }}>
              <Select.Option key='0' value="0">无</Select.Option>
              {options}
            </Select>
          );
        }
      }, {
        title: 'SKU编号',
        dataIndex: 'sku_sn'
      }, {
        title: '产品编号',
        dataIndex: 'product_sn'
      }, {
        title: '包装数量',
        dataIndex: 'pieces'
      }, {
        title: '产品尺寸',
        dataIndex: 'product_size'
      }, {
        title: '包装尺寸',
        dataIndex: 'pack_size'
      }, {
        title: '体积',
        dataIndex: 'dimension'
      }, {
        title: '重量',
        dataIndex: 'weight'
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record) {
      return record.id;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.id
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (<BaseList table={tableData}/>);
  },

  /*价格信息列表*/
  successCallBack: function (data) {
    if (data) {
      Event.emit('baselist-refresh');
    }
  },
  priceInfoTable: function () {

    let self = this;

    let columns = [
      {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: '成本价(不含税)',
        dataIndex: 'cost_without_tax',
        render: function (text, record) {
          return (
            <span>￥{getValue(record, 'cost_without_tax')}</span>
          );
        }
      }, {
        title: '成本价(含税)',
        dataIndex: 'cost_with_tax',
        render: function (text, record) {
          return (
            <span>￥{getValue(record, 'cost_with_tax')}</span>
          );
        }
      }, {
        title: '标价',
        dataIndex: 'basic_price',
        render: function (text, record) {

          function updateSkuInfo(val, oldval) {
            if (val !== oldval) {
              self.updateSkuPrice(getValue(record, 'goods_sku.goods_sku_price.id'), {
                goods_sku_id: getValue(record, 'goods_sku.id'),
                price: getValue(record, 'goods_sku.goods_sku_price.price'),
                basic_price: val
              });
            }
          }

          return (<InputBox onBlur={updateSkuInfo} val={getValue(record, 'goods_sku.goods_sku_price.basic_price')}/>);
        }
      }, {
        title: '售价',
        dataIndex: 'price',
        render: function (text, record) {

          function updateSkuInfo(val, oldval) {
            if (val !== oldval) {
              self.updateSkuPrice(getValue(record, 'goods_sku.goods_sku_price.id'), {
                goods_sku_id: getValue(record, 'goods_sku.id'),
                basic_price: getValue(record, 'goods_sku.goods_sku_price.basic_price'),
                price: val
              });
            }
          }

          return (<InputBox onBlur={updateSkuInfo} val={getValue(record, 'goods_sku.goods_sku_price.price')}/>);
        }
      }, {
        title: '优惠券',
        dataIndex: 'coupon',
        render: function (text, record) {

          return (<CouponSelector goods_sku={record.goods_sku} couponData={self.state.couponData} changeCallBack={self.successCallBack}/>);
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record) {
      return record.id;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.id
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (<BaseList table={tableData}/>);

  },

  /*SEO信息列表*/
  seoInfoTable: function () {

    let self = this;

    let columns = [
      {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: '标题',
        dataIndex: 'basic_price',
        render: function (text, record) {

          function updateSkuInfo(val, oldval) {
            if (val !== oldval) {
              self.updateSkuSeo({
                id: getValue(record, 'goods_sku.id'),
                goods_id: getValue(record, 'goods_sku.goods_id'),
                title: val,
                keywords: getValue(record, 'goods_sku.keywords'),
                description: getValue(record, 'goods_sku.description')
              });
            }
          }

          return (<InputBox onBlur={updateSkuInfo} val={getValue(record, 'goods_sku.title')}/>);
        }
      }, {
        title: '关键字',
        dataIndex: '',
        render: function (text, record) {

          function updateSkuInfo(val, oldval) {
            if (val !== oldval) {
              self.updateSkuSeo({
                id: getValue(record, 'goods_sku.id'),
                goods_id: getValue(record, 'goods_sku.goods_id'),
                keywords: val,
                title: getValue(record, 'goods_sku.title'),
                description: getValue(record, 'goods_sku.description')
              });
            }
          }

          return (<InputBox onBlur={updateSkuInfo} val={getValue(record, 'goods_sku.keywords')}/>);
        }
      }, {
        title: '描述',
        dataIndex: '',
        render: function (text, record) {

          function updateSkuInfo(val, oldval) {
            if (val !== oldval) {
              self.updateSkuSeo({
                id: getValue(record, 'goods_sku.id'),
                goods_id: getValue(record, 'goods_sku.goods_id'),
                title: getValue(record, 'goods_sku.title'),
                keywords: getValue(record, 'goods_sku.keywords'),
                description: val
              });
            }
          }

          return (<InputBox onBlur={updateSkuInfo} val={getValue(record, 'goods_sku.description')}/>);
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record) {
      return record.id;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.id
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (<BaseList table={tableData}/>);
  },

  render: function () {

    return (
      <div>
        {this.props.action === 'specifications'
          ? this.specificationsTable()
          : null}
        {this.props.action === 'price'
          ? this.priceInfoTable()
          : null}
        {this.props.action === 'seo'
          ? this.seoInfoTable()
          : null}
      </div>
    );
  }
});

module.exports = Specifications;
