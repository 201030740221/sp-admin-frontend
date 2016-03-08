var Fluxxor = require("fluxxor");
var constants = require("../constants/articleConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
  initialize: function() {
    this.source = {};
    this.list = [];
    this.article = {};
    this.category = [];

    this.bindActions(
        constants.GET_ARTICLE, this.onGetArticle,
        constants.GET_CATEGORY, this.onGetCategory,
        constants.GET_ARTICLE_LIST, this.onGetArticleList,
        constants.SEARCH, this.onSearch,
        constants.CREATE_ARTICLE, this.onCreateArticle,
        constants.REMOVE_ARTICLE, this.onRemoveArticle,
        constants.UPDATE_STATUS_ARTICLE, this.onUpdateStatusArticle,
        constants.UPDATE_ARTICLE, this.onUpdateArticle,
        constants.INIT_ARTICLE, this.onInitArticle
    );
    //this.onGetArticle();
  },

  onGetArticleList: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.articleApi.list(payload).done(function(res){
      console.log(res, 'list');
      if(res.code === 0){
        _this.source = res.data;
        _this.list = _this.source.data || [];
        _this.emit("change");
      }
    });
  },

  onGetCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.articleCategoryApi.list(payload).done(function(res){
      console.log(res, 'onGetCategory');
      if(res.code === 0){
        _this.category = res.data;
        _this.emit("change");
      }
    });
  },

  onSearch: function(payload) {
    var _this = this;
    /*var category_id = payload.category_id || -1;
    var keyword = payload.keyword || "";
    var list = [];
    this.source.data.map(function(item, i){
      if((category_id == -1 || item.category_id == category_id) && item.title.match(keyword)){
        list.push(item);
      }

    });*/
    var postData = {};
    if(payload.page) postData.page = payload.page;
    if(payload.keyword) postData.title = payload.keyword;
    if(payload.category_id && payload.category_id > 0) postData.category_id = payload.category_id;
    console.log(postData);
    this.onGetArticleList(postData);
  },

  onGetArticle: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.articleApi.get('getDetail',payload).done(function(res){
      console.log(res, 'Get Article Detail');
      if(res.code === 0){
        _this.article = res.data;
        _this.emit("change");
      }
    });
  },

  onCreateArticle: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'create');
    Api.articleApi.create(payload).done(function(res){
      console.log(res, 'create');
      if(res.code === 0){

      }
    });
  },

  onRemoveArticle: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.articleApi.remove(payload).done(function(res){
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

  onUpdateStatusArticle: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'status');
    Api.articleApi.post('updateStatus',payload).done(function(res){
      console.log(res, 'status');
      if(res.code === 0){
        //_this.category.push(payload);
        _this.emit("change");
      }
    });
  },

  onUpdateArticle: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'update', payload.type);
    if(payload.type == 'save'){
      if(payload.data.id){
        Api.articleApi.update(payload.data).done(function(res){
          if(res.code === 0){
            //_this.category.push(payload);
            //_this.emit("change");

            _this.emit("change");
            Sp.message('保存成功');
          }
        });
      }else{
        Api.articleApi.create(payload.data).done(function(res){
          console.log(res, 'create');
          if(res.code === 0){
            _this.article = res.data;
            id = res.data.id;
            var reg = /article\/[A-Za-z0-9]+/gi;
            window.location = window.location.href.replace(reg, 'article/'+id);
            _this.emit("change");
          }
        });
      }
    }else if(payload.type){
      this.article[payload.type] = payload[payload.type];
      _this.emit("change");
    }
  },
  onInitArticle: function () {
      this.article = {
        title: '',
        category_id: -1,
        status: 0,
        content: ''
    };
  },



  getState: function() {
    return {
      source: this.source,
      list: this.list,
      category: this.category,
      article: this.article
    };
  }
});

module.exports = store;
