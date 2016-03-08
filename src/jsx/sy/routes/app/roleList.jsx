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
var roleStore = require("../../modules/stores/roleStore.jsx");
var roleAction = require('../../modules/actions/roleAction.jsx');


var stores = {
  roleStore: new roleStore()
};

var flux = new Fluxxor.Flux( stores, roleAction);

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
  handleDelete: function () {
    var _this = this;
    var role = this.list;
      console.log(role);
    var postData = {
      id: role.id
    };
    ModalManager.create(this.showModal('您确定要删除:['+role.name+']?','操作提示', function(){
      flux.actions.remove(postData);
    }));
  }
};

var List = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("roleStore"), HandleMixins, ModalMixins],
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      roleStore: flux.store("roleStore").getState()
    };
  },

  render: function(){
    var item = this.list = this.props.data;
    return (
        <Row>
          <Col xs={12} style={{borderTop:'1px solid #ddd',padding:'10px 0'}} >
            <Col xs={3}>{item.name}</Col>
            <Col xs={7}>{item.remark}</Col>
            <Col xs={2}>
                <a href={'#/app/roleDetail/'+item.id}>
                    <BLabel bsStyle='info'>编辑</BLabel>
                </a>{' '}
                <BLabel bsStyle='danger' className='pointer' onClick={this.handleDelete}>删除</BLabel>
            </Col>
          </Col>
        </Row>
    )
  }
});


var Body = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("roleStore"), HandleMixins, ModalMixins],
  getInitialState: function() {
    flux.actions.getList();
  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      roleStore: flux.store("roleStore").getState()
    };
  },
  render: function() {
    var list = this.list  = this.state.roleStore.list || [];
    console.log(list)
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
                                  <a href={'#/app/roleDetail/create'}>
                                    <BLabel bsStyle='info'>添加新角色</BLabel>
                                  </a>
                                </ButtonGroup>
                              </ButtonToolbar>
                            </Col>
                          </Row>
                        </Grid>
                        <hr style={{marginBottom: 20,marginTop:0}}/>
                        <Grid>
                          <Row>
                            <Col xs={12} style={{padding:0}}>
                              <Col xs={3}>角色</Col>
                              <Col xs={7}>描述</Col>
                              <Col xs={2}>操作</Col>
                            </Col>
                          </Row>
                          {
                              list.map(function(item, i){
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
