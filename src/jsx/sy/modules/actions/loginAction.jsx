var constants = require("../constants/loginConstants.jsx");
var action = {};
action.loginAction = {
    login: function(payload) {
        this.dispatch(constants.LOGIN, payload);
    },
    logout: function(payload) {
        this.dispatch(constants.LOGOUT, payload);
    },
    setUser: function(payload) {
        this.dispatch(constants.SETUSER, payload);
    }
};

module.exports = action;