var Fluxxor = require("fluxxor");
var constants = require("../constants/orderListConstants.jsx");
var moment = require('moment');

var store = Fluxxor.createStore({
    initialize: function () {
        this.init = false; // 是否初始化
        this.list = []; // 列表
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.showPage = 10; // 一页显示数目
        this.begin_at = moment('2015-01-01'); //开始区间
        this.end_at = moment(); // 结束区间
        this.status_id = 0;
        this.point_goods = -1;
        this.keyword = '';

        this.bindActions(
            constants.GET_ORDER_LIST, this.onGetOrderList,
            constants.DELETE_ORDER,this.onDeleteOrder,
            constants.ChangeBeginAt,this.onChangeBeginAt,
            constants.ChangeEndAt,this.onChangeEndAt,
            constants.PREV_PAGE,this.onPrevPage,
            constants.NEXT_PAGE,this.onNextPage,
            constants.Filter,this.onFilter,
            constants.GoodsFilter,this.onGoodsFilter,
            constants.Search,this.onSearch
        );
    },
    onGetOrderList: function (payload) {

        this.list = payload.data;
        this.curPage = payload.current_page;
        this.lastPage = payload.last_page;
        this.total = payload.total;

        this.init = true;
        this.emit("change");
    },
    onDeleteOrder: function(id){
        for(var i=0 ; i<this.list.length ; i++){
            if(this.list[i].id == id){
                this.list.splice(i,1);
            }
        }
        this.emit("change");
    },
    onChangeBeginAt: function(time){
        this.begin_at = time;
        this.init = false;
        this.list = [];
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onChangeEndAt: function(time){
        this.end_at = time;
        this.init = false;
        this.list = [];
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onPrevPage: function(){
        if(this.frontCurPage>1){
            this.frontCurPage--;
            this.emit("change");
        }
    },
    onNextPage: function(){
        if(this.frontCurPage<this.total/this.showPage){
            this.frontCurPage++;
            this.emit("change");
        }
    },
    onFilter: function(value){
        this.status_id = value;
        this.init = false;
        this.list = [];
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onGoodsFilter: function(value){
        this.point_goods = value;
        this.init = false;
        this.list = [];
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onSearch: function(value){
        this.keyword = value;
        this.emit("change");
    },

    getState: function () {
        return {
            list: this.list,
            curPage: this.curPage,
            frontCurPage: this.frontCurPage,
            lastPage: this.lastPage,
            total: this.total,
            showPage: this.showPage,
            begin_at: this.begin_at,
            end_at: this.end_at,
            status_id: this.status_id,
            point_goods: this.point_goods,
            init: this.init,
            keyword: this.keyword
        };
    }
});

module.exports = store;
