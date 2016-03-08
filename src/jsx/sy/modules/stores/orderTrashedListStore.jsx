var Fluxxor = require("fluxxor");
var trashedConstants = require("../constants/orderTrashedListConstants.jsx");
var moment = require('moment');

var store = Fluxxor.createStore({
    initialize: function () {
        this.init = false; // 是否初始化
        this.trashedlist = []; // 列表
        this.fCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.showPage = 10; // 一页显示数目
        this.begin_at = moment('2015-01-01'); //开始区间
        this.end_at = moment(); // 结束区间
        this.status_t_id = 0;

        this.bindActions(
            trashedConstants.GET_TRASHED_ORDER_LIST,this.onGetTrashedOrderList,
            trashedConstants.RESTORE_ORDER,this.onRestoreOrder,
            trashedConstants.ChangeBeginAt,this.onChangeBeginAt,
            trashedConstants.ChangeEndAt,this.onChangeEndAt,
            trashedConstants.PREV_PAGE,this.onPrevPage,
            trashedConstants.NEXT_PAGE,this.onNextPage,
            trashedConstants.Filter,this.onFilter,
            trashedConstants.Search,this.onSearch
        );
    },
    onGetTrashedOrderList: function (payload) {

        this.trashedlist = payload.data;
        this.curPage = payload.current_page;
        this.lastPage = payload.last_page;
        this.total = payload.total;

        this.init = true;
        this.emit("change");
    },
    onRestoreOrder: function(id){
        for(var i=0 ; i<this.trashedlist.length ; i++){
            if(this.trashedlist[i].id == id){
                this.trashedlist.splice(i,1);
            }
        }
        this.emit("change");
    },
    onChangeBeginAt: function(time){
        this.begin_at = time;
        this.init = false;
        this.trashedlist = [];
        this.fCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onChangeEndAt: function(time){
        this.end_at = time;
        this.init = false;
        this.trashedlist = [];
        this.fCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onPrevPage: function(){
        if(this.fCurPage>1){
            this.fCurPage--;
            this.emit("change");
        }
    },
    onNextPage: function(){

        if(this.fCurPage<this.total/this.showPage){
            this.fCurPage++;
            this.emit("change");
        }
    },
    onFilter: function(value){
        this.status_t_id = value;
        this.init = false;
        this.trashedlist = [];
        this.fCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.emit("change");
    },
    onSearch: function(value){

    },

    getState: function () {
        return {
            trashedlist: this.trashedlist,
            curPage: this.curPage,
            fCurPage: this.fCurPage,
            lastPage: this.lastPage,
            total: this.total,
            showPage: this.showPage,
            begin_at: this.begin_at,
            end_at: this.end_at,
            status_t_id: this.status_t_id,
            init: this.init
        };
    }
});

module.exports = store;
