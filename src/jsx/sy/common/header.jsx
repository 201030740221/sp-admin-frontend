/** @jsx React.DOM */
var Actions = flux.actions.loginAction;

var Brand = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <NavHeader>

            </NavHeader>
        );
    }
});

var Navigation = React.createClass({
    logout: function(e){
        e.preventDefault();
        e.stopPropagation();
        Actions.logout({});
    },
    updateHandle: function(e){
        e.preventDefault();
        e.stopPropagation();
        RRouter.routing.navigate('/app/updatePsw');
    },
    render: function() {
        return this.transferPropsTo(
            <NavContent className='pull-right'>
                <Nav>
                    <NavItem href='#'>
                        <div className=""  onClick={this.updateHandle}>修改密码</div>
                    </NavItem>
                    <NavItem className='logout' href='#'>
                        <Icon bundle='fontello' glyph='off-1' onClick={this.logout} />
                    </NavItem>
                </Nav>
            </NavContent>
        );
    }
});

var Header = React.createClass({
    islogin: function(){
        var self = this;

        self.setState({
            islogin: true
        });

    },
    getInitialState: function(){
        return {
            islogin:false
        }
    },
    componentDidMount: function() {
        this.islogin();
    },
    render: function() {
        return this.transferPropsTo(
            <Grid id='navbar'>
                <Row>
                    <Col xs={12}>
                        <NavBar fixedTop id='rubix-nav-header'>
                            <Container fluid>
                                <Row>
                                    <Col xs={3} visible='xs'>
                                        <SidebarBtn />
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <Brand />
                                    </Col>
                                    <Col xs={3} sm={8}>
                                        <Navigation />
                                    </Col>
                                </Row>
                            </Container>
                        </NavBar>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Header;
