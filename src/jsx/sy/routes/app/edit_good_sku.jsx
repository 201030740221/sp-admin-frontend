/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Progress = require('../../widgets/addGoodModule/progress.jsx');
var SkuBox = require('../../widgets/addGoodModule/attr.jsx');

var goodsTagsStore = require('../../modules/stores/goods/goodsTagsStore.jsx');
var couponStore = require('../../modules/stores/promotion/coupon/listStore.jsx');
var sku_event = require('../../widgets/addGoodModule/sku_event.jsx');

var liteFlux = require('lite-flux');
var Api = require('../../widgets/api/api.jsx');

var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsTag','couponStore'),Sp.eventMixin],
    events: sku_event,
    getInitialState: function () {
        return {
            progress: {
                step:2
            },
            goodData: {
                id:null,
                skuAttrListSelected: [], // 已选择
                skuAttrList: [], // 属性列表
                addedSkuAttr:[], // 编辑时直接加属性值
                skuList:{
                    skuList: [],
                    primarySkuID: 0
                } // sku列表
            },
            activeSku: 0,
            activeSkuName:'',
            activeSkuData: {
                baseSku:[],
                specification:[]
            },
            activeSkuSpecification:[],
            couponData: {}
        }
    },
    getDefaultProps: function () {
        return {
            data:[]
        }
    },
    searchSource: function(){
        var data = {};
        var _this = this;
        liteFlux.action("goodsTag").getGoodsTagList(data);
        liteFlux.action("couponStore").getCouponList(data,function(callback_data){
            _this.setState({
                couponData: callback_data
            })
        });
    },
    loadSkuData: function(){
        var goodData = this.state.goodData;
        goodData.id = this.props.queryId;
        this.setState(goodData);
        // 加载商品
        this.trigger("Load");
        this.searchSource();
    },
    componentWillReceiveProps: function(){
        this.loadSkuData();
    },
    componentDidMount: function(){
        this.loadSkuData();
    },
    render: function () {
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
                                                    <Progress step={this.state.progress.step} trigger={this.trigger} goodId={this.state.goodData.id} sku_sn={this.props.queryId}></Progress>
                                                    <Form horizontal>
                                                        <div style={{marginTop: 15}} className="good-form">
                                                        <SkuBox goodsTag={this.state.goodsTag} couponData ={this.state.couponData} trigger={this.trigger} activeSkuName={this.state.activeSkuName} activeSku={this.state.activeSku} data={this.state.goodData} activeSkuData={this.state.activeSkuData} activeSkuSpecification={this.state.activeSkuSpecification}></SkuBox>
                                                        </div>
                                                    </Form>
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
var Forms = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body queryId={this.props.id}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = Forms;
