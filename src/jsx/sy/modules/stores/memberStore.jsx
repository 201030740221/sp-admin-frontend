var Fluxxor = require("fluxxor");
var constants = require("../constants/memberConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
  initialize: function() {
    this.list = {};

    this.bindActions(
        constants.GET_MEMBER_LIST, this.onGetMemberList,
        constants.SEARCH, this.onSearch,
        constants.UPDATE_MEMBER_LIST, this.onUpdateMemberList

    );
  },

  onGetMemberList: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.memberApi.list(payload).done(function(res){
      console.log(res, 'list');
      if(res.code === 0){
        _this.list = res.data;
        _this.emit("change");
      }
    });
  },
  onSearch: function(payload) {
    var postData = {};
    if(payload.page) postData.page = payload.page;
    if(payload.keyword) postData.keyword = payload.keyword;
    if(payload.status) postData.status = payload.status;
    console.log(postData);
    this.onGetMemberList(postData);
  },
  onUpdateMemberList: function(payload) {
    if(!payload){
      payload = [];
    }
    var _this = this;
    this.list = payload;
    this.emit("change");
  },


  getState: function() {
    return {
      list: this.list
    };
  }
});

module.exports = store;
