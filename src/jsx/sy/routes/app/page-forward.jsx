/** @jsx React.DOM */
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  getInitialState: function () {
    return {
      status: 200
    }
  },
  getDefaultProps: function () {
    return {
      pages: {
        'erp': '/static-admin/preview/erp.html', // 商品中心
        'content-manager': '/static-admin/preview/preview.html' // 页面内容管理
      }
    }
  },
  componentDidMount: function () {
    var pageName = this.props.pageName;
    var url = this.props.pages[pageName];

    if (url) {
      location.replace(url);
    } else {
      this.setState({
        'status': 404 
      })
    }
  },
  render: function() {
    var tip = {
      200: '跳转页面中...',
      404: '找不到页面名称为：' + this.props.pageName + ' 的地址'
    }
    ,   status = this.state.status;


    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody className='text-center'>
                    <p>{ tip[status] }</p>
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

var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    return (
      <Container id='container'>
        <Sidebar />
        <Header />
        <Body pageName={this.props.pageName}>
          <Footer />
        </Body>
      </Container>
    );
  }
});

module.exports = Page;
