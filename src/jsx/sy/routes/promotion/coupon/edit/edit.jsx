/** @jsx React.DOM */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../../../widgets/datepicker/datepicker.jsx');
var TimePicker = require('../../../../widgets/timepicker/timepicker.jsx');

//coupon
var Actions = flux.actions.promotionCouponEdit;
/*var GoodsSpuList = require('../../../../widgets/goodsSpuList/index.jsx');*/
//member
var memberActions = flux.actions.memberAction;

var ConfirmModal = require('../../../../widgets/modal/confirmModal.jsx');
var GoodsModelBox = require('../../../../widgets/GoodsModelBox/index.jsx');
var CategoryModelBox = require('../../../../widgets/GoodsModelBox/category.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/goods/goodsSpuListStore.jsx');


var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var coupon = this.coupon;
        var postData ={};
        //console.log(el.name, postData);
        //switch (name){
        //    case 'userPassword':
        //
        //        break;
        //}
        if(coupon['discount_type']==1){
            if(name=='value'){
                if(parseInt(value)==0){
                    alert('亲，折扣率不能等于0%哦');
                    return false;
                }
                if(parseInt(value)>=100){
                    alert('亲，折扣率不能等于或者大于100%哦');
                    return false;
                }
                value = parseInt(value)/100;
            }
        }
        coupon[name] = value;
        Actions.updateCoupon(coupon);
    },
    handleSelectChange: function(e){
        var el = e.target;
        var value = el.value;
        var name = el.name;
        var coupon = this.coupon;
        console.log(name, value);
        //switch (el.name){
        //    case 'valid_time':
        //        coupon[name] = value;
        //
        //        if(value)
        //        return false;
        //        break;
        //    default :
        //        break;
        //}


        if(name == 'valid_time'){
            Actions.updateValidTime(+value);
        }else if(name == 'type'){
            coupon.timespan = 0;
            coupon[name] = value;
            Actions.updateCoupon(coupon);
        }else{
            coupon[name] = value;
            Actions.updateCoupon(coupon);
        }
    },

    toggleMemberBox: function(){
        ModalManager.create(this.getLargeModal(<MemberBox flux = {flux}></MemberBox>,'选择用户', function(){
            console.log('干掉');
        }));
    },

    handleSearch: function (type) {
        var source = this.state.memberStore.list;
        var page = source.current_page;
        var keyword = this.refs.search.getValue() || "";
        switch (type) {
            case 'previous':
                page = page - 1;
                break;
            case 'next':
                page = page + 1;
                break;
            default :
                page = 1;
                break;
        }
        memberActions.onSearch({
            page: page,
            keyword: keyword
        });
    },

    getLargeModal: function(content, title, callback) {

        if(typeof title === "function"){
            callback = title;
            title = '操作提示';
        }

        var fn = function () {
            if(typeof callback === 'function' ){
                var ret = callback();
                if(typeof ret === 'object' && ret.willContinue === false){

                }else{
                    ModalManager.remove();
                }
            }else{
                ModalManager.remove();
            }
        };
        var appendContent = function(){
            if(typeof content === 'function'){
                return (
                    <content />
                )
            }else{
                return content;
            }
        };

        return (
            <Modal max>
                <ModalHeader>
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    {appendContent()}
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='danger' onClick={fn} onTouchEnd={fn}>关闭</Button>
                </ModalFooter>
            </Modal>
        );
    }
};


var Member = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("memberStore"), HandleMixins, ConfirmModal],
    getStateFromFlux: function() {
        return flux.store("memberStore").getState();
    },
    handleMemberChange: function(e){
        var el = e.target;
        var member = this.member;
        var checked = el.checked ? 1:0;
        this.props.callback && this.props.callback.call(this, member, checked, this.props.type);
        this.setState({
            checkbox: checked
        });
    },
    getInitialState: function () {
        return this.reset(this.props);
    },
    componentWillReceiveProps: function (props) {
        this.setState(this.reset(props))
    },
    reset: function (props) {
        return {
            checkbox: props.data.checkbox || 0
        }
    },
    onchange: function (e) {

    },
    render: function () {
        var item = this.member = this.props.data;
        if(item.checkbox !=1){
            item.checkbox = 0
        }
        return (
            <Row>
                <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}}>
                    <Col xs={4}>
                        <Input type='checkbox' name='checkbox' ref='checkbox' checked={+this.state.checkbox} style={{position:'absolute',left:0}} onChange={this.handleMemberChange}/>
                        {item.name}
                    </Col>
                    <Col xs={4}>{item.email}</Col>
                    <Col xs={4}>{item.mobile}</Col>
                </Col>
            </Row>
        )
    }
});

var SelectedMemberList = React.createClass({
    getInitialState: function () {
        return this.reset(this.props);
    },
    componentWillReceiveProps: function (props) {
        this.setState(
            this.reset(props)
        );
    },
    reset: function (props) {
        var n = 20;// 单页数量
        var data = props.data
        var pageList = [];
        var length =  data.length;
        var infoLength = Math.ceil(length/n);
        var tmp = [];
        if(infoLength == 1){
            pageList.push(data);
        }
        if(infoLength > 1){
            data.map(function (item, i) {
                tmp.push(item);
                if((i+1)%n == 0 || i == data.length - 1){
                    pageList.push(tmp);
                    tmp = [];
                }
            })
        }
        var page;
        if(this.state && this.state.page){
            if(pageList.length < this.state.page){
                page = 0
            }else{
                page = this.state.page
            }
        }
        return {
            list: props.data,
            pageList: pageList,
            page: page || 0
        }
    },
    handleSearch: function (type) {
        var page = this.state.page;
        switch(type){
            case 'previous':
                page--;
                break;
            case 'next':
                page++;
                break;
        }
        this.setState({
            page: page
        });
    },
    checkedCallback: function (member, checked, type) {
        this.props.checkedCallback(member, checked, type);
    },
    render: function () {
        var _this = this;
        var pageList = this.state.pageList;
        var page = this.state.page;
        var node = ""
        if(pageList.length){
            if(page >= pageList.length){page=0}
            node = pageList[page].map(function (item, i) {
                return (
                    <Member
                        key={i}
                        data={item}
                        callback={_this.checkedCallback}
                        type="selectedList"
                        >
                    </Member>
                )
            })
        }

        var pagerNode = function () {
            var prev = '';
            var next = '';
            var line = '';
            if (pageList.length > 1) {
                if (page > 0) {
                    line=<hr/>;
                    prev = <a href="javascript:;" onClick={_this.handleSearch.bind(null,'previous')}>上一页</a>
                }

                if (page < pageList.length - 1) {
                    line=<hr/>;
                    next = <a href="javascript:;"  onClick={_this.handleSearch.bind(null,'next')}>下一页</a>
                }

            }
            return (
                <Row>
                    {line}
                    <Pager>
                        {prev}
                        {next}
                    </Pager>
                </Row>
            )
        };
        return (
            <div>
                {node}
                {pagerNode()}
            </div>
        )
    }
});
var MemberBox = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("memberStore", "promotionCouponEditStore"), HandleMixins, ConfirmModal],
    getInitialState: function () {
        // memberActions.updateMemberList();
    },
    getStateFromFlux: function() {
        return {
            memberStore: flux.store("memberStore").getState(),
            promotionCouponEditStore: flux.store("promotionCouponEditStore").getState()
        }
    },

    componentDidMount: function() {
        // memberActions.updateMemberList();
        var state = this.state;
        var promotionCouponEditStore = state.promotionCouponEditStore;
        if(promotionCouponEditStore && promotionCouponEditStore.selectedMember && !promotionCouponEditStore.selectedMember.length){
            //var ids = JSON.parse(promotionCouponEditStore.coupon.member_ids);
            var ids = promotionCouponEditStore.coupon.member_ids;
            Actions.getSelectedMember(ids);
        }
    },
    show: function(e){
        e.preventDefault();
        e.stopPropagation();
    },

    addMember: function(){
        //console.log(this.list, this.selectedList);
        var selectedList = this.selectedList;
        this.list.map(function (member,i) {
            if(member.checkbox == 1){
                var added = false;
                selectedList.map(function(item, i){
                    if(member.id == item.id){
                        added = true;
                    }
                });
                if(!added){
                    selectedList.push(member);
                }
            }
        });
        Actions.updateSelectedMember(selectedList);
    },
    removeMember: function(){
        var selectedList = this.selectedList;
        var newSelectedList = [];
        selectedList.map(function(item, i){
            if(item.checkbox == 1){
                //selectedList.splice(i, 1);
            }else{
                newSelectedList.push(item);
            }
        });
        Actions.updateSelectedMember(newSelectedList);
    },
    checkedCallback: function(member, checked, type){
        //console.log(type);
        var list = type == "selectedList" ? this.selectedList : this.list;
        list.map(function (item,i) {
            if(item.id == member.id){
                item.checkbox = checked;
            }
        });
        //console.log( this.selectedList , this.list);
    },

    render: function(){
        var _this = this;
        var source = this.state.memberStore.list || null;
        var list = this.list = source ? (source.data || []) : [];
        var selectedList = this.selectedList  = this.state.promotionCouponEditStore.selectedMember || [];

        var pagerNode = function () {
            var prev = '';
            var next = '';
            var line = '';
            if (source) {
                if (source.current_page > 1) {
                    line=<hr/>;
                    prev = <a href="javascript:;" onClick={_this.handleSearch.bind(null,'previous')}>上一页</a>
                }

                if (source.current_page < source.last_page) {
                    line=<hr/>;
                    next = <a href="javascript:;"  onClick={_this.handleSearch.bind(null,'next')}>下一页</a>
                }

            }
            return (
                <Row>
                    {line}
                    <Pager>
                        {prev}
                        {next}
                    </Pager>
                </Row>
            )
        };

        return (
            <Grid>
                <Row style={{marginBottom: '20px'}}>
                    <Col xs={10}>
                        <Input
                            ref='search'
                            type='text'
                            id='member-search'
                            name='member-search'
                            placeholder='用户名/姓名/邮箱/手机号'/>
                    </Col>
                    <Col xs={2}>
                        <Button sm bsStyle='primary' onClick={this.handleSearch}>搜索</Button>
                        <Button sm bsStyle='primary' onClick={this.show}>show</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <Grid>
                            <Row>
                                <Col xs={12} style={{padding:0,background:'#efefef'}}>
                                    <Col xs={4}>用户名</Col>
                                    <Col xs={4}>邮箱</Col>
                                    <Col xs={4}>手机</Col>
                                </Col>
                            </Row>
                            {
                                list.map(function (item, i) {
                                    return (
                                        <Member
                                            key={i}
                                            data={item}
                                            callback={_this.checkedCallback}
                                            >
                                        </Member>
                                    )
                                })
                            }
                            {pagerNode()}
                        </Grid>
                    </Col>
                    <Col xs={2} className="text-center">
                        <div style={{marginTop: '20px'}}>
                            <Button sm bsStyle='primary' onClick={this.addMember}> &gt; </Button>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Button sm bsStyle='primary' onClick={this.removeMember}> &lt; </Button>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <Row>
                            <Col xs={12} style={{padding:0,background:'#efefef'}}>
                                <Col xs={4}>用户名</Col>
                                <Col xs={4}>邮箱</Col>
                                <Col xs={4}>手机</Col>
                            </Col>
                        </Row>
                        <SelectedMemberList data={selectedList} checkedCallback={_this.checkedCallback} />
                    </Col>
                </Row>
            </Grid>
        )
    }
});
/*
{
    selectedList.map(function (item, i) {
        return (
            <Member
                key={i}
                data={item}
                callback={_this.checkedCallback}
                type="selectedList"
                >
            </Member>
        )
    })
}*/



var Coupon = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("promotionCouponEditStore"), HandleMixins, ConfirmModal],
    getInitialState: function(){
        return {

        }
    },

    componentDidMount: function () {

    },
    componentWillReceiveProps: function (props) {

    },

    getStateFromFlux: function() {
        return flux.store("promotionCouponEditStore").getState();
    },
    show: function(e){
        e.preventDefault();
        e.stopPropagation();
    },
    save: function(){
        var coupon = this.coupon;
        if(coupon.type == 1){
            coupon.number = coupon.member_ids.length;
        }
        if(coupon.type == 2){
            coupon.number = 0;
        }
        if(coupon.type == 3){
            if(parseInt(coupon.number) == 0){
                alert('亲,派发数量不能为零哦');
                return false;
            }
        }
       /* console.log(this.state.source,'8888' ,this.state.selectNode,'3333');
        /!*goods_ids*!/
        var selectArr = this.state.selectNode,
            _this_goods_ids = [];
        for(var key in selectArr){
            _this_goods_ids.push(selectArr[key].id);
        }
        coupon.goods_ids = _this_goods_ids;*/
        Actions.saveCoupon(coupon);
    },
    onDateChange: function (date, type) {
        var coupon = this.state.coupon;
        var oldDate = coupon[type];
        var dateArray = [];
        if(typeof oldDate == 'string'){
            dateArray = oldDate.split(' ');
        }
        dateArray[0] = date.format('YYYY-MM-DD');
        dateArray[1] = dateArray[1] ? dateArray[1] : '00:00:00';
        coupon[type] = dateArray.join(' ');
        console.log(coupon[type]);
        Actions.updateCoupon(coupon);
    },
    onDateChangeStartAt: function(date){
        this.onDateChange(date, 'start_at');
    },
    onDateChangeEndAt: function(date){
        this.onDateChange(date, 'end_at');
    },
    onDateChangeValidStartAt: function(date){
        this.onDateChange(date, 'valid_time_start_at');
    },
    onDateChangeValidEndAt: function(date){
        this.onDateChange(date, 'valid_time_end_at');
    },

    onTimeChange: function (time, type) {
        var coupon = this.state.coupon;
        var oldDate = coupon[type];
        var dateArray = [];
        if(typeof oldDate == 'string'){
            dateArray = oldDate.split(' ');
        }
        dateArray[0] = dateArray[0] ? dateArray[0] : moment().format('YY-MM-DD');
        dateArray[1] = time;
        coupon[type] = dateArray.join(' ');
        console.log(coupon[type]);
        Actions.updateCoupon(coupon);
    },


    CouponValue: function () {
        var _this = this;
        var coupon = this.coupon;
        var show_value = '金额';
        var coupon_value = coupon.value;
        if( coupon.discount_type==1 ){
            show_value = '折扣率(%)';
            if(isNaN(coupon_value)){
                coupon_value = '';
            }
            if(typeof(coupon_value)=='number'){
                var val = parseFloat(coupon_value)*100;
                coupon_value = Math.round(val);
            }
            if(typeof(coupon_value)=='string'){
                if(coupon_value!=0 || coupon_value!=''){
                    coupon_value = coupon_value.split('.')[1];
                }
            }
        }
        var val_node = (
            <FormGroup>
                <Label control sm={3} htmlFor='couponValue'>{ show_value }</Label>
                <Col sm={9}>
                    <Input
                        className='inline'
                        type='text'
                        id='couponValue'
                        name='value'
                        value={coupon_value}
                        placeholder='请输入卡券金额'
                        onChange={this.handleChange}/>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.value : ''}</BLabel>
                </Col>
            </FormGroup>
        );
        if( coupon.discount_type==2 || coupon.discount_type==3 ){
            val_node = '';
        }
        return (
           <div> {val_node} </div>
        )
    },
    CouponRequirement: function () {
        var _this = this;
        var coupon = this.coupon;
        var requirementArray = [
            {
                id:0,
                name:'无条件'
            },
            {
                id:1,
                name:'使用条件: '
            }
        ];
        var node = '';
        if(+coupon.requirement == 1){
            node = (
                <div style={{display: 'inline-block'}}>
                    满
                    <Input
                        className='inline'
                        type='text'
                        id='couponThreshold'
                        name='threshold'
                        value={coupon.threshold}
                        placeholder=''
                        onChange={this.handleChange}/>
                    元使用
                </div>
            );
        }
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='couponRequirement'>使用条件</Label>
                <Col sm={9}>
                    <Select
                        className='inline'
                        id='couponRequirement'
                        name='requirement'
                        ref='requirement'
                        value={coupon.requirement}
                        onChange={_this.handleSelectChange}>
                        <option value={-1}>请选择使用条件</option>
                        {
                            requirementArray.map(function(item, i){
                                return (
                                    <option key={i} value={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </Select>
                    {node}
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.threshold : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    CouponNumber: function () {
        var _this = this;
        var coupon = this.coupon;
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='couponNumber'>派发数量</Label>
                <Col sm={9}>
                    <Input
                        className='inline'
                        type='text'
                        id='couponNumber'
                        name='number'
                        value={coupon.number}
                        placeholder='派发数量'
                        onChange={this.handleChange}/>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.number : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    GetTime: function () {
        var _this = this;
        var coupon = this.coupon;
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='get_time'>领取起始时间</Label>
                <Col sm={9}>
                    <p style={{marginTop:'4px'}}>（该时段内领取的卡券才可被激活）</p>
                    <div style={{display:'inline-block'}}>
                        <DatePicker
                            key="start_at"
                            onChange={this.onDateChangeStartAt}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='预约取件时间'
                            selected={coupon.start_at ? moment(coupon.start_at) : moment()}>
                        </DatePicker>
                    </div>{' '}
                    <div style={{display:'none'}}>
                        <TimePicker
                            name='start_at'
                            onChange={this.onTimeChange}
                            time={coupon.start_at? moment(coupon.start_at) : moment()}></TimePicker>
                    </div>
                    <span> - </span>
                    <div style={{display:'inline-block'}}>
                        <DatePicker
                            key="end_at"
                            onChange={this.onDateChangeEndAt}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='预约取件时间'
                            selected={coupon.end_at ? moment(coupon.end_at) : moment()}>
                        </DatePicker>
                    </div>{' '}
                    <div style={{display:'none'}}>
                        <TimePicker
                            name='end_at'
                            onChange={this.onTimeChange}
                            time={coupon.end_at? moment(coupon.end_at) : moment()}></TimePicker>
                    </div>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.start_at : ''}</BLabel>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.end_at : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    ValidTime: function () {
        var _this = this;
        var coupon = this.coupon;
        var node = '';
        var typeArray = [
            {
                id: 0,
                name: '按截至日期'
            },
            {
                id: 1,
                name: '按时间范围'
            }
        ];
        var timeArray = [
            {
                id: 30,
                name: '30'
            },
            {
                id: 90,
                name: '90'
            },
            {
                id: 180,
                name: '180'
            }
        ];
        if(!(coupon.timespan > 0 && +coupon.type == 2)){
            node = (
                <div>
                    <div style={{display:'inline-block'}}>
                        <DatePicker
                            key="valid_time_start_at"
                            onChange={this.onDateChangeValidStartAt}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='预约取件时间'
                            selected={coupon.valid_time_start_at ? moment(coupon.valid_time_start_at) : moment()}>
                        </DatePicker>
                    </div>{' '}
                    <div style={{display:'none'}}>
                        <TimePicker
                            name='valid_time_start_at'
                            onChange={this.onTimeChange}
                            time={coupon.valid_time_start_at? moment(coupon.valid_time_start_at) : moment()}></TimePicker>
                    </div>
                    <span> - </span>
                    <div style={{display:'inline-block'}}>
                        <DatePicker
                            key="valid_time_end_at"
                            onChange={this.onDateChangeValidEndAt}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='预约取件时间'
                            selected={coupon.valid_time_end_at? moment(coupon.valid_time_end_at) : moment()}>
                        </DatePicker>
                    </div>{' '}
                    <div style={{display:'none'}}>
                        <TimePicker
                            name='valid_time_end_at'
                            onChange={this.onTimeChange}
                            time={coupon.valid_time_end_at? moment(coupon.valid_time_end_at) : moment()}></TimePicker>
                    </div>
                </div>
            );
        }else{
            node = (
                <div>
                    领取后
                    <Select
                        className='inline'
                        id='couponTimespan'
                        name='timespan'
                        ref='timespan'
                        value={coupon.timespan}
                        onChange={_this.handleSelectChange}>
                        {
                            timeArray.map(function(item, i){
                                return (
                                    <option key={i} value={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </Select>
                    天内.
                </div>
            );
        }
        var selector = '';
        if(+coupon.type == 2){
            selector = (
                <Select
                    className='inline'
                    id='valid_time'
                    name='valid_time'
                    ref='valid_time'
                    value={coupon.timespan > 0 ? 1 : 0}
                    onChange={_this.handleSelectChange}>
                    {
                        typeArray.map(function(item, i){
                            return (
                                <option key={i} value={item.id}>{item.name}</option>
                            )
                        })
                    }
                </Select>
            );
        }
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='valid_time'>卡券有效日期</Label>
                <Col sm={9}>
                    <p>
                        {selector}
                        <span>（卡券在该时段内才能使用）</span>
                    </p>
                    {node}
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.valid_time_start_at : ''}</BLabel>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.valid_time_end_at : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    MemberBox: function () {
        var _this = this;
        var coupon = this.coupon;
        return (
            <FormGroup>
                <Label control sm={3} htmlFor=''>指定用户</Label>
                <Col sm={9}>
                    <Button sm bsStyle='primary' onClick={this.toggleMemberBox}>查看</Button>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.member : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },

    setGoodsIds: function(data){
        var coupon = this.coupon;
        coupon['goods_ids'] = data;
        Actions.updateCoupon(coupon);
    },
    toggleGoodsBox: function(){

        var _this = this;
        var coupon = this.coupon,
            goods_ids = coupon['goods_ids'];

        ModalManager.create(this.getLargeModal(
            <GoodsModelBox
                goods_ids={goods_ids}
                callbackGoodsIds={_this.setGoodsIds}
                >
            </GoodsModelBox>,
            '选择商品',
            function(){
            console.log('干掉');
        }));

    },

    setCategoryId: function(data){
        console.log(data,'22222233');
        var coupon = this.coupon;
        coupon['category_ids'] = data;
        Actions.updateCoupon(coupon);
    },
    toggleCategoryBox: function(){
        var _this = this;
        var coupon = this.coupon;

        ModalManager.create(this.getLargeModal(
            <CategoryModelBox
                category_ids = {coupon['category_ids']}
                callbackCategory={_this.setCategoryId}
                >
            </CategoryModelBox>,
            '选择类目',
            function(){
            console.log('干掉');
        }));

    },

    GoodsBox: function () {
        var _this = this;
        var coupon = this.coupon;
        return (
            <div>
                <FormGroup>
                    <Label control sm={3} htmlFor=''>指定商品</Label>
                    <Col sm={9}>
                        <Button sm bsStyle='primary' onClick={this.toggleGoodsBox}>查看</Button>
                        <BLabel bsStyle='danger'>{coupon.error ? coupon.error.goods : ''}</BLabel>
                    </Col>
                </FormGroup>
                <div style={{maxHeight:'200',overflowY:'scroll',overflowX:'hidden'}}>
                {
                    coupon['goods_ids'].map(function(item,key){
                        return (
                            <FormGroup key={key}>
                                <Label control sm={3} htmlFor=''></Label>
                                <Col sm={9}>
                                    商品编号: {item}
                                </Col>
                            </FormGroup>
                        )
                    })
                }
                </div>
            </div>
        )
    },
    CategoryBox: function () {
        var _this = this;
        var coupon = this.coupon;
        return (
            <div>
                <FormGroup>
                    <Label control sm={3} htmlFor=''>指定类目</Label>
                    <Col sm={9}>
                        <Button sm bsStyle='primary' onClick={this.toggleCategoryBox}>查看</Button>
                        <BLabel bsStyle='danger'>{coupon.error ? coupon.error.category : ''}</BLabel>
                    </Col>
                </FormGroup>
                <div style={{maxHeight:'200',overflowY:'scroll',overflowX:'hidden'}}>
                    {
                        coupon['category_ids'].map(function(item,key){
                            return (
                                <FormGroup key={key}>
                                    <Label control sm={3} htmlFor=''></Label>
                                    <Col sm={9}>
                                        商品分类ID: {item}
                                    </Col>
                                </FormGroup>
                            )
                        })
                    }
                </div>
            </div>
        )
    },
    Trigger: function () {
        var _this = this;
        var coupon = this.coupon;

        var triggerArray = [
            {
                id: 0,
                name: '完成注册时'
            },
            {
                id: 3,
                name: '抽奖中奖时'
            },
            {
                id: 4,
                name: '直接购买'
            }
            //,
            //{
            //    id: 1,
            //    name: '注册完成30天没有交易'
            //},
            //{
            //    id: 2,
            //    name: '订单金额'
            //}
        ];
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='couponTrigger'>触发条件</Label>
                <Col sm={9}>
                    <Select
                        className='inline'
                        id='couponTrigger'
                        name='trigger'
                        ref='trigger'
                        value={coupon.trigger}
                        onChange={_this.handleSelectChange}>
                        <option value={-1}>请选择触发条件</option>
                        {
                            triggerArray.map(function(item, i){
                                return (
                                    <option key={i} value={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </Select>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.member : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    OfflineForm: function () {
        var _this = this;
        var coupon = this.coupon;

        var formArray = [
            //{
            //    id: 0,
            //    name: '二维码'
            //},
            {
                id: 1,
                name: '兑换码'
            }
        ];
        return (
            <FormGroup>
                <Label control sm={3} htmlFor='couponOfflineForm'>线下卡券形式</Label>
                <Col sm={9}>
                    <Select
                        className='inline'
                        id='couponOfflineForm'
                        name='offline_form'
                        ref='offline_form'
                        value={coupon.offline_form}
                        onChange={_this.handleSelectChange}>
                        <option value={-1}>请选择线下卡券形式</option>
                        {
                            formArray.map(function(item, i){
                                return (
                                    <option key={i} value={item.id}>{item.name}</option>
                                )
                            })
                        }
                    </Select>
                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.member : ''}</BLabel>
                </Col>
            </FormGroup>
        )
    },
    setType: function (type) {
        var _this = this;
        var node = '';
        switch(+type){
            case 0:
                node =  (
                    <Form horizontal>
                        {this.CouponValue()}
                        {this.CouponRequirement()}
                        {this.CouponNumber()}
                        {this.GetTime()}
                        {this.ValidTime()}
                    </Form>
                );
                break;
            case 1:
                node =  (
                    <Form horizontal>
                        {this.MemberBox()}
                        {this.CouponValue()}
                        {this.CouponRequirement()}
                        {this.ValidTime()}
                    </Form>
                );
                break;
            case 2:
                node =  (
                    <Form horizontal>
                        {this.Trigger()}
                        {this.CouponValue()}
                        {this.CouponRequirement()}
                        {this.ValidTime()}
                    </Form>
                );
                break;
            case 3:
                node =  (
                    <Form horizontal>
                        {this.OfflineForm()}
                        {this.CouponValue()}
                        {this.CouponRequirement()}
                        {this.CouponNumber()}
                        {this.GetTime()}
                        {this.ValidTime()}
                    </Form>
                );
                break;
        }
        return node;
    },

    updateStatus: function () {
        console.log('update status');
        Actions.updateStatus(this.coupon);
    },

    render: function(){
        var _this = this;
        var coupon = _this.coupon = _this.state.coupon;
        var item = {};
        if(coupon == null){
            return (
            <div className='text-center'>
                <div>
                    <Icon style={{fontSize: 288, lineHeight: 1}} glyph='icon-mfizz-ghost' />
                </div>
                <h1 style={{marginBottom: 25, marginTop: 0}}>您打开的姿势不正确!该卡券不存在</h1>
            </div>)
        }

        var scopeArray = [
            {
                id:0,
                name:'全场'
            },
            {
                id:1,
                name:'类目'
            },
            {
                id:2,
                name:'商品'
            }
        ];

        var channelArray = [
            {
                id:1,
                name:'PC端'
            },
            {
                id:2,
                name:'移动端APP'
            },
            {
                id:3,
                name:'PC端 + 移动端APP'
            },
            {
                id:4,
                name:'移动端M站'
            },
            {
                id:5,
                name:'PC端 + 移动端M站'
            },
            {
                id:6,
                name:'移动端APP + 移动端M站'
            },
            {
                id:7,
                name:'PC端 + 移动端APP + 移动端M站'
            }
        ];

        var typeArray = [
            {
                id:0,
                name:'用户领取'
            },
            {
                id:1,
                name:'人工派发'
            },
            {
                id:2,
                name:'自动派发'
            },
            {
                id:3,
                name:'线下派发'
            }
        ];

        var discountTypeArray = [
            {
                id:0,
                name:'满减券'
            },
            {
                id:1,
                name:'折扣券'
            },
            {
                id:2,
                name:'安装服务卡'
            },
            {
                id:3,
                name:'退货保障卡'
            },
        ];

        var scopeNode = '';
        //TODO: 下一阶段才做 指定商品 和 指定类目
        switch(+coupon.scope){
            case 1:
                scopeNode = this.CategoryBox();
                break;
            case 2:
                scopeNode = this.GoodsBox();
                break;
        }

        var statusBtn = '';
        if(coupon.id){
            statusBtn = (
                <Button sm bsStyle={+coupon.status == 1? 'danger' : 'success'} onClick={this.updateStatus}>{+coupon.status == 1? '禁用' : '启用'}</Button>
            )
        }

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Form horizontal>
                            <FormGroup>
                                <Label control sm={3} htmlFor='couponName'>名称</Label>
                                <Col sm={9}>
                                    <Input
                                        className='inline'
                                        type='text'
                                        id='couponName'
                                        name='name'
                                        value={coupon.name}
                                        placeholder='请输入卡券名称'
                                        onChange={this.handleChange}/>
                                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.name : ''}</BLabel>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3} htmlFor='couponScope'>适用范围</Label>
                                <Col sm={9}>
                                    <Select
                                        className='inline'
                                        id='couponScope'
                                        name='scope'
                                        ref='scope'
                                        value={coupon.scope}
                                        onChange={_this.handleSelectChange}>
                                        <option value={-1}>请选择适用范围</option>
                                        {
                                            scopeArray.map(function(item, i){
                                                return (
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Select>
                                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.scope : ''}</BLabel>
                                </Col>
                            </FormGroup>
                            {scopeNode}
                            <FormGroup>
                                <Label control sm={3} htmlFor='couponChannel'>适用渠道</Label>
                                <Col sm={9}>
                                    <Select
                                        className='inline'
                                        id='couponChannel'
                                        name='channel'
                                        ref='channel'
                                        value={coupon.channel}
                                        onChange={_this.handleSelectChange}>
                                        <option value={-1}>请选择适用范围</option>
                                        {
                                            channelArray.map(function(item, i){
                                                return (
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Select>
                                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.channel : ''}</BLabel>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3} htmlFor='discountType'>卡券类型</Label>
                                <Col sm={9}>
                                    <Select
                                        className='inline'
                                        id='discountType'
                                        name='discount_type'
                                        ref='discount_type'
                                        value={coupon.discount_type}
                                        onChange={_this.handleSelectChange}>
                                        <option value={-1}>请选择卡券类型</option>
                                        {
                                            discountTypeArray.map(function(item, i){
                                                return (
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Select>
                                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.discount_type : ''}</BLabel>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label control sm={3} htmlFor='couponType'>派发形式</Label>
                                <Col sm={9}>
                                    <Select
                                        className='inline'
                                        id='couponType'
                                        name='type'
                                        ref='type'
                                        value={coupon.type}
                                        onChange={_this.handleSelectChange}>
                                        <option value={-1}>请选择派发形式</option>
                                        {
                                            typeArray.map(function(item, i){
                                                return (
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Select>
                                    <BLabel bsStyle='danger'>{coupon.error ? coupon.error.type : ''}</BLabel>
                                </Col>
                            </FormGroup>
                        </Form>
                        {this.setType(coupon.type)}
                    </Col>
                </Row>
                <div className='text-center mb20 pb20'>
                    <Button sm bsStyle='primary' onClick={this.save}>{coupon.id ? '保 存' : '创 建'}</Button>
                    {' '}
                    {statusBtn}
                </div>
            </Grid>
        )
    }
});



var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("promotionCouponEditStore")],
    getInitialState: function(){
        return {

        }
    },
    getStateFromFlux: function() {
        return flux.store("promotionCouponEditStore").getState();
    },

    goBack: function () {
        RRouter.routing.navigate('/promotion/coupon/list');
    },
    goDetail: function () {
        RRouter.routing.navigate('/promotion/coupon/detail/'+this.props.id);
    },
    render: function() {
        var id = this.props.id;
        var goDetailNode = '';
        if(isNaN(+id)){

        }else{
            goDetailNode=(<Button sm bsStyle='primary' onClick={this.goDetail}>查看卡券详情</Button>);
        }

        var _this = this;
        var coupon = _this.coupon = _this.state.coupon;

        return (
            <Container id='body'>
                <Grid gutterBottom>
                    <Row>
                        <Col sm={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <p>
                                                <Button sm bsStyle='primary' onClick={this.goBack}>返回卡券列表</Button>{' '}
                                                {goDetailNode}
                                            </p>
                                            <Coupon></Coupon>
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

var classSet = React.addons.classSet;
var Page = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        //console.log('edit ',this.props.id);
        Actions.initCoupon(this.props.id);
        memberActions.updateMemberList();
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
