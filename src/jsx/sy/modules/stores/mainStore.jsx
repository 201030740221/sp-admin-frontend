var CsListStore          = require("./customerServiceListStore.jsx"),
    CsDetailStore        = require("./customerServiceDetailStore.jsx"),
    OrderListStore       = require("./orderListStore.jsx"),
    orderTrashedListStore = require("./orderTrashedListStore.jsx"),
    OrderDetailStore     = require("./orderDetailStore.jsx"),
    GoodsDetailStore     = require("./goodsDetailStore.jsx"),
    LoginStore           = require("./loginStore.jsx"),
    promotionCouponListStore           = require("./promotion/coupon/list.jsx"),
    promotionCouponDetailStore         = require("./promotion/coupon/detail.jsx"),
    promotionCouponEditStore           = require("./promotion/coupon/edit.jsx"),
    memberStore           = require("./memberStore.jsx");

var store = {
    orderListStore: new OrderListStore(),
    orderTrashedListStore: new orderTrashedListStore(),
    orderDetailStore: new OrderDetailStore(),
    csListStore: new CsListStore(),
    csDetailStore: new CsDetailStore(),
    goodsDetailStore: new GoodsDetailStore(),
    loginStore: new LoginStore(),
    promotionCouponListStore: new promotionCouponListStore(),
    promotionCouponDetailStore: new promotionCouponDetailStore(),
    promotionCouponEditStore: new promotionCouponEditStore(),
    memberStore: new memberStore()
};

module.exports = store;
