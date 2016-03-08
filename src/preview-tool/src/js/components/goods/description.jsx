'use strict';

import BaseList from 'modules/page-components/base-list';
import getValue from 'modules/helpers/get-value';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import GoodsUploadModal from './goods-upload-modal';

const imageView = '?imageView2/2/w/100';

const TemplateList = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {

    let self = this;

  },

  editItem: function () {},

  /*sku图片列表*/
  skuUploadTable: function () {

    let self = this;

    let columns = [
      {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: '产品编号',
        dataIndex: 'product_sn'
      }, {
        title: 'SKU编号',
        dataIndex: 'sku_sn'
      }, {
        title: '封面图片',
        dataIndex: '',
        render: function (text, record) {
          let ImgUrl = null;
          let pictureData = [];
          let dataId = [];
          if (getValue(record, 'goods_sku.has_cover')) {
            dataId.push(getValue(record, 'goods_sku.has_cover.id'));
            ImgUrl = <img width="50" src={getValue(record, 'goods_sku.has_cover.media.full_path') + imageView}/>;
            pictureData.push({
              id: getValue(record, 'goods_sku.has_cover.media.id'),
              url: getValue(record, 'goods_sku.has_cover.media.full_path')
            });
          }

          let params = {
            entity: 'goods_sku',
            entity_id: getValue(record, 'goods_sku.id'),
            type_id: 0
          };

          return (
            <GoodsUploadModal pictureData={pictureData} pictureLength={1} params={params}>
              {ImgUrl}
            </GoodsUploadModal>
          );
        }
      }, {
        title: '封面场景',
        dataIndex: '',
        render: function (text, record) {
          let ImgUrl = null;
          let pictureData = [];
          let dataId = [];
          if (getValue(record, 'goods_sku.has_sku_scene')) {
            dataId.push(getValue(record, 'goods_sku.has_sku_scene.id'));
            ImgUrl = <img width="50" src={getValue(record, 'goods_sku.has_sku_scene.media.full_path') + imageView}/>;
            pictureData.push({
              id: getValue(record, 'goods_sku.has_sku_scene.media.id'),
              url: getValue(record, 'goods_sku.has_sku_scene.media.full_path')
            });
          }

          let params = {
            entity: 'goods_sku',
            entity_id: getValue(record, 'goods_sku.id'),
            type_id: 4
          };
          return (
            <GoodsUploadModal dataId={dataId} pictureData={pictureData} pictureLength={1} params={params}>
              {ImgUrl}
            </GoodsUploadModal>
          );
        }
      }, {
        title: '规格缩略',
        dataIndex: '',
        render: function (text, record) {
          let ImgUrl = null;
          let pictureData = [];
          let dataId = [];
          if (getValue(record, 'goods_sku.has_sku_thumb')) {
            dataId.push(getValue(record, 'goods_sku.has_sku_thumb.id'));
            ImgUrl = <img width="50" src={getValue(record, 'goods_sku.has_sku_thumb.media.full_path') + imageView}/>;
            pictureData.push({
              id: getValue(record, 'goods_sku.has_sku_thumb.media.id'),
              url: getValue(record, 'goods_sku.has_sku_thumb.media.full_path')
            });
          }

          let params = {
            entity: 'goods_sku',
            entity_id: getValue(record, 'goods_sku.id'),
            type_id: 5
          };

          return (
            <GoodsUploadModal dataId={dataId} pictureData={pictureData} pictureLength={1} params={params}>
              {ImgUrl}
            </GoodsUploadModal>
          );
        }
      }, {
        title: '相册图片',
        dataIndex: '',
        render: function (text, record) {
          let ImgUrl = null;
          let pictureData = [];
          let dataId = [];
          let album = getValue(record, 'goods_sku.has_album');
          if (album.length) {
            ImgUrl = album.map(function (item) {
              dataId.push(item.id);
              if (item.media) {
                pictureData.push({id: item.media.id, url: item.media.full_path});
                return <img
                  key={item.id}
                  width="50"
                  style={{
                    marginRight: 10
                  }}
                  src={item.media.full_path + imageView}/>;
              }
            });
          }

          let params = {
            entity: 'goods_sku',
            entity_id: getValue(record, 'goods_sku.id'),
            type_id: 1
          };

          var onSort = function (imageData) {
            params.media_ids = imageData.map(function (image) {
              return image.id;
            });
            console.log(params, '....');
            webapi.media.sort(params).then(function (res) {
              if (res.code) {
                SP.message.error('排序失败');
                return;
              }

              SP.message.success('排序成功');
            });
          };

          return (
            <GoodsUploadModal dataId={dataId} pictureData={pictureData} pictureLength={99} params={params} sortable={true} onSort={onSort}>
              {ImgUrl}
            </GoodsUploadModal>
          );
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      rowSelection: false, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.id,
        //product_category_id: 1
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (<BaseList table={tableData}/>);
  },

  render: function () {

    return (
      <div>
        {this.skuUploadTable()}
      </div>
    );
  }
});

module.exports = TemplateList;
