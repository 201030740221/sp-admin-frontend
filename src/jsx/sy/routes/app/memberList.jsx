/** @jsx React.DOM */
/*会员管理*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');

var Actions = flux.actions.memberAction;
//
var classSet = React.addons.classSet;


var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.memberStore.list;
        var page = source.current_page;
        var keyword = this.refs.search.getValue() || "";
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
        Actions.onSearch({
            status: 1,
            page: page,
            keyword: keyword
        });
    },
    handleGetDetaile: function () {
        var item = this.member;
        var node = (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Form horizontal>
                            <FormGroup>
                                <Label control sm={3} htmlFor='title'>用户名</Label>
                                <Col sm={9}>{item.name}</Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3} htmlFor='category'>邮箱</Label>
                                <Col sm={9}>{item.email}</Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3}>手机</Label>
                                <Col sm={9}>{item.mobile}</Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3}>真实姓名</Label>
                                <Col sm={9}>{item.realname}</Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3}>出生日期</Label>
                                <Col sm={9}>{item.birthday}</Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
        ModalManager.create(this.showModal(node, '会员资料', function () {
        }));
    }
};

var List = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("memberStore"), HandleMixins, ModalMixins],
    getStateFromFlux: function () {
        var flux = this.getFlux();
        return {
            memberStore: flux.store("memberStore").getState()
        };
    },

    render: function () {
        var item = this.member = this.props.data,
            mobile_detail = item.mobile_detail || {},
            mobile_address = mobile_detail.mobile_area+mobile_detail.network_operator;

        var register_source = '';
        if(item.register_source == 0){
            register_source = '其它';
        }
        if(item.register_source == 1){
            register_source = 'pc';
        }
        if(item.register_source == 2){
            register_source = 'mobile';
        }
        return (
            <Row>
                <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}}>
                    <Col xs={1}>{item.name}</Col>
                    <Col xs={2}>{item.email}</Col>
                    <Col xs={1}>{item.mobile}</Col>
                    <Col xs={2}>{mobile_address}</Col>
                    <Col xs={1}>{register_source}</Col>
                    <Col xs={1}>{item.available_point}</Col>
                    <Col xs={2}>{item.created_at}</Col>
                    <Col xs={2} style={{textAlign:'center'}}>
                        <BLabel bsStyle='info' style={{cursor:'pointer',marginRight:'8'}} onClick={this.handleGetDetaile}>查看</BLabel>
                        <a className='a_none_underline' href={"#/app/orderList/"+item.id}><BLabel bsStyle='info' style={{marginRight:'8'}}>订单</BLabel></a>
                        <a className='a_none_underline' href={"#/app/memberPoint/"+item.id}><BLabel bsStyle='info' style={{marginRight:'8'}}>积分</BLabel></a>
                        <a className='a_none_underline' href={"#/app/memberRecommendList/"+item.id}><BLabel bsStyle='info' style={{marginRight:'8'}}>推荐</BLabel></a>
                        <a className='a_none_underline' href={"#/app/memberCoupon/"+item.id}><BLabel bsStyle='info'>卡券</BLabel></a>
                    </Col>
                </Col>
            </Row>
        )
    }
});


var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("memberStore"), HandleMixins, ModalMixins],
    getInitialState: function () {
        Actions.getMemberList();
    },
    getStateFromFlux: function () {
        return {
            memberStore: flux.store("memberStore").getState()
        };
    },

    getMemberList: function (e) {
        e.preventDefault();
        e.stopPropagation();
        Actions.getMemberList();
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },

    render: function () {
        var source = this.state.memberStore.list || null;
        var list = this.list = source ? (source.data || []) : [];
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
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <Grid>
                                                <Row className='hidden-print' style={{marginBottom:20}}>
                                                    <Col xs={4} style={{paddingTop: 0}}>
                                                    </Col>
                                                    <Col xs={1}>
                                                    </Col>
                                                    <Col xs={2}>
                                                    </Col>
                                                    <Col xs={3}>
                                                        <Input
                                                            value={this.keyword}
                                                            name='name'
                                                            type='text'
                                                            placeholder='用户名/邮箱/手机'
                                                            onChange={this.handleChange}
                                                            ref='search'/>
                                                    </Col>
                                                    <Col xs={2}>
                                                        <Button bsStyle='blue' onClick={this.handleSearch}>
                                                            搜索
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Row>
                                                    <Col xs={12} style={{padding:0}}>
                                                        <Col xs={1}>用户名</Col>
                                                        <Col xs={2}>邮箱</Col>
                                                        <Col xs={1}>手机</Col>
                                                        <Col xs={2}>号码归属地</Col>
                                                        <Col xs={1}>注册来源</Col>
                                                        <Col xs={1}>可用积分</Col>
                                                        <Col xs={2}>注册日期</Col>
                                                        <Col xs={2} style={{textAlign:'center'}}>操作</Col>
                                                    </Col>
                                                </Row>
                                                {
                                                    this.list.map(function (item, i) {
                                                        return (
                                                            <List
                                                                key={i}
                                                                data={item}
                                                                >
                                                            </List>
                                                        )
                                                    })
                                                }
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
                <Body flux={flux}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
