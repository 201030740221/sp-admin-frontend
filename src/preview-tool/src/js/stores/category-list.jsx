'use strict';

const store = liteFlux.store('category-list', {
  data: {
    id: null,
    data: null,
    selected: {
      id: null,
      name: null
    }
  },
  actions: {
    update: function (res) {
      var store = this.getStore();
      var viewData = store.data;
      var index = _.findIndex(viewData, function (chr) {
        return chr.id === res.id;
      });
      // 更新JSON数据
      viewData[index] = _.assign(viewData[index], {
        category: res.category_id,
        category_name: res.category,
        name: res.name
      });
      // 更新显示数据
      this.setStore({data: viewData});
    },
    setPosition: function (id, position, callback) {
      var store = this.getStore();
      var viewData = store.data;
      var index = _.findIndex(viewData, function (chr) {
        return chr.id === id;
      });
      var change = false;

      // 重排 proiority
      function resetPriority() {
        viewData.map(function (_viewData, index) {
          _viewData.priority = viewData.length - index;
        });
      }

      // 如果不是第一个
      if (index !== 0 && position === 'up') {
        var thisIndexData = _.assign({}, viewData[index]);

        viewData[index] = viewData[index - 1];
        viewData[index - 1] = thisIndexData;

        resetPriority();
        change = true;

      }

      if (index !== viewData.length - 1 && position === 'down') {
        var thisIndexData = _.assign({}, viewData[index]);

        viewData[index] = viewData[index + 1];
        viewData[index + 1] = thisIndexData;
        resetPriority();
        change = true;
      }

      // 更新显示数据
      if (change) {
        this.setStore({data: viewData});

        if (callback) {
          callback(viewData);
        }
      }

    }
  }
});

module.exports = store;
