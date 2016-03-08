import BaseList from 'modules/page-components/base-list';
import Event from 'lite-flux/lib/event';
import RequestProxy from 'modules/helpers/request-proxy';
var moment = require('moment');

var OrderGoodsModal = require('./modal/order-goods-modal');
import BaseModalMixin from 'modules/page-components/modal-mixin';

const imageView = '?imageView2/2/w/80';

var Order = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [BaseModalMixin],
  getInitialState() {
    return {visible: false, record: null};
  },

  seeOrderGoods(record) {

    record.modal_title = '订单商品清单';

    this.setState({record: record, visible: true});
  },

  orderDetail: function (id) {
    console.log(id);
    this.context.router.push('/order/edit/' + id + '/invoiceId/see');
  },
  restoreOrder(id) {

    let _data = {
      order_id: id
    };

    webapi.order.restoreOrder(_data).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('还原成功');
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
      }, {
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
          return (
            <span>
              <a href="javascript:;" onClick={self.orderDetail.bind(self, record.id)}>查看</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.restoreOrder.bind(null, record.id)}>还原</a>
            </span>
          );
        }
      }
    ];

    let filters = [
      {
        title: '关键字',
        key: 'key',
        defaultValue: null,
        type: 'input'
      }, {
        title: '订单状态',
        key: 'status_id',
        defaultValue: '',
        values: [
          {
            name: '订单状态',
            key: '',
            disabled: false
          }, {
            name: '已完成',
            key: '5',
            disabled: false
          }, {
            name: '已取消',
            key: '6',
            disabled: false
          }
        ],
        type: 'select'
      }
    ];

    //   	let resolve = function(result){
    // 	return result.data;
    // }

    let rowKey = function (record, index) {
      return index;
    };

    let tableData = {
      rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.order.getOrderRecycle,
      params: { // 额外的请求参数
        begin_at: '2015-01-01',
        end_at: moment().format('YYYY-MM-DD'),
        trash: 1
      },
      //resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (
      <div>
        <OrderGoodsModal visible={this.state.visible} record={this.state.record} setModalVisible={this.setModalVisible}/>
        <BaseList filters={filters} table={tableData}/>
      </div>
    );
  }
});

module.exports = Order;
