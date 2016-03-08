/** @jsx React.DOM */
var CategorySelector = require('../../widgets/categorySelector/categorySelector.jsx');
var events = require('../../widgets/Goods/events.jsx');

var liteFlux = require('lite-flux');
var goodListStore = require('../../modules/stores/goods/list.jsx');
var goodListAction = require('../../modules/actions/goods/list.jsx');
var goodSkuListStore = require('../../modules/stores/goods/goodsSpuListStore.jsx');
/**
 * 搜索框
 */
var SearchSku = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    componentDidMount: function(){

    },
    onSearch: function(e){
        var data = {
            page:1,
            size:10
        };

        if(this.props.source.keywords["category_id"])
            data.category_id = this.props.source.keywords["category_id"];

        if(this.props.source["status"]!=-1)
            data.status = this.props.source.keywords["status"];

        if(this.props.source.keywords["title"].trim()!="")
            data.title = this.props.source.keywords["title"];
        if(this.props.source.keywords["collocation_status"]!=-1)
            data.has_collocations = this.props.source.keywords["collocation_status"];

        goodListStore.setStore({
            isSearch: true
        });

        goodListAction.loadList(data);

    },
    changeSearchCategory: function(categroy){
        var keywords = this.props.source.keywords;
        keywords.category_id = categroy.id;
        goodListStore.setStore(keywords);
    },
    changeSearchWord: function(e){
        var val = e.target.value;
        var keywords = this.props.source.keywords;
        keywords.title = val;
        goodListStore.setStore(keywords);
    },
    onChangeStatus: function(e){
        var val = e.target.value;
        var keywords = this.props.source.keywords;
        keywords.collocation_status = val;
        goodListStore.setStore(keywords);
    },
    render: function(){
        return (
            <div>
                <Row>

                    <Label control sm={2} style={{textAlign:"right",paddingRight:'0',marginLeft:'-30'}}>商品分类:</Label>
                    <Col sm={8} className="mb15 pr0">

                        <CategorySelector callback = {this.changeSearchCategory} ></CategorySelector>

                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Label control sm={3} style={{textAlign:"right",paddingRight:'0'}}>关键字:</Label>
                        <Col sm={9} className="mb15">
                            <Input id='_this_goods_title' onChange={this.changeSearchWord} type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                        </Col>
                    </Col>
                    <Col xs={6}>
                        <Label control sm={4} className='right_padding'>是否已有搭配:</Label>
                        <Col sm={8} className="mb15">
                            <Select id='_this_status'  onChange={this.onChangeStatus} className="wa fl mr0">
                                <option value="-1">全部</option>
                                <option value="0">否</option>
                                <option value="1">是</option>
                            </Select>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={7}></Col>
                    <Col xs={5}>
                        <Col sm={3}>

                        </Col>
                        <Col sm={9} className="mb15">
                            <Button sm bsStyle='blue' onClick={this.onSearch}>查询</Button>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
});


/*list*/
var AllList = React.createClass({
    mixins: [Sp.eventMixin,liteFlux.mixins.storeMixin('goodList')],
    events: events,
    getInitialState: function(){
        return {
            selectedNode: this.props.selectedArr
        }
    },
    componentDidMount: function () {

    },
    /*选择商品*/
    handleClick: function(data){

        var _this = this;
        var log = false;
        var select_goods = _this.state.selectedNode;

        select_goods.forEach(function(item,key){
            if(item.id==data.id){
                log = true;
            }else{
                log = false;
            }
        });

        if(log){
            Sp.message('亲,该商品已经选择了');
            return false;
        }
        var itemArr = [];

        itemArr.push(data);
        _this.setState({
            selectedNode: itemArr
        });
        _this.props.callback(itemArr);
        Sp.message('选择成功');

    },

    skuNode: function(this_arr){

        var _this = this;
        var this_node = this_arr.map(function(item,key){

            var url = '';

            item.primary_goods_sku = item.primary_goods_sku || {}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover || {}, item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
            item.goods_category = item.goods_category||{}, item.goods_category.category = item.goods_category.category || {};

            var imgNode = '';
            if(item.primary_goods_sku.has_cover.media.full_path){
                url = item.primary_goods_sku.has_cover.media.full_path+'?imageView2/1/w/100';
                imgNode = (
                    <img src={url} alt="" height='100'/>
                )
            }

            return (
                <tr key={key} onClick={_this.handleClick.bind(null,item)} style={{cursor:'pointer'}}>
                    <td colSpan="8">
                        <table width="100%">
                            <tr>
                                <td className='text_center'>
                                    <Col xs={5}>
                                        {imgNode}
                                    </Col>
                                    <Col xs={7} className='text_left'>
                                        <p style={{marginBottom:'5'}}>{item.title}</p>
                                        <p style={{marginBottom:'5'}}>{item.goods_category.category.name}</p>
                                    </Col>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            )
        });

        return this_node;
    },

    render: function () {
        var _this = this;
        var sku_list = this.props.sku_list;

        /*待选*/
        var $node = this.skuNode(sku_list);

        /*已选*/
        var selectedNode = _this.state.selectedNode;
        var this_select = {} , this_arr = [];
        sku_list.forEach(function(item,key){

            item.primary_goods_sku = item.primary_goods_sku || {}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover || {};
            item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
            item.goods_category = item.goods_category||{}, item.goods_category.category = item.goods_category.category || {};

            if(item.id==selectedNode[0].id){
                this_select = {
                    id:selectedNode[0].id,
                    title: item.title,
                    goods_category: {
                        category:{
                            name: item.goods_category.category.name
                        }
                    },
                    primary_goods_sku:{
                        has_cover: {
                            media: {
                                full_path: item.primary_goods_sku.has_cover.media.full_path
                            }
                        }
                    }
                }
            }
        });
        this_arr.push(this_select);
        selectedNode = this_arr;
        console.log(selectedNode,'22222');
        var $selectNode = this.skuNode(selectedNode);

        // 页码
        var pager = (
            <Pager>
                <Page previous href='#' onClick={this.trigger.bind(null,"PrevPage")}>Previous</Page>{' '}
                <Page next href='#' onClick={this.trigger.bind(null,"NextPage")}>Next</Page>
            </Pager>
        );
        return (
            <Row className="">
                <Col xs={6}>
                    <Table striped>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th className='text_center'>待选择</th>
                        </tr>
                        </thead>
                        <tbody style={{background:'#fff'}}>
                        {$node}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td className='text_center'>
                                {pager}
                            </td>
                        </tr>
                        </tfoot>
                    </Table>
                </Col>
                <Col xs={6}>
                    <Table striped>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th className='text_center'>已选择</th>
                        </tr>
                        </thead>
                        <tbody style={{background:'#fff'}}>
                        {$selectNode}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
});


var SkuList = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodList','goodsSkuList'),React.addons.LinkedStateMixin],
    getInitialState: function () {
        return {
            selectGoodsNode:[]
        }
    },
    getDefaultProps: function(){
        return {
            callback: function(a){
                console.log(a);
            }
        }
    },
    componentDidMount: function () {
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id = this.props.id || 0;
        keywords.title = '';
        goodListStore.setStore(keywords,function(){
            var data = {
                size: 10,
                page: 1
            };
            data.category_id = self.state.goodList.keywords.category_id;
            data.title=self.state.goodList.keywords.title;
            goodListAction.loadList(data);
        });
    },
    componentWillReceiveProps: function (props) {

    },
    cancel: function(){
        var self = this;
        this.props.callbackCancel(false);
        var keywords = this.state.goodList.keywords;
        keywords.category_id =  0;
        goodListStore.setStore(keywords,function(){
            var request_data = {
                size: 10,
                page: 1
            };
            request_data.category_id = self.state.goodList.keywords.category_id;
            goodListAction.loadList(request_data);
        });
    },
    getSelectNode: function(data) {
        this.setState({
            selectGoodsNode: data
        })
    }
    ,
    finishChoice: function(){
        this.props.callbackCancel(false);
        var selectGoodsNode = this.state.selectGoodsNode;
        this.props.finishCallback(selectGoodsNode);
    },
    render: function () {
        var _this = this;
        var source = this.state.goodList || {};

        var list = source.data || []; /*商品列表数据*/
        return (
            <div className='mask_style'>
                <div className='_this_relative'>
                    <div className="show-goods-information">
                        <SearchSku source={source}></SearchSku>
                        <hr/>
                        <AllList sku_list={list} selectedArr={this.props.selectedArr} callback={this.getSelectNode}></AllList>
                    </div>
                    <Row>
                        <Col xs={7}>

                        </Col>
                        <Col xs={5} style={{position: 'absolute',top:'70%',right:'8%',zIndex:'10'}}>
                            <Button sm bsStyle='blue' style={{marginRight:'15'}} onClick={this.finishChoice}>完成选择</Button>
                            <Button sm bsStyle='blue' onClick={this.cancel}>取 消</Button>
                        </Col>
                        <div className="close-goods-icon" onClick={_this.cancel}>关闭</div>
                    </Row>
                </div>
            </div>
        );
    }
});

module.exports = SkuList;