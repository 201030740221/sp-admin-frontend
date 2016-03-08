var liteFlux = require('lite-flux');

var store = liteFlux.store("themeList",{
    data: {

    },
    actions: {
        getThemeCollocationList: function (data) {
            var _this = this;
            webapi.themeCollocation.getThemeCollocationList(data).then(function (res) {
                if (res && res.code == 0) {
                    _this.setStore({themeList:res.data});
                }
                else{
                    Sp.message.error(res.msg);
                }
            });
        },
        updateStateMultiply: function(request_data,list_data) {
            var _this = this;
            webapi.themeCollocation.updateStateMultiply(request_data).then(function (res) {
                if(res.code===0){
                    webapi.themeCollocation.getThemeCollocationList(list_data).then(function (res) {
                        if(res.code===0){
                            _this.setStore({themeList:res.data});
                            Sp.message('操作成功');
                        }
                        else{
                            Sp.message.error(res.msg);
                        }
                    });
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
                else if(res.code===73005){
                    Sp.message.error('该主题搭配关联的搭配套餐已经下架, 无法上架主题搭配');
                }
            })
        },
        updateSortIdMultiply: function(request_data) {
            var _this = this;
            webapi.themeCollocation.updateSortIdMultiply(request_data).then(function (res) {
                if(res.code===0){
                    Sp.message('操作成功');
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        },
        deleteThemeCollocation: function(request_data,list_data) {
            var _this = this;
            webapi.themeCollocation.deleteThemeCollocation(request_data).then(function (res) {
                if(res.code===0){
                    webapi.themeCollocation.getThemeCollocationList(list_data).then(function (res) {
                        if(res.code===0){
                            _this.setStore({themeList:res.data});
                        }
                    });
                    Sp.message('操作成功');
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        },
        getTagsList: function (data) {
            var _this = this;
            webapi.themeCollocation.getTagsList(data).then(function (res) {
                if (res && res.code == 0) {
                    _this.setStore({tagsList:res.data});
                }
            });
        },
        updateSortId: function(request_data,list_data) {
            var _this = this;
            webapi.themeCollocation.updateSortId(request_data).then(function (res) {
                if(res.code===0){
                    Sp.message('操作成功');
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        }
    }
});

module.exports = store;