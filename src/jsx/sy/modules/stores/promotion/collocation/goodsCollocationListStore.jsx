var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("collocationList",{
    data: {

    },
    actions: {
        getGoodsCollocationList: function(data) {
            var _this = this;
            webapi.collocation.getGoodsCollocationList(data).then(function (res) {
                if(res.code===0){
                    _this.setStore(res.data);
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        },
        updateStateMultiply: function(request_data,list_data) {
            var _this = this;
            webapi.collocation.updateStateMultiply(request_data).then(function (res) {
                if(res.code===0){
                    webapi.collocation.getGoodsCollocationList(list_data).then(function (res) {
                        if(res.code===0){
                            _this.setStore(res.data);
                        }
                    });
                    Sp.message('操作成功');
                }
                else if(res.code===73001){
                    Sp.message.error('该搭配套餐存在于首页中，不能进行下架操作');
                }
                else if(res.code===73002){
                    Sp.message.error('有在售的搭配套餐，不能进行下架操作');
                }
                else if(res.code===73003){
                    Sp.message.error('该主题存在于首页，不能进行下架操作');
                }
            })
        },
        deleteGoodsCollocation: function(request_data,list_data) {
            var _this = this;
            webapi.collocation.deleteCollocationRelation(request_data).then(function (res) {
                if(res.code===0){
                    webapi.collocation.deleteGoodsCollocation(request_data).then(function (res) {
                        if(res.code===0){
                            webapi.collocation.getGoodsCollocationList(list_data).then(function (res) {
                                if(res.code===0){
                                    _this.setStore(res.data);
                                }
                            });
                            Sp.message('操作成功');
                        }
                        else{
                            Sp.message.error(res.msg);
                        }
                    })
                }
            })
        }
    }
});

module.exports = store;