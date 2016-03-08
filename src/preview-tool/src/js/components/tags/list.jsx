'use strict';

//import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import BaseList from 'modules/page-components/base-list';
import CreateTagModal from './create-tag-modal';
import Event from 'lite-flux/lib/event';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: null
    };
  }
  setModalVisible(visible) {
    this.setState({
      visible: visible
    }, () => {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  }
  onShowModal(record) {
    this.setState({record: record, visible: true});
  }
  handleDelete(record) {
    webapi.tags.tag.remove(record.id).then((res) => {
      if (res && !res.code) {
        SP.message.success('删除成功');
        Event.emit('baselist-refresh');
      } else {
        SP.message.error(res.msg);
      }
    });
  }
  render() {

    let columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '名称',
        dataIndex: 'name'
      }, {
        title: 'className',
        dataIndex: 'fn_class'
      }, {
        title: '修改时间',
        dataIndex: 'updated_at'
      }, {
        title: '创建时间',
        dataIndex: 'created_at'
      }, {
        title: '操作',
        dataIndex: '',
        render: (text, record) => {
          return (
            <span>
              <a href="javascript:;" onClick={this.onShowModal.bind(this, record)}>编辑</a>
              <span className="ant-divider"></span>
              <antd.Popconfirm title="确定要删除这个标签吗？" onConfirm={this.handleDelete.bind(this, record)}>
                <a href="javascript:;">删除</a>
              </antd.Popconfirm>
            </span>
          );
        }
      }
    ];

    let actionButtons = [
      {
        title: '新增标签',
        onClick: () => {
          this.onShowModal({});
        }
      }
    ];

    let rowKey = (record) => {
      return record.id;
    };

    let resolve = (record) => {
      return record.data;
    };

    let tableData = {
      //rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.tags.tag.find,
      params: { // 额外的请求参数
        type: this.props.params.type
      },
      resolve: resolve,
      rowKey: rowKey
      //isList: true
    };
    return (
      <div>
        <CreateTagModal
          type={this.props.params.type}
          visible={this.state.visible}
          record={this.state.record}
          setModalVisible={this.setModalVisible.bind(this)}/>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
}
