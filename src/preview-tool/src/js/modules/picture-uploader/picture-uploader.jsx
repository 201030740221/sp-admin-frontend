'use strict';

var Popconfirm = antd.Popconfirm;
var message = antd.message;
import Uploader from 'modules/uploader/uploader';
import SortableMixin from 'modules/sortable/react-sortable-mixin';
var pid = Math.floor(Math.random() * 1000);
const imageView = '?imageView2/2/w/200';
var myComponent = React.createClass({
  mixins: [SortableMixin],

  sortableOptions: {
    ref: 'picture-list-' + pid,
    model: 'data'
  },
  getInitialState() {
    return {
      pictureLength: parseInt(this.props.pictureLength),
      entity: this.props.entity,
      entityId: this.props.entityId,
      typeId: this.props.typeId,
      data: this.props.data,
      percent: 0 // 上传进度
    };
  },
  getDefaultProps() {
    return {onSort: function (data) {}};
  },
  componentDidMount() {},
  componentWillReceiveProps(nextProps) {
    let newData = {};
    if (nextProps.pictureLength) {
      newData.pictureLength = parseInt(nextProps.pictureLength);
    }
    if (nextProps.entity) {
      newData.entity = nextProps.entity;
    }
    if (nextProps.entityId) {
      newData.entityId = nextProps.entityId;
    }
    if (nextProps.typeId) {
      newData.typeId = nextProps.typeId;
    }
    if (nextProps.data) {
      newData.data = nextProps.data;
    }

    this.setState(newData);
  },
  onDelPictureConfirm(id, index) {
    var self = this;
    var success = function () {
      var data = self.state.data;
      data.splice(index, 1);
      self.setState({data: data});
      if (self.props.removeSuccess) {
        self.props.removeSuccess(id);
      }

      if (self.props.onChange) {
        self.props.onChange(data);
      }

      message.success('删除成功');
    };

    // 如果removeable为 true，则物理删除
    if (this.props.removeable) {
      webapi.media.deleteAttachment({entity: this.props.entity, entity_id: this.props.entityId, type_id: this.props.typeId, media_ids: id}).then(function (res) {
        if (res && res.code === 0) {
          success();
        } else {
          message.success('删除失败');
        }
      });
    } else {
      success();
    }

  },
  onDelPictureCancel() {},
  uploadSuccess(response) {
    var self = this;
    var data = this.state.data;
    var id = this.props.useQiniu
      ? response.data.id
      : response.data[0].id;
    var url = this.props.useQiniu
      ? response.data.full_path
      : response.data[0].media.full_path;
    var media_id = this.props.useQiniu
      ? null
      : response.data[0].media.id;

    var _data = {
      id: id,
      url: url,
      media_id: media_id
    };

    data.push(_data);

    // 更新视图数据
    this.setState({
      data: data
    }, function () {

      if (self.props.uploadSuccess) {
        self.props.uploadSuccess(_data);
      }

      if (self.props.onChange) {
        self.props.onChange(data);
      }

      message.success('上传图片成功!');
    });

  },
  uploadError(err) {
    message.error('上传图片失败!');
    if (this.props.uploadError) {
      this.props.uploadError(err);
    }
  },

  handleSort(evt) {

    var data = this.state.data;
    var previewData = data;

    var oldData = _.assign({}, previewData[evt.oldIndex]);
    var newData = _.assign({}, previewData[evt.newIndex]);
    previewData[evt.oldIndex] = previewData[evt.newIndex];
    previewData[evt.oldIndex].id = oldData.id;
    previewData[evt.oldIndex].url = oldData.url;

    previewData[evt.newIndex] = oldData;
    previewData[evt.newIndex].id = newData.id;
    previewData[evt.newIndex].url = newData.url;

    this.setState({data: previewData});
    if (this.props.callBackSwapData) {
      this.props.callBackSwapData(previewData);
    }

    this.props.onSort(previewData);
  },
  renderItem(item, index) {
    return (
      <li key={index}>
        <Popconfirm
          title="确定要删除这个图片吗？"
          onConfirm={this.onDelPictureConfirm.bind(null, item.id, index)}
          onCancel={this.onDelPictureCancel.bind(null, item.id)}>
          <div className="picture-uploader-del-btn">
            <span className="anticon anticon-cross"></span>
          </div>
        </Popconfirm>
        <a target="_blank" href={item.url}>
          <img src={item.url + imageView}/>
        </a>
      </li>
    );
  },
  updateProgress: function (percent, file) {
    this.setState({percent: Number(percent).toFixed(0)});
  },
  renderUploader() {
    if (this.props.useQiniu) {
      return (<Uploader
        useQiniu={this.props.useQiniu}
        success={this.uploadSuccess}
        error={this.uploadError}
        canUpload={this.state.pictureLength > this.state.data.length}
        progress={this.updateProgress}/>);
    } else {
      return (<Uploader
        entity={this.props.entity}
        entityId={this.props.entityId}
        typeId={this.props.typeId}
        success={this.uploadSuccess}
        error={this.uploadError}
        canUpload={this.state.pictureLength > this.state.data.length}
        progress={this.updateProgress}/>);
    }
  },
  render() {
    var self = this;
    var progress = null;
    let sortable_desc = this.props.sortable
      ? <p style={{
        color: '#CA700A'
      }}>拖动以上图片进行排序</p>
      : '';

    if (this.state.percent > 0 && this.state.percent < 100) {
      progress = <span>
        已上传：{this.state.percent}%</span>;
    }

    return (
      <div className="picture-uploader">
        <div className="picture-uploader-action">
          {this.renderUploader()}
          {progress}
        </div>
        <div className="picture-uploader-pictures">
          <ul className="clearfix" ref={'picture-list-' + pid}>
            {this.state.data.map(function (item, index) {
              return self.renderItem(item, index);
            })}
          </ul>
        </div>
        {sortable_desc}
      </div>
    );
  }
});
module.exports = myComponent;
