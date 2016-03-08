/** @jsx React.DOM */
/*文章分类管理*/

var Fluxxor = require("fluxxor");

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//Api
var Api = require('../../modules/api/api.jsx');
//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
//
var articleStore = require("../../modules/stores/articleStore.jsx");
var articleAction = require('../../modules/actions/articleAction.jsx');


var stores = {
    articleStore: new articleStore()
};

var flux = new Fluxxor.Flux( stores, articleAction);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


//
var host = Sp.config.host;
var classSet = React.addons.classSet;

var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var article = this.article;
        console.log(el.name);
        article[el.name] = el.value;
        //flux.actions.updateArticleTitle({title:el.value})
        flux.actions.updateArticle({
            type: 'title',
            title: el.value
        });
    },
    handleSelectChange: function(e){
        var el = e.target;
        switch (el.name){
            case 'category':
                this.article.category_id = el.value;
                //flux.actions.updateArticleCategory({category_id:el.value});
                flux.actions.updateArticle({
                    type: 'category_id',
                    category_id: el.value
                });
                break;
            default :
                break;
        }
    },
    handleCheckboxChange: function(e){
        var el = e.target;
        var article = this.article;
        var postData = {
            id: article.id
        };
        switch (el.name){
            case 'status':
                postData[el.name] = el.checked ? 1:0;
                article[el.name] = el.checked ? 1:0;
                //flux.actions.updateStatusArticle(postData);
                flux.actions.updateArticle({
                    type: 'status',
                    status: el.checked ? 1:0
                });
                break;
            default :
                break;
        }
    },
    deleteSelf: function (id) {
        var _this = this;

        var article = this.article;
        var postData = {
            id: article.id
        };
        ModalManager.create(this.showModal('您确定要删除分类:['+_this.category.name+']?','操作提示', function(){
            flux.actions.removeArticle(postData);
        }));
    },
    handleEditorChange: function(content){
        //console.log(content);
        this.content = content;
        if(this.oldId && this.oldId !=this.state.article.id){
            this.oldId = this.state.article.id;
            this.content = '';
        }
        /*flux.actions.updateArticle({
         type: 'content',
         content: content
         });*/
    },

    handleUpdate: function(e){
        console.log('update');
        var article = this.article;
        var postData = {
            title: article.title,
            category_id: article.category_id,
            status: article.status,
            content: this.content
        };
        if(this.state.article.id > 0){
            postData.id = this.state.article.id;
        }
        if(postData.title == '' || postData.category_id == -1 || postData.content == ''){
            var msg = '';
            msg += postData.title == '' ? '文章标题!' : '';
            msg += postData.category_id == -1 ? '文章分类!' : '';
            msg += postData.content == -''? '文章内容!' : '';
            msg += '不能为空';
            ModalManager.create(this.showModal(msg, function(){
            }));
        }else{
            flux.actions.updateArticle({
                type: 'save',
                data: postData
            });
        }
    }
};



var Ueditor = React.createClass({
    getInitialState: function(){
        console.log('Ueditor getInitialState');
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
            ,autoHeightEnabled:false
            ,scaleEnabled: true
            ,minFrameHeight:500
            ,initialFrameHeight:1000
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
            ,pasteplain: true
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
            if(_this.props.children) editor.setContent(_this.props.children);
        });
        editor.addListener( 'contentChange', function( e ) {
            var content = editor.getContent();
            typeof _this.props.callback === 'function' && _this.props.callback(content);
        })
    },
    componentWillUnmount: function(){
        this.editor.destroy();
    },
    resetEditor: function(){
        this.editor.execCommand('cleardoc');
    },
    render: function(){
        var text = this.props.children;
        if(this.editor){
            text = text || " ";
            this.editor.setContent(text);
        }
        //text && this.editor && this.editor.setContent(text);
        return(
            <Grid>
                <Row className="mt20">
                    <script id={this.state.ueditorId} name="ueditor" type="text/plain"></script>
                </Row>
            </Grid>
        );
    }
});



var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("articleStore"), HandleMixins, ModalMixins],
    getInitialState: function() {
        console.log('getInitialState')
        var id = this.props.articleid;
        if(isNaN(id) || id < 1){
            id = -1;
            flux.actions.initArticle();
        }else{
            flux.actions.getArticle({
                id: id
            });
        }
        console.log('id',id);
        flux.actions.getCategory();
        this.editorReset = !this.editorReset;
        return {
            article: {
                id: id
            }
        }
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps',nextProps)
        var id = nextProps.articleid;
        var oldId = this.state.article.id;
        this.editorReset = !this.editorReset;
        if(isNaN(id)){
            id = -1;
            flux.actions.initArticle();
        }else{
            flux.actions.getArticle({
                id: id
            });
        }
        console.log('id',id);
        flux.actions.getCategory();

        this.oldId = oldId;
        this.setState({
            article: {
                id: id
            }
        });
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            articleStore: flux.store("articleStore").getState()
        };
    },

    getArticleList: function(e){
        e.preventDefault();
        e.stopPropagation();
        flux.actions.getArticleList();
    },
    show: function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log(this.state);
    },

    render: function() {
        var article = this.article = this.state.articleStore.article;
        var content = this.content? this.content : article.content;
        console.log('content,', typeof content);
        this.category = this.state.articleStore.category || [];
        var _this = this;

        console.log(this.article)

        if(this.article.id > 0 && this.state.article.id != this.article.id){
            this.content = null;
            content = ''
        }

        if(typeof content == 'undefined'){
            content = '';
        }

        var ueditorOpts = {
            entity: 'article',
            entity_id: 0,
            type_id: 3
        };
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <Grid>
                                                <Row className='hidden-print' style={{marginBottom:20}}>
                                                    <Col xs={6} style={{paddingTop: 0}}>
                                                        <a href={'#/app/articleList'}>
                                                            <BLabel bsStyle='info'>返回文章列表</BLabel>
                                                        </a>
                                                    </Col>
                                                    <Col xs={6} style={{paddingTop: 0}}>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12}>
                                                        <Form horizontal>
                                                            <FormGroup>
                                                                <Label control sm={3} htmlFor='title'>文章标题</Label>
                                                                <Col sm={9}>
                                                                    <Input
                                                                        type='text'
                                                                        id='title'
                                                                        name='title'
                                                                        value={article.title}
                                                                        placeholder='文章标题'
                                                                        onChange={this.handleChange}/>
                                                                    <HelpBlock></HelpBlock>
                                                                </Col>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label control sm={3} htmlFor='category'>文章分类</Label>
                                                                <Col sm={9}>
                                                                    <Select
                                                                        value={article.category_id}
                                                                        id='category'
                                                                        name='category'
                                                                        ref='category'
                                                                        onChange={_this.handleSelectChange}>
                                                                        <option value={-1}>请选择</option>
                                      {
                                          this.category.map(function(item, i){
                                              return (
                                                  <option key={i} value={item.id}>{item.name}</option>
                                              )
                                          })
                                          }
                                                                    </Select>
                                                                </Col>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label control sm={3}>是否显示</Label>
                                                                <Col sm={9}>
                                                                    <Input
                                                                        type='checkbox'
                                                                        name='status'
                                                                        ref='status'
                                                                        checked={+article.status}
                                                                        onChange={this.handleCheckboxChange}/>
                                                                </Col>
                                                            </FormGroup>
                                                        </Form>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12} className='text-center' collapseLeft collapseRight>
                                                        <Button
                                                            onClick={this.handleUpdate}
                                                            bsStyle='darkgreen45'>
                              {this.state.article.id > 0 ? '保存' : '创建'}
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <Ueditor opts={ueditorOpts} callback={this.handleEditorChange}>{content}</Ueditor>

                                            <Grid>
                                                <Row>
                                                    <Col xs={12} className='text-center mt20 mb20' collapseLeft collapseRight>
                                                        <Button
                                                            onClick={this.handleUpdate}
                                                            bsStyle='darkgreen45'>
                              {this.state.article.id > 0 ? '保存' : '创建'}
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </div>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
        {this.props.children}
            </Container>
        );
    }
});
var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body flux={flux} articleid={this.props.id} >
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
