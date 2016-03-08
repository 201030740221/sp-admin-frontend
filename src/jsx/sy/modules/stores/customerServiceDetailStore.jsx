var Fluxxor = require("fluxxor");
var constants = require("../constants/customerServiceDetailConstants.jsx");
var moment = require('moment');

var store = Fluxxor.createStore({
    initialize: function () {
        this.id = null;
        this.booked_at = moment();
        this.detail = {
            id: 0,
            order_id:0,
            order_goods_id:0,
            goods_amount:0,
            member_id:0,
            status_id:0,
            audit_id:0,
            type_id:0,
            reason_id:0,
            description:'',
            payment_refund_id:0,
            return_mode:0,
            booked_at:0,
            address:0,
            name:'',
            mobile: '',
            created_by: 0,
            created_at: '',
            reason: '',
            status: '',
            audit: '',
            type: '',
            member:{},
            refund:{},
            goods:[],
            process_log: [],
            status_log: [],
            upload:[]
        };

        this.place = {
            region:[],
            province:{
                id: 0,
                name: ''
            },
            city:{
                id: 0,
                name: ''
            },
            district:{
                id: 0,
                name: ''
            }
        };

        this.init = false;
        this.bindActions(
            constants.GET_DETAIL, this.onGetDetail,
            constants.UPDATE_ID, this.onUpdateId,
            constants.UPDATE_BOOKEDAT, this.onChangeBookTime,
            constants.UPDATE_MOBILE, this.onChangeMobile,
            constants.UPDATE_NAME, this.onChangeName,
            constants.UPDATE_ADDRESS, this.onChangeAddress,
            constants.UPDATE_TYPE, this.onChangeType,
            constants.UPDATE_REFUND, this.onChangeRefund,
            constants.UPDATE_RETURNMODE, this.onChangeReturnMode
        );
    },
    // 更新详情
    onGetDetail: function (payload) {
        if(payload.data){
            this.detail = payload.data;
            this.init = true;
            this.booked_at = moment(payload.data.booked_at);
            this.place.province.id = payload.data.province_id || 0;
            this.place.city.id = payload.data.city_id || 0;
            this.place.district.id = payload.data.district_id || 0;
            this.emit("change");
        }
    },
    // 更新订单 ID
    onUpdateId: function(id){
        this.id = id;
        this.emit("change");
    },
    // 更新预定时间
    onChangeBookTime: function(date){
        this.booked_at = date;
        this.emit("change");
    },
    onChangeMobile: function(data){
        this.detail.mobile = data;
        this.emit("change");
    },
    onChangeName: function(data){
        this.detail.name = data;
        this.emit("change");
    },
    onChangeAddress: function(data){
        this.detail.address = data;
        this.emit("change");
    },
    onChangeType: function(data){
        this.detail.type_id = data;
        this.emit("change");
    },
    onChangeRefund: function(data){
        this.detail.refund.total = data;
        this.emit("change");
    },
    onChangeReturnMode: function(data){
        this.detail.return_mode = data;
        this.emit("change");
    },
    // 返回所有数据
    getState: function () {
        return {
            detail: this.detail,
            init: this.init,
            booked_at: this.booked_at,
            place: this.place,
            id: this.id
        };
    }
});

module.exports = store;
