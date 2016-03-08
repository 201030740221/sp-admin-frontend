/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var liteFlux = require('lite-flux');
var listStore = require('../../../modules/stores/preSale/listStore.jsx');

//
var classSet = React.addons.classSet;


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
                    <p>{content}</p>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    },
    deleteHandle: function(){
        var source = this.props.source,
            list = source.data;
        var _this = this;
        var item = this.props.data;
        var request_data = {};

        ModalManager.create(this.showModal('您确定要删除?','操作提示', function(){
            liteFlux.action("preSale").removePreSale(item.id,request_data,function(data){
                if(data){
                    for(var key in list){
                        if(item.id==list[key].id){
                            list.splice(key,1);
                        }
                    }
                    _this.props.callbackSource(list);
                }
            });
        }));

    },
    doHandle: function(status,id){

        var source = this.props.source,
            list = source.data || [];
        var _this = this;

        var this_status = null;

        if(+status==1){
            this_status = 2;
        }
        if(+status==-1 || +status==2){
            this_status = 1;
        }
        var request_data = {
            presale_id: id,
            status: this_status
        };

        liteFlux.action("preSale").updatePreSaleStatus(request_data,function(data){
            if(data){
                list.forEach(function(item,key){
                    if(id==item.id){
                        if(+status==1){
                            item.status = 2;
                        }
                        if(+status==-1 || +status==2){
                            item.status = 1;
                        }
                    }
                })
                _this.props.callbackSource(list);
            }
        });
    },

    changeHandle: function(id,e){

        var val = e.target.value;
        var source = this.props.source,
            list = source.data || [];
        var _this = this;
        list.forEach(function(item,key){
            if(id==item.id){
               item.sort_id = +val;
            }
        });
        this.props.callbackSource(list);

    },

    changeSort: function(id,e){

        var val = e.target.value;
        var ids = [] , sort_ids = [];
        ids.push(id);
        sort_ids.push(+val);
        var request_data = {
            presale_ids: ids,
            sort_ids: sort_ids
        };

        liteFlux.action("preSale").updateSortIdMultiply(request_data);
    },

    render: function () {
        var _this = this,
            item = this.props.data;

        var status_show = '';
        switch(+item.status){
            case -1: status_show='草稿';
                    break;
            case 1: status_show='激活';
                    break;
            case 2: status_show='冻结';
                    break;
        }

        var editNode = (
            <a href={"#/preSale/viewEdit/"+item.id+'/goodsId/'+item.goods_id} className='a_none_underline'><BLabel bsStyle='info' className='pointer ml5'>编辑</BLabel></a>
        );
        if(+item.status==1){
            editNode = '';
        }

        var this_status = '';
        if(+item.status==1){
            this_status = '冻结';
        }else{
            this_status = '激活';
        }

        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="4%" className='text_center'>{item.id}</td>
                            <td width="8%" className='text_center'>{item.name}</td>
                            <td width="6%" className='text_center'>{item.goods_id}</td>
                            <td width="6%" className='text_center'>{item.total_stock}</td>
                            <td width="6%" className='text_center'>{item.total_orders}</td>
                            <td width="6%" className='text_center'>{status_show}</td>
                            <td width="4%" className='text_center'>
                                <Input type='text' value={item.sort_id} onChange={_this.changeHandle.bind(null,item.id)} onBlur={_this.changeSort.bind(null,item.id)}/>
                            </td>
                            <td width="15%" className='text_center'>
                                <a href={"#/preSale/view/"+item.id+'/goodsId/'+item.goods_id} className='a_none_underline'><BLabel bsStyle='info' className='pointer a_none_underline'>管理</BLabel></a>
                                {editNode}
                                <BLabel bsStyle='info' className='pointer ml5 a_none_underline' onClick={_this.doHandle.bind(null,item.status,item.id)}>{this_status}</BLabel>
                                <BLabel bsStyle='info' className='label-danger pointer ml5 a_none_underline' onClick={this.deleteHandle}>删除</BLabel>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('preSale')],
    getInitialState: function(){
        return {
            source: {}
        }
    },
    searchSource: function(page){
        var _this = this;
        var request_data = {
            page_size: 15,
            page: page
        };
        liteFlux.action("preSale").getPreSaleList(request_data,function(data){
            _this.setState({
                source: data
            })
        });
    },
    componentDidMount: function () {
       this.searchSource(1);
    },
    componentWillReceiveProps: function (props) {
        this.searchSource(1);
    },
    handleSearch: function(source,type){
        var page = source.current_page;
        if(type=='previous'){
            page = page-1;
        }
        if(type=='next'){
            page = page+1;
        }
        this.searchSource(page);
    },
    callbackHandle: function(data){
        var _this = this,
            source = this.state.source;
        source.data = data;
        this.setState({
            source: source
        })
    },
    search: function(){
        var _this = this;
        var name = $('#name').val(),
            goods_id = $('#goods_id').val(),
            status = $('#status').val();
        var request_data = {
            page_size: 15,
            page: 1
        };
        if(name){
            request_data.name = name;
        }
        if(goods_id){
            request_data.goods_id = goods_id;
        }
        if(status!=-2){
            request_data.status = status;
        }
        liteFlux.action("preSale").getPreSaleList(request_data,function(data){
            _this.setState({
                source: data
            })
        });
    },
    render: function () {
        var _this = this,
            source = this.state.source;
        var list = source.data || [];
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


        return (
            <Container id='body'>
                <div>
                    <a className="a_none_underline" href="#/preSale/viewEdit/create/goodsId/create">
                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>创建预售活动</Button>
                    </a>
                </div>
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
                                                        <Col sm={3}>
                                                            活动名称：<input id='name' type="text"/>
                                                        </Col>
                                                        <Col sm={3}>
                                                            商品编号：<input id='goods_id' type="text"/>
                                                        </Col>
                                                        <Col sm={2}>
                                                            <span className='fl'>状态：</span>
                                                            <Select className="wa fl mr0 ml15" id='status'>
                                                                <option value="-2">请选择</option>
                                                                <option value="-1">草稿</option>
                                                                <option value="1">激活</option>
                                                                <option value="2">冻结</option>
                                                            </Select>
                                                        </Col>
                                                        <Col sm={3}>
                                                            <Button type='submit' bsStyle='blue' className="wa fl ml15" onClick={this.search}>查询</Button>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="4%" className='text_center'>ID</th>
                                                        <th width="8%" className='text_center'>活动名称</th>
                                                        <th width="6%" className='text_center'>商品编号</th>
                                                        <th width="6%" className='text_center'>总库存</th>
                                                        <th width="6%" className='text_center'>预定数</th>
                                                        <th width="6%" className='text_center'>状态</th>
                                                        <th width="4%" className='text_center'>排序编号</th>
                                                        <th width="15%" className='text_center'>操作</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        list.map(function (item, i) {
                                                            return (
                                                                <List
                                                                    key={item.id}
                                                                    data={item}
                                                                    source = {source}
                                                                    callbackSource = {_this.callbackHandle}
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
