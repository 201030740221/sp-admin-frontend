var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("seckill",{
    data: {

    },
    actions:{
        getSeckillList: function(data) {

            var _this = this;

            Api.seckillApi.list( data, function (res) {
                if (res && res.code === 0) {
                    _this.setStore(res.data);
                }
            });
        },
        createSeckill: function(data) {

            var _this = this;
            Api.seckillApi.create( data, function (res) {
                    if (res && res.code === 0) {
                        Sp.message("创建成功");
                        RRouter.routing.navigate('/promotion/seckill/seckillList');
                    } else {
                        Sp.message.error('创建失败');
                    }
                }
            );
        },
        activeSeckill: function(data,data_list) {

            var _this = this;
            Api.seckillApi.update( data, function (res) {
                    if (res && res.code === 0) {
                        Sp.message("激活成功");
                        Api.seckillApi.list( data_list, function (res) {
                            if (res && res.code === 0) {
                                _this.setStore(res.data);
                            }
                        });
                    } else {
                        Sp.message.error(res.msg);
                    }
                }
            );
        },
        freezeSeckill: function(data,data_list) {

            var _this = this;
            Api.seckillFreezeApi.update( data, function (res) {
                    if (res && res.code === 0) {
                        Sp.message("冻结成功");
                        Api.seckillApi.list( data_list, function (res) {
                            if (res && res.code === 0) {
                                _this.setStore(res.data);
                            }
                        });
                    } else {
                        Sp.message.error(res.msg);
                    }
                }
            );
        },
        deleteSeckill: function(data,data_list) {

            var _this = this;
            Api.seckillApi.remove( data, function (res) {
                    if (res && res.code === 0) {
                        Sp.message("删除成功");
                        Api.seckillApi.list( data_list, function (res) {
                            if (res && res.code === 0) {
                                _this.setStore(res.data);
                            }
                        });
                    } else {
                        Sp.message.error(res.msg);
                    }
                }
            );
        }
    }
});

module.exports = store;