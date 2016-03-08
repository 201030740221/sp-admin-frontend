'use strict';

var Upload = require('rc-upload');
var message = antd.message;
var Dragger = antd.Upload.Dragger;

function getFileSizeM(bytes) {
  return bytes / 1000 / 1000;
}

var myComponent = React.createClass({
  getInitialState() {
    return {uploader: null};
  },
  componentDidMount() {
    var self = this;
    // 限制上传最大文件大小，单位M
    var maxSize = this.props.maxSize || 100;

    var props = {
      name: 'file',
      action: webapi.media.uploadAttachmentUrl,
      data: {
        _token: window.csrfToken || Cookie.get('XSRF-TOKEN'),
        entity: this.props.entity,
        entity_id: parseInt(this.props.entityId),
        type_id: parseInt(this.props.typeId) //0：封面，1：相册，3，内容
      },
      qiniuTokenParams: this.props.qiniuTokenParams || {},
      accept: 'video/mp4,image/*', //'i',
      multiple: true,
      onChange: function (info) {
        if (info.file.status === 'done') {
          if (self.props.success && info.file.response.code === 0) {
            self.props.success(info.file.response, info.file);
          }
          if (self.props.error && info.file.response.code === 1) {
            self.props.error(info.file.response.msg, info.file);
          }
        }
      },
      // onSuccess, onError是rc-upload所用属性
      // 若换回antd.upload，可以去掉这两个
      beforeUpload: function (file) {
        if (getFileSizeM(file.size) > maxSize) {
          message.error('超出文件大小限制，最大为' + maxSize + 'M');
          return false;
        }
      },
      onSuccess: function (res, file) {
        if (self.props.success) {
          self.props.success(res, file);
        }
      },
      onError: function (error, res, file) {
        if (self.props.error) {
          self.props.error(res, file);
        }
      },
      onProgress: function (progress, file) {
        if (self.props.progress) {
          self.props.progress(progress.percent, file, progress);
        }
      }
    };

    // 如果使用七牛直传
    if (this.props.useQiniu) {

      let token,
        domain;
      props.action = 'http://upload.qiniu.com/';
      props.data = {};

      // mime_type=3 才可以传图片加视频, mime_type=1只传图片，=2只传视频
      props.qiniuTokenParams.mime_type = 3;

      webapi.tools.getQiniuToken(props.qiniuTokenParams).then(function (res) {
        token = res.data.uptoken;
        domain = 'http://' + res.data.domain + '/';
        props.data.token = token;

        self.setState({uploader: props});

      });
    } else {

      props.action = webapi.media.uploadAttachmentUrl;

      this.setState({uploader: props});
    }

  },
  showCannotUploadTips() {
    message.error('无法上传，上传个数已达到限制. 请先删除图片');
  },
  renderUploader() {
    if (this.state.uploader) {
      if (this.props.draggable) {
        return (
          <Dragger {...this.state.uploader}>
            <p className="ant-upload-drag-icon">
              <i className="anticon anticon-inbox"></i>
            </p>
            <p className="ant-upload-text">点击或将文件拖拽到此区域上传</p>
            <p className="ant-upload-hint">严谨上传公司内部资料及其他违禁文件</p>
          </Dragger>
        );
      } else {
        // 是否条件允许上传
        if (this.props.canUpload) {
          return (
            <Upload {...this.state.uploader}>
              <button className="ant-btn ant-btn-ghost">
                <i className="anticon anticon-upload"></i>
                点击上传
              </button>
            </Upload>
          );
        } else {
          return (
            <button className="ant-btn ant-btn-ghost" onClick={this.showCannotUploadTips}>
              <i className="anticon anticon-upload"></i>
              点击上传
            </button>
          );
        }

      }
    } else {
      return <div>初始化上传组件...</div>;
    }
  },
  render() {
    return this.renderUploader();
  }
});
module.exports = myComponent;
