/** @jsx React.DOM */
/*会员管理*/

var Fluxxor = require("fluxxor");

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//Api
var Api = require('../../modules/api/api.jsx');
//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
//
var userStore = require("../../modules/stores/userStore.jsx");
var userAction = require('../../modules/actions/userAction.jsx');


var stores = {
  userStore: new userStore()
};

var flux = new Fluxxor.Flux( stores, userAction);

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
    var _this = this;
    var el = e.target;
    var name = el.name;
    var value = el.value;
    var postData ={};
    //console.log(el.name, postData);
    switch (name){
      case 'userPassword':
        postData['type'] = 'password';
        postData['password'] = value;
        flux.actions.updateUser(postData);
        break;
      case 'userPassword2':
        postData['type'] = 'password2';
        postData['password2'] = value;
        flux.actions.updateUser(postData);
        console.log(name, value);
        break;
      case 'userName':
        postData['type'] = 'name';
        postData['name'] = value;
        flux.actions.updateUser(postData);
        break;
      case 'userEmail':
        postData['type'] = 'email';
        postData['email'] = value;
        flux.actions.updateUser(postData);
        break;
    }
    if(name == 'userPassword' || name == 'userPassword2'){
      //console.log('get ',name, value);
    }
  },
  handleSelectChange: function(e){
    var el = e.target;
    var value = el.value;
    switch (el.name){
      case 'roleSearch':
        console.log(el.value);
        var role_id = el.value;
        var keyword = this.refs.search.getValue() || "";
        flux.actions.onSearch({
          role_id: role_id,
          keyword: keyword
        });
        break;
      case 'userRole':
        console.log('role_id',el.value);
        flux.actions.updateUser({
          type: 'role_id',
          role_id: value
        });
        break;
      default :
        break;
    }
  },
  handleSearch: function(type){
    var source = this.state.userStore.userList;
    var page = source.current_page;
    var keyword = this.refs.search.getValue() || "";
    var role_id = this.refs.role.getInputDOMNode().value || -1;
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
      keyword: keyword,
      role_id: role_id
    });
  },
  handleGetDetail: function(){
    var item = this.user;
    var _this = this;
    //var oldPassword = item.password;
    item.password = '';

    flux.actions.updateUser({
      type: 'update',
      user: item
    });
    var node = <User flux={flux}></User>;
    ModalManager.create(this.showModal(node,'用户信息', function(){
      var OK = true;
      var error = {};
      var user = _this.state.userStore.user;
      //name
      if(!user.name || !user.name.length){
        console.log('user name 用户名不能为空');
        error.name = '用户名不能为空';
        OK = false;
    //   }else if(/^[a-zA-Z][\w+]{4,16}$/.test(user.name)){
      }else if(user.name.length){
        console.log('user name OK');
      }else{
        console.log('user name 用户名格式不正确');
        error.name = '用户名格式不正确';
        OK = false;
      }
      //email
      if(!user.email.length){
        console.log('user email email不能为空');
        error.email = 'email不能为空';
        OK = false;
      }else if(/^(?:\w+\-?\.?\+?)*\w+@(?:\w+\.)+\w+$/.test(user.email)){
        console.log('user email OK')
      }else{
        console.log('user email email格式不正确');
        error.email = 'email格式不正确';
        OK = false;
      }
      //password
      console.log(user.password.length)
      if(!user.password.length){
        //console.log('user password 密码不能为空');
        //error.password = '密码不能为空';
        //OK = false;

      }else if(user.password == user.password2){
        console.log('user password2 OK');
        if(/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(user.password)){
          console.log('user password OK')
        }else{
          console.log('user password 密码格式不正确');
          error.password = '密码格式不正确';
          OK = false;
        }
      }else{
        console.log('user password 2次密码输入不一致');
        error.password = '2次密码输入不一致';
        OK = false;
      }
      //role
      if(user.role.id && +user.role.id > 0){
        console.log('user role OK');
      }else{
        console.log('user role 请选择角色');
        error.role = '请选择角色';
        OK = false;
      }

      //
      if(OK){
        var postData = {
          id: user.id,
          role_id: user.role.id,
          name: user.name,
          email: user.email
        };
        if(user.password.length){
          //postData.password = oldPassword;
          postData.new_password = user.password;
        }
        flux.actions.updateUser({
          type: 'save',
          user: postData
        });
      }else{
        user.error = error;
        user.role_id = user.role.id
        flux.actions.updateUser({
          type: 'update',
          user: user
        });
        return {
          willContinue: false
        }
      }
    }));
  },
  handleAddUser: function(){
    var _this = this;
    var user = this.user = {
      name:'',
      email:'',
      password:'',
      password2:'',
      role: {
        id: -1
      }
    };
    flux.actions.updateUser({
      type: 'update',
      user: user
    });
    var node = <User flux={flux}></User>;
    ModalManager.create(this.showModal(node,'添加用户', function(){
      var OK = true;
      var error = {};
      var user = _this.state.userStore.user;
      //name
      if(!user.name.length){
        console.log('user name 用户名不能为空');
        error.name = '用户名不能为空';
        OK = false;
      }else{
        console.log('user name OK');
      }
      //if(!user.name.length){
      //  console.log('user name 用户名不能为空');
      //  error.name = '用户名不能为空';
      //  OK = false;
      //}else if(/^[a-zA-Z][\w+]{1,16}$/.test(user.name)){
      //  console.log('user name OK');
      //}else{
      //  console.log('user name 用户名格式不正确');
      //  error.name = '用户名格式不正确';
      //  OK = false;
      //}
      //email
      if(!user.email.length){
        console.log('user email email不能为空');
        error.email = 'email不能为空';
        OK = false;
      }else if(/^(?:\w+\-?\.?\+?)*\w+@(?:\w+\.)+\w+$/.test(user.email)){
        console.log('user email OK')
      }else{
        console.log('user email email格式不正确');
        error.email = 'email格式不正确';
        OK = false;
      }
      //password
      if(!user.password.length){
        console.log('user password 密码不能为空');
        error.password = '密码不能为空';
        OK = false;

      }else if(user.password == user.password2){
        console.log('user password2 OK');
        if(/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(user.password)){
          console.log('user password OK')
        }else{
          console.log('user password 密码格式不正确');
          error.password = '密码格式不正确';
          OK = false;
        }
      }else{
        console.log('user password 2次密码输入不一致');
        error.password = '2次密码输入不一致';
        OK = false;
      }
      //role
      if(user.role.id && +user.role.id > 0){
        console.log('user role OK');
      }else{
        console.log('user role 请选择角色');
        error.role = '请选择角色';
        OK = false;
      }

      user.role_id = user.role.id;
      if(OK){
        flux.actions.updateUser({
          type: 'create'
        });
      }else{
        user.error = error;
        flux.actions.updateUser({
          type: 'update',
          user: user
        });
        return {
          willContinue: false
        }
      }
    }));
  },
  handleDelete: function () {
    var _this = this;
    var user = this.user;
    var postData = {
      id: user.id
    };
    ModalManager.create(this.showModal('您确定要删除:['+user.name+']?','操作提示', function(){
      flux.actions.removeUser(postData);
    }));
  }
};

var User = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("userStore"), HandleMixins, ModalMixins],
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      userStore: flux.store("userStore").getState()
    };
  },
  show: function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
  },



  render: function(){
    var _this = this;
    var item = this.user = this.state.userStore.user;
    var roleList = this.roleList =  this.state.userStore.roleList ? this.state.userStore.roleList : [];
    //var item = {};
    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <Form horizontal>
                <FormGroup>
                  <Label control sm={3} htmlFor='userName'>用户名</Label>
                  <Col sm={9}>
                    <Input
                        className='inline'
                        type='text'
                        id='userName'
                        name='userName'
                        value={item.name}
                        placeholder='用户名'
                        onChange={this.handleChange}/>
                    <BLabel bsStyle='danger'>{item.error ? item.error.name : ''}</BLabel>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label control sm={3} htmlFor='userEmail'>邮箱</Label>
                  <Col sm={9}>
                    <Input
                        className='inline'
                        type='text'
                        id='userEmail'
                        name='userEmail'
                        value={item.email}
                        placeholder='邮箱'
                        onChange={this.handleChange}/>
                    <BLabel bsStyle='danger'>{item.error ? item.error.email : ''}</BLabel>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label control sm={3} htmlFor='userEmail'>设置密码</Label>
                  <Col sm={9}>
                    <Input
                        className='inline'
                        type='password'
                        id='userPassword'
                        name='userPassword'
                        ref='userPassword'
                        placeholder=''
                        onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label control sm={3} htmlFor='userEmail'>确认密码</Label>
                  <Col sm={9}>
                    <Input
                        className='inline'
                        type='password'
                        id='userPassword2'
                        name='userPassword2'
                        ref='userPassword2'
                        placeholder=''
                        onChange={this.handleChange}/>
                    <BLabel bsStyle='danger'>{item.error ? item.error.password : ''}</BLabel>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label control sm={3} htmlFor='userRole'>角色选择</Label>
                  <Col sm={9}>
                    <Select
                        className='inline'
                        id='userRole'
                        name='userRole'
                        ref='userRole'
                        value={item.role.id}
                        onChange={_this.handleSelectChange}>
                      <option value={-1}>请选择角色</option>
                                {
                                    this.roleList.map(function(item, i){
                                      return (
                                          <option key={i} value={item.id}>{item.name}</option>
                                      )
                                    })
                                    }
                    </Select>
                    <BLabel bsStyle='danger'>{item.error ? item.error.role : ''}</BLabel>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Grid>
    )
  }
});

var List = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("userStore"), HandleMixins, ModalMixins],
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      userStore: flux.store("userStore").getState()
    };
  },

  render: function(){
    var item = this.user = this.props.data;
    if(!item.role){
        item.role = {}
    }
    return (
        <Row>
          <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}} >
            <Col xs={2}>{item.name}</Col>
            <Col xs={2}>{item.email}</Col>
            <Col xs={2}>{item.role.name}</Col>
            <Col xs={4}>{item.last_login}</Col>
            <Col xs={2}>
              <BLabel bsStyle='info' className='pointer' onClick={this.handleGetDetail}>编辑</BLabel>{' '}
              <BLabel bsStyle='danger' className='pointer' onClick={this.handleDelete}>删除</BLabel>
            </Col>
          </Col>
        </Row>
    )
  }
});


var Body = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("userStore"), HandleMixins, ModalMixins],
  getInitialState: function() {
    flux.actions.getUserList();
    flux.actions.getRoleList();
  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      userStore: flux.store("userStore").getState()
    };
  },

  getUserList: function(e){
    e.preventDefault();
    e.stopPropagation();
    flux.actions.getUserList();
  },
  show: function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state);
  },

  render: function() {
    var source = this.state.userStore.userList || null;
    var userList = this.userList = source ? (source.data || []) : [];
    var roleList = this.roleList =  this.state.userStore.roleList ? this.state.userStore.roleList : [];
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
                              <ButtonToolbar className='inbox-toolbar'>
                                <ButtonGroup>
                                  <Button bsStyle='success' onClick={this.handleAddUser}>
                                    <Icon glyph='icon-feather-file-add'/> 添加用户
                                  </Button>
                                </ButtonGroup>
                              </ButtonToolbar>
                            </Col>
                            <Col xs={3} >
                              <Select
                                  name='roleSearch'
                                  ref='role'
                                  onChange={_this.handleSelectChange}>
                                <option value={-1}>请选择角色</option>
                                {
                                    this.roleList.map(function(item, i){
                                      return (
                                          <option key={i} value={item.id}>{item.name}</option>
                                      )
                                    })
                                    }
                              </Select>
                            </Col>
                            <Col xs={3} >
                              <Input
                                  value={this.keyword}
                                  name='name'
                                  type='text'
                                  placeholder='邮箱'
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
                              <Col xs={2}>用户名</Col>
                              <Col xs={2}>邮箱</Col>
                              <Col xs={2}>角色</Col>
                              <Col xs={4}>最后登录时间</Col>
                              <Col xs={2}>操作</Col>
                            </Col>
                          </Row>
                          {
                              this.userList.map(function(item, i){
                                return (
                                    <List
                                        key={i}
                                        data={item}
                                    >
                                    </List>
                                )
                              })
                              }
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
