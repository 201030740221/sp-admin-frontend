'use strict';

const BaseList = require('modules/page-components/base-list');
import { Link } from 'react-router';

export default class ReferralList extends React.Component {
  displayName: 'ReferralList'
  constructor(props) {
    super(props);
  }

  handleData(total, points) {
    this.refs.total.innerHTML = total;
    this.refs.points.innerHTML = points;
  }

  render() {
    const columns = [
      {
        title: '用户名',
        dataIndex: 'invitee_name'
      }, {
        title: '注册时间',
        dataIndex: 'register_at'
      }, {
        title: '奖励积分',
        dataIndex: 'point'
      }
    ];

    const resolve = res => {
      let data = [];
      if (res.data && res.data.data) {
        this.handleData(res.data.total, res.data.total_points);
        data = res.data.data;
      }
      return data;
    };

    const tableData = {
      columns: columns,
      pageSize: 10,
      url: webapi.tools.getReferralList,
      params: {
        id: this.props.params.id
      },
      resolve: resolve,
      rowKey: record => record.id,
      isList: true
    };

    const listBtns = [
      {
        title: '返回用户列表',
        render: () => {
          return (
            <Link className="ant-btn ant-btn-primary u-fr u-ml-10" to="/member">{'返回用户列表'}</Link>
          );
        }
      }
    ];

    return (
      <div>
        <h1>
          <span>{'推荐人数：'}</span>
          <span className="u-pr-20" ref="total"></span>
          <span>{'所获积分：'}</span>
          <span ref="points"></span>
        </h1>
        <BaseList actionButtons={listBtns} table={tableData}/>
      </div>
    );
  }
}
