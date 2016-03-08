/** @jsx React.DOM */
var Sp = require("../Sp.jsx");
var SkuImgUpload = require('../../widgets/imgUpload/skuImgUpload.jsx');
var AttrEditPage = require('../../widgets/addGoodModule/attrEdit.jsx');

var AttrList = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    handleChange:function(item,e){
        e.preventDefault();
        e.stopPropagation();
        var self = this;
        var checked = e.target.checked;
        if(item.sku_status){
            if(!checked){
                self.props.trigger("UpdateChangeDisplay",item.id,0);
            }else{
                self.props.trigger("UpdateChangeDisplay",item.id,1);
            }
        }else{
           Sp.message('亲，该商品sku已处在下架状态，不能再勾选了哦！');
        }

    },
    onRemoveItem: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        var self = this;
        Sp.confirm("是否删除属性",function(){
            self.props.trigger("RemoveSku",id);
        });

    },
    onUpdateItem: function(id,sku_status,warning,e){
        e.preventDefault();
        e.stopPropagation();
        var self = this;
        if(sku_status==0){
            var status = 1;
            Sp.confirm("是否进行上架操作",function(){
                self.props.trigger("UpdateSku",id,status);
            });
        }
        if(sku_status==1){
            var status = 0;
            if(warning){
                Sp.confirm(warning,function(){
                    self.props.trigger("UpdateSku",id,status);
                });
                return false;
            }
            self.props.trigger("UpdateSku",id,status);
        }

    },
    onEditItem:function(id,name,e){
        e.preventDefault();
        e.stopPropagation();
        this.props.trigger("GetSkuData",id,name);
    },
    onUpdatePrimarySkuId: function(e){
        e.preventDefault();
        e.stopPropagation();
        var skuId = e.target.value;
        this.props.trigger("UpdatePrimarySkuId",skuId);
    },
    render: function () {
        var self = this;
        var lists = this.props.data.skuList.map(function (item) {
            var radioNode = function(){
                if(self.props.data.primarySkuId == item.id){
                    return (
                        <Radio checked inline onChange={self.onUpdatePrimarySkuId} name='skuitem' defaultValue={item.id}>{item['attribute_name']}</Radio>
                    )
                }else{
                    return (
                        <Radio inline name='skuitem' onChange={self.onUpdatePrimarySkuId} defaultValue={item.id}>{item['attribute_name']}</Radio>
                    )
                }
            };

            var update_node = '';
            if(item.sku_status){
                update_node = '下架';
            }
            if(item.sku_status==0){
                update_node = '上架';
            }
            var bsStyle = 'info';
            if(item.sku_status == 0){
                bsStyle = 'warning';
            }
            return (
                <div className="skuItem" key={item.id} data-id="{item.id}">
                    {radioNode()}
                    <div style={{marginTop:'5'}}>
                        <span style={{marginLeft:'19'}}>操作: </span>
                        <Button  onClick={self.onUpdateItem.bind(null,item.id,item.sku_status,item.warning)} bsStyle={bsStyle} style={{marginLeft:'5'}}>{update_node}</Button>
                        <Button  onClick={self.onEditItem.bind(null,item.id,item['attribute_name'])} bsStyle='info' style={{marginLeft:'5',background:'#428bca',borderColor:'#428bca'}}>编辑</Button>
                        <Button  onClick={self.onRemoveItem.bind(null,item.id)} bsStyle='danger' style={{marginLeft:'5'}}>删除</Button>
                        <span style={{marginLeft:'30'}}>前台列表页展示: </span>
                        <Input type='checkbox'  checked={item.sku_display} style={{marginLeft:'10'}} onChange={self.handleChange.bind(null,item)} />
                    </div>
                </div>
            )
        });
        return (
            <div className="sku_list" style={{marginTop: 30}}>
               {lists}
            </div>
        )
    }
});

var Attr = React.createClass({
        getInitialState: function () {
            return {
                data:[]
            }
        },
        attrSelect: function(e){

            var index = $(e.target).data("index"),
                attributeId = $(e.target).data("attributeid"),
                id = $(e.target).data("id");

            this.props.trigger("UpdateAttrSelect", index,attributeId,id);

        },
        onCreateSku: function(){
            this.props.trigger("CreateSku");
        },
        onAddSkuAttr: function(id){
            this.props.trigger("AddSkuAttr",id);
        },
        componentDidMount: function(){

        },
        render: function () {
            var self = this;
            var classes = React.addons.classSet({
                'pt20': true
            });
            var attrDefaultListGroup = this.props.data.skuAttrList.map(function(skuAttr,i){
                var activeItems = self.props.data.skuAttrListSelected[i];
                var attrDefaultList = skuAttr.value.map(function(item){
                    var bsStyle = 'info';
                    if(item.id == activeItems[1]){
                        bsStyle = 'warning';
                    }

                    var removeAttrNode = function(){
                        var yes = false;
                        self.props.data.addedSkuAttr.map(function(id){
                            if(item.id == id){
                                yes = true;
                            }
                        });
                        if(yes){
                            return (
                                <a onClick={self.props.trigger.bind(null,"RemoveSkuAttr",item.id)} className="removeAttrA" href="#">x</a>
                            )
                        }else{
                            return '';
                        }

                    } ;
                    return (
                        <div key={item.id} style={{display:"inline-block"}}>
                        <Button data-index={i} data-attributeid={item['attribute_id']} data-id={item.id} bsStyle={bsStyle} onClick={self.attrSelect}>{item.attribute_value}</Button>
                        {removeAttrNode()}
                        </div>
                    )
                });
                return (
                    <div key={skuAttr.id} className="skuList_item">
                        <FormGroup>
                            <Label control sm={2} >{skuAttr.name}</Label>
                            <Col sm={10}>
                                {attrDefaultList} <Button onClick={self.onAddSkuAttr.bind(null,skuAttr.id)}>添加</Button>
                            </Col>
                        </FormGroup>
                    </div>
                )
            });
            var attrEditPageEl = (function(){
                if(self.props.activeSku){
                    return (
                        <AttrEditPage goodsTag={self.props.goodsTag} couponData ={self.props.couponData} trigger={self.props.trigger} skuList={self.props.data.skuList.skuList} goodId={self.props.data.id} activeSku={self.props.activeSku} activeSkuName={self.props.activeSkuName} data={self.props.activeSkuData} activeSkuSpecification={self.props.activeSkuSpecification}></AttrEditPage>
                    )
                }else{
                    return (
                        <Col sm={8}>
                            <Alert warning dismissible collapseBottom>
                                {" 请添加或者选择一组sku进行编辑."}
                            </Alert>
                        </Col>
                    )
                }

            })();
            return (
                <div className={classes}>
                    <Row className="mt20">
                        <Col sm={4}>
                            <h4>商品属性</h4>
                            <div className="skuList mt20">
                                {attrDefaultListGroup}
                                <Button bsStyle='pink' onClick={this.onCreateSku} block onlyOnHover>生成SKU</Button>
                            </div>
                            <AttrList trigger={self.props.trigger} activeSku={this.props.activeSku} data={this.props.data.skuList} ></AttrList>
                        </Col>
                        {attrEditPageEl}
                    </Row>
                </div>
            )
        }
    });

module.exports = Attr;
