'use strict';

export default function (obj, path) {
  path = path.split('.');
  let hasValue = true;
  path.map(function (item) {
    if (!obj[item]) {
      hasValue = false;
    } else {
      obj = obj[item];
    }
  });

  return hasValue ? obj : '';
}
