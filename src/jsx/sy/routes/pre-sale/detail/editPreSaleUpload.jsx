/** @jsx React.DOM */

var Uploader = require('../../../widgets/imgUpload/uploader.jsx');

var liteFlux = require('lite-flux');


var Widget = React.createClass({
    getInitialState: function(){
        return {
            source: this.props.source
        }
    },
    componentDidMount: function(){

    },
    componentWillReceiveProps: function (props) {

    },

    /*预售图片设置*/
    uploaded: function(type,index,data){

        var _this_url = data.data.full_path;
        var source = this.props.source;

        if(type=='cover'){
            source.covers.media_id = data.data.id;
            source.covers.media.full_path = _this_url;
        }
        if(type=='thumb'){
            source.thumbs.media_id = data.data.id;
            source.thumbs.media.full_path = _this_url;
        }

        source[type] = source[type]|| [];
        if(type=='sliders' || type=='mobileSliders' || type=='mobileContents'){
            source[type].forEach(function(item,key){
                if(index==key){
                    item.media_id = data.data.id;
                    item.media.full_path = _this_url;
                }
            })
        }

        $('.webuploader-pick').text('点击上传图片');
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(source);
        }
    },
    addPicture: function(type){

        var source = this.props.source;
        var  img_arr = source[type] || [];

        img_arr.push(
            {
                'id': null,
                media: {
                    full_path: ''
                }
            }
        );
        source[type] = img_arr;
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(source);
        }
    },

    deleteHandle: function(type,index){

        var source = this.props.source;

        source[type] = source[type]|| [];
        source[type].forEach(function(item,key){
            if(index==key){
                source[type].splice(key,1);
            }
        })
        if(typeof(this.props.changeCallBack) == 'function'){
            this.props.changeCallBack(source);
        }

    },
    SlideArrNode: function(title,arr,name){
        var _this = this;
        /*token*/
        var token = this.props.token;
        if(typeof(token) == 'undefined' || token == '')
            return false;
        /*分享文案*/
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'lottery_prize',
                entity_id: 0,
                type_id: 0,
                token: token.uptoken
            }
        };

        var slideNodes = arr.map(function(item,key){

            item.media = item.media || {};
            var url = '';
            if(item.media.full_path){
                url = item.media.full_path+'?imageView2/1/h/80';
            }
            var deleteNode = '';
            if(key==0){
                deleteNode = '';
            }else{
                deleteNode = (
                    <BLabel className='label-danger pointer' bsStyle='info' onClick={_this.deleteHandle.bind(null,name,key)} style={{marginLeft:'15'}}>删除</BLabel>
                )
            }

            return (
                <FormGroup key={key}>
                    <Label control sm={3} className='right_padding'>{title}:</Label>
                    <Col sm={2} className="mb15 pr0">
                        <Input
                            name={name}
                            type='text'
                            placeholder='必填'
                            readOnly
                            value={item.media_id}
                            placeholder='必填'
                            className='inline'
                            style={{width:'120'}}
                            />
                    </Col>
                    <Col sm={2} className="mb15 pr0" style={{marginTop:'-10'}}>
                        <Uploader
                            qiniu={true}
                            domain={token.domain}
                            name={name}
                            id={name+key}
                            opts={UploaderOpts}
                            success={_this.uploaded.bind(null,name,key)}
                            />
                    </Col>
                    <Col sm={3} className="mb15 pr0">
                        <img src={url} alt="" height='80' style={{marginTop:'-30',marginBottom:'10'}}/>
                    </Col>
                    <Col sm={2} className="mb15 pr0">
                        {deleteNode}
                    </Col>
                </FormGroup>
            )
        });
        return slideNodes
    },
    preSaleUpload: function(){

        var source = this.props.source,
            errors = this.state.errors,
            pc_img_arr = source.sliders,
            m_img_arr = source.mobileSliders,
            m_content_arr = source.mobileContents;

        console.log(source);
        var pc_slide_img_node = this.SlideArrNode('轮播图',pc_img_arr,'sliders');
        var m_slide_img_node = this.SlideArrNode('轮播图',m_img_arr,'mobileSliders');
        var m_detail_node = this.SlideArrNode('详情图',m_content_arr,'mobileContents');

        /*token*/
        var token = this.props.token;
        if(typeof(token) == 'undefined' || token == '')
            return false;
        /*分享文案*/
        var UploaderOpts = {
            fileNumLimit:99,
            formData:{
                entity: 'lottery_prize',
                entity_id: 0,
                type_id: 0,
                token: token.uptoken
            }
        };

        source.covers = source.covers || {};

        source.covers.media = source.covers.media || {};

        source.thumbs = source.thumbs ||  {};

        source.thumbs.media = source.thumbs.media ||  {};

        var cover_src = '';
        if(source.covers.media.full_path){
            cover_src = source.covers.media.full_path+'?imageView2/1/h/80'
        }

        var thumb_src = '';
        if(source.thumbs.media.full_path){
            thumb_src = source.thumbs.media.full_path+'?imageView2/1/h/80'
        }

        return (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding label_nav'>PC频道图片管理:</Label>
                    <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}></Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>头部主图:</Label>
                    <Col sm={2} className="mb15 pr0">
                        <Input
                            name='cover'
                            type='text'
                            placeholder='必填'
                            readOnly
                            value={source.covers.media_id}
                            className='inline'
                            style={{width:'120'}}
                            />
                    </Col>
                    <Col sm={2} className="mb15 pr0" style={{marginTop:'-10'}}>
                        <Uploader
                            qiniu={true}
                            domain={token.domain}
                            name='cover'
                            id='pc_cover_updloader'
                            opts={UploaderOpts}
                            success={this.uploaded.bind(null,'cover','')}
                            />
                    </Col>
                    <Col sm={5} className="mb15 pr0">
                        <img src={cover_src} alt="" height='80' style={{marginTop:'-30',marginBottom:'10'}}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>头部小图:</Label>
                    <Col sm={2} className="mb15 pr0">
                        <Input
                            name='thumb'
                            type='text'
                            placeholder='必填'
                            value={source.thumbs.media_id}
                            className='inline'
                            readOnly
                            style={{width:'120'}}
                            />
                    </Col>
                    <Col sm={2} className="mb15 pr0" style={{marginTop:'-10'}}>
                        <Uploader
                            qiniu={true}
                            domain={token.domain}
                            name='thumb'
                            id='pc_thumb_updloader'
                            opts={UploaderOpts}
                            success={this.uploaded.bind(null,'thumb','')}
                            />
                    </Col>
                    <Col sm={5} className="mb15 pr0">
                        <img
                            src={thumb_src}
                            alt=""
                            height='80'
                            style={{marginTop:'-30',marginBottom:'10'}}
                            />
                    </Col>
                </FormGroup>
                {pc_slide_img_node}
                <FormGroup>
                    <Label control sm={3} className='right_padding'></Label>
                    <Col sm={9} className="mb15 pr0">
                        <Button sm  bsStyle='blue' onClick={this.addPicture.bind(null,'sliders')} style={{background:'#D49E11',borderColor:'#D49E11'}}>+增加PC端轮播图（最多不能8张）</Button>
                    </Col>
                </FormGroup>
                <hr style={{borderColor:'#CCE2EA'}} />
                <FormGroup>
                    <Label control sm={3} className='right_padding label_nav'>M端频道图片管理:</Label>
                    <Col sm={9} className="mb15 pr0" style={{marginTop:'3'}}></Col>
                </FormGroup>
                {m_slide_img_node}
                <FormGroup>
                    <Label control sm={3} className='right_padding'></Label>
                    <Col sm={9} className="mb15 pr0">
                        <Button sm  bsStyle='blue' onClick={this.addPicture.bind(null,'mobileSliders')} style={{background:'#D49E11',borderColor:'#D49E11'}}>+增加M端轮播图（最多不能8张）</Button>
                    </Col>
                </FormGroup>
                {m_detail_node}
                <FormGroup>
                    <Label control sm={3} className='right_padding'></Label>
                    <Col sm={9} className="mb15 pr0">
                        <Button sm  bsStyle='blue' onClick={this.addPicture.bind(null,'mobileContents')} style={{background:'#D49E11',borderColor:'#D49E11'}}>+增加详情图（最多不能12张）</Button>
                    </Col>
                </FormGroup>
            </div>
        )
    },
    render: function () {

        return (
            <div>
                {this.preSaleUpload()}
            </div>
        )
    }
});

module.exports = Widget;
