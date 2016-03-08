var constants = require("../constants/customerServiceListConstants.jsx");
var moment = require('moment');

var store = Fluxxor.createStore({
    initialize: function () {
        this.id = null;
        this.init = false;
        this.list = []; // 列表
        this.frontCurPage = 1; // 前端当前分页
        this.curPage = 1; // 后端当前分页
        this.lastPage = 1; // 后端最后一页
        this.total = 0; // 总计数目
        this.showPage = 10; // 一页显示数目
        this.status_id = 0; // 售后状态
        this.type_id = 0; // 服务类型
        this.audit_id = 0; // 处理状态
        this.begin_at = moment('2015-01-01'); //开始区间
        this.end_at = moment(); // 结束区间

        this.bindActions(
            constants.GET_LIST, this.onGetList,
            constants.PREV_PAGE,this.onPrevPage,
            constants.NEXT_PAGE,this.onNextPage,
            constants.TypeFilter,this.onTypeFilter,
            constants.StatusFilter,this.onStatusFilter,
            constants.Search,this.onSearch,
            constants.AuditFilter,this.onAuditFilter
        );
    },
    // 更新详情
    onGetList: function (payload) {
        if(payload.data.length){
            this.list = this.list.concat(payload.data);
            this.curPage = payload.current_page;
            this.lastPage = payload.last_page;
            this.total = payload.total;
            this.init = true;
            this.emit("change");
        }
    },
    onChangeBeginAt: function(time){
        this.begin_at = time;
        this.emit("change");
    },
    onChangeEndAt: function(time){
        this.end_at = time;
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
    onAuditFilter: function(value){
        this.audit_id = value;
        this.emit("change");
    },
    onTypeFilter: function(value){
        this.type_id = value;
        this.emit("change");
    },
    onStatusFilter: function(value){
        this.status_id = value;
        this.emit("change");
    },
    onSearch: function(value){

    },
    // 返回所有数据
    getState: function () {
        return {
            list: this.list,
            frontCurPage: this.frontCurPage,
            curPage: this.curPage,
            lastPage: this.lastPage,
            total: this.total,
            showPage: this.showPage,
            status_id: this.status_id,
            type_id: this.type_id,
            begin_at: this.begin_at,
            end_at: this.end_at,
            init: this.init,
            id: this.id
        };
    }
});

module.exports = store;
