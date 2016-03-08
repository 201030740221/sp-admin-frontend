/** @jsx React.DOM */
/*推荐列表*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/memberRecommendStore.jsx');
//
var classSet = React.addons.classSet;

var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.memberRecommend;
        var page = source.current_page;
        switch (type) {
            case 'previous':
                page = page - 1;
                var data = {
                    "id": this.props.id,
                    "page": page,
                    "size": 10
                };
                liteFlux.action("memberRecommend").getMemberRecommend(data);
                break;
            case 'next':
                page = page + 1;
                var data = {
                    "id": this.props.id,
                    "page": page,
                    "size": 10
                };
                liteFlux.action("memberRecommend").getMemberRecommend(data);
                break;
            default :
                page = 1;
                break;
        }
    }
};

var List = React.createClass({
    render: function () {
        var item = this.props.data;
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="6%">{item.invitee.name}</td>
                            <td width="6%" style={{textAlign:'center'}}>{item.register_at}</td>
                            <td width="6%" style={{textAlign:'center'}}>{item.point}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('memberRecommend'), HandleMixins, ModalMixins],
    getInitialState: function () {

    },
    componentDidMount: function(){
        var data = {
            "id": this.props.id,
            "page": 1,
            "size": 10
        };
        liteFlux.action("memberRecommend").getMemberRecommend(data);
    },
    componentWillReceiveProps: function(props) {
        var data = {
            "id": props.id,
            "page": 1,
            "size": 10
        };
        liteFlux.action("memberRecommend").getMemberRecommend(data);
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    render: function () {
        var source = this.state.memberRecommend || null;
        if(source == null || source == undefined)
            return false;
        if(source.total == null || source.total == undefined)
            return false;
        var _this = this;
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
                <div>
                    <a className="a_none_underline" href="#/app/memberList">
                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回用户列表</Button>
                    </a>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <Grid>
                                                <Row className='hidden-print' style={{marginBottom:20}}>
                                                    <Col xs={6}>
                                                        <Col xs={6} style={{fontSize:'24'}}>推荐人数：{source.total} 人</Col>
                                                        <Col xs={6} style={{fontSize:'24',marginLeft:'-70'}}>所获积分：{source.total_points} 积分</Col>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="6%">用户名</th>
                                                        <th width="6%" style={{textAlign:'center'}}>注册时间</th>
                                                        <th width="6%" style={{textAlign:'center'}}>奖励积分</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        source.data.map(function (item, i) {
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
