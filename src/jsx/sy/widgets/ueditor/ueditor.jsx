/** @jsx React.DOM */
var Ueditor = React.createClass({
  getInitialState: function(){
    var id = 'j-ueditor-' + new Date().getTime();
    var opts = this.props.opts || {};
    var ii, formData = [];
    for(ii in opts){
      formData.push(ii+'=' + opts[ii] + '&');
    }
    if(formData.length){
      formData = '?' + formData.join('');
      console.log(formData);
    }else{
      formData = ''
    }
    this.options = {
      serverUrl: Sp.config.host + '/api/attachment/ueditor' + formData,
      //引入css
      iframeCssUrl: SipinCssUrl
      //height
      ,minFrameHeight:500
      ,initialFrameHeight:500
      //z-index
      ,zIndex:9999999
      //本地存储
      ,enableAutoSave: false
      ,saveInterval: 500000
      //编辑器初始化完成后是否进入源码模式，默认为否。
      ,sourceEditorFirst:false//true
      ,autoClearEmptyNode : false       //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）
      ,autotypeset: {
        mergeEmptyline: true,           //合并空行
        removeClass: false,//true,              //去掉冗余的class
        removeEmptyline: true,//false,         //去掉空行
        //textAlign:"left",               //段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
        //imageBlockLine: 'center',       //图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
        pasteFilter: false,             //根据规则过滤没事粘贴进来的内容
        clearFontSize: false,           //去掉所有的内嵌字号，使用编辑器默认的字号
        clearFontFamily: false,         //去掉所有的内嵌字体，使用编辑器默认的字体
        removeEmptyNode: false,         // 去掉空节点
        //可以去掉的标签
        removeTagNames: {},
        indent: false,                  // 行首缩进
        indentValue : '2em',            //行首缩进的大小
        bdc2sb: false,
        tobdc: false
      }
      //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
      , toolbars: [
        [
          'source', //源代码
          'undo', //撤销
          'redo', //重做
          'pasteplain', //纯文本粘贴模式
          //'preview', //预览, ,没css....
          'simpleupload', //单图上传
          'insertimage', //多图上传
          'cleardoc',
          'fullscreen' //全屏
        ]
      ]
      ,allowDivTransToP: false
      ,enterTag: 'br'
    };
    return {
      ueditorId: id
    }
  },
  componentDidMount: function() {
    var _this = this;
    var editor = UE.getEditor(_this.state.ueditorId,_this.options);
    this.editor = editor;
    editor.ready(function(){
      if(_this.props.children)editor.setContent(_this.props.children);
    });
    editor.addListener( 'contentChange', function( e ) {
      var content = editor.getContent();
      typeof _this.props.callback === 'function' && _this.props.callback(content);
    })
  },
  componentWillUnmount: function(){
    this.editor.destroy();
  },
  getTemplate: function(id){
    console.log('getTemplate');
    var _this = this;
    var url;
    switch (id){
      case 'sofa': url = template_url.sofa;
        break;
      case 'bed': url = template_url.bed;
        break;
    }
    $.get(url, function(html){
      _this.editor.setContent(html);
    });
  },
  getSofaTpl: function(){
    this.getTemplate('sofa');
  },
  getBedTpl: function(e){
    this.getTemplate('bed');
  },
  resetEditor: function(){
    this.editor.execCommand('cleardoc');
  },
  render: function(){
    var text = this.props.children;
      if(this.editor){
          text = text || "";
          this.editor.setContent(text);
      }
    //text && this.editor && this.editor.setContent(text);
    return(
      <Grid>
        <Row>
          <Well noMargin>
            请选择初始化商品模板:
            <Button bsStyle='pink' onClick={this.getBedTpl} style={{marginLeft:20}}>床</Button>
            <Button bsStyle='info' onClick={this.getSofaTpl} style={{marginLeft:20}}>沙发</Button>
          </Well>
        </Row>
        <Row className="mt20">
          <script id={this.state.ueditorId} name="ueditor" type="text/plain"></script>
        </Row>
      </Grid>
    );
  }
});
module.exports = Ueditor;
