var Fluxxor = require("fluxxor");
var constants = require("../../../constants/promotion/coupon/edit.jsx");

var moment = require('moment');
var Api = require('../../../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
    initialize: function() {
        var time = moment().format('YYYY-MM-DD')+' 00:00:00';
        this.selectedMember = [];
        this.valid_time = 0;
        this.initCoupon =  {
            "name": "",
            "value": 0.8,
            "number": 0,
            "received": 0,
            "scope": -1,
            "category_ids": [],
            "goods_ids": [],
            "member_ids": [],
            "channel": -1,
            "requirement": -1,
            "threshold": 0,
            "type": -1,
            "discount_type": -1,
            "trigger": -1,
            "offline_form": -1,
            "timespan": 0,
            "start_at": time,
            "end_at": time,
            "valid_time_start_at": time,
            "valid_time_end_at": time
        };
        this.coupon = $.extend({},this.initCoupon);

        this.bindActions(
            constants.UPDATE_SELECTED_MEMBER, this.onUpdateSelectedMember,
            constants.INIT_COUPON, this.onInitCoupon,
            constants.UPDATE_COUPON, this.onUpdateCoupon,
            constants.UPDATE_COUPON_KEY, this.onUpdateCouponKey,
            constants.UPDATE_VALID_TIME, this.onUpdateValidTime
        );
    },
    onInitCoupon: function (coupon) {
        this.coupon = coupon ? coupon : $.extend({},this.initCoupon);
        this.emit("change");
    },
    onUpdateCoupon: function (coupon) {
        this.coupon = coupon;
        this.emit("change");
    },
    onUpdateCouponKey: function (obj) {
        $.extend(this.coupon, obj);
        this.emit("change");
    },

    onUpdateSelectedMember: function (members) {
        this.selectedMember = members;
        var member_ids = members.map(function (item, i) {
            return item.id
        });
        //this.coupon.member_ids = JSON.stringify(member_ids);
        this.coupon.member_ids = member_ids;
        this.emit("change");
    },
    onGetMemberList: function(ids) {
        if(!payload || !ids.length){
            return false
        }
        var _this = this;
        Api.memberApi.list(ids).done(function(res){
            if(res.code === 0){
                _this.selectedMember = res.data;
                _this.emit("change");
            }
        });
    },
    onUpdateValidTime: function (type) {
        this.valid_time = type;
        switch(+type){
            case 0:
                this.coupon.timespan = 0;
                break;
            case 1:
                this.coupon.timespan = 30;
                break;
        }
        this.emit("change");
    },

    getState: function() {
        return {
            coupon: this.coupon,
            selectedMember: this.selectedMember,
            valid_time: this.valid_time
        };
    }
});

module.exports = store;
