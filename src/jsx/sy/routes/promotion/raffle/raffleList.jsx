/** @jsx React.DOM */
/*抽奖列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/promotion/raffle/raffleStore.jsx');
//
var classSet = React.addons.classSet;


var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.raffle;
        var page = source.current_page;
        switch (type) {
            case 'previous':
                page = page - 1;
                break;
            case 'next':
                page = page + 1;
                break;
            default :
                page = 1;
                break;
        }
        var value = $("#search_key_word").val();
        var data = {
            "keyword": value,
            'begin_at':$("#begin_at").val(),
            'end_at':$("#end_at").val(),
            'status':isNaN(parseInt($('#status_select').val()))?-1:parseInt($('#status_select').val()),
            "page": page,
            "size": 10
        };
        liteFlux.action("raffle").getRaffleList(data);
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
            start_date: moment('2015-01-01'),
            end_date:  moment()
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
        this.props.searchSource();
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
 * 状态筛选
 */
var StatusBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('raffle')],
    onChangeStatus: function(e){
        this.props.searchSource();
    },
    render: function(){
        return (
            <Select id='status_select' onChange={this.onChangeStatus} className="wa fl mr0">
                <option value="-1">全部状态</option>
                <option value="2">已结束</option>
                <option value="1">进行中</option>
                <option value="0">未开始</option>
            </Select>
        )
    }
});

/**
 * 搜索框
 */
var SearchBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('raffle')],
    onSearch: function(e){
        this.props.searchSource();
    },
    render: function(){
        return (
            <div className="fl mr30">
                <Input id="search_key_word" className="wa fl mr10" type='text' placeholder='请输入关键字' />
                <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fl" style={{marginLeft:'20'}}>搜索</Button>
            </div>
        )
    }
});


var List = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('raffle')],

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
    deleteHandle: function(id){
        var source = this.state.raffle;
        var page = source.current_page;
        var data = {
            "id": this.props.rid,
            "page": page,
            "size": 10
        };
        ModalManager.create(this.showModal('您确定要删除?','操作提示', function(){
            liteFlux.action("raffle").deleteRaffle(id,data);
        }));
    },
    render: function () {
        var item = this.props.data;
        /*状态*/
        var status_show = '';
        switch(parseInt(item.status)){
            case 0:
                status_show = '未启用';
                break;
            case 1:
                status_show = '进行中';
                break;
            case 2:
                status_show = '已结束';
                break;
        };
        var rule = item.rule;
        for(var i=0; i<rule.length; i++){
            var rule =  rule.replace('<br/>',' ');
        }
        var rule_str =rule;
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="10%">{item.name}</td>
                            <td width="12%" className='text_center'>{rule_str}</td>
                            <td width="15%" className='text_center'>{item.begin_at} ~ {item.end_at}</td>
                            <td width="8%" className='text_center'>{status_show}</td>
                            <td width="15%" className='text_center'>
                                <a className="a_none_underline" href={'#/promotion/raffle/raffleUpdate/'+item.id}><BLabel bsStyle='info'>查看编辑</BLabel></a>
                                <a className="a_none_underline" href={'#/promotion/raffle/winningRecord/'+item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>记录</BLabel></a>
                                <a className="a_none_underline" href='javascript:;'><BLabel className='label-danger' bsStyle='info' onClick={this.deleteHandle.bind(null,item.id)} style={{marginLeft:'15'}}>删除</BLabel></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('raffle'), HandleMixins, ModalMixins],
    getInitialState: function () {

    },
    searchSource: function(){
        var value = $("#search_key_word").val();
        var data = {
            "keyword": value,
            'begin_at':$("#begin_at").val(),
            'end_at':$("#end_at").val(),
            'status':isNaN(parseInt($('#status_select').val()))?-1:parseInt($('#status_select').val()),
            "page": 1,
            "size": 10
        };
        liteFlux.action("raffle").getRaffleList(data);
    },
    componentDidMount: function () {
        this.searchSource();
    },
    componentWillReceiveProps: function(props) {
        this.searchSource();
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },

    render: function () {
       var _this = this;
        var source = this.state.raffle || null;
        if(source.data == null || source.data == undefined)
            return false;
        /*模拟数据*/
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
                                                    <a className="a_none_underline" href="#/promotion/raffle/raffleCreate">
                                                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>创建抽奖活动</Button>
                                                    </a>
                                                </div>
                                                <Grid>
                                                    <Row className='hidden-print' style={{marginBottom: 20}}>
                                                        <Col xs={7}>
                                                            <SearchBar uid={this.props.uid} searchSource = {this.searchSource}></SearchBar>
                                                            <StatusBar searchSource = {this.searchSource}></StatusBar>
                                                        </Col>
                                                        <Col xs={5} style={{paddingTop: 0}}>
                                                            <TimeFilter searchSource = {this.searchSource}></TimeFilter>
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
                                                        <th width="12%" className='text_center'>描述(规则)</th>
                                                        <th width="15%" className='text_center'>时间</th>
                                                        <th width="8%" className='text_center'>状态</th>
                                                        <th width="15%" className='text_center'>操作</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, i) {
                                                            return (
                                                                <List
                                                                    rid = {_this.props.id}
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
