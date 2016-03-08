'use strict';

var Select = antd.Select;
var Option = Select.Option;

var myComponent = React.createClass({
  getInitialState() {
    return {couponId: this.props.goods_sku.coupon_task_id, couponData: this.props.couponData};
  },
  componentDidMount: function () {},
  onSelectChange: function (val) {

    let self = this;
    let sku = this.props.goods_sku;
    let id = sku.id;
    let data = {
      goods_id: sku.goods_id,
      coupon_task_id: + val
    };

    webapi.goods.editGoodsSku(id, data).then(function (res) {
      if (res && !res.code) {
        SP.message.success('更新sku成功');
        if (self.props.changeCallBack) {
          self.props.changeCallBack(true);
        }
      } else {
        SP.message.error(res.msg);
        if (self.props.changeCallBack) {
          self.props.changeCallBack(false);
        }
      }
    });
  },
  render: function () {

    var couponData = this.state.couponData,
      couponList = couponData.data || [];

    return (
      <Select
        value={this.state.couponId + ''}
        style={{
          width: 200
        }}
        size="large"
        onChange={this.onSelectChange}>
        <Option value='0'>请选择优惠券</Option>
        {couponList.map(function (item, key) {
          return (
            <Option value={item.id} key={key}>{item.name}</Option>
          );
        })
}
      </Select>
    );
  }

});

module.exports = myComponent;
