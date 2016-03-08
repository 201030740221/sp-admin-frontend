var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("goodsSku",{
    data: {

    },
    actions: {
        getGoodsSkuList: function (id) {

            var _this = this;
            var data = {
                id: id
            }
            Api.skuApi.list(data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
                else{
                    Sp.message.error(res.msg);
                }
            });
        }
    }
});

module.exports = store;