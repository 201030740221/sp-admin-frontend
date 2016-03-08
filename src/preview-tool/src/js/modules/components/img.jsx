'use strict';

/**
 * Img, 图片，提供缩略图地址
 * @tofishes
 * @type {[type]}
 * @usage:
 * <Img src="原图地址" w={100} h={100} />
 */
var getThumb = function (img_url, width, height, quality) {
  quality = quality || 100;

  if (!width && !height) {
    return img_url;
  }

  var query = '?imageView2/2';

  if (width) {
    query += '/w/' + width;
  }

  if (height) {
    query += '/h/' + height;
  }

  query += '/q/' + quality;

  return img_url + query;
};
var getSmallThumb = function (img_url) {
  return getThumb(img_url, 100, 100);
};
var getTinyThumb = function (img_url) {
  return getThumb(img_url, 50, 50);
};
var Img = React.createClass({
  propTypes: {
    'w': React.PropTypes.number,
    'h': React.PropTypes.number
  },

  getDefaultProps: function () {
    return {'w': null, 'h': null};
  },

  render: function () {
    var src = getThumb(this.props.src, this.props.w, this.props.h);

    return (<img {...this.props} src={src}/>);
  }

});

module.exports = Img;
