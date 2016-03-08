/** @jsx React.DOM */

var Fluxxor = require("fluxxor");
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var DashboardStore = require("../../modules/stores/dashboardStore.jsx");
var dashboardAction = require('../../modules/actions/dashboardAction.jsx');


var store = {
    DashboardStore: new DashboardStore()
};

var flux = new Fluxxor.Flux( store, dashboardAction);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("DashboardStore")],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            DashboardStore: flux.store("DashboardStore").getState()
        };
    },
    test: function(e){
        e.preventDefault();
        e.stopPropagation();
        flux.actions.addTodo({text: "text"+new Date()});
    },
    show: function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log(this.state);
    },
    render: function () {
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody className='text-center'>
                                        <h1>欢迎使用斯品后台</h1>
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
    render: function () {
        var classes = React.addons.classSet({
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

module.exports = Page;
