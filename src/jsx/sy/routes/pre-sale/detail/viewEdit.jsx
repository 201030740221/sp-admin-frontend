/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');
var showSpuRadioButton = require('../../../widgets/goodsSpuList/showSpuRadioModelButton.jsx');
var ArticleBar = require('../../../widgets/article/articleBar.jsx');
var TaskBar = require('../../../widgets/coupon/index.jsx');
var ShowButton = require('../../../widgets/goodsSkuList/showModelButton.jsx');
var viewEditBatches = require('./ViewEditBatch.jsx');
var Template = require('./template.jsx');
var PreSaleUpload = require('./editPreSaleUpload.jsx');

var liteFlux = require('lite-flux');
var tokenStore = require('../../../modules/stores/tokenStore.jsx');
var Store = require('../../../modules/stores/preSale/listStore.jsx');
var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');

var classSet = React.addons.classSet;


var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var source = this.state.source;
        if(name=='is_show'){
            value = +value;
        }
        source[name] = value;
        this.setState({
            source: source
        });
    },
    handleSelectChange: function(e){
        var el = e.target;
        var value = el.value;
        var name = el.name;
        var source = this.state.source;
        source[name] = value;
    }
};


/*时间*/
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            start_date: '',
            end_date:  ''
        }
    },
    changeStartTime: function(date){
        var time_start_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            start_date: date
        });
        this.props.callBackBeginTime(time_start_at);
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            end_date: date
        });
        this.props.callBackEndTime(time_end_at);
    },
    componentDidMount: function(){
        $('.datepicker__input').width(218);
        $('.datepicker__input').addClass('form-control');
        var source = this.props.source;
        $('.datepicker__input').eq(0).val(source.begin_at);
        $('.datepicker__input').eq(1).val(source.end_at);
    },
    componentDidUpdate: function() {
        $('.datepicker__input').width(218);
        $('.datepicker__input').addClass('form-control');
        var source = this.props.source;
        $('.datepicker__input').eq(0).val(source.begin_at);
        $('.datepicker__input').eq(1).val(source.end_at);
    },
    render: function(){
        var errors = this.props.errors;
        return (
                <div>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>活动开始时间:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <DatePicker
                                key="startTime"
                                onChange={this.changeStartTime}
                                dateFormat='YYYY-MM-DD HH:mm:ss'
                                placeholderText=''
                                selected={this.state.start_date}>
                            </DatePicker>
                        </Col>
                        <BLabel bsStyle='danger'>{errors.begin_at ? errors.begin_at: ''}</BLabel>
                    </FormGroup>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>活动结束时间:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <DatePicker
                                key="endTime"
                                onChange={this.changeEndTime}
                                dateFormat='YYYY-MM-DD HH:mm:ss'
                                placeholderText=''
                                selected={this.state.end_date}>
                            </DatePicker>
                        </Col>
                        <BLabel bsStyle='danger'>{errors.end_at ? errors.end_at: ''}</BLabel>
                    </FormGroup>

                </div>
            )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('preSale','goodsSkuList','token'),HandleMixins],
    getInitialState: function () {
        return {
            source: {},
            errors: {},
            batches: {},
            skuData: [],
            navLog: 0
        }
    },
    getSource: function(id){
        var _this = this;
        var request_data = {};
        liteFlux.action("preSale").getPreSaleDetail(id,request_data,function(data){
            data.this_goods_id = data.goods_id;
            _this.setState({
                source: data
            })
        });
        liteFlux.action("preSale").getPreSaleBatchs(id,request_data,function(data){
            _this.setState({
                batches: data
            });
            var request_data = {
                goods_ids: _this.props.goods_id
            };
            liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
                _this.setState({
                    skuData: data.data
                })
            });
        });
    },
    componentDidMount: function () {
        var id = this.props.id;
        if(id!='create'){
            this.getSource(id);
        }
        /*token*/
        liteFlux.action("token").getToken();
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {
        var id = props.id;
        if(id!='create'){
            this.getSource(id);
        }
        /*token*/
        liteFlux.action("token").getToken();
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    getBeginTime: function(date){
        var source = this.state.source;
        source.begin_at = date;
        this.setState({
            source: source
        })
    },
    getEndTime: function(date){
        var source = this.state.source;
        source.end_at = date;
        this.setState({
            source: source
        })
    },
    getArticleId: function(data){
        var source = this.state.source;
        source.article_id = data;
        this.setState({
            source: source
        })
    },
    getTask: function(val){

        var source = this.state.source;
        source.coupon = source.coupon||{};
        source.coupon.couponTask = source.coupon.couponTask||{};
        source.coupon.couponTask.id = +val;

        this.setState({
            source: source
        })

    },
    /*spu*/

    getSelectedData: function(data){
        var source = this.state.source;
        source['goods_id'] = data[0].id;
        this.setState({
            source: source
        })
    },

    /*sku*/
    getFinishSelectData: function(data){

        var source = this.state.source;
        console.log(data,'......');
        source.coupon_id = data[0].sku_id;
        source.coupon = source.coupon||{};
        source.coupon.couponTask = source.coupon.couponTask||{};
        source.coupon.couponTask.id = data[0].coupon_task_id;
        source.this_goods_id = data[0].goods_id;

        this.setState({
            source: source
        });
    },

    /*下一步*/
    saveAndGoNext: function(){

        var _this = this;
        var source = this.state.source;

        source.is_show = source.is_show || 0;
       /* source.m_template = 111;
        source.template = 222;*/
        
        // TODO 模板功能暂时未开通
        if(+source.template==-1 || source.template=='' || source.template==undefined){
            alert('PC端模板还没选！');
            return false;
        }


        var _this_source = jQuery.extend(true,{}, source);
        var pc_sliders = [] , m_sliders = [] , m_contents = [];

        _this_source.sliders.forEach(function(item,key){
            pc_sliders.push(item.media_id);
            delete item;
        })
        _this_source.mobileSliders.forEach(function(item,key){
            m_sliders.push(item.media_id);
            delete item;
        })
        _this_source.mobileContents.forEach(function(item,key){
            m_contents.push(item.media_id);
            delete item;
        })

        _this_source.pc_sliders = pc_sliders;
        _this_source.m_sliders = m_sliders;
        _this_source.m_contents = m_contents;
        _this_source.cover = _this_source.covers.media_id;
        _this_source.thumb = _this_source.thumbs.media_id;

        var request_data = _this_source;
        var id = this.props.id;

        if(_this_source.article_id==-1 || _this_source.article_id=='' || _this_source.article_id==undefined){
            alert('亲，预售规则还没选哦！');
            return false;
        }
        if(!_this_source.description){
            alert('亲，场景描述不能为空哦！');
            return false;
        }

        if(this.props.id=='create'&&this.props.goods_id=='create'){
            liteFlux.action("preSale").createPreSale(request_data,function(data){
                _this.setState({
                    errors: data.errors
                })
            });
        }else{
            liteFlux.action("preSale").updatePreSale(id,request_data,function(data){});
        }
    },
    setSource: function(data){
        this.setState({
            source: data
        })
    },

    setTemplate: function(data,type){
        var source = this.state.source;
        if(type=='PC'){
            source.template = data;
            this.setState({
                source: source
            })
        }
        if(type=='M'){
            source.m_template = data;
            this.setState({
                source: source
            })
        }
    },

    /*预售基础阶段*/
    preSaleBaseNode: function(){
        var source = this.state.source,
            errors = this.state.errors;

        var translate_arr = [{
            id: source.goods_id
        }];
        /*显示商品列表*/
        var spuNode = (
            <showSpuRadioButton
                callbackFinishSelectSource={this.getSelectedData}
                selectedArr={translate_arr}
                />
        );

        return (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>活动名称:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='name'
                            type='text'
                            value={source.name}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.name ? errors.name: ''}</BLabel>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售商品:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='goods_id'
                            type='text'
                            readOnly
                            value={source.goods_id}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.goods_id ? errors.goods_id: ''}</BLabel>
                        {spuNode}
                    </Col>
                </FormGroup>

                <Template
                    source={source}
                    callBackTemplate = {this.setTemplate}
                    />

                <TimeFilter
                    source={source}
                    errors={errors}
                    type='baseTime'
                    callBackBeginTime={this.getBeginTime}
                    callBackEndTime={this.getEndTime}
                    />
                <FormGroup>
                    <Label control sm={3} className='right_padding'>场景描述:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Textarea
                            name='description'
                            value={source.description}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.description ? errors.description: ''}</BLabel>
                    </Col>
                </FormGroup>
            </div>
        )
    },
    /*预售阶段一，即将预售*/
    preSaleFirstNode: function(){

        var source = this.state.source,
            errors = this.state.errors;

        return (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding label_nav'>阶段一:</Label>
                    <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}>
                        <Label className='label_nav'>即将预售</Label>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>原价说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='old_price_tip'
                            type='text'
                            value={source.old_price_tip}
                            placeholder='必填'
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.old_price_tip ? errors.old_price_tip: ''}</BLabel>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售价说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='presale_price_tip'
                            type='text'
                            value={source.presale_price_tip}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.presale_price_tip ? errors.presale_price_tip: ''}</BLabel>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售订金:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='earnest_money_tip'
                            type='text'
                            value={source.earnest_money_tip}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                        <BLabel bsStyle='danger'>{errors.earnest_money_tip ? errors.earnest_money_tip: ''}</BLabel>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>虚拟商品:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='coupon_id'
                            type='text'
                            readOnly
                            value={source.coupon_id}
                            className='inline'
                            style={{width:'240'}}
                            />
                        <BLabel bsStyle='danger'>{errors.coupon_id ? errors.coupon_id: ''}</BLabel>
                        <ShowButton
                            sku_sn={source.coupon_id}
                            callbackFinishSelectSource={this.getFinishSelectData}
                            />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>关联优惠券:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <TaskBar
                           source = {source}
                           taskCallBack = {this.getTask}
                            />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预售规则:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <ArticleBar source={source} callBackArticleId = {this.getArticleId}></ArticleBar>
                    </Col>
                    <BLabel bsStyle='danger'>{errors.article_id ? errors.article_id: ''}</BLabel>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >是否在频道显示</Label>
                    <Col sm={9} style={{marginTop:'5'}}>
                        <input
                            type='radio'
                            name="is_show"
                            value='1'
                            className='fl'
                            checked = {source.is_show}
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>显示</Label>
                        <Input
                            type='radio'
                            name="is_show"
                            value='0'
                            className='fl'
                            checked = {!source.is_show}
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>隐藏</Label>
                    </Col>
                    <BLabel bsStyle='danger'>{errors.is_show ? errors.is_show: ''}</BLabel>
                </FormGroup>
            </div>
        )
    },


    /*预售结尾*/
    preSaleFootNode: function(){

        var allBatches = this.state.batches,
            batchesArr = allBatches.data || [];
        var batchLength = batchesArr.length;

        var saveText = '保存';
        var editAddBatchNode = (
            <a className='a_none_underline ml15' href={"#/preSale/editAddBatch/"+this.props.id+"/goodsId/"+this.props.goods_id+'/batchLength/'+batchLength}><Button sm  bsStyle='blue'>新增该预售的批次</Button></a>
        );

        if(this.props.id=='create'&&this.props.goods_id=='create'){
            saveText = '创建';
            editAddBatchNode = '';
        }

        return (
            <div>
                <FormGroup>
                    <Col sm={3}>

                    </Col>
                    <Col sm={9} className="mb15 pr0">
                        <Button sm  bsStyle='blue' onClick={this.saveAndGoNext}>{saveText}</Button>
                        {editAddBatchNode}
                    </Col>
                </FormGroup>
            </div>
        )
    },

    changeTab: function(id,i, e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            navLog: +i
        })
    },

    render: function () {
        var _this = this;
        var source = this.state.source;

        source.sliders = source.sliders || [];
        source.mobileSliders = source.mobileSliders || [];
        source.mobileContents = source.mobileContents || [];

        if(source.sliders.length==0){
            source.sliders.push(
                {
                    'id': null,
                    media: {
                        full_path: ''
                    }
                }
            );
        }
        if(source.mobileSliders.length==0){
            source.mobileSliders.push(
                {
                    'id': null,
                    media: {
                        full_path: ''
                    }
                }
            );
        }
        if(source.mobileContents.length==0){
            source.mobileContents.push(
                {
                    'id': null,
                    media: {
                        full_path: ''
                    }
                }
            );
        }

        /*token*/
        var token = this.state.token;
        if(typeof(token) == 'undefined' || token == '')
            return false;

        /*所有批次*/
        var allBatches = this.state.batches,
            batchesArr = allBatches.data || [];

        var active = this.state.navLog;
        var navNode = batchesArr.map(function(item,key){
            var className = classSet({
                'active': key+1 == active,
                'b-tab': true
            });
            return (
                <li className={className} key={key}>
                    <a href="#" onClick={_this.changeTab.bind(null, item.id, key+1)}>批次{key+1}</a>
                </li>
            )
        });

        var batchLength = batchesArr.length;
        var navContentNode = batchesArr.map(function(item,key){
            var className = classSet({
                'active': key+1 == active,
                'tab-pane': true
            });
            var contentClass = ' batches_hide';
            if(key+1==active){
                contentClass = ' batches_show';
            }else{
                contentClass = ' batches_hide';
            }
            return (
                <div className={className+' '+contentClass} key={key}>
                    <viewEditBatches
                        id={_this.props.id}
                        goods_id={_this.props.goods_id}
                        skuData = {_this.state.skuData}
                        item = {item}
                        key = {key}
                        batchLength = {batchLength}
                        />
                </div>
            )
        });

        var className = classSet({
            'active': 0 == active,
            'b-tab': true
        });
        var contentClass = ' batches_hide';
        if(active==0){
            contentClass = ' batches_show';
        }else{
            contentClass = ' batches_hide';
        }
        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <div>
                        <a className="a_none_underline" href="#/preSale/list">
                            <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回预售列表</Button>
                        </a>
                    </div>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <PanelContainer>
                                    <Panel>
                                        <PanelBody>
                                            <ul className="nav nav-tabs nav-green">
                                                <li  className={className}>
                                                    <a href="#" onClick={_this.changeTab.bind(null, '', 0)}>基本信息</a>
                                                </li>
                                                {navNode}
                                            </ul>
                                            <div style={{paddingTop:'30'}}>
                                                <div className={className+' '+contentClass}>
                                                    <Form horizontal>

                                                        {this.preSaleBaseNode()}
                                                        <hr style={{borderColor:'#364F77'}} />
                                                        {this.preSaleFirstNode()}
                                                        <hr style={{borderColor:'#364F77'}} />

                                                        <PreSaleUpload
                                                            source = {source}
                                                            token = {token}
                                                            changeCallBack = {this.setSource}
                                                            />
                                                        <hr style={{borderColor:'#364F77'}} />
                                                        {this.preSaleFootNode()}

                                                    </Form>
                                                </div>
                                                <div>
                                                    <Form horizontal>
                                                        {navContentNode}
                                                    </Form>
                                                </div>
                                            </div>
                                        </PanelBody>
                                    </Panel>
                                </PanelContainer>
                            </Col>
                        </Row>
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
                <Body id={this.props.id} goods_id = {this.props.goods_id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
