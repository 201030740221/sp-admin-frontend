var constants = require("../../../constants/promotion/coupon/list.jsx");
var Api = require("../../../api/api.jsx");
var Sp = require("../../../../widgets/Sp.jsx");
var action = {};
action.promotionCouponList = {
    onGetCouponList: function (data) {
        var self = this;
        Sp.message("正在加载新的数据");
        Api.couponApi.list(data).done(function(res){
            var data_list = { 'search_limit':data,'res_data':res.data};
            if(res && res.code===0 ){
                self.dispatch(constants.GET_COUPON_LIST, data_list);
            }
        });
    },
    onUpdateStatus: function(coupon_id,status){
        var self = this;
        console.log(status,coupon_id);
        Api.couponApi.RESTful('PUT',coupon_id,{'status':status}, function(res){
            if(res && res.code===0 ) {
                self.dispatch(constants.GET_COUPON_DETAIL, res.data);
                Sp.message("操作成功");
            }
        });
    },
    onDeleteCoupon: function(coupon_id){
        var self = this;
        Api.couponApi.RESTful('DELETE',coupon_id,{}, function(res){
            if(res && res.code===0 ) {
                self.dispatch(constants.DELETE_COUPON_DETAIL, coupon_id);
                Sp.message("操作成功");
            }
        });
    }
};
module.exports = action;