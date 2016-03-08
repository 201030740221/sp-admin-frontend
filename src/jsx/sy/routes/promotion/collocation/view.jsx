/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');

var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');
var detailCollocationStore = require('../../../modules/stores/promotion/collocation/detailCollocationStore.jsx');

//
var classSet = React.addons.classSet;


/*搭配商品*/
var CollocationGoods = React.createClass({
    render: function(){
        var item = this.props.item;
        var url = '';
        if(item){
            url = item.full_path+'?imageView2/1/w/100';
        }
        var key = this.props.key;

        var is_main_goods = '';
        if(key==0){
            is_main_goods= '是';
        }else{
            is_main_goods= '否'
        }
        var _this = this;

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
                              无
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

    },
    componentDidUpdate: function(){

    },
    render: function(){
        var item = this.props.item || {};
        var ruleItem = this.props.ruleItem || {};
        var key =this.props.key;
        var url = '';
        if(item){
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
                            <td width="8%" className='text_center'>{ruleItem.price}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('detailCollocation','goodsSkuList')],
    getInitialState: function () {
        return {

        }
    },
    componentDidMount: function () {
        var _this = this;
        var request_data = {
            id: this.props.id
        };
        liteFlux.action("detailCollocation").viewGoodsCollocation(request_data,function(data){
            var detailArr = data.goods_collocation.goods_collocation_details;
            var ids = '';
            for(var key in detailArr){
                ids+= detailArr[key].goods_id+',';
            }
            var request_data = {
                goods_ids: ids
            };
            liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
        });
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {
        var _this = this;
        var request_data = {
            id: props.id
        };
        liteFlux.action("detailCollocation").viewGoodsCollocation(request_data,function(data){
            var detailArr = data.goods_collocation.goods_collocation_details;
            var ids = '';
            for(var key in detailArr){
                ids+= detailArr[key].goods_id+',';
            }
            var request_data = {
                goods_ids: ids
            };
            liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);

        });

    },
    return: function(){
        history.go(-1);
    },
    render: function () {
        var _this = this;
        var detail = this.state.detailCollocation;
        if(detail.goods_collocation == null || detail.goods_collocation == undefined)
            return false;
        var detailArr = detail.goods_collocation.goods_collocation_details;
        /*数据格式转换*/
        var translate_arr = [];
        for(var key in detailArr){
            var translate_data = {
                'id': detailArr[key].id,
                'goods_id': detailArr[key].goods_id,
                'cname': detailArr[key].goods.cname,
                'title': detailArr[key].goods.title,
                'full_path': detailArr[key].goods.attachment.media.full_path
            }
            translate_arr.push(translate_data);
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
                            <div style={{marginTop:'3'}}>{detail.goods_collocation.name}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3}>商品套餐:</Label>
                        <Col sm={9}></Col>
                    </FormGroup>
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
                                            <CollocationGoods item={item} key={key}></CollocationGoods>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                    </FormGroup>
                </Form>
            </div>
        );

        /*sku列表*/
        var goodsSkuList = _this.state.goodsSkuList;
        if(goodsSkuList.data == null || goodsSkuList.data == undefined)
            return false;
        var goodsSkuArr = goodsSkuList.data;
        /*优惠方式*/
        var status_node = detail.goods_collocation.type;
        var _this_type = parseInt(status_node);
        var rules = detail.goods_collocation.goods_collocation_rules;
        var statusNode = '';
        var type_show = '';
        if(_this_type==1){//按款满折
            type_show = '按款满折';
            statusNode = rules.map(function(item,key){ //记录增加一级优惠
                return (
                    <FormGroup key={item.id}>
                        <Label control sm={3}></Label>
                        <Col sm={9}>
                            满
                            <span>{item.goods_quantity}</span>
                            款
                            <span>{item.discount*10}</span>
                            折
                        </Col>
                    </FormGroup>
                )
            });
        }

        if(_this_type==2){//优惠价组合
            type_show = '优惠价组合';
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
                            goodsSkuArr.map(function(item,key){
                                var ruleItem = rules[key];
                                return (
                                    <CollocationCoupon item={item} key={key} ruleItem={ruleItem}></CollocationCoupon>
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
                        <div style={{marginTop:'3'}}>{type_show}</div>
                    </Col>
                </FormGroup>
                {statusNode}
                <FormGroup>
                    <Label control sm={3}></Label>
                    <div sm={9}>
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
