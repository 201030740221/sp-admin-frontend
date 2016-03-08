/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
/*var Store = require('../../../modules/stores/promotion/collocation/collocationStore.jsx');*/
var Store = require('../../../modules/stores/goods/goodsSkuListStore.jsx')
var collocationStore = require('../../../modules/stores/promotion/collocation/goodsCollocationListStore.jsx');
var collocationRelationStore = require('../../../modules/stores/promotion/collocation/getCollocationRelationStore.jsx');

//
var classSet = React.addons.classSet;


/*搭配主商品列表*/
var MainItem = React.createClass({
    openDetailPage: function(sku){
        window.open(frontHost + '/item/'+sku+'.html');
    },
    render: function(){
        var item = this.props.item;
        var url = '';
        if(item.images){
            url = item.images+'?imageView2/1/w/100';
        }
        var status = '';
        switch(parseInt(item.sku_status)){
            case 0: status = '下架';
                break;
            case 1: status = '上架';
                break;
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="18%" style={{paddingLeft:'50'}}>
                                <Col xs={3}>
                                    <a href="javascript:;" onClick={this.openDetailPage.bind(null,item.sku_sn)}><img src={url} alt="" width='100'/></a>
                                </Col>
                                <Col xs={9} className='text_left'>
                                    <a href="javascript:;" onClick={this.openDetailPage.bind(null,item.sku_sn)}><p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p></a>
                                    <p style={{marginBottom:'5',marginTop:'20'}}>SKU: {item.sku_sn}</p>
                                </Col>
                            </td>
                            <td width="8%" className='text_center'>{item.attribute_name}</td>
                            <td width="6%" className='text_center'>{item.price}</td>
                            <td width="6%" className='text_center'>{status}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

/*搭配列表*/
var CollocationItem = React.createClass({
    handleStatus: function(status,id){
        var _this = this;
        var status_val = 0;
        if(parseInt(status)==0 || parseInt(status)==2){
            status_val = 1;
        }
        if(parseInt(status)==1){
            status_val = 0;
        }
        var list_data = {
            id: _this.props.id,
            size: 10
        };
        var request_data = {
            ids: id,
            status: status_val
        };
        liteFlux.action("collocationList").updateStateMultiply(request_data,list_data);
    },
    deleteHandle: function(id){
        var _this = this;
        var list_data = {
            id: _this.props.id,
            size: 10
        };
        var request_data = {
            id: id
        };
        liteFlux.action("collocationList").deleteGoodsCollocation(request_data,list_data);
    },
    render: function(){
        var _this = this;
        var item = this.props.item;
        var status = '';
        var up_handle = '', down_handle = '', edit_handle = '', delete_handle = '', see_handle = '';
        switch(item.status){
            case 0: status = '已下架';
                up_handle = '上架';
                edit_handle = '编辑';
                delete_handle = '删除';
                break;

            case 1: status = '已上架';
                down_handle = '下架';
                see_handle = '查看';
                break;

            case 2: status = '已被系统下架';
                delete_handle = '删除';
                break;
        }
        var relationArr = [];
        if(item.goods_collocation){
            relationArr = item.goods_collocation.goods_collocation_details;
        }
        var $node = relationArr.map(function(item,key){
            var url = '';
            if(item.goods.attachment){
                url = item.goods.attachment.media.full_path+'?imageView2/1/w/100';
            }

            var class_on = '';
            if(key == 0){
                class_on = 'main_goods_class';
            }
            return (
                <img key={item.id} src={url} width='100' className={class_on} style={{marginLeft:'15'}} />
            )
        });
        return (
            <tr key={item.id}>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="8%"> {item.goods_collocation.name} </td>
                            <td width="15%" className='text_center'>
                                {$node}
                            </td>
                            <td width="6%" className='text_center'> {status} </td>
                            <td width="12%" className='text_center'>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,item.status,item.id)}>{up_handle}</BLabel>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,item.status,item.id)}>{down_handle}</BLabel>
                                <a className="a_none_underline" href={"#/promotion/collocation/edit/"+item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{edit_handle}</BLabel></a>
                                <a className="a_none_underline" href={"#/promotion/collocation/view/"+item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{see_handle}</BLabel></a>
                                <a className="a_none_underline"><BLabel onClick={_this.deleteHandle.bind(null,item.id)} bsStyle='info' className='label-danger' style={{marginLeft:'15'}}>{delete_handle}</BLabel></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


/*参与搭配列表*/
var RelationItem = React.createClass({
    render: function(){
        var item = this.props.item;
        var relationArr = [];
        if(item.goods_collocation){
            relationArr = item.goods_collocation.goods_collocation_details;
        }
        var goods_id = this.props.goods_id;
        var $node = relationArr.map(function(item,key){
            var url = '';
            if(item.goods.attachment.media){
                url = item.goods.attachment.media.full_path+'?imageView2/1/w/100';
            }

            var class_on = '';
            if(item.goods_id == goods_id){
                class_on = 'main_goods_class';
            }
            return (
                <img key={item.id} src={url} className={class_on} width='100' style={{marginLeft:'15'}} />
            )
        });

        var status = '';
        switch(item.status){
            case 0: status = '已下架';
                    break;

            case 1: status = '已上架';
                    break;

            case 2: status = '已被系统下架';
                    break;
        }
        return (
            <tr key={item.id}>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="8%">{item.goods_collocation.name}</td>
                            <td width="15%" className='text_center'>
                                {$node}
                            </td>
                            <td width="6%" className='text_center'>{status}</td>
                            <td width="8%" className='text_center'>
                                <a className="a_none_underline" href={"#/promotion/collocation/view/"+item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>查看</BLabel></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsSkuList','collocationList','collocationRelation'), ModalMixins],
    getInitialState: function () {
        return {
            main_status: false,
            list_status1: true,
            list_status2: false,
            active: 'tab_nav_btn',
            activeNone1: 'tab_nav_btn active',
            activeNone2: 'tab_nav_btn'
        }
    },
    componentDidMount: function () {
        var request_data = {
            goods_ids: this.props.id
        };
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
        var data = {
            id: this.props.id,
            size: 10
        };
        liteFlux.action("collocationList").getGoodsCollocationList(data);
        liteFlux.action("collocationRelation").getCollocationRelation(data);
    },
    componentWillReceiveProps: function(props) {
        var request_data = {
            goods_ids: props.id
        };
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data);
        var data = {
            id: props.id,
            size: 10
        };
        liteFlux.action("collocationList").getGoodsCollocationList(data);
        liteFlux.action("collocationRelation").getCollocationRelation(data);
    },
    showHandle: function(e){
        var el = e.target;
        var id = el.id;
        var _this = this;
        if(id=='main'){
            _this.setState({
                main_status: true,
                list_status1: false,
                list_status2: false,
                active: 'tab_nav_btn active',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn'
            })
        }
        if(id=='status1'){
            _this.setState({
                main_status: false,
                list_status1: true,
                list_status2: false,
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn active',
                activeNone2: 'tab_nav_btn'
            })
        }
        if(id=='status2'){
            _this.setState({
                main_status: false,
                list_status1: false,
                list_status2: true,
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn active'
            })
        }
    },
    render: function () {
        var _this = this;

        /*搭配主商品列表*/
        var source = this.state.goodsSkuList;
        console.log(source,'....');
       source.data = source.data||[];
        var activeNode = '' , list_1 = '' , list_2 = ''; /*搭配主商品，搭配列表，参与的搭配列表*/
        if(_this.state.main_status){
            activeNode = (
                <div>
                    <div>
                        <Table striped>
                            <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="18%" style={{paddingLeft:'100'}}>搭配主商品</th>
                                <th width="8%" className='text_center'>规格</th>
                                <th width="6%" className='text_center'>零售价</th>
                                <th width="6%" className='text_center'>状态</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                source.data.map(function(item,key){
                                    return (
                                       <MainItem item={item} key={key}></MainItem>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }else{
            activeNode = ''
        }

        /*搭配列表*/
        if(_this.state.list_status1) {

            var getList = this.state.collocationList || {},
                getcollocationList = getList.data || [];
            list_1 = (
                <div>
                    <div style={{float:'right',marginTop:'-42'}}>
                        <a className="a_none_underline" href={"#/promotion/collocation/create/"+_this.props.id}>
                            <Button type='submit' bsStyle='blue' style={{marginRight:'210',marginBottom:'10'}}>添加搭配</Button>
                        </a>
                    </div>
                    <Table striped>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="8%">搭配名称</th>
                            <th width="15%" className='text_center'>搭配商品</th>
                            <th width="6%" className='text_center'>状态</th>
                            <th width="12%" className='text_center'>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                getcollocationList.map(function(item,key){
                                    return (
                                        <CollocationItem item={item} key={item.id} id={_this.props.id}></CollocationItem>
                                    )

                                })
                            }
                        </tbody>
                    </Table>
                </div>
            )
        }else{
            list_1 = ''
        }

        /*参与搭配列表*/
        if(_this.state.list_status2) {
            var relationList = this.state.collocationRelation;

            if(relationList.data){
                list_2 = (
                    <div>
                        <Table striped>
                            <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="8%">搭配名称</th>
                                <th width="15%" className='text_center'>搭配商品</th>
                                <th width="6%" className='text_center'>状态</th>
                                <th width="8%" className='text_center'>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                relationList.data.map(function(item,key){
                                    return (
                                        <RelationItem goods_id={_this.props.id} item={item} key={item.id}></RelationItem>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                )
            }else{
                list_2 = ''
            }

        }
        else{
            list_2 = ''
        }

        /*tab nav*/
        var tab_nav=(
            <div style={{marginLeft:'25'}}>
                <span className={_this.state.activeNone1} id='status1' onClick={_this.showHandle}>搭配列表</span>
                <span className={_this.state.activeNone2} id='status2' onClick={_this.showHandle}>参与搭配列表</span>
                <span className={_this.state.active} id='main' onClick={_this.showHandle}>搭配主商品</span>
                <span style={{clear:'both'}}></span>
            </div>
        )
        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <div>
                        <a className="a_none_underline" href="#/promotion/collocation/list">
                            <Button type='submit' bsStyle='blue' style={{margin:'24'}}>返回推荐搭配首页</Button>
                        </a>
                    </div>
                    {tab_nav}
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                {list_1}
                                {list_2}
                                {activeNode}
                            </Col>
                        </Row>
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
