/** @jsx React.DOM */

/**
 * 订单详情管理
 * */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');
var actions = flux.actions.orderDetailActions;


/**
 * 标题
 */
var TitleBar = require('../../widgets/orderDetail/titleBar.jsx');


/**
 * 状态修改
 */
var StatusBar = require('../../widgets/orderDetail/statusBar.jsx');

/**
 * 流程条
 */
var Progress = require('../../widgets/orderDetail/progress.jsx');


/**
 * 订单记录
 */
var OrderTxtBox = require('../../widgets/orderDetail/orderTxtBox.jsx');


/**
 * 用户信息
 */
var UserInfo = require('../../widgets/orderDetail/userInfo.jsx');

/**
 * 送装时间
 */
var DeliveryInfo = require('../../widgets/orderDetail/deliveryInfo.jsx');


/**
 * 订单信息
 */
var OrderInfo = React.createClass({
    render: function () {
        var props = this.props;
        return (
            <div className="orderInfo">
                <UserInfo
                    flux={props.flux}
                    delivery={props['delivery']}
                    member={props['member']}
                />
                <DeliveryInfo
                    orderId={props.orderId}
                    isPureTextile={!props.not_noly_textile}
                    delivery={props['delivery']}
                    predict_delivery={props['predict_delivery']}
                />
            </div>
        )
    }
});


/**
 * 商品清单
 */
var GoodsList = require('../../widgets/orderDetail/goodsList.jsx');

/**
 * 打印出货单
 */
var PrintOrderList = require('../../widgets/orderDetail/printOrderList.jsx');

/**
 * 主体
 */
var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("orderDetailStore")],
    getStateFromFlux: function () {
        var store = flux.store("orderDetailStore").getState();

        // 初始化
        if ( !store.init || this.props.id !== store.id ) {
            actions.onUpdateOrderId(this.props.id)
            actions.onGetOrderDetail();
        }

        return {
            orderListStore: store
        };
    },
    render: function () {
        var self = this;
        var detail = self.state.orderListStore.detail;
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className="search-box border-bottom-gray">
                                                        <Grid>
                                                            <Row className='hidden-print'>
                                                                <Col xs={5}>
                                                                    <TitleBar></TitleBar>
                                                                </Col>
                                                                <Col xs={7}>
                                                                    <StatusBar
                                                                        opreation={detail['opreation']}
                                                                    />
                                                                    <h5 className="fr mr30">
                                                                        订单号：{detail['order_no']}
                                                                    </h5>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </div>
                                                    <div className="order-list-box">
                                                        {/* 状态条 */}
                                                        <Progress
                                                            createdAt={detail['created_at']}
                                                            statusLog = {detail['status_log']}
                                                            statusId={detail['status_id']}
                                                        />
                                                        {/* 订单跟踪等 */}
                                                        <OrderTxtBox
                                                            orderId={detail['id']}
                                                            express={detail['express']}
                                                            statusId={detail['status_id']}
                                                            processLog={detail['process_log']}
                                                            statusLog={detail['status_log']}
                                                            paymentHistoryLog={detail['payment_history_log']}
                                                            payment={detail['payment']}
                                                            invoice={detail['invoice']}
                                                            member_id={detail['member_id']}
                                                        />
                                                        {/* 用户信息 */}
                                                        <OrderInfo
                                                            orderId={detail['id']}
                                                            delivery={detail['delivery']}
                                                            predict_delivery={detail['predict_delivery']}
                                                            member={detail['member']}
                                                            not_noly_textile={detail && detail.not_only_textile}
                                                        />

                                                        {/* 商品列表 */}
                                                        <GoodsList
                                                            goods={detail['goods']}
                                                            total={detail['total']}
                                                            price={detail['total_price']}
                                                            price_abatement={detail['price_abatement']}
                                                            coupon_abatement={detail['coupon_abatement']}
                                                            point_abatement={detail['point_abatement']}
                                                            total_point={detail['total_point']}
                                                            delivery={detail['total_delivery']}
                                                            installation={detail['total_installation']}
                                                            coupon={detail['coupon']}
                                                        />
                                                    </div>
                                                    <div className="foot-box">
                                                        <PrintOrderList
                                                            detail={detail}
                                                            id={this.props.id} status_id={detail.status_id}
                                                        />
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


var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id} flux = {flux}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
