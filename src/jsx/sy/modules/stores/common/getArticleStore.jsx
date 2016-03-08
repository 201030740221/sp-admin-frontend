var liteFlux = require('lite-flux');
var Api = require('../../../modules/api/api.jsx');

var store = liteFlux.store("articleList",{
    data: {

    },
    actions:{
        getArticleList: function(data,callback) {
            Api.articleApi.list( {}, function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data)
                }
            });
        }
    }
});

module.exports = store;