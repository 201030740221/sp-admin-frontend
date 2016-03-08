var Sp = function () {
};

/**
 * 通用设置
 * @type {{host: string, debug: boolean}}
 */
Sp.config = {
    host: host,
    debug: true
};

/**
 * 增删改查通用模型方法
 * @param options
 * @returns {Sp.Model}
 * @constructor
 */
Sp.Model = function (options) {
    options = options || {};
    this.host = options.host || Sp.config.host;
    this.api = options.api;
    return this;
};

/**
 * 通用模型原型方法
 * @type {{ajax: Function, post: Function, get: Function, getUrl: Function, create: Function, update: Function, remove: Function, list: Function, query: Function}}
 */
Sp.Model.prototype = {
    ajax: function (type, url, data, success, error) {
        var promise;
        data = data || {};
        promise = $.ajax({
            url: url,
            type: type,
            dataType: "json",
            data: data
        });

        promise.done(success || Sp.postSuccess);
        promise.fail(error || Sp.postError);

        //权限错误统一提示
        promise.done(Sp.privilegeError);

        return promise;
    },
    post: function (url, data, success, error) { // 添加
        return this.query("POST", url, data, success, error);
    },
    get: function (url, data, success, error) { // 获取
        return this.query("GET", url, data, success, error);
    },
    put: function (url, data, success, error) { // 更新
        return this.query("PUT", url, data, success, error);
    },
    delete: function (url, data, success, error) {  // 删除
        return this.query("DELETE", url, data, success, error);
    },
    getUrl: function (name) {
        if (/\//.test(name))
            return name;
        else
            return this.host + this.api[name];
    },
    getUri: function (uri) {
        return this.host + uri;
    },
    getUriMap: function (uriMap) {
        var map = {};
        for (var name in uriMap) {
            map[name] = this.getUri(uriMap[name]);
        }
    },
    create: function (data, success, error) {
        return this.post(this.getUrl("create"), data, success, error);
    },
    update: function (data, success, error) {
        return this.post(this.getUrl("update"), data, success, error);
    },
    remove: function (data, success, error) {
        return this.post(this.getUrl("remove"), data, success, error);
    },
    list: function (data, success, error) {
        return this.get(this.getUrl("list"), data, success, error);
    },
    trashed: function (data, success, error) {
        return this.get(this.getUrl("trashed"), data, success, error);
    },
    restore: function (data, success, error) {
        return this.post(this.getUrl("restore"), data, success, error);
    },
    query: function (type, url, data, success, error) {
        return this.ajax(type, this.getUrl(url), data, success, error);
    },
    RESTful: function (type, id, data, success, error) {
        var url = this.getUrl('RESTful');
        url = id ? url + '/' + id : url;
        return this.ajax(type, url, data, success, error);
    }
};

/**
 * 提交成功通用处理
 * @param data
 */
Sp.postSuccess = function (data) {
    //console.log(data)
};

/**
 * 提交失败通用处理
 * @param data
 */
Sp.postError = function (data) {
    console.error(data.status+"："+data.statusText);
};

/**
 * 提交成功, 返回40003 木有权限 提示处理
 * @param data
 */
Sp.privilegeError = function (data) {
    if(data.code == 40003){
        Sp.message('权限错误!!!!','error');
    }
    if(data.code == 40001){
        Sp.message('保存失败!!!未登录或登录超时,请将当前编辑内容复制至本地记事本,并重新登陆','error');
    }
};

/**
 * 事件触发通用方法
 * 已转移到Sp.dispatcher方法，准备弃用
 */
Sp.trigger = function () {
    var name, args;
    name = arguments[0];
    args = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];
    try {
        this.events["on" + name].apply(this, args);
    } catch (err) {
        console.error("[Sp.jsx] on" + name + " 事件不存在 or err:" + err);
    }

};

Sp.setState = function (obj) {
    console.log(obj);
    //var goodData = this.state.goodData;
    //goodData.categoryId = id;
    //this.setState({
    //    goodData: goodData
    //});
};

/**
 * 数组排序方法
 * @param order
 * @param index
 * @param direction
 * @returns {*}
 */
Sp.sortArray = function (order, index, direction) {
    var prevIndex = order[index - 1],
        targetIndex = order[index],
        nextIndex = order[index + 1];

    switch (direction) {
        case "up":
            if (index - 1 < 0) return;
            order[index - 1] = targetIndex;
            order[index] = prevIndex;
            break;
        case "down":
            if (index + 1 > order.length) return;
            order[index + 1] = targetIndex;
            order[index] = nextIndex;
            break;
    }
    return order;
};

/**
 * debug通用打印方法
 */
Sp.log = function () {
    if(Sp.config.debug){
        console.log(arguments);
    }
};

/**
 * 通用事件通知方法
 * 用于组件内相互通讯，事件绑定在events对象，使用Sp.dispatcher.emit("sp:XXX")进行触发，支持传值，作用域在当前组件
 * 引用 mixins: [Sp.eventMixin]
 * @type {EventEmitter2}
 */
Sp.dispatcher = new EventEmitter2({
    maxListeners: 999999999
});

Sp.blankFunction = function(){};

Sp.bindEvent = function(){
    var self = this;
    if(self.events){
        Object.keys(self.events).map(function(event){
           //console.log("bind",event);
            Sp.dispatcher.on("sp:"+event, self.events[event].bind(self) || Sp.blankFunction.bind(self));
        });
    }
};

Sp.unbindEvent = function(){
    var self = this;
    if(self.events){
        Object.keys(self.events).map(function(event){
            //console.log("unbind",event);
            Sp.dispatcher.off("sp:"+event, self.events[event].bind(self) || Sp.blankFunction.bind(self));
        });
    }
};

Sp.eventMixin = {
    trigger: Sp.trigger,
    componentWillMount: function(){
        Sp.bindEvent.call(this);
    },
    componentWillUnmount: function(){
        Sp.unbindEvent.call(this);
    }
};

/**
 * 检测对象是否为空
 * @param obj
 * @returns {boolean}
 */
Sp.isEmptyObject = function(obj){
    for(var name in obj){
        if(obj.hasOwnProperty(name)){
            return false;
        }
    }
    return true;
};

/**
 * 删除数组中的值，传数组与下标
 * @param arr
 * @param n
 * @returns {array}
 * */
Sp.removeArray = function(arr,n) {
    if(n<0)
        return arr;
    else
        return arr.slice(0,n).concat(arr.slice(n+1,arr.length));
}

/**
 * 弱提示框
 * @param text
 * @param type  "success" || "error" || "info"
 */
Sp.message = function(text){
    Messenger.options = {
        theme: 'flat'
    };
    Messenger().post({
        type: arguments[1] || 'success',
        singleton: false,
        message: text,
        showCloseButton: true
    });
};
Sp.message.error = function(text){
    Sp.message(text,'error');
};

Sp.alert = function (text) {
    Sp.message.call(Sp, text, 'error');
};

/**
 * 确认框
 * @param text
 * @param callback
 */
Sp.confirm = function(text,callback){
    if (window.confirm(text))
        callback();
};

/**
 * 对话框
 */
Sp.prompt = function(text,callback,title){
    var value = window.prompt( text, title || "" );
    if(value){
        callback(value);
    }
};

/**
 * @tofishes
 * 获取七牛缩略图地址
 */
Sp.getThumb = function (img_url, width, height, quality) {
    quality = quality || 80;
    return img_url + '?imageView/2/2/w/'+ width +'/h/'+ height +'/q/' + quality;
}
// 获取约定的小缩略图
Sp.getSmallThumb = function (img_url) {
    return Sp.getThumb(img_url, 80, 80);
}

/**
 * @tofishes 数字金额转中文大写
 * @param {[Number]} n 数字
 */
function DX(n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
        return "数据非法";
    var unit = "千百拾亿千百拾万千百拾元角分", str = "";
    n += "00";
    var p = n.indexOf('.');
    if (p >= 0)
        n = n.substring(0, p) + n.substr(p + 1, 2);
    unit = unit.substr(unit.length - n.length);
    for (var i = 0; i < n.length; i++)
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
    return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
Sp.DX = DX;
/**
 * @tofishes js的四则精确运算方法
 * http://www.cnblogs.com/junjieok/p/3306155.html
 */
var Calc = {
    /*
    函数，加法函数，用来得到精确的加法结果
    说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
    参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数）
    调用：Calc.Add(arg1,arg2,d)
    返回值：两数相加的结果
    */
    Add: function (arg1, arg2) {
        arg1 = arg1.toString(), arg2 = arg2.toString();
        var arg1Arr = arg1.split("."), arg2Arr = arg2.split("."), d1 = arg1Arr.length == 2 ? arg1Arr[1] : "", d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
        var maxLen = Math.max(d1.length, d2.length);
        var m = Math.pow(10, maxLen);
        var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
        var d = arguments[2];
        return typeof d === "number" ? Number((result).toFixed(d)) : result;
    },
    /*
    函数：减法函数，用来得到精确的减法结果
    说明：函数返回较为精确的减法结果。
    参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
    调用：Calc.Sub(arg1,arg2)
    返回值：两数相减的结果
    */
    Sub: function (arg1, arg2) {
        return Calc.Add(arg1, -Number(arg2), arguments[2]);
    },
    /*
    函数：乘法函数，用来得到精确的乘法结果
    说明：函数返回较为精确的乘法结果。
    参数：arg1：第一个乘数；arg2第二个乘数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
    调用：Calc.Mul(arg1,arg2)
    返回值：两数相乘的结果
    */
    Mul: function (arg1, arg2) {
        arg1 = arg1 || 0;
        arg2 = arg2 || 0;
        var r1 = arg1.toString(), r2 = arg2.toString(), m, resultVal, d = arguments[2];
        m = (r1.split(".")[1] ? r1.split(".")[1].length : 0) + (r2.split(".")[1] ? r2.split(".")[1].length : 0);
        resultVal = Number(r1.replace(".", "")) * Number(r2.replace(".", "")) / Math.pow(10, m);
        return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
    },
    /*
    函数：除法函数，用来得到精确的除法结果
    说明：函数返回较为精确的除法结果。
    参数：arg1：除数；arg2被除数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
    调用：Calc.Div(arg1,arg2)
    返回值：arg1除于arg2的结果
    */
    Div: function (arg1, arg2) {
        var r1 = arg1.toString(), r2 = arg2.toString(), m, resultVal, d = arguments[2];
        m = (r2.split(".")[1] ? r2.split(".")[1].length : 0) - (r1.split(".")[1] ? r1.split(".")[1].length : 0);
        resultVal = Number(r1.replace(".", "")) / Number(r2.replace(".", "")) * Math.pow(10, m);
        return typeof d !== "number" ? Number(resultVal) : Number(resultVal.toFixed(parseInt(d)));
    }
};
Sp.Calc = Calc;

/**
 * 日期格式化方法
 * @tofishes
 *
 * @param {[Object]} options = {date: ?, format: ?}
 * options.date为日期字符串或日期对象
 * options.format为格式，使用y, M, d, h, m, s来描述
 *
 */
var Date_format = function(options) {
    var date = options.date || new Date()
    ,   format = options.format || 'yyyy-MM-dd hh:mm';

    date = date.getTime ? date : new Date(date);

    var _date = "";

    var o = {
        "M+": date.getMonth() + 1,  //month
        "d+": date.getDate(),   //day
        "h+": date.getHours(),  //hour
        "m+": date.getMinutes(),    //minute
        "s+": date.getSeconds(),    //second
        //quarter
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        };
    };

    _date = format;

    return _date;
};
Sp.Date_format = Date_format;

module.exports = Sp;
