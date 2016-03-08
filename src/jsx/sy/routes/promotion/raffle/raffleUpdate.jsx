/** @jsx React.DOM */
/*创建抽奖活动*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var tokenStore = require('../../../modules/stores/tokenStore.jsx');
var Store = require('../../../modules/stores/promotion/raffle/raffleDetailStore.jsx');
var CouponStore = require('../../../modules/stores/promotion/raffle/couponListStore.jsx');

var Uploader = require('../../../widgets/imgUpload/uploader.jsx');

//
var classSet = React.addons.classSet;


/*时间*/
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            begin_at: '',
            end_at: ''
        }
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            end_at: date
        });
        this.props.timeCallBack('end_at',time_end_at);
    },
    changeStartTime: function(date){
        var time_start_at = date.format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            begin_at: date
        });
        this.props.timeCallBack('begin_at',time_start_at);
    },
    componentDidMount: function(){
        $('.datepicker__input').width(160);
        $('.datepicker__input').addClass('form-control');
        var source = this.props.data;
        $('.datepicker__input').eq(0).val(source.begin_at);
        $('.datepicker__input').eq(1).val(source.end_at);

    },
    componentDidUpdate: function() {
        var source = this.props.data;
        $('.datepicker__input').eq(0).val(source.begin_at);
        $('.datepicker__input').eq(1).val(source.end_at);
    },
    render: function(){
        var begin_at = this.state.begin_at;
        var end_at = this.state.end_at;
        return (
            <div className="mb15">
                <div className="clearfix">
                    <div className="fl mr10">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText=''
                            selected={begin_at}
                            >
                        </DatePicker>
                    </div>
                    <div className="fl mr10">
                        至
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="endTime"
                            onChange={this.changeEndTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText=''
                            selected={end_at}
                            >
                        </DatePicker>
                    </div>
                </div>
            </div>
        )
    }
});


/*change handle*/
var HandleMixins = {
    /*input*/
    handleChange: function (e) {
        var el = e.target,
            source = this.state.source_data;
        switch (el.id) {
            case '_this_name':
                    source.name = el.value;
                    break;

            case '_this_rule':
                    var rule = el.value;
                    var temp =  rule.replace(/\n/g,'<br/>');
                    source.rule = temp;
                    break;

            case '_this_title':
                    source.title = el.value;
                    break;

            case '_this_sub_title':
                    source.sub_title = el.value;
                    break;

            case 'checkbox_attendance':
                    source.attendance_bonus = el.value;
                    break;

            case 'checkbox_share':
                    source.share_bonus = el.value;
                    break;
        }

        /*分享文案*/
        source.copywritings= source.copywritings || {};
        source.copywritings.weixin = source.copywritings.weixin || {};
        source.copywritings.weibo = source.copywritings.weibo || {};
        switch(el.name){
            case 'weixin_title':
                    source.copywritings.weixin.title = el.value;
                    break;

            case 'weixin_content':
                    var content = el.value;
                    var temp =  content.replace(/\n/g,'<br/>');
                    source.copywritings.weixin.content = temp;
                    break;

            case 'weixin_link':
                    source.copywritings.weixin.link = el.value;
                    break;

            case 'weibo_title':
                    source.copywritings.weibo.title = el.value;
                    break;

            case 'weibo_content':
                    var content = el.value;
                    var temp =  content.replace(/\n/g,'<br/>');
                    source.copywritings.weibo.content = temp;
                    break;

            case 'weibo_link':
                    source.copywritings.weibo.link = el.value;
                    break;
        }
        /*抽奖资格*/
        if (el.id == 'checkbox_attendance') {
            if (el.checked) {
                source.attendance_bonus = 1;
            } else {
                source.attendance_bonus = 0;
            }
        }
        if (el.id == 'checkbox_share') {
            if (el.checked) {
                source.share_bonus = 1;
            } else {
                source.share_bonus = 0;
            }
        }

        /*奖品设置*/
        if(el.name=='point_input'){
            for(var key in source.prizes){
                if(el.id==source.prizes[key].id){
                    source.prizes[key].point_bonus = el.value;
                }
            }
        }
        if(el.name=='prize_name'){
            for(var key in source.prizes){
                if(el.id==source.prizes[key].id){
                    source.prizes[key].name = el.value;
                }
            }
        }
        if(el.name=='prize_amount'){
            for(var key in source.prizes){
                if(el.id==source.prizes[key].id){
                    source.prizes[key].amount = el.value;
                }
            }
        }
        if(el.name=='limit_days'){
            for(var key in source.prizes){
                if(el.id==source.prizes[key].id){
                    source.prizes[key].in_days = el.value;
                }
            }
        }
        if(el.name=='limit_count'){
            for(var key in source.prizes){
                if(el.id==source.prizes[key].id){
                    source.prizes[key].limit_count = el.value;
                }
            }
        }
        this.setState({
            source_data: source
        });
        console.log(this.state.source_data);
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(this.state.source_data);
        }
    },
    /*select*/
    onChangeStatus: function(e){
        var val = e.target.value,
            el = e.target,
            str = e.target.id,
            source = this.state.source_data;
        for(var key in source.prizes){
            if(el.id==source.prizes[key].id){
                if(el.name=='type'){
                    source.prizes[key].type = parseInt(el.value);
                }
                if(el.name=='repeatable'){
                    source.prizes[key].repeatable = parseInt(el.value);
                }
                if(el.name=='coupon_task'){
                    source.prizes[key].coupon_task_id = parseInt(el.value);
                }
            }
        }
        this.setState({
            source_data: source
        });
        console.log(this.state.source_data);
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(this.state.source_data);
        }
    }
};


/*奖品列表*/
var TableList = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('token'),HandleMixins],
    getInitialState: function () {
        return{
            source_data: this.props.source
        }
    },
    /*上传图片*/
    uploaded: function(type,data){
        var _this_url = data.data.full_path;
        var source = this.state.source_data,
            item = this.props.item;
        console.log(data);
        for(var key in source.prizes){
            if(item.id==source.prizes[key].id){
                source.prizes[key].pics = source.prizes[key].pics || {};
                source.prizes[key].pic_ids = source.prizes[key].pic_ids || {};
                if(type=='img_pc'){
                    source.prizes[key].pics.pc = _this_url;
                    source.prizes[key].pic_ids.pc = data.data.id;
                }
                if(type=='img_pc_popup'){
                    source.prizes[key].pics.pc_popup = _this_url;
                    source.prizes[key].pic_ids.pc_popup = data.data.id;
                }
                if(type=='img_mobile'){
                    source.prizes[key].pics.mobile = _this_url;
                    source.prizes[key].pic_ids.mobile = data.data.id;
                }
                if(type=='img_mobile_popup'){
                    source.prizes[key].pics.mobile_popup = _this_url;
                    source.prizes[key].pic_ids.mobile_popup = data.data.id;
                }
            }
        }
        this.setState({
            source_data: source
        });
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(this.state.source_data);
        }
    },
    render: function () {
        var _this = this;
        var item = this.props.item;
        /*奖品类型*/

        var $thisType = '' , $thisCoupon='';

        if(item.type==0){
            $thisType = (
                <Input type='text' name='point_input' id={item.id} value={item.point_bonus} onChange={_this.handleChange} style={{marginTop:'3'}} />
            );
        }
        else if(item.type==1){
            var list = this.props.task_data;
            $thisCoupon = (
                <Select id={item.id} name='coupon_task' value={item.coupon_task_id} onChange={_this.onChangeStatus} className="wa fl mr0" style={{marginTop:'3'}}>
                    <option value="0">请选择优惠券</option>
                    {
                        list.map(function (item, i) {
                            return (
                                <option key={i} value={item.id}>{item.name}</option>
                            )
                        })
                    }
                </Select>
            );
        }else{
            $thisCoupon = '';
        }

        var token = _this.state.token;
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'lottery_prize',
                entity_id: 0,
                type_id: 0,
                token: token.uptoken
            }
        };
        /*图片显示*/
        var imgPcNode = '' , imgPcPopUpNode = '' , imgMobileNode = '' , imgMobilePopUpNode = '';
        if(item.pics){
            var pc_src = '' , pc_popup_src = '' , mobile_src = '' , mobile_popup_src = '';
            if(item.pics.pc){
                pc_src = item.pics.pc+'?imageView2/1/w/160';
            }
            if(item.pics.pc_popup){
                pc_popup_src = item.pics.pc_popup+'?imageView2/1/w/160';
            }
            if(item.pics.mobile){
                mobile_src = item.pics.mobile+'?imageView2/1/w/160';
            }
            if(item.pics.mobile_popup){
                mobile_popup_src = item.pics.mobile_popup+'?imageView2/1/w/160';
            }
            imgPcNode = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img style={{pointerEvents: 'none'}} src={pc_src} alt="请先上传PC端图" width='80'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );
            imgPcPopUpNode = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img  style={{pointerEvents: 'none'}} src={pc_popup_src} alt="请先上传PC端中奖图" width='80'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );
            imgMobileNode = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img  style={{pointerEvents: 'none'}} src={mobile_src} alt="请先上传M端图" width='80'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );
            imgMobilePopUpNode = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img style={{pointerEvents: 'none'}} src={mobile_popup_src} alt="请先上传M端中奖图" width='80'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );
        }

        /*概率*/
        var _this_amount = item.amount,
            source = this.state.source_data,
            all_amount = 0;
        for(var key in source.prizes){
            all_amount += parseInt(source.prizes[key].amount);
        }
        var _this_rate = _this_amount/all_amount;
        if(isNaN(_this_rate)){
            _this_rate = 0;
        }

        /*token*/
        var token = _this.state.token;
        /*分享文案*/
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'lottery_prize',
                entity_id: 0,
                type_id: 0,
                token: token.uptoken
            }
        };

        return (
            <tr className='img_all'>
                <td width="4%" className='text_center'>{item.order}</td>
                <td width="8%" className='text_center'>
                    <Select name='type' id={item.id} value={item.type} onChange={_this.onChangeStatus} style={{margin:'auto'}}>
                        <option  value="-1">选择奖品类型</option>
                        <option  value="0">积分</option>
                        <option  value="1">优惠券</option>
                        <option  value="2">实体奖品</option>
                        <option  value="5">自营商品</option>
                        <option  value="3">再来一次</option>
                        <option  value="4">空</option>
                    </Select>
                    {$thisType}
                    {$thisCoupon}
                </td>
                <td width="10%" className='text_center'>
                    <Input type='text' id={item.id} name='prize_name' className='text_center' value={item.name} onChange={_this.handleChange} />
                </td>
                <td width="10%" height="100" className='text_center'>
                    <FormGroup>
                        <Col sm={12}>
                            <Uploader qiniu={true} domain={token.domain} name='img_pc' id={'img_pc'+item.id} opts={UploaderOpts} success={_this.uploaded.bind(null,'img_pc')}></Uploader>
                            {imgPcNode}
                        </Col>
                    </FormGroup>
                </td>
                <td width="10%" height="100" className='text_center'>
                    <FormGroup>
                        <Col sm={12}>
                            <Uploader qiniu={true} domain={token.domain} name='img_pc_popup' id={'img_pc_popup'+item.id} opts={UploaderOpts} success={_this.uploaded.bind(null,'img_pc_popup')}></Uploader>
                            {imgPcPopUpNode}
                        </Col>
                    </FormGroup>
                </td>
                <td width="10%" height="100" className='text_center'>
                    <FormGroup>
                        <Col sm={12}>
                            <Uploader qiniu={true} domain={token.domain} name='img_mobile' id={'img_mobile'+item.id} opts={UploaderOpts} success={_this.uploaded.bind(null,'img_mobile')}></Uploader>
                            {imgMobileNode}
                        </Col>
                    </FormGroup>
                </td>
                <td width="10%" height="100" className='text_center'>
                    <FormGroup>
                        <Col sm={12}>
                            <Uploader qiniu={true} domain={token.domain} name='img_mobile_popup' id={'img_mobile_popup'+item.id} opts={UploaderOpts} success={_this.uploaded.bind(null,'img_mobile_popup')}></Uploader>
                            {imgMobilePopUpNode}
                        </Col>
                    </FormGroup>
                </td>
                <td width="6%" className='text_center'>
                    <Input type='text' id={item.id} name='prize_amount' className='text_center' value={item.amount} onChange={_this.handleChange} />
                </td>
                <td width="6%" className='text_center'>
                    <div>{ item.won_count }</div>
                </td>
                <td width="6%" className='text_center'><div>{_this_rate.toFixed(2)}</div></td>
                <td width="14%" className='text_center'>
                    <Input className='inline' type='text' id={item.id} name='limit_days' value={item.in_days} onChange={_this.handleChange} style={{width:'30%',textAlign:'center'}} />
                    <span>天</span>
                    <Input className='inline' type='text' id={item.id} name='limit_count' value={item.limit_count} onChange={_this.handleChange} style={{width:'30%',textAlign:'center'}} />
                    <span>个</span>
                </td>
                <td width="8%" className='text_center'>
                    <Select name='repeatable' id={item.id} onChange={_this.onChangeStatus} value={item.repeatable} style={{width:'90%',margin:'auto'}}>
                        <option  value="0" text='forbid'>禁止</option>
                        <option  value="1" text='used'>允许</option>
                    </Select>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('raffleDetail','token'),HandleMixins],
    getInitialState: function () {
        return {
            check_show: true,
            source_data: {},
            task_data: {}
        }
    },
    componentDidMount: function () {
        var _this = this,
            id = this.props.id;
        if(typeof(id) == 'undefined'){
            return false;
        }
        liteFlux.action("raffleDetail").getRaffleDetail(this.props.id,function(data){
            _this.setState({
                source_data: data
            });
        });
        var request_data = {
            type:2,
            status:1,
            trigger:3
        };
        liteFlux.action("couponList").getCouponList(request_data,function(data){
            _this.setState({
                task_data: data
            });
        });

        /*token*/
        liteFlux.action("token").getToken();
    },
    componentWillReceiveProps: function(props) {
        var _this = this,
            id = props.id;
        if(typeof(id) == 'undefined'){
            return false;
        }
        liteFlux.action("raffleDetail").getRaffleDetail(props.id,function(data){
            _this.setState({
                source_data: data
            });
        });
        var request_data = {
            type:2,
            status:1,
            trigger:3
        };
        liteFlux.action("couponList").getCouponList(request_data,function(data){
            _this.setState({
                task_data: data
            });
        });

        /*token*/
        liteFlux.action("token").getToken();
    },

    getTimeChange: function(type,date){
        var source = this.state.source_data;
        if(type=='begin_at'){
            source.begin_at = date;
        }
        if(type=='end_at'){
            source.end_at = date;
        }
        this.setState({
            source_data: source
        });
    },

    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    componentDidUpdate: function() {

    },
    /*抽奖样式处理*/
    onSelectHandle: function(e){

    },
    /*抽奖资格处理*/
    onLimitHandle: function(e){
        var el = e.target;
    },
    getChangeData: function(data){
        this.setState({
            source_data: data
        });
    },

    uploaded: function(type,data){
        var _this_url = data.data.full_path;
        var source = this.state.source_data;
        if(source.copywritings){
            source.copywritings.weixin = source.copywritings.weixin || {};
            source.copywritings.weibo = source.copywritings.weibo || {};
            if(type=='weixin_img'){
                source.copywritings.weixin.pics = [_this_url];
                source.copywritings.weixin.pic_ids = [data.data.id];
            }
            if(type=='weibo_img'){
                source.copywritings.weibo.pics = [_this_url];
                source.copywritings.weibo.pic_ids = [data.data.id];
            }
        }

        this.setState({
            source_data: source
        });
        console.log(this.state.source_data);
        $('.webuploader-pick').text('点击上传图片');
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(this.state.source_data);
        }
    },

    /*确定修改*/
    save: function(){
        var source = this.state.source_data;
        source.style_id = 1;
        console.log(source);
        if(this.props.id){
            source.copywritings= source.copywritings || {};
            source.copywritings.weixin = source.copywritings.weixin || {};
            source.copywritings.weibo = source.copywritings.weibo || {};
            source.copywritings.weixin.channel = 1;
            source.copywritings.weibo.channel = 2;
            liteFlux.action("raffleDetail").updateRaffle(this.props.id,source);
        }else{
            if(!source.name){
                alert('名称不能为空!');
                return false;
            }
            if(!source.rule){
                alert('规则不能为空!');
                return false;
            }
            if(!source.begin_at){
                alert('开始时间不能为空!');
                return false;
            }
            if(!source.end_at){
                alert('结束时间不能为空!');
                return false;
            }
            if(!source.title){
                alert('标题不能为空!');
                return false;
            }
            if(!source.sub_title){
                alert('副标题名称不能为空!');
                return false;
            }
            delete  source.copywritings;
            source.attendance_bonus = source.attendance_bonus ||0;
            source.share_bonus = source.share_bonus ||0;
            liteFlux.action("raffle").createRaffle(source);
        }

    },
    render: function () {
        var _this = this;

        var source = this.state.source_data || {};
        var $checkShow = '';
        if(_this.state.check_show){
            $checkShow=(
                <FormGroup>
                    <Label control sm={1}></Label>
                    <Col sm={11} style={{marginTop:'2'}}>
                        <div className="draw_content">
                            <Row>
                                <Col sm={12}>
                                    <div className="draw_number">奖品1</div>
                                    <div className="draw_number">奖品2</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <div className="draw_number center_number">奖品6</div>
                                    <div className="draw_number circle_draw">
                                           <div className="title">标题</div>
                                           <div className="sub_title">副标题</div>
                                           <div className="title_center">点我抽奖</div>
                                           <div className="title_right">剩余X次抽奖机会</div>
                                    </div>
                                    <div className="draw_number center_number">奖品3</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <div className="draw_number">奖品5</div>
                                    <div className="draw_number">奖品4</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </FormGroup>
            )
        }
        /*奖品*/
        source.prizes = source.prizes || [];
        var prizesData = source.prizes;


        var copywritings = source.copywritings;
        var weixin_title = '' , weibo_title = '' , weixin_content = '' , weibo_content = '' , weixin_link = '' , weibo_link = '';
        if(copywritings){
            if(copywritings.weixin){
                weixin_title = copywritings.weixin.title;
                /*回车键处理*/
                var element = copywritings.weixin.content || '';
                for(var i=0; i<element.length; i++){
                    element =  element.replace('<br/>','\n');
                }
                weixin_content = element;
                weixin_link = copywritings.weixin.link;
            }
            if(copywritings.weibo){
                weibo_title = copywritings.weibo.title;
                /*回车键处理*/
                var element = copywritings.weibo.content || '';
                for(var i=0; i<element.length; i++){
                    element =  element.replace('<br/>','\n');
                }
                weibo_content = element;
                weibo_link = copywritings.weibo.link;
            }
        }

        /*token*/
        var token = _this.state.token;
        if(typeof(token) == 'undefined' || token == '')
            return false;
        /*分享文案*/
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'lottery_prize',
                entity_id: 0,
                type_id: 0,
                token: token.uptoken
            }
        };

        var weixin_img = '' , weibo_img = '' , weixin_img_src = '' ,weibo_img_src = '';
        if(copywritings){

            copywritings.weixin = copywritings.weixin || {};
            copywritings.weixin.pics = copywritings.weixin.pics || '';
            if(copywritings.weixin.pics){
                weixin_img_src = copywritings.weixin.pics;
            }

            weixin_img = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img style={{pointerEvents: 'none'}} src={weixin_img_src} width='120' alt='请上传图片'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );

            copywritings.weibo = copywritings.weibo || {};
            copywritings.weibo.pics = copywritings.weibo.pics || '';
            if(copywritings.weibo.pics){
                weibo_img_src = copywritings.weibo.pics;
            }

            weibo_img = (
                <div ref='box' style={{maxWidth:'640px',position:'relative'}}>
                    <img style={{pointerEvents: 'none'}} src={weibo_img_src} width='120' alt='请上传图片'/>
                    <div style={{left:'0',right:'0',top:'0',bottom:'0',position:'absolute'}}></div>
                </div>
            );
        }

        var shareNode = (
            <div className="share_section">
                <table border='1' style={{borderCollapse:'collapse'}}>
                    <tr>
                        <td>渠道</td>
                        <td>微信</td>
                        <td>微博</td>
                    </tr>
                    <tr>
                        <td>标题</td>
                        <td className='td_text'>
                            <input name='weixin_title' type="text" placeholder='请填入分享到微信的标题' value={weixin_title} onChange={_this.handleChange}/>
                        </td>
                        <td className='td_text'>
                            <input name='weibo_title' type="text" placeholder='请填入分享到微博的标题' value={weibo_title} onChange={_this.handleChange}/>
                        </td>
                    </tr>
                    <tr height='140'>
                        <td>内容</td>
                        <td className='td_text'>
                            <textarea name='weixin_content' placeholder='请填入分享到微信的内容' value={weixin_content} onChange={_this.handleChange}></textarea>
                        </td>
                        <td className='td_text'>
                            <textarea name='weibo_content' placeholder='请填入分享到微博的内容' value={weibo_content} onChange={_this.handleChange}></textarea>
                        </td>
                    </tr>
                    <tr min-height='120'>
                        <td>图片</td>
                        <td className='td_text'>
                            <Uploader qiniu={true} domain={token.domain} name='weixin_img' id='weixin_img_updloader' opts={UploaderOpts} success={_this.uploaded.bind(null,'weixin_img')}></Uploader>
                            {weixin_img}
                        </td>
                        <td className='td_text' style={{padding:'20'}}>
                            <Uploader qiniu={true} domain={token.domain} name='weibo_img'  id='weibo_img' opts={UploaderOpts} success={_this.uploaded.bind(null,'weibo_img')}></Uploader>
                            {weibo_img}
                        </td>
                    </tr>
                    <tr>
                        <td>分享链接</td>
                        <td className='td_text'>
                            <input name='weixin_link' type="text" placeholder='请填入分享到微信的链接' value={weixin_link} onChange={_this.handleChange}/>
                        </td>
                        <td className='td_text'>
                            <input name='weibo_link' type="text" placeholder='请填入分享到微博的链接' value={weibo_link} onChange={_this.handleChange}/>
                        </td>
                    </tr>
                </table>
            </div>
        );

        /*优惠券*/
        var task_data = this.state.task_data;
        task_data.data = task_data.data || [];
        var taskData = task_data.data;

        /*回车键处理*/
        source.rule =source.rule || '';
        var element = source.rule;
        for(var i=0; i<element.length; i++){
            element =  element.replace('<br/>','\n');
        }


        var trNode = '' ,titleNode = '' ,shareNodeContent = '';
        if(_this.props.id){
            trNode = (
                <tr>
                    <th width="4%" className='text_center'>No.</th>
                    <th width="8%" className='text_center'>奖品类型</th>
                    <th width="10%" className='text_center'>奖品名称</th>
                    <th width="10%" className='text_center'>PC端图片</th>
                    <th width="10%" className='text_center'>PC端中奖弹出图片</th>
                    <th width="10%" className='text_center'>M端图片</th>
                    <th width="10%" className='text_center'>M端中奖弹出图片</th>
                    <th width="6%" className='text_center'>数量</th>
                    <th width="6%" className='text_center'>已中奖数量</th>
                    <th width="6%" className='text_center'>概率</th>
                    <th width="14%" className='text_center'>条件</th>
                    <th width="8%" className='text_center'>重复中奖</th>
                </tr>
            );

            titleNode = (
                <FormGroup>
                    <Label control sm={1}>奖品设置:</Label>
                    <Col sm={11} style={{marginTop:'2'}}>
                    </Col>
                </FormGroup>
            );

            shareNodeContent = (
                <div>
                    <FormGroup>
                        <Label control sm={1}>分享:</Label>
                        <Col sm={11} style={{marginTop:'2'}}>
                            {shareNode}
                        </Col>
                    </FormGroup>
                </div>
            );

        }else{
            trNode = '';
            titleNode = ''
            shareNodeContent = '';
        }

        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <div>
                        <a className="a_none_underline" href="#/promotion/raffle/raffleList">
                            <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回抽奖列表</Button>
                        </a>
                    </div>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Form horizontal>
                                    <FormGroup>
                                        <Label control sm={1}>名称:</Label>
                                        <Col sm={11}>
                                            <Input
                                                id='_this_name'
                                                className='inline'
                                                type='text'
                                                style={{width:'30%'}}
                                                value={source.name}
                                                onChange={_this.handleChange}
                                                />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>规则:</Label>
                                        <Col sm={11}>
                                            <Textarea
                                                id='_this_rule'
                                                style={{width:'30%',height:'150'}}
                                                value={element}
                                                onChange={_this.handleChange}
                                                />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>时间:</Label>
                                        <Col sm={11}>
                                            <TimeFilter data={source} timeCallBack={_this.getTimeChange}></TimeFilter>
                                            <input id='begin_at' type="hidden"/>
                                            <input id='end_at' type="hidden"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>标题:</Label>
                                        <Col sm={11}>
                                            <Input
                                                id='_this_title'
                                                className='inline'
                                                type='text'
                                                style={{width:'30%'}}
                                                value={source.title}
                                                onChange={_this.handleChange}
                                                />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>副标题:</Label>
                                        <Col sm={11}>
                                            <Input
                                                id='_this_sub_title'
                                                className='inline'
                                                type='text'
                                                style={{width:'30%'}}
                                                value={source.sub_title}
                                                onChange={_this.handleChange}
                                                />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>抽奖样式:</Label>
                                        <Col sm={11} style={{marginTop:'2'}}>
                                            <Input id="style_checkbox" type='checkbox' className='fl' value={source.style_id} checked={true} readOnly />
                                            <Label className='fl ml5 mr30'>方形转盘</Label>
                                        </Col>
                                    </FormGroup>
                                    {$checkShow}
                                    {titleNode}
                                    <FormGroup>
                                        <Table striped>
                                            <thead className='bg-orange65 fg-white'>
                                            {trNode}
                                            </thead>
                                            <tbody>
                                            {
                                                prizesData.map(function(item,key){
                                                    return(
                                                            <TableList changeCallBack={_this.getChangeData} item={item} key={item.id} source={source} task_data={taskData}></TableList>
                                                        )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label control sm={1}>抽奖资格:</Label>
                                        <Col sm={11} style={{marginTop:'2'}}>
                                            <div>
                                                <Input id="checkbox_attendance" type='checkbox' name="attendance" className='fl' vaule={source.attendance_bonus} checked={source.attendance_bonus} onChange={_this.handleChange}/>
                                                <Label className='fl ml5 mr30'>每天签到</Label>
                                            </div>
                                            <div>
                                                <Input id="checkbox_share" type='checkbox' name="share" className='fl' vaule={source.share_bonus} checked={source.share_bonus} onChange={_this.handleChange}/>
                                                <Label className='fl ml5 mr30'>分享活动页</Label>
                                            </div>
                                        </Col>
                                    </FormGroup>
                                    {shareNodeContent}
                                </Form>
                            </Col>
                        </Row>
                        <div className='text-center mb20 pb20'>
                            <Button sm bsStyle='blue' onClick={this.save.bind(null,source)}>保  存</Button>
                            <a className="a_none_underline" href="#/promotion/raffle/raffleList">
                                <Button type='submit' bsStyle='blue' style={{marginLeft:'24'}}>返回抽奖列表</Button>
                            </a>
                            {' '}
                        </div>
                    </Grid>
                </div>
                {this.props.children}
            </Container>
        );
    }
});
var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
