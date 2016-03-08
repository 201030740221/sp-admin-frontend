var Table = antd.Table;

/*发货单 */
var OrderPrint = React.createClass({
  getInitialState: function () {
      return {
          data: {}
        };
    },
  getSource: function (id) {

      let self = this;

      webapi.order.getOrderDetail(id, {}).then(function (res) {
          if (res && !res.code) {
              SP.message.success('获取订单数据成功');
              self.setState({
                  data: res.data
                });
            }else {
              SP.message.error(res.msg);
            }
        });

    },
  componentDidMount: function () {

      let id = this.props.params.id;

      this.getSource(id);
    },
  componentDidUpdate: function () {

    },

  componentWillReceiveProps: function (nextProps) {

      let id = nextProps.params.id;

      this.getSource(id);
    },

  return: function () {
      history.go(-1);
    },

  render: function () {

      let id = this.props.params.id;
      let self = this,
          orderData = this.state.data;
      let delivery = orderData.delivery || {};
      let member_address = delivery.member_address || {};

      let goods = orderData.goods || [];

      let columns = [{
          title: '序号',
          dataIndex:'',
          render(text, record, index) {
              return (
                    <span>{index + 1}</span>
                );
            }

        }, {
          title: '商品名',
          dataIndex:'',
          render(text, record, index) {
              let good_sku = record.goods_sku || {};
              let goods = good_sku.goods || {};
              return (
                    <span>{goods.title}</span>
                );
            }

        }, {
          title: '商品编号',
          dataIndex:'',
          render(text, record, index) {
              let good_sku = record.goods_sku || {};
              let goods = good_sku.goods || {};
              return (
                    <span>{good_sku.sku_sn}</span>
                );
            }
        }, {
          title: '规格属性',
          dataIndex:'',
          render(text, record, index) {
              let good_sku = record.goods_sku || {};
              let goods = good_sku.goods || {};
              return (
                    <span>{good_sku.attribute_name}</span>
                );
            }

        }, {
          title: '单价',
          dataIndex:'',
          render(text, record, index) {
              return (
                    <span>{record.price}</span>
                );
            }

        }, {
          title: '数量',
          dataIndex:'',
          render(text, record, index) {
              return (
                    <span>{record.amount}</span>
                );
            }
        }, {
          title: '小计',
          dataIndex:'',
          render(text, record, index) {
              let total_price = record.price * record.amount;
              return (
                    <span>{total_price}</span>
                );
            }
        }];

      let rowKey = function (record, index) {
          return index;
        };

      let total_peices = 0;
      goods.forEach(function (item) {

          let amount = item.amount || {};
          let goods_sku = item.goods_sku || {};
          let peices = goods_sku.pieces;
          total_peices += amount * peices;
        });

      return (
            <div className="print_body">
                <div className="return-btn">
                    <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.return}>返回</button>
                </div>
                <div className="ant-form-horizontal u-mt-30">
                    <div className="row">
                        <div className="fl">
                            <img src="images/logo-print.png" style={{height: 90}} className="order-print-box-logo" />
                        </div>
                        <div className="fr">
                            <p className="fr mt15">有奖征稿<br/>分享您的居家生活故事</p>
                            <img className="fr" style={{height: 90}} src="images/sipin-weixin.png" alt=""/>
                        </div>
                    </div>
                    <h1 className="u-tc">发货单</h1>
                    <div className="u-mt-10 u-tl top_list" style={{paddingLeft:'0'}}>
                        <span className="u-mr-20">订单编号：{orderData.order_no}</span>
                        <span className="u-mr-20">包装件数：{total_peices}</span>
                        <span className="u-mr-20">收货人：{member_address.consignee}</span>
                        <span className="u-mr-20">联系方式：{member_address.mobile}</span>
                        <span className="u-mr-20">收货地址：{member_address.province_name + member_address.city_name + member_address.district_name + member_address.address}</span>
                    </div>
                    <div className="">
                        <Table columns={columns} dataSource={goods} rowKey={rowKey} pagination={false} />
                    </div>
                    <div className="u-mt-30 u-tl" style={{paddingLeft:'0'}}>
                        <span className="u-mr-20">商品总额：{orderData.total_price}</span>
                        <span className="u-mr-20">运费：{orderData.total_delivery}</span>
                        <span className="u-mr-20">安装费：{orderData.total_installation}</span>
                        <span className="u-mr-20">订单积分抵现：{orderData.point_abatement}</span>
                        <span className="u-mr-20">商品积分消耗：{orderData.total_point}</span>
                        <span className="u-mr-20">优惠券抵扣：{orderData.coupon_abatement}</span>
                        <span className="u-mr-20">合计：{orderData.total}</span>
                    </div>
                    <p className="u-mt-30">
                        感谢您把斯品的产品带回家！希望它们能融入到您的家庭，为全家人带来舒适和欢乐。如果在进家的30天内，它们无端调皮捣蛋带来不快，还请第一时间告知我们，我们会尽快为您消除困扰。
                    </p>
                    <p className="u-mt-10">
                        希望斯品的陪伴，能让您的居家生活更美好！
                    </p>
                    <div className="u-mt-10">
                        <p className="u-tl">客服热线：400-884-8688 客服邮箱：service@sipin.com</p>
                        <p className="u-tr" style={{position:'relative', top:'-20'}}>斯品家居在线商城（sipin.com）</p>
                    </div>
                    <div className="u-mt-20 u-tc click-btn">
                        <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={window.print}>点此打印</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = OrderPrint;
