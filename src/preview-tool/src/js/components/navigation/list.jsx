'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {sortArray} from '../goods/utils';
import CreateNavigationModal from './create-navigation-modal.jsx';
import getValue from 'modules/helpers/get-value';

export default class List extends React.Component {
  static displayName = 'NavigationList';
  static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: null,
      id: props.params.id || null,
      data: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    let data = {};
    if (this.props.params.id) {
      data.id = this.props.params.id;
    }
    webapi.navigation.getNavigationList(data).then((res) => {
      if (res && !res.code) {
        this.setState({id: this.props.params.id, data: res.data.nodes});
      }
    });
  }
  setModalVisible(visible) {
    this.setState({
      visible: visible
    }, () => {
      this.getData();
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  }
  onShowModal(record, e) {
    e && e.preventDefault();
    this.setState({record: record, visible: true});
  }
  handleSetStatus(item, e) {
    e.preventDefault();
    let data = {
      ids: [item.id],
      status: [item.status === 1
          ? 0
          : 1]
    };
    webapi.navigation.updateNavigationStatusMultiply(data).then((res) => {
      if (res && !res.code) {
        this.getData();
        SP.message.success('修改成功');
      } else {
        SP.message.error(res.msg);
      }
    });
  }
  handleDelete(item, e) {
    e.preventDefault();
    let data = {
      id: item.id
    };
    webapi.navigation.deleteNavigation(data).then((res) => {
      if (res && !res.code) {
        this.getData();
        SP.message.success('删除成功');
      } else {
        SP.message.error(res.msg);
      }
    });
  }
  handleUpdateSort(sortType, index, e) {
    e.preventDefault();
    let self = this;
    let list = [];
    let data = {
      ids: [],
      sort_ids: []
    };
    this.state.data.map(function (item, dataIndex) {
      list.push(item.id);
      data.sort_ids.push(dataIndex + 1);
    });

    data.ids = sortArray(list, index, sortType);

    webapi.navigation.updateNavigationSortIdMultiply(data).then((res) => {
      if (res && !res.code) {
        self.getData();
        SP.message.success('排序成功');
      } else {
        SP.message.error('排序失败');
      }
    });
  }
  addNavigation(e) {
    e.preventDefault();
    this.onShowModal({});
  }
  render() {
    let self = this;

    let columns = [
      {
        title: '栏目名称',
        dataIndex: 'name',
        render: (text, record) => {
          if (this.props.params.id) {
            return (
              <span>{getValue(record, 'name')}</span>
            );
          }
          return (
            <a href={'#/navigation/' + record.id}>{getValue(record, 'name')}</a>
          );
        }
      }, {
        title: '链接',
        dataIndex: '',
        render: function (text, record) {
          let host = 'http://' + location.host.replace('admin', 'www');
          let previewUrl = host + '/' + record.real_uri;
          return (
            <a href={previewUrl} target="_blank">{previewUrl}</a>
          );
        }
      }, {
        title: '状态',
        dataIndex: '',
        render: function (text, record) {
          let status = '已禁用';
          if (record.status === 1) {
            status = '已启用';
          }
          return (
            <span>{status}</span>
          );
        }
      }, {
        title: '排序',
        dataIndex: '',
        render: function (text, record, index) {
          let upButton = (
            <a href="#" onClick={self.handleUpdateSort.bind(self, 'up', index)}>上移</a>
          );
          let downBotton = (
            <a href="#" onClick={self.handleUpdateSort.bind(self, 'down', index)}>下移</a>
          );
          if (index === 0) {
            upButton = (
              <span>上移</span>
            );
          }

          if (index === self.state.data.length - 1) {
            downBotton = (
              <span>下移</span>
            );
          }
          return (
            <span>
              {upButton}
              <span className="ant-divider"></span>
              {downBotton}
            </span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          let actionMenu = (
            <span>
              <span className="ant-divider"></span>
              <a href="#" onClick={self.handleSetStatus.bind(self, record)}>启用</a>
              <span className="ant-divider"></span>
              <antd.Popconfirm title="确定要删除这个栏目吗？" onConfirm={self.handleDelete.bind(self, record)}>
                <a href="#">删除</a>
              </antd.Popconfirm>
            </span>

          );
          if (record.status === 1) {
            actionMenu = (
              <span>
                <span className="ant-divider"></span>
                <a href="#" onClick={self.handleSetStatus.bind(self, record)}>禁用</a>
              </span>
            );
          }
          return (
            <span>
              <a href="#" onClick={self.onShowModal.bind(self, record)}>编辑</a>
              {actionMenu}
            </span>
          );
        }
      }
    ];

    if (this.props.params.id) {
      columns.unshift({
        title: '图片',
        dataIndex: '',
        render: (text, record) => {
          return (
            <span><img width="100" src={getValue(record, 'cover.media.full_path')}/></span>
          );
        }
      });
    }

    function rowKey(record) {
      return record.id;
    }

    let createBtnName = '新建栏目';
    let backBtn = '';
    if (this.props.params.id) {
      createBtnName = '新建子栏目';
      backBtn = (
        <antd.Button
          type="primary"
          style={{
            marginRight: 10
          }}
          onClick={() => {
            window.history.back();
          }}>
          返回
        </antd.Button>
      );
    }

    let publishBtn = (
      <antd.Button
        type="primary"
        style={{
          marginRight: 10
        }}
        onClick={() => {
          webapi.navigation.publish().then((res) => {
          if (res && !res.code) {
            SP.message.success('发布成功');
          } else {
            SP.message.error('发布失败');
          }
        });
        }}>
        发布
      </antd.Button>
    );

    return (
      <div>
        <CreateNavigationModal
          id={this.state.id}
          record={this.state.record}
          setModalVisible={this.setModalVisible.bind(this)}
          visible={this.state.visible} />
        <div style={{
          marginBottom: 16
        }}>
          {backBtn}
          {publishBtn}
          <antd.Button onClick={this.addNavigation.bind(this)} type="primary">
            {createBtnName}
          </antd.Button>
        </div>
        <antd.Table childrenColumnName={'xx'} columns={columns} rowKey={rowKey} dataSource={this.state.data}/>
      </div>
    );
  }
}
