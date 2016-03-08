var Api = require('../../widgets/api/api.jsx');

var events;

events = {
    onLoad: function (id) {
        var self = this;
        Api.goodApi.get("getAttributeByID",{
            id: self.state.goodData.id || id,
            type:0
        }, function (res) {
            if (res && !res.code) {
                var goodData = self.state.goodData;
                goodData.skuAttrList = res.data;
                // 默认排序
                goodData.skuAttrList.map(function(item,index){
                    goodData.skuAttrListSelected[index] = goodData.skuAttrListSelected[index] || [];
                    item.value.map(function(item_obj,item_i){
                        goodData.skuAttrListSelected[index][0] = goodData.skuAttrListSelected[index][0] || item_obj["attribute_id"];
                        goodData.skuAttrListSelected[index][1] = goodData.skuAttrListSelected[index][1] || 0;
                    });
                });
                self.setState(goodData,function(){
                    self.trigger("LoadSkuList")
                });
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
    // 获取SKU属性列表
    onGetSkuAttrList: function(){

    },
    // 添加SKU属性
    onAddSkuAttr: function(id,e){
        var self = this;
        var name=prompt("请输入值的名字", "未命名值");
        if(name!=null){
            Api.attributeValueApi.create({
                attribute_id: id,
                attribute_value: name,
                template_type: 1,
                sort: 0
            },function(res){
                if( res && !res.code ){
                    var goodData = self.state.goodData;
                    goodData.addedSkuAttr.push(res.data.id);
                    self.setState(goodData);
                    self.trigger("Load");
                }
            });
        }
    },
    // 删除SKU属性
    onRemoveSkuAttr: function(id,e){
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
    // 获取SKU列表
    onLoadSkuList: function(){
        var self = this;
        Api.skuApi.get( "getListByGoodsID",{
            id: self.state.goodData.id
        }, function(res){
            if(res&&!res.code){
                var goodData = self.state.goodData;
                goodData.skuList = res.data;
                self.setState(goodData);
            }
        })
    },
    // 设置主SKU
    onUpdatePrimarySkuId: function(skuId){
        var self = this;
        Api.skuApi.post("updatePrimarySkuId",{
            goods:{
                id: self.state.goodData.id,
                primary_sku_id: skuId
            }
        },function(res){
            if(res&&!res.code){
                self.trigger("LoadSkuList")
            }
        });
    },
    // 生成一条SKU
    onCreateSku: function(){
        var self = this;

        var attribute={};
        self.state.goodData.skuAttrListSelected.map(function(item){
            if(item[1]!=0 && typeof item[1]!="undefined" )
                attribute[item[0]] = item[1];
        });

        function isOwnEmpty(obj){
            for (var name in obj){
                if(obj.hasOwnProperty(name)){
                    return false
                }
            }
            return true
        }

        console.log(attribute,isOwnEmpty(attribute))

        if(isOwnEmpty(attribute)){
            alert("请先选择商品SKU属性")
        }else{
            Api.skuApi.create({
                goodsSku:{
                    goods_id: self.state.goodData.id
                },
                attribute: attribute
            },function(res){
                if (res && !res.code) {
                    self.trigger("LoadSkuList")
                }
                if(res.code == 20002){
                    alert("sku已存在");
                }
            });
        }


    },
    // 删除一条SKU
    onRemoveSku: function(id){
        var self = this;
        Api.skuApi.remove({
            id: id
        }, function (res) {
            if (res && !res.code) {
                self.trigger("LoadSkuList")
            }
        });
    },
    // 更新一条SKU
    onUpdateSku: function(id,sku_status){
        var self = this;
        Api.skuStatusApi.update({
            goods_sku_id: id,
            sku_status: sku_status
        }, function (res) {
            if (res && !res.code) {
                Sp.message('操作成功');
                self.trigger("LoadSkuList")
            }else{
                Sp.message.error(res.msg);
            }
        });
    },
    // 更新前台显示
    onUpdateChangeDisplay: function(id,display){
        var self = this;
        Api.skuDisplayApi.update({
            sku_id: id,
            display: display
        }, function (res) {
            if (res && !res.code) {
                self.trigger("LoadSkuList")
            }
        });
    },
    // 获取一条SKU对应的规格列表与值
    onGetSkuData: function(id,name){
        var self = this;
        this.setState({
            templateContent: ""
        });
        Api.skuApi.get("view",{
            goods_sku_id: id
        },function(res){

            if(res&&!res.code){

                // 处理默认自定义值
                var newSpecification = res.data.specification.filter(function (item) {
                    return item['template_type']=='0';
                });

                var activeSkuSpecification = [];
                newSpecification.map(function(item){
                    var obj = {
                        id: item.id,
                        active: true,
                        value:""
                    };
                    item.value.map(function(child){
                        //console.log(child.id , item["current_value"],!child["template_type"],child["attribute_value"]);
                        if(child.id == item["current_value"] && !child["template_type"]){
                            obj.active = true;
                            obj.value = child["attribute_value"];
                        }
                    });
                    activeSkuSpecification.push(obj);
                });

                self.setState({
                    activeSku: id,
                    activeSkuName: name,
                    activeSkuData:res.data,
                    activeSkuSpecification:activeSkuSpecification
                });

            }
        });

    },
    // 保存SKU对应规格
    onSaveSkuData: function(data){
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
        Api.skuApi.update(data,function(res){
            Sp.log("update",res);
            if(res&&!res.code){
                alert("提交成功");
            }
        });
    },
    // 同步某条SKU规格
    onSyncSkuData: function(skuid){
        var self = this;
        if(skuid){
            Api.skuApi.get("view",{
                goods_sku_id: skuid
            },function(res){
                Sp.log("sync",res);
                if(res&&!res.code){
                    // 处理默认自定义值
                    var newSpecification = res.data.specification.filter(function (item) {
                        return item['template_type']=='0';
                    });

                    var activeSkuSpecification = [];
                    newSpecification.map(function(item){
                        var obj = {
                            id: item.id,
                            active: true,
                            value:""
                        };
                        item.value.map(function(child){
                            //console.log(child.id , item["current_value"],!child["template_type"],child["attribute_value"]);
                            if(child.id == item["current_value"] && !child["template_type"]){
                                obj.active = true;
                                obj.value = child["attribute_value"];
                            }
                        });
                        activeSkuSpecification.push(obj);
                    });
                    self.setState({
                        activeSkuData:res.data,
                        activeSkuSpecification:activeSkuSpecification
                    });
                }
            });
        }else{
            self.setState({
                activeSkuData:{
                    baseSku:[],
                    specification:[]
                }
            });
        }

    },
    // 更新关联优惠券
    onUpdateCouponRelation: function(couponId){
        var data = this.state.activeSkuData;
        data.baseSku["coupon_task_id"] = couponId;
        this.setState(data);
    },
    // 更新价格
    onUpdateBasicPrice: function(price){
        var data = this.state.activeSkuData;
        data.baseSku["basic_price"] = price;
        this.setState(data);
    },
    // 更新优惠价格
    onUpdatePrice: function(price){
        var data = this.state.activeSkuData;
        data.baseSku.price = price;
        this.setState(data);
    },
    // 更新重量
    onUpdateWeight: function(weight){
        var data = this.state.activeSkuData;
        data.baseSku["weight"] = weight;
        this.setState(data);
    },
    // 更新体积
    onUpdateDimension: function(dimension){
        var data = this.state.activeSkuData;
        data.baseSku.dimension = dimension;
        this.setState(data);
    },
    // 更新数量
    onUpdatePieces: function(pieces){
        var data = this.state.activeSkuData;
        data.baseSku.pieces = pieces;
        this.setState(data);
    },
    // 更新安装费
    onUpdateInstallation: function(installation){
        var data = this.state.activeSkuData;
        data.baseSku.installation = installation;
        this.setState(data);
    },

    /*更新SEO信息*/
    onUpdateSeoTitle: function(seoTitle){
        var data = this.state.activeSkuData;
        data.baseSku["title"] = seoTitle;
        this.setState(data);
    },
    onUpdateSeoKeywords: function(seoKeywords){
        var data = this.state.activeSkuData;
        data.baseSku["keywords"] = seoKeywords;
        this.setState(data);
    },
    onUpdateSeoDescription: function(seoDescription){
        var data = this.state.activeSkuData;
        data.baseSku["description"] = seoDescription;
        this.setState(data);
    },

    // 选择属性
    onUpdateAttrSelect: function(index,attributeId,id){
        var goodData = this.state.goodData;
        //goodData.skuAttrListSelected[index] = [attributeId,id];
        if(goodData.skuAttrListSelected[index][0]==attributeId && goodData.skuAttrListSelected[index][1]==id)
            goodData.skuAttrListSelected[index][1] = 0;
        else
            goodData.skuAttrListSelected[index] = [attributeId,id];
        this.setState(goodData);
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
    }

};

module.exports = events;
