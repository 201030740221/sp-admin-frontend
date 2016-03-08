import { Table } from 'antd';
import { Tag } from 'antd';
import Event from 'lite-flux/lib/event';

const thisComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
      return {
          orderData: this.props.orderData,
          showEditDelivery: 'hidden',
          showEditDeliveryBtn: 'shown',
          showEditInstallation: 'hidden',
          showEditInstallationBtn: 'shown'
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  turn(taskId) {
      this.context.router.push('/promotion/coupon/detail/' + taskId);
    },
  reduceHandle(type) {
      if (type == 'delivery') {
          this.setState({
              showEditDelivery: 'shown',
              showEditDeliveryBtn: 'hidden'
            });
        }
      if (type == 'install') {
          this.setState({
              showEditInstallation: 'shown',
              showEditInstallationBtn: 'hidden'
            });
        }
    },
  cancelNote(type) {
      if (type == 'delivery') {
          this.setState({
              showEditDelivery: 'hidden',
              showEditDeliveryBtn: 'shown'
            });
        }
      if (type == 'install') {
          this.setState({
              showEditInstallation: 'hidden',
              showEditInstallationBtn: 'shown'
            });
        }
    },
  sureNote(type) {

      let self = this;
      let orderData = this.state.orderData;
      let orderId = orderData.id;

      if (type == 'delivery') {

          let delivery_val = $('#delivery_note').val();
          let _data = {
              delivery_abatement: delivery_val
            };
          webapi.order.getOrderDetailByInvoiceId(orderData.id, _data).then(function (res) {
              if (res && !res.code) {
                  SP.message.success('更新成功');
                  self.setState({
                      data: res.data
                    });
                  self.context.router.push('/order/edit/' + orderId + '/invoiceId/see');
                }else {
                  SP.message.error(res.msg);
                }
            });

          this.setState({
              showEditDelivery: 'hidden',
              showEditDeliveryBtn: 'shown'
            });
        }
      if (type == 'install') {

          let install_val = $('#install_note').val();
          let _data = {
              installation_abatement: install_val
            };
          webapi.order.getOrderDetailByInvoiceId(orderData.id, _data).then(function (res) {
              if (res && !res.code) {
                  SP.message.success('获取订单数据成功');
                  self.setState({
                      data: res.data
                    });
                }else {
                  SP.message.error(res.msg);
                }
            });

          this.setState({
              showEditInstallation: 'hidden',
              showEditInstallationBtn: 'shown'
            });
        }
    },
  render: function ()  {

      let self = this;
      let orderData = this.state.orderData;
      let coupon = orderData.coupon || [];

      let columns = [{
          title: '名称',
          dataIndex:'',
          render: function (text, record, index) {
              let _coupon = record.coupon || {};
              let _task = _coupon.task || {};
              return (
                    <span onClick={self.turn.bind(null, _task.id)}>{_task.name}</span>
                );
            }

        }, {
          title: '金额',
          dataIndex:'',
          render: function (text, record, index) {
              let _coupon = record.coupon || {};
              let _task = _coupon.task || {};
              return (
                    <span>￥{_task.value}</span>
                );
            }

        }];

      let rowKey = function (record, index) {
          return index;
        };

      if (orderData.status_id == 1) {
          self.state.showEditDeliveryBtn = 'shown';
          self.state.showEditInstallationBtn = 'shown';
        }else {
          self.state.showEditDeliveryBtn = 'hidden';
          self.state.showEditInstallationBtn = 'hidden';
        }

      return (
            <div className='u-mt-50 row'>
                <div className="col-16">
                    <h2 className='u-mb-10'>优惠券信息：</h2>
                    <div className="row">
                        <div className="col-12">
                            <Table columns={columns} dataSource={coupon} rowKey={rowKey} pagination={false} />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">总计：</div>
                        <div className="col-12 f14">￥{orderData.total_price}</div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">运费：</div>
                        <div className="col-12 f14">
                            <div className='u-mb-5'>
                                ￥{orderData.total_delivery} <span className='red'>{" - " + orderData.delivery_abatement}</span>
                            </div>
                            <div className={self.state.showEditDelivery}>
                                <div className='u-mb-5'>
                                    <input type="text" id='delivery_note' />
                                </div>
                                <div className=""> <Tag onClick={self.cancelNote.bind(null, 'delivery')}>取消</Tag>  <Tag color="green" onClick={self.sureNote.bind(null, 'delivery')}>确定</Tag></div>
                            </div>
                            <div className={self.state.showEditDeliveryBtn}><a href="javascript:;" className='u-ml-10' onClick={self.reduceHandle.bind(null, 'delivery')}>减免</a></div>
                        </div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">安装费：</div>
                        <div className="col-12 f14">
                            <div className='u-mb-5'>
                                ￥{orderData.total_installation} <span className='red'>{" - " + orderData.installation_abatement}</span>
                            </div>
                            <div className={self.state.showEditInstallation}>
                                <div className='u-mb-5'>
                                    <input type="text" id='install_note' />
                                </div>
                                <div className=""> <Tag onClick={self.cancelNote.bind(null, 'install')}>取消</Tag>  <Tag color="green" onClick={self.sureNote.bind(null, 'install')}>确定</Tag></div>
                            </div>
                            <div className={self.state.showEditInstallationBtn}><a href="javascript:;" className='u-ml-10' onClick={self.reduceHandle.bind(null, 'install')}>减免</a></div>
                        </div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">商品费用减免：</div>
                        <div className="col-12 f14">￥<span className='red'>{" - " + orderData.price_abatement}</span></div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">优惠券：</div>
                        <div className="col-12 f14">￥<span className='red'>{" - " + orderData.coupon_abatement}</span></div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">订单积分抵现：</div>
                        <div className="col-12 f14">￥<span className='red'>{" - " + orderData.point_abatement}</span></div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14">商品积分消耗：</div>
                        <div className="col-12 f14">￥<span className='red'>{" - " + orderData.total_point}</span></div>
                    </div>
                    <div className="row u-border-top">
                        <div className="col-12 u-tr f14 red">应付金额：</div>
                        <div className="col-12 f14 red">￥{orderData.total}</div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = thisComponent;
