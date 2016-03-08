var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("raffle",{
    data: {

    },
    actions:{
        createRaffle: function(data) {
            var _this = this;
            Api.lotteryApi.RESTful( 'POST','',data, function (res) {
                if (res && res.code === 0) {
                    Sp.message("创建成功");
                }else{
                    Sp.message("创建失败");
                }
            });
        },
        getRaffleList: function(data) {
            var _this = this;
            Api.lotteryApi.RESTful( 'GET','',data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
            });
        },
        deleteRaffle: function(id,data) {
            var _this = this;
            Api.lotteryApi.RESTful( 'DELETE',id,{}, function (res) {
                if (res && res.code === 0) {
                    Api.lotteryApi.RESTful( 'GET','',data, function (res) {
                        if (res && res.code === 0) {
                            _this.setStore(res.data);
                            Sp.message("删除成功");
                        }else{
                            Sp.message("删除失败");
                        }
                    });
                }
            });
        }
    }
});

module.exports = store;