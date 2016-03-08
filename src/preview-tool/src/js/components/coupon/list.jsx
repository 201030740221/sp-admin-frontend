import {Form, Input, Select, Checkbox, Row, Col, Button, message, Popconfirm, DatePicker} from 'antd';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const InputGroup = Input.Group;
const Option = Select.Option;
const Event = require('lite-flux/lib/event');
const moment = require('moment');
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

/*优惠券类型*/
const COUPON_TYPE = ['满减券', '折扣券', '安装服务卡', '退货保障卡'];

/*渠道*/
const CHANNEL_TYPE = ['', 'PC端', '移动端APP', 'PC端+移动端APP', '移动端M站', 'PC端+移动端M站', '移动端APP+移动端M站', 'PC端+移动端APP+移动端M站'];

/*派发形式*/
const TYPE = ['用户领取', '人工派发', '自动派发', '线下派发'];

/*状态*/
const STATUS = ['未启用', '已启用', '已禁用'];

//日期选择
const DateFilter = React.createClass({
  onChange: function (data) {
      if (this.props.onChange) {this.props.onChange(moment(data).format('YYYY-MM-DD hh:mm:ss'));}
    },
  render: function () {
      return (
            <DatePicker onChange={this.onChange}/>
        );
    }
});

const View = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  refreshData() {
      Event.emit('baselist-refresh');
    },

  addCoupon() {
      this.context.router.push('/coupon/create');
    },
    // 编辑文章
  edit(id) {
      this.context.router.push('/coupon/' + id);
    },
    // 删除
  removeCoupon(id) {
      let self = this;
      webapi.coupon.removeCoupon(id).then(function (res) {
          tip(res);
          this.refreshData();
        }.bind(this));
    },
    //改变状态
  changeStatus(id, status) {
      let self = this;
      webapi.coupon.updateCoupon(id, {status: status}).then(function (res) {
          tip(res);
          this.refreshData();
        }.bind(this));
    },
  render() {
      if (this.props.children) {return this.props.children;}

      var self = this;

      var columns = [
          {
            title: 'ID',
            dataIndex: 'id'
          }, {
              title: '卡券名称',
              dataIndex: 'name'
            }, {
              title: '值',
              dataIndex: null,
              render: function (text, record) {
                  const type = +record.discount_type;
                  if (type === 1) {return (
                            <span>折扣率:{record.value * 100}%</span>
                        );}
                  if (type === 0) {return (
                            <span>
                                面额:{record.value}元</span>
                        );}
                  return (
                        <span></span>
                    );
                }
            }, {
              title: '数量',
              dataIndex: 'number'
            }, {
              title: '已领取',
              dataIndex: 'received'
            }, {
              title: '卡券类型',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{COUPON_TYPE[record.discount_type]}</span>
                    );
                }
            }, {
              title: '渠道',
              dataIndex: null,
              render: function (text, record) {
                  return (
                        <span>{CHANNEL_TYPE[record.channel]}</span>
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
              title: ' 操作',
              dataIndex: null,
              render: function (text, record) {
                  const divider = <span className="ant-divider"></span>;
                  switch ( + record.status) {
                      case 0:
                        return (
                                <div>
                                    <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 1)}>启用</a>
                                    {divider}
                                    <a href="javascript:;" onClick={self.edit.bind(self, record.id)}>编辑</a>
                                    {divider}
                                    <Popconfirm title="确定要删除吗？" onConfirm={self.removeCoupon.bind(self, record.id)}>
                                        <a href="javascript:;">删除</a>
                                    </Popconfirm>
                                </div>
                            );
                        break;
                      case 1:
                        if (+ record.type === 1) {return (
                                    <div>
                                        <a href="javascript:;" onClick={self.edit.bind(self, record.id)}>查看</a>
                                    </div>
                                );} else {return (
                                    <div>
                                        <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 2)}>禁用</a>
                                        {divider}
                                        <a href="javascript:;" onClick={self.edit.bind(self, record.id)}>查看</a>
                                    </div>
                                );}
                        break;
                      case 2:
                        return (
                                <div>
                                    <a href="javascript:;" onClick={self.changeStatus.bind(self, record.id, 1)}>启用</a>
                                    {divider}
                                    <a href="javascript:;" onClick={self.edit.bind(self, record.id)}>查看</a>
                                </div>
                            );
                        break;
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

      let tableData = {
          columns: columns,
          url: webapi.coupon.getCouponList,
          isList: true,
          resolve: resolve,
          rowKey: rowKey
        };

      let actionButtons = [
          {
            title: '添加卡券',
            onClick: function (selectedRows) {
                  self.addCoupon();
                }
          }
        ];

      let filters = [
          {
            title: '卡券名称',
            key: 'name',
            defaultValue: null,
            type: 'input'
          }, {
              title: '面值',
              key: 'value_start_at',
              defaultValue: null,
              type: 'input'
            }, {
              title: '至',
              key: 'value_end_at',
              defaultValue: null,
              type: 'input'
            }, {
              title: '有效时间',
              key: 'valid_time_start_at',
              defaultValue: null,
              type: 'other',
              render: function () {
                  return (
                        <DateFilter/>
                    );
                }
            }, {
              title: '至',
              key: 'valid_time_end_at',
              defaultValue: null,
              type: 'other',
              render: function () {
                  return (
                        <DateFilter/>
                    );
                }
            }, {
              title: '状态',
              key: 'status',
              defaultValue: null,
              values: [
                  {
                    name: '所有状态',
                    key: null,
                    disabled: false
                  }, {
                      name: '未启用',
                      key: '0',
                      disabled: false
                    }, {
                      name: '已启用',
                      key: 1,
                      disabled: false
                    }, {
                      name: '已禁用',
                      key: 2,
                      disabled: false
                    }
                ],
              type: 'select'
            }, {
              title: '派发形式',
              key: 'type',
              defaultValue: null,
              values: [
                  {
                    name: '所有派发形式',
                    key: null,
                    disabled: false
                  }, {
                      name: '用户领取',
                      key: '0',
                      disabled: false
                    }, {
                      name: '人工派发',
                      key: 1,
                      disabled: false
                    }, {
                      name: '自动派发',
                      key: 2,
                      disabled: false
                    }, {
                      name: '线下派发',
                      key: 3,
                      disabled: false
                    }
                ],
              type: 'select'
            }, {
              title: '渠道',
              key: 'channel',
              defaultValue: null,
              values: [
                  {
                    name: '所有渠道',
                    key: null,
                    disabled: false
                  }, {
                      name: 'PC端',
                      key: 1,
                      disabled: false
                    }, {
                      name: '移动端APP',
                      key: 2,
                      disabled: false
                    }, {
                      name: 'PC端+移动端APP',
                      key: 3,
                      disabled: false
                    }, {
                      name: '移动端M站',
                      key: 4,
                      disabled: false
                    }, {
                      name: 'PC端+移动端M站',
                      key: 5,
                      disabled: false
                    }, {
                      name: '移动端APP+移动端M站',
                      key: 6,
                      disabled: false
                    }, {
                      name: 'PC端+移动端APP+移动端M站',
                      key: 7,
                      disabled: false
                    }
                ],
              type: 'select'
            }, {
              title: '卡券类型',
              key: 'discount_type',
              defaultValue: null,
              values: [
                  {
                    name: '所有卡券类型',
                    key: null,
                    disabled: false
                  }, {
                      name: '满减券',
                      key: '0',
                      disabled: false
                    }, {
                      name: '折扣券',
                      key: 1,
                      disabled: false
                    }, {
                      name: '安装服务卡',
                      key: 2,
                      disabled: false
                    }, {
                      name: '退货保障卡',
                      key: 3,
                      disabled: false
                    }
                ],
              type: 'select'
            }
        ];

      return (
            <div className="coupon-list">
                <BaseList filters= {filters} table= {tableData} actionButtons= {actionButtons}/>
            </div>
        );
    }

});

module.exports = View;
