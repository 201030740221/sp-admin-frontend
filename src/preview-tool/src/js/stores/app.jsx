'use strict';

const store = liteFlux.store('app', {
  data: {},
  actions: {
    refreshPreview: function () {
      let frame = document.getElementById('preview');
      if (frame) {
        frame.contentWindow.postMessage({
          code: 10,
          msg: '刷新页面'
        }, '*');
      }
    }
  }
});

module.exports = store;
