/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  mixins: [RoutingContextMixin],
  componentDidMount: function() {
    this.getRouting().navigate('/docs/installation');
  },
  render: function() {
    return (
      <Container id='body'>
        {this.props.children}
      </Container>
    );
  }
});

var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = React.addons.classSet({
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

module.exports = Page;
