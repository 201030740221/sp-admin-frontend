/** @jsx React.DOM */
var liteFlux = require('lite-flux');

var CategorySelector = require('../../widgets/categorySelector/categorySelector.jsx');
var GoodStore = require('../../modules/stores/goods/getGoodsSkuStore.jsx');


/**
 * 搜索框
 */
window.category_id = 0;
var SearchBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsSkuStore')],
    getInitialState: function(){
        return {

        }
    },
    componentDidMount: function(){

    },
    changeSearchCategory: function(categroy){
        category_id = categroy.id
    },
    search: function(){
        var _this = this;
        var request_data = {
            'size': 5,
            'page': 1
        };
        var sku_sn = $('#_this_sku').val();
        if(sku_sn){
            request_data.sku_sn = sku_sn;
        }
        if(category_id)
            request_data.category_id = category_id;
        /*商品sku列表*/
        liteFlux.action("goodsSkuStore").getGoodsSkuList(request_data,function(data){
           _this.props.callbackSearch(data);
        });
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
                        <Label control sm={3} className='right_padding'>商品编码:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <Input id='_this_sku' type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                        </Col>
                    </Col>
                    <Col xs={6} style={{marginLeft:'-122'}}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={8}></Col>
                    <Col xs={4}>
                        <Col sm={3}>

                        </Col>
                        <Col sm={9} className="mb15">
                            <Button sm bsStyle='blue' onClick={this.search}>查询</Button>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
});


/*list*/
var AllList = React.createClass({
    /*选择商品*/
    handleClick: function(data){
        var select_arr = [];
        select_arr.push(data);
        this.props.callBackSelect(select_arr);
    },
    handlePage: function(page){
        var _this = this;
        var request_data = {
            'size': 5,
            'page': page
        };
        if($('#_this_sku').val())
            request_data.sku_sn = $('#_this_sku').val();
        if(category_id)
            request_data.category_id = category_id;
        liteFlux.action("goodsSkuStore").getGoodsSkuList(request_data,function(data){
            _this.props.callbackSearch(data);
        });
    },
    prevHandle: function(source){
        if(source.current_page==1){
            Sp.message("已经是第一页了");
            return false;
        }
        var page = source.current_page-1;
        this.handlePage(page);
    },
    nextHandle: function(source){
        if(source.current_page==source.last_page){
            Sp.message("已经是最后一页了");
            return false;
        }
        var page = source.current_page+1;
        this.handlePage(page);
    },
    render: function () {
        var _this = this;
        var source = this.props.source,
            data_list = source.data || [];

        /*待选*/
        var $node = data_list.map(function(item){
            item.attribute_name = item.attribute_name || ' , ';
            var item_arr = item.attribute_name.split(',');
            var attr_str = '' , color_str = '';
            for(var key in item_arr){
                if(item_arr[key].indexOf('规格')){
                    attr_str = item_arr[key];
                }
                else if(item_arr[key].indexOf('颜色')){
                    color_str = item_arr[key];
                }
            }
            var url = '';
            if(item.full_path){
                url = item.full_path+'?imageView2/1/w/100';
            }
            return (
                <tr key={item.sku_id} onClick={_this.handleClick.bind(null,item)} style={{cursor:'pointer'}}>
                    <td colSpan="8">
                        <table width="100%">
                            <tr>
                                <td className='text_center'>
                                    <Col xs={5}>
                                        <img src={url} alt="" width='100'/>
                                    </Col>
                                    <Col xs={7} className='text_left'>
                                        <p style={{marginBottom:'5'}}>商品名称: {item.title}</p>
                                        <p style={{marginBottom:'5'}}>商品编号: {item.sku_sn}</p>
                                        <p style={{marginBottom:'5'}}>规格: {color_str.split('-')[1]}</p>
                                        <p style={{marginBottom:'5'}}>颜色: {attr_str.split('-')[1]}</p>
                                    </Col>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            )
        });

        var has_source_list = this.props.has_source_list;
        /*已选*/
        var $selectNode = has_source_list.map(function(item,key){
            var item_arr = item.attribute_name.split(',');
            var attr_str = '' , color_str = '';
            for(var key in item_arr){
                if(item_arr[key].indexOf('规格')){
                    attr_str = item_arr[key];
                }
                else if(item_arr[key].indexOf('颜色')){
                    color_str = item_arr[key];
                }
            }
            var url = '';
            if(item.full_path){
                url = item.full_path+'?imageView2/1/w/100';
            }
            return (
                <tr key={item.sku_id}>
                    <td colSpan="8">
                        <table width="100%">
                            <tr>
                                <td className='text_center'>
                                    <Col xs={5}>
                                        <img src={url} alt="" height='100'/>
                                    </Col>
                                    <Col xs={7} className='text_left'>
                                        <p style={{marginBottom:'5'}}>商品名称: {item.title}</p>
                                        <p style={{marginBottom:'5'}}>商品编号: {item.sku_sn}</p>
                                        <p style={{marginBottom:'5'}}>规格: {color_str.split('-')[1]}</p>
                                        <p style={{marginBottom:'5'}}>颜色: {attr_str.split('-')[1]}</p>
                                    </Col>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            )
        });
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
                                <Col xs={6}><Page onClick={_this.prevHandle.bind(null,source)}>上一页</Page></Col>
                                <Col xs={6}><Page onClick={_this.nextHandle.bind(null,source)}>下一页</Page></Col>
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
                        <tbody>
                        {$selectNode}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
});


var GoodsSkuList = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsSkuStore')],
    getInitialState: function () {
        return {
            source: {},
            has_source_list: []
        }
    },
    componentDidMount: function(){
        var _this = this;
        var request_data = {
            'size': 5,
            'page': 1
        };
        delete request_data.category_id
        /*商品sku列表*/
        liteFlux.action("goodsSkuStore").getGoodsSkuList(request_data,function(data){
            _this.setState({
                source: data
            })
        });

        /*已有sku*/
        var sku_sn = this.props.sku_sn;
        if(typeof(sku_sn)=='undefined'){
            return false;
        }
        request_data.sku_sn = this.props.sku_sn;
        liteFlux.action("goodsSkuStore").getGoodsSkuList(request_data,function(data){
            _this.setState({
                has_source_list: data.data
            })
        });

    },
    getSelectData: function(data){
        this.setState({
            has_source_list: data
        })
    },
    finishChoice: function(){
        this.props.callbackFinishSelect(this.state.has_source_list);
        category_id = 0;
    },
    cancel: function(){
        this.props.callbackCancel();
        category_id = 0;
    },
    getSearchList: function(data){
        this.setState({
            source: data
        })
    },
    render: function () {
        var source = this.state.source,
            has_source_list = this.state.has_source_list;
        return (
            <div className='mask_style'>
                <div className='_this_relative'>
                    <div className="show-goods-information">
                        <SearchBar callbackSearch = {this.getSearchList}></SearchBar>
                        <hr/>
                        <AllList source = {source} has_source_list = {has_source_list} callBackSelect={this.getSelectData} callbackSearch = {this.getSearchList}></AllList>
                        <hr/>
                    </div>
                    <Row>
                        <Col xs={7}>

                        </Col>
                        <Col xs={5} style={{position: 'absolute',top:'70%',right:'8%',zIndex:'10'}}>
                            <Button sm bsStyle='blue' style={{marginRight:'15'}} onClick={this.finishChoice}>完成选择</Button>
                            <Button sm bsStyle='blue' onClick={this.cancel}>取 消</Button>
                        </Col>
                        <div className="close-goods-icon" onClick={this.cancel}>关闭</div>
                    </Row>
                </div>
            </div>
        )
    }
});

module.exports = GoodsSkuList;