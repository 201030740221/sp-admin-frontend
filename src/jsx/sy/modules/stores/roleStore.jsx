var Fluxxor = require("fluxxor");
var constants = require("../constants/roleConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
    initialize: function() {
        this.list = [];

        this.bindActions(
            constants.GET_LIST, this.onGetList,
            constants.REMOVE, this.onRemove
        );
    },

    onGetList: function(payload) {
        if(!payload){
            payload = {};
        }
        var _this = this;
        Api.roleApi.list(payload).done(function(res){
            console.log(res, 'List');
            if(res.code === 0){
                _this.list = res.data;
                _this.emit("change");
            }
        });
    },

    onRemove: function(payload) {
        if(!payload){
            payload = {};
        }
        var _this = this;
        Api.roleApi.RESTful('DELETE',payload.id,{}, function(res){
            console.log(res, 'remove');
            if(res.code === 0){
                _this.list.map(function (item, i) {
                    if(item.id == payload.id){
                        _this.list.splice(i,1);
                    }
                });
                _this.emit("change");
            }
        });
    },


    getState: function() {
        return {
            list: this.list
        };
    }
});

module.exports = store;
