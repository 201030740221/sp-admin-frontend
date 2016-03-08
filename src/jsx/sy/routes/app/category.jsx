/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  load: function(){
    var promise,
      self = this;

    promise = $.ajax({
      url:"/json/goodtype.json",
      type:"GET",
      dataType: "json",
      data:{
        page: self.state.page
      }
    });

    promise.done(function(data){

      var default_data = self.state.data;
      if( data && data.status ){
        self.setState({
          data: default_data.concat(data.data)
        });
        //$('#goodlist').dataTable();
      }
    });

    promise.fail(function(data){
      console.log(data);
    });

  },
  getInitialState: function(){
    return {
      data:[],
      page:1,
      dataTable: null
    }
  },
  handleBackClick: function(){
    window.history.back(-1);
  },
  addGoodClick: function(){
    RRouter.routing.navigate('/app/add_category');
  },
  checkedAll: function(){
    var defaultChecked = this.refs.check.getChecked();
    this.refs.check.setChecked(!defaultChecked)
    console.log(this.refs.check);
  },
  componentDidMount: function() {
    var self = this;

    self.load();

  },
  render: function() {
    var self = this;
    // 商品列表
    //<span className="sy_plus_icon icon-feather-circle-minus"></span>
    var goodNodes = self.state.data.map(function(type,i){
      return (
        <tr>
          <td >
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="sy_plus_icon icon-feather-circle-plus"></span>
            {type.title}
          </td>
          <td className='text-center'>{type.number}</td>
          <td className='text-center'>{type.isshow}</td>
          <td className='text-center'>{type.order}</td>
          <td className='text-center'>
            <a class="sy_action_icon rubix-icon icon-fontello-cog" href="#">
            </a>
          </td>
        </tr>
      );
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
                      <Row className='hidden-print' style={{marginBottom:20}}>
                        <Col xs={8}>
                        </Col>
                        <Col xs={4} style={{paddingTop: 0}}>
                          <ButtonToolbar className='inbox-toolbar fr'>
                            <ButtonGroup>
                              <Button bsStyle='blue' onClick={this.addGoodClick}>
                                <Icon glyph='icon-stroke-gap-icons-Folder'/>添加分类
                              </Button>
                            </ButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Row>
                    </Grid>
                    <hr style={{marginBottom: 20,marginTop:0}}/>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='goodlist' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th width='*'>分类名称</th>
                                <th style={{width:100}} className='text-center'>商品数量</th>
                                <th style={{width:100}} className='text-center'>是否显示</th>
                                <th style={{width:80}} className='text-center'>排序</th>
                                <th style={{width:180}} className='text-center'>操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              {goodNodes}
                            </tbody>
                          </Table>

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
