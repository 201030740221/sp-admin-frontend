'use strict';

import {
  Popconfirm
} from 'antd';
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';
import AttrsModal from './attrs-modal';
import SkuEditModal from './sku-edit-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';

const CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector type="product" onChange={this.onChange}/>);
  }
});

const Goods = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {record: null, visible: false};
  },
  onShowModal: function (record) {
    this.setState({record: record, visible: true});
  },
  removeSku: function (id) {
    webapi.erp.removeProductSku(id).then(function (res) {
      if (res && !res.code) {
        SP.message.success('删除成功');
      } else {
        SP.message.error('删除失败');
      }
      Event.emit('baselist-refresh');
    });
  },
  render: function () {

    let self = this;

    let columns = [
      {
        title: 'SKU编号',
        dataIndex: 'sku_sn'
      }, {
        title: '产品编号',
        dataIndex: 'product_sn'
      }, {
        title: '规格',
        dataIndex: 'attribute_name'
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onShowModal.bind(self, record)}>查看</a>
              <span className="ant-divider"></span>
              <Popconfirm title="确定要删除这条SKU吗？" onConfirm={self.removeSku.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        render: function () {
          return (<AttrsModal productId={self.props.params.id}/>);
        }
      }
    ];

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      columns: columns,
      pageSize: 10,
      url: webapi.erp.productSkuList,
      params: { // 额外的请求参数
        product_id: this.props.params.id,
        //product_category_id: 1
      },
      resolve: resolve,
      rowKey: rowKey
    };

    return (
      <div>
        <h3 className="panel-heading u-mb-20">编辑SKU</h3>
        <SkuEditModal visible={this.state.visible} record={this.state.record} setModalVisible={this.setModalVisible}/>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
});

module.exports = Goods;
