var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("collocationRelation",{
    data: {

    },
    actions: {
        getCollocationRelation: function(data) {
            var _this = this;
            webapi.collocation.getCollocationRelation(data).then(function (res) {
                if(res.code===0){
                    _this.setStore(res.data);
                }else{
                    _this.setStore(res);
                }
            })
        }
    }
});

module.exports = store;