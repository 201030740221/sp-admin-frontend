/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/member/coupon.jsx');

//
var classSet = React.addons.classSet;


var MainItem = React.createClass({
    render: function(){
        var item = this.props.item || {};
        item.task = item.task || {};
        item.member = item.member || {};

        /*渠道*/
        var channel_show = '';
        switch(parseInt(item.task.channel)){
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
                channel_show = '移动端-M站';
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
        /*卡券类型*/
        var diacount_type = '';
        switch(parseInt(item.task.discount_type)){
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
        /*使用条件*/
        var requirement = '';
        if(item.task.requirement == 0){
            requirement = '无';
        }
        if(item.task.requirement == 1){
            requirement = '满'+item.task.threshold+'使用';
        }
        var coupon_value = item.task.value;
        if(parseInt(item.task.discount_type)==1){
            coupon_value = coupon_value.split('.')[1]+'%';
        }

        var scopeNames = {
            0: '全场',
            1: '类目',
            2: '商品'
        };

        return (
            <tr key={item.id}>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="8%" className='text_center'>{item.task.name}</td>
                            <td width="8%" className='text_center'>{diacount_type}</td>
                            <td width="6%" className='text_center'>{scopeNames[item.task.scope]}</td>
                            <td width="6%" className='text_center'>{coupon_value}</td>
                            <td width="6%" className='text_center'>{requirement}</td>
                            <td width="10%" className='text_center'>{channel_show}</td>
                            <td width="10%" className='text_center'>
                                <p>{item.valid_time_start_at}</p>
                                <p>-</p>
                                <p>{item.valid_time_end_at}</p>
                            </td>
                            <td width="10%" className='text_center'>{item.use_at}</td>
                            <td width="10%" className='text_center'><a href={ '#/app/orderDetail/'+item.order_id }>{item.order_no}</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('memberCoupon')],
    getInitialState: function () {
        return {
            active: 'tab_nav_btn',
            activeNone1: 'tab_nav_btn active',
            activeNone2: 'tab_nav_btn',
            source: {},
            type: 'unused'
        }
    },
    search: function(id,page,type){
        var _this = this;
        var request_data = {
            size: 10,
            page: page,
            member_id: id,
            type: type
        };
        liteFlux.action('memberCoupon').getMemberCouponList(request_data,function(data){
            _this.setState({
                source: data
            })
        });
    },
    componentDidMount: function () {
        var member_id = this.props.id;
        var type = 'unused';
        this.search(member_id,1,type);
    },
    componentWillReceiveProps: function(props) {
        var member_id = props.id;
        var type = 'unused';
        this.search(member_id,1,type);
    },
    showHandle: function(e){
        var el = e.target;
        var id = el.id;
        var _this = this;
        var member_id = this.props.id;
        if(id=='main'){
            _this.setState({
                active: 'tab_nav_btn active',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn'
            });
            _this.setState({
                type: 'outdated'
            });
            this.search(member_id,1,'outdated');
        }
        if(id=='status1'){
            _this.setState({
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn active',
                activeNone2: 'tab_nav_btn'
            });
            _this.setState({
                type: 'unused'
            });
            this.search(member_id,1,'unused');
        }
        if(id=='status2'){
            _this.setState({
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn active'
            });
            _this.setState({
                type: 'used'
            });
            this.search(member_id,1,'used');
        }
    },
    handleSearch: function(source,type){
        var page = source.current_page;
        if(type=='previous'){
            page = page-1;
        }
        if(type=='next'){
            page = page+1;
        }
        var member_id = this.props.id;
        var type = this.state.type;
        this.search(member_id,page,type);
    },
    render: function () {
        var _this = this,
            source = this.state.source;
        var list = source.data || [];
        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,source,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={_this.handleSearch.bind(null,source,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };
        var activeNode = (
            <div>
                <div>
                    <Table striped>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="8%" className='text_center'>卡券名称</th>
                            <th width="8%" className='text_center'>卡券类型</th>
                            <th width="6%" className='text_center'>适用范围</th>
                            <th width="6%" className='text_center'>金额/折扣率</th>
                            <th width="6%" className='text_center'>使用条件</th>
                            <th width="10%" className='text_center'>适用渠道</th>
                            <th width="10%" className='text_center'>有效时间</th>
                            <th width="10%" className='text_center'>使用时间</th>
                            <th width="10%" className='text_center'>使用订单</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            list.map(function(item,key){
                                return (
                                   <MainItem item={item} key={item.id}></MainItem>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
                <hr/>
                {pagerNode()}
            </div>
        );


        /*tab nav*/
        var tab_nav=(
            <div style={{marginLeft:'25',position:'relative'}}>
                <span className={_this.state.activeNone1} id='status1' onClick={_this.showHandle}>未使用</span>
                <span className={_this.state.activeNone2} id='status2' onClick={_this.showHandle}>已使用</span>
                <span className={_this.state.active} id='main' onClick={_this.showHandle}>已过期</span>
                <span className='number-content' style={{left:'66'}}>({source.unused_count})</span>
                <span className='number-content' style={{left:'167'}}>({source.used_count})</span>
                <span className='number-content' style={{left:'267'}}>({source.outdated_count})</span>
                <span style={{clear:'both'}}></span>
            </div>
        );
        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <div>
                        <a className="a_none_underline" href="#/app/memberList">
                            <Button type='submit' bsStyle='blue' style={{margin:'24'}}>返回会员列表</Button>
                        </a>
                    </div>
                    {tab_nav}
                    <Grid>
                        <Row>
                            <Col xs={12}>
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
