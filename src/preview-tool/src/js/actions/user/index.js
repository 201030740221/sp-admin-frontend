'use strict';

import {
  createAction
}
from 'redux-actions';

const clearLocalStorage = () => {
  localStorage.removeItem('sp-admin-username');
  localStorage.removeItem('sp-admin-uid');
};

/**
 * 登录
 */
export const login = createAction('login', async({email, password, remember}) => {
  const res = await webapi.user.login({
    email: email,
    password: password,
    remember: remember
  });
  if (res && !res.code) {
    // 存入 localStorage, 存储登录状态
    localStorage.setItem('sp-admin-uid', res.data.id);
    localStorage.setItem('sp-admin-username', res.data.name);
    localStorage.setItem('sp-admin-email', res.data.email);

    // 更新 store
    return {
      id: res.data.id,
      roleId: res.data.role_id,
      avatar: null,
      username: res.data.name,
      email: res.data.email
    };
  }

  SP.message.error('登录失败', res.msg);
  // 保持状态免输入多次
  localStorage.setItem('sp-admin-email', email);
  clearLocalStorage();
  return {
    email: email
  };
});

/**
 * 登出
 */
export const logout = createAction('logout', async() => {
  const result = await webapi.user.logout();
  if (result && !result.code) {
    clearLocalStorage();
    return true;
  }
  SP.message.error('退出失败', res.msg);
  return false;
});

/**
 * 记住我
 */
export const rememberMe = createAction('remember me');

/**
 * 检查是否登录
 */
export const checkLogin = createAction('check login', async() => {
  const res = await webapi.user.checkLogin();
  if (res && !res.code) {
    // 赋值 scrfToken
    window.csrfToken = res.data.token;
    // 存入 localStorage, 存储登录状态
    localStorage.setItem('sp-admin-uid', res.data.id);
    localStorage.setItem('sp-admin-username', res.data.name);
    localStorage.setItem('sp-admin-email', res.data.email);
    // 更新 store
    return {
      id: res.data.id,
      roleId: res.data.role_id,
      avatar: null,
      username: res.data.name,
      email: res.data.email
    };
  }
  // 取消赋值 scrfToken
  window.csrfToken = null;
  // 删除localStorage登录状态
  clearLocalStorage();

  return null;
});
