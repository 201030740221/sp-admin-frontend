var liteFlux = require('lite-flux');
var Api = require('../../../widgets/api/api.jsx');

var store = liteFlux.store("goodsTag",{
    data: {

    },
    actions:{
        getGoodsTagList: function(data) {
            var _this = this;
            Api.goodsTag.list(data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res);
                }
            });
        },
        updateGoodsTag: function(data) {
            var _this = this;
            Api.goodsTag.update(data, function (res) {
                if (res && res.code === 0) {
                   Sp.message('更新成功');
                }
            });
        }
    }
});

module.exports = store;