'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import RequestProxy from 'modules/helpers/request-proxy';

/* 图片上传 */
var PictureUploadComponent = React.createClass({
  getInitialState: function () {
    let data = [];
    this.props.data.map(function (item) {
      data.push(item.id);
    });

    return {data: data};
  },
  onChange: function (data) {
    let res = [];
    data.map(function (item) {
      res.push(item.id);
    });

    if (this.props.onChange) {
      this.props.onChange(res);
    }
  },
  render: function () {
    return (<PictureUploader {...this.props} onChange={this.onChange}/>);
  }
});

var Selector = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {visible: false, data: []};
  },
  onShowModal: function () {
    this.setModalVisible(true);
  },
  onCloseModal: function (visible) {
    this.setModalVisible(visible);
    Event.emit('baselist-refresh');
  },
  componentDidMount: function () {},
  swapPicture: function (res) {
    if (this.props.successCallBack) {
      this.props.successCallBack(res);
    }
  },
  addPicture: function (res) {

    let self = this;
    let data = _.assign({
      media_ids: [res.id]
    }, this.props.params);

    if (self.props.isDetailPicture) {/*是否为详情页的图片，是的话不需要调用.createAttachment接口*/
      SP.message.success('添加图片成功');
      if (self.props.successCallBack) {
        self.props.successCallBack(self.props.pictureData);
      }
    } else {
      webapi.attachment.createAttachment(data).then(RequestProxy(function (res) {
        if (!self.state.visible) {
          Event.emit('baselist-refresh');
        }
        SP.message.success('添加图片成功');

        if (self.props.successCallBack) {
          self.props.successCallBack(self.props.pictureData);
        }

      }));

    }
  },
  removePicture: function (id) {

    let self = this;

    let postData = _.assign({
      media_ids: [id]
    }, this.props.params);

    if (self.props.isDetailPicture) {/*是否为详情页的图片，是的话不需要调用.Attachment接口*/
      SP.message.success('删除图片成功');
      if (self.props.successCallBack) {
        self.props.successCallBack(self.props.pictureData);
      }
    } else {
      webapi.attachment.removeAttachment(postData).then(RequestProxy(function (res) {
        if (!self.state.visible) {
          Event.emit('baselist-refresh');
        }
        SP.message.success('删除图片成功');

        if (self.props.successCallBack) {
          self.props.successCallBack(self.props.pictureData);
        }

      }));
    }

  },
  render: function () {
    let self = this;

    let selectBtn = (
      <a href="javascript:;" onClick={this.onShowModal}>{this.props.children || '添加图片'}</a>
    );

    let uploader = (<PictureUploadComponent
      data={self.props.pictureData}
      pictureLength={self.props.pictureLength}
      removeSuccess={self.removePicture}
      uploadSuccess={self.addPicture}
      callBackSwapData={self.swapPicture}
      useQiniu={true}
      sortable={this.props.sortable}
      onSort={this.props.onSort}/>);

    // let actionButtons = [{
    //     title: "保存图片",
    //     onClick: function(validator){
    //         validator(function(isValid, validData){
    //             if(isValid){
    //
    //                 let data = _.assign({
    //                     media_ids: validData[0].media
    //                 },self.props.params);
    //
    //                 if(self.props.dataId.length){
    //                     // 更新
    //                     data.ids = self.props.dataId;
    //                     webapi.attachment.updateAttachment(data).then(RequestProxy(function(res){
    //                         Event.emit('baselist-refresh');
    //                         SP.message.success('更新图片成功');
    //                         self.setModalVisible(false);
    //                     }));
    //                 }else{
    //                     // 创建
    //                     webapi.attachment.createAttachment(data).then(RequestProxy(function(res){
    //                         Event.emit('baselist-refresh');
    //                         SP.message.success('保存图片成功');
    //                         self.setModalVisible(false);
    //                     }));
    //                 }
    //
    //
    //             }
    //         });
    //     }
    // }];
    //

    let modalProps = {
      title: '编辑图片',
      component: uploader,
      setModalVisible: this.onCloseModal,
      visible: this.state.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return (
      <div>
        <BaseModal {...modalProps}/>
        {selectBtn}
      </div>
    );
  }
});

module.exports = Selector;
