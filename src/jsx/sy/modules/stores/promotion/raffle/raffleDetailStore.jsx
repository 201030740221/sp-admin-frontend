var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("raffleDetail",{
    data: {

    },
    actions:{
        getRaffleDetail: function(id,callback) {
            var _this = this;
            Api.lotteryApi.RESTful( 'GET',id,{}, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                    callback && callback(res.data);
                }
            });
        },
        updateRaffle: function(id,data) {
            var _this = this;
            Api.lotteryApi.RESTful( 'PATCH',id,data, function (res) {
                if (res && res.code === 0) {
                    Sp.message("更新成功");
                }
            });
        }
    }
});

module.exports = store;