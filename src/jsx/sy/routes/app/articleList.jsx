/** @jsx React.DOM */
/*文章分类管理*/

var Fluxxor = require("fluxxor");

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//Api
var Api = require('../../modules/api/api.jsx');
//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
//
var articleStore = require("../../modules/stores/articleStore.jsx");
var articleAction = require('../../modules/actions/articleAction.jsx');
var SortAction = require('../../widgets/SortAction/SortAction.jsx');

var sm = new Sp.Model({
})

var stores = {
  articleStore: new articleStore()
};

var flux = new Fluxxor.Flux( stores, articleAction);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


//
var classSet = React.addons.classSet;


var HandleMixins = {
  handleChange: function(e) {
    console.log(1)
    var _this = this;
    var el = e.target;
    var category = this.category;
    console.log(el.name);
    category[el.name] = e.target.value;
    this.shouldUpdate = true;
    this.setState({
      category: category
    });
  },
  handleSelectChange: function(e){
    var el = e.target;
    switch (el.name){
      case 'category':
        console.log(el.value);
        var category_id = el.value;
        var keyword = this.refs.search.getValue() || "";
        flux.actions.onSearch({
          category_id: category_id,
          keyword: keyword
        });
        break;
      default :
        break;
    }
  },
  handleSearch: function(type){
    var source = this.state.articleStore.source;
    var page = source.current_page;
    var category_id = this.refs.category.getInputDOMNode().value || -1;
    var keyword = this.refs.search.getValue() || "";
    switch (type){
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
    flux.actions.onSearch({
      page: page,
      category_id: category_id,
      keyword: keyword
    });
  },
  handleCheckboxChange: function(e){
    var el = e.target;
    var article = this.article;
    var postData = {
      id: article.id
    };
    switch (el.name){
      case 'status':
        postData[el.name] = el.checked ? 1:0;
        article[el.name] = el.checked ? 1:0;
        flux.actions.updateStatusArticle(postData);
        break;
      default :
        break;
    }
  },
  deleteSelf: function (id) {
    var _this = this;

    var article = this.article;
    var postData = {
      id: article.id
    };
    ModalManager.create(this.showModal('您确定要删除文章:['+article.title+']?','操作提示', function(){
      flux.actions.removeArticle(postData);
    }));
  }
};

var Article = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("articleStore"), HandleMixins, ModalMixins],
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      articleStore: flux.store("articleStore").getState()
    };
  },
  onsort: function ($container, $item) {
    var $items = $container.find('.article-item');
    var ids = $items.map(function () {
      return $(this).data('aid');
    }).get();

    // TODO 保存顺序到后端
    var params = {
      'articles': ids
    }
    sm.post(sm.getUri('/api/article/batchSort'), params, function (resp) {
      if (resp.code !== 0) return;
    });
  },
  render: function(){
    var item = this.article = this.props.data;
    return (
        <Row className="article-item" data-aid={item.id}>
          <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}} >
            <Col xs={4}>{item.title}</Col>
            <Col xs={2}>{item.category.name}</Col>
            <Col xs={1}>
              <Input type='checkbox' name='status' ref='status' checked={+item.status} onChange={this.handleCheckboxChange}/>
            </Col>
            <Col xs={1}>
                <SortAction onsort={this.onsort} item='.article-item' container='#article-list' />
            </Col>
            <Col xs={2}>{item.updated_at}</Col>
            <Col xs={2}>
              <a target="_blank" href={'http://www.sipin.com/article/'+item.id}>
                <BLabel bsStyle='info'>查看</BLabel>
              </a>{' '}
              <a href={'#/app/article/'+item.id}>
                <BLabel bsStyle='info'>编辑</BLabel>
              </a>{' '}
              <BLabel bsStyle='danger' className='pointer' onClick={this.deleteSelf}>删除</BLabel>{' '}
            </Col>
          </Col>
        </Row>
    )
  }
});


var Body = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("articleStore"), HandleMixins, ModalMixins],
  getInitialState: function() {

    flux.actions.getCategory();
    flux.actions.getArticleList();

  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      articleStore: flux.store("articleStore").getState()
    };
  },

  getArticleList: function(e){
    e.preventDefault();
    e.stopPropagation();
    flux.actions.getArticleList();
  },
  createArticle: function(){

  },
  show: function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
  },
  render: function() {
    this.list = this.state.articleStore.list || [];
    this.category = this.state.articleStore.category || [];
    var source = this.state.articleStore.source || null;
    var _this = this;

    var pagerNode = function(){
      var prev = '';
      var next = '';
      if(source){
        if (source.current_page > 1){
          prev = <Page previous onClick={_this.handleSearch.bind(null,'previous')}>上一页</Page>
        }

        if(source.current_page < source.last_page){
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
                        <Grid>
                          <Row className='hidden-print' style={{marginBottom:20}}>
                            <Col xs={4} style={{paddingTop: 0}}>
                              <a href={'#/app/article/create'}>
                                <BLabel bsStyle='info'>添加新文章</BLabel>
                              </a>
                            </Col>
                            <Col xs={1} >
                            </Col>
                            <Col xs={2} >
                              <Select
                                  name='category'
                                  ref='category'
                                  onChange={_this.handleSelectChange}>
                                <option value={-1}>全部分类</option>
                                {
                                    this.category.map(function(item, i){
                                      return (
                                          <option key={i} value={item.id}>{item.name}</option>
                                      )
                                    })
                                }
                              </Select>
                            </Col>
                            <Col xs={3} >
                              <Input
                                  value={this.category.name}
                                  name='name'
                                  type='text'
                                  placeholder='文章标题'
                                  onChange={this.handleChange}
                                  ref='search'/>
                            </Col>
                            <Col xs={2} >
                              <Button bsStyle='blue' onClick={this.handleSearch}>
                                搜索
                              </Button>
                            </Col>
                          </Row>
                        </Grid>
                        <hr style={{marginBottom: 20,marginTop:0}}/>
                        <Grid>
                          <Row>
                            <Col xs={12} style={{padding:0}}>
                              <Col xs={4}>文章标题</Col>
                              <Col xs={2}>文章分类</Col>
                              <Col xs={1}>是否显示</Col>
                              <Col xs={1}>排序</Col>
                              <Col xs={2}>更新日期</Col>
                              <Col xs={2}>操作</Col>
                            </Col>
                          </Row>
                          <div id="article-list">
                            {
                              this.list.map(function(item, i){
                                return (
                                    <Article
                                        key={i}
                                        data={item}
                                        sortAction={this.sortAction}
                                    ></Article>
                                )
                              }.bind(this))
                            }
                          </div>
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
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
        <Container id='container' className={classes}>
          <Sidebar />
          <Header />
          <Body flux = {flux}>
            <Footer />
          </Body>
        </Container>
    );
  }
});

module.exports = BootstrapTables;
