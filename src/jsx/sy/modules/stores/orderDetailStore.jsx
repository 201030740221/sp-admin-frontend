var Fluxxor = require("fluxxor");
var constants = require("../constants/orderDetailConstants.jsx");

var store = Fluxxor.createStore({
    initialize: function () {
        this.id = null;
        this.detail = {
            "id":0,
            "status_id":1,
            "trade_no":"",
            "total": "0.00",
            "total_price": "0.00",
            "total_delivery": "0.00",
            "total_installation": "0.00",
            "goods":[],
            "process_log":[],
            "status_log":[],
            "payment_history_log":[],
            "payment":{
                "partner": "",
                "account": ""
            },
            "opreation":[],
            "delivery_id": 0,
            "delivery":{
                "member_address": {
                    "province_name": "",
                    "city_name": "",
                    "district_id": 0,
                    "district_name": "",
                    "address": "",
                    "consignee": "",
                    "mobile": "",
                    "second_mobile": "",
                    "email": ""
                }
            },
            "invoice":{
                "type":0,
                "title_type":0,
                "id":0,
                "company_name":"",
                "invoice_tax_no":"",
                "express":{
                    "express_no":"",
                    "partner_id":''
                }
            },
            "invoice_id": 0,
            "member":{
                "name": ""
            },
            "express":[],
            "created_at":""
        };

        this.statusLogTags = [];

        this.init = false;
        this.bindActions(
            constants.GET_ORDER_DETAIL, this.onGetOrderDetail,
            constants.GET_ORDER_ID,this.onGetOrderId,
            constants.GET_EXPRESS,this.onGetOrderExpress,
            constants.TOGGLE_STATUS,this.onChangeStatusId,
            constants.ADD_ADVICE,this.onAddAdvice,
            constants.UPDATE_DELIVERY, this.onUpdateDelivery,
            constants.UPDATE_INVOICE, this.onUpdateInvoice,
            constants.EDIT_DELIVERY, this.onEditDelivery,
            constants.EDIT_INSTALLATION, this.onEditInstallation,
            constants.GET_LOG_TAGS, this.onGetStateLogTags
        );
    },
    // 更新订单详情
    onGetOrderDetail: function (payload) {
        if(payload.data){
            this.detail = payload.data;
            this.init = true;
            this.emit("change");
        }
    },
    // 更新订单 ID
    onGetOrderId: function(id){
        this.id = id;
        this.emit("change");
    },
    // 更新物流订单
    onGetOrderExpress: function(express){

        this.emit("change");
    },
    // 更新状态
    onChangeStatusId: function(id){
        this.detail.status_id = id;
        this.emit("change");
    },
    // 更新用户记录
    onAddAdvice: function (id,val) {
        this.emit("change");
    },
    // 更新送装时间
    onUpdateDelivery: function(data){
        this.detail.delivery = data;
        this.emit("change");
    },
    //更新 发票信息
    onUpdateInvoice: function(data){
        this.detail.invoice = data;
        this.emit("change");
    },
    // 更新运费
    onEditDelivery: function(data){
        this.detail = data;
        this.emit("change");
    },
    // 更新安装费
    onEditInstallation: function(data){
        this.detail = data;
        this.emit("change");
    },
    // 获取订单状态标签列表
    onGetStateLogTags: function(data){
        this.statusLogTags = data;
        this.emit("change");
    },
    // 返回所有数据
    getState: function () {
        return {
            detail: this.detail,
            statusLogTags: this.statusLogTags,
            init: this.init,
            id: this.id
        };
    }
});

module.exports = store;
