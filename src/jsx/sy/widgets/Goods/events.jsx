var Api = require('../../widgets/api/api.jsx');
var liteFlux = require('lite-flux');

var events;

events = {
    onLoad: function (page, size) {
        liteFlux.action("goodList").loadList( page, size||10 );
        // var self = this;
        // Api.goodApi.list({
        //     size: size || self.state.size || 10,
        //     page: page || self.state.currentPage || 1
        // }, function (res) {
        //     if (res && !res.code) {
        //         self.setState({
        //             data: res.data.data,
        //             currentPage: res.data["current_page"],
        //             lastPage: res.data["last_page"]
        //         });
        //     }
        // });
    },
    // 加载商品详情
    onSearchLoad: function(data){
        var self = this;
        Api.goodApi.list( data, function (res) {
            if (res && !res.code) {
                self.setState({
                    data: res.data.data,
                    currentPage: res.data["current_page"],
                    lastPage: res.data["last_page"]
                });
            }
        });
    },
    // 全选
    onCheckedAll: function () {
        var defaultChecked = this.refs.checkAll.getChecked();
        this.setState({
            itemCheck: defaultChecked
        });
    },
    // 添加商品
    onAddGood: function () {
        RRouter.routing.navigate('/app/good/add');
    },
    // 编辑商品
    onEditGood: function (id) {
        RRouter.routing.navigate('/app/good/edit/'+id);
    },
    // 加入回收站
    onRemoveGood: function(id){
        var self = this;
        var go = window.confirm("你确定要删除吗");
        if(go){
            Api.goodApi.post("remove",{
                id: id
            }, function(res){
                console.log(res);
                if(res&&!res.code){
                    self.trigger("Load");
                }
            })
        }
    },
    // 上架
    onAddShelf: function(id,val){
        var self = this;
        Api.goodApi.post("update",{
            goods:{
                id: id,
                status:val
            }
        }, function(res){
            console.log(res);
            if(res && res.code){
                Sp.message(res.msg,'error');
            }
        })
    },
    // 上一页
    onPrevPage: function () {
        var state = liteFlux.store("goodList").getStore();
        if(state.currentPage==1){
            Sp.message('亲,已经是第一页了');
        }else {
            var page = state.currentPage > 1 ? state.currentPage - 1 : 1;
            this.trigger("Load", page);
        }
    },
    // 下一页
    onNextPage: function () {
        var state = liteFlux.store("goodList").getStore();
        if(state.currentPage>=state.lastPage){
            Sp.message('亲,已经是最后一页了');
        }else{
            var page = state.currentPage < state.lastPage ? state.currentPage + 1 : state.lastPage;
            this.trigger("Load",page);
        }
    }
};

module.exports = events;
