
var StepsComponent = require('modules/steps-component/steps-component');

var myComponent = React.createClass({
  getInitialState() {
      return {
          orderData: this.props.orderData || {}
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData || {}
        });
    },
  render: function ()  {

      let orderData = this.state.orderData;

      let _status_title = '', current_length = 0;
      let statusLog = orderData.status_log || [];
      let init_date = statusLog[statusLog.length - 1];

      let _status_date = init_date ? init_date.created_at : '',
          _status_date_1 = init_date ? init_date.created_at : '',
          _status_date_2 = init_date ? init_date.created_at : '',
          _status_date_3 = init_date ? init_date.created_at : '';

      switch (orderData.status_id) {

          case 1:

            _status_title = '等待付款';
            current_length = 1;
            _status_date_1 = null;
            _status_date_2 = null;
            _status_date_3 = null;
            break;

          case 2:

            _status_title = '付款成功';
            current_length = 1;
            _status_date_1 = null;
            _status_date_2 = null;
            _status_date_3 = null;
            break;

          case 3:

            _status_title = '付款成功';
            _status_date = statusLog[statusLog.length - 2] ? statusLog[statusLog.length - 2].created_at:'';
            current_length = 2;
            _status_date_2 = null;
            _status_date_3 = null;
            break;

          case 4:

            _status_title = '付款成功';
            current_length = 3;
            _status_date = statusLog[1] ? statusLog[1].created_at:'';
            _status_date_1 = statusLog[2] ? statusLog[2].created_at:'';
            _status_date_2 = statusLog[3] ? statusLog[3].created_at:'';
            _status_date_3 = null;
            break;

          case 5:

            _status_title = '付款成功';
            current_length = 4;
            _status_date = statusLog[1] ? statusLog[1].created_at:'';
            _status_date_1 = statusLog[2] ? statusLog[2].created_at:'';
            _status_date_2 = statusLog[3] ? statusLog[3].created_at:'';
            _status_date_3 = statusLog[4] ? statusLog[4].created_at:'';
            break;

          case 6:

            _status_title = '已取消';
            current_length = 1;
            _status_date_1 = null;
            _status_date_2 = null;
            _status_date_3 = null;
            break;

        }

      let stepsData = [{
          title: '提交订单',
          description: orderData.created_at
        }, {
          title: _status_title,
          description: _status_date
        }, {
          title: '等待发货',
          description: _status_date_1
        }, {
          title: '等待收货',
          description: _status_date_2
        }, {
          title: '已完成',
          description: _status_date_3
        }];

      return (
            <StepsComponent current={current_length} stepsData={stepsData} />
        );
    }

});

module.exports = myComponent;
