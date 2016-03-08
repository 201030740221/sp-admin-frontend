/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Progress = require('../../widgets/addGoodModule/progress.jsx');
var DefaultBox = require('../../widgets/addGoodModule/default.jsx');
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
            goodData: {
                id:null,
                category:0,
                title:"",
                subtitle: "",
                unit: 0,
                type: 0
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
        this.trigger("GetUnit");
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
                                                    <Progress step={this.state.progress.step} trigger={this.trigger} goodId={this.state.goodData.id}></Progress>
                                                    <Form horizontal>
                                                        <div style={{marginTop: 15}} className="good-form">
                                                        <DefaultBox trigger={this.trigger} parameter={this.state.parameter} units={this.state.units} data={this.state.goodData} activeSkuSpecification={this.state.activeSkuSpecification}></DefaultBox>
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
                <Body>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Forms;
