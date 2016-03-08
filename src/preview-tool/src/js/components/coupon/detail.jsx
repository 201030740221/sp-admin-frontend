import {Form, Input, Select, Checkbox, Row, Col, Button, message, Popconfirm, DatePicker, Table} from 'antd';
import ReactRouter from 'react-router';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const InputGroup = Input.Group;
const Option = Select.Option;
const Event = require('lite-flux/lib/event');
const moment = require('moment');
const History = ReactRouter.History;
const BaseList = require('modules/page-components/base-list');

function tip(res) {
  res = res || {
      code: true,
      msg: '失败，服务器返回异常'
    };

  let method = res.code
        ? 'error'
        : 'success';
  message[method](res.msg);
}

/*适用范围*/
const SCOPE_TYPE = ['全场', '类目', '商品'];

/*优惠券类型*/
const COUPON_TYPE = ['满减券', '折扣券', '安装服务卡', '退货保障卡'];

/*渠道*/
const CHANNEL_TYPE = ['', 'PC端', '移动端APP', 'PC端+移动端APP', '移动端M站', 'PC端+移动端M站', '移动端APP+移动端M站', 'PC端+移动端APP+移动端M站'];

/*派发形式*/
const TYPE = ['用户领取', '人工派发', '自动派发', '线下派发'];

/*状态*/
const STATUS = ['未启用', '已启用', '已禁用'];

const CouponTask = React.createClass({
  getInitialState() {
      return {
          data: []
        };
    },
  componentDidMount() {
      webapi.coupon.getCouponTask(this.props.id).then(function (res) {
          if (res.code === 0) {
              this.setState({
                  data: [res.data]
                });
            }
        }.bind(this));
    },
  rowKey(recode, index) {
      return index;
    },
  render() {
      let data = this.state.data;
      const columns = [
          {
            title: '卡券名称',
            dataIndex: 'name'
          }, {
              title: '适用范围',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{SCOPE_TYPE[record.scope]}</span>
                    );
                }
            }, {
              title: '适用渠道',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{CHANNEL_TYPE[record.channel]}</span>
                    );
                }
            }, {
              title: '卡券类型',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{COUPON_TYPE[record.discount_type]}</span>
                    );
                }
            }, {
              title: '派发形式',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{TYPE[record.type]}</span>
                    );
                }
            }, {
              title: '领取时间',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{`${record.start_at} 至 ${record.end_at}`}</span>
                    );
                }
            }, {
              title: '有效时间',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{`${record.valid_time_start_at} 至 ${record.valid_time_end_at}`}</span>
                    );
                }
            }, {
              title: '状态',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{STATUS[record.status]}</span>
                    );
                }
            }, {
              title: '使用条件',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{record.requirement === 1 ? '有' : '无'}</span>
                    );
                }
            }
        ];

      if (data.length > 0) {
          return (
                <Table
                    bordered={true}
                    columns={columns}
                    dataSource={this.state.data}
                    pagination = {false}
                    rowKey = {this.rowKey}
                />
            );
        }else {
          return (<span>loading</span>);
        }
    }
});
const View = React.createClass({
  mixins: [History],

  refreshData() {
      Event.emit('baselist-refresh');
    },

  goToOrder(no) {
      this.history.pushState(null, '/order/' + no);
    },
  renderDetail() {

      var self = this;

      var columns = [
          {
            title: '卡券码',
            dataIndex: 'id'
          }, {
              title: '兑换码',
              dataIndex: 'code'
            }, {
              title: '领取时间',
              dataIndex: 'receive_at'
            }, {
              title: '用户',
              dataIndex: null,
              render: function (text, record) {
                  let name = '';
                  if (record.member) name = record.member.name;
                  return (
                        <span>{name}</span>
                    );
                }
            }, {
              title: '使用时间',
              dataIndex: 'use_at'
            }, {
              title: '订单号',
              dataIndex: '',
              render: function (text, record) {
                  if (record.order_no > 0) {
                      return (
                            <a href="javascript:;" onClick={self.goToOrder.bind(self, record.order_no)}>{record.order_no}</a>
                        );
                    }else {
                      return (<span></span>);
                    }
                }
            }
        ];

      let rowKey = function (record, index) {
          return record.id;
        };

      let resolve = function (result) {
          return result && result.data && result.data.data || [];
        };

      let params = {
          task_id: this.props.routeParams.id
        };

      let tableData = {
          columns: columns,
          url: webapi.coupon.getCoupon,
          params: params,
          isList: true,
          resolve: resolve,
          rowKey: rowKey
        };

      return (<BaseList table= {tableData} />);
    },
  renderCouponTask() {

      var self = this;

      var columns = [
          {
            title: '卡券码',
            dataIndex: 'id'
          }, {
              title: '兑换码',
              dataIndex: 'code'
            }, {
              title: '领取时间',
              dataIndex: 'receive_at'
            }, {
              title: '用户',
              dataIndex: null,
              render: function (text, record) {
                  let name = '';
                  if (record.member) name = record.member.name;
                  return (
                        <span>{name}</span>
                    );
                }
            }, {
              title: '使用时间',
              dataIndex: 'use_at'
            }, {
              title: '订单号',
              dataIndex: '',
              render: function (text, record) {
                  if (record.order_no > 0) {
                      return (
                            <a href="javascript:;" onClick={self.goToOrder.bind(this, record.order_id)}>{record.order_no}</a>
                        );
                    }else {
                      return (<span></span>);
                    }
                }
            }
        ];

      let rowKey = function (record, index) {
          return record.id;
        };

      let resolve = function (result) {
          return result && result.data && result.data.data || [];
        };

      let params = {
          task_id: this.props.routeParams.id
        };

      let tableData = {
          columns: columns,
          url: webapi.coupon.getCoupon,
          params: params,
          isList: true,
          resolve: resolve,
          rowKey: rowKey
        };

      return (<BaseList table= {tableData} />);
    },
  render() {
      if (this.props.children) {return this.props.children;}


      return (
            <div className="article-list">
                <CouponTask id={this.props.routeParams.id} />
                {this.renderDetail()}
            </div>
        );
    }

});

module.exports = View;
