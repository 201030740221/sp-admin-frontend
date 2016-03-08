'use strict';

var store = liteFlux.store('theme-collocation-list', {
  data: {
    data: null
  },
  actions: {
    update: function (data) {
      var previewData = S('theme-collocation-list').data;
      var index = _.findIndex(previewData, function (chr) {
        return chr.id === data.id;
      });

      previewData[index].theme_collocation_id = data.theme_collocation_id;
      previewData[index].theme_collocation = previewData[index].theme_collocation || {};
      previewData[index].theme_collocation.id = data.theme_collocation_id;
      previewData[index].theme_collocation.name = data.name;

      this.setStore({data: previewData});
    }
  }
});

module.exports = store;
