/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/list/index.coffee');
var Action = Store.getAction();
var storeName = 'spots-list';

var SimpleDatePicker = require('../../../widgets/datepicker/SimpleDatePicker.jsx');

var scene_status = {
    '-1': '请选择场景状态',
    '0': '未开始',
    '1': '进行中',
    '2': '空档期',
    '3': '已结束'
},  scene_status_array = [];

for (var value in scene_status) {
    scene_status_array.push({
        'value': value,
        'name': scene_status[value]
    })
}
scene_status_array.sort(function (a, b) {
    return a - b;
});

var Filter = React.createClass({
    getInitialState: function () {
        return this.props || {};
    },
    queryList: function () {
        this.props.queryList.call(this, this.state);
    },
    render: function () {
        return (
            <Row>
                <Col xs={3}>
                    <Input type='text' placeholder='请输入关键词' className='inline' style={{width:'240'}}/>
                </Col>
                <Col xs={3}>
                    <span className="fl">场景状态：</span>
                    <Select id='status_select' onChange={this.onChangeStatus} className="wa fl mr0">
                        {
                            scene_status_array.map(function (status) {
                                return <option value={status.value}>{status.name}</option>
                            })
                        }
                    </Select>
                </Col>
                <Col xs={3}>
                    起止时间：
                    <SimpleDatePicker name="start-date" initDate={null}/>{' '} 至 {' '}
                    <SimpleDatePicker/>
                </Col>

                <Col xs={3}>
                    <Button onClick={this.queryList} bsStyle='primary'>查询</Button>
                </Col>
            </Row>
        )
    }
});


/**
 * 分页
 */
var PagesBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('spots-list')],
    searchData: function(page){
        var store = this.state['spots-list']
        var params = {
            'size': store.per_page,
            'page': page
        }

        this.props.queryList(params)
    },
    onNextPage: function(){
        var store = this.state['spots-list']

        if( store.current_page == Math.ceil(store.total/store.per_page) ){
            Sp.message("已经是最后一页了","error");
            return;
        }

        this.searchData(store.current_page+1);
    },
    onPrevPage: function(){
        var store = this.state['spots-list']

        if(store.current_page==1){
            Sp.message("已经是第一页了","error");
            return;
        }

        this.searchData(store.current_page-1);
    },
    render: function(){
        return (
            <Pager>
                <Page onClick={this.onPrevPage} previous >上一页</Page>{' '}
                <Page onClick={this.onNextPage} next>下一页</Page>
            </Pager>
        )
    }
});

var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('spots-list')],
    getInitialState: function() {
        return {
            'gamesInfo': {}
        }
    },
    componentDidMount: function () {
        this.queryList()
    },

    creatSpot: function () {
        RRouter.routing.navigate('/promotion/spots/create');
    },
    editSpot: function (id) {
        RRouter.routing.navigate('/promotion/spots/' + id);
    },
    viewRecords: function (id, gameid) {
        RRouter.routing.navigate('/promotion/spots/' + id + '/scenes/' + gameid + '/logs');
    },
    viewWinners: function (id, gameid) {
        RRouter.routing.navigate('/promotion/spots/' + id + '/scenes/' + gameid + '/winners');
    },
    deleteSpot: function (id, index) {
        if (!confirm('确定要删除该活动吗？')) {
            return;
        }

        var spotsListState = this.state['spots-list']
        webapi.spots.removeSpot(id).then(function (res) {
            if (res.code != 0) {
                Sp.message('删除失败！', 'error');
                return;
            }

            spotsListState.data.splice(index, 1);

            this.setState({
                'spots-list': spotsListState
            })
        }.bind(this));
    },

    queryList: function (params) {
        var _this = this;

        Action.getSpotList(params, function (spotsList) {
             _this.getGamesInfoBySpots(spotsList);
        })
    },
    getGamesInfoBySpots: function (spotsList) {
        var gamesInfo = {}
        ,   _this = this;

        // 未在接口返回，先循环拿取
        spotsList.forEach(function (spot) {
            (function (id) {
                webapi.spots.getScenesList(id).then(function (res) {
                    if (res.code == 0){
                        gamesInfo[id] = res.data.data;
                        _this.setState({
                            'gamesInfo': gamesInfo
                        });
                    } else {
                        onsole.error('Wrong! Get gameinfo of the spot id = ', id, ' Fail!')
                    }
                })
            })(spot.id);
        });
    },

    getGameStatus: function (game) {
        var now = Date.now()
        ,   begin = +moment(game.begin_at)
        ,   end = +moment(game.end_at)
        ,   status = 1; // 默认 进行中

        if (now < begin) {
            // 未开始
            status = 0
        } else if (now > end) {
            // 已结束
            status = 3
        }

        return scene_status[status]
    },

    getGameItems: function (spot) {
        var gamesInfo = this.state.gamesInfo
        ,   games = gamesInfo[spot.id];

        if (!games) {
            return (
                <tr>
                    <td colSpan="8">载入游戏场景列表中</td>
                </tr>
            )
        }

        if (!games.length) {
            return  (
                <tr>
                    <td colSpan={8}>还未添加游戏场景</td>
                </tr>
            )
        };

        return games.map(function (game, index) {

            return (
                <tr>
                    <td></td>
                    <td>{ game.title }</td>
                    <td>{ game.begin_at } ~ { game.end_at }</td>
                    <td>
                        { this.getGameStatus(game) }
                    </td>
                    <td>
                        <BLabel bsStyle='info' className="mr20 pointer" onClick={this.viewRecords.bind(this, spot.id, game.id)}>参与纪录</BLabel>
                        <BLabel bsStyle='info' className="pointer" onClick={this.viewWinners.bind(this, spot.id, game.id)}>中奖纪录</BLabel>
                    </td>
                </tr>
            )
        }.bind(this))
    },

    renderActivities: function () {
        var spotsList = this.state['spots-list'].data;

        if (!spotsList) {
            return '载入中';
        }

        if (spotsList.length == 0) {
            return '暂无相关活动';
        }

        return spotsList.map(function (spot, index) {

            return (
                <div style={{margin: '20px 0', background: '#e8e8e8'}}>
                    <div style={{padding: '20px 15px 0'}}>
                        <span className="mr20">编号： { spot.id }</span>
                        <span className="mr20">活动名称： { spot.title }</span>
                        {/* <span className="mr20">状态：</span> */}
                        <span className="fr">
                            <BLabel style={{marginLeft:'15'}} bsStyle='info' className="pointer" onClick={this.editSpot.bind(this, spot.id)}>查看/编辑</BLabel>
                            <BLabel style={{marginLeft:'15'}} bsStyle='info' className="pointer" onClick={this.deleteSpot.bind(this, spot.id, index)}>删除</BLabel>
                        </span>
                    </div>

                    <Table width="100%" className="bg-white mt20">
                        <thead className='bg-orange65 fg-white'>
                            <tr>
                                <th width="30"></th>
                                <th width="450">场景名称</th>
                                <th>游戏时间</th>
                                <th width="200">游戏状态</th>
                                <th width="200">操作</th>
                            </tr>
                        </thead>
                        <tbody id="goods-list-wrap">
                            { this.getGameItems(spot) }
                        </tbody>
                    </Table>
                </div>
            )
        }.bind(this));
    },

    render: function() {
        // TODO 暂时隐藏活动筛选功能
        return (
            <Container id='body'>
                <Grid>
                    {/*
                    <PanelContainer>
                        <Panel>
                            <PanelBody style={{padding: '25px'}}>
                                <Filter queryList={ this.queryList }/>
                            </PanelBody>
                        </Panel>
                    </PanelContainer>
                    */}
                    <PanelContainer>
                        <Panel>
                            <PanelBody style={{padding: '25px'}}>
                                <Button onClick={this.creatSpot} bsStyle='primary'>新建活动</Button>

                                { this.renderActivities() }

                            </PanelBody>
                        </Panel>
                    </PanelContainer>

                    <PagesBar queryList={this.queryList} />
                </Grid>

                { this.props.children }
            </Container>
        );
    }
});

var PageView = React.createClass({
    mixins: [SidebarMixin],
    getInitialState: function() {
        this.init(this.props);
        return {};
    },
    init: function(props){
        // Action.getNavigationList();
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
                <Body flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = PageView;
