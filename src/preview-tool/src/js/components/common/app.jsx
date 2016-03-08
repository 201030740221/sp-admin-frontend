'use strict';

import ReactRouter from 'react-router';
import SideBar from './sidebar';
import Header from './header';
import Footer from './footer';
import Container from './container';
import {Icon, Breadcrumb} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from 'js/actions/user';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-logo"><Icon type="home"/></div>
        <div className="f14">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <div className="f16">{this.props.username}，欢迎登录斯品商城管理中心.</div>
      </div>
    );
  }
}

class App extends React.Component {
  renderChild() {
    const { children, userData } = this.props;
    if (children) {
      return (
        <div>
          <Breadcrumb {...this.props} router={ReactRouter}/>
          <div className="u-mt-20">
            {children}
          </div>
        </div>
      );
    }
    return (
      <div className="u-mt-20">
        <Home username={userData.user.username}/>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="main-wrapper clearfix">
          <SideBar/>
          <Container>
            {this.renderChild()}
          </Container>
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {userData: state};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
