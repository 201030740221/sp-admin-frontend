/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var couponStore = require('../../modules/stores/coupon/index.jsx');
var goodsSkuStore = require('../../modules/stores/goods/getGoodsSkuStore.jsx');

var CouponTags = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('couponList','goodsSkuStore')],
    getInitialState: function () {
        return {
            list: []
        }
    },
    searchHandle: function(id){

        var _this = this;
        var request_data = {};
        liteFlux.action("couponList").getCouponList(request_data,function(data){
            _this.setState({
                list: data.data
            })
        });
    },
    componentDidMount: function () {
        this.searchHandle(this.props.taskId);
    },

    onChangeStatus: function(e){

        var _this = this;
        var value = e.target.value;
        var source = this.props.source;
        var id = source.coupon_id;
        var request_data = {
            goods_id: source.this_goods_id,
            coupon_task_id: +value
        };

        liteFlux.action("goodsSkuStore").editGoodsSku(id,request_data,function(log){
            if(log && _this.props.taskCallBack){
                _this.props.taskCallBack(value);
            }
        });
    },
    render: function () {

        var _this = this;
        var list = this.state.list;
        var source = this.props.source;
        source.coupon = source.coupon||{};
        source.coupon.couponTask = source.coupon.couponTask||{};

        return (
            <Select id='task_id' value={source.coupon.couponTask.id} onChange={this.onChangeStatus} className="wa fl mr0">
                <option value="-1">请选择优惠券</option>
                {
                    list.map(function (item, i) {
                        return (
                            <option key={i} value={item.id}>{item.name}</option>
                        )
                    })
                }
            </Select>
        )
    }
});

module.exports = CouponTags;
