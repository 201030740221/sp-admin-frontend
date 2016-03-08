'use strict';

import {
  handleActions
}
from 'redux-actions';

const initialState = {
  id: null,
  roleId: null,
  avatar: null,
  username: localStorage.getItem('sp-admin-username') || '',
  email: localStorage.getItem('sp-admin-email') || '',
  remember: true
};

export default handleActions({
  'login'(state, action) {
    return {
      ...state,
      ...action.payload
    };
  },
  'logout'(state, action) {
    if (action.payload) {
      return {
        ...initialState
      };
    }
    return {
      ...state
    };
  },
  'remember me'(state, action) {
    return {
      ...state,
      remember: action.payload
    };
  },
  'check login'(state, action) {
    // 如果没有登录返回初始值
    if (!action.payload) {
      return {
        ...state
      };
    }
    // 返回登录后的数据
    return {
      ...state,
      ...action.payload
    };
  }
}, initialState);
