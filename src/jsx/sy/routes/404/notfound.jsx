/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
    render: function() {
        return (
            <Container id='body'>
                <Grid gutterBottom>
                    <Row>
                        <Col sm={12} className='text-center'>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <div>
                                                        <Icon style={{fontSize: 288, lineHeight: 1}} glyph='icon-mfizz-ghost' />
                                                    </div>
                                                    <h1 style={{marginBottom: 25, marginTop: 0}}>您打开的姿势不正确!</h1>
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
var PageNotFound = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        console.log('404');
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

module.exports = PageNotFound;
