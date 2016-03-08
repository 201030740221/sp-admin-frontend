var liteFlux = require('lite-flux');

var store = liteFlux.store("goodList",{
	data: {
        data: [],
        type: 0,
        size: 10,
        currentPage: 1,
        lastPage: 1,
        itemCheck: false,
        keywords:{
            title:'',
            status: -1,
            category_id: 0,
            collocation_status: -1
        },
        isSearch: false
    }
});

module.exports = store;
