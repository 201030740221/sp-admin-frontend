'use strict';

import BaseForm from 'modules/page-components/base-form';
import CategorySelector from 'modules/category-selector/category-selector';
import PictureUploader from 'modules/picture-uploader/picture-uploader';

var Select = antd.Select;
var Option = Select.Option;

/* 数组中插入 */
Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

var entity_params = {
  entity_id: null,
  entity_type: 'article',
  type: 'content', // 暂且保留type，等api统一，可去除type
  type_id: 'content'
};
/* 分类 */
var CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector
      selected={this.props.selected}
      style={{
        width: 200
      }}
      type={this.props.type}
      onChange={this.onChange}/>);
  }
});

var PictureUploadComponent = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data[0].id);
    }
  },
  render: function () {
    return (<PictureUploader {...this.props} onChange={this.onChange}/>);
  }
});
/* 添加 */
var AddForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {data: []};
  },
  getFormData: function (article) {
    let self = this;
    article = article || {};
    this.editor_media_ids = article.media_ids || [];

    var pictureData = [];

    if (article.cover && article.cover.media) {
      pictureData.push({id: article.cover.media_id, url: article.cover.media.full_path});
      article.cover_media_id = article.cover.media_id;
    }

    entity_params.entity_id = article.id;

    let formField = [
      {
        classes: 'article-column',
        formData: [
          {
            type: 'input',
            title: '文章标题',
            key: 'title',
            defaultValue: article.title || '',
            placeholder: '请输入文章标题，100字节内',
            tips: '',
            validator: {
              required: true,
              message: {
                required: '必填，100字节'
              }
            }
          }, {
            type: 'input',
            title: '作者',
            key: 'author',
            defaultValue: article.author || localStorage.getItem('admin-name') || '',
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'custom',
            title: '文章分类',
            key: 'category_id',
            defaultValue: article.category_id || false,
            placeholder: '',
            render: function () {
              return (<CategorySearch
                style={{
                  width: 200
                }}
                type="article"
                selected={article.category_id || 0}/>);
            },
            validator: {
              required: true,
              message: {
                required: '必选'
              }
            }
          }, {
            type: 'input',
            title: '文章关键词',
            key: 'keywords',
            placeholder: '请使用逗号间隔',
            defaultValue: article.keywords || ''
          }, {
            type: 'textarea',
            title: '文章简介',
            key: 'description',
            defaultValue: article.description || ''
          }, {
            type: 'pictureUploader',
            title: '文章导图',
            key: 'cover_media_id',
            defaultValue: article.cover_media_id,
            render: function () {
              return (<PictureUploadComponent data={pictureData} pictureLength="1" removeSuccess={null} uploadSuccess={null} useQiniu={true}/>);
            }
          }
        ]
      },

      // 右侧信息部分
      {
        classes: 'article-column',
        formData: [
          {
            type: 'select',
            title: '文章属性',
            key: 'attribute',
            values: [
              {
                name: '原创',
                key: 1
              }, {
                name: '转载',
                key: 2
              }
            ],
            defaultValue: article.attribute || 1
          }, {
            type: 'select',
            title: '文章来源',
            key: 'create_source',
            values: [
              {
                name: '内部',
                key: 1
              }, {
                name: '外部',
                key: 2
              }
            ],
            defaultValue: article.create_source || 1
          }, {
            type: 'input',
            title: 'SEO标题',
            key: 'seo_title',
            defaultValue: article.seo_title || ''
          }, {
            type: 'input',
            title: 'SEO关键词',
            key: 'seo_keywords',
            placeholder: '请使用逗号间隔',
            defaultValue: article.seo_keywords || ''
          }, {
            type: 'textarea',
            title: 'SEO描述',
            key: 'seo_description',
            defaultValue: article.seo_description || ''
          }
        ]
      },

      // 编辑器
      {
        classes: 'clear',
        formData: [
          {
            type: 'editor',
            title: null,
            key: 'content',
            passProps: {
              editorId: article.id, // 编辑器实例id
              qiniuTokenParams: entity_params,
              config: {
                uploadSuccess: function (res) {
                  self.editor_media_ids.push(res.media_id);
                },
                onlineImagesParams: _.merge({ // 请求在线管理图片的额外参数
                  id: article.id
                }, entity_params)
              }
            },
            defaultValue: article.content || ''
          }
        ]
      }
    ];

    self.setState({data: formField});

  },
  componentWillReceiveProps: function (nextProps) {
    // 添加与编辑文章之间的状态切换
    this.getArticle(nextProps.params.id);
  },
  componentDidMount: function () {
    this.getArticle(this.props.params.id);
  },
  getArticle: function (id) {
    let self = this;

    if (!id) {
      this.getFormData();
      return;
    }

    webapi.article.getInfo(id).then(function (res) {
      if (res && !res.code) {
        self.getFormData(res.data);
        return;
      }

      SP.message.error('获取文章信息失败');
    });
  },

  saveArticle: function (validator) {
    validator(function (isValid, validData) {
      if (!isValid) {
        return false;
      }

      var params = {};
      Object.keys(validData).forEach(function (key) {
        for (var name in validData[key]) {
          params[name] = validData[key][name] || '';
        }
      });

      var id = this.props.params.id,
        method = id
          ? 'update'
          : 'add';

      params.media_ids = this.editor_media_ids;

      webapi.article[method](params, id).then(function (res) {
        if (res && !res.code) {
          SP.message.success('文章保存成功！');
          if (!id) {
            // 成功后跳至编辑状态
            this.context.router.push('/article/edit/' + res.data.id);
          }
        } else {
          SP.message.error(res.msg);
        }
      }.bind(this));

    }.bind(this));

    return false;
  },

  render: function () {
    var title = this.props.params.id
      ? ' 保存文章 '
      : ' 添加文章 ';
    var actionButtons = [
      {
        title: title,
        onClick: function () {
          this.saveArticle.apply(this, arguments);
        }.bind(this)
      }
    ];

    return (
      <div className="article-add-form">
        <BaseForm isNew={true} data={this.state.data} actionButtons={actionButtons}/>
      </div>
    );
  }
});

module.exports = AddForm;
