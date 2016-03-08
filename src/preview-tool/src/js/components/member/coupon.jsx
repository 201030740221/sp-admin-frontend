'use strict';

import { Link } from 'react-router';
const BaseList = require('modules/page-components/base-list');
const Event = require('lite-flux/lib/event');
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

export default class CouponList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'unused'
    };
  }

  onTabChange(key) {
    this.setState({
      tab: key
    }, () => {
      Event.emit('baselist-refresh');
    });
  }

  render() {
    const columns = [
      {
        title: '卡券名称',
        dataIndex: 'name'
      }, {
        title: '卡券类型',
        dataIndex: 'type'
      }, {
        title: '适用范围',
        dataIndex: 'scope'
      }, {
        title: '金额/折扣率',
        dataIndex: 'value'
      }, {
        title: '使用条件',
        dataIndex: 'requirement'
      }, {
        title: '适用渠道',
        dataIndex: 'channel'
      }, {
        title: '有效时间',
        dataIndex: 'valid_date'
      }, {
        title: '使用时间',
        dataIndex: 'used_at'
      }, {
        title: '使用订单',
        dataIndex: '',
        render: (text, record) => {
          return (
            <Link to={`/order/edit/${record.order_id}/invoiceId/see`}>{record.order_no}</Link>
          );
        }
      }
    ];

    const types = ['满减券', '折扣券', '安装服务卡', '退货保障卡'];

    const scopeNames = ['全场', '类目', '商品'];

    const channels = [
      'PC端',
      '移动端APP',
      'PC端+移动端APP',
      '移动端-M站',
      'PC端+移动端M站',
      '移动端APP+移动端M站',
      'PC端+移动端APP+移动端M站'
    ];

    function resolve(res) {
      let data = [];
      if (res.data && res.data.data) {
        data = res.data.data.map(item => {
          let value = item.task.value;
          let requirement = '';

          if (parseInt(item.task.discount_type) === 1) {
            value = value.split('.')[1] + '%';
          }
          if (item.task.requirement === 0) {
            requirement = '无';
          }
          if (item.task.requirement === 1) {
            requirement = `满${item.task.threshold}使用`;
          }

          return {
            id: item.id,
            name: item.task.name,
            type: types[item.task.discount_type],
            scope: scopeNames[item.task.scope],
            value,
            requirement,
            channel: channels[item.task.channel - 1],
            valid_date: `${item.valid_time_start_at}~${item.valid_time_end_at}`,
            used_at: item.use_at,
            order_no: item.order_no,
            order_id: item.order_id
          };
        });
      }
      return data;
    }

    const tableData = {
      columns: columns,
      pageSize: 10,
      url: webapi.coupon.getUserCoupon,
      params: {
        member_id: this.props.params.id,
        type: this.state.tab
      },
      resolve: resolve,
      rowKey: record => record.id,
      isList: true
    };

    return (
      <div>
        <div className="u-clearfix">
          <Link className="ant-btn ant-btn-primary u-fr u-ml-10" to="/member">{'返回用户列表'}</Link>
        </div>
        <Tabs defaultActiveKey={this.state.tab} onChange={this.onTabChange.bind(this)}>
          <TabPane tab="未使用" key="unused"></TabPane>
          <TabPane tab="已使用" key="used"></TabPane>
          <TabPane tab="已过期" key="outdated"></TabPane>
        </Tabs>
        <BaseList table={tableData}/>
      </div>
    );
  }
}
