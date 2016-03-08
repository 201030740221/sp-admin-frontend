'use strict';

import BaseList from 'modules/page-components/base-list';
import AttributeGroupModal from './attribute-group-modal';
import Event from 'lite-flux/lib/event';
import RequestProxy from 'modules/helpers/request-proxy';
import getValue from 'modules/helpers/get-value';
import {
  Popconfirm
} from 'antd';

const Page = React.createClass({
  setModalVisible: function (visible, node) {
    this.setState({
      visible: visible
    }, function () {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  },
  getInitialState: function () {
    return {record: null, visible: false};
  },
  onShowModal: function (record) {
    this.setState({record: record, visible: true});
  },
  removeItem: function (id) {
    webapi.goods.removeAttributeGroup({id: id}).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('删除成功');
    }));
  },
  render: function () {
    let self = this;
    let attrText = this.props.typeId === 0
      ? '属性'
      : '规格';

    let columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '名称',
        dataIndex: '',
        render: function (text, record) {
          return (
            <a href={'#/goods/attribute/' + self.props.typeId + '/' + record.id}>{getValue(record, 'name')}</a>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onShowModal.bind(self, record)}>编辑</a>
              <span className="ant-divider"></span>
              <Popconfirm title={'确定要删除此' + attrText + '组吗?'} onConfirm={self.removeItem.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '添加' + attrText + '组',
        onClick: function (selectedRows) {
          self.onShowModal({});
        }
      }
    ];

    // let resolve = function(result){
    //    return result.data;
    // }

    let rowKey = function (record, index) {
      return record.id;
    };

    let tableData = {
      // rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.goods.getAttributeGroup,
      params: { // 额外的请求参数
        type: this.props.typeId
      },
      // resolve: resolve,
      rowKey: rowKey,
      isList: true
    };
    return (
      <div>
        <AttributeGroupModal
          visible={this.state.visible}
          record={this.state.record}
          setModalVisible={this.setModalVisible}
          typeId={this.props.typeId}/>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
});

module.exports = Page;
