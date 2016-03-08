var liteFlux = require('lite-flux');

var store = liteFlux.store("couponList",{
    data: {

    },
    actions: {
        getCouponList: function (request_data,callback) {
            webapi.coupon.getCouponList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;
