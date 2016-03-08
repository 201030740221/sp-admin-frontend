/** @jsx React.DOM */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/tags/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-tags';

var Category = require('./category.jsx');
var CreateModal = require('./createModal.jsx');

var Body = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        return {

        };
    },
    renderHeader: function(){
        var store = this.state[storeName];
        var _this = this;
        var list = store.list;
        if(list && list.length >= 20){
            return ''
        }
        return (
            <Button xs bsStyle='info' className="ml10 mt10 mb10" onClick={ModalManager.create.bind(this, this.getCreateModal())}>新建属性标签分类</Button>
        )
    },
    createCategory: function(data){
        Action.createTagCategory(data);
    },
    getCreateModal: function(){
        return (
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>新建属性标签分类</h4>
                </ModalHeader>
                <ModalBody>
                    <CreateModal ok={this.createCategory}></CreateModal>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='default' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    },
    renderCategoryList: function(){
        var store = this.state[storeName];
        var _this = this;
        var list = store.list;
        if(!list || !list.length){
            return ''
        }
        // console.log(list)
        // return <List items={items}></List>
        var ids = list.map(function(item, i){
            return item.id
        });
        return <Category items={ids}></Category>
    },
    render: function() {
        console.log(this.state);
        var store = this.state[storeName];
        var _this = this;
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelHeader>
                                        {this.renderHeader()}
                                    </PanelHeader>
                                    <PanelBody>
                                        <Well xs className="width-100-ipt user-select-none bg-desaturateddarkblue75">
                                            <Grid>
                                                <Row>
                                                    <Col xs={2} className="text_center">
                                                        分类名称
                                                    </Col>
                                                    <Col xs={9} className="text_center">
                                                        标签列表
                                                    </Col>
                                                    <Col xs={1} className="text_center">
                                                        操作
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </Well>
                                        {this.renderCategoryList()}
                                    </PanelBody>
                                    <PanelFooter className='bg-lightblue'>
                                    </PanelFooter>
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
        Action.getTagList();
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

module.exports = Page;
