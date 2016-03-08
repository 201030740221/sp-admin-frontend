var Fluxxor = require("fluxxor");
var constants = require("../constants/userConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
  initialize: function() {
    this.userList = {};
    this.roleList = [];

    this.bindActions(
        constants.GET_USER_LIST, this.onGetUserList,
        constants.GET_ROLE_LIST, this.onGetRoleList,
        constants.SEARCH, this.onSearch,
        constants.UPDATE_USER, this.onUpdateUser,
        constants.REMOVE_USER, this.onRemoveUser

    );
  },

  onGetUserList: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.userApi.list(payload).done(function(res){
      //console.log(res, 'userList');
      if(res.code === 0){
        _this.userList = res.data;
        _this.emit("change");
      }
    });
  },
  onGetRoleList: function(payload) {
    if(!payload){
      payload = {};
    }
    var _this = this;
    Api.roleApi.list(payload).done(function(res){
      //console.log(res, 'roleList');
      if(res.code === 0){
        _this.roleList = res.data;
        _this.emit("change");
      }
    });
  },
  onSearch: function(payload) {
    var postData = {};
    if(payload.page) postData.page = payload.page;
    if(payload.keyword) postData.keyword = payload.keyword;
    if(payload.role_id && payload.role_id > 0) postData.role_id = payload.role_id;
    //console.log(postData);
    this.onGetUserList(postData);
  },
  onUpdateUser: function(payload) {
    var postData;
    var _this = this;
    switch (payload.type){
      case 'save':
        postData = payload.user ? payload.user : this.user;
        Api.userApi.update(postData).done(function(res){
          //console.log(res, 'user updated');
          if(res.code === 0){
            var user = res.data[0];
            _this.userList.data.map(function(item,i){
              if(item.id === user.id){
                _this.userList.data[i] = user;
                //item = user;
              }
            });
            _this.emit("change");
          }
        });
        break;
      case 'create':
        postData = payload.user ? payload.user : this.user;
        if(postData.error){
          delete postData.error;
        }
        delete postData.password2;
        Api.userApi.create(postData).done(function(res){
          //console.log(res, 'user created');
          if(res.code === 0){
            _this.userList.data.push(res.data[0]);
            _this.emit("change");
          }
        });
        break;
      case 'update':
        this.user = payload.user;
        this.emit("change");
        break;
      case 'role_id':
        if(this.user.role)
            this.user.role.id = payload[payload.type];
        else{
            this.user.role = {id: payload[payload.type]}
        }
        console.log(this.user);
        if(this.user.error){
          delete this.user.error;
        }
        this.emit("change");
        break;
      default:
        this.user[payload.type] = payload[payload.type];
        if(this.user.error){
          delete this.user.error;
        }
        this.emit("change");
        break;
    }
  },
  onRemoveUser: function(payload) {
    var _this = this;
    Api.userApi.remove(payload).done(function(res){
      //console.log(res, 'user remove');
      if(res.code === 0){
        _this.userList.data.map(function(item,i){
          if(item.id === payload.id){
            _this.userList.data.splice(i, 1);
          }
        });
        _this.emit("change");
      }else{
        Sp.message(res.msg);
      }
    });
  },


  getState: function() {
    return {
      userList: this.userList,
      roleList: this.roleList,
      user: this.user
    };
  }
});

module.exports = store;
