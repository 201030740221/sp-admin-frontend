'use strict';

const ajaxStatus = {
  SUCCESS: 0, // 成功
  FAIL: 1, // 失败
  ERROR_OPERATION_FAILED: 10001, // 操作失败
  ERROR_MISSING_PARAM: 20001, // 缺少参数
  ERROR_INVALID_PARAM: 20002, // 不合法参数
  ERROR_INVALID_CAPTCHA: 20003, // 验证码错误
  ERROR_AUTH_FAILED: 40001, // 未登录操作
  ERROR_PERMISSION_DENIED: 40003, // 权限错误
};

export default function (success, error) {
  return function (res) {
    if (res) {
      switch (res.code) {
        case ajaxStatus.SUCCESS:
          if (success) {
          success(res.data);
        }
          break;
        default:
          SP.message.error(res.msg);
          if (error) {
          error(res.data);
        }
          break;

      }
    } else {
      SP.message.error('请求出错，请重试！');
    }
  };
}
