/** @jsx React.DOM */
/**
* 公用上传组件
* Author: remiel
* 2015.08.20
* @param opts {Object}
* {
*     fileNumLimit:99,
*     formData:{
*         entity: 'theme_collocation',
*         entity_id: 0,
*         type_id: 3
*     }
* }
* @param success {Function}
**/
var moment = require('moment');
var host = Sp.config.host;
var classSet = React.addons.classSet;

var Uploader = React.createClass({
    // mixins: [],
    getInitialState: function() {
        return {}
    },
    componentWillReceiveProps: function (props) {
        var formData = this.uploader.option('formData');
        formData = $.extend(formData, props.opts.formData);
        this.uploader.option('formData', formData)
    },

    S4: function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    // Generate a pseudo-GUID by concatenating random hexadecimal.
    guid: function() {
        return this.S4()+this.S4()+this.S4()+this.S4();
    },

    initUploader: function(opts) {
        var _this = this;
        var $list = $(this.refs.fileList.getDOMNode());
        var server_url = host + '/api/attachment/upload';

        if (this.props.qiniu) {
            server_url = 'http://upload.qiniu.com/'

        }
        // 初始化Web Uploader
        var options = $.extend({}, {
            // 选完文件后，是否自动上传。
            auto: true,
            // 必须禁用图片压缩上传，否则导致图片质量降低
            compress: false,
            // swf文件路径
            swf: '/js/vendor/webuploader-0.1.5/Uploader.swf',
            // 文件接收服务端。
            server: server_url,
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#' + this.refs.btn.getDOMNode().id, // 必传 '#filePicker'

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            fileNumLimit: 99,
            duplicate: true, // 允许重复，否则传同一个图片会失败
            formData: null //必传
            // {
            //     entity: 'goods_sku',
            //     entity_id: 0,
            //     type_id: 3
            // }
        }, opts);
        if (this.uploader) {
            this.uploader.option('fileNumLimit', options.fileNumLimit);
            this.uploader.option('formData', options.formData);
            return false;
        }

        if (!$(options.pick).length || options.formData === null)
            return false;
        var uploader = this.uploader = WebUploader.create(options);

        /*是否为七牛直传*/
        if (this.props.qiniu) {
            uploader.on('uploadStart', function(file) {
                var uploader_time = moment(),
                    _this_time = uploader_time.format('YYYY/MM/DD/'),
                    random_str = _this.guid();
                options.formData.key = _this_time+random_str+'_'+file.name;

                uploader.option('formData', options.formData);
            });
        }

        /* 添加本地api上传csrf token */
        uploader.on('uploadStart', function () {
            var formData = options.formData;

            formData._token = window.csrf_token || Cookie.get('XSRF-TOKEN');

            uploader.option('formData', formData);
        });

        uploader.on('fileQueued', function(file) {
            var $li = $('<li id="' + file.id + '" class="file-item thumbnail" style="height:auto;display:inline-block">' + '<img>' + '<div class="info">' + file.name + '</div>' + '<a class="button j-uploader-cancel">' + '删除' + '</a>' + '</li>'),
                $img = $li.find('img');
            var $cancel = $li.find('.j-uploader-cancel');
            $cancel.on('click', function() {
                uploader.removeFile(file, true);
                $li.empty().remove();
            });
            // $list为容器jQuery实例
            $list.append($li);

            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。
            // thumbnailWidth x thumbnailHeight 为 100 x 100
            uploader.makeThumb(file, function(error, src) {
                if (error) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
                }

                $img.attr('src', src);
            }, 100, 100);
        });
        // 文件上传过程中创建进度条实时显示。
        uploader.on('uploadProgress', function(file, percentage) {
            var $li = $('#' + file.id),
                $percent = $li.find('.progress .progress-bar');

            // 避免重复创建
            if (!$percent.length) {
                $percent = $('<div class="progress progress-striped active">' +
                    '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                    '</div>' +
                    '</div>').appendTo($li).find('.progress-bar');
            }
            $li.find('p.state').text('上传中');

            $percent.css('width', percentage * 100 + '%');
        });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        uploader.on('uploadSuccess', function(file, response) {
            $('#' + file.id).find('p.state').text('已上传');
            /*是否为七牛直传*/
            if (_this.props.qiniu) {
                var domain = _this.props.domain;
                var url = 'http://'+domain+'/'+response.key;
                response.url = url;
                if(typeof(_this.props.success) == 'function'){
                    $('#' + file.id).addClass('upload-state-done').attr('media_id', response.key).remove();
                    $('#' + file.id).remove();
                    _this.props.success(response);
                }
            }else{
                if(typeof(_this.props.success) == 'function'){
                    $('#' + file.id).addClass('upload-state-done').attr('media_id', response.data[0].id).remove();
                    $('#' + file.id).remove();
                    _this.props.success(response.data);
                }
            }


        });

        // 文件上传失败，显示上传出错。
        uploader.on('uploadError', function(file) {
            var $li = $('#' + file.id),
                $error = $li.find('div.error');

            // 避免重复创建
            if (!$error.length) {
                $error = $('<div class="error"></div>').appendTo($li);
            }

            $error.text('上传失败');
        });

        // 完成上传完了，成功或者失败，先删除进度条。
        uploader.on('uploadComplete', function(file) {
            $('#' + file.id).find('.progress').remove();
        });
    },
    componentDidMount: function() {
        this.initUploader(this.props.opts);
    },
    render: function() {
        return (
            <div {...this.props} id="">
                <div ref="fileList" className="" id={"fileList-"+this.props.id}></div>
                <div ref="btn" id={"img-uploader-"+this.props.id}>点击上传图片</div>
            </div>
        )
    }
});

module.exports = Uploader;
