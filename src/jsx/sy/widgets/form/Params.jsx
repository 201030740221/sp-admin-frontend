$.fn.paramMap = function (opts) {
    opts = $.extend({
        'separator': ',' //同名参数的分隔符，多用于checkbox的值
    })

    var params = this.serializeArray()
    ,   paramMap = {}

    ,   i = 0
    ,   l = params.length
    ,   param;

    for (; i < l; i++) {
        param = params[i];

        if (paramMap[param.name]) {
            paramMap[param.name] += opts.separator + param.value;
        } else {
            paramMap[param.name] = param.value;
        }
    };

    return paramMap;
};

/**
* @author ToFishes
* @date 2011.4.29
* 3个简单的帮助方法，$().isLocked(), $().lock(), $().unLock().
* 比如用于链接的ajax载入，通过这3个方法防止重复点击。
* ... ...
* var $btn = $('input:submit');
* if ($btn.isLoced()) {
*         return;
* }
* $btn.lock();
* $.ajax(url, params, function (data) {
*         $btn.unLock();
*     ... ...
* })
*
*/
$.fn.extend({
     'isLocked': function() {
          return $(this).data('jquery-fn-locked');
     },
     'lock': function() {
          return $(this).data('jquery-fn-locked', true);
     },
     'unLock': function() {
          return $(this).data('jquery-fn-locked', false);
     }
});