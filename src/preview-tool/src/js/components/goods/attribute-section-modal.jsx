'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';
import {
  Button,
  Table
} from 'antd';
import getValue from 'modules/helpers/get-value';
import {sortArray} from './utils';

const InputBox = React.createClass({
  getInitialState: function () {
    return {id: this.props.itemId, val: this.props.val, oldval: this.props.val};
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({checked: nextProps.val});
  },
  onChange: function (e) {
    let val = e.target.value;
    this.setState({val: val});
  },
  getOldVal: function (e) {
    let val = e.target.value;
    this.setState({oldval: val});
  },
  updateVal: function (e) {

    let val = e.target.value;

    if (this.props.onBlur) {
      this.props.onBlur(this.state.id, val, this.state.oldval);
    }
  },
  render: function () {
    return (<input
      type="text"
      className="ant-input"
      onFocus={this.getOldVal}
      onBlur={this.updateVal}
      onChange={this.onChange}
      value={this.state.val}/>);
  }
});

const Selector = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    this.getData();
  },
  getData: function () {
    webapi.goods.getAttributeSection({group_id: this.props.groupId}).then((res) => {
      if (res && !res.code) {
        this.setState({data: res.data});
      }
    });
  },
  addSection: function () {
    var self = this;
    webapi.goods.addAttributeSection({group_id: this.props.groupId, name: '未命名小节', sort: 0}).then((res) => {
      if (res && !res.code) {
        self.getData();
        SP.message.success('添加成功');
      } else {
        SP.message.error('添加失败:' + res.msg);
      }
    });
  },
  removeSection: function (id) {
    var self = this;
    webapi.goods.removeAttributeSection({id: id}).then((res) => {
      if (res && !res.code) {
        self.getData();
        SP.message.success('删除成功');
      } else {
        SP.message.error('删除失败:' + res.msg);
      }
    });
  },
  updateSection: function (id, val, oldval) {
    if (val !== oldval) {
      webapi.goods.updateAttributeSection({id: id, name: val}).then((res) => {
        if (res && !res.code) {
          SP.message.success('修改成功');
        } else {
          SP.message.error('修改失败:' + res.msg);
        }
      });
    }
  },
  updateSort: function (sortType, index) {

    var self = this;
    var list = [];
    this.state.data.map(function (item) {
      list.push(item['id']);
    });

    var ids = sortArray(list, index, sortType);

    webapi.goods.sortAttributeSection({attribute_section_ids: JSON.stringify(ids)}).then(function (res) {
      if (res && !res.code) {
        self.getData();
        SP.message.success('排序成功');
      } else {
        SP.message.error('排序失败');
      }
    });

  },
  render: function () {
    let self = this;

    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        render: function (text, record) {
          return <InputBox itemId={record.id} onBlur={self.updateSection} val={getValue(record, 'name')}/>;
        }
      }, {
        title: '操作',
        key: 'operation',
        render: function (text, record, index) {
          return <span>
            <a onClick={self.updateSort.bind(self, 'up', index)} href="javascript:;">上移</a>
            <span className="ant-divider"></span>
            <a onClick={self.updateSort.bind(self, 'down', index)} href="javascript:;">下移</a>
            <span className="ant-divider"></span>
            <a onClick={self.removeSection.bind(self, record.id)} href="javascript:;">删除</a>
          </span>;
        }
      }
    ];

    let rowKey = function (record, index) {
      return record.id;
    };

    let modalProps = {
      title: '小节管理',
      component: (
        <div>
          <div style={{
            marginBottom: 16
          }}>
            <Button type="primary" onClick={this.addSection}>新增小节</Button>
          </div>
          <Table columns={columns} childrenColumnName={'xx'} rowKey={rowKey} dataSource={this.state.data}/>
        </div>
      ),
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 500,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps}/>;
  }
});

module.exports = Selector;
