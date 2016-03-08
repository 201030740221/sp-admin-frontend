var liteFlux = require('lite-flux');
var Api = require('../../../../widgets/api/api.jsx');

var store = liteFlux.store("createCollocation",{
    data: {

    },
    actions: {
        createGoodsCollocation: function(goods_id,create_data,request_data,callback) {
            var _this = this;
            webapi.collocation.createGoodsCollocation(create_data).then(function (res) { /*创建*/
                if(res.code===0){
                    var id = res.data.id;

                    var relation_data = {
                        goods_id: goods_id,
                        goods_collocation_id: id,
                        status: 0,
                        sort_id: 0
                    };
                    /*调用创建搭配套餐与商品的关联接口*/
                   /* webapi.collocation.createCollocationRelation(relation_data).then(function (res) { /!*创建*!/
                        if (res.code === 0) {

                        }
                    });*/

                    /*调用更新全部detail接口*/
                    request_data.id = id;
                    var arr_detail = request_data.goods_collocation_details;
                    var arr_coupon = request_data.goods_collocation_rules;
                    for(var key in arr_detail){
                        arr_detail[key].goods_collocation_id = id;
                    }
                    for(var key in arr_coupon){
                        arr_coupon[key].goods_collocation_id = id;
                    }

                    console.log(request_data);
                    webapi.collocation.updateAllDetailCollocation(request_data).then(function (res) { /*创建*/
                        if (res.code === 0) {
                            Sp.message('创建成功');
                        }else{
                            Sp.message.error('创建失败');
                        }
                    });
                    callback && callback(true);
                }
                else{
                    Sp.message.error('创建失败');
                    callback && callback(false);
                }
            })
        }
    }
});

module.exports = store;