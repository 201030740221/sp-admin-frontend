'use strict';

import React from 'react';
import BaseModal from 'modules/page-components/base-modal';
import BaseForm from 'modules/page-components/base-form';
import PictureUploader from 'modules/picture-uploader/picture-uploader';

/* 图片上传 */
const PictureUploadComponent = React.createClass({
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

const Selector = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {},
  updateData(record) {
    let self = this;
    let media = [];
    if (record.cover && record.cover.media) {
      media.push(record.cover.media.id);
    }
    // 准备产品图片数据
    var picture_data = [];
    if (record.cover && record.cover.media) {
      picture_data.push({id: record.cover.media.id, url: record.cover.media.full_path});
    }

    let data = [
      {
        formData: [
          {
            type: 'input',
            title: '名称',
            key: 'name',
            defaultValue: record.name || '',
            placeholder: '请输入栏目名称',
            tips: ''
          }, {
            type: 'input',
            title: '链接',
            key: 'real_uri',
            defaultValue: record.real_uri || '',
            placeholder: '请输入栏目链接',
            tips: ''
          }
        ]
      }
    ];

    if (this.props.id) {
      data[0].formData.push({
        type: 'pictureUploader',
        title: '图片',
        key: 'attachment_id',
        defaultValue: media,
        placeholder: '',
        render: function () {
          return (<PictureUploadComponent
            data={picture_data}
            pictureLength='1'
            removeSuccess={null}
            uploadSuccess={null}
            useQiniu={true}/>);
        }
      });
    }

    self.setState({data: data});
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.updateData(nextProps.record);
    }
  },
  render: function () {
    let self = this;

    let actionButtons = [
      {
        title: '确定',
        onClick: (validator) => {
          validator((isValid, validData) => {
            if (isValid) {
              validData = validData[0];

              // 如果标题为空
              if (!validData.name) {
                SP.message.error('名称不能为空');
                return;
              }

              // 如果标题为空
              if (!validData.real_uri) {
                SP.message.error('链接不能为空');
                return;
              }

              var postData = {
                name: validData.name,
                real_uri: validData.real_uri
              };

              // 如果是子栏目
              if (this.props.id) {

                if (!validData.attachment_id.length) {
                  SP.message.error('图片不能为空');
                  return;
                }

                postData.parent_id = this.props.id;
                postData.attachment_id = validData.attachment_id[0];
              }

              if (self.props.record && self.props.record.id) {

                postData.id = self.props.record.id;
                postData.sort_id = self.props.record.sort_id;
                // 编辑
                webapi.navigation.updateNavigation(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('编辑成功');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('编辑失败:' + res.msg);
                  }
                });
              } else {
                // 新增
                webapi.navigation.createNavigation(postData).then(function (res) {
                  if (res && !res.code) {
                    SP.message.success('添加成功');
                    self.props.setModalVisible(false);
                  } else {
                    SP.message.error('添加失败:' + res.msg);
                  }
                });
              }

            }
          });
        }
      }
    ];

    let modalProps = {
      title: '编辑栏目',
      component: (<BaseForm data={this.state.data} actionButtons={actionButtons}/>),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 500,
      bottomBar: false // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
