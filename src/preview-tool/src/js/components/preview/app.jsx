'use strict';

import {
  Select
} from 'antd';
import MainIframe from './iframe';

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {};
  },
  componentDidMount() {
    //document.getElementById("preview").contentWindow.postMessage('getcolor','*');
    var self = this;
    var frame = document.getElementById('preview');
    frame.onload = function () {
      var previewClient = document.createElement('script');
      var host = location.host.replace('www', 'admin');
      previewClient.src = 'http://' + host + previewClientScript;
      if ($('#preview').length) {
        var script = $('#preview')[0].contentWindow.document.getElementsByTagName('script')[0];
        script.parentNode.insertBefore(previewClient, script);
      }

      window.addEventListener('message', function (e) {

        var data = e.data;
        // 打开相应的编辑页面
        if (data.data && data.data.page && data.data.module) {
          var url = '/frame/module/' + data.data.page + '/' + data.data.module;
          if (data.data.category) {
            url += '?category=' + data.data.category;
            if (data.data.moduleId) {
              url += '&id=' + data.data.moduleId;
            }
          } else if (data.data.moduleId) {
            url += '?id=' + data.data.moduleId;
          }
          self.context.router.push(url);
        }

      }, false);
    };

  },
  onBack() {
    window.history.back();
  },
  render() {
    var self = this;
    var host = location.host.replace('admin', 'www');
    // var iframeUrl = sipinConfig.iframeUrl+'?v=1';
    var query = this.props.location.query;
    var iframeUrl = 'http://' + host + (query.url || '') + '?preview=true';
    var leftBar = (
      <span className="ml20 fl mt5">最佳使用效果推荐使用 Chrome、Firefox等浏览器</span>
    );
    var rightBar = (
      <div>
        <Select
          defaultValue="lucy"
          style={{
            width: 100,
            marginRight: '20px',
            display: 'none'
          }}
          onChange={null}>
          <Option value="jack">版本1</Option>
          <Option value="lucy">版本2</Option>
        </Select>
        <a className="btn btn-primary" href='#/frame'>页面管理</a>
        <a className="btn btn-primary" href="javascript:;" onClick={self.onBack}>退出修改</a>
      </div>
    );
    return (
      <div className="wrap">
        <ToolBar leftBar={leftBar} rightBar={rightBar}/>
        {this.props.children}
        <MainIframe id='preview' url={iframeUrl}/>
      </div>
    );
  }
});

module.exports = App;
