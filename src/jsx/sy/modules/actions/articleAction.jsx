var constants = require("../constants/articleConstants.jsx");
var action = {
  getArticleList: function(postData) {
    this.dispatch(constants.GET_ARTICLE_LIST, postData);
  },
  getArticle: function(postData) {
    this.dispatch(constants.GET_ARTICLE, postData);
  },
  getCategory: function() {
    this.dispatch(constants.GET_CATEGORY, {});
  },
  onSearch: function(postData) {
    this.dispatch(constants.SEARCH, postData);
  },
  createArticle: function(postData) {
    this.dispatch(constants.CREATE_ARTICLE, postData);
  },
  removeArticle: function(postData) {
    this.dispatch(constants.REMOVE_ARTICLE, postData);
  },
  updateStatusArticle: function(postData) {
    this.dispatch(constants.UPDATE_STATUS_ARTICLE, postData);
  },
  updateArticle: function(postData) {
    this.dispatch(constants.UPDATE_ARTICLE, postData);
  },
  initArticle: function(postData) {
    this.dispatch(constants.INIT_ARTICLE, postData);
  }
};

module.exports = action;