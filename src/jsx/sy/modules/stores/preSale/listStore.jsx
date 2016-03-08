var liteFlux = require('lite-flux');

var store = liteFlux.store("preSale",{
    data: {

    },
    actions: {
        getPreSaleList: function (request_data,callback) {
            webapi.preSale.getPreSaleList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }else{
                    Sp.message.error(res.msg);
                }
            });
        },
        updateSortIdMultiply: function(request_data){
            webapi.preSale.updateSortIdMultiply(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('更新成功');
                }else{
                    Sp.message.error('更新失败...');
                }
            });
        },

        createPreSale: function(request_data,callback){
            webapi.preSale.createPreSale(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('创建成功');
                    RRouter.routing.navigate('#/preSale/editAddBatch/'+res.data.id+'/goodsId/'+request_data.goods_id+'/batchLength/0');
                }else{
                    Sp.message.error('创建失败,请检查表单...');
                    callback && callback(res.data)
                }
            });
        },
        removePreSale: function(id,request_data,callback){
            webapi.preSale.removePreSale(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('删除数据成功');
                    callback && callback(true);
                }else{
                    Sp.message.error('删除数据失败');
                    callback && callback(false);
                }
            });
        },
        updatePreSaleStatus: function(request_data,callback){
            webapi.preSale.updatePreSaleStatus(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('操作成功');
                    callback && callback(true);
                }else{
                    Sp.message.error('操作失败');
                    callback && callback(false);
                }
            });
        },


        getPreSaleDetail: function(id,request_data,callback){
            webapi.preSale.getPreSaleDetail(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('拉取预售详情数据成功');
                    callback && callback(res.data)
                }else{
                    Sp.message.error('拉取预售详情数据失败');
                }
            });
        },
        updatePreSale: function(id,request_data,callback){
            webapi.preSale.updatePreSale(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('更新数据成功');
                    callback && callback({});
                }else{
                    Sp.message.error('更新数据失败');
                    callback && callback(res.data)
                }
            });
        },


        getPreSaleBatchs: function(id,request_data,callback){
            webapi.preSale.getPreSaleBatchs(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('拉取预售批次数据成功');
                    callback && callback(res.data);
                }else{
                    Sp.message.error('拉取预售批次数据失败');
                }
            });
        },
        postPreSaleBatchs: function(id,request_data,batchOrder,callback){
            webapi.preSale.postPreSaleBatchs(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('创建批次成功');
                    batchOrder++;
                    callback && callback(batchOrder);
                    /*RRouter.routing.navigate('#/preSale/editAddBatch/'+id+'/goodsId/'+request_data.goods_id);*/
                    RRouter.routing.navigate('#/preSale/list');
                }else{
                    Sp.message.error('创建批次失败,请检查表单...');
                }
            });
        },
        updatePreSaleBatchs: function(id,batchId,request_data,callback){
            webapi.preSale.updatePreSaleBatchs(id,batchId,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('更新批次成功');
                }else{
                    Sp.message.error('更新批次失败,请检查表单...');
                }
            });
        },

        getPreSaleRemind: function(id,request_data,callback){
            webapi.preSale.getPreSaleRemind(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data)
                }else{
                    Sp.message.error('拉取预售提醒数据失败');
                }
            });
        },

        getPreSaleTemplates: function(request_data,callback){
            webapi.preSale.getPreSaleTemplates(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('拉取预售模板成功');
                    callback && callback(res.data)
                }else{
                    Sp.message.error('拉取预售模板失败');
                }
            });
        },

        getPreSaleLog: function(id,request_data,callback){
            webapi.preSale.getPreSaleLog(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data)
                }else{
                    Sp.message.error('拉取预售记录数据失败');
                }
            });
        }
    }
});

module.exports = store;
