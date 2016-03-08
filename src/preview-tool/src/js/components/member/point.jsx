const BaseList = require('modules/page-components/base-list');
const Event = require('lite-flux/lib/event');
import BaseForm from 'modules/page-components/base-form';
import { Link } from 'react-router';
import {Row, Col, Modal, Botton} from 'antd';

export default class PointList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false
    };
  }

  // componentDidMount() {
  // }

  handlePoint(ap, tp) {
    this.refs._ap.innerHTML = ap;
    this.refs._tp.innerHTML = tp;
  }

  handleModal(show) {
    this.setState({modalVisble: show});
  }

  handleOk() {
    this.setState({modalVisble: false});
  }

  handleCancel() {
    this.setState({modalVisble: false});
  }

  setPoint(data) {
    const _this = this;
    let postData = {};
    data = data[0];
    postData.member_id = this.props.params.id;
    postData.point = data.type === 'add'
      ? + data.amount
      : -data.amount;
    postData.remarks = data.remarks;
    webapi.member.adjustPoint(postData).then(res => {
      if (res.code === 0) {
        SP.message.success('调整成功');
        Event.emit('baselist-refresh');
        _this.handleCancel();
      } else {
        SP.message.error('出错了～');
      }
    });
  }

  render() {
    const _this = this;
    const columns = [
      {
        title: '来源/用途',
        dataIndex: 'type_name'
      }, {
        title: '积分变化',
        dataIndex: 'operational_point'
      }, {
        title: '日期',
        dataIndex: 'updated_at'
      }, {
        title: '备注',
        dataIndex: 'remarks'
      }, {
        title: '操作人',
        dataIndex: 'operator'
      }
    ];

    const resolve = res => {
      let data = [];
      if (res.data && res.data.data) {
        this.handlePoint(res.data.points.available_point, res.data.points.total_point);
        data = res.data.data;
      }
      return data;
    };

    const tableData = {
      columns: columns,
      pageSize: 10,
      url: webapi.member.getPointList,
      params: {
        member_id: this.props.params.id
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
      }, {
        title: '积分调整',
        onClick: () => this.handleModal(true)
      }
    ];

    const formData = [
      {
        title: '',
        formData: [
          {
            type: 'input',
            title: '积分数',
            key: 'amount',
            validator: {
              required: true,
              digits: true,
              message: {
                required: '必填',
                digits: '整数'
              }
            }
          }, {
            type: 'radio',
            title: '调整',
            key: 'type',
            defaultValue: 'add',
            values: [
              {
                name: '增加',
                key: 'add',
                disabled: false
              }, {
                name: '减少',
                key: 'dec',
                disabled: false
              }
            ]
          }, {
            type: 'textarea',
            title: '备注',
            key: 'remarks',
            defaultValue: '',
            placeholder: '',
            validator: {
              maxLength: 50,
              message: {
                maxLength: '最多50字'
              }
            }
          }
        ]
      }
    ];

    const formBtns = [
      {
        title: '保 存',
        onClick: (validator) => {
          validator((isValid, validData) => {
            if (!isValid) {
              SP.message.error('填写有误！');
            } else {
              _this.setPoint(validData);
            }
          });
        }
      }, {
        title: '取消',
        onClick: () => this.handleCancel()
      }
    ];

    return (
      <div>
        <h1>
          <span>可用积分：</span>
          <span className="u-pr-20" ref="_ap"></span>
          <span>历史总积分：</span>
          <span ref="_tp"></span>
        </h1>
        <Modal title="积分调整" visible={this.state.modalVisble} footer={false} onCancel={this.handleCancel.bind(this)}>
          <BaseForm data={formData} actionButtons={formBtns}/>
        </Modal>
        <BaseList table={tableData} actionButtons={listBtns}/>
      </div>
    );
  }
}
