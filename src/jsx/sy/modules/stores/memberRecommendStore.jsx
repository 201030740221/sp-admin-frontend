var liteFlux = require('lite-flux');
var Api = require('../../widgets/api/api.jsx');

var store = liteFlux.store("memberRecommend",{
    data: {

    },
    actions:{
        getMemberRecommend: function(data) {
            var _this = this;
            Api.memberRecommendApi.list( data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
            });
        }
    }
});

module.exports = store;