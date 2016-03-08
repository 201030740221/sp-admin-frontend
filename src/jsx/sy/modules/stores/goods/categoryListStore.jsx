var liteFlux = require('lite-flux');

var store = liteFlux.store("categoryListStore",{
    data: {

    },
    actions: {
        getCategoryList: function (request_data,callback) {
            webapi.goods.getCategoryList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res);
                }
            });
        }
    }
});

module.exports = store;