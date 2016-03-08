'use strict';

import PreviewBtn from './preview-btn';
import {
  Table,
  message
} from 'antd';

const myComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps() {
    return {params: {}};
  },
  getInitialState() {
    return {data: [], type: ''};
  },
  getList() {
    var self = this;
    webapi.frame.pageModule().then(function (res) {
      //console.log(res);
      var data = [];
      var type = 'page';
      var parent = null;
      var _platform = null;
      if (res && res.code === 0) {
        if (!self.props.params.platform) {
          for (var _data in res.data) {
            var item = {
              name: _data,
              type: 'platform',
              title: _data === 'pc'
                ? 'PC端页面'
                : 'Mobile端页面'
            };
            data.push(item);
          }
        } else {
          var platform = self.props.params.platform;
          var params_name = self.props.params.name;
          if (params_name === 'all') {
            _platform = {
              name: platform,
              type: 'platform',
              title: platform === 'pc'
                ? 'PC端页面'
                : 'Mobile端页面'
            };
            for (var _data in res.data[platform]) {
              var item = {
                name: _data,
                type: 'page',
                title: res.data[platform][_data].name
              };
              data.push(item);
            }
          } else { // 如果获取页面列表
            type = 'module';
            if (res.data[platform][params_name]) {
              parent = {
                name: params_name,
                type: 'page',
                title: res.data[platform][params_name].name
              };
              if (res.data[platform][params_name].module.length !== 0) {
                for (var _d in res.data[platform][params_name].module) {
                  var _modules = {
                    name: _d,
                    type: 'module',
                    title: res.data[platform][params_name].module[_d].name
                  };
                  data.push(_modules);
                }

                // 暂时去掉首页主题搭配管理 2016-01-07
                // 如果是首页，加入主题搭配
                // if(params_name==="index"){
                //     data.push({
                //         name: "theme",
                //         type: "module",
                //         title: "主题搭配"
                //     })
                // }

              }
            }

          }
        }

        self.setState({data: data, type: type, parent: parent, platform: _platform});
      } else if (res && res.code === 40001) {
        message.error(res.msg);
      }
    });
  },
  componentDidMount() {
    this.getList();
  },
  componentWillReceiveProps(nextProps) {
    this.getList();
  },
  enterModuleList(name) {
    this.setState({pageName: name});
  },
  render() {

    let self = this;

    var columns = [
      {
        title: '页面名称',
        dataIndex: 'title'
      }, {
        title: '操作',
        dataIndex: '',
        render: function (text, record) {
          var transitionPageList = function () {
            if (self.state.parent) {
              self.context.router.push('/frame/pages/' + self.state.parent.name + '/' + record.name);
            } else {
              self.context.router.push('/frame/pages/' + record.name + '/all');
            }
          };
          var transitionModuleList = function () {
            self.context.router.push('/frame/pages/' + self.state.platform.name + '/' + record.name);
          };
          var transitionEditModule = function () {
            if (self.state.parent.name === 'index' && record.name === 'category') {
              self.context.router.push('/frame/module/' + self.state.parent.name + '/category-list');
            } else {
              self.context.router.push('/frame/module/' + self.state.parent.name + '/' + record.name);
            }

          };

          if (record.type === 'platform') {
            return (<span>
              <a href="javascript:;" onClick={transitionPageList}>进入页面管理</a>
            </span>);
          } else if (record.type === 'page') {
            return (<span>
              <a href="javascript:;" onClick={transitionModuleList}>进入模块列表</a>
            </span>);
          } else {
            return (<span>
              <a href="javascript:;" onClick={transitionEditModule}>编辑模块</a>
            </span>);
          }

        }
      }
    ];

    var total = this.state.data.length;
    var data = this.state.data;

    var pagination = {
      total: total,
      current: 1
    };

    var rowKey = function (data) {
      return data.name;
    };

    var leftBar = (
      <div>
        <a className="btn btn-primary" href="#">
          <i className="anticon anticon-cross"></i>
        </a>
        <span className="home-preview-topbar-title">PC网站页面</span>
      </div>
    );

    var transitionPages = function () {
      window.history.back();
    };
    var returnBtn = function () {
      if (self.state.parent || (self.state.platform && !self.state.parent)) {
        return (
          <div className="fl">
            <button className="ant-btn ant-btn-primary" onClick={transitionPages}>
              <span className="anticon anticon-left"></span>
              <span className="ml10">返回</span>
            </button>
            <span className="ml10">
              当前页面：{(self.state.parent && self.state.parent.title) || (self.state.platform && self.state.platform.title)}
            </span>
          </div>

        );
      }
    };
    return (
      <div>
        <div className="xpage">
          <div className="row mb20 u-mt-20 clearfix">
            {returnBtn()}
            <PreviewBtn/>
          </div>
          <div className="pages-list">
            <Table rowKey={rowKey} columns={columns} dataSource={data} pagination={pagination}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = myComponent;
