var liteFlux = require('lite-flux');
var Api = require('../../widgets/api/api.jsx');

var store = liteFlux.store("memberPoint",{
    data: {

    },
    actions:{
        getMemberPoint: function(data) {

            var _this = this;
            Api.pointListApi.list( data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
            });
        },
        pointAdjustment: function(data,data2){
            var _this = this;
            Api.pointAdjustmentApi.update( data, function (res) {
                if (res && res.code === 0) {
                    Api.pointListApi.list( data2, function (res) {
                        if (res && res.code === 0) {
                            _this.setStore(res.data);
                        }
                    });
                }
            });
        }
    }
});

module.exports = store;