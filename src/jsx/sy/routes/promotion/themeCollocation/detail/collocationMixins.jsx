/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';
var typeMap = {
    '1': '按件满折',
    '2': '优惠价组合'
};

var mixins = {
    renderGoodsNames: function(goods){
        if(!goods || !goods.length){
            return [];
        }
        return goods.map(function(item, i){
            var ret = [];
            if(i !== 0){
                ret.push(' + ');
            }
            // ret += item.goods.title
            ret.push(<BLabel bsStyle='primary'>{item.goods.title}</BLabel>);
            return ret;
        });
    },
};
module.exports = mixins;
