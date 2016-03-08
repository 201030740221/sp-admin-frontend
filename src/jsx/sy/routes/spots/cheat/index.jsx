/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/cheat/index.coffee');
var Action = Store.getAction();
var storeName = 'spots-cheat-logs';
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');

var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],
    goToList: function(){
        RRouter.routing.navigate('/promotion/spots');
    },
    goToSpot: function(){
        var store = this.state[storeName];
        RRouter.routing.navigate('/promotion/spots/'+store.spotsId);
    },
    goToLogs: function(){
        var store = this.state[storeName];
        RRouter.routing.navigate('/promotion/spots/'+store.spotsId+'/scenes/'+store.scenesId+'/logs');
    },
    goToWinners: function(){
        var store = this.state[storeName];
        RRouter.routing.navigate('/promotion/spots/'+store.spotsId+'/scenes/'+store.scenesId+'/winners');
    },
    search: function(type){

        var store = this.state[storeName];
        var page = store.current_page;
        switch (type) {
            case 'prev':
                page = page - 1;
                break;
            case 'next':
                page = page + 1;
                break;
            default :
                page = page || 1;
                break;
        }
        var q = this.refs.q.getDOMNode().value || "";
        Action.getScenesCheatLogs({
            page: page,
            q: q
        });
    },
    renderLogsList: function(){

        var store = this.state[storeName];
        var _this = this;
        var data = store.data || [];
        if(!data.length){
            return [];
        }
        return data.map(function(item, i){
            var btn = '';

            return (
                <tr key={i}>
                    <td>
                        {item.created_at}
                    </td>
                    <td>
                        {item.log && item.log.member && item.log.member.name}
                    </td>
                    <td>
                        {item.log && item.log.member && item.log.member.mobile}
                    </td>
                    <td>
                        {item.old_result}
                    </td>
                    <td>
                        {item.new_result}
                    </td>
                    <td>
                        {item.cheater && item.cheater.name}{' '}
                        {item.cheater && item.cheater.email}
                    </td>
                </tr>
            )
        });
    },
    renderTable: function(){
        var store = this.state[storeName];

        return (
            <Table style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>操作时间</th>
                        <th>用户名</th>
                        <th>手机号码</th>
                        <th>修改前成绩(毫秒)</th>
                        <th>修改后成绩(毫秒)</th>
                        <th>操作人</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderLogsList()}
                    <tr>
                        <td colSpan={7}>
                            {this.renderPager()}
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    },
    renderPager: function(){
        var store = this.state[storeName];
        var _this = this;
        var prev = '';
        var next = '';
        if(store.data && store.data.length){
            if (store.current_page > 1){
                prev = <Button sm bsStyle='success' onClick={_this.prev}>上一页</Button>
            }

            if(store.current_page < store.last_page){
                next = <Button sm bsStyle='success' onClick={_this.next}>下一页</Button>
            }
        }
        return (
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col sm={3}>
                        {prev}
                    </Col>
                    <Col sm={6}>
                    </Col>
                    <Col sm={3}>
                        {next}
                    </Col>
                </Row>
            </Grid>
        )
    },
    prev:function(){
        this.search('prev');
    },
    next:function(){
        this.search('next');
    },
    renderSearchBar: function(){
        var store = this.state[storeName];

        return (
            <FormGroup>
                <Grid style={{paddingTop: 12.5}}>
                    <Row>
                        <Col sm={3}>
                            <Input type='text' name='q' ref='q' placeholder='手机号/邮箱/用户名' defaultValue={''} />
                        </Col>
                        <Col sm={3}>
                            <Button sm bsStyle='success' onClick={this.search}>搜 索</Button>{' '}
                        </Col>
                    </Row>
                </Grid>
            </FormGroup>
        )
    },
    renderScenesInfo: function(){
        var store = this.state[storeName];
        var _this = this;
        return null
    },
    render: function() {
        console.log(this.state);
        var store = this.state[storeName];
        var _this = this;

        if(store.scenesData == null){
            return <div>loading...</div>
        }

        var type = '';
        var scenes = store.scenesData.title;
        var winnersBtn = '';
        var logsBtn = '';
        winnersBtn = <Button xs bsStyle='info' className="mt10 mb10 mr20" onClick={this.goToWinners}>获奖情况</Button>
        logsBtn = <Button xs bsStyle='info' className="mt10 mb10 mr20" onClick={this.goToLogs}>参与情况</Button>
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.goToList}>返回列表</Button>{' '}
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.goToSpot}>返回活动详情</Button>{' '}
                            {winnersBtn}{' '}
                            {logsBtn}{' '}
                        </Col>
                    </Row>
                </Grid>
                {this.renderSearchBar()}

                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                                <Panel>
                                    <PanelHeader className='bg-darkgreen45 fg-white'>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <h3>{'场景: '}{scenes}{' 修改作弊记录'}</h3>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelHeader>
                                    <PanelBody>
                                        {this.renderTable()}
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        );
    }
});

var Page = React.createClass({
    mixins: [SidebarMixin],
    getInitialState: function() {
        this.init(this.props);
        return {};
    },
    init: function(props){
        Action.reset();
        Action.setIds(props.spotsId, props.scenesId);
        Action.getScenesCheatLogs();
        Action.getScenes();
    },
    componentWillReceiveProps: function(props) {
        this.init(props);
    },
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Page;
