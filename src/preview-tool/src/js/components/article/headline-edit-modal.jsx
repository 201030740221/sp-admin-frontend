'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import MultiPurposeSelect from 'modules/multi-purpose-select-box/multi-purpose-select';
var Button = antd.Button;
var Input = antd.Input;

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
  getInitialState() {
    return {data: [], selectActive: false, link_article_id: null};
  },
  updateData(record) {
    let self = this;

    let media = [];
    if (record.cover) {
      media.push(record.cover.media.id);
    }
    // 准备产品图片数据
    var picture_data = [];
    if (record.cover) {
      picture_data.push({id: record.cover.media.id, url: record.cover.media.full_path});
    }

    let data = [
      {
        formData: [
          {
            type: 'custom',
            title: '文章ID',
            key: 'article_id',
            defaultValue: record.article_id || '',
            placeholder: '请输入文章 ID',
            render: function () {
              return (<MultiPurposeSelect value={record.article_id} onChange={this.onChange} />);
            }
          }, {
            type: 'input',
            title: '头条标题',
            key: 'title',
            defaultValue: record.title || '',
            placeholder: '请输入头条标题',
            tips: ''
          }, {
            type: 'custom',
            title: '头条图片',
            key: 'media',
            defaultValue: media,
            render: function () {
              return (<PictureUploadComponent
                data={picture_data}
                pictureLength="1"
                removeSuccess={null}
                uploadSuccess={null}
                useQiniu={true}/>);
            }
          }
        ]
      }
    ];

    self.setState({data: data});
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        link_article_id: nextProps.record.article_id || ''
      });
      this.updateData(nextProps.record);
    }
  },
  linkObject(item, type) {
    // 关联了对象
    this.setState({link_article_id: item.id, selectActive: false});

    this.updateData(this.props.record);
  },
  render: function () {
    let self = this;

    let actionButtons = [
      {
        title: ' 确 定 ',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (isValid) {
              var validData = validData[0];

              // 如果文章 ID 或者标题为空
              if (!validData.title || !validData.article_id) {
                SP.message.error('文章ID或者标题不能为空');
                return;
              }

              var postData = {
                title: validData.title,
                article_id: parseInt(validData.article_id),
                article_node_id: self.props.nodeId,
                cover_id: validData.media[0]
                  ? validData.media[0]
                  : 0,
                description: ''
              };

              if (self.props.record && self.props.record.id) {
                // 编辑
                webapi.article.editHeadlines(self.props.record.id, postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('编辑成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error(res.msg);
                  }
                });
              } else {
                // 新增
                webapi.article.addHeadlines(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('新增成功');
                    Event.emit('baselist-refresh');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error(res.msg);
                  }
                });
              }

            }
          });
        }
      }
    ];

    let modalProps = {
      title: '编辑头条',
      component: (
        <BaseForm data={this.state.data} actionButtons={actionButtons}/>
      ),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
