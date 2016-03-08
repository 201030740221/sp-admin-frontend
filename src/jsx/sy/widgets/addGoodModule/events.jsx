var Api = require('../../widgets/api/api.jsx');

var events;

events = {
    // 加载商品详情
    onLoad: function(id){
        var self = this;
        Api.goodApi.get("view",{
            id: id
        }, function(res){
            Sp.log(res);
            if(res&&!res.code){
                // 处理默认自定义值
                var newSpecification = res.data.specification.filter(function (item) {
                    return  parseInt(item['template_type']);
                });

                var activeSkuSpecification = [];
                console.log(newSpecification);
                newSpecification.map(function(item){
                    var obj = {
                        id: item.id,
                        active: true,
                        value:""
                    };
                    item.value.map(function(child){
                        //console.log(child.id , item["current_value"],!child["template_type"],child["attribute_value"]);
                        if(child.id == item["current_value"] && child["template_type"]==0){
                            console.log(child.id , item["current_value"] , child["template_type"]);
                            obj.active = true;
                            obj.value = child["attribute_value"];
                        }
                    });
                    activeSkuSpecification.push(obj);
                });
                console.log(activeSkuSpecification);
                self.setState({
                    data: res.data,
                    activeSkuSpecification:activeSkuSpecification
                },function(){
                    self.trigger("GetUnit");
                })
            }
        });
    },
    // 更新商品信息
    onUpdateGood: function(data){
        var self = this;
        Api.goodApi.post( "update", data, function(res){
            if(res&&!res.code){
                alert("修改成功");
            }
        });
    },
    // 步骤条功能
    onJumpStep: function(step,goodId){
        var self = this;
        switch (step){
            case 1:
                if(goodId){
                    RRouter.routing.navigate('/app/good/edit/'+goodId);
                }
                break;
            case 2:
                if(!goodId){
                    alert("还没有建立商品");
                }else{
                    RRouter.routing.navigate('/app/good/sku/'+goodId);
                }
                break;
            case 3:
                if(!goodId){
                    alert("还没有建立商品");
                }else{
                    RRouter.routing.navigate('/app/good/preview/'+goodId);
                }
                break;
        }
    },
    // 更新添加商品时分类ID
    onUpdateCategoryId: function(category){
        var self = this;
        var goodData = this.state.goodData;
        goodData.category = category;
        this.setState({
            goodData: goodData
        },function(){
            self.trigger("GetAttrs",category.goods_specification_group_id,1);
        });
    },
    // 获取数量单位
    onGetUnit: function(){
        var self = this;
        Api.goodApi.get("unit",{},function(res){
            if (res && !res.code) {
                self.setState({
                    units: res.data
                });
            }
        });
    },
    // 获取商品规格
    onGetAttrs: function(id,type){
        var self = this;

        Api.attributeGroupApi.get("detail",{
            id: id,
            type: type
        },function(res){
            if (res && !res.code) {

                // 处理默认自定义值
                var newSpecification = res.data.filter(function (item) {
                    return parseInt(item['template_type']);
                });

                var activeSkuSpecification = [];
                newSpecification.map(function(item){
                    var obj = {
                        id: item.id,
                        active: true,
                        value:""
                    };
                    /*item.value.map(function(child){
                        //console.log(child.id , item["current_value"],!child["template_type"],child["attribute_value"]);
                        if(child.id == item["current_value"] && !child["template_type"]){
                            obj.active = true;
                        }
                        obj.value = child["attribute_value"];
                    });*/
                    activeSkuSpecification.push(obj);
                });

                self.setState({
                    parameter: res.data,
                    activeSkuSpecification:activeSkuSpecification
                });
            }
        });
    },
    // 检查是否是自定义值
    onCheckCustomValue: function(index,e){
        /*if(e.target.value=="0") return;
        var activeSkuSpecification = this.state.activeSkuSpecification[index];
        var $selectedDom = $(e.target).find(":selected");
        var template_type = $selectedDom.data("template");
        activeSkuSpecification["active"]=!template_type;
        this.setState(activeSkuSpecification);*/
    },
    // 切换通用值
    onSelectCommonValue:function(index, custom_index,e){
        e.preventDefault();
        e.stopPropagation();
        var activeSkuSpecification = this.state.activeSkuSpecification[index];
        activeSkuSpecification["active"]=false;
        this.setState(activeSkuSpecification);
    },
    // 切换自定义值
    onSelectCustomValue: function(index,e){
        e.preventDefault();
        e.stopPropagation();
        var activeSkuSpecification = this.state.activeSkuSpecification[index];
        activeSkuSpecification["active"]=true;
        this.setState(activeSkuSpecification);
    },
    // 更新自定义值
    onUpdateCustomValue: function(index,e){
        e.preventDefault();
        e.stopPropagation();
        var activeSkuSpecification = this.state.activeSkuSpecification[index];
        activeSkuSpecification["value"] = e.target.value;
        this.setState(activeSkuSpecification);
    },
    // 提交商品
    onSubmitGood: function(goodData,specification){

        if(goodData.production_cycle && !$.isNumeric(goodData.production_cycle)){
            alert("周期必须为数字")
        }else{
            var data = {
                goods:{
                    title: goodData.title,
                    subtitle: goodData.subtitle,
                    goods_type: goodData.goods_type,
                    keywords: goodData.keywords,
                    production_cycle: goodData.production_cycle,
                    production_type: goodData.production_type,
                    unit: goodData.unit
                },
                value: specification
            };

            var customValue = [];
            var activeSkuSpecification = this.state.activeSkuSpecification;
            activeSkuSpecification.map(function(item){
                var value = '';
                if(item.active){
                    value = item.value;
                }
                customValue.push([item.id,value])
            });
            data.custom = customValue;

            if(goodData.id){
                data.goods['id'] = goodData.id;
                Api.goodApi.update(data,function(res){
                    if(res && !res.code){
                        alert("更新成功");
                        RRouter.routing.navigate('/app/good/sku/'+goodData.id);
                    }else{
                        alert("更新失败");
                    }
                });
            }else{
                if(!this.state.goodData.category.id){
                    alert("商品分类不能为空");
                    return;
                }
                data.category_id = [this.state.goodData.category.id];

                Api.goodApi.create(data,function(res){
                    if(res && !res.code){
                        var goodId = res.data.goods_data.id;
                        RRouter.routing.navigate('/app/good/sku/'+goodId);
                    }
                });
            }

        }

    },
    onChangeTitle: function(val){
        var data = this.state.data.goods;
        data.title = val;
        this.setState(data)
    },
    onChangeSubTitle: function(val){
        var data = this.state.data.goods;
        data.subtitle = val;
        this.setState(data)
    },
    onChangeCycle: function(val){
        var data = this.state.data.goods;
        data.production_cycle = val;
        this.setState(data)
    },
    onChangeKeyWord: function(val){
        var data = this.state.data.goods;
        data.keywords = val;
        this.setState(data)
    }
};

module.exports = events;