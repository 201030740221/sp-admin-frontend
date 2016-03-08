var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("couponList",{
    data: {

    },
    actions:{

        getCouponList: function(data,callback) {
            var _this = this;
            Api.couponListApi.list(data).done(function(res){
                if(res && res.code===0 ){
                    _this.setStore(res.data);
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;