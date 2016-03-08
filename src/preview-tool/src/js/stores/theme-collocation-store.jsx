'use strict';

const store = liteFlux.store('theme-collocation', {
  data: {
    id: null,
    data: null,
    selected: {
      id: null,
      name: null
    }
  },
  actions: {}
});

module.exports = store;
