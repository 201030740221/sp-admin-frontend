'use strict';

var store = liteFlux.store('ad-banner', {
  data: {
    data: [],
    previewData: []
  },
  actions: {
    transformItemData: function (item, name) {
      return {
        id: item.id,
        type: item.type,
        status: item.status,
        position_id: item.position_id,
        ad_id: item.ad_id,
        recommendation_id: item.recommendation_id,
        name: name,
        schedule: item.schedule,
        ad: item.ad
          ? {
            ad_id : item.ad_id,
            ad_url : item.ad.ad_url,
            ad_title : item.ad.ad_title,
            ad_type : item.ad.ad_type,
            type_fix : item.ad.type_fix,
            ad_description : item.ad.ad_description,
            picture : (item.ad.attachment && item.ad.attachment.media.full_path) || null,
            picture_id : item.ad
              ? (item.ad.attachment && item.ad.attachment.media_id || null)
              : null,
            attachment_id : item.ad
              ? (item.ad.attachment && item.ad.attachment.id || null)
              : null
          }
          : null,
        recommendation: item.recommendation
          ? {
            recommendation_id : item.recommendation_id,
            goods_sku_id : item.recommendation.goods_sku_id,
            recommendation_title : item.recommendation.recommendation_title,
            recommendation_description : item.recommendation.recommendation_description,
            picture : (item.recommendation.attachment && item.recommendation.attachment.media.full_path) || item.recommendation.goods_sku && item.recommendation.goods_sku.has_cover && item.recommendation.goods_sku.has_cover.media.full_path,
            picture_id : item.recommendation
              ? (item.recommendation.attachment && item.recommendation.attachment.media_id || null)
              : null,
            attachment_id : item.recommendation
              ? (item.recommendation.attachment && item.recommendation.attachment.id || null)
              : null
          }
          : null
      };
    },
    transformData: function (data, name) {
      var newData = [];
      data.map(function (item) {
        newData.push(A('ad-banner').transformItemData(item, name));
      });
      return newData;
    },
    getFrame: function (params, query, previewMode, callback) {
      var resultFn = function (res) {
        if (res && res.code === 0) {
          if (typeof res.data === 'string') {
            res.data = JSON.parse(res.data);
          }
          if (Array.isArray(res.data)) {
            res.data = res.data[0];
          }

          S('ad-banner', {
            id: res.data.id,
            module: res.data.module,
            moduleName: res.data.name,
            description: res.data.description,
            data: A('ad-banner').transformData(res.data.position, res.data.name),
            previewData: res.data.position // 预览 JSON 数据
          });
          if (callback) {
            callback();
          }
        } else if (res) {
          alert(res.msg);
        }
      };
      var data = {
        page: params.page,
        module: params.module
      };

      if (query.category) {
        data.category = query.category;
      }

      // if (previewMode) {
      //     data.version = 1;
      //     webapi.frame.getStashFrame(data).then(resultFn);
      // } else {
      webapi.frame.getFrame(null, data).then(resultFn);
      // }

    },
    sort: function (newIndex, oldIndex) {
      var store = this.getStore();
      var previewData = store.previewData;
      var viewData = store.data;

      var old_id = viewData[oldIndex].id;
      viewData[oldIndex].id = viewData[newIndex].id;
      viewData[newIndex].id = old_id;

      var oldData = _.assign({}, previewData[oldIndex]);
      var newData = _.assign({}, previewData[newIndex]);
      previewData[oldIndex] = previewData[newIndex];
      previewData[oldIndex].id = oldData.id;
      //viewData[oldIndex] = A('ad-banner').transformItemData(previewData[newIndex]);

      previewData[newIndex] = oldData;
      previewData[newIndex].id = newData.id;
      //viewData[newIndex] = A('ad-banner').transformItemData(oldData);

      this.setStore({previewData: previewData, data: viewData});

    },
    /**
         * 预览模式保存 postion
         */
    updatePosition: function (id, data) {
      var store = this.getStore();
      var previewData = store.previewData;
      var viewData = store.data;
      var index = _.findIndex(previewData, function (chr) {
        return chr.id === id;
      });
      // 更新JSON数据
      previewData[index] = _.assign(previewData[index], data);
      // 更新显示数据
      viewData[index] = A('ad-banner').transformItemData(previewData[index]);
      this.setStore({previewData: previewData, data: viewData});
    },
    updateAd: function (id, data) {
      var store = this.getStore();
      var previewData = store.previewData;
      var viewData = store.data;
      var index = _.findIndex(previewData, function (chr) {
        return chr.id === id;
      });
      // 更新JSON数据
      previewData[index].ad = previewData[index].ad || {};
      previewData[index].ad = _.assign(previewData[index].ad, data);
      previewData[index].ad_id = previewData[index].ad.id || 0;
      // 更新显示数据
      viewData[index] = A('ad-banner').transformItemData(previewData[index]);
      // 更新显示数据
      this.setStore({previewData: previewData, data: viewData});
    },
    updateRecommendation: function (id, data) {
      var store = this.getStore();
      var previewData = store.previewData;
      var viewData = store.data;
      var index = _.findIndex(previewData, function (chr) {
        return chr.id === id;
      });
      // 更新JSON数据
      previewData[index].recommendation = previewData[index].recommendation || {};
      previewData[index].recommendation = _.assign(previewData[index].recommendation, data);
      previewData[index].recommendation_id = previewData[index].recommendation.id || 0;
      // 更新显示数据
      viewData[index] = A('ad-banner').transformItemData(previewData[index]);
      this.setStore({previewData: previewData, data: viewData});
    }
  }
});

module.exports = store;
