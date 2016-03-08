var constants = require("../constants/orderListConstants.jsx");
var Api = require("../api/api.jsx");

var action = {};
action.orderListActions = {
    onGetOrderList: function (begin_at,end_at,current_page,uid,status_id,point_goods) {
        var self = this;
        var data = {
            begin_at: begin_at.format('YYYY-MM-DD'),
            end_at: end_at.format('YYYY-MM-DD'),
            page: current_page,
            point_goods:point_goods
        };

        if( parseInt(uid) !== 0){
            data.member_id = uid;
        }

        if(parseInt(status_id) !== 0){
            data.status_id = status_id;
        }


        Sp.message("正在加载新的数据");
        Api.orderApi.list(data).done(function(res){
            if(res && res.code===0 ){
                self.dispatch(constants.GET_ORDER_LIST, res.data);
            }
        });
    },
    onDeleteOrder: function(id){
        var self = this;
        Api.orderApi.RESTful('DELETE',id,{}, function(res){
            if(res && res.code===0 ){
                self.dispatch(constants.DELETE_ORDER, id);
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
    // 筛选状态
    onFilter: function(value){
        this.dispatch(constants.Filter,value);
    },
    // 商品筛选状态
    onGoodsFilter: function(value){
        this.dispatch(constants.GoodsFilter,value);
    },
    // 搜索
    onSearch: function(value,page,uid){
        var self = this;
        var store = this.flux.store("orderListStore").getState();
        var getOrderList = this.flux.actions.orderListActions.onGetOrderList;
        // 如果为空则加载全部类型
        this.dispatch(constants.Search,value);
        if(!value.length){
            getOrderList(store.begin_at,store.end_at,1,uid,store.state_id,store.point_goods);
        }else{
            Api.orderApi.get('search',{
                key: value,
                page: page || 1
            }).done(function(res){
                if(res && res.code===0 ){
                    self.dispatch(constants.GET_ORDER_LIST, res.data);
                }
            });
        }
    }
};

module.exports = action;
