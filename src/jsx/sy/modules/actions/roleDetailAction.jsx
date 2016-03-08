var constants = require("../constants/roleDetailConstants.jsx");
var action = {
  getRole: function(payload) {
    this.dispatch(constants.GET_ROLE, payload);
  },
  update: function(payload) {
    this.dispatch(constants.UPDATE, payload);
  }
};

module.exports = action;