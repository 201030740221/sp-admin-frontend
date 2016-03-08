/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../widgets/timepicker/timepicker.jsx');

var liteFlux = require('lite-flux');

var classSet = React.addons.classSet;


var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var source = this.state.source;
        if(name=='is_quick'){
            value = +value;
        }
        if(name=='is_preferential'){
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
            end_date:  '',
            pay_deadline: '',
            delivery_time: ''
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
    changePayDeadlineTime: function(date){
        var PayDeadline = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            pay_deadline: date
        });
        this.props.callBackPayDeadlineTime(PayDeadline);
    },
    changeDeliveryTime: function(date){
        var DeliveryTime = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            delivery_time: date
        });
        this.props.callBackDeliveryTime(DeliveryTime);
    },
    componentDidMount: function(){

    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {

    },
    render: function(){
        var type = this.props.type;
        var source = this.props.source;
        var timeNode = (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>开始时间:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText={source.begin_at}
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
                            placeholderText={source.end_at}
                            selected={this.state.end_date}>
                        </DatePicker>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>尾款支付期限:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <DatePicker
                            key="PayDeadline"
                            onChange={this.changePayDeadlineTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText={source.pay_deadline}
                            selected={this.state.pay_deadline}>
                        </DatePicker>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>预计发货时间:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <DatePicker
                            key="DeliveryTime"
                            onChange={this.changeDeliveryTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText={source.delivery_time}
                            selected={this.state.delivery_time}>
                        </DatePicker>
                    </Col>
                </FormGroup>
            </div>
        )
        return timeNode
    }
});


/*设置sku基本信息*/
var PreSaleSkuSet = React.createClass({
    getInitialState: function () {
        return {

        }
    },
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var item = this.props.item;
        var source = this.props.source;
        for(var key in source.skus){
            if(el.id==source.skus[key].goods_sku_id){
                source['skus'][key][name] = value;
            }
        }
        this.props.callbackSkuSet(source);
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
                                    id={item.goods_sku_id}
                                    name='presale_price'
                                    placeholder='必填'
                                    type='text'
                                    value={item.presale_price}
                                    className='inline'
                                    style={{width:'70%'}}
                                    onChange={this.handleChange}
                                    />
                            </td>
                            <td width="8%" className='text_center'>
                                <Input
                                    id={item.goods_sku_id}
                                    name='earnest_money'
                                    placeholder='必填'
                                    type='text'
                                    value={item.earnest_money}
                                    className='inline'
                                    style={{width:'70%'}}
                                    onChange={this.handleChange}
                                    />
                            </td>
                            <td width="8%" className='text_center'>
                                <Input
                                    id={item.goods_sku_id}
                                    name='quantity'
                                    placeholder='必填'
                                    type='text'
                                    value={item.quantity}
                                    className='inline'
                                    style={{width:'70%'}}
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
    mixins: [HandleMixins],
    getInitialState: function () {
        return {
            source: this.props.item,
            skuData: this.props.skuData,
            shown: false
        }
    },
    componentDidMount: function () {
        this.setState({
            skuData: this.props.skuData
        })
    },
    componentDidUpdate: function() {

    },
    componentWillReceiveProps: function(props) {

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
    getPayDeadlineTime: function(date){
        var source = this.state.source;
            source.pay_deadline = date;
        this.setState({
            source: source
        })
    },
    getDeliveryTime: function(date){
        var source = this.state.source;
            source.delivery_time = date;
        this.setState({
            source: source
        })
    },
    skuSet: function(data){
        var source = this.state.source;
        this.setState({
            source: data
        });
    },
    addPreBatchs: function(){
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

        var request_data = source;
        var id = this.props.id;
        var batchId = this.props.item.id;
        liteFlux.action("preSale").updatePreSaleBatchs(id,batchId,request_data,function(data){

        });
    },

    /*预售下一阶段阶段*/
    preSaleNextNode: function(){
        var _this = this;
        var source = this.props.item;
        var skuList = this.props.skuData,
            itemSku = source.skus || [];

        return (
            <div>
                <hr/>
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
                    callBackBeginTime={this.getBeginTime}
                    callBackEndTime={this.getEndTime}
                    callBackPayDeadlineTime={this.getPayDeadlineTime}
                    callBackDeliveryTime={this.getDeliveryTime}
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
                            itemSku.map(function(item,key){
                                for(var i in skuList){
                                    if(skuList[i].sku_id == item.goods_sku_id){
                                        item.images = skuList[i].images;
                                        item.attribute_name = skuList[i].attribute_name;
                                        item.price = skuList[i].price;
                                    }
                                }
                                return (
                                    <PreSaleSkuSet source={source} item={item} key={key} callbackSkuSet = {_this.skuSet}></PreSaleSkuSet>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </FormGroup>
                <hr/>
                <FormGroup>
                    <Label control sm={3} >是否闪电发货</Label>
                    <Col sm={9} style={{marginTop:'5'}}>
                        <Input
                            type='radio'
                            name="is_quick"
                            value='1'
                            className='fl'
                            checked = {source.is_quick}
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>是</Label>
                        <Input
                            type='radio'
                            name="is_quick"
                            value='0'
                            className='fl'
                            checked = {!source.is_quick}
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
                            checked = {source.is_preferential}
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>是</Label>
                        <Input
                            type='radio'
                            name="is_preferential"
                            value='0'
                            className='fl'
                            checked = {!source.is_preferential}
                            onChange={this.handleChange}
                            />
                        <Label className='fl ml5 mr30'>否</Label>
                    </Col>
                </FormGroup>
            </div>
        )
    },

    /*更新批次按钮*/
    addPreSaleBtn: function(){
        return (
            <FormGroup style={{marginTop:'38'}}>
                <Label control sm={3}></Label>
                <Col sm={9}>
                    <Button sm  bsStyle='blue' onClick={this.addPreBatchs}>保存</Button>
                </Col>
                <hr/>
            </FormGroup>
        )
    },

    render: function () {
        return (
            <Container id='body'>
                <div className="rubix-panel-container">
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

module.exports = Body;
