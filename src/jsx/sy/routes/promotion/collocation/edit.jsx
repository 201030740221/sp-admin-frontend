/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var events = require('../../../widgets/Goods/events.jsx');
var SpuList = require('../../../widgets/goodsSpuList/index.jsx');

var liteFlux = require('lite-flux');

var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');
var detailCollocationStore = require('../../../modules/stores/promotion/collocation/detailCollocationStore.jsx');

//
var classSet = React.addons.classSet;


/*搭配商品*/
var CollocationGoods = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('detailCollocation')],
    deleteHandle: function(id,key){
        if(key==0){
            Sp.message.error('该商品为主商品,不能进行操作哦');
        }
        var _this = this;
        var translate_arr = _this.props.translate_arr;

        translate_arr.splice(key,1);
        _this.props.UpOrDownCallBack(translate_arr);
        var request_data = {
            id: id
        };
        liteFlux.action("detailCollocation").deleteCollocationDetail(request_data);

        var ids = '';
        for(var key in translate_arr){
            ids+= translate_arr[key].id+',';
        }
        var request_data = {
            goods_ids: ids
        }
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
            _this.props.callbackGoodsSku(data);
        });
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
            _this.upRecord(_this.props.translate_arr,key);
           _this.props.UpOrDownCallBack(_this.props.translate_arr);
        }
        if(str=='down'){
            _this.downRecord(_this.props.translate_arr,key)
            _this.props.UpOrDownCallBack(_this.props.translate_arr);
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
        var translate_arr = this.props.translate_arr;

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
        if(key==(translate_arr.length-1)){
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
                                <BLabel bsStyle='info' className='label-danger pointer' onClick={_this.deleteHandle.bind(null,item.id,_this.props.key)} style={{marginLeft:'15'}}>{delete_desc}</BLabel>
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
        var ruleItem = this.props.ruleItem;
        if(ruleItem){
            $('#sku_coupon_price'+key).val(ruleItem.price);
        }else{
            $('#sku_coupon_price'+key).val(item.price);
        }
    },
    componentDidUpdate: function(){

    },
    componentWillReceiveProps: function(props){
        var key =props.key;
        var item = props.item;
        var _this_price = item.price;
        if(_this_price){
            _this_price = item.price;
        }else{
            _this_price = 0.00;
        }
        $('#sku_coupon_price'+key).val(_this_price);
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
                            <td width="12%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} width='100' />
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="8%" className='text_center'>{item.attribute_name}</td>
                            <td width="8%" className='text_center'>{item.price}</td>
                            <td width="8%" className='text_center'>
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
    mixins: [Sp.eventMixin,React.addons.LinkedStateMixin,liteFlux.mixins.storeMixin('detailCollocation','goodsSkuList')],
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
    getGoodsData: function(request_data){
        var _this = this;
        liteFlux.action("detailCollocation").viewGoodsCollocation(request_data,function(data){
            var detailArr = data.goods_collocation.goods_collocation_details;
            var ids = '';
            for(var key in detailArr){
                ids+= detailArr[key].goods_id+',';
            }
            var request_data = {
                goods_ids: ids
            };
            liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
                var skuList = data.data;
                _this.setState({
                    skuList: skuList
                });
            });

            var nodeArr = data.goods_collocation.goods_collocation_rules;
            _this.setState({
                nodeArr: nodeArr
            });
        });
    },
    componentDidMount: function () {

        var request_data = {
            id: this.props.id
        };
        this.getGoodsData(request_data);

    },
    componentDidUpdate: function() {
        var _this = this;
        var detail = this.state.detailCollocation;
        $('#_this_name').val(detail.goods_collocation.name);
        var nodeArr = detail.goods_collocation.goods_collocation_rules;
        for(var key in nodeArr){
            $('#quantity-'+key).val(nodeArr[key].goods_quantity);
            var discount = nodeArr[key].discount;
            $('#discount-'+key).val(discount*10);
        }



    },
    componentWillReceiveProps: function(props) {
        var request_data = {
            id: props.id
        };
        this.getGoodsData(request_data);

    },
    addHandle: function(){
        var _this = this;
        var h_node = _this.state.nodeArr;
        console.log(h_node);
        h_node.push({'name':'','goods_quantity':1,'discount':'0.8'});
        _this.setState({
            nodeArr: h_node
        });
    },
    deleteHandle: function(id,index){
        var _this = this;

        var nodeArr = _this.state.nodeArr;
        for(var i=0; i<nodeArr.length; i++){
            if(id==nodeArr[i].id){
                var request_data = {
                    id: id
                };
                liteFlux.action("detailCollocation").deleteCollocationRule(request_data);
            }
        }
        var arr = _this.state.nodeArr;
        arr.splice(index,1);
        _this.setState({
            nodeArr: arr
        });
    },
    checkNumber: function(e){
        var name = $('#_this_name').val();
        if(name.length>20){
            alert('输入的字数不能超过20个');
            return false;
        }
    },

    saveHandle: function(source_type,detailArr,select_arr,coupon_arr,sourceRule,sku_list){
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
            // 先判断detailArr[index]存在不
            goods_collocation_details = {
                'id': detailArr[index]?detailArr[index].id:'',
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
                var _this_id = '';
                if(source_type==2){
                    _this_id = '';
                }
                else{
                    _this_id = sourceRule[index]?sourceRule[index].id:''
                }

                var str = (parseFloat(discount)/10)+'',
                    _this_discount = str.substr(0,str.indexOf(".")+3);

                goods_collocation_rules = {
                    'id': _this_id,
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
            console.log(sku_list);
            for (var index in sku_list) {
                var goods_sku_id = sku_list[index].sku_id;
                var price = $('#sku_coupon_price'+index).val();
                if(parseFloat(price)>parseFloat(sku_list[index].price)){
                    alert('亲，套餐价不能多于原价哦');
                    return false;
                }
                goods_collocation_rules = {
                    'id': sourceRule[index]?sourceRule[index].id:'',
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
            id: _this.props.id,
            name: name,
            type: type,
            description: '描述',
            goods_collocation_details: select_goods,
            goods_collocation_rules: discount_arr
        };

        console.log(request_data);
        liteFlux.action("detailCollocation").updateAllDetailCollocation(request_data);
    },
    onChangeStatus: function(e){
        var _this = this;
        var val = e.target.value;
        if(val==0){
            Sp.message.error('已有数据的，就不能再更换搭配优惠方式啦');
            return false;
            _this.setState({
                status_node: 0
            })
        }
        if(val==1){
            Sp.message.error('已有数据的，就不能再更换搭配优惠方式啦');
            return false;
            _this.setState({
                status_node: 1,
                nodeArr: [{id:''}]

            })
        }
        if(val==2){
            Sp.message.error('已有数据的，就不能再更换搭配优惠方式啦');
            return false;
            _this.setState({
                status_node: 2
            })
        }
    },
    selectSku: function(){
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
        });
    },
    changeUpOrDown: function(data){
        this.setState({
            detailArr: data
        });
    },
    getSkuList: function(data){
        console.log(data);
        this.setState({
            skuList: data.data
        })
    },
    return: function(){
        history.go(-1);
    },
    render: function () {

        var _this = this;
        var detail = this.state.detailCollocation;
        detail.goods_collocation = detail.goods_collocation || {};
        var detailArr = detail.goods_collocation.goods_collocation_details || [];

        /*数据格式转换*/
        var translate_arr = [];
        if(_this.state.detailArr.length==0){
            detailArr.forEach(function(item,key){
                var translate_data = {
                    'id': item.goods_id,
                    goods_category: {
                        category:{
                            name: item.goods.cname
                        }
                    },
                    primary_goods_sku: {
                        has_cover: {
                            media: {
                                full_path: item.goods.attachment.media.full_path
                            }
                        }
                    },
                    'title': item.goods.title,
                    'goods_type': item.goods.goods_type
                };
                translate_arr.push(translate_data);
            });
        }else{
            translate_arr = _this.state.detailArr;
        }
        var status_node =  _this.state.status_node || detail.goods_collocation.type;

        var skuNode = '';
        if(_this.state.shown) { /*显示商品列表*/
            skuNode = (
                <SpuList callback={_this.getShown} finishCallback={_this.getSelectedData} skuListCallBack={_this.getSkuList} selectedArr={translate_arr} shown={_this.state.shown}></SpuList>
            );
        }

        /*当前显示*/
        var preNode = (
            <div>
                 <div>
                     <a className="a_none_underline" href='javascript:;' onClick={_this.return}>
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
                        <Label control sm={3}><BLabel bsStyle='info' onClick={this.selectSku} style={{cursor:'pointer',padding:'8',marginRight:'-26'}}>添加套装商品</BLabel></Label>
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
                                    translate_arr.map(function(item,key){
                                        return (
                                            <CollocationGoods UpOrDownCallBack={_this.changeUpOrDown} callbackGoodsSku={_this.getSkuList} translate_arr={translate_arr} item={item} key={key}></CollocationGoods>
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

        var nodeArr = detail.goods_collocation.goods_collocation_rules;
        var node_arr = [];
        if(_this.state.nodeArr==''||_this.state.nodeArr==[]){
            node_arr = nodeArr;
        }else{
            node_arr = _this.state.nodeArr;
        }
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
                            <a href="javascript:;" style={{marginLeft:'30'}} onClick={_this.deleteHandle.bind(null,item.id,key)}>删除</a>
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

        var skuList = _this.state.skuList;

        if(status_node==2){//优惠价组合
            statusNode = (
                <FormGroup>
                    <Table striped style={{width:'70%',marginLeft:'21%'}}>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="12%" style={{paddingLeft:'50'}}>商品</th>
                            <th width="8%" className='text_center'>规格</th>
                            <th width="8%" className='text_center'>斯品价（元）</th>
                            <th width="8%" className='text_center'>套餐价（元）</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            skuList.map(function(item,key){
                                var ruleItem = nodeArr[key];
                                return (
                                    <CollocationCoupon item={item} key={key} ruleData={nodeArr} ruleItem={ruleItem}></CollocationCoupon>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </FormGroup>
            );
        }

        var type = detail.goods_collocation.type;
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
                        <Button bsStyle='blue' style={{margin:'24'}} onClick={_this.saveHandle.bind(null,type,detailArr,translate_arr,node_arr,nodeArr,skuList)}>保存</Button>
                        <a className="a_none_underline" href='javascript:;' onClick={_this.return}>
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
