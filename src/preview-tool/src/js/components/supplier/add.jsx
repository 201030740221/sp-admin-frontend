'use strict';

import Form from './supplier-form';

const AddSupplier = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onSubmit: function (data) {
    var postData = {};
    delete data.fieldError;

    for (var key in data) {
      postData = $.extend(postData, data[key]);
    }

    webapi.supplier.add(postData).then((res) => {
      if (res && !res.code) {
        SP.message.success('保存成功！');
        this.context.router.push('/supplier/list');
      } else {
        SP.message.error('保存失败，请检查输入！');
      }
    }).fail((res) => {
      SP.message.error('网路出错！');
    });
    // 阻止默认提交事件
    return false;
  },
  render: function () {
    return <Form onSubmit={this.onSubmit}/>;
  }
});

module.exports = AddSupplier;
