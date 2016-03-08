var csListAction = require("./customerServiceListAction.jsx");
var csDetailAction = require("./customerServiceDetailAction.jsx");
var orderListAction = require('./orderListAction.jsx');
var orderTrashedListAction = require('./orderTrashedListAction.jsx');
var orderDetailAction = require('./orderDetailAction.jsx');
var loginAction = require('../../modules/actions/loginAction.jsx');
var goodsDetailAction = require('../../modules/actions/goodsDetailAction.jsx');
var promotionCouponListAction = require('../../modules/actions/promotion/coupon/list.jsx');
var promotionCouponDetailAction = require('../../modules/actions/promotion/coupon/detail.jsx');
var promotionCouponEditAction = require('../../modules/actions/promotion/coupon/edit.jsx');
var memberAction = require('./memberAction.jsx');

var action = $.extend(
    {},
    csListAction,
    csDetailAction,
    orderListAction,
    orderTrashedListAction,
    orderDetailAction,
    loginAction,
    goodsDetailAction,
    promotionCouponListAction,
    promotionCouponDetailAction,
    promotionCouponEditAction,
    memberAction
);

module.exports = action;
