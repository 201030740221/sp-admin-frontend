'use strict';

var store = liteFlux.store('recommendation', {
  data: {
    data: {
      id: null,
      type: null,
      type_fix: 0,
      status: 0,
      istext: 0,
      position_id: null,
      ad_id: null,
      recommendation_id: null,
      ad: {
        ad_id: null,
        status: false,
        ad_url: '',
        ad_title: '',
        ad_description: '',
        type_fix: 1,
        picture: '',
        picture_id: null,
        recommendation_attachment_id: null
      },
      recommendation: {
        recommendation_id: null,
        status: false,
        goods_sku_id: '',
        attribute_name: '',
        name: '',
        recommendation_title: '',
        recommendation_description: '',
        picture: '',
        picture_id: null,
        goods_picture: '',
        goods_picture_id: null,
        recommendation_attachment_id: null
      }
    }
  },
  actions: {
    transformData: function (item) {
      var newData = {
        id: item.id,
        type: item.type,
        type_fix: item.type_fix,
        status: item.status,
        position_id: item.position_id,
        ad_id: item.ad_id,
        recommendation_id: item.recommendation_id,
        ad: {
          ad_id: item.ad_id,
          picture_remove: false,
          ad_type: item.ad && item.ad.ad_type || 0,
          type_fix: item.ad && item.ad.type_fix || 0,
          status: item.type === 1
            ? true
            : false,
          ad_url: item.ad
            ? item.ad.ad_url
            : '',
          ad_title: item.ad
            ? item.ad.ad_title
            : '',
          ad_description: item.ad
            ? item.ad.ad_description
            : '',
          picture: item.ad
            ? (item.ad.attachment && item.ad.attachment.media.full_path) || null
            : '',
          picture_id: item.ad
            ? item.ad.attachment && item.ad.attachment.media_id || null
            : null,
          attachment_id: item.ad
            ? item.ad.attachment && item.ad.attachment.id || null
            : null
        },
        recommendation: {
          recommendation_id: item.recommendation_id,
          picture_remove: false,
          status: item.type === 2
            ? true
            : false,
          goods_sku_id: item.recommendation
            ? item.recommendation.goods_sku_id
            : '',
          sku_sn: item.recommendation
            ? item.recommendation.goods_sku && item.recommendation.goods_sku.sku_sn
            : '',
          attribute_name: item.recommendation
            ? item.recommendation.goods_sku && item.recommendation.goods_sku.attribute_name
            : '',
          name: item.recommendation
            ? item.recommendation.goods_sku && item.recommendation.goods_sku.goods.title
            : '',
          recommendation_title: item.recommendation
            ? item.recommendation.recommendation_title
            : '',
          recommendation_description: item.recommendation
            ? item.recommendation.recommendation_description
            : '',
          picture: item.recommendation
            ? (item.recommendation.attachment && item.recommendation.attachment.media.full_path)
            : '',
          picture_id: item.recommendation
            ? (item.recommendation.attachment && item.recommendation.attachment.media_id || null)
            : null,
          attachment_id: item.recommendation
            ? (item.recommendation.attachment && item.recommendation.attachment.id || null)
            : null,
          goods_picture: item.recommendation
            ? item.recommendation.goods_sku && item.recommendation.goods_sku.has_cover.media.full_path
            : null,
          goods_picture_id: item.recommendation
            ? item.recommendation.goods_sku && item.recommendation.goods_sku.has_cover.media_id
            : null
        }
      };
      return newData;
    },
    getPosition: function (id, callback) {
      var previewData = S('ad-banner').previewData;
      var index = _.findIndex(previewData, function (chr) {
        return chr.id === id;
      });

      var data = A('recommendation').transformData(previewData[index]);

      this.setStore({data: data});

      if (callback) {
        callback(true);
      }
    },
    reset: function () {
      S('recommendation', {data: null});
    }
  }
});

module.exports = store;
