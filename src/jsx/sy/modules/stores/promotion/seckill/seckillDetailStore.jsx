var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("seckillDetail",{
    data: {

    },
    actions:{
        getSeckillDetail: function(data,callback) {

            var _this = this;

            Api.seckillDetailApi.list( data, function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        },
        updateSeckillDetail: function(data) {

            var _this = this;

            Api.seckillDetailApi.update( data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                    Sp.message("更新成功");
                    RRouter.routing.navigate('/promotion/seckill/seckillList');
                }else {
                    Sp.message.error('更新失败');
                }
            });
        }
    }
});

module.exports = store;