/** @jsx React.DOM */

/**
 * @tofishes 入库单列表
 */
var PurchaseList = React.createClass({
    getInitialState: function () {
        return {
            'list': []
        }
    },
    componentDidMount: function () {
        var sm = new Sp.Model()
        ,   url = sm.getUri('/api/order/document')

        ,   _this = this;

        // 当存在orderid时候执行数据获取
        this.props.order_id > 0 && sm.get(url, {
            'order_id': _this.props.order_id
        }, function (rst) {
            if (!_this.isMounted() || rst.code) return;

            _this.setState({
                'list': rst.data.document
            });
        });
    },
    jumpStorePrint: function(e){
        var pid = $(e.target).closest('tr').data('pid');
        RRouter.routing.navigate('/app/printStore/' + pid);
    },
    jumpPurchaseUpdate: function(e){
        var pid = $(e.target).closest('tr').data('pid');
        RRouter.routing.navigate('/app/purchaseBill/'+ this.props.order_id + '/' + pid);
    },
    render: function () {
        var _this = this;
        var _list = this.state.list || [];
        var items = _list.map(function (item) {
            return (
                <tr data-pid={item.id}>
                    <td>{item.document_name}</td>
                    <td><a onClick={_this.jumpPurchaseUpdate}>查看</a></td>
                    <td><a onClick={_this.jumpStorePrint}>查看</a>
                        {/*
                        <Button onClick={_this.jumpStorePrint} lg bsStyle='primary'>查看</Button>{' '}
                        */}
                    </td>
                </tr>
            )
        });
        return (
            <table className="purchase-bill-table">
                <tr>
                    <th>名称</th>
                    <th>采购单</th>
                    <th>入库单</th>
                </tr>
                {items}
            </table>
        )
    }
})
/**
 * @tofishes
 * 功能按钮
 */
var PrintOrderList = React.createClass({
    jumpPurchaseBill: function(){
        RRouter.routing.navigate('/app/purchaseBill/'+this.props.id + '/0');
    },
    jumpDeliveryPrint: function(){
        RRouter.routing.navigate('/app/printDelivery/'+this.props.id);
    },
    createCsOrder: function(){

        var model = this.showModal( <CreateCsOrderModal className="createCsOrderModal" /> , '创建换货订单', function(){
            console.log("1111");
        });
        ModalManager.create(model);
    },
    render: function () {
        var hasPay = this.props.status_id != 1 && this.props.status_id != 6;
        var deliveryBtn = hasPay ? <Button onClick={this.jumpDeliveryPrint} lg bsStyle='primary'>打印用户收货单</Button>
                                 : <span/>;
        return (
            <div className="printOrderList mb30">
                <Button onClick={this.jumpPurchaseBill} lg bsStyle='primary'>添加采购单</Button>{' '}
                {deliveryBtn}
                <PurchaseList order_id={this.props.id} />
            </div>
        )
    }
});

module.exports = PrintOrderList;
