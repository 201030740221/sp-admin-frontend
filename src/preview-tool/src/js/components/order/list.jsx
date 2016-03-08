import BaseList from 'modules/page-components/base-list';
import Event from 'lite-flux/lib/event';
var Popconfirm = antd.Popconfirm;
import RequestProxy from 'modules/helpers/request-proxy';
var moment = require('moment');

var OrderGoodsModal = require('./modal/order-goods-modal');
import BaseModalMixin from 'modules/page-components/modal-mixin';

const imageView = '?imageView2/2/w/80';


var Order = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [ BaseModalMixin ],
  getInitialState() {
      return {
          visible: false,
          record: null
        };
    },

  seeOrderGoods(record) {

      record.modal_title = '订单商品清单';

      this.setState({
          record: record,
          visible: true
        });
    },

  orderDetail: function (id) {
      console.log(id);
      this.context.router.push('/order/edit/' + id + '/invoiceId/see');
    },
  removeItem(id) {

      webapi.order.removeOrder(id, {}).then(RequestProxy(function (res) {
          Event.emit('baselist-refresh');
          SP.message.success('删除成功');
        }));
    },

  render: function () {


      let self = this;

      let columns = [
          {
            title: '订单号',
            dataIndex: '',
            render: function (text, record) {

                  return (
                        <a href="javascript:;" onClick={self.seeOrderGoods.bind(self, record)}>
                            {record.order_no}
                        </a>
                    );
                }
          }, {
              title: '下单时间',
              dataIndex: '',
              render: function (text, record) {
                  return (
                        <div>
                            {record.created_at}
                        </div>
                    );
                }
            },  {
              title: '用户信息',
              dataIndex: '',
              render: function (text, record) {

                  record.delivery = record.delivery || {};
                  let member_address = record.delivery.member_address || {};
                  record.member = record.member || {};

                  return (
                        <div>
                            <p>{member_address.consignee}({record.member.name})</p>
                            <p>{member_address.mobile}</p>
                        </div>
                    );
                }
            }, {
              title: '总金额',
              dataIndex: '',
              render: function (text, record) {
                  return (
                        <span>{record.total}</span>
                    );
                }
            }, {
              title: '订单状态',
              dataIndex: '',
              render: function (text, record) {
                  return (
                        <span>{record.status}</span>
                    );
                }
            }, {
              title: '状态变更时间',
              dataIndex: '',
              render: function (text, record) {
                  return (
                        <span>{record.updated_at}</span>
                    );
                }
            }, {
              title: '操作',
              dataIndex: '',
              render: function (text, record) {

                  let deleteNode = '';
                  if (record.status_id == 5 || record.status_id == 6) {
                      deleteNode = (
                            <span>
                                <span className="ant-divider"></span>
                                <Popconfirm title="确定要删除这个订单吗？" onConfirm={self.removeItem.bind(self, record.id)}>
                                    <a href="javascript:;">删除</a>
                                </Popconfirm>
                            </span>
                        );
                    }

                  return (
                        <span>
                            <a href="javascript:;" onClick={self.orderDetail.bind(self, record.id)}>查看</a>
                            {deleteNode}
                        </span>
                    );
                }
            }
        ];

      let filters = [{
          title: '关键字',
          key: 'key',
          defaultValue: null,
          type: 'input',
        },
          {
            title: '订单状态',
            key: 'status_id',
            defaultValue: '',
            values: [{
              name: '订单状态',
              key: '',
              disabled: false
            }, {
              name: '等待付款',
              key: '1',
              disabled: false
            }, {
              name: '付款成功',
              key: '2',
              disabled: false
            }, {
              name: '等待发货',
              key: '3',
              disabled: false
            }, {
              name: '等待收货',
              key: '4',
              disabled: false
            }, {
              name: '已完成',
              key: '5',
              disabled: false
            }, {
              name: '已取消',
              key: '6',
              disabled: false
            }],
            type: 'select',
          }, {
          title: '积分商品',
          key: 'point_goods',
          defaultValue: null,
          values: [{
              name: '请选择',
              key: '2',
              disabled: false
            }, {
              name: '否',
              key: '0',
              disabled: false
            }, {
              name: '是',
              key: '1',
              disabled: false
            }],
          type: 'select',
        }, {
          title: '下单时间',
          key: [
            'begin_at', 'end_at'
          ],
          type: 'dateRange'
        }];

  //   	let resolve = function(result){
        // 	return result.data;
        // }

      let rowKey = function (record, index) {
          return index;
        };

      let params = {  // 额外的请求参数
          begin_at: '2015-01-01',
          end_at: moment().format('YYYY-MM-DD'),
          point_goods: -1
        };
      let member_id = this.props.params.id;

      if (member_id) {
          params.member_id =  member_id;
        }
      let tableData = {
          // rowSelection: true, // 是否出现选择框
          columns: columns,
          pageSize: 10,
          url: webapi.order.getOrderList,
          params: params,
            //resolve: resolve,
          rowKey: rowKey,
          isList: true,
        };
      return (
            <div>
                <OrderGoodsModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible} />
                <BaseList
                    filters = {filters}
                    table = {tableData}
                    />
            </div>
        );
    }
});

module.exports = Order;
