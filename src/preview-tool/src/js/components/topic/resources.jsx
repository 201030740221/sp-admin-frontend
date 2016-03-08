'use strict';

import ZeroClipboard from 'zeroclipboard';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import ResourcesUploadModal from './resources-upload-modal';

const imageView = '?imageView2/2/w/200';
ZeroClipboard.config({swfPath: '/static-admin/preview/assets/ZeroClipboard.swf'});
var Resources = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [
    BaseModalMixin
  ],
  getInitialState: function () {
    return {resources: []};
  },
  getTopicSource: function () {

    let self = this;
    var params = { // 额外的请求参数
      topic_id: + self.props.params.id
    };

    webapi.topic.getTopicPicture(params).then(function (res) {
      if (res && !res.code) {
        self.setState({resources: res.data});
      } else {
        SP.message.error(res.msg);
      }
    });

  },

  setCopyInit: function () {

    $('.clip_btn').each(function () {

      let client = new ZeroClipboard($(this));
      var index_text = $(this).attr('data');

      client.on('ready', function (event) {
        client.clearData('text/plain');
        client.setData('text/plain', index_text);
        client.on('copy', function (event) {
          console.log(event, '++++');
          SP.message.success('复制成功');
          event.clipboardData.setData('text/plain', index_text);
        });

        client.on('aftercopy', function (event) {});
      });

      client.on('error', function (event) {
        console.log('ZeroClipboard error of type "' + event.name + '": ' + event.message);
        ZeroClipboard.destroy();
      });

    });
  },
  componentDidMount: function () {

    this.getTopicSource();

  },
  componentDidUpdate: function () {

    this.setCopyInit();

  },

  editItem: function () {},

  successHandle: function (source) {
    if (source) {
      this.getTopicSource();
    }
  },

  /*资源图片列表*/
  resourcesUpload: function () {

    let self = this;
    var params = { // 额外的请求参数
      topic_id: + self.props.params.id
    };

    let resourcesImgNode = null;
    let resources = this.state.resources;
    let pictureData = [];
    let dataId = [];

    resourcesImgNode = resources.map(function (item, index) {
      dataId.push(item.id);
      if (item.media) {
        pictureData.push({id: item.media.id, url: item.media.full_path});
        return (
          <div className='u-mb-10' key={index}>
            <img
              key={item.id}
              width="100"
              style={{
                marginRight: 10,
                Height: '70',
                border: '1px solid #eee'
              }}
              src={item.media.full_path + imageView}/>
          </div>
        );

      }
    });

    return (
      <div>
        <h3
          className='u-mb-15'
          style={{
            background: '#f3f3f3',
            paddingTop: '10',
            paddingBottom: '10',
            paddingLeft: '10'
          }}>资源列表</h3>
        <div className="u-mb-15" style={{
          color: '#E45F11',
          fontWeight: 'bold'
        }}>温馨提示：可选择上传图片或视频，视频格式为mp4，文件最大为100M。上传框内可进行文件删除操作。</div>
        <div className="row u-mb-10">
          <div className="col-3">
            <ResourcesUploadModal pictureData={pictureData} pictureLength={99} params={params} successCallBack={this.successHandle}>
              <div className="u-mb-10">
                <button type="button" className="ant-btn ant-btn-primary ant-btn-lg u-mb-10">
                  <i className="anticon anticon-upload u-mr-5"></i>上传媒体文件</button>
              </div>
              {resourcesImgNode}
            </ResourcesUploadModal>

          </div>

          <div className="col-21">
            {resources.map(function (item, index) {
              return (
                <div className="row u-mb-10" key={index}>
                  <div
                    className="col-20"
                    style={{
                      paddingLeft: '10',
                      marginTop: 30
                    }}>
                    <p style={{
                      color: '#2db7f5'
                    }}>{item.media.full_path}
                      <a
                        className="ant-btn ant-btn-lg u-mt-5 clip_btn u-ml-15"
                        style={{
                          fontSize: '12'
                        }}
                        data={item.media.full_path}>复制</a>
                    </p>
                  </div>
                  <div className="col-4"><img
                    key={item.id}
                    width="100"
                    style={{
                      visibility: 'hidden',
                      minHeight: '70'
                    }}
                    src={item.media.full_path + imageView}/></div>
                </div>

              );
            })
}
          </div>

        </div>

      </div>
    );
  },

  /*导出*/
  derivedHandle: function () {

    let self = this;
    /* var params= {  // 额外的请求参数
            topic_id: +self.props.params.id
        };

        webapi.topic.getTopicExport(params).then(function(res){
            if(res && !res.code){
                SP.message.success('导出成功');
            }else{
                SP.message.error(res.msg);
            }
        });*/

    let topic_id = +self.props.params.id;
    window.location.href = '/api/topic/pic/export?topic_id=' + topic_id;
    SP.message.success('导出成功');
  },
  return: function () {
    this.context.router.push('/topic');
  },

  render: function () {

    return (
      <div>
        <div style={{
          height: '60'
        }}>
          <button
            type="button"
            style={{
              float: 'right'
            }}
            className="ant-btn ant-btn-primary ant-btn-lg"
            onClick={this.derivedHandle}>导出全部地址为TXT</button>
          <button
            type="button"
            style={{
              float: 'right'
            }}
            className="ant-btn ant-btn-lg u-mr-10"
            onClick={this.return}>返回专题列表</button>
        </div>
        {this.resourcesUpload()}
      </div>
    );
  }
});

module.exports = Resources;
