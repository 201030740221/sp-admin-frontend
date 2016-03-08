var constants = require("../constants/goodsDetailConstants.jsx");

var host = Sp.config.host;
var tplApi = {
    list: host+"/api/goodsTemplate",
    getTpl: host+"/api/goodsTemplate/"
};

var action = {};
action.goodsDetailAction = {
    setSkuId: function(id){
        this.dispatch(constants.SET_SKU_ID, id);
    },
    getTplList: function() {

        var _this = this;

        $.get(tplApi.list)
            .done(function(res){
                console.log(res);
                if(res.code === 0){
                    _this.dispatch(constants.GET_TPL_LIST, res.data);
                }
            });

    },
    getTpl: function(id) {

        var _this = this;

        $.get(tplApi.getTpl + id)
            .done(function(res){
                console.log(res);
                if(res.code === 0){
                    _this.dispatch(constants.SET_TPL, res.data);
                }
            });

    },
    setTpl: function(tpl) {

        var _this = this;

        _this.dispatch(constants.SET_TPL, tpl);

    },
    setTplId: function(id){

        var _this = this;

        _this.dispatch(constants.SET_TPL_ID, id);
    },
    setMobileTplId: function(id){

        var _this = this;

        _this.dispatch(constants.SET_MOBILE_TPL_ID, id);
    },
    setDetailData: function(data) {
        this.dispatch(constants.SET_DETAIL_DATA, data);
    },
    renderTpl: function(id) {

        var _this = this;

    }
};

module.exports = action;
