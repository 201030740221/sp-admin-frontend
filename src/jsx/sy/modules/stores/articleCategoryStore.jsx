var Fluxxor = require("fluxxor");
var constants = require("../constants/articleCategoryConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
  initialize: function() {
    this.category = [];

    this.bindActions(
        constants.GET_CATEGORY, this.onGetCategory,
        constants.ADD_CATEGORY, this.onAddCategory,
        constants.REMOVE_CATEGORY, this.onRemoveCategory,
        constants.UPDATE_STATUS_CATEGORY, this.onUpdateStatusCategory,
        constants.UPDATE_CATEGORY, this.onUpdateCategory
    );
    //this.onGetCategory();
  },

  onGetCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.articleCategoryApi.list(payload).done(function(res){
      console.log(res, 'list');
      if(res.code === 0){
        _this.category = res.data;
        _this.emit("change");
      }
    });
  },

  onAddCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'create');
    Api.articleCategoryApi.create(payload).done(function(res){
      console.log(res, 'create');
      if(res.code === 0){
        //前端插入
        /*var category = _this.category;
        _this.category.map(function(item,i){
          if(item.id == payload.parent_id){
            category = item.children;
          }
        });
        category.push(payload);
        _this.emit("change");*/
        //重新开刷
        _this.onGetCategory();
      }
    });
  },

  onRemoveCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'remove');
    Api.articleCategoryApi.remove(payload).done(function(res){
      console.log(res, 'remove');
      if(res.code === 0){
        //_this.category.push(payload);
        _this.emit("change");
      }
    });
  },

  onUpdateStatusCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'status');
    Api.articleCategoryApi.post('updateStatus',payload).done(function(res){
      console.log(res, 'status');
      if(res.code === 0){
        //_this.category.push(payload);
        _this.emit("change");
      }
    });
  },

  onUpdateCategory: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    console.log(this, 'update');
    Api.articleCategoryApi.update(payload).done(function(res){
      console.log(res, 'update');
      if(res.code === 0){
        //_this.category.push(payload);
        _this.emit("change");
      }
    });
  },

  getState: function() {
    return {
      category: this.category
    };
  }
});

module.exports = store;
