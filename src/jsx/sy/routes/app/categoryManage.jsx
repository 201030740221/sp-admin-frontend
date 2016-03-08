/** @jsx React.DOM */
/*分类管理*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var host = Sp.config.host;
var classSet = React.addons.classSet;
//cache
var cache = {
  res:{},
  promise:{}
};
//ajax
var categoryAction = {
  baseUrl: Sp.config.host + '/api/',
  //baseUrl: 'http://admin.sipin.dev/api/',
  //baseUrl:'http://admin.sipin.kent:8000/api/',
  path:{
    create: 'category/create',
    update: 'category/update',
    delete: 'category/delete',
    getList: 'category/getList',
    getSpecification: 'attribute/group?type=1',
    getAttribute: 'attribute/group?type=0',
    //sort
    /*
     * base_id int
     * handle_id int
     * type [up/down]
     * */
    sortBySibling: 'category/updateSortBySibling',
    /*
     * handle_id int
     * type [up/down]
     * */
    sortByParent: 'category/updateSortByParent'
  },
  post: function (url, data) {
    return $.ajax({
      url: url,
      type:'POST',
      data: data,
      dataType: 'json'
    }).done(function (data) {
      Sp.message(data.msg);
      console.log(data);
    }).fail(function (data) {
      console.log('[post] fail,', data);
    });
  },
  create: function (data) {
    return this.post(this.baseUrl + this.path.create, data)
  },
  update: function (data) {
    return this.post(this.baseUrl + this.path.update, data)
  },
  del: function (data) {
    return this.post(this.baseUrl + this.path.delete, data)
  },
  sortBySibling: function (data) {
    return this.post(this.baseUrl + this.path.sortBySibling, data)
  },
  sortByParent: function (data) {
    return this.post(this.baseUrl + this.path.sortByParent, data)
  },
  get: function (id) {
    return $.ajax({
      url:id ? this.baseUrl + this.path.getList + id : this.baseUrl + this.path.getList,
      type:'GET',
      dataType: 'json'
    });
  },
  getAttribute: function () {
    return $.ajax({
      url: this.baseUrl + this.path.getAttribute,
      type:'GET',
      dataType: 'json'
    });
  },
  getSpecification: function () {
    return $.ajax({
      url: this.baseUrl + this.path.getSpecification ,
      type:'GET',
      dataType: 'json'
    });
  }
};

var SeoInfo = React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  getInitialState: function () {
    return {
        category: this.props.category
    }
  },
  handleChange: function(e) {
    var _this = this;
    var el = e.target;
    var category = this.state.category;
    category[el.name] = e.target.value;
    this.setState({
      category: category
    });
  },
  render: function () {
    var category = this.state.category;
    return (
        <Form horizontal>
          <FormGroup>
            <Label control sm={3}>标题:</Label>
            <Col sm={9}>
              <Input
                  className='inline'
                  type='text'
                  name='title'
                  style={{width:'50%'}}
                  value={category.title}
                  onChange={this.handleChange}
                  />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label control sm={3}>关键字:</Label>
            <Col sm={9}>
              <Input
                  className='inline'
                  type='text'
                  name='keywords'
                  style={{width:'50%'}}
                  value={category.keywords}
                  onChange={this.handleChange}
                  />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label control sm={3}>描述:</Label>
            <Col sm={9}>
              <Textarea
                  className='inline'
                  name='description'
                  style={{width:'50%'}}
                  value={category.description}
                  onChange={this.handleChange}
                  >
                </Textarea>
            </Col>
          </FormGroup>
        </Form>
    )
  }
});

var ModalMixins = {
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
  showSeoInfo: function(category){
    ModalManager.create(this.showModal(<SeoInfo category = {category} />,'SEO信息', function(){
      var postData = {
        id: category.id,
        title: category.title,
        keywords: category.keywords,
        description: category.description
      };

      console.log('postData',postData);
      categoryAction.update(postData);
    }));
  }
};
var CategoryMixins = {
  handleChange: function(e) {
    var _this = this;
    var el = e.target;
    var category = this.category;
    category[el.name] = e.target.value;
    //switch (el.name){
    //  case 'name':
    //    category.name = e.target.value;
    //    break;
    //  //case 'visible':
    //  //  category.visible = e.target.value;
    //  //  break;
    //}
    this.shouldUpdate = true;
    this.setState({
      category: category
    });
    console.log(category);
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

      console.log('postData',postData);
      categoryAction.update(postData);
    }
    if(el.name === 'name' && !el.value){
      alert('分类名称不能为空');
      console.log('分类名称不能为空', el.name);
      $(el).focus();
    }
  },
  handleCheckboxChange: function(e){
    var el = e.target;
    var category = this.category;
    var postData = {
      id: category.id,
      name: category.name
    };
    switch (el.name){
      case 'visible':
        postData[el.name] = el.checked ? 1:0;
        category[el.name] = el.checked ? 1:0;
        console.log('postData',postData);
        categoryAction.update(postData);
        this.shouldUpdate = true;
        this.setState({
          category: category
        });
        break;
      default :
        break;
    }
  },
  handleSelectChange: function(e){
    var el = e.target;
    var category = this.category;
    var postData = {
      id: category.id,
      name: category.name
    };
    switch (el.name){
      case 'specification':
        postData['goods_specification_group_id'] = el.value;
        category['goods_specification_group_id'] = el.value;
        console.log('postData',postData);
        categoryAction.update(postData);
        this.shouldUpdate = true;
        this.setState({
          category: category
        });
        break;
      case 'attribute':
        postData['goods_attribute_group_id'] = el.value;
        category['goods_attribute_group_id'] = el.value;
        console.log('postData',postData);
        categoryAction.update(postData);
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
  handleSort: function(type){
    var _this = this,
        category = this.category,
        parent = this.props.parent,
        siblings = parent.children || parent.data || [],
        length = siblings.length,
        index;
    siblings.map(function(item, i){
      if(item.id === category.id){
        index = i;
      }
    });
    /*
    * 1 top
    * 2 up
    * 3 down
    * 4 bottom
    * */
    switch (type){
      case 1:
        if(index != 0) {
          categoryAction.sortByParent({
            type: 'up',
            handle_id: category.id
          }).done(function () {
            //_this.props.reloadAllCategory();
          });
          //前端移动
          siblings.splice(index, 1);
          siblings.splice(0, 0, category);
          this.props.updateParent(siblings);
        }
        break;
      case 2:
        if(index != 0){
          categoryAction.sortByParent({
            type: 'up',
            handle_id: category.id,
            base_id: siblings[index-1].id
          }).done(function(){
            //_this.props.reloadAllCategory();
          });
          //前端移动
          siblings.splice(index,1);
          siblings.splice(index-1,0,category);
          this.props.updateParent(siblings);
        }
        break;
      case 3:
        if(index < length - 1){
          categoryAction.sortByParent({
            type: 'down',
            handle_id: category.id,
            base_id: siblings[index+1].id
          }).done(function(){
            //_this.props.reloadAllCategory();
          });
          //前端移动
          siblings.splice(index,1);
          siblings.splice(index+1,0,category);
          this.props.updateParent(siblings);
        }
        break;
      case 4:
        if(index < length - 1) {
          categoryAction.sortByParent({
            type: 'down',
            handle_id: category.id
          }).done(function () {
            //_this.props.reloadAllCategory();
          });
          //前端移动
          siblings.splice(index, 1);
          siblings.splice(length - 1, 0, category);
          this.props.updateParent(siblings);
        }
        break;
    }
  },
  deleteSelf: function (id) {
    var _this = this;
    var category = this.category;
    var children = category.children || category.data || [],
        parent = this.props.parent,
        siblings = parent.children || parent.data || [],
        index;
    siblings.map(function(item, i){
      if(item.id === category.id){
        index = i;
      }
    });

    if(!children.length){
      //确认操作
      ModalManager.create(this.showModal('您确定要删除分类:['+_this.category.name+']?','操作提示', function(){
        categoryAction
            .del({id: _this.category.id})
            .done(function (data) {
              //_this.props.reloadAllCategory();
            });
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
      alert('请先删除子分类');
    }
  },
  addSubCategory:function(){
    var _this = this;
    var category = this.category;
    var children = category.children || category.data || [];
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
    var careate = categoryAction.create(postData);
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
    });
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
      border: '2px solid rgba(59, 70, 72, 0.5)'
    };
    return (
        <i style={style}></i>
    )
  }
});

var Category1 = React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  getInitialState: function(){
    return {
      category: this.props.data
    }
  },
  componentDidUpdate: function(){
    //console.log('componentDidUpdate')
    var category = this.category;
    var visible = this.refs.visible;
    visible.setChecked(+category.visible);
  },
  jumpCategory: function(id,e){
      e.preventDefault();
      e.stopPropagation();
      RRouter.routing.navigate('/app/goods/'+id);
  },

  render: function(){
    var _this = this;
    if(this.shouldUpdate){
      this.shouldUpdate = false;
      this.category = this.state.category
    }else{
      this.category = this.props.data
    }
    if(this.category.children && this.category.children.length){
      //根据sort_id排序, 废弃
      /*this.category.children.sort(function(a,b){
        return +a.sort_id > +b.sort_id
      });*/
      this.subCategoryList = this.category.children.map(function(item, i){
        return (
            <Category2 categoryId={item.id} key={i} data={item} reloadAllCategory={_this.props.reloadAllCategory} parent={_this.category} updateParent={_this.updateParent}></Category2>
        )
      });
    }else{
      this.subCategoryList = [];
    }

    return (
        <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}}>
          <Col xs={4}>
            <div>
                <Input value={this.category.name} name='name' type='text' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
                <Input value={this.category.slug} type='text' name='slug' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} className='category_class' placeholder='分类英文名'/>
            </div>
            <Button xs bsStyle='success' onClick={this.addSubCategory}>添加子类</Button>{' | '}
            <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,1)}>置顶</BLabel>{' '}
            <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,4)}>置底</BLabel>{' '}
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,2)}>上移</BLabel>{' '}
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,3)}>下移</BLabel>{' '}
          </Col>
          <Col xs={2}>
          </Col>
          <Col xs={2}>
          </Col>
          <Col xs={1}>
            <Input type='checkbox' name='visible' ref='visible' checked={+this.category.visible} onChange={this.handleCheckboxChange}/>
          </Col>

          <Col xs={2}>
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.jumpCategory.bind(null,this.category.id)}>查看</BLabel>{' '}
            <BLabel bsStyle='danger' style={{cursor:'pointer'}} onClick={this.deleteSelf}>删除</BLabel>{' '}
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.showSeoInfo.bind(null,this.category)}>编辑SEO信息</BLabel>{' '}
          </Col>
          <Row>
            {this.subCategoryList}
          </Row>
          {this.props.children}
        </Col>
    )
  }
});
/*<Col xs={2}>
    <Textarea ref='description' rows='2' name='description' value={this.category.description} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
</Col>
<Col xs={1}>
<Textarea ref='keywords' rows='2' name='keywords' value={this.category.keywords} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
</Col>
<Col xs={1}>
    <Textarea ref='remarks' rows='2' name='remarks' value={this.category.remarks} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
</Col>*/

var Category2 = React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  getInitialState: function(){
    return {
      category: this.props.data
    }
  },
  componentDidUpdate: function(){
    //console.log('componentDidUpdate')
    var category = this.category;
    var visible = this.refs.visible;
    visible.setChecked(+category.visible);
  },
  jumpCategory: function(id,e){
      e.preventDefault();
      e.stopPropagation();
      RRouter.routing.navigate('/app/goods/'+id);
  },

  render: function(){
    var _this = this;
    if(this.shouldUpdate){
      this.shouldUpdate = false;
      this.category = this.state.category
    }else{
      this.category = this.props.data
    }
    if(this.category.children && this.category.children.length) {
      //根据sort_id排序, 废弃
      /*this.category.children.sort(function(a,b){
        return +a.sort_id > +b.sort_id
      });*/
      this.subCategoryList = this.category.children.map(function (item, i) {
        return (
            <Category3 categoryId={item.id} key={i} data={item} reloadAllCategory={_this.props.reloadAllCategory} parent={_this.category} updateParent={_this.updateParent}></Category3>
        )
      });
    }else{
      this.subCategoryList = [];
    }

    var getOptionsNode = function(name){
      var obj = cache.res[name];
      if(obj) var data = obj.data;
      var optionNode = <option>1</option>;
      if(data && data.length){
        optionNode = data.map(function(item, i){
          return (
              <option key={i} value={item.id}>{item.name}</option>
          )
        });
      }
      return (
          <Select value={_this.category['goods_'+name+'_group_id']} name={name} onChange={_this.handleSelectChange}>
              <option>请选择</option>
              {optionNode}
          </Select>
      );
    };
    return (
        <Col data-categoryid={this.props.data.id} xs={12} style={{borderTop:'1px solid #fefefe',padding:'2px 25px'}}>
          <Col xs={4}>
            <Col xs={12} style={{borderLeft:'5px solid rgba(59, 70, 72, 0.5)',paddingRight:0}}>
              <SubIcon></SubIcon>
              <div>
                <Input value={this.category.name} type='text' name='name' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
                <Input value={this.category.slug} type='text' name='slug' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} className='category_class' placeholder='分类英文名'/>
              </div>
              <Button xs bsStyle='success' onClick={this.addSubCategory}>添加子类</Button>{' | '}
              <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,1)}>置顶</BLabel>{' '}
              <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,4)}>置底</BLabel>{' '}
              <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,2)}>上移</BLabel>{' '}
              <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,3)}>下移</BLabel>{' '}
            </Col>
          </Col>
          <Col xs={2}>
            {getOptionsNode('attribute')}
          </Col>
          <Col xs={2}>
            {getOptionsNode('specification')}
          </Col>
          <Col xs={1}>
            <Input type='checkbox' name='visible' ref='visible' defaultChecked={+this.category.visible} onChange={this.handleCheckboxChange}/>
          </Col>

          <Col xs={2}>
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.jumpCategory.bind(null,this.category.id)}>查看</BLabel>{' '}
            <BLabel bsStyle='danger' style={{cursor:'pointer'}} onClick={this.deleteSelf}>删除</BLabel>{' '}
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.showSeoInfo.bind(null,this.category)}>编辑SEO信息</BLabel>{' '}
          </Col>
          <Row>
            {this.subCategoryList}
          </Row>
          {this.props.children}
        </Col>
    )
  }
});
/*<Col xs={2}>
</Col>
<Col xs={1}></Col>
    <Col xs={1}></Col>*/
var Category3 = React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  getInitialState: function(){
    return {
      category: this.props.data
    }
  },
  //componentWillMount: function(){console.log('componentWillMount')},
  //componentDidMount: function(){console.log('componentDidMount')},
  //componentWillReceiveProps: function(){console.log('componentWillReceiveProps')},
  //shouldComponentUpdate: function(){console.log('shouldComponentUpdate')},
  //componentWillUpdate: function(){console.log('componentWillUpdate')},
  componentDidUpdate: function(){
    //console.log('componentDidUpdate')
    var category = this.category;
    var visible = this.refs.visible;
    visible.setChecked(+category.visible);
  },
  //componentWillUnmount: function(){console.log('componentWillUnmount')},
  jumpCategory: function(id,e){
      e.preventDefault();
      e.stopPropagation();
      RRouter.routing.navigate('/app/goods/'+id);
  },

  render: function(){
    var _this = this;
    this.category = this.props.data;

    var getOptionsNode = function(name){
      var obj = cache.res[name];
      if(obj) var data = obj.data;
      var optionNode = <option>1</option>;
      if(data && data.length){
        optionNode = data.map(function(item, i){
          return (
              <option key={i} value={item.id}>{item.name}</option>
          )
        });
      }
      return (
          <Select value={_this.category['goods_'+name+'_group_id']} name={name} onChange={_this.handleSelectChange}>
              <option>请选择</option>
              {optionNode}
          </Select>
      );
    };

    return (
        <Col xs={12} style={{borderTop:'1px solid #fefefe'}}>
          <Col xs={4}>
            <Col xs={12} style={{paddingRight:0}}>
              <Col xs={12} style={{borderLeft:'5px solid rgba(59, 70, 72, 0.5)',paddingRight:0}}>
                <SubIcon></SubIcon>
                <div>
                    <Input value={this.category.name} type='text' name='name' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange}/>
                    <Input value={this.category.slug} type='text'  name='slug' onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} className='category_class' placeholder='分类英文名'/>
                </div>
                <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,1)}>置顶</BLabel>{' '}
                <BLabel bsStyle='primary' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,4)}>置底</BLabel>{' '}
                <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,2)}>上移</BLabel>{' '}
                <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.handleSort.bind(null,3)}>下移</BLabel>{' '}
              </Col>
            </Col>
          </Col>
          <Col xs={2}>
            {getOptionsNode('attribute')}
          </Col>
          <Col xs={2}>
            {getOptionsNode('specification')}
          </Col>
          <Col xs={1}>
            <Input type='checkbox' name='visible' ref='visible' defaultChecked={+this.category.visible} onChange={this.handleCheckboxChange}/>
          </Col>

          <Col xs={2}>
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.jumpCategory.bind(null,this.category.id)}>查看</BLabel>{' '}
            <BLabel bsStyle='danger' style={{cursor:'pointer'}} onClick={this.deleteSelf}>删除</BLabel>{' '}
            <BLabel bsStyle='info' style={{cursor:'pointer'}} onClick={this.showSeoInfo.bind(null,this.category)}>编辑SEO信息</BLabel>{' '}
          </Col>
        </Col>
    )
  }
});
/*<Col xs={2}>
</Col>
<Col xs={1}></Col>
    <Col xs={1}></Col>*/
var CategoryList = React.createClass({
  getInitialState: function(){
    return {}
  },
  render: function(){
    var _this = this;
    var data = this.props.data;
    var nodeList;
    if(data && data.length){
      //根据sort_id排序, 废弃
      /*data.sort(function(a,b){
        return +a.sort_id > +b.sort_id
      });*/
      nodeList = this.props.data.map(function(item, i){
        return (
            <Row key={i}>
              <Category1 categoryId={item.id} data={item} reloadAllCategory={_this.props.reloadAllCategory} parent={_this.props} updateParent={_this.props.updateParent}></Category1>
            </Row>
        )
      });
    }
    return (
        <div>
            {nodeList}
        </div>
    )
  }
});

var CategoryTable = React.createClass({
  mixins: [CategoryMixins, ModalMixins],
  getInitialState: function(){
    return {
      category: this.props.data
    }
  },
  componentDidMount: function() {
  },
  render: function(){
    if(this.shouldUpdate){
      this.shouldUpdate = false;
      this.category = this.state.category
    }else{
      this.category = this.props.data
    }
    return (
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
                <Col xs={4}>分类名称
                    <div style={{float: 'right',width: '135'}}>分类英文名</div>
                </Col>
                <Col xs={2}>SKU属性组</Col>
                <Col xs={2}>规格组</Col>
                <Col xs={1}>是否显示</Col>

                <Col xs={2}>操作</Col>
              </Col>
            </Row>
            <CategoryList data={this.category.data} reloadAllCategory={this.props.reloadAllCategory} updateParent={this.updateParent}></CategoryList>
          </Grid>
        </div>
    )
  }
});
/*<Col xs={2}>描述</Col>
 <Col xs={1}>关键字</Col>
 <Col xs={1}>备注</Col>*/
var Specification = React.createClass({
  getInitialState: function(){
    return {
      value: this.props.value
    }
  },
  handleChange: function(e){
    this.props.onChange1(e);
    console.log('change',this.props, e,this.props.onChange1);
  },
  render: function(){
    if(this.shouldUpdate){
      this.shouldUpdate = false;
      this.value = this.state.value
    }else{
      this.value = this.props.value
    }
    console.log('cache',cache.res);
    var value = this.value;
    var specification = cache.res.specification;
    var data = specification.data;
    var node = '';
    if(data && data.length){
      node = data.map(function(item, i){
        return (
            <option value={item.id}>{item.name}</option>
        )
      });
    }
    return (
        <Select defaultValue={value} name={this.props.name} onChange={this.handleChange}>
          {node}
        </Select>
    )
  }
});


var Body = React.createClass({
  getInitialState: function(){
    return {
      category: {
        name: '',
        data: []
      },
      specification:[],
      attribute: []
    }
  },
  init: function(){
    var _this = this;
    var category, attribute, specification;
    this.getCategory = categoryAction.get().done(function(res){
      console.log(res);
      if(res.code == 0){
        category = res;
        _this.setState({
          category: res
        });
      }
    });
    if(!this.getAttribute){
      cache.promise.getAttribute = this.getAttribute = categoryAction.getAttribute();
    }
    this.getAttribute.done(function(res){
      console.log(res);
      cache.res.attribute = attribute = res.data;
    });
    if(!this.getSpecification){
      cache.promise.getSpecification = this.getSpecification = categoryAction.getSpecification();
    }
    this.getSpecification.done(function(res){
      console.log(res);
      cache.res.specification = specification = res.data
    });

    $.when(this.getCategory,this.getAttribute,this.getSpecification).done(function(){
      _this.setState({
        category: category,
        attribute: attribute,
        specification: specification
      });
    });
  },
  reloadAllCategory: function (refresh) {
    if(refresh){
      this.setState({
        category: {
          data:[]
        }
      });
    }
    this.init();
  },
  handleBackClick: function(){
    window.history.back(-1);
  },
  checkedAll: function(){
  },
  componentDidMount: function() {
    this.init();
  },
  render: function() {
    var self = this;
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <CategoryTable data={this.state.category} reloadAllCategory={this.reloadAllCategory}></CategoryTable>
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
        <Body>
          <Footer />
        </Body>
      </Container>
    );
  }
});

module.exports = BootstrapTables;
