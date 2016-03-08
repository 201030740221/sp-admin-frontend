import { Tabs } from 'antd';
import { Table } from 'antd';
const TabPane = Tabs.TabPane;

import Event from 'lite-flux/lib/event';
import BaseModalMixin from 'modules/page-components/modal-mixin';
var UserLogModal = require('../modal/add-user-log-modal');
var InvoiceInfoModal = require('../modal/invoice-info-modal');
var ExpressInfoModal = require('../modal/express-info-modal');

/**
 * 订单跟踪
 */
var OrderRecord = React.createClass({
  getInitialState() {
      return {
          processLog: this.props.processLog
        };
    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          processLog: nextProps.processLog
        });
    },
  render: function () {

      let processLog = this.state.processLog;

      let  columns = [{
          title: '时间',
          dataIndex: 'created_at'
        }, {
          title: '操作记录',
          dataIndex: 'description'
        }, {
          title: '操作人',
          key: 'creater_type',
          render: function (text, record, index) {
              return (
                    <span>{record.creater_type == 2?'用户':'系统'}</span>
                );
            }
        }];


      let rowKey = function (record, index) {
          return index;
        };

      return (
            <div className="orderRecord">
                <Table columns={columns} dataSource={processLog} rowKey={rowKey} pagination={false} />
            </div>
        );
    }
});


/**
 * 用户记录
 */
var UserLog = React.createClass({
  mixins: [ BaseModalMixin ],
  getInitialState() {
      return {
          feedbackLog: this.props.feedbackLog,
          orderData: this.props.orderData,
          visible: false,
          record: {}
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          feedbackLog: nextProps.feedbackLog,
          orderData: nextProps.orderData
        });
    },
  addUserLog: function () {
      this.setState({
          visible: true,
          record: {
              orderId: this.props.orderId
            }
        });
    },
  render: function () {

      let feedbackLog = this.state.feedbackLog;
      let orderData = this.state.orderData;

      let  columns = [{
          title: '时间',
          dataIndex: 'created_at'
        }, {
          title: '状态',
          dataIndex: 'status'
        }, {
          title: '用户反馈记录',
          dataIndex: 'feedback'
        }, {
          title: ' 标签',
          render: function (text, record, index) {
              record = record || {};
              record.log_note = record.log_note || [];
              let _this_node =  record.log_note.map(function (item, _key) {
                  item = item || {};
                  item.note = item.note || {};
                  return (
                        <span key={_key} className="mr10">{item.note.name}</span>
                    );
                });
              return _this_node;
            }
        }, {
          title: '操作人',
          key: 'created_by',
        }];

      let rowKey = function (record, index) {
          return index;
        };

      let status_log = orderData.status_log || [];
      let last = status_log[status_log.length - 1];

      return (
            <div className="userLog">

                <UserLogModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible} />

                <div className="u-mt-30 u-mb-30">
                    <div>当前状态：{last ? last['status']:''}   ( {last ? last['created_at']:''} )</div>
                    <button type="button" style={{float:'right', marginTop:'-25'}} className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.addUserLog}>添加记录</button>
                </div>
                <Table columns={columns} dataSource={feedbackLog} rowKey={rowKey} pagination={false} />
            </div>
        );
    }
});


/**
 * 付款信息
 */
var PayRecord = React.createClass({
  getInitialState() {
      return {
          orderData: this.props.orderData
        };
    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  render: function () {

      let orderData = this.state.orderData;
      let paymentLog = orderData.payment_history_log || [];
      let payment = orderData.payment || {};

      let  columns = [{
          title: '金额',
          dataIndex: 'total'
        }, {
          title: '交易方式',
          key: '',
          render: function () {
              return (
                    <span>{payment.partner}( {payment.account} )</span>
                );
            }
        }, {
          title: '交易说明',
          dataIndex: 'type'
        }, {
          title: '交易时间',
          dataIndex: 'created_at'
        }];


      let rowKey = function (record, index) {
          return index;
        };

      return (
            <div className="orderRecord">
                <Table columns={columns} dataSource={paymentLog} rowKey={rowKey} pagination={false} />
            </div>
        );
    }
});


/*发票信息*/
var InvoiceInfo = React.createClass({
  mixins: [ BaseModalMixin ],
  getInitialState() {
      return {
          orderData: this.props.orderData,
          visible: false,
          record: null
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  editHandle: function () {
      this.setState({
          visible: true,
          record: this.state.orderData
        });
    },
  render: function ()  {

      let self = this;
      let orderData = this.state.orderData || {};
      let invoice = orderData.invoice || {};
      let express = invoice.express || {};

      let type_show, invoice_no_show ;

      switch (invoice.title_type) {
          case 0:
            type_show = '个人';
            break;
          case 1:
            type_show = invoice.company_name;
            break;
          case undefined:
            type_show = ' ';
            break;
        }
        /*是否已开发票*/
      if (invoice.invoice_tax_no === '') {
          invoice_no_show = '否';
        }
      if (invoice.invoice_tax_no !== '') {
          invoice_no_show = '是';
          if (invoice.invoice_tax_no === undefined) {
              invoice_no_show = ' ';
            }
        }

      return (
            <div className='u-mt-50'>

                <InvoiceInfoModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible} />

                <button type="button" style={{float:'right', marginTop:'-40px'}} className="ant-btn ant-btn-primary ant-btn-lg" onClick={self.editHandle}>修改</button>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">发票抬头：</div>
                    <div className="col-14 f14">{type_show}</div>
                </div>
                <div className='row section_list'>
                    <div className="col-8 f14">是否已开发票：</div>
                    <div className="col-14 f14">{invoice_no_show}</div>
                </div>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">发票单号：</div>
                    <div className="col-14 f14">{invoice.invoice_tax_no}</div>
                </div>
                <div className='row section_list'>
                    <div className="col-8 f14">快递公司：</div>
                    <div className="col-14 f14">{express.express_partner}</div>
                </div>
                <div className='row section_list other_color_list'>
                    <div className="col-8 f14">快递单号：</div>
                    <div className="col-14 f14">{express.express_no}</div>
                </div>
            </div>
        );
    }

});


/*配送信息*/
var ExpressInfo = React.createClass({
  mixins: [ BaseModalMixin ],
  getInitialState() {
      return {
          orderData: this.props.orderData,
          visible: false,
          record: null
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  setExpress: function (_item, type) {

      let orderData = this.state.orderData || {};

      if (orderData.status_id == 3 || orderData.status_id == 4) {

          _item.order_id = orderData.id;
          if (type == 'is_new') {
              _item.isNew = true;
            }
          if (type==='f_new') {
              _item.isNew = false;
            }

          this.setState({
              visible: true,
              record: _item
            });
        }else {
          SP.message.error('当前状态不可以更改配送方式');
        }


    },
  render: function ()  {

      let self = this;
      let orderData = this.state.orderData || {};
      let express = orderData.express || [];
      let expressData = [];

      let  columns = [{
          title: '时间',
          dataIndex: ''
        }, {
          title: '地点',
          dataIndex: ''
        }];


      let rowKey = function (record, index) {
          return index;
        };

      var addNode = '';
      if (express.length == 0) {
          addNode = (
                <span><button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={self.setExpress.bind(null, {}, 'is_new')} style={{marginLeft:'150'}}>新加配送方式</button></span>
            );
        }

      return (
            <div className='u-mt-50'>

                <ExpressInfoModal
                    visible={this.state.visible}
                    record={this.state.record}
                    setModalVisible={this.setModalVisible}
                    />


                <div className="row">
                    <div className="col-4 f16">
                        <span>配送方式：</span>
                        {addNode}
                    </div>
                    <div className="col-16">
                        {
                            express.map(function (item, key) {
                              return (
                                    <div key={key}>
                                        <div className="row">
                                            <div className="col-3 u-tr f14">快递公司:</div>
                                            <div className="col-10 u-ml-20 f14">{item.express_partner}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3 u-tr f14">运单号:</div>
                                            <div className="col-10 u-ml-20 f14">{item.express_no}</div>
                                        </div>
                                        <div className="row u-mt-20">
                                            <div className="col-6">.</div>
                                            <div className="col-10">
                                                <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={self.setExpress.bind(null, item, 'f_new')}>修改配送方式</button>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>
                </div>

                <div className="row u-mt-30">
                    <div className="col-4 f16">物流跟踪信息：</div>
                    <div className="col-16">
                        <Table columns={columns}  dataSource={expressData} rowKey={rowKey} pagination={false} />
                    </div>
                </div>
            </div>
        );
    }

});


var thisComponent = React.createClass({
  getInitialState() {
      return {
          orderData: this.props.orderData,
          feedbackLog: this.props.feedbackLog,
          documentData: this.props.documentData
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData,
          feedbackLog: nextProps.feedbackLog,
          documentData: nextProps.documentData
        });
    },
  render: function ()  {

      let self = this;
      let orderId = this.props.orderId;
      let orderData = this.state.orderData;
      let feedbackLog = this.state.feedbackLog || [];
      let processLog = orderData.process_log || [];
      let stateLog = orderData.status_log || [];
      let last = stateLog[stateLog.length - 1];

      return (
            <div className="u-mt-50">
                <Tabs type="card">
                    <TabPane tab="订单跟踪" key="1">
                        <OrderRecord processLog={processLog} />
                    </TabPane>
                    <TabPane tab="用户记录" key="2">
                        <UserLog orderData={orderData} feedbackLog={feedbackLog} orderId={orderId} />
                    </TabPane>
                    <TabPane tab="付款信息" key="3">
                        <PayRecord orderData={orderData} />
                    </TabPane>
                    <TabPane tab="发票信息" key="4">
                        <InvoiceInfo orderData={orderData} />
                    </TabPane>
                    <TabPane tab="配送信息" key="5">
                        <ExpressInfo orderData={orderData} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }

});

module.exports = thisComponent;
