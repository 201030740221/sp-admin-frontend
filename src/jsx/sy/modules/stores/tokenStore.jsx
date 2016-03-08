var liteFlux = require('lite-flux');

var store = liteFlux.store("token",{
    data: {

    },
    actions: {
        getToken: function (){
            var _this = this;
            webapi.upload.getToken({}).then(function(res){
                if(res && res.code===0 ){
                    _this.setStore(res.data);
                }
            });

        }
    }
});

module.exports = store;