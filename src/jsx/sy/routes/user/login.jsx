/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var Actions = flux.actions.loginAction;

var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("loginStore")],
    getStateFromFlux: function() {
        return flux.store("loginStore").getState();
    },
    back: function(e) {
        e.preventDefault();
        e.stopPropagation();
        RRouter.routing.navigate('/');
    },
    login: function(e) {
        e.preventDefault();
        e.stopPropagation();
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();
        var remember = this.refs.remember.getChecked() ? 1 : 0;
        Actions.login({
            email: username,
            password: password,
            remember: remember
        });
    },
    handleFocus: function(){
        //console.log('focus');
        this.error = {};
        //console.log(this.state);
        //console.log(flux.store("loginStore").getState());

        /*Api.userApi.get('check',{}).done(function(res){
            console.log(res);
        });*/
    },
    /*componentWillMount: function() {
        $('html').addClass('authentication');
    },
    componentWillUnmount: function() {
        $('html').removeClass('authentication');
    },*/
    render: function() {
        return (
            <Container id='auth-container' className='login'>
                <Container id='auth-row'>
                    <Container id='auth-cell'>
                        <Grid>
                            <Row>
                                <Col sm={12}>
                                    <PanelContainer noControls>
                                        <Panel>
                                            <PanelBody style={{padding: 0}}>
                                                <div className='text-center bg-darkblue fg-white'>
                                                    <h3 style={{margin: 0, padding: 25}}>斯品后台</h3>
                                                </div>
                                                <div>
                                                    <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                                                        <Form onSubmit={this.login}>
                                                            <FormGroup>
                                                                <InputGroup lg>
                                                                    <InputGroupAddon>
                                                                        <Icon glyph='icon-fontello-mail' />
                                                                    </InputGroupAddon>
                                                                    <Input autoFocus ref="username" type='email' id='emailaddress' className='border-focus-blue' placeholder='请输入登录邮箱'
                                                                        onFocus={this.handleFocus}/>
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <InputGroup lg>
                                                                    <InputGroupAddon>
                                                                        <Icon glyph='icon-fontello-key' />
                                                                    </InputGroupAddon>
                                                                    <Input ref="password" type='password' id='password' className='border-focus-blue' placeholder='请输入登录密码'
                                                                        onFocus={this.handleFocus}/>
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Grid>
                                                                    <Row>
                                                                        <Col xs={6} collapseLeft collapseRight style={{paddingTop: 10}}>
                                                                            <Checkbox
                                                                                defaultChecked
                                                                                ref='remember'
                                                                                onChange={this.handleCheckboxChange}
                                                                                value={'remember'}
                                                                                name='remember'
                                                                            >remember</Checkbox>
                                                                        </Col>
                                                                        <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                                            <Button outlined lg type='submit' bsStyle='blue' onClick={this.login}>登录</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Grid>
                                                            </FormGroup>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </PanelBody>
                                        </Panel>
                                    </PanelContainer>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Container>
            </Container>
        );
    }
});

var LoginPage = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Body flux = {flux}/>
            </Container>
        );
    }
});

module.exports = LoginPage;
