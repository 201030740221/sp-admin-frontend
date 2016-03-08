/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/list/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-list';

var List = require('./list.jsx');
var ActiveList = require('./active-list.jsx');
var CreateModal = require('./createModal.jsx');

var Body = React.createClass({
    // mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        return {
            tab: 0
        };
    },
    onTab: function(i, e){
        var tab = this.state.tab;
        if(tab !== i){
            this.setState({
                tab: i
            });
        }
    },
    renderTab: function(){
        var _this = this;
        var tab = this.state.tab;
        return ['管理栏目','发布栏目'].map(function(item, i){
            var className = classSet({
                "ionTabs__tab": true,
                "ionTabs__tab_state_active": i == tab
            });
            return (
                <li className={className} key={i} onClick={_this.onTab.bind(null, i)}><span className="f16">{item}</span></li>
            )
        });
    },
    renderContent: function(){
        var tab = this.state.tab;
        var _this = this;
        return [0,1].map(function(item, i){
            var className = classSet({
                "ionTabs__item": true,
                "ionTabs__item_state_active": i == tab
            })
            var content = '';
            if(i == 0 && tab == 0){
                content = _this.renderTab0();
            }
            if(i == 1 && tab == 1){
                content = _this.renderTab1();
            }
            return (
                <div className={className} key={i}>
                    {content}
                </div>
            )
        });
    },
    renderTab0: function(){
        return (
            <div>
                {this.renderHeader()}

                <List />
            </div>
        )
    },
    renderTab1: function(){
        return (
            <div>
                <ActiveList />
            </div>
        )
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
        return (
            <Modal>
                <CreateModal ok={this.createNavigation}></CreateModal>
            </Modal>
        );
    },
    handlePublish: function(){
        Action.publish();
    },
    render: function() {
        console.log(this.state);
        // var store = this.state[storeName];
        var _this = this;
        return (
            <Container id='body'>
                <Grid style={{paddingTop: 12.5}}>
                    <Row>
                        <Col xs={12} className="text_center">
                            <Button xs bsStyle='success' className="mt10 mb10 mr20" onClick={this.handlePublish}>发 布</Button>{' '}
                            <a className="mt10 mb10 ml20" href={host+"/api/page/index/preview"} target="_blank">预 览</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="ionTabs" id="tabs_1" data-name="Tabs_Group_name">
                                <ul className="ionTabs__head">
                                    {this.renderTab()}
                                </ul>
                                <div className="ionTabs__body">
                                    {this.renderContent()}
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
                <Body>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Page;
