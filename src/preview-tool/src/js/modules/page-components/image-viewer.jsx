// 简单图片浏览组件
'use strict';

import Img from 'modules/components/img';
import { Popover } from 'antd';

export default class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'ImageViewer';
  }
  render() {
    if (!this.props.images) {
      return null;
    }

    return (
      <div className="image-viewer">
        <p className="thumbs">
          {
            this.props.images.map(function (image, index) {
              let content = (
                <Img src={image} w={this.props.w} h={this.props.h}
                  style={{height: this.props.h}} />
              );
              return (
                <Popover key={index} overlay={content} trigger="click">
                  <Img src={image} w={60} h={60}/>
                </Popover>
              );
            }.bind(this))
          }
        </p>
      </div>
    );
  }
}
ImageViewer.propsTypes = {
  images: React.PropTypes.array,
  w: React.PropTypes.number,
  h: React.PropTypes.number
};
ImageViewer.defaultProps = {
  images: [],
  w: 400,
  h: 400
};
