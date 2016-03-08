var Api = require('../api/api.jsx');

var events;

events = {
    // 加载列表
    onLoad: function (page, size, type) {
        var self = this;
        Api.attributeGroupApi.list({
            size: size || self.state.size || 10,
            type: self.props.queryId,
            page: page || self.state.currentPage || 1
        }, function (res) {
            if (res && !res.code) {
                self.setState({
                    data: res.data.data,
                    currentPage: res.data["current_page"],
                    lastPage: res.data["last_page"],
                    type: self.props.queryId
                });
            }
        });

    },
    // 切换分组
    onChangeType: function (value,e) {
        e.preventDefault();
        e.stopPropagation();
        var self = this;
        self.setState({
            type: value
        },function(){
            self.trigger("Load");
        });
        RRouter.routing.navigate('/app/attr/group/'+value);
    },
    // 创建新组
    onAddGroup: function(){
        var self = this;
        var name = (self.state.type == 0)?"未命名属性组":"未命名规格组";
        Api.attributeGroupApi.create({
            name: name,
            type: self.state.type
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 删除组
    onRemoveGroup: function(id,e){
        e.preventDefault();
        e.stopPropagation();

        var self = this;
        var go = window.confirm("你确定要删除吗");
        if(go){
            Api.attributeGroupApi.remove({
                id: id
            },function(res){
                if( res && !res.code ){
                    self.trigger("Load");
                }else{
                    Sp.message(res.msg);
                }
            });
        }
    },
    // 更新组
    onUpdateGroup: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        var name = e.target.value;
        var self = this;
        Api.attributeGroupApi.update({
            id: id,
            name: name,
            type: self.state.type
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 上一页
    onPrevPage: function () {
        var page = this.state.currentPage > 1 ? this.state.currentPage - 1 : 1;
        this.trigger("Load",page);
    },
    // 下一页
    onNextPage: function () {
        var page = this.state.currentPage < this.state.lastPage ? this.state.currentPage + 1 : this.state.lastPage;
        this.trigger("Load",page);
    }
};

module.exports = events;