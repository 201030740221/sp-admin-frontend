var Fluxxor = require("fluxxor");
var constants = require("../constants/roleDetailConstants.jsx");

//Api
var Api = require('../../modules/api/api.jsx');

//
var store = Fluxxor.createStore({
    initialize: function() {
        this.role = {};

        this.bindActions(
            constants.GET_ROLE, this.onGetRole,
            constants.UPDATE, this.onUpdate
        );
    },

    onGetRole: function(payload) {
        if(!payload){
            payload = {};
        }
        var _this = this;
        Api.roleApi.RESTful('GET',payload.id,{}, function(res){
            console.log(res, 'Role');
            if(res.code === 0){
                Sp.message('数据载入成功');
                _this.role = res.data;
                _this.emit("change");
            }
        });
    },

    onUpdate: function(payload) {
        var postData;
        var _this = this;
        switch (payload.type){
            case 'save':
                postData = payload.role ? payload.role : this.role;
                console.log(postData);
                if(postData.error){
                    delete postData.error;
                }
                Api.roleApi.RESTful('PUT',postData.id,postData, function(res){
                    console.log(res, 'role updated');
                    if(res.code === 0){
                        Sp.message('保存成功!');
                    }
                });
                break;
            case 'create':
                postData = payload.role ? payload.role : this.role;
                if(postData.error){
                    delete postData.error;
                }
                Api.roleApi.RESTful('POST',postData.id,postData, function(res){
                    console.log(res, 'role created');
                    if(res.code === 0){
                        Sp.message('创建成功!');
                        _this.role = res.data;
                        id = res.data.id;
                        var reg = /roleDetail\/[A-Za-z0-9]+/gi;
                        window.location = window.location.href.replace(reg, 'roleDetail/'+id);
                        _this.emit("change");
                    }
                });
                break;
            case 'update':
                this.role = payload.role;
                this.emit("change");
                break;
            case 'init':
                this.role = payload.role;
                Api.roleApi.get('resource', {})
                    .done(function(res){
                        console.log(res);
                        if(res.code === 0){
                            _this.role.resource_group = res.data;
                            _this.emit("change");
                        }
                    });
                //this.emit("change");
                break;
            case 'updateGroup':
                this.role.resource_group.map(function(item, i){
                    if(item.id == payload.group.id){
                        item.resources.map(function(sub, j){
                            sub.role_has_privilege = payload.group.value;
                        });
                    }
                });
                this.emit("change");
                break;
            case 'updateSource':
                this.role.resource_group.map(function(item, i){
                    if(item.id == payload.source.group_id){
                        item.resources.map(function(sub, j){
                            if(sub.id ==  payload.source.id)
                                sub.role_has_privilege = payload.source.value;
                        });
                    }
                });
                this.emit("change");
                break;
            default:
                this.role[payload.type] = payload[payload.type];
                if(this.role.error){
                 delete this.role.error;
                 }
                this.emit("change");
                break;
        }
    },

    getState: function() {
        return {
            role: this.role
        };
    }
});

module.exports = store;
