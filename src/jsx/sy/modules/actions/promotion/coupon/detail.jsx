var constants = require("../../../constants/promotion/coupon/detail.jsx");
var Api = require("../../../api/api.jsx");
var Sp = require("../../../../widgets/Sp.jsx");
var action = {};
/*var url = {
    "couponDetail": 'http://admin.sipin.test/api/coupon/task'
};*/
action.promotionCouponDetail = {
    onGetCouponDetail: function (coupon_id) {
        Sp.message("正在加载新的数据");
        var self = this;
        Api.couponApi.RESTful('GET',coupon_id,{}, function(res){
            if(res && res.code===0 ) {
                self.dispatch(constants.GET_COUPON_DETAIL, res.data);
                Sp.message("操作成功");
            }
        });
       /* $.ajax({
            url: url.couponDetail+'/'+coupon_id,
            method:"GET",
            success: function(res){
                if(res && res.code===0 ) {
                    self.dispatch(constants.GET_COUPON_DETAIL, res.data);
                }
            }
        });*/
    },
    onGetCoupon: function (data) {
        var self = this;
         Api.coupon.list(data).done(function(res){
         if(res && res.code===0 ){
             self.dispatch(constants.GET_COUPON_COUPON, res.data);
             }
         });
    },
    // 下一页
    onNextPage: function(data){
        var self = this;
        Api.coupon.list(data).done(function(res){
            if(res && res.code===0 ){
                self.dispatch(constants.GET_COUPON_COUPON, res.data);
            }
        });
    },
    // 上一页
    onPrevPage: function(data){
        var self = this;
        Api.coupon.list(data).done(function(res){
            if(res && res.code===0 ){
                self.dispatch(constants.GET_COUPON_COUPON, res.data);
            }
        });
    }
};
module.exports = action;
