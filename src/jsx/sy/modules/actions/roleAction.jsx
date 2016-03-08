var constants = require("../constants/roleConstants.jsx");
var action = {
    getList: function() {
        this.dispatch(constants.GET_LIST, {});
    },
    remove: function(payload) {
        this.dispatch(constants.REMOVE, payload);
    }
};

module.exports = action;