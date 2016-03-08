/** @jsx React.DOM */
/*创建抽奖活动*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');
var ShowButton = require('../../../widgets/goodsSkuList/showModelButton.jsx');
var ArticleBar = require('../../../widgets/article/articleBar.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var createStore = require('../../../modules/stores/promotion/seckill/seckillStore.jsx');
var Store = require('../../../modules/stores/promotion/seckill/seckillDetailStore.jsx');
var RemindStore = require('../../../modules/stores/promotion/seckill/seckillRemindLogStore.jsx');
var Logs = require('../../../modules/stores/promotion/seckill/seckillLogsStore.jsx');

//
var classSet = React.addons.classSet;


/*时间*/
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            start_date: '',
            end_date:  ''
        }
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            end_date: date
        });
        this.props.callBackEndTime(time_end_at);
    },
    changeStartTime: function(date){
        var time_start_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            start_date: date
        });
        this.props.callBackBeginTime(time_start_at);
    },
    componentDidMount: function(){
        $('.datepicker__input').width(218);
        $('.datepicker__input').addClass('form-control');
        var source = this.props.source;
        $('.datepicker__input').eq(0).val(source.begin_at);
        $('.datepicker__input').eq(1).val(source.end_at);
    },
    componentDidUpdate: function() {

    },
    render: function(){
        return (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>开始时间:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText=''
                            selected={this.state.start_date}>
                        </DatePicker>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>结束时间:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <DatePicker
                            key="endTime"
                            onChange={this.changeEndTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText=''
                            selected={this.state.end_date}>
                        </DatePicker>
                    </Col>
                </FormGroup>
            </div>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('seckill','seckillDetail','seckillRemindLog','seckillLogs'), ModalMixins],
    getInitialState: function () {
        return {
            source: {},
            active_log: true,
            seckill_1: false,
            seckill_2: false,
            active: 'tab_nav_btn active',
            activeNone1: 'tab_nav_btn',
            activeNone2: 'tab_nav_btn'
        }
    },
    componentDidMount: function () {
        var _this = this;

        var id = this.props.id,
            source = this.state.source;
        if(typeof(id)=='undefined'){
            source.status = 1;
            this.setState({
                source: source
            });
            return false;
        }

        /*秒杀详情*/
        var detail_id = {
            fsId: this.props.id
        };
        liteFlux.action("seckillDetail").getSeckillDetail(detail_id,function(data){
            _this.setState({
                source: data
            })
        });
        var dataLog = {
            'size': 10,
            'page': 1
        };
        liteFlux.action("seckillRemindLog").getSeckillRemindLog(this.props.id,dataLog);/*秒杀提醒记录*/
        liteFlux.action("seckillLogs").getSeckillLogs(this.props.id,dataLog);/*秒杀记录*/
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {
        var id = this.props.id,
            source = this.state.source;
        if(typeof(id)=='undefined'){
            source.status = 1;
            this.setState({
                source: source
            });
            return false;
        }

        var detail_id = {
            fsId: props.id
        };
        liteFlux.action("seckillDetail").getSeckillDetail(detail_id);/*秒杀详情*/
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },

    getFinishSelectData: function(data){
        console.log(data);
        var source = this.state.source;
        source.sku_sn = data[0].sku_sn;
        this.setState({
            source: source
        });
    },

    /*handle change*/
    handleChange: function(e){
        var el = e.target,
            source = this.state.source;
        if(el.name=='name'){
            source.name = el.value;
        }
        if(el.name=='stock'){
            source.stock = el.value;
        }
        if(el.name=='price'){
            source.price = el.value;
        }
        this.setState({
            source: source
        })
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
    saveHandle: function(){
        /*创建*/
        var id = this.props.id,
            source = this.state.source;
        if(typeof(id)=='undefined'){
            if(!source.name){
                alert('规则名称不能为空!');
                return false;
            }
            if(!source.sku_sn){
                alert('SKU编号不能为空!');
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
            if(!source.stock){
                alert('秒杀库存不能为空!');
                return false;
            }
            if(!source.price){
                alert('秒杀价不能为空!');
                return false;
            }
            if(!source.article_id){
                alert('秒杀说明不能为空!');
                return false;
            }
            liteFlux.action("seckill").createSeckill(source);
            return false;
        }

        /*edit*/
        var data = this.state.source;
            data.fsId = data.id;
        liteFlux.action("seckillDetail").updateSeckillDetail(data);
    },
    showHandle: function(e){
        var el = e.target;
        var name = el.id;
        if(name=='base_info'){
            this.setState({
                active_log: true,
                seckill_1: false,
                seckill_2: false,
                active: 'tab_nav_btn active',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn'
            })
        }
        if(name=='log_1'){
            this.setState({
                active_log: false,
                seckill_1: true,
                seckill_2: false,
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn active',
                activeNone2: 'tab_nav_btn'
            })
        }
        if(name=='log_2'){
            this.setState({
                active_log: false,
                seckill_1: false,
                seckill_2: true,
                active: 'tab_nav_btn',
                activeNone1: 'tab_nav_btn',
                activeNone2: 'tab_nav_btn active'
            })
        }
    },
    prevHandle: function(log,type){
        if(type=='remind'){ /*提醒记录*/
            if(log.current_page==1){
                Sp.message("已经是第一页了");
                return false;
            }
            var dataLog = {
                'size': 10,
                'page': log.current_page-1
            };
            liteFlux.action("seckillRemindLog").getSeckillRemindLog(this.props.id,dataLog);
        }
        if(type=='logs'){ /*记录*/
            if(log.current_page==1){
                Sp.message("已经是第一页了");
                return false;
            }
            var dataLog = {
                'size': 10,
                'page': log.current_page-1
            };
            liteFlux.action("seckillLogs").getSeckillLogs(this.props.id,dataLog);
        }

    },
    nextHandle: function(log,type){
        if(type=='remind'){ /*提醒记录*/
            if(log.current_page>=log.last_page){
                Sp.message("已经是最后一页了");
                return false;
            }else{
                var dataLog1 = {
                    'size': 10,
                    'page': log.current_page+1
                };
                liteFlux.action("seckillRemindLog").getSeckillRemindLog(this.props.id,dataLog1);
            }

        }
        if(type=='logs'){ /*记录*/
            if(log.current_page>=log.last_page){
                Sp.message("已经是最后一页了");
                return false;
            }else{
                var dataLog2 = {
                    'size': 10,
                    'page': log.current_page+1
                };
                liteFlux.action("seckillLogs").getSeckillLogs(this.props.id,dataLog2);
            }

        }

    },
    render: function () {
        var _this = this;
        /*获取秒杀详情数据*/
        var source = this.state.source || {};


        /*获取秒杀提醒记录*/
        var remindLog = this.state.seckillRemindLog || {};


        /*获取秒杀提醒记录*/
        var logs = this.state.seckillLogs || {};


        /*草稿状态或冻结状态*/

        var baseNode = '';

        var freezeNode = '';
        freezeNode =(
            <Form horizontal>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>规则名称:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input name='name' type='text' value={source.name} className='inline' style={{width:'240'}} onChange={_this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>SKU编号:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input name='sku_sn' type='text' readOnly value={source.sku_sn} className='inline' style={{width:'240'}}/>

                        <ShowButton
                            sku_sn={source.sku_sn}
                            callbackFinishSelectSource={_this.getFinishSelectData}
                            />
                    </Col>
                </FormGroup>

                <TimeFilter source={source} callBackBeginTime={_this.getBeginTime} callBackEndTime={_this.getEndTime}></TimeFilter>

                <FormGroup>
                    <Label control sm={3} className='right_padding'>限购数量:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input name='this_limit_count' type='text'  value='1' readOnly placeholder='必填' className='inline' style={{width:'240'}}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>秒杀库存:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input name='stock' type='text' value={source.stock} className='inline' style={{width:'240'}} onChange={_this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>秒杀价:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input name='price' type='text'  value={source.price} className='inline' style={{width:'240'}} onChange={_this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>秒杀说明:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <ArticleBar source={source} callBackArticleId = {_this.getArticleId}></ArticleBar>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={3}>

                    </Col>
                    <Col sm={9} className="mb15 pr0">
                        <Button sm bsStyle='blue' onClick={_this.saveHandle.bind(null,source)}>保 存</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
        if(source.status==1){
            baseNode = (
                <div>{freezeNode}</div>
            )
        }

        /*激活或过期状态*/
        var activeNode = '' , seckill_log_1 = '' , seckill_log_2 = '';
        if(source.status==2||source.status==4 ||source.status==3){
            if(_this.state.active_log){
                activeNode = (
                    <Form horizontal>
                        <div className='tab_title'></div>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>SKU编号:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.sku_sn} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>规则名称:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.name} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>开始时间:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.begin_at} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>结束时间:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.end_at} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>限购数量:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>1</div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>秒杀库存:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.stock} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>秒杀价:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <div>{source.price} </div>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label control sm={3} className='right_padding'>秒杀说明:</Label>
                            <Col sm={9} className="mb15 pr0">
                                <ArticleBar source={source} ></ArticleBar>
                            </Col>
                        </FormGroup>
                    </Form>
                )
                if(source.status==3){/*冻结状态*/
                    activeNode='';
                    baseNode = (
                        <div>{freezeNode}</div>
                    )
                }
            }else{
                activeNode = ''
            }
            if(_this.state.seckill_1) {
                seckill_log_1 = (
                    <div>
                        <div className='tab_title'>已设置秒杀提醒用户数:  {remindLog.total}</div>
                        <div>
                            <Table striped>
                                <thead className='bg-orange65 fg-white'>
                                <tr>
                                    <th width="10%">设置时间</th>
                                    <th width="6%" className='text_center'>用户名</th>
                                    <th width="15%" className='text_center'>注册手机号码</th>
                                    <th width="15%" className='text_center'>接收手机号码</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    remindLog.data.map(function(item,i){
                                        item.member = item.member || {};
                                        return (
                                            <tr>
                                                <td colSpan="8">
                                                    <table width="100%">
                                                        <tr>
                                                            <td width="10%">{item.updated_at}</td>
                                                            <td width="6%" className='text_center'>{item.member.name}</td>
                                                            <td width="15%" className='text_center'>{item.member.mobile}</td>
                                                            <td width="15%" className='text_center'>{item.mobile}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                            <div>
                                <div className='text_center'>
                                    <Col sm={6}><Page onClick={_this.prevHandle.bind(null,remindLog,'remind')}>上一页</Page></Col>
                                    <Col sm={6}><Page onClick={_this.nextHandle.bind(null,remindLog,'remind')}>下一页</Page></Col>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                seckill_log_1 = ''
            }
            if(_this.state.seckill_2) {
                seckill_log_2 = (
                    <div>
                        <div className='tab_title'><span>秒杀库存：{ source.stock }</span> <span style={{marginLeft:'25'}}>已秒库存：{ source.stock-source.remains }</span> <span style={{marginLeft:'25'}}>剩余库存：{ source.remains }</span></div>
                        <div>
                            <Table striped>
                                <thead className='bg-orange65 fg-white'>
                                <tr>
                                    <th width="10%">秒杀时间</th>
                                    <th width="6%" className='text_center'>用户名</th>
                                    <th width="15%" className='text_center'>订单编号</th>
                                    <th width="15%" className='text_center'>订单状态</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    logs.data.map(function(item,i){
                                        item.member = item.member || {};
                                        item.order = item.order || {};
                                        if (! item.order) {
                                            return (
                                                <tr>
                                                    <td width="10%">{ item.looted_at }</td>
                                                    <td width="6%" className='text_center'>{ item.member.name }</td>
                                                    <td colSpan="2" className='text_center'>还未下单</td>
                                                </tr>
                                            )
                                        }

                                        return (
                                            <tr>
                                                <td width="10%">{ item.looted_at }</td>
                                                <td width="6%" className='text_center'>{ item.member.name }</td>
                                                <td width="15%" className='text_center'><a href={ '#/app/orderDetail/'+item.order.id }>{ item.order.order_no }</a></td>
                                                <td width="15%" className='text_center'>{ item.order.status }</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                            <div>
                                <div className='text_center'>
                                    <Col sm={6}><Page onClick={_this.prevHandle.bind(null,logs,'logs')}>上一页</Page></Col>
                                    <Col sm={6}><Page onClick={_this.nextHandle.bind(null,logs,'logs')}>下一页</Page></Col>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                seckill_log_2 = ''
            }
        }

        /*tab nav*/
        var tab_nav = '';

        if(source.status==2||source.status==4 ||source.status==3){
            tab_nav=(
                     <div style={{marginLeft:'25'}}>
                        <span  id='base_info' className={_this.state.active} name='base_info' onClick={_this.showHandle}>基本信息</span>
                        <span  id='log_1' className={_this.state.activeNone1} name='log_1' onClick={_this.showHandle}>秒杀提醒记录</span>
                        <span  id='log_2' className={_this.state.activeNone2} name='log_2' onClick={_this.showHandle}>秒杀记录</span>
                        <span style={{clear:'both'}}></span>
                      </div>
            )
        }

        return (
            <Container id='body'>
                <div className="rubix-panel-container">
                    <div>
                        <a className="a_none_underline" href="#/promotion/seckill/seckillList">
                            <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回秒杀列表</Button>
                        </a>
                    </div>
                    {tab_nav}
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                {baseNode}
                                {activeNode}
                                {seckill_log_1}
                                {seckill_log_2}
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
                <Body id={this.props.id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
