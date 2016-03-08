'use strict';

var Table = antd.Table;
var Modal = antd.Modal;
var Button = antd.Button;
var Form = antd.Form;
var Select = antd.Select;
var Option = Select.Option;
var Input = antd.Input;
var message = antd.message;
var Popconfirm = antd.Popconfirm;
var Switch = antd.Switch;

import BaseForm from 'modules/page-components/base-form';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import Event from 'lite-flux/lib/event';
import BaseList from 'modules/page-components/base-list';
import MultiPurposeSelect from 'modules/multi-purpose-select-box/multi-purpose-select';
import Img from 'modules/components/img';

function tip(res) {
  res = res || {
    code: true,
    msg: '失败，服务器返回异常'
  };

  let method = res.code
    ? 'error'
    : 'success';
  message[method](res.msg);
}

var linkItems = [
  {
    name: '链接',
    key: 1
  }, {
      name: '分类',
      key: 2
    }, {
      name: '文章',
      key: 3
    }
  ],
  ENTITY_TYPE_CONST = {
    'article': 3,
    'category': 2,
    'link': 1
  };
var entityMap = {
  1: '链接',
  2: '分类',
  3: '文章'
};

var PictureUploadComponent = React.createClass({
  onChange: function (data) {
    if (this.props.onChange) {
      this.props.onChange(data[0].id);
    }
  },
  render: function () {
    return (<PictureUploader {...this.props} onChange={this.onChange}/>);
  }
});

var Input = React.createClass({
  getInitialState: function () {
    return {
      value: this.props.value || ''
    };
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value});
    }
  },
  onChange: function (e) {
    var value = e.target.value;

    this.setState({value: value});

    if (this.props.onChange) {
      this.props.onChange(value, e.target);
    }
  },
  render: function () {
    var style = {
      width: '5em'
    };
    return (<input style={style} className={'ant-input'} {...this.props} onChange={this.onChange} value={this.state.value}/>);
  }
});

// 获取容器内的表单域值
function getParams($wrap) {
  let inputSelector = '[name]';
  let $inputs = $wrap.find(inputSelector);
  let params = {};

  $inputs.each(function () {
    let $input = $(this);
    params[$input.attr('name')] = $input.val();
  });

  return params;
}

function handleList(data) {
  data.map(function (_data) {
    if (_data.children && _data.children.length) {
      handleList(_data.children);
    } else {
      delete _data['children'];
    }
  });
}

/* 文章节点管理 */
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      modal: {
        title: '温馨提示',
        passProps: null,
        type: null,
        visible: false,
        context: null
      }
    };
  },
  // 排序
  sort(id, type) {
    var self = this,
      method = 'sortNode';

    webapi.article[method]({article_node_id: id, action: type}).then(function (res) {
      if (res.code === 0)
        self.refreshData();

// 重刷数据
      tip(res);
    });
  },

  refreshData() {
    Event.emit('baselist-refresh');
  },

  onEditHeadline(node_id) {
    this.context.router.push(`/article/node/${node_id}/headlines`);
  },

  // 根据传递data来判定 添加or编辑
  // 根据parent_id判定 是否是添加子节点
  onEditNode(node, parent_id) {
    let self = this;
    parent_id = parent_id || 0;
    let isEdit = !!node;

    let modal = this.state.modal;
    let title = '添加节点';
    let type = 'add';
    let passProps = null;

    if (isEdit) {
      parent_id = node.parent_id;
      title = '编辑节点';
      type = 'edit';
      passProps = {
        parent_id: parent_id,
        id: node.id
      };
    }

    if (!isEdit && parent_id !== 0) {
      title = '添加子节点';
    }

    node = node || {};
    let NodeEditForm = React.createClass({
      getInitialState() {
        return {
          entity_type: node.entity_type || 0,
          entity_id: node.entity_id || ''
        };
      },
      nodeLinkChange(entity_type) {
        this.setState({
          entity_type: entity_type,
          entity_id: '' // 切换类型，重置值,
        });
      },
      saveNode(validator) {
        validator(function (isValid, validData) {
          if (!isValid) {
            return false;
          }

          var params = {};
          Object.keys(validData).forEach(function (key) {
            for (var name in validData[key]) {
              params[name] = validData[key][name] || '';
            }
          });

          if (+params.entity_type !== ENTITY_TYPE_CONST.link && !params.entity_id) {
            message.error('未关联对象！');
            return;
          }

          let modal = self.state.modal;
          let success = function (res) {
            if (res && !res.code) {
              modal.visible = false;
              self.refreshData(); // 重刷数据
              self.setState(modal);
              message.success('修改成功');
            } else {
              message.error(res.msg);
              modal.confirmLoading = false;
              self.setState(modal);
            }
          };

          if (modal.type === 'edit') {
            webapi.article.updateNode(node.id, params).then(success);
          } else {
            webapi.article.addNode(params).then(success);
          }
        }.bind(this));
      },

      render() {
        var self = this,
          cover_id = '';

        this.pictureData = [];

        if (node.cover) {
          this.pictureData.push({id: node.cover.media_id, url: node.cover.media.full_path});
          cover_id = node.cover.media_id;
        }

        let formField = [
          {
            formData: [
              {
                type: 'input',
                title: '节点名称',
                key: 'title',
                defaultValue: node.title || '',
                placeholder: '请输入节点名称',
                validator: {
                  required: true,
                  message: {
                    required: '必填，100字节'
                  }
                }
              }, {
                type: 'pictureUploader',
                title: '节点图片',
                key: 'cover_id',
                defaultValue: cover_id,
                render: function () {
                  var qiniuTokenParams = {
                    entity_id: node.id,
                    entity_type: 16,
                    type: 0
                  };

                  return (<PictureUploadComponent
                    qiniuTokenParams={qiniuTokenParams}
                    data={self.pictureData}
                    pictureLength="1"
                    removeSuccess={null}
                    uploadSuccess={null}
                    useQiniu={true}/>);
                }
              }, {
                type: 'select',
                title: '关联对象',
                key: 'entity_type',
                onChange: function (entity_type) {
                  self.nodeLinkChange(entity_type);
                },
                values: linkItems,
                defaultValue: node.entity_type || 1
              }
            ]
          }
        ];

        var linkFiled = {
          type: 'input',
          title: '链接',
          key: 'link',
          defaultValue: node.link || ''
        };
        var entity_type = +self.state.entity_type;

        if (entity_type === ENTITY_TYPE_CONST.article) {
          linkFiled = {
            type: 'custom',
            title: '文章id',
            key: 'entity_id',
            defaultValue: self.state.entity_id || '',
            render: function () {
              return (
                <MultiPurposeSelect value={self.state.entity_id} />
              );
            }
          };
        }

        if (entity_type === ENTITY_TYPE_CONST.category) {
          linkFiled = {
            type: 'custom',
            title: '分类id',
            key: 'entity_id',
            defaultValue: self.state.entity_id || '',
            render: function () {
              return (
                <MultiPurposeSelect value={self.state.entity_id} type="articleCategory" />
              );
            }
          }
        }

        var parent_id_filed = {
          type: 'hidden',
          key: 'parent_id',
          defaultValue: parent_id
        };

        formField[0].formData.push(linkFiled);
        formField[0].formData.push(parent_id_filed);

        var actionButtons = [
          {
            title: ' 确   定 ',
            onClick: function () {
              self.saveNode.apply(self, arguments);
            }
          }
        ];

        return (
          <BaseForm data={formField} actionButtons={actionButtons}/>
        );
      }
    });

    modal.visible = true;
    modal.title = title;
    modal.type = type;
    modal.passProps = passProps;
    modal.context = <NodeEditForm/>;

    this.setState(modal);
  },

  // 删除节点
  onRemoveNode(id) {
    let self = this;
    webapi.article.removeNode(id).then(function (res) {
      if (res && !res.code) {
        self.refreshData(); // 重刷数据
        message.success('删除节点成功');
      } else {
        message.error(res.msg);
      }
    });
  },

  switchShow(id, checked) {
    let params = {
      'ids': [id],
      'status': + checked
    };
    webapi.article.updateNodeStatus(params).then(function (res) {
      tip(res);
      self.refreshData(); // 重刷数据
    });
  },

  setDefault(id) {
    webapi.article.setDefault(id).then(res => {
      if (res.code === 0) {
        SP.message.success('设置成功');
        Event.emit('baselist-refresh');
      }
    });
  },

  render() {

    var self = this;

    var columns = [
      {
        title: '节点名称',
        dataIndex: 'title'
      }, {
        title: '图片',
        dataIndex: null,
        render: function (text, record) {
          var img = '无';
          if (record.cover && record.cover.media) {
            img = <Img src={record.cover.media.full_path} w={40} h={40}/>;
          }
          return (
            <span>{img}</span>
          );
        }
      }, {
        title: '关联对象',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>{entityMap[record.entity_type]}：
              {record.entity_type > 1 ? record.entity_id : record.link}
            </span>
          );
        }
      }, {
        title: '是否显示',
        dataIndex: null,
        render: function (text, record) {
          return (<Switch onChange={self.switchShow.bind(self, record.id)} checked={record.status}/>);
        }
      }, {
        title: '排序',
        dataIndex: null,
        render: function (text, record) {
          return (
            <span>
              <a href="javascript:;" onClick={self.sort.bind(self, record.id, 'top')}>置顶</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.sort.bind(self, record.id, 'up')}>上移</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.sort.bind(self, record.id, 'down')}>下移</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.sort.bind(self, record.id, 'bottom')}>置底</a>
            </span>
          );
        }
      }, {
        title: ' 操作',
        dataIndex: null,
        render: function (text, record) {
          let defaultSettingNode = null;
          if (!record.is_default) {
            defaultSettingNode = (
              <span>
                <a href="javascript:;" onClick={self.setDefault.bind(self, record.id)}>设为默认</a>
                <span className="ant-divider"></span>
              </span>
            );
          }
          return (
            <span>
              {defaultSettingNode}
              <a href="javascript:;" onClick={self.onEditNode.bind(self, null, record.id)}>添加子节点</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.onEditHeadline.bind(self, record.id)}>管理头条</a>
              <span className="ant-divider"></span>
              <a href="javascript:;" onClick={self.onEditNode.bind(self, record)}>编辑</a>
              <span className="ant-divider"></span>
              <Popconfirm title="警告：将删除节点及子节点，确定吗？" onConfirm={self.onRemoveNode.bind(self, record.id)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    let rowKey = function (record, index) {
      return record.id;
    };

    let resolve = function (result) {
      handleList(result.data || []);
      return result.data;
    };

    let tableData = {
      columns: columns,
      pagination: false,
      url: webapi.article.getNodeList,
      resolve: resolve,
      rowKey: rowKey
    };

    let actionButtons = [
      {
        title: '添加节点',
        onClick: function (selectedRows) {
          self.onEditNode();
        }
      }
    ];

    // modal已无footer，则自行管理关闭
    var hideModal = function () {
      self.setState({
        modal: {
          visible: false
        }
      });
    };

    return (
      <div className="node-list">
        <Modal
          title={this.state.modal.title}
          visible={this.state.modal.visible}
          confirmLoading={this.state.modal.confirmLoading}
          width={900}
          footer={null}
          onCancel={hideModal}>
          {this.state.modal.context}
        </Modal>
        <BaseList table={tableData} actionButtons={actionButtons}/>
      </div>
    );
  }
});
