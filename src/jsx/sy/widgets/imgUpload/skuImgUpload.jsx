/** @jsx React.DOM */
var host = Sp.config.host;
var classSet = React.addons.classSet;
var cache = Sp.cache = Sp.cache || {};

var Uploader = require('./uploader.jsx');

var ModalMixins = {
    showModal: function(options, callback) {
        var fn = function() {
            typeof callback === 'function' && callback();
            ModalManager.remove();
        }; //0：封面，1：相册，3，内容，4：封面场景，5：规格缩略
        var text = [
            '封面', '相册', '内容', '', '封面场景', '规格缩略'
        ];
        return (
            <Modal>
                <ModalHeader>
                    <h4 className='modal-title'>{text[this.state.opts.formData.type_id]}图片上传</h4>
                </ModalHeader>
                <ModalBody>
                    <SkuImgUpload opts={this.props.opts}></SkuImgUpload>
                </ModalBody>
                <ModalFooter>
                    <Button bsStyle='success' onClick={fn} onTouchEnd={fn} outlined>关闭</Button>
                </ModalFooter>
            </Modal>
        );
    }
};

var Img = React.createClass({
    deleteImg: function() {
        var _this = this;
        var postData = this.props.opts.formData;
        postData.media_ids = this.props.media_id;
        console.log('delete: ', postData);
        $.ajax({
            url: Sp.config.host + '/api/attachment/delete',
            type: 'POST',
            data: postData,
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
            _this.props.deleteCallback(_this.props.media_id)
        }).fail(function(data) {
            console.log(data);
        });
    },
    handleSort: function(type) {
        typeof this.props.sortImg === 'function' && this.props.sortImg(this.props.media_id, this.props.index, type);
    },
    render: function() {
        var left = classSet({
            'hidden': this.props.index == 0,
            'fl': 1
        });
        var right = classSet({
            'hidden': this.props.index == this.props.imgs.length - 1,
            'fr': 1
        });
        return (
            <li className="file-item thumbnail" id="" style={{height:'auto'}}>
                <img data-mediaid={this.props.media_id} src={this.props.src}/>
                <a className="button" onClick={this.deleteImg}>删除</a>
                <div className='clearfix'>
                    <BLabel bsStyle='info' className={left} onClick={this.handleSort.bind(null,-1)}>←</BLabel>{' '}
                    <BLabel bsStyle='info' className={right} onClick={this.handleSort.bind(null,1)}>→</BLabel>{' '}
                </div>
            </li>
        )
    }
});

var SkuImgUpload = React.createClass({
    mixins: [ModalMixins],
    getInitialState: function() {
        var _this = this;
        var param = this.props.opts.formData;
        $.ajax({
            url: Sp.config.host + '/api/attachment',
            type: 'GET',
            data: param,
            dataType: 'json'
        }).done(function(res) {
            console.log(res);
            if (res.code == 0) {
                var fileNumLimit = 5 - res.data.length;
                _this.setState({
                    imgs: res.data,
                    initText: '木有图片'
                });
            } else if (res.code == 1) {
                var fileNumLimit = 5 - res.data.length;
                _this.setState({
                    imgs: res.data,
                    initText: '木有图片'
                });
            }

        }).fail(function(data) {
            console.log(data);
        });
        return {
            opts: this.props.opts,
            imgs: [],
            initText: 'Loading'
        }
    },
    deleteCallback: function(media_id) {
        var index;
        this.state.imgs.map(function(item, i) {
            if (item.media_id == media_id) {
                index = i;
            }
        });
        this.state.imgs.splice(index, 1);
        this.setState({
            imgs: this.state.imgs
        });
    },
    sortImg: function(media_id, index, type) {
        var _this = this;
        var imgs = this.state.imgs;
        var currentImg = imgs[index];
        imgs.splice(index, 1);
        imgs.splice(index + type, 0, currentImg);
        var ids = imgs.map(function(item) {
            return item.media_id;
        });
        var postData = this.props.opts.formData;
        postData.media_ids = JSON.stringify(ids);
        $.ajax({
            url: Sp.config.host + '/api/attachment/sort',
            type: 'POST',
            data: postData,
            dataType: 'json'
        }).done(function(data) {
            console.log('success', data);
            _this.setState({
                imgs: imgs
            });
        }).fail(function(data) {
            console.log('fail', data);
        });

    },
    uploaded: function(res) {
        var img = {
            media_id: res[0].media_id,
            media: {
                full_path: res[0].media.full_path
            }
        };
        var imgs = this.state.imgs;
        imgs.push(img);

        this.setState({
            imgs: imgs
        });
    },
    render: function() {
        var UploaderOpts = this.props.opts;
        var _this = this;
        var imgList = this.state.imgs.map(function(item, i) {
            return (
                <Img deleteCallback={_this.deleteCallback} imgs={_this.state.imgs} index={i} key={i} media_id={item.media_id} opts={_this.props.opts} sortImg={_this.sortImg} src={item.media.full_path+'?imageView2/0/w/100'}/>
            )
        });
        if (!this.state.imgs.length)
            imgList = this.state.initText;

        var imgNumLeft = this.state.opts.fileNumLimit - this.state.imgs.length;
        var textImgNumLeft = imgNumLeft > 0 ? <BLabel bsStyle='success' outlined>还能上传{imgNumLeft}个图片</BLabel> : <BLabel bsStyle='danger' outlined>该相册已满</BLabel>;
        return (
            <div>
                <h4>该SKU的图片空间最多能上传{this.state.opts.fileNumLimit}个图片</h4>
                <div className="photos_list">
                    <ul className="clearfix">
                        {imgList}
                    </ul>
                </div>

                <div>
                    <h4>
                        <BLabel bsStyle='default' outlined>
                            上传图片: {textImgNumLeft}</BLabel>
                    </h4>
                    <div className="photos_list">
                        <ul className="clearfix" id="fileList"/>
                    </div>
                    <div id="filePicker">
                        选择图片</div>
                    <Uploader id="sku-img" opts={UploaderOpts} success={this.uploaded}></Uploader>
                </div>
            </div>
        )
    }
});

var SkuImgUploader = React.createClass({
    mixins: [ModalMixins],
    getInitialState: function() {

        return this.initOpts(this.props)
    },
    initOpts: function(props) {
        return {
            opts: $.extend({
                fileNumLimit: 5
            }, props.opts)
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState(this.initOpts(props));
    },

    handleClick: function() {
        var opts = this.props.opts;
        ModalManager.create(this.showModal(opts, function() {
            console.log('close');
        }));
    },
    render: function() {

        return (
            <Button bsStyle='primary' onClick={this.handleClick}>{this.props.children}</Button>
        )
    }
});

module.exports = SkuImgUploader;
