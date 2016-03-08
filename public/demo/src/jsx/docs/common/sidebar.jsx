/** @jsx React.DOM */

var ApplicationSidebar = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>DOCUMENTATION</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-install' name='Installation' href='/docs/installation' />
                  <SidebarNavItem glyph='devicon-gulp-plain' name={<span>Gulpfile.js <BLabel className='bg-red fg-white'>6</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Basics' href='/docs/gulpfile/basics' />
                      <SidebarNavItem name='Sass to CSS' href='/docs/gulpfile/sass' />
                      <SidebarNavItem name='JSX to JS' href='/docs/gulpfile/jsx' />
                      <SidebarNavItem name='WebFonts' href='/docs/gulpfile/webfonts' />
                      <SidebarNavItem name='Scaffolding' href='/docs/gulpfile/scaffolding' />
                      <SidebarNavItem name='External Plugins' href='/docs/gulpfile/externalplugins' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-fontello-looped-square-interest' name={<span>Rubix <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='React' href='/docs/rubix/react' />
                      <SidebarNavItem name='Rubix - JSX' href='/docs/rubix/rubix-jsx' />
                      <SidebarNavItem name='Rubix - SASS' href='/docs/rubix/rubix-sass' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='devicon-bootstrap-plain' name={<span>Bootstrap <BLabel className='bg-darkblue fg-white'>7</BLabel></span>}>
                    <SidebarNav>
                      <SidebarNavItem name='Grid' href='/docs/bootstrap/grid' />
                      <SidebarNavItem name='Typography' href='/docs/bootstrap/typography' />
                      <SidebarNavItem name='Code' href='/docs/bootstrap/code' />
                      <SidebarNavItem name='Tables' href='/docs/bootstrap/tables' />
                      <SidebarNavItem name='Forms' href='/docs/bootstrap/forms' />
                      <SidebarNavItem name='Form Controls'>
                        <SidebarNav>
                          <SidebarNavItem name='Inputs' href='/docs/bootstrap/form_controls/inputs' />
                          <SidebarNavItem name='Textarea' href='/docs/bootstrap/form_controls/textarea' />
                          <SidebarNavItem name='Checkbox &amp; Radio' href='/docs/bootstrap/form_controls/checkradio' />
                          <SidebarNavItem name='Select' href='/docs/bootstrap/form_controls/select' />
                          <SidebarNavItem name='Buttons' href='/docs/bootstrap/form_controls/buttons' />
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem name='Components'>
                        <SidebarNav>
                          <SidebarNavItem name='Dropdowns' href='/docs/bootstrap/components/dropdowns' />
                          <SidebarNavItem name='Button Groups' href='/docs/bootstrap/components/button_groups' />
                          <SidebarNavItem name='Input Groups' href='/docs/bootstrap/components/input_groups' />
                          <SidebarNavItem name='Navs' href='/docs/bootstrap/components/navs' />
                          <SidebarNavItem name='Navbar' href='/docs/bootstrap/components/navbar' />
                          <SidebarNavItem name='Breadcrumbs' href='/docs/bootstrap/components/breadcrumbs' />
                          <SidebarNavItem name='Pagination' href='/docs/bootstrap/components/pagination' />
                          <SidebarNavItem name='Labels &amp; Badges' href='/docs/bootstrap/components/labels_and_badges' />
                          <SidebarNavItem name='Jumbotron' href='/docs/bootstrap/components/jumbotron' />
                          <SidebarNavItem name='Alerts' href='/docs/bootstrap/components/alerts' />
                          <SidebarNavItem name='Progress bars' href='/docs/bootstrap/components/progress-bars' />
                          <SidebarNavItem name='Media' href='/docs/bootstrap/components/media' />
                          <SidebarNavItem name='List Group' href='/docs/bootstrap/components/list-group' />
                        </SidebarNav>
                      </SidebarNavItem>
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-outlined-geolocalizator' name='Mozilla L20n.js' href='/docs/l20n' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var DummySidebar = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
});

var SidebarSection = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={12} id='avatar-col' className='text-center'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>DOCUMENTATION</div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id='sidebar-container'>
          <Sidebar key={0} active>
            <ApplicationSidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
});

module.exports = SidebarSection;
