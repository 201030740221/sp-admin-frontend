/** @jsx React.DOM */

/**
 * 售后申请列表
 * @type {Header|exports}
 */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var Actions = flux.actions.csListActions;
var Store = flux.store("csListStore").getState;

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
        Actions.onChangeEndAt(date);
    },
    changeStartTime: function(date){
        this.setState({
            start_date: date
        });
        Actions.onChangeBeginAt(date);
    },
    componentDidMount: function(){
        var store = Store();
        this.setState({
            start_date: store.begin_at,
            end_date:  store.end_at
        });
    },
    render: function(){
        return (
            <div className="fl mr10">
                <div className="clearfix">
                    <div className="fl mr10">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='Click to select a date'
                            selected={this.state.start_date}>
                        </DatePicker>
                    </div>
                    <div className="fl mr10 f12">
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
                </div>
            </div>
        )
    }
});

/**
 * 分页
 */
var PagesBar = React.createClass({
    onNextPage: function(){

        var state = Store();

        if( state.frontCurPage== Math.ceil(state.total/state.showPage) ){
            Sp.message("已经是最后一页了","error");
            return;
        }
        Actions.onNextPage();
    },
    onPrevPage: function(){
        var state = Store();

        if(state.frontCurPage==1){
            Sp.message("已经是第一页了","error");
            return;
        }
        Actions.onPrevPage();
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
 * 服务类型筛选
 */
var ServiceBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
        Actions.onTypeFilter(value);
    },
    render: function(){
        return (
            <Select onChange={this.onChangeStatus} className="wa fl mr10">
                <option value="0">选择服务类型</option>
                <option value="1">退货</option>
                <option value="2">换货</option>
                <option value="3">维修</option>
            </Select>
        )
    }
});

/**
 * 状态筛选
 */
var StatusBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
        Actions.onStatusFilter(value);
    },
    render: function(){
        return (
            <Select onChange={this.onChangeStatus} className="wa fl mr10">
                <option value="0">选择售后状态</option>
                <option value="1">等待审核</option>
                <option value="2">通过审核</option>
                <option value="3">审核不通过</option>
                <option value="4">退货处理中</option>
                <option value="5">上门换新</option>
                <option value="6">上门维护</option>
                <option value="7">已完成</option>
                <option value="8">已取消</option>
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
        Actions.onSearch(value);
    },
    render: function(){
        return (
            <div className="fl mr30">
                <Input
                    id="search_key_word"
                    className="wa fl mr10"
                    type='text'
                    placeholder='请输入关键字' />
                <Button
                    onClick={this.onSearch}
                    type='submit'
                    bsStyle='blue'
                    className="fl" >搜索</Button>
            </div>
        )
    }
});

/**
 * 单条列表
 */
var ListItem = React.createClass({
    render: function(){
        var data = this.props.data;
        return (
            <tr>
                <td colSpan="12">
                    <table width="100%">
                        <tr>
                            <td width="50"></td>
                            <td width="100">{data.id}</td>
                            <td width="200">{data.order_no}</td>
                            <td width="150">{data.name}</td>
                            <td width="200">{data.created_at}</td>
                            <td width="100">{data.type}</td>
                            <td width="*">{data.reason}</td>
                            <td width="100">{data.status}</td>
                            <td width="100" style={{textAlign:"center"}}>
                                <a href={"#/app/customerServiceDetail/"+data['id']}>
                                    <BLabel bsStyle='info'>查看</BLabel>
                                </a>{' '}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

/**
 * 列表
 */
var CsList = React.createClass({
    getList: function(page){
        var state = Store();
        var start = parseInt(page)==1?0:state.showPage*(page-1);
        var end = state.showPage*page;
        var list = state.list.filter(function(item){
            if(state.status_id>0 && state.type_id>0){
                if(state.status_id<4)
                    return (item.audit_id == state.status_id) && (item.type_id == state.type_id);
                else if(state.status_id<7){
                    // if(state.status===4){
                    //     return state.status_id === 1 && (item.type_id == state.type_id);
                    // }else if(state.status===5){
                    //     return state.status_id === 2 && (item.type_id == state.type_id);
                    // }else if(state.status===6){
                    //     return state.status_id === 3 && (item.type_id == state.type_id);
                    // }
                    return (item.type_id == (state.status_id-3)) && (item.type_id == state.type_id);
                }else if(state.status_id<9)
                    return (item.status_id == (state.status_id-3)) && (item.type_id == state.type_id);
            }else if(state.status_id>0){
                if(state.status_id<4)
                    return item.audit_id == state.status_id;
                else if(state.status_id<7)
                    return item.type_id == (state.status_id-3);
                else if(state.status_id<9)
                    return item.status_id == (state.status_id-3);
            }else if(state.type_id>0){
                return item.type_id == state.type_id;
            }
            return item;
        });
        list = list.slice(start,end);
        if( !state.init || (page>state.curPage)){
            Actions.onGetList(state.begin_at,state.end_at,page,this.props.uid);
        }
        return list;
    },
    render: function () {
        var self = this;

        var list = this.getList(self.props.frontCurPage);

        var $ItemNode = list.map(function(item){
            return (
                <ListItem key={item.id} data={item}></ListItem>
            )
        });
        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                    <tr>
                        <th width="50"></th>
                        <th width="100">服务单号</th>
                        <th width="200">原订单号</th>
                        <th width="150">用户名</th>
                        <th width="200">申请时间</th>
                        <th width="100">服务类型</th>
                        <th width="*">申请原因</th>
                        <th width="100">售后状态</th>
                        <th width="100">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {$ItemNode}
                </tbody>
            </Table>
        )
    }
});

//<CsList uid={this.props.uid} flux={flux} state={store}></CsList>
//<PagesBar flux={flux} state={store}></PagesBar>

var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("csListStore")],
    getStateFromFlux: function() {
        return Store();
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
                                                    <h4 style={{paddingBottom:45}} className="list-title border-bottom-gray clearfix">
                                                        <span className="fl list-title__text">售后申请列表</span>
                                                        <div className="fr">
                                                            <ServiceBar />
                                                            <StatusBar />
                                                            <TimeFilter />
                                                            <SearchBar />
                                                        </div>
                                                    </h4>
                                                    <div className="cs-list-box">
                                                        <CsList uid={this.props.uid} frontCurPage={this.state.frontCurPage} />
                                                    </div>
                                                    <div className="foot-box">
                                                        <PagesBar></PagesBar>
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
        )
    }
});

var ListPage = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = React.addons.classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body uid={this.props.uid} flux={flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = ListPage;
