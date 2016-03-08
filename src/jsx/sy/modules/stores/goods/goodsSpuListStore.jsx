var liteFlux = require('lite-flux');

var store = liteFlux.store("goodsSpuList",{
    data: {

    },
    actions: {
        getGoodsSpuList: function (request_data,callback) {
            webapi.goods.getSpuList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;