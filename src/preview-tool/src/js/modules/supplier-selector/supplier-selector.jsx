'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseList from 'modules/page-components/base-list';

var Selector = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {visible: false, name: null, id: this.props.selected};
  },
  componentDidMount() {
    let self = this;
    if (this.state.id) {
      webapi.supplier.get({id: this.state.id}).then((res) => {
        if (res && !res.code) {
          self.setState({name: res.data.name, id: res.id});
        }
      });
    }
  },
  modalCallback() {
    this.setModalVisible(false);
  },
  onShowModal: function () {
    this.setModalVisible(true);
  },
  onSelect: function (record) {

    this.setState({name: record.name, id: record.id});

    if (this.props.onChange) {
      this.props.onChange(record.id);
    }

    this.setModalVisible(false);

  },
  render: function () {
    let self = this;

    let selectBtn = (
      <a href="javascript:;" onClick={this.onShowModal}>选择供应商</a>
    );

    let columns = [
      {
        title: '供应商名称',
        dataIndex: 'name'
      }, {
        title: '供应商编号',
        dataIndex: 'no'
      }, {
        title: '操作',
        dataIndex: 'id',
        render: function (id, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onSelect.bind(self, record)}>选择</a>
            </span>
          );
        }
      }
    ];

    let filters = [
      {
        title: '供应商名称',
        key: 'name',
        defaultValue: null,
        type: 'input'
      }, {
        title: '供应商编号',
        key: 'no',
        defaultValue: null,
        type: 'input'
      }
    ];

    let resolve = function (result) {
      return result.data && result.data.data || [];
    };

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      columns: columns,
      pageSize: 5,
      url: webapi.supplier.get,
      params: { // 额外的请求参数
        //sku_status: 1
      },
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };

    let modalProps = {
      title: '选择供应商',
      component: <BaseList filters={filters} table={tableData}/>,
      setModalVisible: this.setModalVisible,
      visible: this.state.visible,
      width: 800
    };

    if (!this.state.supplier) {
      return (
        <div>
          <BaseModal {...modalProps}/>
          <p className="ant-form-text">{this.state.name}</p>
          <p className="ant-form-text">{selectBtn}</p>
        </div>
      );
    } else {
      return (
        <div>
          <BaseModal {...modalProps}/>
          <p className="ant-form-text">{selectBtn}</p>
        </div>
      );
    }
  }
});

module.exports = Selector;
