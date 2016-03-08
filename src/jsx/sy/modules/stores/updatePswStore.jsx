var liteFlux = require('lite-flux');
//Api
var Api = require('../../modules/api/api.jsx');

//
var store = liteFlux.store("updatePsw",{
  data: {

  },
  actions: {
      updatePassword: function(data) {
          var _this = this;
          Api.password.update( data, function (res) {
              if (res && res.code === 0) {
                 _this.setStore(res.data);
                Sp.message('密码更改成功!');
              }
              else{
                  Sp.message(res.msg, 'error');
              }
          });
      }
  }
});

module.exports = store;
