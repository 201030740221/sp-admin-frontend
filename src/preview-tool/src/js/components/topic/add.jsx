'use strict';

import BaseForm from 'modules/page-components/base-form';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import CategorySelector from 'modules/category-selector/category-selector';
import SupplierSelector from 'modules/supplier-selector/supplier-selector';
import RequestProxy from 'modules/helpers/request-proxy';

var Select = antd.Select;
var Option = Select.Option;

//栏目与模板对应表
const templateIds = {
  1: 1,   // 造室
  2: 2,   // 有空
  3: 3    // 上心
};

/* 数组中插入 */
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function getTopicTemplate(id, callback) {
  let templateDir = 'http://' + window.location.host + '/static-admin/preview/assets/templates/topic-tpl' + id + '.html';
  $.ajax({url: templateDir}).done(function (res) {
    if (res) {
      callback(res);
    } else {
      SP.message.error('加载模板文件失败');
    }
  }).fail(function () {
    SP.message.error('加载模板文件失败');
  });
}

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

/* 添加专题 */
var AddPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {data: [], actionButtons: []};
  },
  setDetailData: function (detailData = {}) {
    let self = this;

    let media = [];
    if (detailData.thumb_pic_id) {
      media.push(detailData.thumb_pic_id);
    }
    // 准备产品图片数据
    var picture_data = [];
    if (detailData.thumb_pic) {
      picture_data.push({id: detailData.thumb_pic.id, url: detailData.thumb_pic.full_path});
    }

    // 加载默认模板
    getTopicTemplate(detailData.column_id || 1, function (tpl) {
      let data = [
        {
          formData: [
            {
              type: 'input',
              title: '专题标题',
              key: 'title',
              defaultValue: detailData.title || '',
              placeholder: '请输入专题名称',
              tips: '',
              validator: {
                required: true,
                message: {
                  required: '必填'
                }
              }
            }, {
              type: 'input',
              title: '副标题',
              key: 'sub_title',
              defaultValue: detailData.sub_title || '',
              placeholder: '请输入副标题',
              tips: ''
            }, {
              type: 'select',
              title: '栏目',
              key: 'column_id',
              defaultValue: detailData.column_id || '1',
              placeholder: '请选择栏目',
              disabled: detailData.column_id
                ? true
                : false,
              tips: '',
              values: [
                {
                  name: '造室',
                  key: 1,
                  disabled: false
                }, {
                  name: '有空',
                  key: 2,
                  disabled: false
                }, {
                  name: '上心',
                  key: 3,
                  disabled: false
                }
              ],
              onChange: function (id) {
                let saveStore = arguments[arguments.length - 1];
                getTopicTemplate(id, function (res) {
                  saveStore(0, 'content', res);
                });
              }
            }, {
              type: 'input',
              title: '作者',
              key: 'author',
              defaultValue: detailData.author || '',
              placeholder: '请输入作者',
              tips: ''
            }, {
              type: 'input',
              title: '来源',
              key: 'source',
              defaultValue: detailData.source || '',
              placeholder: '请输入来源',
              tips: ''
            }, {
              type: 'input',
              title: '关键字',
              key: 'keyword',
              defaultValue: detailData.keyword || '',
              placeholder: '请输入关键字',
              tips: '多个关键字请使用逗号分隔'
            }, {
              type: 'textarea',
              title: '专题简介',
              key: 'summary',
              defaultValue: detailData.summary || '',
              placeholder: '请输入专题简介',
              tips: ''
            }, {
              type: 'pictureUploader',
              title: '缩略图',
              key: 'thumb_pic_id',
              defaultValue: media,
              placeholder: '',
              render: function () {
                return (<PictureUploadComponent
                  data={picture_data}
                  pictureLength="1"
                  removeSuccess={null}
                  uploadSuccess={null}
                  useQiniu={true}/>);
              }
            }, {
              type: 'textarea',
              title: '专题内容',
              key: 'content',
              rows: 30,
              defaultValue: detailData.content || tpl,
              placeholder: ''
            }
          ]
        }
      ];

      let actionButtons = [
        {
          title: '保存并预览',
          onClick: function (validator) {
            validator(function (isValid, validData) {

              if (isValid) {

                if (!validData[0].content) {
                  SP.message.error('专题内容不能为空');
                  return;
                }

                let postData = {
                  column_id: validData[0].column_id,
                  title: validData[0].title,
                  sub_title: validData[0].sub_title,
                  author: validData[0].author,
                  source: validData[0].source,
                  keyword: validData[0].keyword,
                  summary: validData[0].summary,
                  thumb_pic_id: validData[0].thumb_pic_id[0],
                  content: validData[0].content,
                  template: templateIds[validData[0].column_id]
                };

                let host = 'http://' + location.host.replace('admin', 'www');
                if (!isEmptyObject(detailData)) {
                  webapi.topic.updateTopic(detailData.id, postData).then(RequestProxy(function (res) {
                    SP.message.success('专题编辑成功！');
                    let previewUrl = host + '/topic/' + detailData.id + '.html?preview';
                    window.open(previewUrl);
                  }));
                } else {
                  webapi.topic.addTopic(postData).then(RequestProxy(function (res) {
                    SP.message.success('专题添加成功！');
                    self.context.router.push('/topic');
                    let previewUrl = host + '/topic/' + res.id + '.html?preview';
                    window.open(previewUrl);
                  }));
                }

              }

            });

            return false;
          }
        }
      ];

      if (!isEmptyObject(detailData)) {
        actionButtons.push({
          title: '图片视频管理',
          onClick: function () {
            let editPictureUrl = 'http://' + location.host + location.pathname + '#/topic/resources/' + detailData.id;
            window.open(editPictureUrl);
          }
        });
      }

      self.setState({data: data, actionButtons: actionButtons});

    });

  },
  componentDidMount: function () {
    this.getDetail(this.props.params.id);
  },
  getDetail: function (id) {
    let self = this;
    let detailData = {};

    if (id) {
      webapi.topic.getTopic(id).then(function (res) {
        if (res && !res.code) {
          detailData = res.data;
          self.setDetailData(detailData);
        } else {
          SP.message.error('获取信息失败');
        }
      });
    } else {
      self.setDetailData();
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params && nextProps.params.id) {
      this.getDetail(nextProps.params.id);
    } else {
      this.getDetail();
    }
  },
  render: function () {
    return (<BaseForm data={this.state.data} actionButtons={this.state.actionButtons}/>);
  }
});

module.exports = AddPage;
