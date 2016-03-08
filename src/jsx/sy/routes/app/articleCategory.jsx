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
var articleCategoryStore = require("../../modules/stores/articleCategoryStore.jsx");
var articleCategoryAction = require('../../modules/actions/articleCategoryAction.jsx');


var stores = {
  articleCategoryStore: new articleCategoryStore()
};

var flux = new Fluxxor.Flux( stores, articleCategoryAction);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


//
var host = Sp.config.host;
var classSet = React.addons.classSet;

var CategoryMixins = {
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
  handleFocus:function(e){
    var el = e.target;
    var category = this.category;
    this.cache = this.cache || {};
    this.cache[el.name] = el.value;
  },
  handleBlur: function(e){
    var el = e.target;
    //if( el.value && (el.value !== this.category[el.name])){
    if( el.value && el.value != this.cache[el.name]){
      var postData = {
        id: this.category.id
      };
      postData[el.name] = el.value;
      if(el.name !== 'name'){
        postData.name = this.category.name
      }
      console.log('postData',postData);
      //categoryAction.update(postData);
      flux.actions.updateCategory(postData);
    }
    if(el.name === 'name' && !el.value){
    Sp.message('分类名称不能为空', 'error');
      $(el).focus();
    }
  },
  handleCheckboxChange: function(e){
    var el = e.target;
    var category = this.category;
    var postData = {
      id: category.id//,
      //name: category.name
    };
    switch (el.name){
      case 'status':
        postData[el.name] = el.checked ? 1:0;
        category[el.name] = el.checked ? 1:0;
        console.log('postData',postData);
        /*categoryAction.update(postData);
        this.shouldUpdate = true;
        this.setState({
          category: category
        });*/
        flux.actions.updateStatusCategory(postData);
        this.shouldUpdate = true;
        this.setState({
          category: category
        });
        break;
      default :
        break;
    }
  },
  updateParent: function(children){
    var category = this.category;
    if(category.children) category.children = children;
    if(category.data) category.data = children;
    this.shouldUpdate = true;
    this.setState({
      category: category
    });
  },
  deleteSelf: function (id) {
    var _this = this;
    var category = this.category;
    var children = category.children || category || [],
        parent = this.props.parent,
        siblings = parent.children || parent || [],
        index;
    siblings.map(function(item, i){
      if(item.id === category.id){
        index = i;
      }
    });

    if(!children.length){
      //确认操作
      ModalManager.create(this.showModal('您确定要删除分类:['+_this.category.name+']?','操作提示', function(){
        /*categoryAction
            .del({id: _this.category.id})
            .done(function (data) {
              //_this.props.reloadAllCategory();
            });*/
        flux.actions.removeCategory({id: _this.category.id});
        siblings.splice(index,1);
        _this.props.updateParent(siblings);
      }));
      //秒删
      /*categoryAction
       .del({id: _this.category.id})
       .done(function (data) {
       //_this.props.reloadAllCategory();
       });
       siblings.splice(index,1);
       this.props.updateParent(siblings);*/
    }else{
      Sp.message('请先删除子分类', 'error');
    }
  },
  addSubCategory:function(){
    var _this = this;
    var category = this.category;
    var children = category.children || category || [];
    var postData = {
      name: '未命名',
      tag: 0,
      sort_id: children.length
    };
    if(this.category && this.category.id){
      postData.parent_id = this.category.id;
    }else{
      postData.parent_id = 1;
    }
    /*var careate = categoryAction.create(postData);
    careate.done(function(data){
      if(data.code == 0){
        //重新取数据
        //_this.props.reloadAllCategory();
        //前端插入
        _this.shouldUpdate = true;
        children.push(data.data);
        _this.setState({
          category: category
        });
      }
    });*/
    flux.actions.addCategory(postData);
  }
};


var SubIcon = React.createClass({
  render: function(){
    var style = {
      left: 0,
      top: '14px',
      width: '15px',
      content: ' ',
      position: 'absolute',
      display: 'inline-block',
      border: '1px solid rgba(59, 70, 72, 0.5)'
    };
    return (
        <i style={style}></i>
    )
  }
});




var Category1 =  React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  render: function(){
    var _this = this;
    this.category = this.props.data;
    if(this.category.children && this.category.children.length){
      this.subCategoryList = this.category.children.map(function(item, i){
        return (
            <Category2
                key={i}
                categoryId={item.id}
                data={item}
                parent={_this.category}
                updateParent={_this.updateParent}></Category2>
        )
      });
    }else{
      this.subCategoryList = [];
    }
    return (
        <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}}>
          <Col xs={8}>
            <Input className="fl mr20" style={{width:200}} value={this.category.name} name='name' type='text' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
              <span style={{cursor:"pointer"}} className="label label-default bg-darkgreen45 fg-white" onClick={this.addSubCategory}>+</span>
          </Col>
          <Col xs={2}>
            <Input type='checkbox' name='status' ref='status' checked={+this.category.status} onChange={this.handleCheckboxChange}/>
          </Col>
          <Col xs={2}>
            <BLabel bsStyle='danger' className='pointer' onClick={this.deleteSelf}>删除</BLabel>
          </Col>
          <Row>
            {this.subCategoryList}
            {this.props.children}
          </Row>
        </Col>
    )
  }
});

var Category2 =  React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  render: function(){
    var _this = this;
    this.category = this.props.data;

    return (
        <Col data-categoryid={this.props.data.id} xs={12} style={{borderTop:'1px solid #fefefe',padding:'2px 25px'}}>
          <Col xs={8}>
            <Col xs={12} style={{paddingRight:0}}>
              <Col xs={12} style={{borderLeft:'2px solid rgba(59, 70, 72, 0.5)',paddingRight:0}}>
                <SubIcon></SubIcon>
                <Input value={this.category.name} type='text' name='name' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
              </Col>
            </Col>
          </Col>
          <Col xs={2}>
            <Input type='checkbox' name='status' ref='status' checked={+this.category.status} onChange={this.handleCheckboxChange}/>
          </Col>
          <Col xs={2}>
            <BLabel bsStyle='danger' onClick={this.deleteSelf}>删除</BLabel>{' '}
          </Col>
        </Col>
    )
  }
});

var Body = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("articleCategoryStore"), CategoryMixins, ModalMixins],
  getInitialState: function() {

    flux.actions.getCategory();

  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      articleCategoryStore: flux.store("articleCategoryStore").getState()
    };
  },

  getCategory: function(e){
    e.preventDefault();
    e.stopPropagation();
    flux.actions.getCategory();
  },
  show: function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
  },

  render: function() {
    this.category = this.state.articleCategoryStore.category;
    var _this = this;
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
                            <ButtonToolbar className='inbox-toolbar'>
                              <ButtonGroup>
                                <Button bsStyle='success' onClick={this.addSubCategory}>
                                  <Icon glyph='icon-stroke-gap-icons-Folder'/>添加一级分类
                                </Button>
                              </ButtonGroup>
                            </ButtonToolbar>
                          </Col>
                        </Row>
                      </Grid>
                      <hr style={{marginBottom: 20,marginTop:0}}/>
                      <Grid>
                        <Row>
                          <Col xs={12} style={{padding:0}}>
                            <Col xs={8}>分类名称</Col>
                            <Col xs={2}>是否显示在导航栏</Col>
                            <Col xs={2}>操作</Col>
                          </Col>
                        </Row>
                        {
                          this.category.map(function(item, i){
                            return (
                                <Row key={i}>
                                  <Category1
                                      categoryId={item.id}
                                      data={item}
                                      parent={_this.category}
                                      updateParent={_this.updateParent}></Category1>
                                </Row>
                            )
                          })
                        }

                      </Grid>
                      <hr/>
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
