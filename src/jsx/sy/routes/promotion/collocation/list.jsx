/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

//
var ModalMixins = require('../../../widgets/modal/confirmModal.jsx');
var CategorySelector = require('../../../widgets/categorySelector/categorySelector.jsx');
var events = require('../../../widgets/Goods/events.jsx');

var liteFlux = require('lite-flux');
var goodListStore = require('../../../modules/stores/goods/list.jsx');
var goodListAction = require('../../../modules/actions/goods/list.jsx');

//
var classSet = React.addons.classSet;


/**
 * 搜索框
 */
var SearchBar = React.createClass({
    onSearch: function(e){
        var data = {
            page:1,
            size:10
        };

        if(this.props.source.keywords["category_id"])
            data.category_id = this.props.source.keywords["category_id"];

        if(this.props.source["status"]!=-1)
            data.status = this.props.source.keywords["status"];

        if(this.props.source.keywords["title"].trim()!="")
            data.title = this.props.source.keywords["title"];
        if(this.props.source.keywords["collocation_status"]!=-1)
            data.has_collocations = this.props.source.keywords["collocation_status"];

        goodListStore.setStore({
            isSearch: true
        });

        goodListAction.loadList(data);

    },
    changeSearchCategory: function(categroy){
        var keywords = this.props.source.keywords;
        keywords.category_id = categroy.id;
        goodListStore.setStore(keywords);
    },
    changeSearchWord: function(e){
        var val = e.target.value;
        var keywords = this.props.source.keywords;
        keywords.title = val;
        goodListStore.setStore(keywords);
    },
    onChangeStatus: function(e){
        var val = e.target.value;
        var keywords = this.props.source.keywords;
        keywords.collocation_status = val;
        goodListStore.setStore(keywords);
    },
    render: function(){
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <Label control sm={3} className='right_padding'>商品分类:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <CategorySelector callback = {this.changeSearchCategory} ></CategorySelector>
                        </Col>
                    </Col>
                    <Col xs={6}>
                        <Label control sm={3} className='right_padding'>是否已有搭配:</Label>
                        <Col sm={9} className="mb15">
                            <Select id='_this_status'  onChange={this.onChangeStatus} className="wa fl mr0">
                                <option value="-1">全部</option>
                                <option value="0">否</option>
                                <option value="1">是</option>
                            </Select>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Label control sm={3} className='right_padding'>关键字:</Label>
                        <Col sm={9} className="mb15 pr0">
                            <Input id='_this_name' onChange={this.changeSearchWord} type='text'  placeholder='' className='inline' style={{width:'240'}}/>
                        </Col>
                    </Col>
                    <Col xs={6}>
                        <Label  sm={3}></Label>
                        <Col sm={9} className="mb15">
                            <Button onClick={this.onSearch} type='submit' bsStyle='blue' className="fl" >查    询</Button>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
});


var List = React.createClass({
    render: function () {

        var item = this.props.data;
        var url = '';

        item.primary_goods_sku = item.primary_goods_sku||{}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover||{};
        item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
        if(item.primary_goods_sku.has_cover.media.full_path){
            url = item.primary_goods_sku.has_cover.media.full_path+'?imageView2/1/w/100';
        }
        var count_show= '否';
        if(parseInt(item.collocation_count)>0){
            count_show = '是'
        }

        var handleNode = (
            <a href={'#/promotion/collocation/handle/'+item.id}><BLabel bsStyle='info' style={{cursor:'pointer',padding:'8'}}>管理搭配</BLabel></a>
        );
        if(item.goods_type==1){
            handleNode = '积分商品不能作为主商品搭配套餐';
        }
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="8%" className='text_center'>
                                <Col xs={4}>
                                    <img src={url} alt="" width='100'/>
                                </Col>
                                <Col xs={8} className='text_left'>
                                    <p style={{marginBottom:'5',marginTop:'20',color:'#42A4A7'}}>{item.title}</p>
                                </Col>
                            </td>
                            <td width="6%" className='text_center'>{item.goods_category.category.name}</td>
                            <td width="6%" className='text_center'>{count_show}</td>
                            <td width="6%" className='text_center'>
                                {handleNode}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


var Body = React.createClass({
    mixins: [Sp.eventMixin,liteFlux.mixins.storeMixin('goodList')],
    events: events,

    componentDidMount: function () {
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id = this.props.id || 0;
        keywords.title = '';
        goodListStore.setStore(keywords,function(){
            var data = {
                size: 10,
                page: 1
            };
            data.category_id = self.state.goodList.keywords.category_id;
            data.title=self.state.goodList.keywords.title;
            goodListAction.loadList(data);
        });
    },
    componentWillReceiveProps: function (props) {
        var self = this;
        var keywords = this.state.goodList.keywords;
        keywords.category_id =  props.id || 0;
        keywords.title = '';
        goodListStore.setStore(keywords,function(){
            var data = {
                size: 10,
                page: 1
            };
            data.category_id = self.state.goodList.keywords.category_id;
            data.title=self.state.goodList.keywords.title;
            goodListAction.loadList(data);
        });
    },
    render: function () {
       var _this = this;
        var source = this.state.goodList;
        if(source.data == null || source.data == undefined)
            return false;

       var list = source.data;
       /* var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.currentPage > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,'previous')}>上一页</Page>
                }

                if (source.currentPage < source.lastPage) {
                    next = <Page next onClick={_this.handleSearch.bind(null,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };*/
        // 页码
        var pager = (
            <Pager>
                <Page previous href='#' onClick={this.trigger.bind(null,"PrevPage")}>Previous</Page>{' '}
                <Page next href='#' onClick={this.trigger.bind(null,"NextPage")}>Next</Page>
            </Pager>
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
                                                        <SearchBar source={source}></SearchBar>
                                                    </Row>
                                                </Grid>
                                            </div>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="8%" style={{paddingLeft:'150'}}>商品</th>
                                                        <th width="6%" className='text_center'>所属分类</th>
                                                        <th width="6%" className='text_center'>是否已有搭配</th>
                                                        <th width="6%" className='text_center'>操作</th>
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

                                                <hr/>
                                                {pager}
                                            </Grid>

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
