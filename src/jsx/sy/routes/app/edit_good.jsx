/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Progress = require('../../widgets/addGoodModule/progress.jsx');
var DefaultBox2 = require('../../widgets/addGoodModule/default2.jsx');

var events = require('../../widgets/addGoodModule/events.jsx');

var Body = React.createClass({
    mixins: [Sp.eventMixin],
    events: events,
    getInitialState: function () {
        return {
            progress: {
                step:1
            },
            units:{},
            data:{
                goods:{},
                specification: []
            },
            parameter:[],
            activeSkuSpecification:[]
        }
    },
    getDefaultProps: function () {
        return {
            data:[]
        }
    },
    componentDidMount: function(){
        // 加载商品详情
        this.trigger("Load",this.props.queryId);
    },
    render: function () {
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <Progress step={this.state.progress.step} trigger={this.trigger} goodId={this.state.data.goods.id} sku_sn={this.props.queryId}></Progress>
                                                    <Form horizontal>
                                                        <div style={{marginTop: 15}} className="good-form">
                                                        <DefaultBox2 trigger={this.trigger} goodId={this.props.queryId} data={this.state.data} units={this.state.units} activeSkuSpecification={this.state.activeSkuSpecification}></DefaultBox2>
                                                        </div>
                                                    </Form>
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
        );
    }
});

var classSet = React.addons.classSet;
var Forms = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body queryId={this.props.id}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Forms;
