/** @jsx React.DOM */
/*会员管理*/

var Fluxxor = require("fluxxor");

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/updatePswStore.jsx');
//
var classSet = React.addons.classSet;


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('updatePsw')],
    getInitialState: function () {

    },
    componentDidMount: function () {

    },
    cancel: function(){
        $('#old_psw').val('');
        $('#new_psw').val('');
        $('#sure_psw').val('');
    },
    save: function(){
        var old_psw = $('#old_psw').val();
        var new_psw = $('#new_psw').val();
        var sure_psw = $('#sure_psw').val();
        if(sure_psw!=new_psw){
            Sp.message('确定密码和新密码不一致哦!', 'error');
            return false;
        }
        var data = {
            old_password: old_psw,
            new_password: sure_psw
        }
        liteFlux.action("updatePsw").updatePassword(data);
    },
    render: function () {
      return (
          <Container id='body'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <PanelContainer>
                    <Panel>
                      <PanelBody>
                          <Form horizontal style={{paddingTop:'100',paddingBottom:'130'}}>
                              <FormGroup>
                                  <Label className='right_padding' sm={5}>旧密码:</Label>
                                  <Col sm={7}>
                                      <Input id='old_psw' type='password'  placeholder='' className='inline'/>
                                  </Col>
                              </FormGroup>
                              <FormGroup>
                                  <Label className='right_padding' sm={5}>新密码:</Label>
                                  <Col sm={7}>
                                      <Input id='new_psw' type='password'  placeholder='' className='inline'/>
                                  </Col>
                              </FormGroup>
                              <FormGroup>
                                  <Label className='right_padding' sm={5}>确定密码:</Label>
                                  <Col sm={7}>
                                      <Input id='sure_psw' type='password'  placeholder='' className='inline'/>
                                  </Col>
                              </FormGroup>
                              <FormGroup style={{marginLeft:'120',marginTop:'30'}}>
                                  <Col className='right_padding' sm={5}>
                                      <Button bsStyle='primary' onClick={this.save}>保存</Button>
                                  </Col>
                                  <Col sm={7}>
                                      <Button bsStyle='primary' onClick={this.cancel}>取消</Button>
                                  </Col>
                              </FormGroup>
                          </Form>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid>
          </Container>
      );
    }
});
var BootstrapTables = React.createClass({
  mixins: [SidebarMixin],
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

module.exports = BootstrapTables;
