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
                        <Label control sm={3} className='right_padding'>是否已有搭配:</Label>
                        <Col sm={9} className="mb15">
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
        var select_goods = _this.state.selectedNode || [];
        var log = false;
        if(select_goods.length>=5){
            Sp.message('亲,选择搭配的商品不能超过5件哦');
            return false;
        }
        if(data.goods_type==1){
            Sp.message('亲,积分商品不能参与搭配哦');
            return false;
        }
        else{
            for(var key in select_goods){
                if(select_goods[key].id==data.id) {
                    Sp.message('亲,该商品已经选择了');
                    return false;
                }else{
                    var itemNode = data;
                }
            }
            select_goods.push(itemNode);
            _this.setState({
                selectedNode: select_goods
            });
            _this.props.callback(select_goods);
            Sp.message('选择成功');
        }
    },
    deleteHandle: function(goods_id){
        var _this = this;
        var select_goods = _this.state.selectedNode;

        select_goods.forEach(function(item,key){
            if(goods_id==item.id){
                select_goods.splice(key,1);
                _this.setState({
                    selectedNode: select_goods
                });
            }
        });
    },

    skuNode: function(this_arr){

        var _this = this;
        var this_node = this_arr.map(function(item,key){

            var url = '';

            item.primary_goods_sku = item.primary_goods_sku || {}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover || {}, item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
            item.goods_category = item.goods_category||{}, item.goods_category.category = item.goods_category.category || {};

            if(item.primary_goods_sku.has_cover.media.full_path){
                url = item.primary_goods_sku.has_cover.media.full_path+'?imageView2/1/w/100';
            }

            return (
                <tr key={key} onClick={_this.handleClick.bind(null,item)} style={{cursor:'pointer'}}>
                    <td colSpan="8">
                        <table width="100%">
                            <tr>
                                <td className='text_center'>
                                    <Col xs={5}>
                                        <img src={url} alt="" height='100'/>
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
        /*<BLabel  className='label-danger collocation_handle' bsStyle='info' onClick={_this.deleteHandle.bind(null,item.goods_id)} style={{top:'70'}}>{delete_desc}</BLabel>*/
        var selectedNode = _this.state.selectedNode;
        console.log(selectedNode);
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
        this.props.callback(false);
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id =  0;
        goodListStore.setStore(keywords,function(){
            var request_data = {
                size: 1000000,
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
        this.props.callback(false);
        var selectGoodsNode = this.state.selectGoodsNode;
        this.props.finishCallback(selectGoodsNode);
        var ids = '';
        for(var key in selectGoodsNode){
            ids+= selectGoodsNode[key].id+',';
        }
        var request_data = {
            goods_ids: ids
        };
        var _this = this;
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
            _this.props.skuListCallBack(data);
        });
    },
    render: function () {
        var _this = this;
        var source = this.state.goodList;

        var list = source.data || []; /*商品列表数据*/
        return (
            <div className='mask_style'>
                <div className="show-goods-information">
                    <SearchSku source={source}></SearchSku>
                    <hr/>
                    <AllList sku_list={list} selectedArr={_this.props.selectedArr} callback={_this.getSelectNode}></AllList>
                    <Row>
                        <Col xs={7}>

                        </Col>
                        <Col xs={5}>
                            <Button sm bsStyle='blue' style={{marginRight:'15'}} onClick={_this.finishChoice}>完成选择</Button>
                            <Button sm bsStyle='blue' onClick={_this.cancel}>取 消</Button>
                        </Col>
                    </Row>
                    <div className="close-goods-icon" onClick={_this.cancel}>关闭</div>
                </div>
            </div>
        );
    }
});

module.exports = SkuList;