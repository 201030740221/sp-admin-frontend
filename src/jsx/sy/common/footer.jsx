/** @jsx React.DOM */

var Footer = React.createClass({
  getInitialState: function() {
    return {
      version: 0
    };
  },
  componentDidMount: function() {
    this.setState({
      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
    });
  },
  render: function() {
    return (
      <div>
        <Grid gutterBottom></Grid>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div>&copy;2014-2015 斯品家居</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Footer;
