/** @jsx React.DOM */

/**
 * 订单管理
 * */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var actions = flux.actions.orderListActions;
var getStore = flux.store("orderListStore").getState;
/**
 * 分页
 */
var PagesBar = React.createClass({
    onNextPage: function(){
        var props = this.props.state;
        var store = getStore();
        if( store.curPage>= store.lastPage ){
            Sp.message("已经是最后一页了","error");
            return;
        }
        var uid = this.props.uid;
        if(store.keyword.length){
            actions.onSearch(store.keyword, parseInt(store.curPage)+1,uid,store.point_goods);
        }else{
            actions.onGetOrderList(
                store.begin_at,
                store.end_at,
                parseInt(store.curPage)+1,
                this.props.uid,
                store.status_id,
                store.point_goods
            );
        }

    },
    onPrevPage: function(){
        var props = this.props.state;
        var store = getStore();
        if(store.curPage==1){
            Sp.message("已经是第一页了","error");
            return;
        }
        var uid = this.props.uid;
        if(store.keyword.length){
            actions.onSearch(store.keyword, parseInt(store.curPage)-1,uid,store.point_goods);
        }else{
            actions.onGetOrderList(
                store.begin_at,
                store.end_at,
                parseInt(store.curPage)-1,
                this.props.uid,
                store.status_id,
                store.point_goods
            );
        }

    },
    render: function(){
        return (
            <Pager>
                <Page onClick={this.onPrevPage} previous href='#'>上一页</Page>{' '}
                <Page onClick={this.onNextPage} next href='#'>下一页</Page>
            </Pager>
        )
    }
});

/**
 * 下单时间筛选
 */
var moment = require('moment');
var DatePicker = require('../../widgets/datepicker/datepicker.jsx');
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            start_date: moment('2015-01-01'),
            end_date:  moment()
        }
    },
    changeEndTime: function(date){
        this.setState({
            end_date: date
        });
        actions.onChangeEndAt(date);
    },
    changeStartTime: function(date){
        this.setState({
            start_date: date
        });
        actions.onChangeBeginAt(date);
    },
    componentDidMount: function(){
        var store = flux.store("orderListStore").getState();
        this.setState({
            start_date: store.begin_at,
            end_date:  store.end_at
        });
    },
    render: function(){
        return (
            <div className="fr">
                <div className="clearfix">
                    <div className="fl mr10">
                        下单时间：
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='Click to select a date'
                            selected={this.state.start_date}>
                        </DatePicker>
                    </div>
                    <div className="fl mr10">
                        至
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="endTime"
                            onChange={this.changeEndTime}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='Click to select a date'
                            selected={this.state.end_date}>
                        </DatePicker>
                    </div>
                    <Button type='submit' bsStyle='blue' className="fl" >确定</Button>
                </div>
            </div>
        )
    }
});


/**
 * 状态筛选
 */
var StatusBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
        actions.onFilter(value);
    },
    render: function(){

        var status_id = this.props.status_id;

        return (
            <Select onChange={this.onChangeStatus} className="wa fl mr0" value={status_id}>
                <option value="0">订单状态</option>
                <option value="1">等待付款</option>
                <option value="2">付款成功</option>
                <option value="3">等待发货</option>
                <option value="4">等待收货</option>
                <option value="5">已完成</option>
                <option value="6">已取消</option>
            </Select>
        )
    }
});


/**
 * 状态筛选
 */
var GoodsType = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
        actions.onGoodsFilter(value);
    },
    render: function(){

        var goodsType = this.props.goodsType;

        return (
            <div className="wa fl ml30">
                <span className="fl mr5">是否包含有积分商品: </span>
                <Select onChange={this.onChangeStatus} className="wa fl mr0" value={goodsType}>
                    <option value="-1">请选择</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                </Select>
            </div>
        )
    }
});


/**
 * 搜索框
 */
var SearchBar = React.createClass({
    onSearch: function(e){
        var store = getStore();
        var value = $("#search_key_word").val();
        var uid = this.props.uid;
        actions.onSearch(value,1,uid,store.point_goods);
    },
    render: function(){
        return (
            <div className="fl mr30">
                <Input id="search_key_word" className="wa fl mr10" type='text' placeholder='请输入关键字' />
                <Button onClick={this.onSearch} bsStyle='blue' type='submit' className="fl" >搜索</Button>
            </div>
        )
    }
});


/**
 * 单条订单的商品
 */
var ItemGoods = React.createClass({
    render: function(){
        var self = this;
        var $ItemNode = self.props.goods.map(function(item){
            if(item.goods_sku.goods && item.goods_sku.has_cover){
                return (
                    <tr key={item.id} className="border-bottom-gray">
                        <td width="100">
                            <img src={item['goods_sku']['has_cover']['media']['full_path']+'?imageView2/1/w/80'} width="80" />
                        </td>
                        <td width="*">
                            <a target="_blank" href={frontHost+"/item/"+item['goods_sku']['sku_sn']+".html"}>{item['goods_sku']['goods']['title']}</a>
                        </td>
                        <td width="400">{item['goods_sku']['attribute_name']}</td>
                        <td width="200">￥{item['price']}</td>
                        <td width="150">{item['amount']}</td>
                        <td width="150">￥{item['amount']*item['price']}</td>
                    </tr>
                );
            }else{
                return (
                    <tr key={item.id} className="border-bottom-gray">
                        <td width="100">
                            无图
                        </td>
                        <td width="*">
                            <a target="_blank" href={frontHost+"/item/"+item['goods_sku']['sku_sn']+".html"}>{item['goods_sku']['goods']['title']}</a>
                        </td>
                        <td width="400">{item['goods_sku']['attribute_name']}</td>
                        <td width="200">￥{item['price']}</td>
                        <td width="150">{item['amount']}</td>
                        <td width="150">￥{item['amount']*item['price']}</td>
                    </tr>
                );
            }
        });
        return (
            <table id={"trade_"+self.props.trade} width="100%" className="trade_item bg-white" style={{display:"none"}}>
                <thead className='bg-darkgrayishblue75 fg-white'>
                    <tr>
                        <th width="100"></th>
                        <th width="*">商品</th>
                        <th width="400">SKU</th>
                        <th width="200">单价</th>
                        <th width="150">数量</th>
                        <th width="200">小计</th>
                    </tr>
                </thead>
                <tbody>
                    {$ItemNode}
                </tbody>
                <tfoot className='bg-darkgrayishblue75 fg-white'>
                    <tr>
                        <th colSpan="6">
                            <div style={{textAlign:"right"}}>
                                <span className="mr20 ml20">运费:￥{self.props.delivery}</span> +
                                <span className="mr20 ml20">安装费:￥{self.props.installation}</span> +
                                <span className="mr20 ml20">商品合计:￥{self.props.price}</span> =
                                <span className="mr20 ml20">总计:￥{self.props.total}</span>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        )
    }
});

/**
 * 单条订单
 */
var OrderItem = React.createClass({
    onToggleGoodsList: function(rtade){
        if($("#trade_"+rtade).is(":hidden")){
            $(".trade_item").hide();
            $("#trade_"+rtade).show();
        }else
            $(".trade_item").hide();
    },
    showModal: function(content,title,callback) {
        title = title || '';
        var fn = function(){
            typeof callback === 'function' && callback();
            ModalManager.remove();
        };
        return (
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    <p>{content}</p>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    },
    deleteSelf: function () {
        //确认操作
        var self = this;
        console.log(this.props.item.id);
        if(this.props.item == undefined || this.props.item == null){
            this.props.item = {};
        }
        var id = this.props.item['id'];
        ModalManager.create(self.showModal('您确定要删除?','操作提示', function(){
            actions.onDeleteOrder(id);
        }));
    },
    render: function(){
        var self = this;

        var member_address = this.props.item['delivery']['member_address'] || {};
        var delete_text = '';
        switch(this.props.item['status_id']){
            case 5: delete_text = '删除' ;
                    break;
            case 6: delete_text = '删除' ;
                    break;
        }

        var this_color = '';
        if(this.props.item.is_first_order){
            this_color = 'color-orange';
        }else{
            this_color = '';
        }

        return (
            <tr>
                <td colSpan="9">
                    <table width="100%">
                        <tr>
                            <td width="2%"></td>
                            <td width="12%"><a onClick={this.onToggleGoodsList.bind(null,self.props.item['id'])} href="javascript:void(0);" className={this_color}>{this.props.item['order_no']}</a></td>
                            <td width="10%">{this.props.item['created_at']}</td>
                            <td width="12%">
                                <p>{member_address['consignee']}({this.props.item['member']['name']})</p>
                                <p>{member_address['mobile']}</p>
                            </td>
                            <td width="8%">￥{this.props.item['total']}</td>
                            <td width="8%">{this.props.item['status']}</td>
                            <td width="6%">{this.props.item['type']===0?"普通订单":"分阶段订单"+this.props.item['total_point']>0?"(含积分订单)":""}</td>
                            <td width="6%">{this.props.item['updated_at']}</td>
                            <td width="8%">
                                <a href={"#/app/orderDetail/"+this.props.item['id']}>
                                    <BLabel bsStyle='info'>查看</BLabel>
                                </a>{' '}
                                <a href="javascript:;" onClick={this.deleteSelf}>
                                    <BLabel className='label-danger' bsStyle='info'>{delete_text}</BLabel>
                                </a>{' '}
                            </td>
                        </tr>
                    </table>
                    <ItemGoods trade={this.props.item['id']} goods={this.props.item['goods']} total={this.props.item['total']} price={this.props.item['total_price']}  delivery={this.props.item['total_delivery']} installation={this.props.item['total_installation']}></ItemGoods>
                </td>
            </tr>
        )
    }
});

/**
 * 订单列表
 */
var OrderList = React.createClass({
    getList: function(page){
        var store = getStore();
        var start = parseInt(page)==1?0:store.showPage*(page-1);
        var end = store.showPage*page;
        var list = store.list.filter(function(item){
            return item;
        });
        list = list.slice(start,end);
        //console.log( !store.init , list.length<store.total , list.length<store.showPage);
        if( !store.init ){
            actions.onGetOrderList(
                store.begin_at,
                store.end_at,
                1,
                this.props.uid,
                store.status_id,
                store.point_goods
                );
        }else if(page>store.curPage){
            actions.onGetOrderList(
                store.begin_at,
                store.end_at,
                parseInt(page),
                this.props.uid,
                store.status_id,
                store.point_goods
                );
        }
        return list;
    },
    componentDidMount: function(){

    },
    render: function () {
        var self = this;
        var store = getStore();
        var list = this.getList(store.frontCurPage);
        //console.log(list);
        var $ItemNode = list.map(function(item){
            return (
                <OrderItem key={item.id} item={item}></OrderItem>
            )
        });
        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                    <tr>
                        <th width="2%"></th>
                        <th width="12%">订单号</th>
                        <th width="10%">下单时间</th>
                        <th width="12%">用户信息</th>
                        <th width="8%">总金额</th>
                        <th width="8%">订单状态</th>
                        <th width="6%">订单类型</th>
                        <th width="7%">状态变更时间</th>
                        <th width="8%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {$ItemNode}
                </tbody>
            </Table>
        )
    }
});

/**
 * 主体
 */
var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("orderListStore")],
    getStateFromFlux: function() {
        return getStore();
    },
    componentDidMount: function() {

        var store = getStore();
        actions.onGetOrderList(
            store.begin_at,
            store.end_at,
            store.curPage,
            this.props.uid,
            store.status_id,
            store.point_goods
        );
    },
    componentWillReceiveProps: function(props) {
        var store = getStore();
        actions.onGetOrderList(
            store.begin_at,
            store.end_at,
            store.curPage,
            props.uid,
            store.status_id,
            store.point_goods
        );
    },
    render: function () {

        var self = this;
        var store = getStore();

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row className='search-box hidden-print' style={{marginBottom: 20}}>
                                                <Col xs={7}>
                                                    <SearchBar uid={this.props.uid}></SearchBar>
                                                    <StatusBar status_id={store.status_id}></StatusBar>
                                                    <GoodsType goodsType={store.point_goods}></GoodsType>
                                                </Col>
                                                <Col xs={5} style={{paddingTop: 0}}>
                                                    <TimeFilter></TimeFilter>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>

                                                    <div className="order-list-box">
                                                        <OrderList uid={this.props.uid}></OrderList>
                                                    </div>
                                                    <div className="foot-box">
                                                        <PagesBar state={self.state}></PagesBar>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
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
                <Body uid={this.props.uid} flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
