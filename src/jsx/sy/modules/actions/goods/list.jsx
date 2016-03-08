
var goodListStore = require('../../stores/goods/list.jsx');
var liteFlux = require('lite-flux');

action = liteFlux.action("goodList",{
	loadList:function(page, size){
        var self = this;
        var store = goodListStore.getStore();
        var data = {};

        if(typeof page === "object"){
            data = page;
        }else{
            data = {
                size: size || store.size || 10,
                page: page || store.currentPage || 1,
                category_id: store.keywords.category_id,
                title:  store.keywords.title
            };
        }

        webapi.goods.getSpuList( data ).then(function (res) {
            if(res && !res.code){
                goodListStore.setStore({
                    data: res.data.data,
                    currentPage: res.data.current_page,
                    lastPage: res.data.last_page
                });
            }

        });

	}
});

module.exports = action;
