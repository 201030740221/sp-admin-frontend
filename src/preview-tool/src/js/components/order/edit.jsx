var Table = antd.Table;
var Popconfirm = antd.Popconfirm;
import {Select} from 'antd';
const Option = Select.Option;

var StepsProgressComponent = require('./detail/edit-steps-progress');/*订单进度条*/
var TabsLogComponent = require('./detail/edit-tabs-log');/*状态跟踪*/
var UserInfoComponent = require('./detail/edit-user-info');/*用户信息*/
var OrderGoodsList = require('./detail/edit-order-goods');/*商品清单*/
var DeliveryInfo = require('./detail/edit-delivery-info');/*送装时间*/
var CouponInfo = require('./detail/edit-coupon-info');/*优惠券信息*/
var PrintOrderList = require('./detail/print-order-list');/*用户收货单*/

/*商品模板 */
var OrderDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {data: {}, feedbackLog: [], documentData: []};
  },
  getSource: function (id, invoiceId) {

    let self = this;

    if (invoiceId === 'see') {
      webapi.order.getOrderDetail(id, {}).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取订单数据成功');
          self.setState({data: res.data});
        } else {
          SP.message.error(res.msg);
        }
      });
    } else {
      let _data = {
        invoice_id: invoiceId
      };
      webapi.order.getOrderDetailByInvoiceId(id, _data).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取订单数据成功');
          self.setState({data: res.data});
        } else {
          SP.message.error(res.msg);
        }
      });
    }

    var request_data = {
      order_id: id
    };
    webapi.order.getFeedbackLog(request_data).then(function (res) {
      if (res && !res.code) {
        self.setState({feedbackLog: res.data});
      } else {
        SP.message.error(res.msg);
      }
    });

    webapi.order.getDocumentLog(request_data).then(function (res) {
      if (res && !res.code) {
        self.setState({documentData: res.data});
      } else {
        SP.message.error(res.msg);
      }
    });
  },
  componentDidMount: function () {

    let id = this.props.params.id;
    let invoiceId = this.props.params.invoiceId;

    this.getSource(id, invoiceId);
  },
  componentDidUpdate: function () {},

  componentWillReceiveProps: function (nextProps) {

    let id = nextProps.params.id;
    let invoiceId = nextProps.params.invoiceId;

    this.getSource(id, invoiceId);
  },

  return: function () {
    this.context.router.push('/order');
  },
  onChangeStatus(val) {
    console.log(val);

    let self = this;
    let id = this.props.params.id;
    let orderData = this.state.data || {};
    let request_data = {
      member_id: orderData.member_id,
      status_id: + val
    };

    webapi.order.getOrderDetailByInvoiceId(id, request_data).then(function (res) {
      if (res && !res.code) {
        SP.message.success('获取订单数据成功');
        self.context.router.push('/order/edit/' + id + '/invoiceId/see');

      } else {
        SP.message.error(res.msg);
      }
    });
  },

  render: function () {

    let id = this.props.params.id;
    let self = this,
      orderData = this.state.data || {},
      feedbackLog = this.state.feedbackLog,
      documentData = this.state.documentData;
    orderData.opreation = orderData.opreation || {};

    return (
      <div className="">
        <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.return}>返回订单列表</button>
        <div className="ant-form-horizontal u-mt-30">

          <div className="">
            <div className="fr" style={{
              marginTop: '-60'
            }}>
              <span className='u-mr-10 f14'>订单号：{orderData.order_no}</span>
              <Select
                className='f14'
                defaultValue="0"
                style={{
                  width: 120
                }}
                onChange={this.onChangeStatus}>
                <Option value="0">请选择修改状态</Option>
                {orderData.opreation && $.map(orderData.opreation, function (name, id) {
                  return (
                    <Option value={id} key={id}>{name}</Option>
                  );
                })}
              </Select>
            </div>
          </div>
          <hr style={{
            border: '1px solid #F1F1F1',
            marginBottom: '60px'
          }}/>
          <StepsProgressComponent orderData={orderData}/>
          <TabsLogComponent orderData={orderData} feedbackLog={feedbackLog} documentData={documentData} orderId={id}/>
          <UserInfoComponent orderData={orderData} orderId={id}/>
          <OrderGoodsList orderData={orderData}/>
          <DeliveryInfo orderData={orderData}/>
          <CouponInfo orderData={orderData}/>
          <PrintOrderList orderData={orderData}/>

        </div>
      </div>
    );
  }
});

module.exports = OrderDetail;
