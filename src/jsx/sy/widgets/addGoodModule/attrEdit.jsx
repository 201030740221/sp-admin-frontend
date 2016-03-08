/** @jsx React.DOM */
var Ueditor = require('../../widgets/ueditor/ueditor.jsx');
var SkuImgUpload = require('../../widgets/imgUpload/skuImgUpload.jsx');
var Specification = require('../../widgets/addGoodModule/specification.jsx');
var TemplateBox = require('../../widgets/goodsDetail/goodsDetail.jsx');
var goodsTagsStore = require('../../modules/stores/goods/goodsTagsStore.jsx');
var couponStore = require('../../modules/stores/promotion/coupon/listStore.jsx');

var liteFlux = require('lite-flux');
var Api = require('../../widgets/api/api.jsx');

var AttrEdit = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsTag','couponStore')],
    turnJson: function(source){
        var json = {};
        for(var key in source){
            var _this_key = 'tag';
            json[_this_key] = source[key];
        }
        json.tag = json.tag || {};
        JSON.stringify(json);
        return json;
    },
    getInitialState: function () {
        var baseSku = this.props.data.baseSku,
            tags = baseSku.tags || [];
        var json = this.turnJson(tags);
        return{
            tag: json.tag,
            couponData: this.props.couponData
        }
    },

    componentDidMount: function () {

    },
    componentWillReceiveProps: function(props) {

    },

    editorNode: '',
    templateContent: '',
    onGetTemplate: function (html) {
        this.templateContent = html;
    },
    onSaveSkuData: function () {
        var self = this;
        if(self.props.data.baseSku.goods_type==2){
            if($('#couponId').val()=='-1'){
                alert("请选择优惠券");
                return false;
            }
            if(!$.isNumeric(this.refs['basic_price'].getInputDOMNode().value)){
                alert("价格必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['price'].getInputDOMNode().value)){
                alert("优惠价必须为数字");
                return false;
            }
        }else{
            if(!$.isNumeric(this.refs['dimension'].getInputDOMNode().value)){
                alert("体积必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['weight'].getInputDOMNode().value)){
                alert("重量必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['pieces'].getInputDOMNode().value)){
                alert("数量必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['basic_price'].getInputDOMNode().value)){
                alert("价格必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['price'].getInputDOMNode().value)){
                alert("优惠价必须为数字");
                return false;
            }

            if(!$.isNumeric(this.refs['installation'].getInputDOMNode().value)){
                alert("安装费必须为数字");
                return false;
            }
        }


        var store = flux.store("goodsDetailStore").getState();
        if(self.props.data.baseSku.goods_type==2){
            var data = {
                goodsSku: {
                    id: this.props.activeSku,
                    goods_id: this.props.goodId,
                    coupon_task_id: +($('#couponId').val())
                },
                price: {
                    basic_price: this.refs['basic_price'].getInputDOMNode().value || 0,
                    price: this.refs['price'].getInputDOMNode().value || 0,
                },
                detail: {
                    template_id: store.tplId,
                    mobile_template_id: store.mobileTplId,
                    detail_data: JSON.stringify(store.goodsDetailData)
                },
                seo: {
                    title: this.refs['seo_title'].getInputDOMNode().value || '',
                    keywords: this.refs['seo_keywords'].getInputDOMNode().value || '',
                    description: this.refs['seo_description'].getInputDOMNode().value || ''
                },
                value: {}
            };

        }else{
            var data = {
                goodsSku: {
                    id: this.props.activeSku,
                    goods_id: this.props.goodId,
                },
                unit: {
                    dimension: this.refs['dimension'].getInputDOMNode().value || 0,
                    weight: this.refs['weight'].getInputDOMNode().value || 0,
                    pieces: this.refs['pieces'].getInputDOMNode().value || 0
                },
                price: {
                    basic_price: this.refs['basic_price'].getInputDOMNode().value || 0,
                    price: this.refs['price'].getInputDOMNode().value || 0,
                    basic_installation: this.refs['installation'].getInputDOMNode().value || 0
                },
                detail: {
                    template_id: store.tplId,
                    mobile_template_id: store.mobileTplId,
                    detail_data: JSON.stringify(store.goodsDetailData)
                },
                seo: {
                    title: this.refs['seo_title'].getInputDOMNode().value || '',
                    keywords: this.refs['seo_keywords'].getInputDOMNode().value || '',
                    description: this.refs['seo_description'].getInputDOMNode().value || ''
                },
                value: {}
            };
        }


        var specification = [];

        $(".specification_item").each(function () {
            var val = $(this).val(),
                id = $(this).data("id");
            console.log($(this),id);
            specification.push([id,val]);
        });

        data.value = specification;

        this.props.trigger("SaveSkuData", data);

    },
    // 更新关联优惠券
    onUpdateCouponRelation: function (e) {
        var couponId = e.target.value;
        this.props.trigger("UpdateCouponRelation", couponId);
    },
    // 同步规格信息
    syncSpecification: function (e) {
        var skuid = e.target.value;
        this.props.trigger("SyncSkuData", skuid);
    },
    // 更新价格
    onUpdateBasicPrice: function () {
        var price = this.refs['basic_price'].getInputDOMNode().value;
        this.props.trigger("UpdateBasicPrice", price);
    },
    // 更新优惠价格
    onUpdatePrice: function () {
        var price = this.refs['price'].getInputDOMNode().value;
        this.props.trigger("UpdatePrice", price);
    },
    // 更新重量
    onUpdateWeight: function(){
        var weight = this.refs['weight'].getInputDOMNode().value;
        this.props.trigger("UpdateWeight", weight);
    },
    // 更新体积
    onUpdateDimension: function(){
        var dimension = this.refs['dimension'].getInputDOMNode().value;
        this.props.trigger("UpdateDimension", dimension);
    },
    // 更新数量
    onUpdatePieces: function(){
        var pieces = this.refs['pieces'].getInputDOMNode().value;
        this.props.trigger("UpdatePieces", pieces);
    },
    // 更新安装费
    onUpdateInstallation: function(){
        var installation = this.refs['installation'].getInputDOMNode().value;
        this.props.trigger("UpdateInstallation", installation);
    },

    /*更新SEO信息*/
    onUpdateSeoTitle: function(e){
        var seoTitle = e.target.value;
        this.props.trigger("UpdateSeoTitle", seoTitle);
    },
    onUpdateSeoKeywords: function(e){
        var seoKeywords = e.target.value;
        this.props.trigger("UpdateSeoKeywords", seoKeywords);
    },
    onUpdateSeoDescription: function(e){
        var seoDescription = e.target.value;
        this.props.trigger("UpdateSeoDescription", seoDescription);
    },

    // 预览
    onPreview: function(e){
        e.preventDefault();
        e.stopPropagation();
        RRouter.routing.navigate('/app/good/preview/'+this.props.data.baseSku['sku_sn']);
    },

    onChangeStatus: function(e){
        var self = this;
        var tag = this.state.tag;
        var value = e.target.value;
        tag.tag_id = value;
        self.setState({
            tag: tag
        });
        var request_date = {
            goods_sku_id: self.props.activeSku,
            goods_sku_tag: [
                {
                    id: tag.id || '',
                    tag_id: value,
                    sort_id: tag.sort_id || ''
                }
            ]
        };
        liteFlux.action("goodsTag").updateGoodsTag(request_date);
    },

    /*SEO信息*/
    seoInfoNode: function(){

        var self = this;

        return (
            <div>
                <FormGroup>
                    <Label control sm={3} >
                        <BLabel bsStyle='primary'>SEO信息：</BLabel>{' '}</Label>
                    <Col sm={9}>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >标题</Label>
                    <Col sm={9}>
                        <Input type='text' ref="seo_title" onChange={self.onUpdateSeoTitle} value={self.props.data.baseSku.title} className='inline' placeholder='请输入SEO标题' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >关键字</Label>
                    <Col sm={9}>
                        <Input type='text' ref="seo_keywords" onChange={self.onUpdateSeoKeywords} value={self.props.data.baseSku.keywords} className='inline' placeholder='请输入SEO关键字' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >描述</Label>
                    <Col sm={9}>
                        <Textarea ref="seo_description" onChange={self.onUpdateSeoDescription} value={self.props.data.baseSku.description} className='inline' placeholder='请输入SEO描述'></Textarea>
                    </Col>
                </FormGroup>
            </div>
        )
    },

    render: function () {
        var self = this;

        var store = flux.store("goodsDetailStore").getState();

        var tpl_data = {};
        console.log("sku",self.props.activeSku);
        if(store.tplId && store.goodsSkuId == self.props.activeSku){
            tpl_data = {
                sku_id : self.props.activeSku,
                template_id: store.tplId,
                mobile_template_id: store.mobileTplId,
                detail_data: JSON.stringify(store.goodsDetailData)
            };
        }else{
            tpl_data = {
                sku_id : self.props.activeSku,
                template_id: this.props.data.baseSku.template_id,
                mobile_template_id: this.props.data.baseSku.mobile_template_id,
                detail_data: this.props.data.baseSku.detail_data
            };
        }

        if (!this.editorNode.length) {
            //this.editorNode = (function () {
            //    return (
            //        <Ueditor opts={{
            //            entity: 'goods_sku',
            //            entity_id: self.props.activeSku, // SKU ID
            //            type_id: 3
            //        }} callback={self.onGetTemplate} >{self.props.data.baseSku.content}</Ueditor>
            //    )
            //})();
            this.editorNode = (function () {
                return (
                    <TemplateBox data={tpl_data} />
                )
            })();
        }

        var syncSkuOptions = self.props.skuList.map(function (item) {
            return (
                <option key={item.id} value={item.id}>{item.attribute_name}</option>
            )
        });

        var source = this.props.goodsTag || {};
        var data_list = source.data || [];
        /*优惠券列表*/
        var couponData = this.state.couponData;
        var couponList = couponData.data || [];

        var installNode = (
            <FormGroup>
                <Label control sm={3} >安装费</Label>
                <Col sm={9}>
                    <Input type='text' ref="installation" onChange={self.onUpdateInstallation} value={self.props.data.baseSku.installation} className='inline' placeholder='请输入商品安装费' />
                </Col>
            </FormGroup>
        );
        var doneInfoNode = (
            <div>
                <FormGroup>
                    <Label control sm={3} >
                        <BLabel bsStyle='primary'>包装信息：</BLabel>{' '}</Label>
                    <Col sm={9}>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >重量</Label>
                    <Col sm={9}>
                        <Input type='text' ref="weight" onChange={self.onUpdateWeight} value={self.props.data.baseSku.weight} className='inline' placeholder='请输入商品重量' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >体积</Label>
                    <Col sm={9}>
                        <Input type='text' ref="dimension" onChange={self.onUpdateDimension} value={self.props.data.baseSku.dimension} className='inline' placeholder='请输入商品体积' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >件数</Label>
                    <Col sm={9}>
                        <Input type='text' ref="pieces" onChange={self.onUpdatePieces} value={self.props.data.baseSku.pieces} className='inline' placeholder='请输入商品件数' />
                    </Col>
                </FormGroup>
            </div>
        );
        var couponNode = '';
        if(self.props.data.baseSku.goods_type==2){
            installNode = '';
            doneInfoNode = '';
            couponNode = (
                <FormGroup>
                    <Label control sm={3} >
                        <BLabel bsStyle='primary'>关联优惠券：</BLabel>{' '}</Label>
                    <Col sm={9}>
                        <Select id='couponId' value={self.props.data.baseSku.coupon_task_id} className='inline' onChange={this.onUpdateCouponRelation}>
                            <option value='-1'>请选择优惠券</option>
                            {
                                couponList.map(function(item,key){
                                    return (
                                        <option value={item.id} key={key}>{item.name}</option>
                                    )
                                })
                            }
                        </Select>
                    </Col>
                </FormGroup>
            )
        }

        return (
            <Col sm={8}>
                <Alert info style={{textAlign: "center"}}>
                    <Button style={{marginRight: 15}} bsStyle='primary' onClick={this.onPreview}>预览</Button> <Button style={{marginRight: 15}} bsStyle='primary' onClick={this.onSaveSkuData}>保存SKU</Button>{"正在编辑: " + self.props.activeSkuName}
                </Alert>
                {couponNode}
                <FormGroup>
                    <Label control sm={3} >
                        <BLabel bsStyle='primary'>价格信息：</BLabel>{' '}</Label>
                    <Col sm={9}>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >价格</Label>
                    <Col sm={9}>
                        <Input type='text' ref="basic_price" onChange={self.onUpdateBasicPrice} value={self.props.data.baseSku.basic_price} className='inline' placeholder='请输入商品价格' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >优惠价</Label>
                    <Col sm={9}>
                        <Input type='text' ref="price" onChange={self.onUpdatePrice} value={self.props.data.baseSku.price} className='inline' placeholder='请输入商品优惠价格' />
                    </Col>
                </FormGroup>
                {installNode}
                {doneInfoNode}
                <FormGroup>
                    <Label control sm={3} >
                        <BLabel bsStyle='primary'>商品相关规格属性：</BLabel>{' '}</Label>
                    <Col sm={9}>
                        <Select className='inline' onChange={this.syncSpecification}>
                            <option value="0">不同步SKU</option>
                            {syncSkuOptions}
                        </Select>
                    </Col>
                </FormGroup>
                <Specification trigger={self.props.trigger} data={self.props.data.specification}  activeSkuSpecification={self.props.activeSkuSpecification} templateType={0}></Specification>
                <FormGroup>
                    <Label control sm={3} >封面图片</Label>
                    <Col sm={9}>
                        <SkuImgUpload opts={{
                            fileNumLimit: 1,
                            formData: {
                                entity: 'goods_sku',
                                entity_id: self.props.activeSku,//skuID
                                type_id: 0
                            }
                        }}>封面图片管理</SkuImgUpload>
                        <span style={{marginLeft:'10'}}></span>
                        <SkuImgUpload opts={{
                            fileNumLimit: 1,
                            formData: {
                                entity: 'goods_sku',
                                entity_id: self.props.activeSku,//skuID
                                type_id: 4
                            }
                        }}>封面场景图管理</SkuImgUpload>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >相册图片</Label>
                    <Col sm={9}>
                        <SkuImgUpload opts={{
                            fileNumLimit: 99,
                            formData: {
                                entity: 'goods_sku',
                                entity_id: self.props.activeSku,//skuID
                                type_id: 1
                            }
                        }}>相册图片管理</SkuImgUpload>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >规格缩略图</Label>
                    <Col sm={9}>
                        <SkuImgUpload opts={{
                            fileNumLimit: 1,
                            formData: {
                                entity: 'goods_sku',
                                entity_id: self.props.activeSku,//skuID
                                type_id: 5
                            }
                        }}>规格缩略图管理</SkuImgUpload>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >商品促销标签</Label>
                    <Col sm={9} style={{width:'176'}}>
                        <Select name='goods_tag' value={self.state.tag.tag_id} onChange={self.onChangeStatus}>
                            {
                                data_list.map(function(item,key){
                                    return(
                                            <option value={item.id} id={item.id} key={item.id}>{item.name}</option>
                                        )
                                })
                            }
                        </Select>
                    </Col>
                </FormGroup>
                {this.seoInfoNode()}
                {this.editorNode}
                <FormGroup className="mt20">
                    <Label control sm={3} ></Label>
                    <Col sm={9} style={{textAlign: "right"}}>
                        <Button lg style={{marginRight: 15}} bsStyle='primary' onClick={this.onSaveSkuData}>保存SKU</Button>
                    </Col>
                </FormGroup>
            </Col>
        );
    }
});

module.exports = AttrEdit;
