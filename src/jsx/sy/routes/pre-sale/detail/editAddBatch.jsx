/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');

var liteFlux = require('lite-flux');
var goodSkuListStore = require('../../../modules/stores/goods/goodsSkuListStore.jsx');

var classSet = React.addons.classSet;


var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var source = this.state.source;
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
        var type = this.props.type;
        this.props.callBackBeginTime(time_start_at,type);
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            end_date: date
        });
        var type = this.props.type;
        this.props.callBackEndTime(time_end_at,type);
    },
    componentDidMount: function(){
        $('.datepicker__input').width(218);
        $('.datepicker__input').addClass('form-control');
        var source = this.props.source;
        var type = this.props.type;
        if(type=='beginTime'){
            $('.datepicker__input').eq(0).val(source.begin_at);
            $('.datepicker__input').eq(1).val(source.end_at);
        }
        if(type=='payAndsendTime'){
            $('.datepicker__input').eq(0).val(source.pay_deadline);
            $('.datepicker__input').eq(1).val(source.delivery_time);
        }
    },
    componentDidUpdate: function() {

    },
    render: function(){
        var type = this.props.type,
            timeNode = '';
        if(type=='beginTime'){
            timeNode = (
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
        if(type=='payAndsendTime'){
            timeNode = (
                <div>
                    <FormGroup>
                        <Label control sm={3} className='right_padding'>尾款支付期限:</Label>
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
                        <Label control sm={3} className='right_padding'>预计发货时间:</Label>
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
        return timeNode
    }
});


/*设置sku基本信息*/
var PreSaleSkuSet = React.createClass({
    getInitialState: function () {
        return {
            source: this.props.source,
            skuList: this.props.skuList
        }
    },
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var skuList = this.state.skuList || [];
        for(var key in skuList){
            if(el.id==skuList[key].sku_id){
                skuList[key][name] = value;
                skuList[key]['goods_sku_id'] = skuList[key].sku_id;
            }
        }
        this.props.callbackSkuSet(skuList);
    },
    render: function(){
        var item = this.props.item || {};
        var url = '';
        if(item.images){
            url = item.images+'?imageView2/1/w/100';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="12%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} width='100' />
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="12%" className='text_center'>{item.attribute_name}</td>
                            <td width="6%" className='text_center'>{item.price}</td>
                            <td width="8%" className='text_center'>
                                <Input
                                    id={item.sku_id}
                                    name='presale_price'
                                    placeholder='必填'
                                    type='text'
                                    value={item.presale_price}
                                    className='inline'
                                    style={{width:'50%'}}
                                    onChange={this.handleChange}
                                    />
                            </td>
                            <td width="8%" className='text_center'>
                                <Input
                                    id={item.sku_id}
                                    name='earnest_money'
                                    placeholder='必填'
                                    type='text'
                                    value={item.earnest_money}
                                    className='inline'
                                    style={{width:'50%'}}
                                    onChange={this.handleChange}
                                    />
                            </td>
                            <td width="8%" className='text_center'>
                                <Input
                                    id={item.sku_id}
                                    name='quantity'
                                    placeholder='必填'
                                    type='text'
                                    value={item.quantity}
                                    className='inline'
                                    style={{width:'50%'}}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsSkuList'),HandleMixins],
    getInitialState: function () {
        return {
            source: {},
            skuData: [],
            batchLog: 1,
            shown: false
        }
    },
    componentDidMount: function () {
        var _this = this;
        var request_data = {
            goods_ids: this.props.goods_id
        };
        var batchLength = +this.props.length;
        liteFlux.action("goodsSkuList").getGoodsSkuListByIds(request_data,function(data){
            _this.setState({
                skuData: data.data,
                batchLog: batchLength+1
            })
        });
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {

    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    getBeginTime: function(date,type){
        var source = this.state.source;
        if(type=='beginTime'){
            source.begin_at = date;
        }
        if(type=='payAndsendTime'){
            source.pay_deadline = date;
        }

        this.setState({
            source: source
        })
    },
    getEndTime: function(date,type){
        var source = this.state.source;
        if(type=='beginTime'){
            source.end_at = date;
        }
        if(type=='payAndsendTime'){
            source.delivery_time = date;
        }
        this.setState({
            source: source
        })
    },
    skuSet: function(data){
        var source = this.state.source;
        source.skus = data;
        this.setState({
            source: source
        })
    },
    addPreBatchs: function(){
        var _this = this;
        var source = this.state.source;
        if(!source.begin_at){
            alert('开始时间没填！');
            return false;
        }
        if(!source.end_at){
            alert('结束时间没填！');
            return false;
        }
        if(!source.pay_deadline){
            alert('尾款支付期限没填！');
            return false;
        }
        if(!source.delivery_time){
            alert('预计发货时间没填！');
            return false;
        }
        source.goods_id = this.props.goods_id;
        var request_data = source;
        var id = this.props.id;
        var batchOrder = this.state.batchLog;
        liteFlux.action("preSale").postPreSaleBatchs(id,request_data,batchOrder,function(data){
            _this.setState({
                batchLog: data
            })
        });
    },

    /*预售下一阶段阶段*/
    preSaleNextNode: function(){
        var _this = this;
        var source = this.state.source;

        var skuList = this.state.skuData;
        return (
            <div>
                <hr/>
                <FormGroup>
                    <Label control sm={3} className='right_padding label_nav'>阶段二:</Label>
                    <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}>
                        <Label className='label_nav'>预售批次<span style={{color:'red'}}>{this.state.batchLog}</span></Label>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>限购:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Input
                            name='quantity_limit'
                            type='text'
                            value={source.quantity_limit}
                            className='inline'
                            style={{width:'240'}}
                            onChange={this.handleChange}
                            />
                    </Col>
                </FormGroup>
                <TimeFilter
                    source={source}
                    type='beginTime'
                    callBackBeginTime={this.getBeginTime}
                    callBackEndTime={this.getEndTime}
                    />
                <TimeFilter
                    source={source}
                    type='payAndsendTime'
                    callBackBeginTime={this.getBeginTime}
                    callBackEndTime={this.getEndTime}
                    />

                <FormGroup>
                    <Table striped>
                        <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="12%" style={{paddingLeft:'50'}}>商品</th>
                            <th width="12%" className='text_center'>规格</th>
                            <th width="6%" className='text_center'>原价（元）</th>
                            <th width="8%" className='text_center'>预售价（元）</th>
                            <th width="8%" className='text_center'>预售订金（元）</th>
                            <th width="8%" className='text_center'>库存</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            skuList.map(function(item,key){
                                return (
                                    <PreSaleSkuSet source = {source} skuList = {skuList} item = {item} key={key} callbackSkuSet = {_this.skuSet}></PreSaleSkuSet>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </FormGroup>


                <FormGroup>
                    <Label control sm={3} >是否闪电发货</Label>
                    <Col sm={9} style={{marginTop:'5'}}>
                        <Input
                            type='radio'
                            name="is_quick"
                            value='1'
                            className='fl'
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>是</Label>
                        <Input
                            type='radio'
                            name="is_quick"
                            value='0'
                            className='fl'
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>否</Label>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} >是否首发优惠</Label>
                    <Col sm={9} style={{marginTop:'5'}}>
                        <Input
                            type='radio'
                            name="is_preferential"
                            value='1'
                            className='fl'
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>是</Label>
                        <Input
                            type='radio'
                            name="is_preferential"
                            value='0'
                            className='fl'
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>否</Label>
                    </Col>
                </FormGroup>
            </div>
        )
    },

    /*新增预售批次按钮*/
    addPreSaleBtn: function(){
        return (
            <FormGroup style={{marginTop:'38'}}>
                <Label control sm={3}></Label>
                <Col sm={9}>
                    <Button sm  bsStyle='blue' onClick={this.addPreBatchs}>保存该批次并返回列表</Button>
                </Col>
                <hr/>
            </FormGroup>
        )
    },
    returnBefore: function(){
        history.go(-1);
    },

    render: function () {
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
                                <Form horizontal>
                                    {this.preSaleNextNode()}
                                    {this.addPreSaleBtn()}
                                </Form>
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
                <Body id={this.props.id} goods_id={this.props.goods_id} length={this.props.length}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
