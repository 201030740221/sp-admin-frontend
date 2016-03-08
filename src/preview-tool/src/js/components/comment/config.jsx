'use strict';

import {
  message,
  Row,
  Col,
  InputNumber,
  Button
} from 'antd';

module.exports = React.createClass({

  getInitialState() {
    return {
      config: {}
    };
  },

  componentDidMount() {
    webapi.comment.getConfig().then(function (res) {
      if (res.code) {
        message.error('获取配置失败：' + res.msg);
        return false;
      }

      this.setState({
        config: this.transDatatoMap(res.data)
      });
    }.bind(this));
  },

  transDatatoMap(data) {
    let params = {};
    data.forEach(function (item) {
      params[item.key] = item.value;
    });
    return params;
  },

  save() {
    let params = {
      configs: []
    };

    let name;
    let config = this.state.config;

    for (name in config) {
      if (config.hasOwnProperty(name)) {
        params.configs.push({
          key: name,
          value: config[name]
        });
      }
    }

    webapi.comment.setConfig(params).then(function (res) {
      if (res.code) {
        message.error('保存配置失败：' + res.msg);
        return false;
      }

      message.success('保存配置成功！');
    });
  },

  change(name, value) {
    let config = this.state.config;
    config[name] = value;
    this.setState({
      config: config
    });
  },

  render() {
    let config = this.state.config;

    return (
      <form className="comment-config-form">
        <Row className="u-mt-15">
          <Col span="2">
            <label>评价奖励积分：</label>
          </Col>
          <Col span="8">
            <InputNumber name="comment-point-bonus" onChange={this.change.bind(this, 'comment-point-bonus')} value={config['comment-point-bonus']} />
          </Col>
        </Row>
        <Row className="u-mt-15">
          <Col span="2">
            <label>晒单奖励积分：</label>
          </Col>
          <Col span="8">
            <InputNumber name="pic-comment-point-bonus" onChange={this.change.bind(this, 'pic-comment-point-bonus')}
              value={config['pic-comment-point-bonus']} />
          </Col>
        </Row>
        <Row className="u-mt-15">
          <Col span="2">
            <label>抢先评价奖励：</label>
          </Col>
          <Col span="22">
            前 <InputNumber name="top-comment-limit" onChange={this.change.bind(this, 'top-comment-limit')}
              value={config['top-comment-limit']} />名评价晒单的用户奖励
            <InputNumber name="top-comment-multiplier" onChange={this.change.bind(this, 'top-comment-multiplier')}
              value={config['top-comment-multiplier']} />倍积分
          </Col>
        </Row>
        <Row className="u-mt-20">
          <Col offset="2">
            <Button onClick={this.save} size="large" type="primary" >保存设置</Button>
          </Col>
        </Row>
      </form>
    );
  }

});
