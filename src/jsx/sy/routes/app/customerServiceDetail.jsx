/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;

/**
 * 标题
 */
var titleBar = require('../../widgets/customServiceDetail/titleBar.jsx');
var serviceListTable = require('../../widgets/customServiceDetail/serviceListTable.jsx');
var userInfoTable = require('../../widgets/customServiceDetail/userInfoTable.jsx');
var serviceListAll = require('../../widgets/customServiceDetail/serviceListAll.jsx');
var csProgress = require("../../widgets/customServiceDetail/progress.jsx");
var userTabs = require("../../widgets/customServiceDetail/userTabs.jsx");
var serviceListForm = require('../../widgets/customServiceDetail/serviceListForm.jsx');

var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("csDetailStore")],
    getStateFromFlux: function() {
        var store = Store();

        // 初始化
        if ( !store.init || this.props.id !== store.id ) {
            Actions.onUpdateId(this.props.id)
            Actions.onGetDetail();
        }

        return store;
    },
    render: function() {
        return (
          <Container id='body'>
            <Grid>
              <Row>
                <Col sm={12}>
                  <PanelContainer>
                    <Panel>
                        <PanelBody>
                            <Grid>
                                <Row>
                                    <Col xs={12}>
                                        {/* 标题 */}
                                        <div className="title-box border-bottom-gray">
                                            <Grid>
                                                <Row className='hidden-print'>
                                                    <Col xs={5}>
                                                        <titleBar />
                                                    </Col>
                                                    <Col xs={7}>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </div>
                                        <div className="order-list-box">
                                            {/* 售后信息 */}
                                            <serviceListTable />
                                            {/* 用户信息 */}
                                            <userInfoTable />
                                            {/* 服务单明细 */}
                                            <serviceListAll />
                                            {/* 服务进度 */}
                                            <csProgress />
                                            {/* 信息跟踪 */}
                                            <userTabs />
                                            {/* 服务单信息 */}
                                            <serviceListForm />
                                        </div>
                                        <div className="foot-box">

                                        </div>
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

var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = React.addons.classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body id={this.props.id} flux={flux}>
          <Footer />
        </Body>
      </Container>
    );
  }
});

module.exports = Page;
