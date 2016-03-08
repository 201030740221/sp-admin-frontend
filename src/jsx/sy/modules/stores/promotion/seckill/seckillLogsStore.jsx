var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("seckillLogs",{
    data: {

    },
    actions:{
        getSeckillLogs: function(id,data) {

            var _this = this;

            Api.seckillLogsApi.RESTful( 'GET', id, data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
            });
        }
    }
});

module.exports = store;