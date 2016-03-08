'use strict';

const myComponent = React.createClass({
  componentDidMount() {
    let fix_height = function () {
      let h = $('#home-preview-topbar').height();
      $('#preview').attr('height', (($(window).height()) - h - 5) + 'px');
    };

    $(window).on('resize', function () {
      fix_height();
    }).resize();
  },
  render() {
    return (
      <iframe frameBorder="0" height="" id={this.props.id} src={this.props.url} width="100%"></iframe>
    );
  }
});

module.exports = myComponent;
