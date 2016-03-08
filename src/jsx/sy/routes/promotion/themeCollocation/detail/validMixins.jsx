/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';

var mixins = {
    error: function(name){
        var store = this.state[storeName];
        var error = store.fieldError;
        if(!error || !error[name] || !error[name].length){
            return [''];
        }
        return error[name];
    },
    tagError: function(item, name){
        var error = item.fieldError;
        if(!error || !error[name] || !error[name].length){
            return [''];
        }
        return error[name];
    },
    valid: function(name){
        return Action.valid(name);
    },
    tagValid: function(item, i, name){
        return Action.validOneTagInfo(item, i, name);
    }
};
module.exports = mixins;
