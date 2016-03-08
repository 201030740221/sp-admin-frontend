
var Fluxxor = require("fluxxor");
var constants = require("../../../constants/promotion/coupon/detail.jsx");

//Api
var Api = require('../../../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({

    initialize: function() {
        this.init = false; // 是否初始化
        this.initCoupon = false;
        this.detail = {};
        this.list = [];
        this.total = 0;
        this.per_page = 10;
        this.current_page = 1;
        this.bindActions(
            constants.GET_COUPON_DETAIL, this.onSetDetail,
            constants.GET_COUPON_COUPON, this.onSetCoupon
        );
    },

    onSetDetail: function (res) {
        this.detail = res;
        this.init = true;
        this.emit("change");
    },

    onSetCoupon: function (res) {
        this.list = res.data;
        this.total = res.total;
        this.per_page = res.per_page;
        this.current_page = res.current_page;
        this.initCoupon = true;
        this.emit("change");
    },
    getState: function(){
        return {
            detail: this.detail,
            list: this.list,
            total: this.total,
            per_page: this.per_page,
            current_page: this.current_page,
            initCoupon: this.initCoupon,
            init: this.init
        };
    }
});

module.exports = store;