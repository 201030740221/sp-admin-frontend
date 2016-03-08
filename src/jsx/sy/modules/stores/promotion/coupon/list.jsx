var Fluxxor = require("fluxxor");
var constants = require("../../../constants/promotion/coupon/list.jsx");

//Api
var Api = require('../../../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({

    initialize: function() {
        this.init = false; // 是否初始化
        this.list = [];
        this.total = 0;
        this.per_page = 10;
        this.current_page = 1;
        this.search_object = {
            'coupon_name':'',
            'start_denomination':'',
            'end_denomination':'',
            'valid_time_start_at':'',
            'valid_time_end_at':'',
            'status':-1,
            'channel':-1,
            'type':-1,
            'discount_type':-1
        };
        this.bindActions(
            constants.GET_COUPON_LIST, this.onSetList,
            constants.GET_COUPON_DETAIL,this.onSetDetail,
            constants.DELETE_COUPON_DETAIL,this.onDelete
        );
    },

    onSetList: function (res) {
        this.list = res.res_data.data;
        this.total = res.res_data.total;
        this.search_object = res.search_limit;
        this.per_page = res.res_data.per_page;
        this.current_page = res.res_data.current_page;
        this.init = true;
        this.emit("change");

    },
    onSetDetail: function (detail) {
        console.log(detail);
       for(var i=0 ; i<this.list.length ; i++){
           if(this.list[i].id == detail.id){
               this.list[i] = detail;
           }
       }
       this.emit("change");

    },
    onDelete: function (res) {
        console.log(res);
        for(var i=0 ; i<this.list.length ; i++){
            if(this.list[i].id == res){
                 this.list.splice(i,1);
            }

        }
        this.emit("change");
    },
    getState: function(){
        return {
            list: this.list,
            total: this.total,
            per_page: this.per_page,
            current_page: this.current_page,
            search_object:this.search_object,
            init: this.init
        };
    }
});

module.exports = store;