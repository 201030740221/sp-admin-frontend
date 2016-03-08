var Fluxxor = require("fluxxor");
var constants = require("../constants/goodsDetailConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
    initialize: function() {
        this.goodsSkuId = null;
        this.goodsDetailData = null;
        this.tplSource = null;
        this.tplList = null;
        this.tplId = null;
        this.mobileTplId = null;

        this.bindActions(
            constants.SET_SKU_ID, this.onSetSkuId,
            constants.GET_TPL_LIST, this.onGetTplList,
            constants.GET_TPL, this.onGetTpl,
            constants.SET_TPL, this.onSetTpl,
            constants.SET_DETAIL_DATA, this.onSetTplDetailData,
            constants.SET_TPL_ID, this.onSetTplId,
            constants.SET_MOBILE_TPL_ID, this.onSetMobileTplId
        );
    },
    onSetSkuId: function(id){
        this.goodsSkuId = id;
        this.emit("change");
    },
    onGetTplList: function (list) {
        console.log('onGetTplList');
        this.tplList = list;
        // 设置默认 M端模板.....
        var tmp = null;
        list.map(function (item, i) {
            console.log('test',i, item);
            if(tmp == null && item.type == 2){
                tmp = item.id;
            }
        });
        this.mobileTplId = tmp;
        this.emit("change");
    },
    onGetTpl: function (payload) {

        console.log('onGetTpl',payload);
    },
    onSetTpl: function (tplSource) {
        console.log('onSetTpl');
        this.tplSource = tplSource;
        if(!this.goodsDetailData && this.tplSource) this.goodsDetailData = JSON.parse(tplSource.data);
        this.emit("change");
    },
    onSetTplId: function (id) {
        console.log('onSetTplId');
        this.tplId = id;
        this.emit("change");
    },
    onSetMobileTplId: function (id) {
        console.log('onSetMobileTplId');
        this.mobileTplId = id;
        this.emit("change");
    },
    onSetTplDetailData: function (data) {
        console.log('onSetTplDetailData');
        this.goodsDetailData = data;
        this.emit("change");
    },



    getState: function() {
        return {
            goodsSkuId: this.goodsSkuId,
            goodsDetailData: this.goodsDetailData,
            tplSource: this.tplSource,
            tplList: this.tplList,
            tplId: this.tplId,
            mobileTplId: this.mobileTplId
        };
}
});

module.exports = store;
