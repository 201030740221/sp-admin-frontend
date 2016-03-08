var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("detailCollocation",{
    data: {

    },
    actions: {
        viewGoodsCollocation: function(data,callback) {
            var _this = this;
            webapi.collocation.viewGoodsCollocation(data).then(function (res) {
                if(res.code===0){
                    _this.setStore(res.data);
                    callback && callback(res.data);
                }
            })
        },

        updateAllDetailCollocation: function(request_data) {
            var _this = this;
            /*调用更新全部detail接口*/
            var arr_detail = request_data.goods_collocation_details;
            var arr_coupon = request_data.goods_collocation_rules;
            for(var key in arr_detail){
                arr_detail[key].goods_collocation_id = request_data.id;
            }
            for(var key in arr_coupon){
                arr_coupon[key].goods_collocation_id = request_data.id;
            }

            webapi.collocation.updateAllDetailCollocation(request_data).then(function (res) { /*创建*/
                if (res.code === 0) {
                    Sp.message('更新成功');
                }else{
                    Sp.message.error('更新失败');
                }
            });
        },
        deleteCollocationDetail: function(data) {
            var _this = this;
            webapi.collocation.deleteCollocationDetail(data).then(function (res) {
                if(res.code===0){
                    Sp.message('删除成功');
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        },
        deleteCollocationRule: function(data) {
            var _this = this;
            webapi.collocation.deleteCollocationRule(data).then(function (res) {
                if(res.code===0){
                    Sp.message('删除成功');
                }
                else{
                    Sp.message.error(res.msg);
                }
            })
        }
    }
});

module.exports = store;