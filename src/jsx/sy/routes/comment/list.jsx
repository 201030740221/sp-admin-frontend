/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var moment = require('moment');
var DatePicker = require('../../widgets/datepicker/datepicker.jsx');

var liteFlux = require('lite-flux');
var commentStore = require('../../modules/stores/comment/list.jsx');

//
var classSet = React.addons.classSet;


var TimeFilter = React.createClass({
    getInitialState: function(){
        return {
            start_date: moment('2015-01-01'),
            end_date:  moment()
        }
    },
    changeEndTime: function(date){
        var time_end_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            end_date: date
        });
        $("#end_at").val(time_end_at);
    },
    changeStartTime: function(date){
        var time_start_at = date.format('YYYY-MM-DD HH:mm:ss');

        this.setState({
            start_date: date
        });
        $("#start_at").val(time_start_at);
    },
    componentDidMount: function(){

    },
    search: function(){
        this.props.search();
    },
    render: function(){
        return (
            <div className="fr">
                <div className="clearfix">
                    <div className="fl mr10">
                        评价时间：
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="startTime"
                            onChange={this.changeStartTime}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='Click to select a date'
                            selected={this.state.start_date}>
                        </DatePicker>
                    </div>
                    <div className="fl mr10">
                        至
                    </div>
                    <div className="fl mr10">
                        <DatePicker
                            key="endTime"
                            onChange={this.changeEndTime}
                            dateFormat='YYYY-MM-DD'
                            placeholderText='Click to select a date'
                            selected={this.state.end_date}>
                        </DatePicker>
                    </div>
                    <Button type='submit' bsStyle='blue' className="fl" onClick={this.search}>确定</Button>
                </div>
            </div>
        )
    }
});


var List = React.createClass({
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
                    <textarea className='input_textarea'></textarea>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    },
    handleStatus: function(type,id,status){
        var _this = this,
            _this_status = 0;
        if(type=='reply'){
            ModalManager.create(this.showModal('','审核通过并回复', function(){
                var val = $('.input_textarea').val();
                var request_data = {
                    comment_id: id,
                    content: val
                };

                liteFlux.action("commentList").replyComment(request_data);
                _this_status = 1;
                var request_data = {
                    status: _this_status
                };

                var list = _this.props.list;
                for(var key in list){
                    if(id==list[key].id){
                        list[key].replys.push({'content':val});
                        list[key].status = _this_status;
                    }
                }
                liteFlux.action("commentList").updateCommentStatus(id,request_data);
                _this.props.updateCallBack(list);
                console.log(list);
            }));
            return false;
        }
        if(type=='go'){
            _this_status = 1;
        }
        if(type=='noGo'){
            _this_status = 2;
        }
        var request_data = {
            status: _this_status
        };

        var list = this.props.list;
        for(var key in list){
            if(id==list[key].id){
                list[key].status = _this_status;
            }
        }
        liteFlux.action("commentList").updateCommentStatus(id,request_data);
        _this.props.updateCallBack(list);
    },
    handle: function(){

    },
    onChangeCheckBox: function (e) {

        this.props.onChange(e.target);
    },
    render: function () {
        var _this = this,
            item = this.props.data,
            pics = item.pics,
            imgNode = '';
        if(pics){
            imgNode = pics.map(function(elm,index){
                return(
                    <img key={index} src={elm+'?imageView2/1/h/80'} alt="" height='80'/>
                )
            })
        }

        var tagsNode = '';
        if(item.tags){
            tagsNode = item.tags.map(function(elm,index){
                return(
                    <span key={index} className='mb5'>{elm.tag_name}</span>
                )
            })
        }

        var replyNode = '';
        if(item.replys){
            replyNode = item.replys.map(function(elm,index){
                return(
                    <div key={index} className='mb5' style={{color:'#DEC12F'}}>{'小编'+index+'号：'+elm.content}</div>
                )
            })
        }

        var rate_show = '';
        switch(item.rate){
            case 0: rate_show = '好评';
                    break;
            case 1: rate_show = '中评';
                    break;
            case 2: rate_show = '差评';
                    break;
        }

        var status_show = '',
            status_go = '审核通过',
            status_reply = '审核通过并回复',
            status_forhidden = '不通过';
        switch(item.status){
            case 0:
                    status_show = '待审核';
                    break;
            case 1:
                    status_show = '审核通过';
                    status_go = '';
                    break;
            case 2:
                    status_show = '审核不通过';
                    status_forhidden = '';
                    break;
        }
        item.member = item.member || {};
        item.order_info = item.order_info || {};
        return (
            <tr key={item.id}>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width='3%'>
                                <input className='each_checkbox' type="checkbox" value={item.id} onChange={this.onChangeCheckBox} checked={item.isChecked} />
                            </td>
                            <td width="15%">
                                <div>
                                    <Col sm={6}>
                                        <span style={{color:'#449DE0'}}>{item.member.name}</span>
                                    </Col>
                                    <Col sm={6}>
                                        订单: <a href={"#/app/orderDetail/"+item.order_info.id}>{item.order_no}</a>
                                    </Col>
                                </div>
                                <div className='mt5' style={{width:'315'}}>
                                    <Col sm={12}>
                                        {item.content}
                                    </Col>
                                </div>
                                <div>
                                    <Col sm={12} className='right_margin'>
                                        {imgNode}
                                    </Col>
                                </div>
                                <div>
                                    <Col sm={12} className='right_margin mt5'>
                                        {tagsNode}
                                    </Col>
                                </div>
                                <div style={{width:'315'}}>
                                    <Col sm={12} className='right_margin mt5'>
                                        {replyNode}
                                    </Col>
                                </div>
                            </td>
                            <td width="6%" className='text_center'>{rate_show}</td>
                            <td width="8%" className='text_center'>{item.created_at}</td>
                            <td width="6%" className='text_center'>{status_show}</td>
                            <td width="8%" className='text_center'>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,'go',item.id,item.status)}>{status_go}</BLabel><br/>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,'reply',item.id,item.status)}>{status_reply}</BLabel><br/>
                                <BLabel bsStyle='info' className='label-danger pointer' onClick={_this.handleStatus.bind(null,'noGo',item.id,item.status)}>{status_forhidden}</BLabel>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('commentList')],
    getInitialState: function(){
        return {
            allSelectStatus: false,
            length: 0,
            source: {},
            list: []
        }
    },
    searchHandle: function(page,status){
        var _this = this;
        var keyword = $('#_this_keyword').val(),
            has_pic = $('#comment_select').val(),
            start_at = $('#start_at').val(),
            end_at = $('#end_at').val();
        var request_data = {
            page: page,
            size: 10,
            keyword: keyword,
            status: status,
            has_pic: has_pic,
            start_at: start_at,
            end_at: end_at
        };
        liteFlux.action("commentList").getCommentList(request_data,function(data){
            _this.setState({
                source: data,
                list: data.data
            })
        });

    },
    componentDidMount: function () {
        if(this.props.id=='audit'){
            $('#status_select').val(0);
        }
        if(this.props.id=='all'){
            $('#status_select').val(-1);
        }
        var status = $('#status_select').val();
        this.searchHandle(1,status);
    },
    componentWillReceiveProps: function (props) {
        if(props.id=='audit'){
            $('#status_select').val(0);
        }
        if(props.id=='all'){
            $('#status_select').val(-1);
        }
        var status = $('#status_select').val();
        this.searchHandle(1,status);
    },
    search: function(){
        var status = $('#status_select').val();
        this.searchHandle(1,status);
    },
    handleSearch: function(source,type){
        var page = source.current_page;
        if(type=='previous'){
            page = page-1;
        }
        if(type=='next'){
            page = page+1;
        }
        var status = $('#status_select').val();
        this.searchHandle(page,status);
    },

    handleAllCheckBox: function(e){ //全选
        var el = e.target;
        var _this = this;
        this.state.list.map(function (item, index) {
            if(el.checked){
                item.isChecked = true;
                _this.setState({
                    allSelectStatus: true
                })
            }
            else{
                item.isChecked = false;
                _this.setState({
                    allSelectStatus: false
                })
            }

        });
        this.setState({
            list: this.state.list
        });
    },
    /*checkbox改变*/
    handleCheckboxChange: function(target){
        var _this = this;
        this.state.list.map(function (item, index) {
            if(item.id==target.value){
                if(target.checked){
                    item.isChecked = true;
                }
                else{
                    item.isChecked = false;
                }
            }
        });
        this.setState({
            list: this.state.list
        });
        var list = this.state.list;
        var checkedLength = 0;
        for(var key in list){
            if(!list[key].isChecked){
                checkedLength++
            }
        }
        if(checkedLength>0){
            _this.setState({
                allSelectStatus: false
            })
        }else{
            _this.setState({
                allSelectStatus: true
            })
        }
    },
    getUpdateData: function(data){/*状态改变*/
        this.setState({
            list: data
        })
    },
    moreHandle: function(status){ //批量审核
        var ids = [] , _this = this;
        var list = this.state.list;
        for(var key in list){
            if(list[key].isChecked){
                ids.push(list[key].id);
            }
        }
        var request_data = {
            ids: ids,
            status: status
        };
        liteFlux.action("commentList").batchUpdateComment(request_data,function(data){
            if(data){
                for(var key in list){
                    if(list[key].isChecked){
                        list[key].status = status;
                    }
                }
                _this.setState({
                    list: list
                })
            }
        });
    },
    render: function () {
        var _this = this,
            source = this.state.source;
        var list = this.state.list;
        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,source,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={_this.handleSearch.bind(null,source,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };

        var selectCheckBox = (
            <Row style={{marginLeft:'-18',marginBottom:'20'}}>
                <Col xs={3}>
                    <Col sm={4}>
                        <input type="checkbox" onChange={_this.handleAllCheckBox} checked={_this.state.allSelectStatus}/>
                        全选
                    </Col>
                    <Col sm={4}>
                        <BLabel bsStyle='info' className='pointer' onClick={_this.moreHandle.bind(null,1)}>批量审核通过</BLabel>
                    </Col>
                    <Col sm={4}>
                        <BLabel bsStyle='info' className='pointer' onClick={_this.moreHandle.bind(null,2)}>批量审核不通过</BLabel>
                    </Col>
                </Col>
                <Col xs={9}></Col>
            </Row>
        );
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <div className="search-box">
                                                <Grid>
                                                    <Row className='hidden-print' style={{marginBottom: 20}}>
                                                        <Col xs={7}>
                                                            <input id='_this_keyword' className='wa fl' type="text" placeholder='关键字搜索'/>
                                                            <Button type='submit' bsStyle='blue' className="wa fl ml15" onClick={_this.search}>确定</Button>
                                                            <Select id='comment_select' onChange={_this.search} className="wa fl mr0 ml30">
                                                                <option value="-1">全部评论晒单</option>
                                                                <option value="1">仅晒单评论</option>
                                                                <option value="0">非晒单评论</option>
                                                            </Select>
                                                            <Select id='status_select' onChange={_this.search} className="wa fl mr0 ml15">
                                                                <option value="-1">所有状态</option>
                                                                <option value="0">待审核</option>
                                                                <option value="1">审核通过</option>
                                                                <option value="2">审核不通过</option>
                                                            </Select>
                                                        </Col>
                                                        <Col xs={5} style={{paddingTop: 0}}>
                                                            <TimeFilter search={_this.search}></TimeFilter>
                                                            <input id='start_at' type="hidden"/>
                                                            <input id='end_at' type="hidden"/>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="3%" className='text_center'></th>
                                                        <th width="15%" style={{paddingLeft:'50'}}>购物心得</th>
                                                        <th width="6%" className='text_center'></th>
                                                        <th width="8%" className='text_center'>评价时间</th>
                                                        <th width="6%" className='text_center'>状态</th>
                                                        <th width="8%" className='text_center'>操作</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, i) {
                                                            return (
                                                                <List
                                                                    key={item.id}
                                                                    data={item}
                                                                    onChange={_this.handleCheckboxChange}
                                                                    updateCallBack = {_this.getUpdateData}
                                                                    list = {list}
                                                                    >
                                                                </List>
                                                            )
                                                        })
                                                    }
                                                    </tbody>
                                                </Table>
                                            </Grid>
                                            <hr/>
                                            {pagerNode()}
                                            {selectCheckBox}
                                        </div>
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
