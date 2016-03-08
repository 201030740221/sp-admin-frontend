/** @jsx React.DOM */

/**
 * 促销管理
 * */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');
var actions = flux.actions.promotionCouponDetail;
var getStore = flux.store("promotionCouponDetailStore").getState;
var ScopeModal = require('./scope-modal.jsx');
/**
 * 分页
 */
var PagesBar = React.createClass({
    onNextPage: function(){
        var store = getStore();
        if( store.current_page== Math.ceil(store.total/store.per_page) ){
            Sp.message("已经是最后一页了","error");
            return;
        }
        var data = {
            "task_id": this.props.id,
            "size": store.per_page,
            "page":store.current_page+1
        };
        actions.onNextPage(data);
    },
    onPrevPage: function(){
        var store = getStore();
        if(store.current_page==1){
            Sp.message("已经是第一页了","error");
            return;
        }
        var data = {
            "task_id": this.props.id,
            "size": store.per_page,
            "page":store.current_page-1
        };
        actions.onNextPage(data);
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
 * 优惠券详情
 */
var couponDetail = React.createClass({
    getInitialState: function(){
        var store = getStore();
        return {
            "init": store.init
        }
    },
    renderScopeBtn: function(){
        var store = getStore();
        var coupon_detail = store.detail;
        if(coupon_detail == null || coupon_detail ==undefined){
            return '';
        }
        if(+coupon_detail.scope == 1){
            return <ScopeModal id={coupon_detail.category_ids} scope={coupon_detail.scope} />
        }
        if(+coupon_detail.scope == 2){
            return <ScopeModal id={coupon_detail.goods_ids} scope={coupon_detail.scope} />
        }
    },
    render: function(){
        var self = this;
        var store = getStore();
        var coupon_detail = store.detail;
        if(coupon_detail == null || coupon_detail ==undefined){
            coupon_detail = {};
        }
        var channel_show , type_show , status_show ,requirement_show

        ,   scopeNames = {
            0: '全场',
            1: '类目',
            2: '商品'
        };

        var scopeArray = [
            {
                id:0,
                name:'全场'
            },
            {
                id:1,
                name:'类目'
            },
            {
                id:2,
                name:'商品'
            }
        ];


        /*渠道*/
        switch(coupon_detail.channel){
            case 1:
                channel_show = 'PC端';
                break;
            case 2:
                channel_show = '移动端APP';
                break;
            case 3:
                channel_show = 'PC端+移动端APP';
                break;
            case 4:
                channel_show = '移动端M站';
                break;
            case 5:
                channel_show = 'PC端+移动端M站';
                break;
            case 6:
                channel_show = '移动端APP+移动端M站';
                break;
            case 7:
                channel_show = 'PC端+移动端APP+移动端M站';
                break;
        }
        /*派发形式*/
        switch(coupon_detail.type){
            case 0:
                type_show = '用户领取';
                break;
            case 1:
                type_show = '人工派发';
                break;
            case 2:
                type_show = '自动派发';
                break;
            case 3:
                type_show = '线下派发';
                break;
        }
        /*状态*/
        switch(coupon_detail.status){
            case 0:
                status_show = '未启用';
                break;
            case 1:
                status_show = '已启用';
                break;
            case 2:
                status_show = '已禁用';
                break;
        }
        /*条件*/
        switch(coupon_detail.requirement){
            case 0:
                requirement_show = '无';
                break;
            case 1:
                requirement_show = '有';
                break;
        }
        /*优惠券类型*/
        var diacount_type = '';
        switch(parseInt(coupon_detail.discount_type)){
            case 0:
                diacount_type = '满减券';
                break;
            case 1:
                diacount_type = '折扣券';
                break;
            case 2:
                diacount_type = '安装服务卡';
                break;
            case 3:
                diacount_type = '退货保障卡';
                break;
        }
        /*title show*/
        var value_title = '面额';
        var coupon_value = coupon_detail.value;
        var value_node = '';
        if(parseInt(coupon_detail.discount_type)==1){
            value_title = '折扣率(%)';
            coupon_value = coupon_value.split('.')[1];
        }
        value_node =  value_title+':'+  coupon_value;
        if(parseInt(coupon_detail.discount_type)==2||parseInt(coupon_detail.discount_type)==3){
            value_node = '';
        }
        var coupon_number = coupon_detail.number;
        var number_node = '';
        number_node = '数量:'+coupon_number;
        if(parseInt(coupon_detail.type)==1||parseInt(coupon_detail.type)==2){
            number_node = '';
        }

        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                    <tr>
                        <th width="15%" style={{textAlign:'center'}}>卡券名称</th>
                        <th width="8%" style={{textAlign:'center'}}>适用范围</th>
                        <th width="8%" style={{textAlign:'center'}}>适用渠道</th>
                        <th width="8%" style={{textAlign:'center'}}>卡券类型</th>
                        <th width="10%" style={{textAlign:'center'}}>派发形式</th>
                        <th width="15%" style={{textAlign:'center'}}>领取时间</th>
                        <th width="15%" style={{textAlign:'center'}}>生效时间</th>
                        <th width="13%" style={{textAlign:'center'}}>状态</th>
                        <th width="15%" style={{textAlign:'center'}}>使用条件</th>
                    </tr>
                </thead>

                <tbody width="100%">
                    <tr>
                        <td width="15%" style={{textAlign:'center'}}>
                           <div>{coupon_detail.name}</div>
                            <div>{value_node}</div>
                            <div>{number_node}</div>
                           领取数量: {coupon_detail.received}<br/>
                        </td>
                        <td width="8%" style={{textAlign:'center'}}>
                            {scopeNames[coupon_detail.scope]}
                            {this.renderScopeBtn()}
                        </td>
                        <td width="8%" style={{textAlign:'center'}}>{channel_show}</td>
                        <td width="8%" style={{textAlign:'center'}}>{diacount_type}</td>
                        <td width="10%" style={{textAlign:'center'}}>{type_show}</td>
                        <td width="15%" style={{textAlign:'center'}}>
                            {coupon_detail.start_at}<br/>
                            至<br/>
                            {coupon_detail.end_at}
                        </td>
                        <td width="15%" style={{textAlign:'center'}}>
                           {coupon_detail.valid_time_start_at}<br/>
                            至<br/>
                           {coupon_detail.valid_time_end_at}
                        </td>
                        <td width="13%" style={{textAlign:'center'}}>{status_show}</td>
                        <td width="15%" style={{textAlign:'center'}}>{requirement_show}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
});


/**
 * 单条优惠券码
 */
var couponItem = React.createClass({

    render: function(){
        var self = this;
        var item = this.props.item;
        if(item.member == null||item.member == undefined){
            item.member = {};
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="10%" style={{textAlign:'center'}}>{item.id}</td>
                            <td width="8%" style={{textAlign:'center'}}>{item.code}</td>
                            <td width="13%" style={{textAlign:'center'}}>{item.receive_at}</td>
                            <td width="10%" style={{textAlign:'center'}}>{item.member.name}</td>
                            <td width="13%" style={{textAlign:'center'}}>{item.use_at}</td>
                            <td width="13%" style={{textAlign:'center'}}><a href={ '#/app/orderDetail/'+item.order_id }>{item.order_no}</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

/**
 * 优惠券码列表
 */
var couponList = React.createClass({
    render: function () {
        var store = getStore();
        var list = store.list;
        var $ItemNode = list.map(function(item){
            return (
                <couponItem key={item.id} item={item}></couponItem>
            )
        });
        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                <tr>
                    <th width="10%" style={{textAlign:'center'}}>卡券码</th>
                    <th width="8%" style={{textAlign:'center'}}>兑换码</th>
                    <th width="13%" style={{textAlign:'center'}}>领取时间</th>
                    <th width="10%" style={{textAlign:'center'}}>用户</th>
                    <th width="13%" style={{textAlign:'center'}}>使用时间</th>
                    <th width="13%" style={{textAlign:'center'}}>订单号</th>
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
    mixins: [FluxMixin,StoreWatchMixin("promotionCouponDetailStore")],
    getStateFromFlux: function() {
        return getStore();
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
                                            <Row>
                                                <Col xs={12}>
                                                    <Row style={{marginBottom: '20'}}>
                                                        <a href="#/promotion/coupon/list">
                                                            <Button type='submit' bsStyle='blue' className="fl" style={{marginLeft:'24'}}>返回卡券列表</Button>
                                                        </a>
                                                        <div className="fr hidden" style={{marginRight:'27'}}>
                                                            <a href="" className="fr">导出二维码</a>
                                                            <a href="" className="fr" style={{marginRight:'45'}}>查看二维码</a>
                                                        </div>
                                                    </Row>
                                                    <div className="order-list-box">
                                                        <couponDetail id={this.props.id}></couponDetail>
                                                    </div>
                                                    <hr/>
                                                    <div className="order-list-box">
                                                        <couponList id={this.props.id}></couponList>
                                                    </div>
                                                    <div className="foot-box">
                                                        <PagesBar id={this.props.id} state={self.state}></PagesBar>
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
        var store = getStore();

        actions.onGetCouponDetail(this.props.id);

        var data = {
            "task_id": this.props.id,
            "size": store.per_page,
            "page":store.current_page
        };
        actions.onGetCoupon(data);
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id} flux = {flux}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
