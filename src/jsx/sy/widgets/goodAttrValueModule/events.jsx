var Api = require('../api/api.jsx');

var events;

events = {
    // 加载列表
    onLoad: function (id) {
        var self = this;
        if(!self.state.queryId) return;
        Api.attributeApi.list({
            attribute_group_id: self.state.queryId || id
        }, function (res) {
            if (res && !res.code) {
                self.setState({
                    data: res.data,
                    currentPage: 1,
                    lastPage: 1
                });
            }
        });
    },
    // 增加属性
    onAddAttr: function(){
        var self = this,
            typename = "属性";
        if(self.state.type!=0){
            typename = "规格";
        }
        //var name=prompt("请输入"+typename+"名", "未命名"+typename);
        var name= "未命名"+typename;
        /*if(name!=null){

        }*/
        Api.attributeApi.create({
            type: self.state.type,
            group_id: self.state.queryId,
            name: name,
            remarks: typename+"描述说明"
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 更新属性
    onUpdateAttr: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        var name = e.target.value;
        var self = this;
        Api.attributeApi.update({
            id: id,
            type: self.state.type,
            name: name,
            remarks: "属性的备注"
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 删除属性
    onRemoveAttr: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        var go = window.confirm("你确定要删除吗");
        var self = this;
        if (go){
            Api.attributeApi.remove({
                id: id,
                group_id: self.state.queryId
            },function(res){
                if( res && !res.code ){
                    self.trigger("Load");
                }else{
                    Sp.message(res.msg);
                }
            });
        }
    },
    // 更新属性排序
    onUpdateAttrSort: function(attribute_ids){
        var self = this;
        Api.attributeApi.post("sort",{
            attribute_ids: JSON.stringify(attribute_ids)
        },function(res){
            console.log( res );
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 新增属性值
    onAddAttrValue: function(id,template_type,e){
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        /*var name=prompt("请输入值的名字", "未命名值");
        if(name!=null){

        }*/
        Api.attributeValueApi.create({
            attribute_id: id,
            attribute_value: "未命名值",
            template_type: template_type,
            sort: 0
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 更新属性值
    onUpdateAttrValue: function(id,e){
        e.stopPropagation();
        e.preventDefault();

        var name = e.target.value;
        var self = this;
        Api.attributeValueApi.update({
            id: id,
            attribute_value: name
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 更新通用值
    onUpdateAttrTemplateType: function(id,attribute_value,e){
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        var templateType = e.target.value;
        Api.attributeValueApi.update({
            id: id,
            attribute_value:attribute_value,
            template_type: templateType
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    // 更新是否可变值
    BindIsType: function(id,e){
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        var val = e.target.value;
        Api.attributeValueApi.update({
            id: id
        },function(res){
            if( res && !res.code ){
                self.trigger("Load");
            }
        });
    },
    //删除属性值
    onRemoveAttrValue: function(id,e){
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        var go = window.confirm("你确定要删除吗");
        if (go){
            Api.attributeValueApi.remove({
                id: id
            },function(res){
                if( res && !res.code ){
                    self.trigger("Load");
                }
            });
        }

    },
    // 小节列表
    onGetSectionList: function (id) {
        var self = this;
        if(!self.state.queryId) return;
        Api.sectionApi.list({
            group_id: self.state.queryId || id
        }, function (res) {
            if (res && !res.code) {
                self.setState({
                    sectionList: res.data
                });
            }
        });
    },
    onAddSection: function (e) {
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        /*var name=prompt("请输入小节的名字", "未命名小节");
        if(name!=null){

        }*/
        Api.sectionApi.create({
            group_id: self.state.queryId,
            name: "未命名小节",
            sort:0
        },function(res){
            if( res && !res.code ){
                self.trigger("GetSectionList");
            }
        });

    },
    onUpdateSectionName: function(id,e){
        e.stopPropagation();
        e.preventDefault();

        var name = e.target.value;
        var self = this;
        Api.sectionApi.update({
            id: id,
            name: name
        },function(res){
            if( res && !res.code ){
                self.trigger("GetSectionList");
            }
        });
    },
    onUpdateSectionSort: function(section_ids){
        var self = this;
        Api.sectionApi.post("sort",{
            attribute_section_ids: JSON.stringify(section_ids)
        },function(res){
            if( res && !res.code ){
                self.trigger("GetSectionList");
            }
        });
    },
    onRemoveSection: function(id,e){
        e.stopPropagation();
        e.preventDefault();

        var self = this;
        var go = window.confirm("你确定要删除吗");
        if (go){
            Api.sectionApi.remove({
                id: id
            },function(res){
                if( res && !res.code ){
                    self.trigger("GetSectionList");
                }
            });
        }
    },
    onBindSection: function(attribute_id,e){
        e.preventDefault();
        e.stopPropagation();
        var section_id = e.target.value;
        var self = this;
        Api.sectionApi.post( "bind",{
            attribute_section_id: section_id,
            attribute_id: attribute_id
        },function(res){
            if( res && !res.code ){
                //self.trigger("GetSectionList");
            }
        });
    },
    onUpdateAttrChangeType: function(id,name,e){
        e.stopPropagation();
        e.preventDefault();
        var self = this;
        Api.attributeApi.update({
            id: id,
            name: name,
            type:1,
            template_type: e.target.value
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