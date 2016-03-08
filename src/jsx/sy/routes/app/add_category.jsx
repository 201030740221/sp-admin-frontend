/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>添加分类</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form horizontal>
                            <FormGroup>
                              <Label control sm={3} htmlFor='blockhelp'>分类名称</Label>
                              <Col sm={9}>
                                <Input type='text' id='blockhelp' className='inline' placeholder='' />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='dropdownselecthorizontal'>上级分类</Label>
                              <Col sm={9}>
                                <Select id='dropdownselecthorizontal' className='inline' defaultValue='0'>
                                  <option value='0'>请选择分类</option>
                                  <option value='1'>卧室</option>
                                  <option value='2'>&nbsp;&nbsp;&nbsp;&nbsp;床</option>
                                  <option value='3'>&nbsp;&nbsp;&nbsp;&nbsp;定制衣柜</option>
                                  <option value='4'>&nbsp;&nbsp;&nbsp;&nbsp;进口床垫</option>
                                  <option value='5'>&nbsp;&nbsp;&nbsp;&nbsp;床头柜</option>
                                  <option value='6'>客厅</option>
                                  <option value='7'>&nbsp;&nbsp;&nbsp;&nbsp;沙发</option>
                                  <option value='8'>&nbsp;&nbsp;&nbsp;&nbsp;茶几/边桌</option>
                                  <option value='9'>&nbsp;&nbsp;&nbsp;&nbsp;电视柜</option>
                                </Select>
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='blockhelp'>排序</Label>
                              <Col sm={9}>
                                <Input type='text' id='blockhelp' className='inline' placeholder='' value="50" />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3}>是否显示</Label>
                              <Col sm={9}>
                                <Radio value='option1' defaultChecked name='horizontal-radio-options'>
                                是
                                </Radio>
                                <Radio value='option2' name='horizontal-radio-options'>
                                否
                                </Radio>
                              </Col>
                              <hr/>
                            </FormGroup>
                            <FormGroup>
                              <Label control sm={3} htmlFor='textareahorizontal'>分类描述</Label>
                              <Col sm={9}>
                                <Textarea id='textareahorizontal' rows='3' placeholder='' />
                              </Col>
                            </FormGroup>
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
                            <Button outlined bsStyle='lightblue'>取消</Button>{' '}
                            <Button outlined bsStyle='lightblue'>提交</Button>
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

module.exports = Forms;
