import {Table} from 'antd';

var thisComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {orderData: this.props.orderData};
  },
  componentDidMount: function () {},
  componentWillReceiveProps: function (nextProps) {
    this.setState({orderData: nextProps.orderData});
  },
  turn: function (id) {
    this.context.router.push('/order/print/' + id);
  },
  render: function () {

    let self = this;
    let orderData = this.state.orderData;
    let document = [];

    let columns = [
      {
        title: '名称',
        dataIndex: ''

      }, {
        title: '采购单',
        dataIndex: ''

      }, {
        title: '入库单',
        dataIndex: ''
      }
    ];

    let rowKey = function (record, index) {
      return index;
    };

    if (orderData.status_id === 1 || orderData.status_id === 6) {
      return null;
    }

    return (
      <div className='u-mt-50'>
        <div className="row">
          <button
            type="button"
            style={{
              float: 'left'
            }}
            className="ant-btn ant-btn-primary ant-btn-lg u-ml-10"
            onClick={this.turn.bind(null, orderData.id)}>打印用户收货单</button>
        </div>
        <div className="row u-mt-15">
          <div className="col-12"></div>
        </div>
      </div>
    );
  }

});

module.exports = thisComponent;
