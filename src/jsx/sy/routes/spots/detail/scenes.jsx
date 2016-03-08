/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var spotsStore = require('../../../modules/stores/spots/detail/index.coffee');
var Store = require('../../../modules/stores/spots/detail/scenes.coffee');
var Action = Store.getAction();
var storeName = 'spots-scenes';
var spotsStoreName = 'spots-detail';
var tokenStore = require('../../../modules/stores/tokenStore.jsx');
var tokenAction = tokenStore.getAction();
var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');
var Uploader = require('../../../widgets/imgUpload/uploader.jsx');
var SkuSelector = require('../../../widgets/goodsSkuList/showModelButton.jsx');
var CouponModal = require('./coupon-modal.jsx');
var ScenesItems = require('./item.jsx');
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');
var Body = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName, spotsStoreName, 'token'), ConfirmMixins],
    createScenes: function () {
        if(Action.valid()){
            Action.createScenes();
        }
    },
    updateScenes: function () {
        if(Action.valid()){
            Action.updateScenes();
        }
    },
    deleteScenes: function (id, i) {
        if (confirm('确定删除该场景吗？')) {
            Action.deleteScenes(id, i);
        }
    },
    addPrize: function(){
        Action.addPrize();
    },
    delPrize: function(i, e){
        if (confirm('确定删除该奖项吗？')) {
            Action.delPrize(i);
        }
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
    novalid: function(name){

    },
    uploaded: function (name, res) {
        var store = this.state[storeName];

        if(res && res.data){

            store[name] = res.data.id;
            store[name+'_url'] = res.data.full_path;

            Action.onSetStore(store);

        }

    },
    prizesUploaded: function(i, res){
        var store = this.state[storeName];
        var name = 'prize_img';
        if(res && res.data){

            store['prizes'][i][name] = res.data.id;
            store['prizes'][i][name+'_url'] = res.data.full_path;

            Action.onSetStore(store);

        }
    },
    renderGallery: function(id, url, name, i){
        var _this = this;
        var store = this.state[storeName];
        if(url){
            return (
                <Col xs={3} key={i} className="text_center mb10 mt5 inline-block fn">
                    <img className="img_block mb10" src={url} alt="error"/>
                    <Button sm bsStyle='danger' onClick={_this.handleDelGallery.bind(null, name, i)}>删除</Button>
                </Col>
            )
        }else{
            return ''
        }

    },
    renderGameImg: function(id, url, name){
        var _this = this;
        var store = this.state[storeName];
        var style = {
            width: 'auto'
        };
        if(url){
            return (
                <div className='u-pr' style={style}>
                    <div className='u-pr'>
                        <img className="img_block" src={url} alt="error"/>
                        <ScenesItems></ScenesItems>
                    </div>
                    <Button sm bsStyle='danger' onClick={_this.handleDelGallery.bind(null, name)}>删除</Button>
                </div>
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
    handleChangeInfo: function(e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        switch (name) {
            case 'during_time':
                value = value * 1000 * 60
                break;
            case 'error_cut_time':
            case 'additional_time':
                value = value * 1000
                break;
        }
        store[name] = value;
        Action.onSetStore(store);
    },
    handleChangePrizesInfo: function(i, e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        store['prizes'][i][name] = value;
        if(name == 'prize_type'){
            store['prizes'][i]['prize_value'] = '';
        }
        Action.onSetStore(store);
    },
    handleChangeDate: function(name, value){
        var store = this.state[storeName];
        var old = store[name] ? moment(store[name]) : moment();
        old = old.format('YYYY-MM-DD HH:mm:ss');
        old = old.split(' ');
        old[0] = moment(value).format('YYYY-MM-DD');
        store[name] = old.join(' ');
        Action.onSetStore(store);
    },
    handleChangeTime: function(name, time){
        var store = this.state[storeName];
        var old = store[name] ? moment(store[name]) : moment();
        old = old.format('YYYY-MM-DD HH:mm:ss');
        old = old.split(' ');
        old[1] = time;
        store[name] = old.join(' ');
        Action.onSetStore(store);
    },
    handlePostChange: function(e){
        var store = this.state[storeName];
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        if(value == true) value = 1;
        if(value == false) value = 0;
        Action.onSetStore({
            is_publish: value
        });
    },
    inline: function(x){

        return {
            width: (x ? x : 5) + 'em',
            textAlign: 'center',
            display: 'inline-block'
        };
    },
    renderDateTime: function(name){
        var store = this.state[storeName];
        if(store.id > 0){
            return store[name];
        }else{
            return (
                [
                    <DatePicker
                        key={name}
                        onChange={this.handleChangeDate.bind(null, name)}
                        dateFormat='YYYY-MM-DD'
                        placeholderText=''
                        selected={store[name] ? moment(store[name]) : moment()}>
                    </DatePicker>
                ,
                    <TimePicker
                        key={1}
                        name={name}
                        onChange={this.handleChangeTime.bind(null, name)}
                        time={store[name]? moment(store[name]) : moment()}></TimePicker>
                ]
            )
        }
    },
    renderPrizes: function(){

        var token = this.state.token
        var _this = this;
        var store = this.state[storeName];
        var prizes = store.prizes;

        return prizes.map(function(item, i){
            if(+item.begin_position == -1){
                return ''
            }

            var prizesImgUplader = '图片上传组件加载中...';
            if(token && token.uptoken){
                var prizesImgOpts = {
                    fileNumLimit:99,
                    formData:{
                        entity: 'spots',
                        entity_id: _this.state[spotsStoreName].id,
                        type_id: 9,
                        token: token.uptoken
                    }
                };
                prizesImgUplader = <Uploader qiniu domain={token.domain} id={'prizes' + (+new Date()) + (Math.random()*10000).toFixed(0)} opts={prizesImgOpts} success={_this.prizesUploaded.bind(null, i)}></Uploader>
            }
            return(
                <FormGroup key={i}>
                    <Label control inline htmlFor=''>*名次</Label>
                    <Input type='text' name='begin_position' onChange={_this.handleChangePrizesInfo.bind(null, i)} onBlur={_this.novalid.bind(null, 'begin_position')} placeholder='' value={item.begin_position} style={_this.inline()} />
                    {'至'}
                    <Input type='text' name='end_position' onChange={_this.handleChangePrizesInfo.bind(null, i)} onBlur={_this.novalid.bind(null, 'end_position')} placeholder='' value={item.end_position} style={_this.inline()} />
                    {' '}
                    <Button xs outlined bsStyle='danger' onClick={_this.delPrize.bind(null, i)}>删除排名奖</Button>
                    {' '}
                    <Label control inline htmlFor=''>*奖品</Label>
                    <Select name='prize_type' value={item.prize_type} onChange={_this.handleChangePrizesInfo.bind(null, i)} style={_this.inline(6)}>
                        <option value='0'>积分</option>
                        <option value='1'>卡券</option>
                        <option value='2'>实物奖</option>
                    </Select>
                    {_this.renderPrizesType(item, i)}
                    <Grid>
                        <Row>
                            {_this.renderGallery(item.prize_img, item.prize_img_url, 'prize_img', i)}
                            <Col xs={6} className="mb10 mt5 inline-block fn">
                                {prizesImgUplader}
                            </Col>
                        </Row>
                    </Grid>
                </FormGroup>
            )
        });
    },
    renderPrizes2: function(){

        var token = this.state.token
        var _this = this;
        var store = this.state[storeName];
        var prizes = store.prizes;

        var item = null;
        var i = null
        prizes.map(function(_item, j){
            if(+_item.begin_position == -1){
                item = _item;
                i = j;
            }
        });
        if(item == null || i == null){
            return ''
        }

        var prizesImgUplader = '图片上传组件加载中...';
        if(token && token.uptoken){
            var prizesImgOpts = {
                fileNumLimit:99,
                formData:{
                    entity: 'spots',
                    entity_id: this.state[spotsStoreName].id,
                    type_id: 9,
                    token: token.uptoken
                }
            };
            prizesImgUplader = <Uploader qiniu domain={token.domain} id={'prizes' + (+new Date()) + (Math.random()*10000).toFixed(0)} opts={prizesImgOpts} success={_this.prizesUploaded.bind(null, i)}></Uploader>
        }
        return(
            <FormGroup>
                <Label control inline htmlFor=''>*数量</Label>
                <Input type='text' name='end_position' onChange={_this.handleChangePrizesInfo.bind(null, i)} onBlur={_this.novalid.bind(null, 'end_position')} placeholder='' value={item.end_position} style={_this.inline()} />
                {' '}
                <Label control inline htmlFor=''>*奖品</Label>
                <Select name='prize_type' value={item.prize_type} onChange={_this.handleChangePrizesInfo.bind(null, i)} style={_this.inline(6)}>
                    <option value='0'>积分</option>
                    <option value='1'>卡券</option>
                    <option value='2'>实物奖</option>
                </Select>
                {_this.renderPrizesType(item, i)}
                <Grid>
                    <Row>
                        {_this.renderGallery(item.prize_img, item.prize_img_url, 'prize_img', i)}
                        <Col xs={6} className="mb10 mt5 inline-block fn">
                            {prizesImgUplader}
                        </Col>
                    </Row>
                </Grid>
            </FormGroup>
        )
    },
    // 选择SKU
    getFinishSelectData: function(i, res){
        var store = this.state[storeName];
        var name = 'prize_value';
        var value = res[0].sku_id;
        store['prizes'][i][name] = value;
        Action.onSetStore(store);
    },
    setCoupon: function(i, res){
        // console.log(i, res);
        var store = this.state[storeName];
        var name = 'prize_value';
        var value = res.id;
        store['prizes'][i][name] = value;
        Action.onSetStore(store);
    },
    renderPrizesType: function(item, i){
        var _this = this;
        var type = item.prize_type
        if(+type == 2){
            return (
                [<SkuSelector  key={0} sku_sn={''} callbackFinishSelectSource={_this.getFinishSelectData.bind(null, i)} />,<span key={1}>sku-id: {item.prize_value}</span>]
            )
        }
        if(+type == 1){
            return (
                [<CouponModal callback={this.setCoupon.bind(null, i)}/>,<span key={1}>coupon-id: {item.prize_value}</span>]
            )
        }
        if(+type == 0){
            var ipt =
                <Input key={0} type='text' name='prize_value' onChange={_this.handleChangePrizesInfo.bind(null, i)} onBlur={_this.novalid.bind(null, 'prize_value')} placeholder='' value={item.prize_value} style={_this.inline(6)} />

            return ([ipt,<span key={1}>积分</span>]
            )
        }
    },
    setItems: function(e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        if(!isNaN(value) && value >= 0){
            if(value > 99){
                value = 99;
            }
            Action.setItems(+value);
        }
    },
    renderSaveBtn: function(){
        var store = this.state[storeName];
        if(store.id > 0){
            if(moment().isBefore(store.end_at)){
                return <Button lg outlined bsStyle='success' onClick={this.updateScenes}>保存场景信息</Button>
            }else{
                return <HelpBlock>{"场景已结束, 无法执行更新和删除操作"}</HelpBlock>
            }
        }else{
            return <Button lg outlined bsStyle='success' onClick={this.createScenes}>保存场景信息</Button>
        }
    },
    renderDelBtn: function(){
        var store = this.state[storeName];
        if(store.id > 0){
            if(moment().isBefore(store.end_at)){
                return <Button lg outlined bsStyle='danger' onClick={this.deleteScenes.bind(null, store.id, store.tab)}>删除场景</Button>
            }
        }else{
            return <Button lg outlined bsStyle='danger' onClick={this.deleteScenes.bind(null, store.id, store.tab)}>删除场景</Button>
        }
    },
    renderLogsBtn: function(){
        var store = this.state[storeName];
        if(store.id > 0){
            return <Button lg outlined bsStyle='info' onClick={this.goToLogs}>查看获奖记录</Button>
        }else{
            return ''
        }
    },
    goToLogs: function(){
        var store = this.state[storeName];
        var spotsId = this.state[spotsStoreName].id;
        RRouter.routing.navigate('/promotion/spots/'+spotsId+'/scenes/'+store.id+'/logs');
    },
    render: function() {
        // console.log(this.state[storeName]);

        var token = this.state.token
        var _this = this;
        var store = this.state[storeName];

        var inline = {
            width: '3em',
            textAlign: 'center',
            display: 'inline-block'
        };

        var originImgUplader = '图片上传组件加载中...';
        var gameImgUplader = '图片上传组件加载中...';
        if(token && token.uptoken){
            var originImgOpts = {
                fileNumLimit:99,
                formData:{
                    entity: 'spots',
                    entity_id: this.state[spotsStoreName].id,
                    type_id: 7,
                    token: token.uptoken
                }
            };
            var gameImgOpts = {
                fileNumLimit:99,
                formData:{
                    entity: 'spots',
                    entity_id: this.state[spotsStoreName].id,
                    type_id: 8,
                    token: token.uptoken
                }
            };
            originImgUplader = <Uploader qiniu domain={token.domain} id="origin_img" opts={originImgOpts} success={this.uploaded.bind(null, 'origin_img')}></Uploader>
            gameImgUplader = <Uploader qiniu domain={token.domain} id="game_img" opts={gameImgOpts} success={this.uploaded.bind(null, 'game_img')}></Uploader>
        }

        // console.log('store.release_time', store.release_time)
        // if(store.release_time == '0000-00-00 00:00:00'){
        //     store.release_time = '2015-09-09 09:09:09'
        // }
        return(
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={12} className='text_center'>
                        大家来找茬! 找茬个数
                        <Input type='text'name='items' onChange={this.setItems} placeholder='' value={store.items.length} style={this.inline(6)} />
                        (最多99个)
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='origin_img'>原场景图</Label>
                                {this.renderGameImg(store.origin_img,store.origin_img_url,'origin_img')}
                                {originImgUplader}
                                <HelpBlock>{this.error('origin_img')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='game_img'>游戏图</Label>
                                {this.renderGameImg(store.game_img,store.game_img_url,'game_img')}
                                {gameImgUplader}
                                <HelpBlock>{this.error('game_img')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <h4>内容设置</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='title1'>*游戏场景标题(10个字以内)</Label>
                                <Input type='text' id='title1' name='title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'title')} placeholder='游戏场景标题' value={store.title} />
                                <HelpBlock>{this.error('title')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='href'>*场景图超链接</Label>
                                <Input type='text' id='href' name='href' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'href')} placeholder='场景图超链接' value={store.href} />
                                <HelpBlock>{this.error('href')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='weixin_share_title'>微信分享 标题</Label>
                                <Textarea id='weixin_share_title' name='weixin_share_title' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'weixin_share_title')} rows='3' placeholder='若不填写，系统将显示“我在斯品家居玩找茬，参与即有奖，一起来玩吧。”' value={store.weixin_share_title} />
                                <HelpBlock>{this.error('weixin_share_title')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='weixin_share_content'>微信分享 描述(40个字以内)</Label>
                                <Textarea id='weixin_share_content' name='weixin_share_content' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'weixin_share_content')} rows='3' placeholder='若不填写，系统将显示“我在@斯品家居玩找茬，还差一点点就能赢到奖品啦，一起来玩吧。”' value={store.weixin_share_content} />
                                <HelpBlock>{this.error('weixin_share_content')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='weibo_share_content'>微博分享内容(129个字以内)</Label>
                                <Textarea id='weibo_share_content' name='weibo_share_content' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'weibo_share_content')} rows='3' placeholder='若不填写，将显示“玩找茬赢大奖，斯品11月，游戏大奖，折扣秒杀，更多福利，斯品不止是双十一“' value={store.weibo_share_content} />
                                <HelpBlock>{this.error('weibo_share_content')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='is_publish'>是否发布</Label>
                                <div>
                                    <Radio inline value='1' name='is_publish' defaultChecked={!!store.is_publish} onChange={this.handlePostChange}>是</Radio>
                                    <Radio inline value='0' name='is_publish' defaultChecked={!store.is_publish} onChange={this.handlePostChange}>否</Radio>
                                </div>
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <h4>规则设置</h4>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='begin_at'>*场景开放时间</Label>
                                <HelpBlock>{'时间一旦保存成功将无法修改, 请确认时间是否正确!'}</HelpBlock>
                                {this.renderDateTime('begin_at')}
                                {'至'}
                                {this.renderDateTime('end_at')}
                                <HelpBlock>{this.error('begin_at')[0]}</HelpBlock>
                                <HelpBlock>{this.error('end_at')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='during_time'>*游戏时间</Label>
                                <Input type='text' id='during_time' name='during_time' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'during_time')} placeholder='' value={store.during_time > 0 ? store.during_time/60/1000 : store.during_time} style={this.inline(6)} />
                                {'分钟'}
                                <HelpBlock>{this.error('during_time')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='error_cut_time'>*猜错扣减时间</Label>
                                <Input type='text' id='error_cut_time' name='error_cut_time' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'error_cut_time')} placeholder='' value={store.error_cut_time > 0 ? store.error_cut_time/1000 : store.error_cut_time} style={this.inline(6)} />
                                {'秒/次'}
                                <HelpBlock>{this.error('error_cut_time')[0]}</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <Label control htmlFor='additional_time'>*额外时间获得</Label>
                                <Input type='text' id='additional_time' name='additional_time' onChange={this.handleChangeInfo} onBlur={this.valid.bind(null, 'additional_time')} placeholder='' value={store.additional_time > 0 ? store.additional_time/1000 : store.additional_time} style={this.inline(6)} />
                                {'秒/次'}
                                <HelpBlock>{this.error('additional_time')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                        <hr />
                        <h4>奖品设置</h4>
                        <Form>
                            <FormGroup>
                                <Label control inline htmlFor=''>排名奖</Label>
                                <Button xs outlined bsStyle='success' onClick={this.addPrize}>增加排名奖</Button>
                            </FormGroup>
                            {this.renderPrizes()}
                            <FormGroup>
                                <Label control inline htmlFor=''>参与奖</Label>
                            </FormGroup>
                            {this.renderPrizes2()}
                            <FormGroup>
                                <Label control htmlFor='release_time'>*排名奖发放/公布时间</Label>
                                <HelpBlock>{'时间一旦保存成功将无法修改, 请确认时间是否正确!'}</HelpBlock>
                                {this.renderDateTime('release_time')}
                                <HelpBlock>{this.error('release_time')[0]}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text_center">
                        {this.renderSaveBtn()}
                        {' '}
                        {this.renderLogsBtn()}
                        {' '}
                        {this.renderDelBtn()}
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = Body;
