/** @jsx React.DOM */
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var events = require('../../widgets/Goods/events.jsx');
var CategorySelector = require('../../widgets/categorySelector/categorySelector.jsx');

// 引用goodList store
var liteFlux = require('lite-flux');
var goodListStore = require('../../modules/stores/goods/list.jsx');
var goodListAction = require('../../modules/actions/goods/list.jsx');


var ListNode = React.createClass({
/*    mixins: [Sp.eventMixin],
    events:{
        test: function(){
            alert(1);
        }
    },*/
    getInitialState: function(){
        return {
            data: []
        }
    },
    onUpdateListItem: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        //Sp.dispatcher.emit("sp:test",id);
        Sp.dispatcher.emit("sp:onEditGood",id);
        //this.props.trigger("EditGood",id);
    },
    onUpdateSkuListItem: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        RRouter.routing.navigate('/app/good/sku/'+id);
    },
    onRemoveListItem: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        this.props.trigger("RemoveGood",id);
    },
    onSetSaleTyle: function(id,e){
        alert("正在努力开发中");
    },
    onAddShelf: function(id,e){
        var val = e.target.value;
        this.props.trigger("AddShelf",id,val);
    },
    onOpenGoodPage: function(status){
        var href = frontHost+'/item/'+this.props.data.sku_sn+'.html';
        if(status){
            window.open(href);
        }else{
            alert('商品已下架，暂无法浏览前台页面！');
        }
    },
    componentDidMount: function(){

    },
    render: function(){
        var self = this;
        var picurl = function(){
            if(self.props.data.full_path){
                return (
                    <a target="_blank" onClick={self.onOpenGoodPage.bind(null,self.props.data.status)}>
                        <img src={self.props.data['full_path']+'?imageView2/2/w/80'} width="80"/>
                    </a>
                )
            }else{
                return (
                    <a target="_blank" onClick={self.onOpenGoodPage.bind(null,self.props.data.status)}>
                        没有图片
                    </a>
                )
            }
        };
        return (
            <tr>
                <td className='text-center check-td hidden'>
                    <Checkbox ref='check'></Checkbox>
                </td>
                <td className='text-center'>{self.props.data["goods_id"]}</td>
                <td className='text-center'>{picurl()}</td>
                <td ><a target="_blank" onClick={self.onOpenGoodPage.bind(null,self.props.data.status)}>{self.props.data.title}</a></td>
                <td className='text-center'>{self.props.data.cname}</td>
                <td className='text-center'>
                    <Select onChange={this.onSetSaleTyle}>
                        <option>正常</option>
                        <option>新品</option>
                        <option>热销</option>
                    </Select>
                </td>
                <td className='text-center'>
                    <Select defaultValue={self.props.data.status} onChange={this.onAddShelf.bind(null,self.props.data["goods_id"])}>
                        <option value="0">下架</option>
                        <option value="1">上架</option>
                    </Select>
                </td>
                <td className='text-center'>
                    <div className="sy_action_icon" onClick={this.onUpdateListItem.bind(null,self.props.data["goods_id"])} >
                        编辑基本信息
                    </div>
                    <div className="sy_action_icon" onClick={this.onUpdateSkuListItem.bind(null,self.props.data["goods_id"])} >
                        编辑SKU
                    </div>
                    <div className="sy_action_icon" onClick={this.onRemoveListItem.bind(null,self.props.data["goods_id"])} >
                        加入回收站
                    </div>
                </td>
            </tr>
        )
    }
});

var Body = React.createClass({
    mixins: [Sp.eventMixin,liteFlux.mixins.storeMixin('goodList')],
    events: events,
    onCheckedAll: function(){
      this.trigger("CheckedAll");
    },
    onNarmalList: function(e){
        e.preventDefault();
        e.stopPropagation();
        goodListStore.setStore({
            isSearch: false
        });
        goodListAction.loadList();
    },
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
        keywords.category_id =  0;
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
    changeSearchCategory: function(categroy){
        var keywords = this.state.goodList.keywords;
        keywords.category_id = categroy.id;
        goodListStore.setStore(keywords);
    },
    changeSearchStatus: function(e){
        var val = e.target.value;
        var keywords = this.state.goodList.keywords;
        keywords.status = val;
        goodListStore.setStore(keywords);
    },
    changeSearchWord: function(e){
        var val = e.target.value;
        var keywords = this.state.goodList.keywords;
        keywords.title = val;
        goodListStore.setStore(keywords);
    },
    searchMore: function(e){
        var data = {
            page:1,
            size:10
        };

        if(this.state.goodList.keywords["category_id"])
            data.category_id = this.state.goodList.keywords["category_id"];

        if(this.state.goodList.keywords["status"]!=-1)
            data.status = this.state.goodList.keywords["status"];

        if(this.state.goodList.keywords["title"].trim()!="")
            data.title = this.state.goodList.keywords["title"];

        goodListStore.setStore({
            isSearch: true
        });

        goodListAction.loadList(data);

        //this.trigger("SearchLoad",data);
    },
    render: function () {
        var self = this;
        var state = this.state.goodList;
        // 商品列表
        var goodNodes = state.data.map(function (good, i) {
            return (
                <ListNode key={good.id} data={good} trigger={self.trigger} check={self.state.itemCheck}></ListNode>
            );
        });

        // 操作
        var selectActioner = (
            <Select>
                <option>请选择操作</option>
                <option>回收站</option>
                <option>上架</option>
                <option>下架</option>
                <option>新品</option>
                <option>取消新品</option>
                <option>热销</option>
                <option>取消热销</option>
            </Select>
        );

        // 页码
        var pager = (
            <Pager>
                <Page previous href='#' onClick={this.trigger.bind(null,"PrevPage")}>Previous</Page>{' '}
                <Page next href='#' onClick={this.trigger.bind(null,"NextPage")}>Next</Page>
            </Pager>
        );

        var searchBtnStyle = React.addons.classSet({
            'ml20': true,
            'hidden': !state.isSearch
        });

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row className='hidden-print' style={{marginBottom: 20}}>
                                                <Col xs={8}>
                                                    <div>
                                                        选择分类： <CategorySelector callback = {this.changeSearchCategory} ></CategorySelector>
                                                    </div>
                                                    <Select className="wa fl mr10 hidden">
                                                        <option value="-1">全部</option>
                                                        <option value="0">新品</option>
                                                        <option value="1">热销</option>
                                                    </Select>
                                                    <Select className="wa fl mr10" onChange={this.changeSearchStatus}>
                                                        <option value="-1">全部</option>
                                                        <option value="0">下架</option>
                                                        <option value="1">上架</option>
                                                    </Select>
                                                    <Input onChange={this.changeSearchWord} className="wa fl mr10" type='text' placeholder='请输入关键字' />
                                                    <Button type='submit' bsStyle='blue' className="fl" onClick={this.searchMore} >搜索</Button>
                                                    <a onClick={this.onNarmalList} className={searchBtnStyle} href="#">退出搜索状态</a>
                                                </Col>
                                                <Col xs={4} style={{paddingTop: 0}}>
                                                    <ButtonToolbar className='inbox-toolbar fr'>
                                                        <ButtonGroup>
                                                            <Button bsStyle='blue' onClick={this.events.onAddGood}>
                                                                <Icon glyph='icon-ikons-shopping-cart-add'/>
                                                                添加商品
                                                            </Button>
                                                        </ButtonGroup>
                                                    </ButtonToolbar>
                                                </Col>
                                            </Row>
                                        </Grid>
                                        <hr style={{marginBottom: 20, marginTop: 0}}/>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <Table className='display' cellSpacing='0' width='100%'>
                                                        <thead>
                                                            <tr>
                                                                <th style={{width: 30}} className='text-center check-all-td hidden'>
                                                                    <Checkbox onClick={this.onCheckedAll} ref='checkAll'></Checkbox>
                                                                </th>
                                                                <th style={{width: 80}} className='text-center'>编号</th>
                                                                <th style={{width: 100}} className='text-center'>图片</th>
                                                                <th width='*'>商品名称</th>
                                                                <th style={{width: 200}} className='text-center'>从属分类</th>
                                                                <th style={{width: 150}} className='text-center'>促销类型</th>
                                                                <th style={{width: 150}} className='text-center'>上下架</th>
                                                                <th style={{width: 180}} className='text-center'>操作</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {goodNodes}
                                                        </tbody>
                                                    </Table>
                                                    <Row>
                                                        <Col xs={6}>
                                                            <div className="selectActioner" style={{
                                                                float: "left",
                                                                marginRight: 10
                                                            }}>

                                                            </div>

                                                        </Col>
                                                        <Col xs={6}>
                                                            <div className="pagers" style={{float: "right"}}>
                                                                {pager}
                                                            </div>
                                                        </Col>
                                                    </Row>

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

var classSet = React.addons.classSet;
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
