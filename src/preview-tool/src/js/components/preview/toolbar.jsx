'use strict';

const myComponent = React.createClass({
  componentDidMount() {
    var fix_height = function () {
      var h = $('#home-preview-topbar').height();
      $('#preview').attr('height', (($(window).height()) - h - 5) + 'px');
    };
    $(window).on('resize', function () {
      fix_height();
    }).resize();
  },
  render() {
    return (
      <div className="home-preview-topbar" id="home-preview-topbar">
        <div className="inner-home-preview-topbar clearfix">
          <div className="home-preview-topbar-left-actions clearfix">
            {this.props.leftBar}
          </div>
          <div className="home-preview-topbar-right-actions clearfix">
            {this.props.rightBar}
          </div>
        </div>
      </div>
    );
  }
});
module.exports = myComponent;
