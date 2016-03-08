/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/logs/index.coffee');
var Action = Store.getAction();
var storeName = 'spots-logs';
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');
var EditLogsModal = require('./edit-logs-modal.jsx');

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
    goToCheat: function(){
        var store = this.state[storeName];
        RRouter.routing.navigate('/promotion/spots/'+store.spotsId+'/scenes/'+store.scenesId+'/cheat');
    },
    publishConfirm: function(){
        var store = this.state[storeName];
        var _this = this;
        this.confirm({
            title: '确定最终排名',
            text: <HelpBlock>{'一旦确定排名和奖励将不能作废, 是否确定'}</HelpBlock>,
            ok: function(){
                Action.publishScenesWinners()
            }
        });
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
        if(store.type == 'logs'){
            var q = this.refs.q.getDOMNode().value || "";
            Action.getScenesLogs({
                page: page,
                q: q
            });
        }else{
            var t = this.refs.t.getDOMNode().value || "";
            var q = this.refs.q.getDOMNode().value || "";
            Action.getScenesWinners({
                t: +t >= 3 ? '' : t,
                q: q
            });
        }
    },
    removeLog: function(id, i){
        var store = this.state[storeName];
        var _this = this;
        this.confirm({
            title: '作废该记录',
            text: '一旦确定作废, 将不能恢复, 是否确定?',
            ok: function(){
                Action.removeScenesLogs(id, i);
            }
        });
    },
    renderWinnersList: function(){

        var store = this.state[storeName];
        var _this = this;
        var data = store.data || [];
        if(!data.length){
            return [];
        }
        return data.map(function(item, i){
            var btn = <Button sm bsStyle='danger' onClick={_this.removeLog.bind(null, item.id)}>作 废</Button>;

            return (
                <tr key={i}>
                    <td>
                        {item.member && item.member.name}
                    </td>
                    <td>
                        {item.member && item.member.mobile}
                    </td>
                    <td>
                        {item.scene && item.scene.title}
                    </td>
                    <td>
                        {item.position}
                    </td>
                    <td>
                        {item.prize}
                    </td>
                    <td>
                        {item.loot_at ? item.loot_at + ' 发放' : '未发放'}
                    </td>
                </tr>
            )
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
            if(store.scenesData && store.scenesData.looted_at != null){
                btn = '';
            }else{
                btn = <Button sm bsStyle='danger' onClick={_this.removeLog.bind(null, item.id, i)}>作 废</Button>;
            }

            return (
                <tr key={i}>
                    <td>
                        {item.member && item.member.name}
                    </td>
                    <td>
                        {item.member && item.member.mobile}
                    </td>
                    <td>
                        {item.scene && item.scene.title}
                    </td>
                    <td>
                        {item.created_at}
                    </td>
                    <td>
                        {item.result}
                    </td>
                    <td>
                        {item.deleted_at == null ? item.rank : '已作废'}
                    </td>
                    <td>
                        {item.deleted_at == null ? btn : '已作废'}{' '}
                        {item.deleted_at == null ? <EditLogsModal logs={item} /> : ''}{' '}
                    </td>
                </tr>
            )
        });
    },
    renderTable: function(){
        var store = this.state[storeName];

        if(store.type == 'logs'){
            return (
                <Table style={{marginBottom:0}}>
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>手机号码</th>
                            <th>场景</th>
                            <th>中奖时间（游戏开始时间）</th>
                            <th>游戏用时</th>
                            <th>排名</th>
                            <th>操作</th>
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
        }else if(store.type == 'winners'){
            return (
                <Table style={{marginBottom:0}}>
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>手机号码</th>
                            <th>场景</th>
                            <th>奖项</th>
                            <th>奖品</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderWinnersList()}
                    </tbody>
                </Table>
            )
        }
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

        var t = '';
        if(store.type == 'winners'){
            t = (
                <Col sm={3}>
                    <Select name='t' ref='t' defaultValue={'3'}>
                        <option value='0'>积分</option>
                        <option value='1'>卡券</option>
                        <option value='2'>实物奖</option>
                        <option value='3'>全部</option>
                    </Select>
                </Col>
            );
        }
        return (
            <FormGroup>
                <Grid style={{paddingTop: 12.5}}>
                    <Row>
                        <Col sm={3}>
                            <Input type='text' name='q' ref='q' placeholder='手机号/邮箱/用户名' defaultValue={''} />
                        </Col>
                        {t}
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
        var scenes = '';
        var winnersBtn = '';
        var logsBtn = '';
        var confirmResultsBtn = <span className="f12">(场景结束会才可以发布最终结果)</span>;
        if(store.type == 'logs'){
            type = '参与情况';
            winnersBtn = <Button xs bsStyle='info' className="mt10 mb10 mr20" onClick={this.goToWinners}>获奖情况</Button>
        }
        if(store.scenesData){
            scenes = store.scenesData.title;
            if(store.scenesData.looted_at != null){
                confirmResultsBtn = <span className="f12">(场景最终结果已发布)</span>;
            }else{
                if(moment(store.scenesData.end_at).isBefore(moment())){
                    confirmResultsBtn = <Button xs bsStyle='warning' className="mt10 mb10 mr20" onClick={this.publishConfirm}>确定最终结果</Button>
                }
            }
        }
        if(store.type == 'winners'){
            type = '获奖情况';
            logsBtn = <Button xs bsStyle='info' className="mt10 mb10 mr20" onClick={this.goToLogs}>参与情况</Button>
        }

        var cheatBtn = <Button xs bsStyle='info' className="mt10 mb10 mr20" onClick={this.goToCheat}>作弊修改记录</Button>
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.goToList}>返回列表</Button>{' '}
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.goToSpot}>返回活动详情</Button>{' '}
                            {winnersBtn}{' '}
                            {logsBtn}{' '}
                            {cheatBtn}{' '}
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
                                                    <h3>{'场景: '}{scenes}{' '}{type}{' '}{confirmResultsBtn}</h3>
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
        Action.setIds(props.spotsId, props.scenesId, props.logsType);
        switch (props.logsType) {
            case 'logs':
                Action.getScenesLogs();
                break;
            case 'winners':
                Action.getScenesWinners();
                break;
        }
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
