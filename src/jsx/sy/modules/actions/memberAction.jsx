var constants = require("../constants/memberConstants.jsx");
var action = {};
action.memberAction = {
  getMemberList: function(postData) {
    postData = postData || {
        'status': 1 // 1 是激活用户
    }
    this.dispatch(constants.GET_MEMBER_LIST, postData);
  },
  onSearch: function(postData) {
    console.log(postData, '++++')
    this.dispatch(constants.SEARCH, postData);
  },
  updateMemberList: function(postData) {
    this.dispatch(constants.UPDATE_MEMBER_LIST, postData);
  }
};

module.exports = action;
