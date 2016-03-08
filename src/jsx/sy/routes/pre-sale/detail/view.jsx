/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Preview = require('./preview.jsx');
var RemindLog = require('./remindLog.jsx');
var PreSaleLog = require('./preSaleLog.jsx');

var liteFlux = require('lite-flux');

//
var classSet = React.addons.classSet;


var Body = React.createClass({
    getInitialState: function(){
        return {
            source: {}
        }
    },
    componentDidMount: function () {

    },
    componentWillReceiveProps: function (props) {

    },
    render: function () {
        var _this = this,
            source = this.state.source;

        return (
            <Container id='body'>
                <div>
                    <a className="a_none_underline" href="#/preSale/list">
                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回预售列表</Button>
                    </a>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <TabList bsStyle='desaturateddarkblue75' listName='serviceRecord'>
                                            <Tab pane='Record:preview' active>活动详情</Tab>
                                            <Tab pane='Record:remind'>提醒记录</Tab>
                                            <Tab pane='Record:preSale'>预售记录</Tab>
                                        </TabList>
                                        <TabContent style={{paddingTop:'30'}}>
                                            <TabPane ref='Record:preview' active>
                                                <Preview
                                                    id={this.props.id}
                                                    goods_id = {this.props.goods_id}
                                                    />
                                            </TabPane>
                                            <TabPane ref='Record:remind'>
                                                <RemindLog
                                                    id={this.props.id}
                                                    />
                                            </TabPane>
                                            <TabPane ref='Record:preSale'>
                                                <PreSaleLog
                                                    id={this.props.id}
                                                    />
                                            </TabPane>
                                        </TabContent>
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
                <Body id={this.props.id} goods_id = {this.props.goods_id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
