/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');
var moment = require('moment');
var DatePicker = require('../../../widgets/datepicker/datepicker.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/promotion/seckill/seckillStore.jsx');
//
var classSet = React.addons.classSet;


var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.seckill;
        var page = source.current_page;
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
        var data = {
            "name": $('#_this_name').val(),
            'begin_at':$("#begin_at").val(),
            'end_at':$("#end_at").val(),
            'status':isNaN(parseInt($('#_this_status').val()))?-1:parseInt($('#_this_status').val()),
            "page": page,
            "size": 10
        };
        if(isNaN(parseInt($('#_this_sku').val()))){

        }else{
            data.sku_sn = parseInt($('#_this_sku').val());
        }
        liteFlux.action("seckill").getSeckillList(data);
    }
};


/**
 * 状态筛选
 */
var StatusBar = React.createClass({
    onChangeStatus: function(e){
        var value = e.target.value;
    },
    render: function(){
        return (
            <Select id='_this_status'  onChange={this.onChangeStatus} className="wa fl mr0">
                <option value="-1">全部状态</option>
                <option value="1">草稿</option>
                <option value="2">激活</option>
                <option value="3">冻结</option>
                <option value="4">过期</option>
            </Select>
        )
    }
});

/**
 * 搜索框
 */
var SearchBar = React.createClass({
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
        $("#begin_at").val(time_start_at);
    },
    componentDidMount: function(){

    },
    onSearch: function(e){
        this.props.searchSource(1);
    },
    render: function(){
        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <Label control sm={3} className='right_padding'>规则名称:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <Input id='_this_name' type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                        </Col>
                    </Col>
                    <Col xs={4}>
                        <Label control sm={3} className='right_padding'>SKU编号:</Label>
                        <Col sm={9} className="mb15">
                            <Input id='_this_sku' type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                        </Col>
                    </Col>
                    <Col xs={4}>
                        <Label control sm={3} className='right_padding'>状态:</Label>
                        <Col sm={9} className="mb15">
                            <StatusBar></StatusBar>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <Label control sm={3} className='right_padding'>开始时间:</Label>
                        <Col sm={9} className="mb15">
                            <DatePicker
                                key="startTime"
                                onChange={this.changeStartTime}
                                dateFormat='YYYY-MM-DD'
                                placeholderText='Click to select a date'
                                selected={this.state.start_date}>
                            </DatePicker>
                        </Col>
                    </Col>
                    <Col xs={4}>
                        <Label control sm={3} className='right_padding'>结束时间:</Label>
                        <Col sm={9} className="mb15">
                            <DatePicker
                                key="endTime"
                                onChange={this.changeEndTime}
                                dateFormat='YYYY-MM-DD'
                                placeholderText='Click to select a date'
                                selected={this.state.end_date}>
                            </DatePicker>
                        </Col>
                    </Col>
                    <input id='begin_at' type="hidden"/>
                    <input id='end_at' type="hidden"/>
                    <Col xs={4}>
                        <Label  sm={7}></Label>
                        <Col sm={5} className="mb15">
                            <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fl" >查    询</Button>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
});


var List = React.createClass({
    listHandle: function(){
        var data_list = {
            "name": $('#_this_name').val(),
            'begin_at':$("#begin_at").val(),
            'end_at':$("#end_at").val(),
            'status':isNaN(parseInt($('#_this_status').val()))?-1:parseInt($('#_this_status').val()),
            "page": 1,
            "size": 10
        };
        if(isNaN(parseInt($('#_this_sku').val()))){

        }else{
            data_list.sku_sn = parseInt($('#_this_sku').val());
        }
       return data_list;
    },
    activeHandle: function(id){
        var data_list = this.listHandle();
        var data = {
            fsId:id
        };
        liteFlux.action("seckill").activeSeckill(data,data_list);
    },
    freezeHandle: function(id){
        var data_list = this.listHandle();
        var data = {
            fsId:id
        };
        liteFlux.action("seckill").freezeSeckill(data,data_list);
    },

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
    deleteHandle: function(id){
        var data_list = this.listHandle();
        var data = {
            fsId:id
        };

        ModalManager.create(this.showModal('您确定要删除?','操作提示', function(){
            liteFlux.action("seckill").deleteSeckill(data,data_list);
        }));

    },
    /*预览*/
    onOpenGoodPage: function(sku_sn){
        var href = frontHost+'/flash-sale/'+sku_sn+'.html';
        if(sku_sn){
            window.open(href);
        }else{
            alert('商品已下架，暂无法浏览前台页面！');
        }
    },
    render: function () {
        var item = this.props.data;
        /*状态*/
        var status_show = '';
        switch(parseInt(item.status)){
            case -1:
                status_show = '全部状态';
                break;
            case 1:
                status_show = '草稿';
                break;
            case 2:
                status_show = '激活';
                break;
            case 3:
                status_show = '冻结';
                break;
            case 4:
                status_show = '过期';
                break;
        }
        /*操作*/
        var edit_handle='' , active_handle='' , freeze_handle='' , preview_handle='' , delete_handle='' , see_handle='';
        var btns = item.btns;
        for(var key in btns){
            var value = parseInt(btns[key]);
            if( value==1 ){
                edit_handle = '编辑';
            }
            if( value==2 ){
                active_handle = '激活';
            }
            if( value==3 ){
                freeze_handle = '冻结';
            }
            if( value==4 ){
                preview_handle = '预览';
            }
            if( value==5 ){
                delete_handle = '删除';
            }
            if( value==6 ){
                see_handle = '查看';
            }
        }
        var remain = parseInt(item.stock)-parseInt(item.remains);
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="6%">{item.id}</td>
                            <td width="10%" className='text_center'>{item.name}</td>
                            <td width="10%" className='text_center'>{item.begin_at} <p>至</p> {item.end_at}</td>
                            <td width="8%" className='text_center'>{item.sku_sn}</td>
                            <td width="8%" className='text_center'>{item.stock}</td>
                            <td width="8%" className='text_center'>{remain}</td>
                            <td width="6%" className='text_center'>{status_show}</td>
                            <td width="15%" className='text_center'>
                                <a className="a_none_underline" href={'#/promotion/seckill/seckillEdit/'+item.id}><BLabel bsStyle='info'>{ see_handle }</BLabel></a>
                                <a className="a_none_underline" href={'#/promotion/seckill/seckillEdit/'+item.id}><BLabel bsStyle='info'>{ edit_handle }</BLabel></a>
                                <a className="a_none_underline" href='javascript:;' onClick={this.activeHandle.bind(null,item.id)}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{ active_handle }</BLabel></a>
                                <a className="a_none_underline" href='javascript:;' onClick={this.freezeHandle.bind(null,item.id)}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{ freeze_handle }</BLabel></a>
                                <a className="a_none_underline" href='javascript:;' target="_blank" onClick={this.onOpenGoodPage.bind(null,item.sku_sn)}><BLabel bsStyle='info' style={{marginLeft:'15'}}>{ preview_handle }</BLabel></a>
                                <a className="a_none_underline" href='javascript:;' onClick={this.deleteHandle.bind(null,item.id)}><BLabel className='label-danger' bsStyle='info' onClick={this.forbiddenSelf} style={{marginLeft:'15'}}>{ delete_handle }</BLabel></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('seckill'), HandleMixins, ModalMixins],
    getInitialState: function () {

    },
    searchSource: function(page){
        var data = {
            "name": $('#_this_name').val(),
            'begin_at':$("#begin_at").val(),
            'end_at':$("#end_at").val(),
            'status':isNaN(parseInt($('#_this_status').val()))?-1:parseInt($('#_this_status').val()),
            "page": page,
            "size": 10
        };
        if(isNaN(parseInt($('#_this_sku').val()))){

        }else{
            data.sku_sn = parseInt($('#_this_sku').val());
        }
        liteFlux.action("seckill").getSeckillList(data);
    },
    componentDidMount: function () {
        this.searchSource(1);
    },
    componentWillReceiveProps: function(props) {
        this.searchSource(1);
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },

    render: function () {
       var _this = this;
        var source = this.state.seckill || null;
        if(source.data == null || source.data == undefined)
            return false;

       var list = source.data;

        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={_this.handleSearch.bind(null,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };
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
                                                <div>
                                                    <a className="a_none_underline" href="#/promotion/seckill/seckillCreate">
                                                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>添加规则</Button>
                                                    </a>
                                                </div>
                                                <Grid>
                                                    <Row className='hidden-print' style={{marginBottom: 20}}>
                                                        <SearchBar uid={this.props.uid} searchSource = {this.searchSource}></SearchBar>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="6%">ID</th>
                                                        <th width="10%" className='text_center'>规则名称</th>
                                                        <th width="10%" className='text_center'>时间</th>
                                                        <th width="8%" className='text_center'>SKU编号</th>
                                                        <th width="8%" className='text_center'>秒杀库存</th>
                                                        <th width="8%" className='text_center'>已秒库存</th>
                                                        <th width="6%" className='text_center'>状态</th>
                                                        <th width="15%" className='text_center'>操作</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, i) {
                                                            return (
                                                                <List
                                                                    key={i}
                                                                    data={item}
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
