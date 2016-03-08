'use strict';

export default {
  /**
     * 数组排序方法
     * @param order
     * @param index
     * @param direction
     * @returns {*}
     */
  sortArray : function (order, index, direction) {
    let prevIndex = order[index - 1],
      targetIndex = order[index],
      nextIndex = order[index + 1];

    switch (direction) {
      case 'up':
        if (index - 1 < 0)
          return;
        order[index - 1] = targetIndex;
        order[index] = prevIndex;
        break;
      case 'down':
        if (index + 1 > order.length)
          return;
        order[index + 1] = targetIndex;
        order[index] = nextIndex;
        break;
    }
    return order;
  }
};
