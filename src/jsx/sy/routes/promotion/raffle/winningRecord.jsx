/** @jsx React.DOM */
/*抽奖列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/promotion/raffle/raffleResultStore.jsx');
//
var classSet = React.addons.classSet;

var getResultParams = function (lottery_id, page) {
    var keyword = $("#search_key_word").val() || ''

    lottery_id = lottery_id || window.record_lottery_id;
    window.record_lottery_id = lottery_id;

    var data = {
        'lottery_id': lottery_id,
        "keyword": keyword.trim(),
        'begin_at': $("#begin_at").val(),
        'end_at': $("#end_at").val(),
        "page": page || 1,
        "size": 10
    };

    return data;
}

var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.result;
        var page = source.current_page
        ,   lottery_id = this.props.id;

        var diff = {
            'previous': -1,
            'next': 1
        }

        page += diff[type];

        liteFlux.action("result").getRaffleResultList(getResultParams(lottery_id, page));
    }
};


/**
 * 时间筛选
 */
var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            start_date: moment().subtract(6, 'months'), // 6个月前
            end_date: moment()
        }
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            end_date: date
        });
        $("#end_at").val(time_end_at);
    },
    changeStartTime: function(date){
        var time_start_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            start_date: date
        });
        $("#begin_at").val(time_start_at);
    },
    componentDidMount: function(){

    },
    search: function(){
        liteFlux.action("result").getRaffleResultList(getResultParams());
    },
    render: function(){
        return (
            <div className="fr">
                <div className="clearfix">
                    <div className="fl mr10">
                        活动时间：
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
                    <Button type='submit' bsStyle='blue' className="fl" onClick={this.search}>确定</Button>
                </div>
            </div>
        )
    }
});


/**
 * 搜索框
 */
var SearchBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('result')],
    onSearch: function(e){
        liteFlux.action("result").getRaffleResultList(getResultParams());
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


var List = React.createClass({
    render: function () {
        var item = this.props.data;
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="10%">{item.member_name}</td>
                            <td width="6%" className='text_center'>{item.prize_name}</td>
                            <td width="15%" className='text_center'>{item.win_at}</td>
                            <td width="15%" className='text_center'>{item.consignee} - {item.mobile} - {item.address}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('result'), HandleMixins, ModalMixins],
    getInitialState: function () {

    },
    componentDidMount: function () {
        var lottery_id = this.props.id
        liteFlux.action("result").getRaffleResultList(getResultParams(lottery_id));
    },
    componentWillReceiveProps: function(props) {
        var lottery_id = props.id || this.props.id
        liteFlux.action("result").getRaffleResultList(getResultParams(lottery_id));
    },

    render: function () {
        var _this = this;
        var source = this.state.result || null;

        if(source.data == null || source.data == undefined)
            return false;

        var list = source.data;

        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={_this.handleSearch.bind(null,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <div className="search-box">
                                                <div>
                                                    <a className="a_none_underline" href="#/promotion/raffle/raffleList">
                                                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回抽奖列表</Button>
                                                    </a>
                                                </div>
                                                <Grid>
                                                    <Row className='hidden-print' style={{marginBottom: 20}}>
                                                        <Col xs={7}>
                                                            <SearchBar uid={this.props.uid}></SearchBar>
                                                        </Col>
                                                        <Col xs={5} style={{paddingTop: 0}}>
                                                            <TimeFilter></TimeFilter>
                                                            <input id='begin_at' type="hidden"/>
                                                            <input id='end_at' type="hidden"/>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="10%">用户名</th>
                                                        <th width="6%" className='text_center'>奖品</th>
                                                        <th width="15%" className='text_center'>中奖时间</th>
                                                        <th width="15%" className='text_center'>收货信息</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, i) {
                                                            return (
                                                                <List
                                                                    key={i}
                                                                    data={item}
                                                                    >
                                                                </List>
                                                            )
                                                        })
                                                    }
                                                    </tbody>
                                                </Table>
                                            </Grid>
                                            <hr/>
                                            {pagerNode()}
                                        </div>
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
                <Body id={this.props.id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
