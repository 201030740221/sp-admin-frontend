/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var Ueditor = require('../../widgets/ueditor/ueditor.jsx');
var CategorySelector = require('../../widgets/categorySelector/categorySelector.jsx');
var SkuImgUpload = require('../../widgets/imgUpload/skuImgUpload.jsx');


var Body = React.createClass({
  getInitialState: function(){
    return {
      text: '1'
    }
  },
  handleClick: function(){
    var text = this.state.text;
    text = text + 1;
    this.setState({
      text: text
    });
  },
  render: function() {
    var opts = {
      fileNumLimit: 5,
      formData:{
        entity: 'goods_sku', //sku id
        entity_id: '2',
        type_id: 1
      }
    };
    var ueditorOpts = {
      entity: 'goods_sku',
      entity_id: '2', // SKU ID
      type_id: 3
    };
    return (
      <Container id='body'>
        <SkuImgUpload opts={opts}>图片上传</SkuImgUpload>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                    <Button onClick={this.handleClick}>改变内容</Button>
                  <Ueditor opts={ueditorOpts}>{this.state.text}</Ueditor>
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
var Forms = React.createClass({
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

module.exports = Forms;
