var constants = require("../constants/articleCategoryConstants.jsx");
var action = {
  getCategory: function() {
    this.dispatch(constants.GET_CATEGORY, {});
  },

  addCategory: function(postData) {
    this.dispatch(constants.ADD_CATEGORY, postData);
  },
  removeCategory: function(postData) {
    this.dispatch(constants.REMOVE_CATEGORY, postData);
  },
  updateStatusCategory: function(postData) {
    this.dispatch(constants.UPDATE_STATUS_CATEGORY, postData);
  },
  updateCategory: function(postData) {
    this.dispatch(constants.UPDATE_CATEGORY, postData);
  }
};

module.exports = action;