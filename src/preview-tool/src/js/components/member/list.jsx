'use strict';

const BaseList = require('modules/page-components/base-list');
import { Link } from 'react-router';
import {Modal, Row, Col} from 'antd';

export default class List extends React.Component {
  displayName: 'List'
  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false
    };
  }

  handleModal(record) {
    this.setState({
      modalVisble: true,
      name: record.name,
      email: record.email,
      mobile: record.mobile,
      realname: record.realname,
      birthday: record.birthday
    });
  }

  handleOk() {
    this.setState({modalVisble: false});
  }

  render() {
    const _this = this;
    const filters = [
      {
        title: '搜索',
        key: 'keyword',
        defaultValue: null,
        placeholder: '用户名/邮箱/手机',
        type: 'input'
      }
    ];

    const columns = [
      {
        title: '用户名',
        dataIndex: 'name'
      }, {
        title: '邮箱',
        dataIndex: 'email'
      }, {
        title: '手机',
        dataIndex: 'mobile'
      }, {
        title: '号码归属地',
        dataIndex: 'area'
      }, {
        title: '注册来源',
        dataIndex: 'rs'
      }, {
        title: '可用积分',
        dataIndex: 'available_point'
      }, {
        title: '注册日期',
        dataIndex: 'created_at'
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record) => {
          return (
            <span>
              <a onClick={_this.handleModal.bind(_this, record)}>{'查看'}</a>
              <span className="ant-divider"></span>
              <Link to={`/order/member/${record.id}`}>{'订单'}</Link>
              <span className="ant-divider"></span>
              <Link to={`/member/${record.id}/point`}>{'积分'}</Link>
              <span className="ant-divider"></span>
              <Link to={`/member/${record.id}/referral`}>{'推荐'}</Link>
              <span className="ant-divider"></span>
              <Link to={`/member/${record.id}/coupon`}>{'卡券'}</Link>
            </span>
          );
        }
      }
    ];

    function resolve(res) {
      let data = [];
      if (res.data && res.data.data) {
        data = res.data.data.map(item => {
          if (item.mobile_detail) {
            let area = item.mobile_detail.mobile_area || '';
            let operator = item.mobile_detail.network_operator || '';
            item.area = area + ' ' + operator;

            switch (item.register_source) {
              case 1:
                item.rs = 'PC';
                break;
              case 2:
                item.rs = 'mobile';
                break;
              default:
                item.rs = 'other';
            }
            return item;
          }
        });
      }
      return data;
    }

    const tableData = {
      columns: columns,
      pageSize: 10,
      url: webapi.member.getList,
      params: {
        status: 1
      },
      resolve: resolve,
      rowKey: record => record.id,
      isList: true
    };

    return (
      <div>
        <Modal
          title="会员资料"
          visible={this.state.modalVisble}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleOk.bind(this)}>
          <Row>
            <Col span="6" className="u-text-right u-mr-20 u-mb-20">用户名</Col>
            <Col span="12">{this.state.name || ' '}</Col>
          </Row>
          <Row>
            <Col span="6" className="u-text-right u-mr-20 u-mb-20">邮箱</Col>
            <Col span="12">{this.state.email || ' '}</Col>
          </Row>
          <Row>
            <Col span="6" className="u-text-right u-mr-20 u-mb-20">手机</Col>
            <Col span="12">{this.state.mobile || ' '}</Col>
          </Row>
          <Row>
            <Col span="6" className="u-text-right u-mr-20 u-mb-20">真实姓名</Col>
            <Col span="12">{this.state.realname || ' '}</Col>
          </Row>
          <Row>
            <Col span="6" className="u-text-right u-mr-20 u-mb-20">生日</Col>
            <Col span="12">{this.state.birthday || ' '}</Col>
          </Row>
        </Modal>
        <BaseList filters={filters} table={tableData}/>
      </div>
    );
  }
}
