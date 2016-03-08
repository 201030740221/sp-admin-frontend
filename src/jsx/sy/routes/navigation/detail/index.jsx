/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-detail';

var Parent = require('./parent.jsx');
var Children = require('./children.jsx');
var CreateModal = require('./createModal.jsx');

var Body = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        return {

        };
    },
    renderHeader: function(){
        return (
            <Button xs bsStyle='info' className="mt10 mb10" onClick={ModalManager.create.bind(this, this.getCreateModal())}>新建属性标签分类</Button>
        )
    },
    createNavigation: function(data){
        Action.createNavigation(data);
    },
    getCreateModal: function(){
        var store = this.state[storeName];
        var parent = store.parent;
        if(parent !=null){
            return (
                <Modal>
                    <CreateModal ok={this.createNavigation} data={{parent_id:parent.id}}></CreateModal>
                </Modal>
            );
        }
    },
    handlePublish: function(){
        Action.publish();
    },
    goToList: function(){
        RRouter.routing.navigate('/navigation/list');
    },
    render: function() {
        console.log(this.state);
        var store = this.state[storeName];
        var _this = this;
        return (
            <Container id='body'>
                <Grid style={{paddingTop: 12.5}}>
                    <Row>
                        <Col xs={1}>
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.goToList}>返回列表页</Button>{' '}
                        </Col>
                        <Col xs={10} className="text_center">
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.handlePublish}>发 布</Button>{' '}
                            <a className="mt10 mb10 ml20" href={host+"/api/page/index/preview"} target="_blank">预 览</a>
                        </Col>
                        <Col xs={1}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Parent />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="ionTabs" id="tabs_1" data-name="Tabs_Group_name">
                                <ul className="ionTabs__head">
                                    <li className="ionTabs__tab ionTabs__tab_state_active"><span className="f16">子栏目管理</span></li>
                                </ul>
                                <div className="ionTabs__body">
                                    <div className="ionTabs__item ionTabs__item_state_active">
                                        {this.renderHeader()}
                                        <Children />
                                    </div>
                                </div>
                            </div>
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
        Action.getNavigationList({id:props.id});
    },
    componentWillReceiveProps: function(props) {
        this.init(props);
    },
    componentWillUnmount: function() {
        Action.reset();
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

module.exports = Page;
