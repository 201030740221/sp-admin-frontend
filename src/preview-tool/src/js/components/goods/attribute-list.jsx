'use strict';

import BaseList from 'modules/page-components/base-list';
import AttributeModal from './attribute-modal';
import AttributeValueModal from './attribute-value-modal';
import AttributeSectionModal from './attribute-section-modal';
import Event from 'lite-flux/lib/event';
import RequestProxy from 'modules/helpers/request-proxy';
import getValue from 'modules/helpers/get-value';
import {sortArray} from './utils';
import {
  Popconfirm,
  Select
} from 'antd';

const Goods = React.createClass({
  getInitialState: function () {
    return {
      record: null,
      attributeId: null,
      attrRecord: null,
      visible: false,
      attrModelVisible: false,
      sectionModelVisible: false,
      listData: [],
      sectionData: []
    };
  },
  componentDidMount: function () {
    this.getSectionData();
  },
  getSectionData: function () {
    if (+ this.props.params.typeId === 1) {
      webapi.goods.getAttributeSection({group_id: this.props.params.groupId}).then((res) => {
        if (res && !res.code) {
          this.setState({sectionData: res.data});
        }
      });
    }
  },
  setModalVisible: function (visible, node) {
    this.setState({
      visible: visible
    }, function () {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  },
  setAttrModalVisible: function (visible, node) {
    this.setState({
      attrModelVisible: visible
    }, function () {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
    });
  },
  setSectionModalVisible: function (visible, node) {
    var self = this;
    this.setState({
      sectionModelVisible: visible
    }, function () {
      ReactDom.unmountComponentAtNode($('.ant-modal-container')[0]);
      if (!visible) {
        self.getSectionData();
      }
    });
  },
  onShowModal: function (record, attributeId) {
    this.setState({record: record, attributeId: attributeId, visible: true});
  },
  onShowAttrModal: function (record) {
    this.setState({record: record, attrModelVisible: true});
  },
  onShowSectionModal: function () {
    this.setState({sectionModelVisible: true});
  },
  removeItem: function (id) {
    webapi.goods.removeAttribute({id: id, group_id: this.props.params.groupId}).then(RequestProxy(function (res) {
      Event.emit('baselist-refresh');
      SP.message.success('删除成功');
    }));
  },
  updateSort: function (sortType, index) {

    var list = [];
    this.state.listData.map(function (item) {
      list.push(item['goods_attribute_id']);
    });

    var ids = sortArray(list, index, sortType);

    webapi.goods.updateAttributeSort({attribute_ids: JSON.stringify(ids)}).then(function (res) {
      if (res && !res.code) {
        Event.emit('baselist-refresh');
        SP.message.success('排序成功');
      } else {
        SP.message.error('排序失败');
      }
    });

  },
  render: function () {
    let self = this;

    let attrText = +this.props.params.typeId === 0
      ? '属性'
      : '规格';

    let columns = [
      {
        title: '名称',
        dataIndex: '',
        width: 100,
        render: function (text, record) {
          return (
            <span>{getValue(record, 'attribute.name')}</span>
          );
        }
      }, {
        title: attrText + '值',
        dataIndex: '',
        render: function (text, record) {
          let values = getValue(record, 'attribute.value').map(function (value) {
            return (
              <antd.Tag onClick={self.onShowModal.bind(self, value, record.goods_attribute_id)} key={value.id}>{value.attribute_value}</antd.Tag>
            );
          });

          return (
            <span>
              {values}
              <antd.Tag onClick={self.onShowModal.bind(self, {}, record.goods_attribute_id)} color="blue">{'+' + attrText + '值'}</antd.Tag>
            </span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        width: 150,
        render: function (text, record, index) {
          return (
            <span>
              <a href="javascript:;" onClick={self.onShowAttrModal.bind(self, record)}>编辑</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.updateSort.bind(self, 'up', index)}>上移</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.updateSort.bind(self, 'down', index)}>下移</a>
              <span className="ant-divider"></span>
              <Popconfirm title={'确定要删除此' + attrText + '吗?'} onConfirm={self.removeItem.bind(self, record.goods_attribute_id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    //如果是规格，需要显示
    if (+ this.props.params.typeId === 1) {
      let actionCol = columns[2];
      columns[2] = {
        title: '类型',
        dataIndex: '',
        width: 100,
        render: function (text, record) {
          let handleChange = (val) => {
            var postData = {
              id: record.attribute.id,
              name: record.attribute.name,
              type: self.props.params.typeId,
              template_type: val
            };

            webapi.goods.updateAttribute(postData).then(function (res) {
              if (res && !res.code) {
                SP.message.success('编辑成功');
                Event.emit('baselist-refresh');
              } else {
                SP.message.error('编辑失败:' + res.msg);
              }
            });

          };
          return (
            <span>
              <Select
                value={record.attribute.template_type + ''}
                style={{
                  width: 90
                }}
                onChange={handleChange}>
                <Option value="1">固定规格</Option>
                <Option value="0">可变规格</Option>
              </Select>
            </span>
          );
        }
      };
      columns[3] = {
        title: '小节绑定',
        dataIndex: '',
        width: 150,
        render: function (text, record) {
          let handleChange = (id) => {
            webapi.goods.bindAttributeSection({attribute_section_id: id, attribute_id: record.attribute.id}).then((res) => {
              if (res && !res.code) {
                SP.message.success('绑定成功');
              } else {
                SP.message.error('绑定失败');
              }
            });
          };
          let options = self.state.sectionData.map((item) => {
            return <Option key={item.id}>{item.name}</Option>;
          });

          if (self.state.sectionData.length) {
            return (
              <span>
                <Select
                  defaultValue={record.attribute.section_attribute && record.attribute.section_attribute.goods_attribute_section_id + ''}
                  style={{
                    width: 150
                  }}
                  onChange={handleChange}>
                  {options}
                </Select>
              </span>
            );
          } else {
            return (
              <span>无小节信息</span>
            );
          }

        }
      };
      columns[4] = actionCol;
    }

    let actionButtons = [
      {
        title: '添加' + attrText,
        onClick: function (selectedRows) {
          self.onShowAttrModal({});
        }
      }
    ];

    if (+ this.props.params.typeId === 1) {
      actionButtons.push({
        title: '小节管理',
        onClick: function (selectedRows) {
          self.onShowSectionModal();
        }
      });
    }

    let resolve = function (result) {
      return result.data;
    };

    let rowKey = function (record, index) {
      return record.goods_attribute_id;
    };

    let tableData = {
      //rowSelection: true, // 是否出现选择框
      columns: columns,
      pageSize: 10,
      url: webapi.goods.getAttribute,
      params: { // 额外的请求参数
        attribute_group_id: this.props.params.groupId
      },
      resolve: resolve,
      rowKey: rowKey,
      onListDataChange: function (data) {
        self.setState({listData: data.data});
      }
      //isList: true
    };
    return (
      <div>
        <AttributeModal
          visible={this.state.attrModelVisible}
          record={this.state.record}
          setModalVisible={this.setAttrModalVisible}
          typeId={this.props.params.typeId}
          groupId={this.props.params.groupId}/>
        <AttributeValueModal
          visible={this.state.visible}
          record={this.state.record}
          setModalVisible={this.setModalVisible}
          attributeId={this.state.attributeId}/>
        <AttributeSectionModal
          visible={this.state.sectionModelVisible}
          setModalVisible={this.setSectionModalVisible}
          typeId={this.props.params.typeId}
          groupId={this.props.params.groupId}/>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>

    );
  }
});

module.exports = Goods;
