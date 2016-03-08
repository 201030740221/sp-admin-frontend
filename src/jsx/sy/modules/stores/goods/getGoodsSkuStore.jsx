var liteFlux = require('lite-flux');

var store = liteFlux.store("goodsSkuStore",{
    data: {

    },
    actions:{
        getGoodsSkuList: function(data,callback) {
            var _this = this;
            webapi.goods.getSkuList( data ).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        },
        editGoodsSku: function(id,data,callback){
            var _this = this;
            webapi.goods.editGoodsSku( id, data ).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('更新sku成功');
                    callback && callback(true);
                }else{
                    Sp.message.error('更新sku失败');
                    callback && callback(false);
                }
            });
        }
    }
});

module.exports = store;