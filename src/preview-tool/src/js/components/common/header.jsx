'use strict';

import {Icon} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from 'js/actions/user';

let Header = React.createClass({
  propsTypes: {
    userData: React.PropTypes.object.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function () {
    // 检查是否登录
    this.props.actions.checkLogin();
  },
  componentWillReceiveProps(nextProps) {
    // 如果没有登录则跳登录
    if (!nextProps.userData.user.id ) {
      this.handleLogin();
    }
  },
  // 跳转登录页
  handleLogin: function (e) {
    e && e.preventDefault();
    this.context.router.push('/user/login');
  },
  handleLogout: function (e) {
    e.preventDefault();
    this.props.actions.logout();
  },
  renderLogin: function () {
    const { userData } = this.props;
    return (
      <ul className="clearfix">
        <li>
          <Icon type="user"/>{userData.user.username}
        </li>
        <li>
          <a href="#" onClick={this.handleLogout}>退出登录</a>
        </li>
        <li>
          <a href={sipinConfig.website}>返回旧版系统</a>
        </li>
        <li>
          <a href="http://www.sipin.com">斯品官网</a>
        </li>
      </ul>
    );
  },
  renderLogout: function () {
    return (
      <ul className="clearfix">
        <li>
          <a href="#" onClick={this.handleLogin}>请登录</a>
        </li>
        <li>
          <a href={sipinConfig.website}>返回旧版系统</a>
        </li>
        <li>
          <a href="http://www.sipin.com">斯品官网</a>
        </li>
      </ul>
    );
  },
  render: function () {
    let logo = require('images/logo.png');
    let nav = this.props.userData.user.id
      ? this.renderLogin()
      : this.renderLogout();

    return (
      <header id="header" className="clearfix">
        <div className="header-inner">
          <a className="logo" href="#/">
            <img width="80" src={logo}/>
            <span className="logo-text">商城管理中心</span>
          </a>
          <div className="search"></div>
          <nav className="nav">
            <span className="bar"></span>
            {nav}
          </nav>
          <div className="nav-phone-icon"></div>
        </div>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
