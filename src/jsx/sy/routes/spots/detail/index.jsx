/** @jsx React.DOM */
var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'spots-detail';

var scenesStore = require('../../../modules/stores/spots/detail/scenes.coffee');
var scenesAction = Store.getAction();
var scenesStoreName = 'spots-scenes';

var tokenStore = require('../../../modules/stores/tokenStore.jsx');
var tokenAction = tokenStore.getAction();

var Uploader = require('../../../widgets/imgUpload/uploader.jsx');
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');

var ScenesTab = require('./scenes-tab.jsx');

var RULE = [
    "找茬个数",
    "找茬游戏时间",
    "游戏用时",
    "当前排名",
    "参与奖奖品",
    "场景结束时间"
];
var Body = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName, 'token', scenesStoreName), ConfirmMixins],
    createSpot: function () {
        if(Action.valid())
            Action.createSpot();
    },
    updateSpot: function () {
        if(Action.valid())
            Action.updateSpot();
    },
    error: function(name){
        var store = this.state[storeName];
        var error = store.fieldError;
        if(!error || !error[name] || !error[name].length){
            return [''];
        }
        return error[name];
    },
    valid: function(name){
        return Action.valid(name);
    },
    uploaded: function (name, res) {
        var store = this.state[storeName];
        if(res && res.data){

            store[name] = res.data.id;
            store[name+'_url'] = res.data.full_path;

            Action.onSetStore(store);

        }
    },
    renderGallery: function(id, url, name, i){
        var _this = this;
        var store = this.state[storeName];
        if(url){
            return (
                <Col xs={10} key={i} className="text_center mb10 mt5 inline-block fn">
                    <img className="img_block mb10" src={url} alt="error"/>
                    <Button sm bsStyle='danger' onClick={_this.handleDelGallery.bind(null, name, i)}>删除</Button>
                </Col>
            )
        }else{
            return ''
        }

    },
    handleDelGallery: function(name, i){
        var store = this.state[storeName];
        if(name != 'prize_img'){
            store[name] = '';
            store[name+'_url'] = '';
        }else{
            store['prizes'][i][name] = '';
            store['prizes'][i][name+'_url'] = '';
        }
        Action.onSetStore(store);
    },
    preview: function(text, e){
        e.stopPropagation();
        var store = this.state[storeName];
        var newText = '';
        if(text){
            newText = text.replace(/\%b\%(\w+)\%e\%/g, function(a,b){
                console.log(a,b)
                return '<span class="error">[' + RULE[b] + ']</span>';
            });
        }
        var dangerouslySetInnerHTML = {
            "__html": newText
        }
        this.confirm({
            title: '预览',
            text: <div dangerouslySetInnerHTML={dangerouslySetInnerHTML}></div>,
            showCancel: false
        });
    },
    handleChangeInfo: function(e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        // if(name == 'additional_content'){
        //     value = value.replace(/\n/g,'<br/>');
        // }
        switch (name) {
            case 'tactic_tip':
            case 'success_tip':
            case 'fail_tip':
            case 'additional_content':
            case 'rule_content':
                value = value.replace(/\n/g,'<br/>');
                break;
        }
        store[name] = value;
        Action.onSetStore(store);
    },
    renderRules: function (a,b) {
        return RULE.map(function(item, i){
            if(i >= a && i <= b){
                return (
                    <HelpBlock key={i}>%b%{i}%e% {item}</HelpBlock>
                )
            }
        });
    },
    renderInfo: function () {

        var _this = this;
        var store = this.state[storeName];
        var token = this.state.token

        var moreActivityThumbOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'spots',
                entity_id: store.id || 0,
                type_id: 6,
                token: token && token.uptoken
            }
        };

        return(
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={6}>
                        <h4>活动标题</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='title'>*活动标题</Label>
                                <Input type='text' id='title' name='title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'title')} placeholder='活动标题' value={store.title} />
                                <HelpBlock>{this.error('title')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                        <hr />
                        <h4>游戏规则</h4>
                        <Form>
                            <FormGroup>
                                <HelpBlock>游戏攻略: "在规定时间内尽快找出两图中的 %b%0%e% 处不一样的地方，默认有 %b%1%e% 时间~ 小心：点错的话是要扣时间的哦，小心下手呀！"  以下是代码说明: </HelpBlock>
                                {this.renderRules(0,1)}
                                <HelpBlock>注意: 游戏攻略只能用以上2个变量.注意: 游戏攻略只能用以上2个变量.注意: 游戏攻略只能用以上2个变量.重要的事情要说3遍 </HelpBlock>
                                <Label inline control htmlFor='tactic_tip'>*游戏攻略</Label>{' '}
                                <Button xs outlined bsStyle='success' onClick={this.preview.bind(null,store.tactic_tip) }>预览</Button>
                                <Textarea id='tactic_tip' name='tactic_tip' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'tactic_tip')} rows='3' placeholder='内容' value={store.tactic_tip.replace(/\<br\/\>/g,'\n')} />
                                <HelpBlock>{this.error('tactic_tip')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <HelpBlock>游戏通过: "游戏顺利通过^_^   用时：%b%2%e%，当前排名：%b%3%e% 感谢参与，在此先送出参与奖：%b%4%e%最终排名和丰厚排名奖将于场景关闭当天%b%5%e%公布哟，请留意微信或网页。"  以下是代码说明: </HelpBlock>
                                {this.renderRules(2,5)}
                                <Label inline control htmlFor='success_tip'>*游戏通过</Label>{' '}
                                <Button xs outlined bsStyle='success' onClick={this.preview.bind(null,store.success_tip)}>预览</Button>
                                <Textarea id='success_tip' name='success_tip' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'success_tip')} rows='3' placeholder='内容' value={store.success_tip.replace(/\<br\/\>/g,'\n')} />
                                <HelpBlock>{this.error('success_tip')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <HelpBlock>游戏失败: "很遗憾，时间到咯，游戏结束...表灰心，斯品送你参与奖%b%4%e%打打气请留意下一个场景开放时间，丰厚奖品等着你~"  以下是代码说明: </HelpBlock>
                                {this.renderRules(2,5)}
                                <Label inline control htmlFor='fail_tip'>*游戏失败</Label>{' '}
                                <Button xs outlined bsStyle='success' onClick={this.preview.bind(null,store.fail_tip)}>预览</Button>
                                <Textarea id='fail_tip' name='fail_tip' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'fail_tip')} rows='3' placeholder='内容' value={store.fail_tip.replace(/\<br\/\>/g,'\n')} />
                                <HelpBlock>{this.error('fail_tip')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                        <hr />
                        <h4>获奖规则说明</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='rule_title'>*标题</Label>
                                <Input type='text' id='rule_title' name='rule_title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'rule_title')} placeholder='标题' value={store.rule_title} />
                                <HelpBlock>{this.error('rule_title')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='rule_content'>*内容</Label>
                                <Textarea id='rule_content' name='rule_content' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'rule_content')} rows='3' placeholder='内容' value={store.rule_content.replace(/\<br\/\>/g,'\n')} />
                                <HelpBlock>{this.error('rule_content')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <h4>更多活动</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='more_activity_title'>*标题</Label>
                                <Input type='text' id='more_activity_title' name='more_activity_title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'more_activity_title')} placeholder='更多活动标题' value={store.more_activity_title} />
                                <HelpBlock>{this.error('more_activity_title')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='more_activity_thumb'>上传图片（图片尺寸：xpx * xpx）</Label>
                                {this.renderGallery(store.more_activity_thumb, store.more_activity_thumb_url, 'more_activity_thumb')}
                                <Uploader qiniu domain={token.domain} id="more_activity_thumb" opts={moreActivityThumbOpts} success={this.uploaded.bind(null, 'more_activity_thumb')}></Uploader>
                                <HelpBlock>{this.error('more_activity_thumb')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='more_activity_href'>*超链接 (以http://开头，html结尾的完整地址)</Label>
                                <Textarea id='more_activity_href' name='more_activity_href' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'more_activity_href')} rows='3' value={store.more_activity_href} />
                                <HelpBlock>{this.error('more_activity_href')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                        <hr />
                        <h4>活动补充说明</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='additional_title'>*标题</Label>
                                <Input type='text' id='additional_title' name='additional_title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'additional_title')} placeholder='活动补充说明' value={store.additional_title} />
                                <HelpBlock>{this.error('additional_title')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='additional_content'>*内容</Label>
                                <Textarea id='additional_content' name='additional_content' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'additional_content')} rows='3' placeholder='内容' value={store.additional_content.replace(/\<br\/\>/g,'\n')} />
                                <HelpBlock>{this.error('additional_content')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text_center">
                        {this.renderSaveBtn()}
                    </Col>
                </Row>
                {this.renderCreateBtn()}
            </Grid>
        )
    },
    renderSaveBtn: function(){
        var store = this.state[storeName];
        var _this = this;
        if(store.id > 0){
            return <Button lg outlined bsStyle='success' onClick={this.updateSpot}>保存活动信息</Button>
        }
    },
    renderCreateBtn: function(){
        var store = this.state[storeName];
        var _this = this;
        if(!(store.id > 0)){
            return (
                <Row>
                    <Col xs={12} className="text_center">
                        首次保存活动后才能新增场景哦@
                        <Button xs bsStyle='success' className="ml20" onClick={this.createSpot}>立即保存活动信息</Button>
                    </Col>
                </Row>
            )
        }
    },
    renderScenes: function(){

        var store = this.state[storeName];
        var _this = this;
        if(store.id > 0){
            return (
                <ScenesTab />
            )
        }
    },
    render: function() {
        console.log(this.state);
        var store = this.state[storeName];
        var _this = this;
        return (
            <Container id='body'>
                <Grid style={{paddingTop: 12.5}}>
                    {this.renderCreateBtn()}
                    {this.renderScenes()}
                    <Row>
                        <Col xs={12}>
                            <div className="ionTabs" id="tabs_1" data-name="Tabs_Group_name">
                                <ul className="ionTabs__head">
                                    <li className="ionTabs__tab ionTabs__tab_state_active"><span className="f16">活动信息</span></li>
                                </ul>
                                <div className="ionTabs__body">
                                    <div className="ionTabs__item ionTabs__item_state_active">
                                        {this.renderInfo()}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
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
    init: function(props){
        tokenAction.getToken();
        Action.reset();
        scenesAction.reset();
        if(props.id == 'create'){

        }else if(isNaN(props.id) || !(props.id > 0)){
            RRouter.routing.navigate('/promotion/spots');
            Sp.message('非法ID!')
        }else{
            Action.getSpot(props.id);
        }
    },
    componentWillReceiveProps: function(props) {
        this.init(props);
    },
    componentWillUnmount: function() {
        Action.reset();
        scenesAction.reset();
    },
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Page;
