var constants = require("../constants/customerServiceListConstants.jsx");
var Api = require("../api/api.jsx");

var action = {};

action.csListActions = {
    // 获取最新订单详情
    onGetList: function (begin_at,end_at,current_page,uid) {
        var self = this;
        var data = (uid === 0)?{
            begin_at: begin_at.format('YYYY-MM-DD'),
            end_at: end_at.format('YYYY-MM-DD'),
            page: current_page
        }:{
            begin_at: begin_at.format('YYYY-MM-DD'),
            end_at: end_at.format('YYYY-MM-DD'),
            page: current_page,
            member_id: uid
        };
        Sp.message("正在加载新的数据");
        Api.aftersaleApi.list(data).done(function(res){
            if(res && res.code===0 ){
                self.dispatch(constants.GET_LIST, res.data);
            }
        });
    },
    // 改变下单时间
    onChangeBeginAt: function(time){
        this.dispatch(constants.ChangeBeginAt, time);
    },
    onChangeEndAt: function(time){
        this.dispatch(constants.ChangeEndAt, time);
    },
    // 下一页
    onNextPage: function(){
        this.dispatch(constants.NEXT_PAGE);
    },
    // 上一页
    onPrevPage: function(){
        this.dispatch(constants.PREV_PAGE);
    },
    // 筛选类型
    onTypeFilter: function(value){
        this.dispatch(constants.TypeFilter,value);
    },
    // 筛选审核状态
    onAuditFilter: function(value){
        this.dispatch(constants.AuditFilter,value);
    },
    // 筛选状态
    onStatusFilter: function(value){
        this.dispatch(constants.StatusFilter,value);
    },
    // 搜索
    onSearch: function(value,uid){
        var store = this.flux.store("orderListStore").getState();
        var getOrderList = this.flux.actions.csListActions.onGetList;
        // 如果为空则加载全部类型
        if(!value.length){
            getOrderList(store.begin_at,store.end_at,parseInt(store.curPage)+1,uid);
        }else{
            this.dispatch(constants.Search,value);
        }
    }
};

module.exports = action;
