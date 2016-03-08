var liteFlux = require('lite-flux');
var Api = require("../../../api/api.jsx");

var store = liteFlux.store("couponStore",{
    data: {

    },
    actions:{
        getCouponList: function(data,callback) {
            var _this = this;
            Api.couponApi.list(data).done(function(res){
                if(res && res.code===0 ){
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;