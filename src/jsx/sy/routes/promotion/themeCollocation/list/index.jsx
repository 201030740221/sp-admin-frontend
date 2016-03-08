/** @jsx React.DOM */

/**
 * 主题搭配列表
 * */
var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var liteFlux = require('lite-flux');
var listStore = require('../../../../modules/stores/promotion/themeCollocation/list/listStore.jsx');

var HandleMixins = {
    handleSearch: function (type) {
        var _this = this;
        var base = _this.state.themeList,
            source = base.themeList;
        if(source == null || source == undefined)
            return false;
        var page = source.current_page;
        switch (type) {
            case 'previous':
                  page = page-1;
                break;
            case 'next':
                  page = page+1;
                break;
            default :
                page = 1;
                break;
        }
        var keyword = $('#_this_keyword').val(),
            status = $('#_this_status').val(),
            sort = $('#_this_sort').val();
        var data = {
            size: 10,
            page: page,
            name: keyword
        };
        if(parseInt(status)!=-1){
            data.status = parseInt(status);
        }
        if(parseInt(sort)==0){
            data.order = 'createTime';
        }
        if(parseInt(sort)==1){
            data.order = 'sortId'
        }
        liteFlux.action("themeList").getThemeCollocationList(data);
    }
};


/**
 * 搜索框
 */
var SearchBar = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('themeList')],
    onSearch: function(e){
        var keyword = $('#_this_keyword').val(),
            status = $('#_this_status').val(),
            sort = $('#_this_sort').val();
        var data = {
            size: 10,
            page: 1,
            name: keyword
        };
        if(parseInt(status)!=-1){
            data.status = parseInt(status);
        }
        if(parseInt(sort)==0){
            data.order = 'createTime';
        }
        if(parseInt(sort)==1){
            data.order = 'sortId'
        }
        liteFlux.action("themeList").getThemeCollocationList(data);
    },
    onChangeStatus: function(){
        var val = $('#_this_tag').val();
        console.log(val);
    },
    render: function(){
        var tagsList = this.props.tags;
        if(tagsList == null || tagsList == undefined)
            return false;

      /*  var tagsNode = tagsList.map(function(item,key){
            return (
                <option key={item.id} value={item.id}>
                    {item.name}
                    {
                        item.tags.map(function(elm,key){
                            return (
                                <p key={elm.tag_id} value={elm.tag_id}>&nbsp;&nbsp;&nbsp; {elm.tag.name} </p>
                            )
                        })
                    }
                </option>
            )
        });
       <Col xs={2}>
       <Label control sm={5} className='right_padding'>属性标签:</Label>
       <Col sm={7} className="mb15">
       <Select id='_this_tag'  onChange={this.onChangeStatus} className="wa fl mr0">
       <option value="-1">请选择属性标签</option>
       {tagsNode}
       </Select>
       </Col>
       </Col>*/
        return (
            <div>
                <Row>
                    <Col xs={2}>
                        <Col sm={7} className="mb15 pr0">
                            <Input id='_this_keyword' type='text'  placeholder='请输入关键字' className='inline'/>
                        </Col>
                    </Col>
                    <Col xs={2}>
                        <Label control sm={5} className='right_padding'>方案状态:</Label>
                        <Col sm={7} className="mb15">
                            <Select id='_this_status' className="wa fl mr0">
                                <option value="-1">请选择方案状态</option>
                                <option value="1">已上架</option>
                                <option value="0">已下架</option>
                                <option value="2">已被系统下架</option>
                            </Select>
                        </Col>
                    </Col>
                    <Col xs={2}>
                        <Label control sm={5} className='right_padding'>列表排序:</Label>
                        <Col sm={7} className="mb15">
                            <Select id='_this_sort' className="wa fl mr0">
                                <option value="-1">请选择列表排序</option>
                                <option value="0">创建时间</option>
                                <option value="1">排序序号</option>
                            </Select>
                        </Col>
                    </Col>
                    <Col xs={2}>
                        <Col sm={7} className="mb15">
                            <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fl" >查    询</Button>
                        </Col>
                    </Col>
                    <Col xs={2}>

                    </Col>
                </Row>
            </div>
        )
    }
});


var List = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('themeList')],
    getInitialState: function(){
        var item = this.props.data;
        return{
            sort_id: item.sort_id
        }
    },
    handleChange: function(e){
        var val = e.target.value;
        this.setState({
            sort_id: val
        });
    },
    blurHandle: function(e){
        var val = e.target.value;
        var id = e.target.id;
        var list_data = {
            page: 1,
            size: 10
        };
        var request_data = {
            id: id,
            sort_id: val
        };
        liteFlux.action("themeList").updateSortId(request_data,list_data);
    },
    handleStatus: function(status,id){
        var _this = this;
        var status_val = 0;
        if(parseInt(status)==0){
            status_val = 1;
        }
        if(parseInt(status)==1){
            status_val = 0;
        }
        var list_data = {
            page: 1,
            size: 10
        };
        var request_data = {
            ids: id,
            status: status_val
        };
        liteFlux.action("themeList").updateStateMultiply(request_data,list_data);
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
        var _this = this;
        var list_data = {
            page: 1,
            size: 10
        };
        var request_data = {
            id: id
        };
        ModalManager.create(this.showModal('您确定要删除?','操作提示', function(){
            liteFlux.action("themeList").deleteThemeCollocation(request_data,list_data);
        }));

    },
    render: function () {
        var _this = this,
            item = this.props.data,
            status_show = '',
            down_handle = '下架',
            up_handle = '上架',
            edit_handle = '编辑',
            delete_handle = '删除',
            see_handle = '查看';

        switch(item.status){
            case 0: status_show = '已下架';
                    down_handle = '';
                    see_handle = '';
                    break;
            case 1: status_show = '已上架';
                    up_handle = '';
                    edit_handle = '';
                    break;
            case 2: status_show = '已被系统下架';
                    up_handle = '';
                    delete_handle = '';
                    edit_handle = '';
                    break;
        }
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="6%"> {item.id} </td>
                            <td width="15%" className='text_center'> {item.name} </td>
                            <td width="8%" className='text_center'> {item.created_at} </td>
                            <td width="6%" className='text_center'> {status_show} </td>
                            <td width="6%" className='text_center'>
                                <input type="text" style={{width:'60',textAlign:'center'}} id={item.id} value={this.state.sort_id} onChange={this.handleChange} onBlur={this.blurHandle}/>
                            </td>
                            <td width="11%" className='text_center'>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,item.status,item.id)}>{down_handle}</BLabel>
                                <BLabel bsStyle='info' className='pointer' onClick={_this.handleStatus.bind(null,item.status,item.id)}>{up_handle}</BLabel>
                                <a className="a_none_underline" style={{marginLeft:'5'}} href={'#/promotion/collocation/theme/detail/'+item.id}><BLabel bsStyle='info'>{edit_handle}</BLabel></a>
                                <a className="a_none_underline" style={{marginLeft:'5'}} href={'#/promotion/collocation/theme/detail/'+item.id}><BLabel bsStyle='info'>{see_handle}</BLabel></a>
                                <BLabel bsStyle='info' style={{marginLeft:'5'}} className='label-danger pointer' onClick={_this.deleteHandle.bind(null,item.id)}>{delete_handle}</BLabel>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


/**
 * 主体
 */
var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('themeList'),HandleMixins],
    getInitialState: function () {
        return{

        }
    },
    componentDidMount: function () {
        var data = {
            size: 10,
            page: 1
        };
        delete data.tag_id;
        liteFlux.action("themeList").getThemeCollocationList(data);
        liteFlux.action("themeList").getTagsList({});
    },
    componentWillReceiveProps: function(props) {
        var data = {
            size: 10,
            page: 1
        };
        delete data.tag_id;
        liteFlux.action("themeList").getThemeCollocationList(data);
        liteFlux.action("themeList").getTagsList({});
    },
    render: function () {
        var _this = this;
        var base = _this.state.themeList,
            source = base.themeList || [];
        source = source || {};
        source.data = source.data || [];

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
                                                    <a className="a_none_underline" href="#/promotion/collocation/theme/detail/create">
                                                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>新建方案</Button>
                                                    </a>
                                                </div>
                                                <Grid>
                                                    <Row className='hidden-print' style={{marginBottom: 20}}>
                                                        <SearchBar tags={base.tagsList}></SearchBar>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="6%">编号</th>
                                                        <th width="15%" className='text_center'>名称</th>
                                                        <th width="8%" className='text_center'>创建时间</th>
                                                        <th width="6%" className='text_center'>状态</th>
                                                        <th width="6%" className='text_center'>排序</th>
                                                        <th width="11%" className='text_center'>操作</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, key) {
                                                            return (
                                                                <List
                                                                    key={item.id}
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
