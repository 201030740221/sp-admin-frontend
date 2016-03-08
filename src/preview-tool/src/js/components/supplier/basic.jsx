'use strict';

// var liteFlux = require('lite-flux');
import Form from './supplier-form';

const Basic = React.createClass({
  getInitialState: function () {
    // liteFlux.store( 'supplier', {
    //     data: {
    //         currentSupplier: ''
    //     }
    // });
    return {data: {}};
  },
  componentDidMount: function () {
    webapi.supplier.get({id: this.props.id}).then((res) => {
      if (res.code === 0) {
        // liteFlux.store('supplier').setStore({
        //     currentSupplier: res.data.name
        // });
        this.setState({data: res.data});
      }
    });
  },
  onSubmit: function (data) {
    var postData = {};
    for (var key in data) {
      postData = $.extend(postData, data[key]);
    }
    postData.cooperation_time = moment(postData.cooperation_time).format('YYYY-MM-DD HH:mm:ss');
    postData.id = this.props.id;
    webapi.supplier.edit(postData).then((res) => {
      if (res && !res.code) {
        SP.message.success('保存成功！');
      } else {
        SP.message.error('保存失败！');
      }
    }).fail((res) => {
      SP.message.error('网路出错！');
    });
  },
  render: function () {
    return (<Form data={this.state.data} onSubmit={this.onSubmit}/>);
  }
});

module.exports = Basic;
