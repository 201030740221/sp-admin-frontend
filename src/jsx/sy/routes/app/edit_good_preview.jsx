/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Progress = require('../../widgets/addGoodModule/progress.jsx');
var PreviewBox = require('../../widgets/addGoodModule/preview.jsx');

var events = require('../../widgets/addGoodModule/events.jsx');

var Body = React.createClass({
    mixins: [Sp.eventMixin],
    events: events,
    getInitialState: function () {
        return {
            progress: {
                step:3
            },
            goodData: {
                id:null,
                categoryId:0,
                title:"",
                subtitle: "",
                unit: 0,
                type: 0
            }
        }
    },
    getDefaultProps: function () {
        return {
            data:[]
        }
    },
    componentDidMount: function(){
        var goodData = this.state.goodData;
        goodData.id = this.props.queryId;
        this.setState(goodData);
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
                                                    <Progress step={this.state.progress.step} trigger={this.trigger} goodId={this.state.goodData.id} sku_sn={this.props.queryId}></Progress>
                                                    <Form horizontal>
                                                        <div style={{marginTop: 15}} className="good-form">
                                                        <PreviewBox trigger={this.trigger} data={this.state.goodData} sku_sn={this.props.queryId}></PreviewBox>
                                                        </div>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelBody>
                                    <PanelFooter className='bg-blue text-right'>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <br/>
                                                    <div>
                                                        <Button outlined bsStyle='lightblue'>发布商品</Button>
                                                    </div>
                                                    <br/>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelFooter>
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
