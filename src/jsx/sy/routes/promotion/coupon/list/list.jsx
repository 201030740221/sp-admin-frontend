/** @jsx React.DOM */

/**
 * 促销管理
 * */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');
var actions = flux.actions.promotionCouponList;
var getStore = flux.store("promotionCouponListStore").getState;
/**
 * 分页
 */
var PagesBar = React.createClass({
    searchData: function(page){
        var store = getStore();
        var data_list = {
            'size': store.per_page,
            'page': page,
            'keyword':store.search_object.coupon_name,
            'value_start_at':store.search_object.start_denomination,
            'value_end_at':store.search_object.end_denomination,
            'valid_time_start_at':store.search_object.valid_time_start_at,
            'valid_time_end_at':store.search_object.valid_time_end_at,
            'status':parseInt(store.search_object.status),
            'channel':store.search_object.channel!=""?parseInt(store.search_object.channel):-1,
            'type':parseInt(store.search_object.type),
            'discount_type':parseInt(store.search_object.discount_type)
        }
        actions.onGetCouponList(data_list);
    },
    onNextPage: function(){
        var store = getStore();
        if( store.current_page== Math.ceil(store.total/store.per_page) ){
            Sp.message("已经是最后一页了","error");
            return;
        }
       this.searchData(store.current_page+1);
    },
    onPrevPage: function(){
        var store = getStore();
        if(store.current_page==1){
            Sp.message("已经是第一页了","error");
            return;
        }
        this.searchData(store.current_page-1);
    },
    render: function(){
        return (
            <Pager>
                <Page onClick={this.onPrevPage} previous href='#'>上一页</Page>{' '}
                <Page onClick={this.onNextPage} next href='#'>下一页</Page>
            </Pager>
        )
    }
});

/**
 * 有效时间
 */
var moment = require('moment');
var DatePicker = require('../../../../widgets/datepicker/datepicker.jsx');
var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            "name":"",
            "value_start_at":"",
            "value_end_at":"",
            "valid_time_start_at":"",
            "valid_time_end_at":"",
            "status":0,
            "channel": 0,
            "type":0

        }
    },
    changeEndTime: function(date){
        var valid_time_end_at = date.format('YYYY-MM-DD HH:mm:ss');
        $('#valid_time_end_at').val(valid_time_end_at);
        this.setState({
            valid_time_end_at: date
        });
    },
    changeStartTime: function(date){
        var valid_time_start_at = date.format('YYYY-MM-DD HH:mm:ss');
        $('#valid_time_start_at').val(valid_time_start_at);
        this.setState({
            valid_time_start_at: date
        });
    },
    componentDidMount: function(){

    },
    render: function(){
        return (
            <div className="mb15">
                <div className="clearfix">
                    <div className="fl mr10">
                        有效时间：
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD HH:mm:ss'
                            placeholderText='Click to select a date'
                            selected={this.state.valid_time_start_at}>
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
                            placeholderText='Click to select a date'
                            selected={this.state.valid_time_end_at}>
                        </DatePicker>

                    </div>
                </div>
            </div>
        )
    }
});


/**
 * 状态筛选
 */
var StatusBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
        this.setState({
            status: value
        });
    },
    render: function(){
        return (
            <div className="mb15">
                <div className="clearfix">
                    <div className="fl mr10" style={{width:'73',textAlign:'right'}}>
                        状态：
                    </div>
                    <Select id='status_select' onChange={this.onChangeStatus} className="wa fl mr0">
                        <option value="-1">全部</option>
                        <option value="0">未启用</option>
                        <option value="1">已启用</option>
                        <option value="2">已禁用</option>
                    </Select>
                </div>
            </div>
        )
    }
});


/**
 * 派发形式筛选
 */
var DistributeBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
    },
    onSearch: function(e){
        var store = getStore();
        var coupon_name = $('#coupon_name').val(),
            start_denomination = $('#start_denomination').val(),
            end_denomination = $('#end_denomination').val(),
            valid_time_start_at = $('#valid_time_start_at').val(),
            valid_time_end_at = $('#valid_time_end_at').val(),
            status_select = $('#status_select option:selected').val(),
            distribute_select = $('#distribute_select option:selected').val(),
            checked_channel = $('#checked_channel').val(),
            status_discount = $('#status_discount option:selected').val();
        var search_data = {
                            'size':store.per_page,
                            'page':store.current_page,
                            'keyword':coupon_name,
                            'value_start_at':start_denomination,
                            'value_end_at':end_denomination,
                            'valid_time_start_at':valid_time_start_at,
                            'valid_time_end_at':valid_time_end_at,
                            'status':parseInt(status_select),
                            'channel':checked_channel!=""?parseInt(checked_channel):-1,
                            'type':parseInt(distribute_select),
                            'discount_type':parseInt(status_discount)
                            }
        console.log(search_data);
        if(parseInt(checked_channel)==0){
            search_data.channel=-1;
        }
        actions.onGetCouponList(search_data);

    },
    render: function(){
        return (
            <div className="mb15">
                <div className="clearfix">
                    <div className="fl mr10" style={{width:'73',textAlign:'right'}}>
                        派发形式：
                    </div>
                    <Select id='distribute_select' onChange={this.onChangeStatus} className="wa fl mr0">
                        <option value="-1">--请选择派发形式--</option>
                        <option value="0">用户领取</option>
                        <option value="1">人工派发</option>
                        <option value="2">自动派发</option>
                        <option value="3">线下派发</option>
                    </Select>
                    <input id="valid_time_start_at" type="hidden" value=''/>
                    <input id="valid_time_end_at" type="hidden" value=''/>
                    <input id="checked_channel" type="hidden"/>
                    <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fr" style={{marginRight:'19%'}}>搜索</Button>
                </div>
            </div>
        )
    }
});

/**
 * 搜索框
 */
var SearchBar = React.createClass({
    onSelectChannel: function(e){
        var el = e.target;
        if(el.checked){
            checked_val += parseInt(el.value);
        }else{
            checked_val -= parseInt(el.value);
        }
        $('#checked_channel').val(checked_val);
        console.log(checked_val);
    },
    render: function(){
        var store = getStore();
        if(parseInt(store.search_object.channel) == -1 ){
            store.search_object.channel = parseInt(store.search_object.channel) + 1;
        }
        checked_val=store.search_object.channel;
        return (
            <div>
                <div className="mr30">
                    <Label control sm={3} style={{textAlign:"right"}}>卡券名称:</Label>
                    <Col sm={9} className="mb15">
                        <Input id='coupon_name' type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                    </Col>
                </div>
                <div className="mr30">
                    <Label control sm={3} style={{textAlign:"right"}}>面额:</Label>
                    <Col sm={9} className="mb15" style={{paddingRight:'0'}}>
                        <Input id='start_denomination' type='text'  placeholder='' className='inline' style={{width:'105'}}/>
                        <span style={{marginLeft:'3' ,marginRight:'7'}}>至</span>
                        <Input id='end_denomination' type='text'  placeholder='' className='inline' style={{width:'105'}} />
                    </Col>
                </div>
                <div className="mr30">
                    <Label control sm={3} style={{textAlign:"right"}}>适用渠道:</Label>
                    <Col sm={9} className="mb15" style={{paddingRight:'0'}}>
                        <Input onClick={this.onSelectChannel} type='checkbox' name='channel' className='fl' value='1'/>
                        <Label className='fl ml5 mr30'>PC端</Label>
                        <Input onClick={this.onSelectChannel} type='checkbox'  name='channel' className='fl ' value='2'/>
                        <Label className='fl ml5 mr30'>移动端APP</Label>
                        <Input onClick={this.onSelectChannel} type='checkbox'  name='channel' className='fl ' value='4'/>
                        <Label className='fl ml5'>移动端M站</Label>
                    </Col>
                </div>
                <div className="mr30">
                    <Label control sm={3} style={{textAlign:"right"}}>卡券类型:</Label>
                    <Col sm={9} className="mb15" style={{paddingRight:'0'}}>
                        <Select id='status_discount' onChange={this.onChangeStatus} className="wa fl mr0">
                            <option value="-1">全部类型</option>
                            <option value="0">满减券</option>
                            <option value="1">折扣券</option>
                            <option value="2">安装服务卡</option>
                            <option value="3">退货保障卡</option>
                        </Select>
                    </Col>
                </div>
            </div>
        )
    }
});


/**
 * 单条优惠券
 */
var couponItem = React.createClass({
    showModal: function(content,title,callback) {
        title = title || '';
        var fn = function(){
            typeof callback === 'function' && callback();
            ModalManager.remove();
        };
        return (
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    <p>{content}</p>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    },
    deleteSelf: function () {
        //确认操作
        console.log(this.props.item.id);
        if(this.props.item == undefined || this.props.item == null){
            this.props.item = {};
        }
        var id = this.props.item.id;
        ModalManager.create(this.showModal('您确定要删除?','操作提示', function(){
            actions.onDeleteCoupon(id);
        }));
    },
    usingSelf: function(){
        //启用操作
        var status = 1 ,coupon_id = this.props.item.id;
        actions.onUpdateStatus(coupon_id,status);
    },
    forbiddenSelf: function(){
        //禁用操作
        var status = 2 ,coupon_id = this.props.item.id;
        actions.onUpdateStatus(coupon_id,status);
    },
    render: function(){
        var self = this;
        var channel_show , type_show , status_show;
        var operate_using = '' , operate_edit = '' , operate_forbidden = '' , operate_delect = '' , operate_see = '';
        /*渠道*/
        switch(parseInt(this.props.item.channel)){
            case 1:
                channel_show = 'PC端';
                break;
            case 2:
                channel_show = '移动端APP';
                break;
            case 3:
                channel_show = 'PC端+移动端APP';
                break;
            case 4:
                channel_show = '移动端M站';
                break;
            case 5:
                channel_show = 'PC端+移动端M站';
                break;
            case 6:
                channel_show = '移动端APP+移动端M站';
                break;
            case 7:
                channel_show = 'PC端+移动端APP+移动端M站';
                break;
        }
        /*派发形式*/
        switch(parseInt(this.props.item.type)){
            case 0:
                type_show = '用户领取';
                break;
            case 1:
                type_show = '人工派发';
                break;
            case 2:
                type_show = '自动派发';
                break;
            case 3:
                type_show = '线下派发';
                break;
        }
        /*状态*/
        switch(parseInt(this.props.item.status)){
            case 0:
                status_show = '未启用';
                operate_using = '启用';
                operate_edit = '编辑';
                operate_delect = '删除';
                break;
            case 1:
                status_show = '已启用';
                operate_forbidden = '禁用';
                if(parseInt(this.props.item.type)==1){
                    operate_forbidden = '';
                }
                operate_see = '查看';
                break;
            case 2:
                status_show = '已禁用';
                operate_using = '启用';
                operate_see = '查看';
                break;
        }
        /*优惠券类型*/
        var diacount_type = '';
        switch(parseInt(this.props.item.discount_type)){
            case 0:
                diacount_type = '满减券';
                break;
            case 1:
                diacount_type = '折扣券';
                break;
            case 2:
                diacount_type = '安装服务卡';
                break;
            case 3:
                diacount_type = '退货保障卡';
                break;
        }
        /*title show*/
        var value_title = '面额';
        var coupon_value = this.props.item.value;
        var value_node = '';
        if(parseInt(this.props.item.discount_type)==1){
            value_title = '折扣率(%)';
            coupon_value = coupon_value.split('.')[1];
        }
        value_node =  value_title+':'+  coupon_value;
        if(parseInt(this.props.item.discount_type)==2||parseInt(this.props.item.discount_type)==3){
            value_node = '';
        }
        var coupon_number = this.props.item.number;
        var number_node = '';
        number_node = '数量:'+coupon_number;
        if(parseInt(this.props.item.type)==1||parseInt(this.props.item.type)==2){
            number_node = '';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table width="100%">
                        <tr>
                            <td width="15%" className='text_center'>
                                <p><a  href={"#/promotion/coupon/detail/"+this.props.item.id}>{this.props.item.name}</a></p>
                                <p> {value_node} </p>
                                <p> {number_node} </p>
                                <p> 领取数量: {this.props.item.received} </p>
                            </td>
                            <td width="8%" className='text_center'>{this.props.item.received}</td>
                            <td width="8%" className='text_center'>{ diacount_type }</td>
                            <td width="8%" className='text_center'>{channel_show}</td>
                            <td width="10%" className='text_center'>{type_show}</td>
                            <td width="20%" className='text_center'>{this.props.item.valid_time_start_at}<span style={{marginLeft:'5',marginRight:'5'}}>至</span>{this.props.item.valid_time_end_at}</td>
                            <td width="13%" className='text_center'>{status_show}</td>
                            <td width="15%" className='text_center'>
                                <a className="a_none_underline" href='javascript:;'><BLabel bsStyle='info' onClick={this.usingSelf}>{operate_using}</BLabel></a>
                                <a className="a_none_underline" href={"#/promotion/coupon/edit/"+this.props.item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{operate_edit}</BLabel></a>
                                <a className="a_none_underline" href='javascript:;'><BLabel bsStyle='info' onClick={this.forbiddenSelf} style={{marginLeft:'15'}}>{operate_forbidden}</BLabel></a>
                                <a className="a_none_underline" href={"#/promotion/coupon/detail/"+this.props.item.id}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{operate_see}</BLabel></a>
                                <a className="a_none_underline" href='javascript:;'><BLabel bsStyle='danger'  onClick={this.deleteSelf} style={{marginLeft: '15'}}>{operate_delect}</BLabel></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});

/**
 * 优惠券列表
 */
var couponList = React.createClass({
    render: function () {
        var self = this;
        var store = getStore();
        console.log(store);
        if(store.list){
            var $ItemNode = store.list.map(function(item){
                return (
                    <couponItem key={item.id} item={item}></couponItem>
                )
            });
        }
        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                <tr>
                    <th width="15%" className='text_center'>卡券名称</th>
                    <th width="8%" className='text_center'>已领取</th>
                    <th width="8%" className='text_center'>卡券类型</th>
                    <th width="8%" className='text_center'>渠道</th>
                    <th width="10%" className='text_center'>派发形式</th>
                    <th width="20%" className='text_center'>有效时间</th>
                    <th width="13%" className='text_center'>状态</th>
                    <th width="15%" className='text_center'>操作</th>
                </tr>
                </thead>
                <tbody>
                {$ItemNode}
                </tbody>
            </Table>
        )
    }
});

/**
 * 主体
 */
var Body = React.createClass({
    mixins: [FluxMixin,StoreWatchMixin("promotionCouponListStore")],
    getStateFromFlux: function() {
        return getStore();
    },
    render: function () {
        var self = this;
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <Row style={{marginBottom: '20'}}>
                                                        <a href="#/promotion/coupon/create"><Button type='submit' bsStyle='blue' className="fl" style={{marginLeft:'24'}}>添加卡券</Button></a>
                                                    </Row>
                                                    <div className="search-box">
                                                        <Grid>
                                                            <Row className='hidden-print' style={{marginBottom: '20',backgroundColor:'#f9f9f9',paddingTop:'20'}}>
                                                                <Col xs={6}>
                                                                    <SearchBar></SearchBar>
                                                                </Col>
                                                                <Col xs={6} style={{paddingTop: 0}}>
                                                                    <TimeFilter></TimeFilter>
                                                                    <StatusBar></StatusBar>
                                                                    <DistributeBar></DistributeBar>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </div>
                                                    <div className="order-list-box">
                                                        <couponList ></couponList>
                                                    </div>
                                                    <div className="foot-box">
                                                        <PagesBar></PagesBar>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Grid>
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
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        var store = getStore();
        var data_list = {
            'size': store.per_page,
            'page': store.current_page,
            'keyword':store.search_object.coupon_name,
            'value_start_at':store.search_object.start_denomination,
            'value_end_at':store.search_object.end_denomination,
            'valid_time_start_at':store.search_object.valid_time_start_at,
            'valid_time_end_at':store.search_object.valid_time_end_at,
            'status':parseInt(store.search_object.status),
            'channel':store.search_object.channel!=""?parseInt(store.search_object.channel):-1,
            'type':parseInt(store.search_object.type),
            'discount_type':parseInt(store.search_object.discount_type)
        }
        actions.onGetCouponList(data_list);

        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body  flux = {flux}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;