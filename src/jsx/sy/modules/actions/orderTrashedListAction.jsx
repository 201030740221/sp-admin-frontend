var trashedConstants = require("../constants/orderTrashedListConstants.jsx");
var Api = require("../api/api.jsx");

var action = {};
action.orderTrashedListActions = {
    /*订单回收站 列表*/
    onGetTrashedList: function (begin_at,end_at,current_page,status_id) {
        var self = this;
        var data = {
            begin_at: begin_at.format('YYYY-MM-DD'),
            end_at: end_at.format('YYYY-MM-DD'),
            page: current_page,
            trash: 1
        };

        if(parseInt(status_id) !== 0){
            data.status_id = status_id;
        }


        Sp.message("正在加载新的数据");
        Api.orderApi.trashed(data).done(function(res){
            if(res && res.code===0 ){
                self.dispatch(trashedConstants.GET_TRASHED_ORDER_LIST, res.data);
            }
        });
    },
    onRestoreOrder: function(id){
        var self = this;
        var data = {'order_id':id};
        Api.orderApi.restore(data).done(function(res){
            if(res && res.code===0 ){
                Sp.message("订单还原成功");
                self.dispatch(trashedConstants.RESTORE_ORDER, id);
            }
        });
    },
    // 改变下单时间
    onChangeBeginAt: function(time){
        this.dispatch(trashedConstants.ChangeBeginAt, time);
    },
    onChangeEndAt: function(time){
        this.dispatch(trashedConstants.ChangeEndAt, time);
    },
    // 下一页
    onNextPage: function(){
        this.dispatch(trashedConstants.NEXT_PAGE);
    },
    // 上一页
    onPrevPage: function(){
        this.dispatch(trashedConstants.PREV_PAGE);
    },
    // 筛选状态
    onFilter: function(value){
        this.dispatch(trashedConstants.Filter,value);
    },
    // 搜索
    onSearch: function(value,page){
        var self = this;
        var store = this.flux.store("orderTrashedListStore").getState();
        var getOrderList = this.flux.actions.orderTrashedListActions.onGetTrashedList;
        // 如果为空则加载全部类型
        this.dispatch(trashedConstants.Search,value);
        if(!value.length){
            getOrderList(store.begin_at,store.end_at,1,store.state_id);
        }else{
            Api.orderApi.get('search',{
                key: value,
                trash: 1,
                page: page || 1
            }).done(function(res){
                if(res && res.code===0 ){
                    self.dispatch(trashedConstants.GET_TRASHED_ORDER_LIST, res.data);
                }
            });
        }
    }
};

module.exports = action;
