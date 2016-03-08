var liteFlux = require('lite-flux');

var store = liteFlux.store("commentList",{
    data: {

    },
    actions: {
        getCommentList: function (request_data,callback) {
            webapi.comment.getCommentList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        },
        updateCommentStatus: function (id,request_data) {
            webapi.comment.updateComment(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                   Sp.message('操作成功');
                }
            });
        },
        replyComment: function (request_data) {
            webapi.comment.replyComment(request_data).then( function (res) {
                if (res && res.code === 0) {

                }
            });
        },
        setComment: function (request_data) {
            webapi.comment.setComment(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('设置成功');
                }else{
                    Sp.message('设置失败');
                }
            });
        },
        getCommentTagsList: function (request_data,callback) {
            webapi.comment.getCommentTagsList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('获取成功');
                    callback && callback(res);
                }else{
                    Sp.message('获取失败');
                }
            });
        },
        addCommentTag: function (request_data,callback) {
            webapi.comment.addCommentTag(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('新增成功');
                    webapi.comment.getCommentTagsList({goods_id:request_data.goods_id}).then( function (res) {
                        callback && callback(res);
                    });
                }else{
                    Sp.message('新增失败');
                }
            });
        },
        updateCommentTag: function (id,request_data) {
            webapi.comment.updateCommentTag(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('更新成功');
                }else{
                    Sp.message('更新失败');
                }
            });
        },
        deleteCommentTag: function (id,request_data) {
            webapi.comment.deleteCommentTag(id,request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('删除成功');
                }else{
                    Sp.message('删除失败');
                }
            });
        },
        batchUpdateComment: function (request_data,callback) {
            webapi.comment.batchUpdateComment(request_data).then( function (res) {
                if (res && res.code === 0) {
                    Sp.message('设置成功');
                    callback && callback(true);
                }else{
                    Sp.message('设置失败');
                    callback && callback(false);
                }
            });
        },
        getCommentConfigList: function (request_data,callback) {
            webapi.comment.getCommentConfigList(request_data).then( function (res) {
                if (res && res.code === 0) {
                    callback && callback(res.data);
                }
            });
        }
    }
});

module.exports = store;
