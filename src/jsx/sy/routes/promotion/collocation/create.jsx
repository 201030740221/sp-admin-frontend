/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var events = require('../../../widgets/Goods/events.jsx');
var SpuList = require('../../../widgets/goodsSpuList/index.jsx');

var liteFlux = require('lite-flux');

var goodListStore = require('../../../modules/stores/goods/list.jsx');
var goodListAction = require('../../../modules/actions/goods/list.jsx');
var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');
var Store = require('../../../modules/stores/promotion/collocation/collocationStore.jsx');
var createCollocationStore = require('../../../modules/stores/promotion/collocation/createCollocationStore.jsx');

//
var classSet = React.addons.classSet;


/*搭配商品*/
var CollocationGoods = React.createClass({
    deleteHandle: function(key){
        if(key==0){
            Sp.message('该商品为主商品,不能进行操作哦');
        }
        var _this = this;
        var detailArr = _this.props.detailArr;

        detailArr.splice(key,1);
        _this.props.UpOrDownCallBack(detailArr);

        var ids = '';
        for(var key in detailArr){
            ids+= detailArr[key].id+',';
        }
        var request_data = {
            goods_ids: ids
        };
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
    },
    /*交换数组*/
    swapItems : function(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    },

    // 上移
    upRecord : function(arr, $index) {
        this.swapItems(arr, $index, $index - 1);
    },

    // 下移
    downRecord : function(arr, $index) {
        this.swapItems(arr, $index, $index + 1);
    },
    handleUpOrDown: function(key,str){
        var _this = this;
        if(str=='up'){
            _this.upRecord(_this.props.detailArr,key);
            _this.props.UpOrDownCallBack(_this.props.detailArr);
        }
        if(str=='down'){
            _this.downRecord(_this.props.detailArr,key)
            _this.props.UpOrDownCallBack(_this.props.detailArr);
        }
    },
    render: function(){

        var item = this.props.item;
        var url = '';
        item.primary_goods_sku = item.primary_goods_sku || {}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover || {}, item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
        if(item.primary_goods_sku.has_cover.media.full_path){
            url = item.primary_goods_sku.has_cover.media.full_path+'?imageView2/1/w/100';
        }
        var key = this.props.key;
        var detailArr = this.props.detailArr;

        var is_main_goods = '';
        if(key==0){
            is_main_goods= '是';
        }else{
            is_main_goods= '否'
        }
        var _this = this;
        var delete_desc = '删除' , up_str = '上移' , down_str = '下移';
        if(key==0){
            delete_desc = '';
            up_str = '';
            down_str = '';
        }
        if(key==1){
            up_str = '';
        }
        if(key==(detailArr.length-1)){
            down_str = '';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="12%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} width='100' />
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="6%" className='text_center'>{is_main_goods}</td>
                            <td width="14%" className='text_center'>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleUpOrDown.bind(null,_this.props.key,'up')} style={{marginLeft:'15'}}>{up_str}</BLabel>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleUpOrDown.bind(null,_this.props.key,'down')} style={{marginLeft:'15'}}>{down_str}</BLabel>
                                <BLabel bsStyle='info' className='label-danger pointer' onClick={_this.deleteHandle.bind(null,_this.props.key)} style={{marginLeft:'15'}}>{delete_desc}</BLabel>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


/*优惠价组合*/
var CollocationCoupon = React.createClass({
    componentDidMount: function() {
        var key =this.props.key;
        var item = this.props.item;
        $('#sku_coupon_price'+key).val(item.price);
    },
    componentWillReceiveProps: function(props){
        var key =props.key;
        var item = props.item;
        $('#sku_coupon_price'+key).val(item.price);
    },
    render: function(){
        var item = this.props.item;
        var key =this.props.key;
        var url = '';
        if(item.images){
            url = item.images+'?imageView2/1/w/100';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="15%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} width='100' />
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="12%" className='text_center'>{item.attribute_name}</td>
                            <td width="6%" className='text_center'>{item.price}</td>
                            <td width="6%" className='text_center'>
                                <Input id={'sku_coupon_price'+key} type='text' style={{width:'50%',margin:'auto',textAlign:'center'}}/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


window.select_node = [];
var Body = React.createClass({
    mixins: [Sp.eventMixin,React.addons.LinkedStateMixin,liteFlux.mixins.storeMixin('goodList','goodsSkuList','createCollocation')],
    events: events,
    getInitialState: function () {
        return {
            status_node: 0,
            nodeArr: [],
            detailArr: [],
            skuList: [],
            name: '',
            shown: false
        }
    },
    componentDidMount: function () {
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id =  0;
        goodListStore.setStore(keywords,function(){
            var data = {
                size: 100000,
                page: 1
            };
            data.category_id = self.state.goodList.keywords.category_id;
            goodListAction.loadList(data);
        });
        var request_data = {
            goods_ids: this.props.id
        };
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id =  0;
        goodListStore.setStore(keywords,function(){
            var data = {
                size: 100000,
                page: 1
            };
            data.category_id = self.state.goodList.keywords.category_id;
            goodListAction.loadList(data);
        });
        var request_data = {
            goods_ids: props.id
        }
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
    },
    addHandle: function(){
        var _this = this;
        var h_node = _this.state.nodeArr;
        h_node.push({'name':'','goods_quantity':1,'discount':'0.8'});
        _this.setState({
            nodeArr: h_node
        });
    },
    deleteHandle: function(index){
        var _this = this;
        var arr = _this.state.nodeArr;
        arr.splice(index,1);
        _this.setState({
            nodeArr: arr
        })
    },
    createHandle: function(goods_id,select_arr,coupon_arr,sku_list){
        var _this = this;
        var name = $('#_this_name').val();
        var type = $('#_this_type').val();
        if(name.length>20){
            alert('输入的字数不能超过20个');
            return false;
        }


        if(name==''||name==null){
            alert('亲，搭配名称不能为空哦！');
            return false;
        }
        if(select_arr==''||select_arr==[]){
            alert('亲，你还没选择搭配的商品哦！');
            return false;
        }
        if(select_arr.length==1){
            alert('亲，你还没选择搭配的商品，请先添加套装商品');
            return false;
        }
        if(parseInt(type)==0 ||parseInt(type)==null){
            alert('亲，搭配优惠方式要选哦！');
            return false;
        }
        if(parseInt(type)==1){
            if(coupon_arr==''||coupon_arr==[]){
                alert('亲，你还没填写按款满折哦！');
                return false;
            }
        }

        var select_goods = [] , discount_arr = [];
        var goods_collocation_details = {} , goods_collocation_rules = {};
        for(var index in select_arr) {
            goods_collocation_details = {
                'goods_id': select_arr[index].id,
                'default_quantity': 1,
                'sort_id': index,
                'description': '描述'+index
            };
            select_goods.push(goods_collocation_details);
        }

        /*var goods_quantity = 0, discount = 0, goods_sku_id = 0, price = 0;*/
        /*按款满折*/
        if(parseInt(type)==1){
            for(var index in coupon_arr){
                var goods_quantity = $('#quantity-'+index).val();
                var discount = $('#discount-'+index).val();
                if(parseFloat(discount)>10){
                    alert('亲，折扣不能超过10哦');
                    return false;
                }
                if(parseFloat(discount)<0){
                    alert('亲，折扣不能小于0哦');
                    return false;
                }

                var str = (parseFloat(discount)/10)+'',
                    _this_discount = str.substr(0,str.indexOf(".")+3);
                goods_collocation_rules = {
                    'goods_sku_id': 0,
                    'goods_quantity': goods_quantity,
                    'discount': _this_discount,
                    'price': 0
                };
                discount_arr.push(goods_collocation_rules);
            }
        }

        /*优惠组合*/
        if(parseInt(type)==2) {
            for (var index in sku_list) {
                var goods_sku_id = sku_list[index].sku_id;
                var price = $('#sku_coupon_price'+index).val();
                if(parseFloat(price)>parseFloat(sku_list[index].price)){
                    alert('亲，套餐价不能多于原价哦');
                    return false;
                }

                goods_collocation_rules = {
                    'goods_sku_id': goods_sku_id,
                    'goods_quantity': 0,
                    'discount': 0,
                    'price': price!=''?price:0
                };
                discount_arr.push(goods_collocation_rules);
            }
        }

        /*请求数据*/
        var request_data = {
            name: name,
            type: type,
            description: '描述',
            goods_collocation_details: select_goods,
            goods_collocation_rules: discount_arr
        };

        /*创建数据*/
        var create_data = {
            goods_id: this.props.id,
            name: name,
            type: type,
            description: '描述'
        };
        console.log(request_data);
        liteFlux.action("createCollocation").createGoodsCollocation(goods_id,create_data,request_data,function(data){
            if(data){
                RRouter.routing.navigate('/promotion/collocation/handle/'+_this.props.id);
            }else{

            }
        });
    },
    onChangeStatus: function(e){
        var _this = this;
        var val = e.target.value;
        if(val==0){
            _this.setState({
                status_node: 0
            })
        }
        if(val==1){
            _this.setState({
                status_node: 1
            })
        }
        if(val==2){
            _this.setState({
                status_node: 2
            })
        }
    },
    selectSpu: function(){
        var _this = this;
        _this.setState({
            shown: true
        });
    },
    getShown: function(shown){
        var _this = this;
        _this.setState({
            shown: shown
        });
    },
    getSelectedData: function(data){
        this.setState({
            detailArr: data
        })
    },
    changeUpOrDown: function(data){
        this.setState({
            detailArr: data
        });
    },
    getSkuList: function(data){

    },
    checkNumber: function(e){
        var name = $('#_this_name').val();
        if(name.length>20){
            alert('输入的字数不能超过20个');
            return false;
        }
    },
    render: function () {
        var _this = this;

        var detailArr = _this.state.detailArr;
        var status_node =  _this.state.status_node;
        /*数据格式转换*/
        var translate_arr = [];
        var goods_list = _this.state.goodList;
        if(goods_list.data == null || goods_list.data == undefined)
            return false;
        var list_arr = goods_list.data;

        list_arr.forEach(function(item,key){
            if(item.id==_this.props.id){
                translate_arr.push(item);
            }
        });

        if(detailArr == ''||detailArr.length==0){
            detailArr = translate_arr;
        }
        var skuNode = '';
        if(_this.state.shown) { /*显示商品列表*/
            skuNode = (
                <SpuList callback={_this.getShown} finishCallback={_this.getSelectedData} skuListCallBack={_this.getSkuList} selectedArr={detailArr} shown={_this.state.shown}></SpuList>
            );
        }

        /*当前显示*/
        var preNode = (
            <div>
                 <div>
                     <a className="a_none_underline" href={"#/promotion/collocation/handle/"+_this.props.id}>
                         <Button bsStyle='blue' style={{margin:'24'}}>返回套餐列表</Button>
                     </a>
                 </div>
                <Form horizontal>
                    <FormGroup>
                        <Label control sm={3}>搭配名称:</Label>
                        <Col sm={9}>
                            <Input
                                className='inline'
                                type='text'
                                id='_this_name'
                                name='name'
                                placeholder=''
                                onBlur={_this.checkNumber}
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3}><BLabel bsStyle='info' onClick={this.selectSpu} style={{cursor:'pointer',padding:'8',marginRight:'-26'}}>添加套装商品</BLabel></Label>
                        <Col sm={9}></Col>
                    </FormGroup>
                    {skuNode}
                    <FormGroup >
                        <Table striped style={{width:'70%',marginLeft:'21%'}}>
                            <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="12%" style={{paddingLeft:'50'}}>搭配商品</th>
                                <th width="6%" className='text_center'>是否主商品</th>
                                <th width="14%" className='text_center'>操作</th>
                            </tr>
                            </thead>
                            <tbody>

                                {
                                    detailArr.map(function(item,key){
                                        return (
                                            <CollocationGoods UpOrDownCallBack={_this.changeUpOrDown} detailArr={detailArr} item={item} key={key}></CollocationGoods>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </FormGroup>
                </Form>
            </div>
        );


        /*优惠方式*/
        var statusNode = '';
        if(status_node==0){
            statusNode = '';
        }

        var node_arr = _this.state.nodeArr;
        if(status_node==1){//按款满折

            var $node = node_arr.map(function(item,key){ //记录增加一级优惠
                return (
                    <FormGroup key={item.id}>
                        <Label control sm={3}></Label>
                        <Col sm={9}>
                            满
                            <Input
                                id={'quantity-'+key}
                                style={{width:'60'}}
                                className='inline'
                                type='text'
                                placeholder=''
                            />
                            款
                            <Input
                                id={'discount-'+key}
                                style={{width:'60'}}
                                className='inline'
                                type='text'
                                placeholder=''
                            />
                            折
                            <a href="javascript:;" style={{marginLeft:'30'}} onClick={_this.deleteHandle.bind(null,key)}>删除</a>
                        </Col>
                    </FormGroup>
                )
            });


            statusNode = (
                <div id='show_coupon'>
                    {$node}

                    <FormGroup>
                        <Label control sm={5}></Label>
                        <Col sm={7} style={{marginTop:'-42'}}>
                            <a href="javascript:;" onClick={_this.addHandle} style={{marginLeft:'30',padding:'5',border:'1px dashed #2EB398',borderRadius:'4'}} >+增加一级优惠</a>
                        </Col>
                    </FormGroup>
                </div>
            );
        }

        /*sku列表*/
        var goodsSkuList = _this.state.goodsSkuList;
        if(goodsSkuList.data == null || goodsSkuList.data == undefined)
            return false;
        var goodsSkuArr = goodsSkuList.data;
        var skuList = _this.state.skuList;
        if(skuList==''||skuList==[]){
            skuList = goodsSkuArr;
        }
        if(status_node==2){//优惠价组合
            statusNode = (
                <FormGroup>
                    <Table striped style={{width:'70%',marginLeft:'21%'}}>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="15%" style={{paddingLeft:'50'}}>商品</th>
                            <th width="12%" className='text_center'>规格</th>
                            <th width="6%" className='text_center'>斯品价（元）</th>
                            <th width="6%" className='text_center'>套餐价（元）</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            skuList.map(function(item,key){
                                return (
                                    <CollocationCoupon item={item} key={key}></CollocationCoupon>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </FormGroup>
            );
        }
       var nextNode = (
            <Form horizontal>
                <FormGroup style={{marginTop:'24'}}>
                    <Label control sm={3}>搭配优惠方式:</Label>
                    <Col sm={9}>
                        <Select id='_this_type'  onChange={_this.onChangeStatus} value={status_node} className="wa fl mr0">
                            <option value="0">请选择</option>
                            <option value="1">按款满折</option>
                            <option value="2">优惠价组合</option>
                        </Select>
                    </Col>
                </FormGroup>
                {statusNode}
                <FormGroup>
                    <Label control sm={3}></Label>
                    <div sm={9}>
                        <Button bsStyle='blue' style={{margin:'24'}} onClick={_this.createHandle.bind(null,_this.props.id,detailArr,node_arr,skuList)}>创建</Button>
                        <a className="a_none_underline" href={"#/promotion/collocation/handle/"+_this.props.id}>
                            <Button bsStyle='blue' style={{margin:'24'}}>返回套餐列表</Button>
                        </a>
                    </div>
                </FormGroup>
            </Form>
        );
        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <Grid>
                        {preNode}
                        {nextNode}
                    </Grid>
                </div>
                {this.props.children}
            </Container>
        );

    }
});
var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
