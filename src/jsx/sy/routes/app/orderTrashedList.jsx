/** @jsx React.DOM */

/**
 * 订单回收站
 * */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var trashedActions = flux.actions.orderTrashedListActions;
var getTrashedStore = flux.store("orderTrashedListStore").getState;

/**
 * 分页
 */
var PagesBar = React.createClass({
    onNextPage: function(){
        var props = this.props.state;
        var store = getTrashedStore();
        if( store.curPage>= store.lastPage ){
            Sp.message("已经是最后一页了","error");
            return;
        }

        trashedActions.onGetTrashedList(
                store.begin_at,
                store.end_at,
                parseInt(store.curPage)+1,
                store.status_t_id
            );

    },
    onPrevPage: function(){
        var props = this.props.state;
        var store = getTrashedStore();
        if(store.curPage==1){
            Sp.message("已经是第一页了","error");
            return;
        }

        trashedActions.onGetTrashedList(
                store.begin_at,
                store.end_at,
                parseInt(store.curPage)-1,
                store.status_t_id
            );

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
        trashedActions.onChangeEndAt(date);
    },
    changeStartTime: function(date){
        this.setState({
            start_date: date
        });
        trashedActions.onChangeBeginAt(date);
    },
    componentDidMount: function(){
        var store = flux.store("orderTrashedListStore").getState();
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
        trashedActions.onFilter(value);
    },
    render: function(){
        return (
            <Select onChange={this.onChangeStatus} className="wa fl mr0">
                <option value="0">订单状态</option>
                <option value="5">已完成</option>
                <option value="6">已取消</option>
            </Select>
        )
    }
});

/**
 * 搜索框
 */
var SearchBar = React.createClass({
    onSearch: function(e){
        var value = $("#search_key_word").val();
        var uid = this.props.uid;
        trashedActions.onSearch(value,1);
    },
    render: function(){
        return (
            <div className="fl mr30">
                <Input id="search_key_word" className="wa fl mr10" type='text' placeholder='请输入关键字' />
                <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fl" >搜索</Button>
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
            if(item.goods_sku.goods){

                var media = item.goods_sku.has_cover;
                if (media == null || media == undefined) {
                    media = " ";
                    media.media = null;
                }
                else{
                    media = media.media;
                }
                return (
                    <tr key={item.id} className="border-bottom-gray">
                        <td width="100">
                            <img src={media['full_path']+'?imageView2/1/w/80'} width="80"/>
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
            };
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
    restoreOrder: function(){
        console.log(this.props.item.id);
        if(this.props.item == undefined || this.props.item == null){
            this.props.item = {};
        }
        var id = this.props.item['id'];
        trashedActions.onRestoreOrder(id);
    },
    render: function(){
        var self = this;

        var member_address = this.props.item['delivery']['member_address'] || {}
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="2%"></td>
                            <td width="12%"><a onClick={this.onToggleGoodsList.bind(null,self.props.item['id'])} href="javascript:void(0);">{this.props.item['order_no']}</a></td>
                            <td width="10%">{this.props.item['created_at']}</td>
                            <td width="12%">
                                <p>{member_address['consignee']}({this.props.item['member']['name']})</p>
                                <p>{member_address['mobile']}</p>
                            </td>
                            <td width="8%">￥{this.props.item['total']}</td>
                            <td width="8%">{this.props.item['status']}</td>
                            <td width="12%">{this.props.item['updated_at']}</td>
                            <td width="8%" style={{textAlign:"center"}}>
                                <a href={"#/app/orderDetail/"+this.props.item['id']}>
                                    <BLabel bsStyle='info'>查看</BLabel>
                                </a>{' '}
                                <a href="javascript:;" onClick={this.restoreOrder}>
                                    <BLabel bsStyle='info'>还原</BLabel>
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
 * 订单回收站列表
 */
var OrderList = React.createClass({
    getInitialState: function(){
        return {
            'fCurPage': 1
        }
    },
    getList: function(page){
        var store = getTrashedStore();
        var start = parseInt(page)==1?0:store.showPage*(page-1);
        var end = store.showPage*page;
        var list = store.trashedlist.filter(function(item){
            return item;
        });
        list = list.slice(start,end);
        var status_log = 0;
        //console.log( !store.init , list.length<store.total , list.length<store.showPage);
        if(store.status_t_id==1||store.status_t_id==2||store.status_t_id==3||store.status_t_id==4){
            status_log = 0;
        }else{
            status_log= store.status_t_id;
        }
        if( !store.init ){
            trashedActions.onGetTrashedList(
                store.begin_at,
                store.end_at,
                1,
                status_log
                );
        }else if(page>store.curPage){
            trashedActions.onGetTrashedList(
                store.begin_at,
                store.end_at,
                parseInt(page),
                status_log
                );
        }
        return list;
    },
    componentDidMount: function(){

    },
    render: function () {
        var self = this;
        var store = getTrashedStore();
        var list = this.getList(store.fCurPage);
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
                        <th width="12%">完成时间</th>
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
    mixins: [FluxMixin, StoreWatchMixin("orderTrashedListStore")],
    getStateFromFlux: function() {
        return getTrashedStore();
    },
    componentDidMount: function(){
        var store = getTrashedStore();
        trashedActions.onGetTrashedList(
            store.begin_at,
            store.end_at,
            1,
            0
        );
    },
    componentWillReceiveProps: function(props) {
        var store = getTrashedStore();
        trashedActions.onGetTrashedList(
            store.begin_at,
            store.end_at,
            1,
            0
        );
    },
    render: function () {
        var self = this;
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
                                                    <StatusBar></StatusBar>
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
                <Body flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
