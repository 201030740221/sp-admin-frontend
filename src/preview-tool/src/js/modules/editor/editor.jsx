'use strict';

UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
UE.Editor.prototype.getActionUrl = function (action) {
  if (action && action.startsWith('upload')) {
    var qiniu_token = localStorage.getItem('qiniu_token_editor');
    return this.getOpt('uploadUrl') + '?token=' + qiniu_token;
  }

  return this._bkGetActionUrl.call(this, action);
};
var simpleToolbar = [
  [
    'source', //源代码
    'undo', //撤销
    'redo', //重做
    'pasteplain', //纯文本粘贴模式
      //'preview', //预览, ,没css....
      // 'simpleupload', // 单图使用iframe上传方式，不支持qiniu直传，跨域。
    'insertimage', //多图上传
    'cleardoc',
    'fullscreen' //全屏
  ]
  ],
  commonToolbar = [
    [
      'insertimage',
      'map',
      '|',
      'horizontal',
      'spechars',
      '|',
      'inserttable',
      'deletetable',
      'insertparagraphbeforetable',
      'insertrow',
      'deleterow',
      'insertcol',
      'deletecol',
      'mergecells',
      'mergeright',
      'mergedown',
      'splittocells',
      'splittorows',
      'splittocols'
    ],
    [
      'fullscreen',
      'source',
      '|',
      'undo',
      'redo',
      '|',
      'bold',
      'italic',
      'underline',
      'fontborder',
      'strikethrough',
      'superscript',
      'subscript',
      'pasteplain',
      '|',
      'insertorderedlist',
      'insertunorderedlist',
      '|',
      // 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
      'paragraph',
      'fontfamily',
      'fontsize',
      '|',
      'justifyleft',
      'justifycenter',
      'justifyright',
      'justifyjustify',
      '|',
      'link',
      'unlink',
      'anchor'
    ]
  ];

var defaultConfig = {
  serverUrl: '/api/media/editor',
  imageFieldName: 'file',
  enableAutoSave: false,
  initialFrameHeight: 700,
  autoHeightEnabled: false,
  autoClearEmptyNode: true, //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）,
  autotypeset: {
    mergeEmptyline: true, //合并空行
    removeEmptyline: true, //false,         //去掉空行
  },
  //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义

  toolbars: commonToolbar,
  allowDivTransToP: false,
  enterTag: 'p',
  pasteplain: false,
  wordCount: false,
  catchRemoteImageEnable: false
};

var HOUR = 60 * 60 * 1000;

var Editor = React.createClass({
  getInitialState: function () {
    this.getQiniuToken();

    return {
      id: 'editor-instance-' + Date.now()
    };
  },
  getDefaultProps: function () {
    return {
      editorId: 1, // 必填，需指定编辑器唯一id
      content: ''
    };
  },
  getQiniuToken: function () {

    var params = this.props.qiniuTokenParams;

    if (!params) {
      return;
    }

    params.from = 'editor';

    webapi.tools.getQiniuToken(params).then(function (res) {
      // 用于ueditor下image.js中获取，用于七牛上传
      localStorage.setItem('qiniu_token_editor', res.data.uptoken);
      localStorage.setItem('qiniu_domain', res.data.domain);
    });

    this.getQiniuTimer = setTimeout(function () {
      this.getQiniuToken();
    }.bind(this), HOUR);
  },
  getDefaultProps: function () {
    return {
      config: {},
      content: '',
      ready: function (editor) {},
      onChange: function (content, editor) {}
    };
  },

  componentDidMount: function () {
    var config = _.merge(defaultConfig, this.props.config),
      editor = UE.getEditor(this.state.id, config);

    editor.ready(function () {
      editor.setContent(this.props.content || this.props.children || '');
      this.props.ready(editor);
      // 暂时取消本地保存
      // https://github.com/fex-team/ueditor/issues/470
      editor.on('showmessage', function (type, m) {
        if (m['content'] === '本地保存成功') {
          return true;
        }
      });
    }.bind(this));

    editor.addListener('contentChange', function () {
      var _content = editor.getContent();
      this.props.onChange(_content, editor);
    }.bind(this));

    this.editor = editor;
  },

  componentWillReceiveProps: function (nextProps) {
    // 使用setOpt方法设置，在这里无效，原因未知，故挂到editor对象上，在image在线管理中使用
    this.editor.onlineImagesParams = nextProps.config.onlineImagesParams;
    // 指定编辑器id（可以传入对象id），收到不同的id才更新内容
    // 否则编辑器由于实时刷新，导致光标定位在行首
    if (nextProps.editorId !== this.props.editorId) {
      this.editor.setContent(nextProps.content);
    }
  },

  componentWillUnmount: function () {
    clearTimeout(this.getQiniuTimer);
  },

  render: function () {
    return (
      <div className="editor-wrap">
        <div ref="editorContainer" id={this.state.id}/>
      </div>
    );
  }
});

module.exports = Editor;
