var Fluxxor = require("fluxxor");
var constants = require("../constants/loginConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
    initialize: function() {
        this.user = {};

        this.bindActions(
            constants.LOGIN, this.onLogin,
            constants.LOGOUT, this.onLogout,
            constants.SETUSER, this.onSetUser
        );
    },

    onLogin: function(payload) {
        if(!payload){
            payload = {};
        }
        var _this = this;
        Api.userApi.post('login',payload)
            .done(function(res){
                //console.log(res, 'Login');
                if(res.code === 0){
                    Sp.message('登录成功');

                    _this.user = res.data;
                    _this.emit("change");

                    window.csrf_token = res.data.token;
                    localStorage.setItem('csrf_token_form', csrf_token);
                    localStorage.setItem('isLogined', 1);

                    RRouter.routing.navigate('/login');
                    RRouter.routing.navigate('/');
                }else{
                    Sp.message('登录失败: '+ JSON.stringify(res.data.errors), 'error');
                }
            })
            .fail(function(res){
                //console.log(res, 'Login');
                Sp.message('登录失败: 网络连接出错', 'error');
            });
    },

    onLogout: function(payload) {
        var _this = this;
        _this.user = {};
        _this.emit("change");
        Api.userApi.post('logout',payload)
            .done(function(res){
                //console.log(res, 'Logout');
                if(res.code === 0){
                    RRouter.routing.navigate('/login');
                    localStorage.setItem('isLogined', 0);
                    Sp.message('退出成功');
                }else{
                    Sp.message('退出失败', 'error');
                }
            })
            .fail(function(res){
                Sp.message('退出失败: 网络连接出错', 'error');
            });
    },


    onSetUser: function (payload) {
        this.user = payload;

        if (payload.token) {
            window.csrf_token = payload.token;
            localStorage.setItem('csrf_token_form', csrf_token);
        }

        this.emit("change");
    },

    getState: function() {
        return {
            user: this.user
        };
    }
});

module.exports = store;
