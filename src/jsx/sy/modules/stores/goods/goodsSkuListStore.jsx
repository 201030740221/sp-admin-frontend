var liteFlux = require('lite-flux');

var store = liteFlux.store("goodsSkuList",{
    data: {

    },
    actions: {
        getGoodsSkuListByIds: function (request_data,callback) {
            var _this = this;
            webapi.goods.getSkuListByGoodsIds(request_data).then( function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res);
                    callback && callback(res);
                }
            });
        }
    }
});

module.exports = store;