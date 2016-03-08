'use strict';

import Header from '../common/header';
import Footer from '../common/footer';
import {Form, Checkbox, Button, Row, Col} from 'antd';
const FormItem = Form.Item;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from 'js/actions/user';

const LoginPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    // 获得光标焦点
    let username = $('#username').val();
    if (username) {
      $('#password').focus();
    } else {
      $('#username').focus();
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.userData.user.id) {
      this.context.router.push('/');
    }
  },
  login: function (e) {
    e.preventDefault();
    let self = this;
    let username = $('#username').val();
    let password = $('#password').val();
    let remember = this.props.userData.user.remember
      ? 1
      : 0;

    if (username && password) {
      this.props.actions.login({
        email: username,
        password: password,
        remember: remember
      });
    } else {
      SP.message.error('用户名或密码不能为空');
    }
  },
  rememberMe: function (e) {
    this.props.actions.rememberMe(e.target.checked);
  },
  render: function () {
    const {actions, userData} = this.props;
    return (
      <div>
        <Header/>
        <div className="main-wrapper login-wrap clearfix">
          <div className="login-box main-box">
            <div className="main-box-inner">
              <Form horizontal={true}>
                <FormItem
                  id="username"
                  label="邮箱："
                  labelCol={{
                    span: 6
                  }}
                  wrapperCol={{
                    span: 14
                  }}>
                  <input
                    id="username"
                    defaultValue={userData.user.email}
                    className="ant-input"
                    placeholder="请输入邮箱..."/>
                </FormItem>

                <FormItem
                  id="password"
                  label="密码："
                  labelCol={{
                    span: 6
                  }}
                  wrapperCol={{
                    span: 14
                  }}>
                  <input id="password" className="ant-input" type="password" placeholder="请输入密码..."/>
                </FormItem>

                <FormItem wrapperCol={{
                  span: 14,
                  offset: 6
                }}>
                  <label>
                    <Checkbox checked={userData.user.remember} onChange={this.rememberMe}/>
                    记住登录
                  </label>
                </FormItem>

                <Row>
                  <Col offset="6" span="16">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{
                        width: '240px'
                      }}
                      onClick={this.login}>确定</Button>
                  </Col>
                </Row>

                <Row>
                  <Col
                    span="24"
                    style={{
                      textAlign: 'center',
                      marginTop: 50
                    }}>
                    <span>为了体验最佳的用户体验，推荐使用 <a target="_blank" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html">chrome浏览器</a> 最新版本浏览网站</span>
                  </Col>
                </Row>

              </Form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

});

function mapStateToProps(state) {
  return {userData: state};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
