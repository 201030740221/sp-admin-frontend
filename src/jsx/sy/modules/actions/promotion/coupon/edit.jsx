var Api = require('../../../../modules/api/api.jsx');
var constants = require("../../../constants/promotion/coupon/edit.jsx");
var action = {};
action.promotionCouponEdit = {
    initCoupon: function (id) {
        var _this = this;
        this.dispatch(constants.INIT_COUPON, null);
        this.dispatch(constants.UPDATE_SELECTED_MEMBER, []);
        if(id == 'create'){

        }else if(isNaN(id)){

        }else{
            Sp.message('正在加载优惠券数据...');
            Api.couponApi.RESTful('GET', id)
                .done(function (res) {
                    Sp.message('优惠券数据加载成功!');
                    console.log(res);
                    _this.dispatch(constants.UPDATE_COUPON, res.data);
                });
        }
    },
    updateCoupon: function (coupon) {
        this.dispatch(constants.UPDATE_COUPON, coupon);
    },
    updateSelectedMember: function (members) {
        this.dispatch(constants.UPDATE_SELECTED_MEMBER, members);
    },
    getSelectedMember: function (ids) {
        var _this = this;
        if(ids && ids.length){
            Sp.message('正在加载数据...');
            Api.memberApi.list({id:ids})
            .done(function(res){
                Sp.message('用户数据加载成功!');
                console.log(res);
                if(res && res.code == 0){
                    var data = res.data;
                    var members = res.data.data || [];
                    _this.dispatch(constants.UPDATE_SELECTED_MEMBER, members);
                }
            });
        }
    },
    updateValidTime: function (type) {
        this.dispatch(constants.UPDATE_VALID_TIME, type);
    },
    saveCoupon: function (coupon) {
        console.log('save ', coupon);
        var _this = this;

        if(coupon.error){
            delete coupon.error;
        }
        if(coupon.id){
            //update
            Sp.message('正在保存数据...');
            Api.couponApi.RESTful('PUT', coupon.id, coupon)
                .done(function (res) {
                    if(res.code == 0){
                        Sp.message('保存成功...');
                    }else if(res.code == 20002 && res.data.errors){
                        Sp.message('保存出错, 请检查表单...', 'error');
                        coupon.error = res.data.errors;
                        _this.dispatch(constants.UPDATE_COUPON, coupon);
                    }
                });
        }else{
            //create
            Sp.message('正在保存数据...');
            Api.couponApi.RESTful('POST', null, coupon)
                .done(function (res) {
                    if(res.code == 0){
                        Sp.message('保存成功...');
                        RRouter.routing.navigate('/promotion/coupon/edit/'+res.data.id);
                    }else if(res.code == 20002 && res.data.errors){
                        Sp.message('保存出错, 请检查表单...', 'error');
                        coupon.error = res.data.errors;
                        _this.dispatch(constants.UPDATE_COUPON, coupon);
                    }
                });
        }
    },
    updateStatus: function (coupon) {
        var _this = this;
        var status = +coupon.status == 1 ? 2 : 1;
        var text = status == 1 ? '已启用' : '已禁用';
        Api.couponApi.RESTful('PUT',coupon.id,{status:status}, function(res){
            if(res && res.code == 0 ) {
                coupon.status = status;
                Sp.message(text);
                _this.dispatch(constants.UPDATE_COUPON, coupon);
            }
        });
    }
};
module.exports = action;
