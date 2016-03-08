'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseList from 'modules/page-components/base-list';
import CategorySelector from 'modules/category-selector/category-selector';

const article_attributeMap = {
  1: '原创',
  2: '转载'
};

const CategorySearch = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data.id);
    }
  },
  render: function () {
    return (<CategorySelector type={this.props.type} onChange={this.onChange}/>);
  }
});

const Selector = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {visible: false, title: null, id: this.props.selected};
  },
  componentDidMount() {
    let self = this;
    if (this.state.id) {
      webapi.article.list({id: this.state.id}).then((res) => {
        if (res && !res.code) {
          self.setState({title: res.data.title, id: res.id});
        } else {
          self.setState({title: null, id: null});
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

    let data = {
      title: record.title,
      id: record.id
    };

    this.setState(data);

    if (this.props.onChange) {
      this.props.onChange(data);
    }

    this.setModalVisible(false);

  },
  render: function () {
    let self = this;

    let selectBtn = (
      <a href="javascript:;" onClick={this.onShowModal}>选择文章</a>
    );

    let columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      }, {
        title: '文章标题',
        dataIndex: 'title'
      }, {
        title: '文章分类',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>{record.category
                ? record.category.name
                : '未匹配分类'}</span>
          );
        }
      }, {
        title: '文章属性',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>{article_attributeMap[record.attribute]}</span>
          );
        }
      }, {
        title: '作者',
        dataIndex: 'author'
      }, {
        title: '状态',
        dataIndex: 'status',
        render: function (text, record) {
          return (
            <span>{record.status
                ? '未'
                : '已'}发布</span>
          );
        }
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
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
        title: '文章分类',
        key: 'category_id',
        defaultValue: null,
        type: 'other',
        render: function () {
          return (<CategorySearch type="article"/>);
        }
      }, {
        title: '文章名称',
        key: 'title',
        defaultValue: null,
        type: 'input'
      }, {
        title: '作者',
        key: 'author',
        defaultValue: null,
        type: 'input'
      }, {
        title: '状态',
        key: 'status',
        defaultValue: null,
        values: [
          {
            name: '所有状态',
            key: null,
            disabled: false
          }, {
            name: '未发布',
            key: 1,
            disabled: false
          }, {
            name: '已发布',
            key: '0',
            disabled: false
          }
        ],
        type: 'select'
      }, {
        title: '文章来源',
        key: 'create_source',
        defaultValue: null,
        values: [
          {
            name: '所有来源',
            key: null,
            disabled: false
          }, {
            name: '内部',
            key: 1,
            disabled: false
          }, {
            name: '外部',
            key: 2,
            disabled: false
          }
        ],
        type: 'select'
      }, {
        title: '文章属性',
        key: 'attribute',
        defaultValue: null,
        values: [
          {
            name: '所有属性',
            key: null,
            disabled: false
          }, {
            name: '原创',
            key: 1,
            disabled: false
          }, {
            name: '转载',
            key: 2,
            disabled: false
          }
        ],
        type: 'select'
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
      url: webapi.article.list,
      params: { // 额外的请求参数
        //sku_status: 1
      },
      resolve: resolve,
      rowKey: rowKey,
      isList: true
    };

    let modalProps = {
      title: '选择文章',
      component: <BaseList filters={filters} table={tableData}/>,
      setModalVisible: this.setModalVisible,
      visible: this.state.visible,
      width: 1000
    };

    if (this.state.id) {
      return (
        <div>
          <BaseModal {...modalProps}/>
          <p className="ant-form-text">{this.state.title}</p>
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
