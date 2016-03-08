var constants = require("../constants/userConstants.jsx");
var action = {
  getUserList: function() {
    this.dispatch(constants.GET_USER_LIST, {});
  },
  getRoleList: function() {
    this.dispatch(constants.GET_ROLE_LIST, {});
  },
  onSearch: function(postData) {
    this.dispatch(constants.SEARCH, postData);
  },
  updateUser: function(payload) {
    this.dispatch(constants.UPDATE_USER, payload);
  },
  removeUser: function(payload) {
    this.dispatch(constants.REMOVE_USER, payload);
  }

};

module.exports = action;