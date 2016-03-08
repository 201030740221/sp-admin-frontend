'use strict';

import React from 'react';
import BaseList from 'modules/page-components/base-list';
import CategorySelector from 'modules/category-selector/category-selector';
import Event from 'lite-flux/lib/event';

const imageView = '?imageView2/2/w/80';

var CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector onChange={this.onChange}/>);
  }
});

var Goods = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {tags: []};
  },
  componentDidMount: function () {
    webapi.tags.tag.find({type: 2}).then((tagRes) => {
      if (tagRes && !tagRes.code) {
        this.setState({tags: tagRes.data});
      }
    });
  },
  editItem: function (id, sku_sn) {
    this.context.router.push('/goods/publish/' + id + '/' + sku_sn + '/basic');
  },
  editGoodsSkuStatus: function (status, ids) {
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    if (ids.length) {
      webapi.goods.editGoodsSkuStatus({sku_status: status, sku_ids: ids}).then(function (res) {
        if (res && !res.code) {
          Event.emit('baselist-refresh');
          SP.message.success('调整成功');
        } else {
          SP.message.error(res.msg);
        }
      });
    } else {
      SP.message.error('没有选择商品');
    }
  },
  previewGoods: function (sku_sn) {
    // 预览
    if (!sku_sn) {
      SP.message.error('无sku，不能预览');
      return;
    }
    let domain = location.host.replace('admin', 'www');
    window.open('http://' + domain + '/item/' + sku_sn + '.html');
  },
  render: function () {

    let self = this;

    let columns = [
      {
        title: '商品图片',
        dataIndex: '',
        render: function (text, record) {

          if (!record.goods_sku) {
            return <span>未设置</span>;
          }

          let ImgUrl = null;

          if (record.goods_sku.has_cover) {
            record.goods_sku.has_cover.media = record.goods_sku.has_cover.media || {};
            ImgUrl = <img src={record.goods_sku.has_cover.media.full_path + imageView}/>;
          }

          return (
            <a href="javascript:;">
              {ImgUrl}
            </a>
          );
        }
      }, {
        title: '产品图片',
        dataIndex: '',
        render: function (text, record) {

          if (!record.goods_sku) {
            return <span>未设置</span>;
          }

          let ImgUrl = null;

          if (record.product.media && record.product.media.length) {
            ImgUrl = <img src={record.product.media[0].full_path + imageView}/>;
          }

          return (
            <a href="javascript:;">
              {ImgUrl}
            </a>
          );
        }
      }, {
        title: '产品信息',
        dataIndex: '',
        render: function (text, record) {
          return (
            <div>
              <div>产品名称：{record.product.title}</div>
              <div>产品编码：{record.product_sn}</div>
              <div>规格：{record.attribute_name}</div>
            </div>
          );
        }
      }, {
        title: '展示信息',
        dataIndex: '',
        render: function (text, record) {

          let goodsInfo = '';
          if (record.goods_sku) {
            goodsInfo = (
              <div>
                <div>商品名称：{record.goods_sku.goods
                    ? record.goods_sku.goods.title
                    : '未设置'}</div>
                <div>sku编码：{record.sku_sn}</div>
                <div>规格：{record.attribute_name}</div>
              </div>
            );
          }

          return (
            <div>{goodsInfo}</div>
          );
        }
      }, {
        title: '生产周期',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.product.product_circle}天</span>
          );
        }
      }, {
        title: '斯品价',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>{record.goods_sku && record.goods_sku.goods_sku_price && '￥' + record.goods_sku.goods_sku_price.price || '无价格信息'}</span>
          );
        }
      }, {
        title: '上架状态',
        dataIndex: 'status',
        render: function (text, record) {
          let status = '下架';
          if (record.goods_sku && record.goods_sku.sku_status === 1)
            status = '上架';
          return (
            <span>{status}</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          // 上下架按钮
          let statusBtn = '未设sku';
          let sku_status = 1;
          let saleStatus = '上架';

          if (record.goods_sku) {

            if (record.goods_sku.sku_status === 1) {
              sku_status = 0;
              saleStatus = '下架';
            }

            statusBtn = <a href='javascript:;' onClick={self.editGoodsSkuStatus.bind(self, sku_status, record.goods_sku.id)}>{saleStatus}</a>;
          }
          return (
            <span>
              {statusBtn}
              <span className='ant-divider'></span>
              <a href='javascript:;' onClick={self.editItem.bind(self, record.goods_sku.goods.id, record.sku_sn)}>编辑</a>
              <span className='ant-divider'></span>
              <a href='javascript:;' onClick={self.previewGoods.bind(self, record.sku_sn)}>预览</a>
            </span>
          );
        }
      }
    ];

    let changeSaleStatus = function (willOnSale, selectedRows) {
      let saleStatus = +willOnSale; // 0 下架，1 上架
      let selectedRowsRes = selectedRows;
      let ids = [];
      let noSkuGoods = [];
      selectedRowsRes.map(function (item) {
        if (item.goods_sku) {
          ids.push(item.goods_sku.id);
        } else {
          noSkuGoods.push(item.product.title);
        }
      });
      self.editGoodsSkuStatus(saleStatus, ids);

      if (noSkuGoods.length) {
        SP.message.error(noSkuGoods.join('、') + '未设置sku，不能上下架');
      }
    };

    let actionButtons = [
      {
        title: '批量下架',
        popconfirm: '确定要下架选择的商品吗？',
        useSelectRow: true,
        onClick: function (selectedRows) {
          changeSaleStatus(false, selectedRows);
        }
      }, {
        title: '批量上架',
        popconfirm: '确定要上架选择的商品吗？',
        useSelectRow: true,
        onClick: function (selectedRows) {
          changeSaleStatus(true, selectedRows);
        }
      }
    ];

    let filters = [
      {
        title: '商品分类',
        key: 'goods_category_id',
        defaultValue: null,
        type: 'other',
        render: function () {
          return (<CategorySearch/>);
        }
      }, {
        title: '上架状态',
        key: 'status',
        defaultValue: '2',
        values: [
          {
            name: '所有状态',
            key: '2',
            disabled: false
          }, {
            name: '下架',
            key: '0',
            disabled: false
          }, {
            name: '上架',
            key: '1',
            disabled: false
          }
        ],
        type: 'select'
      }, {
        title: '产品名称',
        key: 'product_title',
        defaultValue: null,
        type: 'input'
      }, {
        title: '产品编码',
        key: 'product_sn',
        defaultValue: null,
        type: 'input'
      }, {
        title: '商品名称',
        key: 'goods_title',
        defaultValue: null,
        type: 'input'
      }, {
        title: 'SKU编号',
        key: 'sku_sn',
        defaultValue: null,
        type: 'input'
      }
    ];

    let tagFilter = {
      title: '商品标签',
      key: 'tag_id',
      defaultValue: '0',
      values: [
        {
          name: '无',
          key: '0',
          disabled: false
        }
      ],
      type: 'select'
    };

    this.state.tags.map((tag) => {
      tagFilter.values.push({
        name: tag.name,
        key: tag.id + '',
        disabled: false
      });
    });

    filters.push(tagFilter);

    //   	let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record) {
      return record.product_sku_id;
    };

    let tableData = {
      rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.goods.getProductSearch,
      params: { // 额外的请求参数
        //sku_status: 2,
        //product_category_id: 1
      },
      //resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (<BaseList filters={filters} table={tableData} actionButtons={actionButtons}/>);
  }
});

module.exports = Goods;
