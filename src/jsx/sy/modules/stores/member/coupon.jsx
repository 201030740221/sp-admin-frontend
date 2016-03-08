var liteFlux = require('lite-flux');

var store = liteFlux.store("memberCoupon",{
    data: {

    },
    actions: {
        getMemberCouponList: function (request_data,callback) {
            webapi.member.getMemberCouponList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;
