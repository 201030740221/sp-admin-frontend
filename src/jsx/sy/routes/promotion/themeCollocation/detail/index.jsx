/** @jsx React.DOM */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';

var Uploader = require('../../../../widgets/imgUpload/uploader.jsx');
var collocationMixins = require('./collocationMixins.jsx');
var validMixins = require('./validMixins.jsx');
var CollocationModal = require('./collocationModal.jsx');
var TagTabList = require('./tagTabList.jsx');
var Figure = require('./figure.jsx');
var TagsModal = require('./tagsModal.jsx');


var Body = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName), collocationMixins, validMixins],
    getInitialState: function() {
        $(window).on('resize', this.handleResize);
        return {

        };
    },
    handleResize: function(e){
        clearTimeout(this.timer);
        var _this = this;
        var box = this.refs.box;
        box = box ? box.getDOMNode() : null;
        if(!box){
            return false;
        }
        var size = this.getBoxSize;
        if(size.width < 640){
            this.timer = setTimeout(function(){
                Action.onChange({
                    imgSize: size
                });
            },100);
        }
    },
    componentWillUnmount: function() {
        $(window).off('resize', this.handleResize);
    },
    componentDidMount: function() {
    },
    uploaded: function(res){
        var store = this.state[storeName];
        store.primary_cover_id = res[0].id;
        store.primary_cover = [res[0]];

        Action.onSetStore(store);
    },
    renderStep1: function(){
        var store = this.state[storeName];
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'theme_collocation',
                entity_id: 0,
                type_id: 0
            }
        };
        var imgNode = '';
        //
        // <figure style={{left: '22%',top:'50%'}} className="active0">
        //     <h6>菲戈沙发</h6>
        //     <div className="detail">
        //         <p>环保原木可折叠 wood 木质木头小狗室书房台灯</p>
        //         <em className="price">￥1890.00</em>
        //     </div>
        // </figure>
        if(store.primary_cover_id > 0){
            imgNode = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img className="img_block mb10" style={{pointerEvents: 'none'}} src={store.primary_cover[0].media.full_path} alt="请先上传场景图"/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                    {this.renderFigureList()}
                </div>
            );
        }
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <IonTabContainer>
                            <IonTabHead>
                                <IonTab><span className="f16">①选择场景图</span></IonTab>
                            </IonTabHead>
                            <IonTabBody>
                                <IonTabItem>
                                    {imgNode}
                                    <Uploader id="theme-main-img" opts={UploaderOpts} success={this.uploaded}></Uploader>
                                </IonTabItem>
                            </IonTabBody>
                        </IonTabContainer>
                    </Col>
                </Row>
            </Grid>
        )
    },
    renderFigureList: function(){
        var store = this.state[storeName];
        var _this = this;
        var figures = store.theme_collocation_goods;
        if(figures && figures.length){
            return figures.map(function(item, i){
                if(item.status == 1){
                    return <Figure data={item} key={i} offset={_this.getBoxOffset} size={_this.getBoxSize} index={i}></Figure>
                }
            });
        }
    },
    getBoxOffset: function(){
        var box = this.refs.box;
        box = box ? box.getDOMNode() : null;

        if(!box){
            return {};
        }
        return $(box).offset();
    },
    getBoxSize: function(){
        var box = this.refs.box;
        box = box ? box.getDOMNode() : null;

        if(!box){
            return {};
        }
        return {
            width: box.clientWidth,
            height: box.clientHeight
        }
    },
    renderStep2: function(){
        var store = this.state[storeName];
        if(!(store.primary_cover_id >0)){
            return false;
        }
        var goodsCollocationNode = '';

        if(store.goods_collocation){
            goodsCollocationNode = (
                <span className='ml20'>
                    <span className='ml20 mr20'>已选搭配: </span>
                    <span>{this.renderGoodsNames(store.goods_collocation.goods_collocation_details)}</span>
                </span>
            );
        }
        return (
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={12}>
                        <IonTabContainer>
                            <IonTabHead>
                                <IonTab><span className="f16">②选择搭配组合</span></IonTab>
                            </IonTabHead>
                            <IonTabBody>
                                <IonTabItem>
                                    <Button sm bsStyle='info' onClick={ModalManager.create.bind(this, this.getCollocationModal())}>选择搭配组合</Button>
                                    {goodsCollocationNode}
                                </IonTabItem>
                            </IonTabBody>
                        </IonTabContainer>
                    </Col>
                </Row>
            </Grid>
        )
    },
    getCollocationModal: function(){
        return (
            <Modal max>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>选择搭配</h4>
                </ModalHeader>
                <ModalBody>
                    <CollocationModal></CollocationModal>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    },
    renderStep3: function(){
        var store = this.state[storeName];
        if(!store.goods_collocation){
            return false;
        }
        return (
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={12}>
                        <IonTabContainer>
                            <IonTabHead>
                                <IonTab><span className="f16">③填写标签信息</span></IonTab>
                            </IonTabHead>
                            <IonTabBody>
                                <IonTabItem>
                                    <TagTabList />
                                </IonTabItem>
                            </IonTabBody>
                        </IonTabContainer>
                    </Col>
                </Row>
            </Grid>
        )
    },
    renderStep4: function(){
        var store = this.state[storeName];
        if(!store.goods_collocation){
            return false;
        }
        return (
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={12}>
                        <IonTabContainer>
                            <IonTabHead>
                                <IonTab><span className="f16">④填写主题搭配信息</span></IonTab>
                            </IonTabHead>
                            <IonTabBody>
                                <IonTabItem>
                                    {this.renderThemeInfo()}
                                </IonTabItem>
                            </IonTabBody>
                        </IonTabContainer>
                    </Col>
                </Row>
            </Grid>
        )
    },
    renderTags: function(){
        var store = this.state[storeName];
        var _this = this;
        var theme_collocation_tags = store.theme_collocation_tags || [];
        var list = theme_collocation_tags.map(function(item, i){
            return (
                <li className="active" key={i}>
                    {item.tag.name}
                </li>
            );
        });
        return (
            <ul className="user-select-none collocation-tags inline-block">
                {list}
            </ul>
        );
    },
    renderThemeInfo: function(){
        var _this = this;
        var store = this.state[storeName];

        var albumUploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'theme_collocation',
                entity_id: 0,
                type_id: 1
            }
        };

        var contentUploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'theme_collocation',
                entity_id: 0,
                type_id: 3
            }
        };


        return(
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='theme-name'>搭配名称</Label>
                                <Input type='text' id='theme-name' name='name' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'name')} placeholder='搭配名称' value={store.name} />
                                <HelpBlock>{this.error('name')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='summary'>内容概括（30个字以内）</Label>
                                <Input type='text' id='summary' name='summary' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'summary')} placeholder='搭配名称' value={store.summary} />
                                <HelpBlock>{this.error('summary')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='theme-desc'>详细描述（100个字以内）</Label>
                                <Textarea id='theme-desc' name='description' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'description')} rows='3' placeholder='Some text here...' value={store.description} />
                                <HelpBlock>{this.error('description')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='theme-collocation-post'>是否上架</Label>
                                <div>
                                    <Radio inline value='1' name='theme-collocation-post' defaultChecked={!!store.status} onChange={this.handlePostChange}>是</Radio>
                                    <Radio inline value='0' name='theme-collocation-post' defaultChecked={!store.status} onChange={this.handlePostChange}>否</Radio>
                                </div>
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <FormGroup>
                                <Label control>添加属性标签</Label>
                                <Button sm bsStyle='info' className="mr20" onClick={ModalManager.create.bind(this, this.getTypeTagModal())}>编辑标签</Button>
                                {this.renderTags()}
                                <HelpBlock>{this.error('theme_collocation_tags')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='theme-gallery'>上传相册图片（图片尺寸：1150px * 732px）</Label>
                                <Grid>
                                    <Row>
                                        {this.renderGallery('album')}
                                    </Row>
                                </Grid>
                                <Uploader id="theme-gallery" opts={albumUploaderOpts} success={this.galleryUploaded.bind(null, 'album')}></Uploader>
                                <HelpBlock>{this.error('album_ids')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='wechat-title'>微信分享标题（40个字以内）</Label>
                                <Textarea id='wechat-title' name='share_weixin_title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'share_weixin_title')} rows='3' placeholder='若不填写, 系统将读取"搭配名称"内容' value={store.share_weixin_title} />
                                <HelpBlock>{this.error('share_weixin_title')[0]}</HelpBlock>
                                <Label htmlFor='wechat-desc'>微信分享描述（40个字以内）</Label>
                                <Textarea id='wechat-desc' name='share_weixin_content' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'share_weixin_content')} rows='3' placeholder='若不填写, 系统将读取"内容概况"内容' value={store.share_weixin_content} />
                                <HelpBlock>{this.error('share_weixin_content')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='weibo-desc'>微博分享内容（129个字以内）</Label>
                                <Textarea id='weibo-desc' name='share_weibo' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'share_weibo')} rows='8' placeholder='若不填写, 系统将读取"搭配名称"+"内容概况"内容' value={store.share_weibo} />
                                <HelpBlock>{this.error('share_weibo')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='theme-content-gallery'>主题详情描述（图片尺寸：1150px * 732px）</Label>
                                <Grid>
                                    <Row>
                                        {this.renderGallery('content_attachment')}
                                    </Row>
                                </Grid>
                                <Uploader id="theme-content-gallery" opts={contentUploaderOpts} success={this.galleryUploaded.bind(null, 'content_attachment')}></Uploader>
                                <HelpBlock>{this.error('content_attachment_ids')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        )
    },
    handlePostChange: function(e){
        var store = this.state[storeName];
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        if(value == true) value = 1;
        if(value == false) value = 0;
        Action.onChange({
            status: value
        });
    },
    renderGallery: function(type){
        var _this = this;
        var store = this.state[storeName];
        if(store[type].length){
            return store[type].map(function(item, i){
                return (
                    <Col xs={3} key={i} className="text_center mb10 mt5 inline-block fn">
                        <img className="img_block mb10" src={item.media.full_path} alt="error"/>
                        <Button sm bsStyle='danger' onClick={_this.handleDelGallery.bind(null, type, i)}>删除</Button>
                    </Col>
                )
            });
        }else{
            return ''
        }

    },
    galleryUploaded:function(type, res){
        console.log(type, res);
        var store = this.state[storeName];

        store[type + '_ids'].push(res[0].id);
        store[type].push(res[0]);

        Action.onSetStore(store);
    },
    handleDelGallery: function(type, i){
        var store = this.state[storeName];

        store[type + '_ids'].splice(i, 1);
        store[type].splice(i, 1);

        Action.onSetStore(store);
    },
    getTypeTagModal: function(){
        return (
            <Modal max>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>选择标签</h4>
                </ModalHeader>
                <ModalBody>
                    <TagsModal></TagsModal>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    },
    handleChangeInfo: function(e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        store[name] = value;
        Action.onSetStore(store);
    },
    renderFooter: function(){
        var store = this.state[storeName];
        var btn ='';
        if(!store.goods_collocation){
            return '';
        }else if(store.id > 0){
            btn = (
                <Button lg outlined bsStyle='success' onClick={this.handleSave}>保存方案并返回</Button>
            )
        }else{
            btn = (
                <Button lg outlined bsStyle='success' onClick={this.handleCreate}>创建方案并返回</Button>
            )
        }
        if(store.status==1 || store.status==2){
            btn ='';
        }
        return (
            <Grid className="pt10 pb10">
                <Row>
                    <Col xs={12}>
                        <PanelContainer>
                            <div className="pt10 pb10 text_center">
                                {btn}
                            </div>
                        </PanelContainer>
                    </Col>
                </Row>
            </Grid>
        )
    },
    handleCreate: function(){
        var valid = Action.valid();
        var validAllTagInfo = Action.validAllTagInfo()
        if(valid && validAllTagInfo){
            Action.createThemeCollocation();
        }
    },
    handleSave: function(){
        var valid = Action.valid();
        var validAllTagInfo = Action.validAllTagInfo()
        if(valid && validAllTagInfo){
            Action.updateThemeCollocation();
        }
    },
    render: function() {
        console.log(this.state);
        var store = this.state[storeName];
        return (
            <Container id='body'>
                {this.renderStep1()}
                {this.renderStep2()}
                {this.renderStep3()}
                {this.renderStep4()}
                {this.renderFooter()}
            </Container>
        );
    }
});

var Page = React.createClass({
    mixins: [SidebarMixin],
    getInitialState: function() {
        this.init(this.props);
        return {};
    },
    componentWillReceiveProps: function(props) {
        this.init(props);
    },
    init: function(props){
        console.log(props.id)
        if(!isNaN(props.id) && props.id > 0){
            Action.resetData();
            Action.getThemeCollocation({
                id: props.id
            });
        }else{
            Action.resetData();
        }
    },
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body flux = {flux} id={this.props.id}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Page;
