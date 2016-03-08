/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  load: function(){
    var promise,
      self = this;

    promise = $.ajax({
      url:"/json/brand.json",
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
  addBrandClick: function(){
    RRouter.routing.navigate('/app/add_brand');
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
    var goodNodes = self.state.data.map(function(brand,i){
      return (
        <tr>
          <td >{brand.title}</td>
          <td className='text-center'>{brand.url}</td>
          <td className='text-center'>{brand.description}</td>
          <td className='text-center'>{brand.order}</td>
          <td className='text-center'>{brand.isshow}</td>
          <td className='text-center'>
            <a class="sy_action_icon rubix-icon icon-fontello-cog" href="#">
            </a>
          </td>
        </tr>
      );
    });


    // 页码
    var pager = (
      <Pagination>
        <Page begin disabled />
        <Page active href='#'>1</Page>
        <Page href='#'>2</Page>
        <Page href='#'>3</Page>
        <Page href='#'>4</Page>
        <Page href='#'>5</Page>
        <Page end />
      </Pagination>
    );

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
                          <Input className="wa fl mr10" type='text' placeholder='请输入关键字' />
                          <Button type='submit' className="fl">搜索</Button>
                        </Col>
                        <Col xs={4} style={{paddingTop: 0}}>
                          <ButtonToolbar className='inbox-toolbar fr'>
                            <ButtonGroup>
                              <Button bsStyle='blue' onClick={this.addBrandClick}>
                                <Icon glyph='icon-ikons-shopping-cart-add'/>添加品牌
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
                                <th style={{width:150}} className='text-center'>品牌名称</th>
                                <th style={{width:150}}>品牌网址</th>
                                <th width='*' className='text-center'>品牌描述</th>
                                <th style={{width:80}} className='text-center'>排序</th>
                                <th style={{width:80}} className='text-center'>是否显示</th>
                                <th style={{width:180}} className='text-center'>操作</th>
                              </tr>
                            </thead>
                            <tbody>
                              {goodNodes}
                            </tbody>
                          </Table>
                          <Row>
                            <Col xs={6}>
                            </Col>
                            <Col xs={6}>
                              <div className="pagers" style={{float:"right"}}>
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
