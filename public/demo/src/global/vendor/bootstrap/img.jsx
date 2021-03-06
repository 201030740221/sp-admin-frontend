/** @jsx React.DOM */

var classSet = React.addons.classSet;
var Img = React.createClass({
  propTypes: {
    circle: React.PropTypes.bool,
    rounded: React.PropTypes.bool,
    thumbnail: React.PropTypes.bool,
    responsive: React.PropTypes.bool
  },
  render: function() {
    var style={};
    var classes = classSet({
      'img-circle': this.props.circle,
      'img-rounded': this.props.rounded,
      'img-thumbnail': this.props.thumbnail,
      'img-responsive': this.props.responsive
    });
    if(!this.props.src.length) {
      this.props.src = 'public/imgs/blank.gif';
      style.backgroundColor = '#EEEEEE';
    }
    return this.transferPropsTo(
      <img className={classes} style={style} />
    );
  }
});

module.exports = Img;
