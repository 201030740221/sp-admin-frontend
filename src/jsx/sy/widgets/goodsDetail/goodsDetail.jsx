/** @jsx React.DOM */
var Actions = flux.actions.goodsDetailAction;

//var Frame = React.createClass({
//    propTypes: {
//        style: React.PropTypes.object,
//        head:  React.PropTypes.node
//    },
//    render: function() {
//        return React.createElement('iframe', {
//            style: this.props.style,
//            head: this.props.head
//        });
//
//    },
//    componentDidMount: function() {
//        this.renderFrameContents();
//    },
//    renderFrameContents: function() {
//        var doc = this.getDOMNode().contentDocument;
//        if(doc && doc.readyState === 'complete') {
//            var contents = React.createElement('div',
//                undefined,
//                this.props.head,
//                this.props.children
//            );
//
//            React.render(contents, doc.body);
//        } else {
//            setTimeout(this.renderFrameContents, 0);
//        }
//    },
//    componentDidUpdate: function() {
//        this.renderFrameContents();
//    },
//    componentWillUnmount: function() {
//        React.unmountComponentAtNode(React.findDOMNode(this).contentDocument.body);
//    }
//});

var Frame = React.createClass({
    render: function() {
        return <iframe frameBorder="0" width="100%" height="1500"/>;
    },
    renderFrameContents:function(){
        var doc = this.getDOMNode().contentDocument,
            html = this.props.html;

        var cssLink = '<link rel="stylesheet" href="'+ SipinCssUrl +'"/>';

        var $body = this.$body =  $(doc.body);
        var $hd = $(doc.head);
        var $css = $hd.find('link');

        //插入样式
        if(!$css.length) $hd.append(cssLink);

        //刷新内容
        $body.html(html);
    },
    componentDidMount: function() {
        this.renderFrameContents();
    },
    componentDidUpdate: function() {
        this.renderFrameContents();
    },
    componentWillUnmount: function() {
        if(this.$body) this.$body.html('');
    }
});

var Uploader = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("goodsDetailStore")],
    getStateFromFlux: function() {
        return flux.store("goodsDetailStore").getState();
    },
    render: function() {

        var detailData = this.state.goodsDetailData;
        var _this = this;
        //var imgList = this.state.imgs.map(function(item, i){
        //    return (
        //        <Img src={item.media.full_path+'?imageView2/0/w/100'} media_id={item.media_id} deleteCallback={_this.deleteCallback} key={i} index={i} opts={_this.props.opts} imgs={_this.state.imgs} sortImg={_this.sortImg}/>
        //    )
        //});
        //if(!this.state.imgs.length) imgList = this.state.initText;
        if(!detailData[this.props.sourceType]) return <div>null</div>;
        var imgs = detailData[this.props.sourceType].value;
        var imgList = imgs.map(function(item, i){
            var upNode = (
                <span className="label label-info fl" onClick={_this.handleSort.bind(null, i, 'up')}>←</span>
            );
            if(i==0){
                upNode = '';
            }

            var downNode = (
                <span className="label label-info fr" onClick={_this.handleSort.bind(null, i, 'down')}>→</span>
            );
            if(i==imgs.length-1){
                downNode = '';
            }
           return (
               <li className="file-item thumbnail" style={{height:'auto'}} key={i}>
                   <div>
                       <Img src={item.url+'?imageView2/0/w/100'} media_id={item.id}/>
                   </div>
                   <div>
                       <a className="button j-uploader-cancel" onClick={_this.handleDelete.bind(null, i)}>删除</a>
                   </div>
                   <div>
                       {upNode}
                       {downNode}
                   </div>
               </li>
           )
        });
        // var imgList = []

        return (
            <div>
                <div className="photos_list">
                    <ul className="clearfix">
                        {imgList}
                    </ul>
                </div>

                <div>
                    <div id={_this.props.opts._id}>选择图片</div>
                    <div className="photos_list">
                        <ul id={_this.props.opts._list?_this.props.opts._list : 'fileList'} className="clearfix">
                        </ul>
                    </div>
                </div>
            </div>
        )
    },

    handleDelete: function(index){
      var _this = this;
      var detailData = _this.state.goodsDetailData;
      var type = _this.props.sourceType;
      switch(type){
          case 'main_picture':
            detailData[type].value = []
          break;
          case 'detail_picture':
            detailData[type].value.splice(index,1);
          break;
      }
      Actions.setDetailData(detailData);
    },

    /*交换数组*/
    swapItems : function(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    },

    // 上移
    upRecord : function(arr, $index) {
        this.swapItems(arr, $index, $index - 1);
    },

    // 下移
    downRecord : function(arr, $index) {
        this.swapItems(arr, $index, $index + 1);
    },
    handleSort: function(key,str){
        var _this = this;
        var detailData = _this.state.goodsDetailData;
        var type = _this.props.sourceType;
        if(str=='up'){
            _this.upRecord(detailData[type].value,key);
        }
        if(str=='down'){
            _this.downRecord(detailData[type].value,key)
        }
        Actions.setDetailData(detailData);
    },

    initUploader: function(opts){
        //console.log('init uploader',$(opts.pick).length,this.uploader,this.props);
        //if(this.uploader) this.destroyUploader();
        /*var opts={
         pick: '#filePicker',
         formData:{
         entity: 'goods_sku',
         entity_id: 0,
         type_id: 3
         }
         };*/

        var _this = this;
        var $list = opts._list ? $('#'+opts._list) : $('#fileList');
        // 初始化Web Uploader
        var options = $.extend({}, {
            // 选完文件后，是否自动上传。
            auto: true,
            // 必须禁用图片压缩上传，否则导致图片质量降低
            compress: false,
            // swf文件路径
            swf: '/js/vendor/webuploader-0.1.5/Uploader.swf',
            // 文件接收服务端。
            server: Sp.config.host + '/api/attachment/upload',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#filePicker',

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            fileNumLimit: 10,
            formData:{
                entity: 'goods_sku',
                entity_id: 0,
                type_id: 3
            }
        },opts);

        options.formData._token = window.csrf_token || Cookie.get('XSRF-TOKEN');

        if(this.uploader){
            this.uploader.option('fileNumLimit',options.fileNumLimit);
            this.uploader.option('formData',options.formData);
            return false;
        }

        if(!$(options.pick).length) return false;
        var uploader = this.uploader = WebUploader.create(options);
        
        console.log(options, this.uploader.option('formData'), '.....')
        uploader.on( 'fileQueued', function( file ) {
            var $li = $(
                    '<li id="' + file.id + '" class="file-item thumbnail" style="height:auto">' +
                    '<img>' +
                    '<div class="info">' + file.name + '</div>' +
                    '<a class="button j-uploader-cancel">' + '删除' + '</a>' +
                    '</li>'
                ),
                $img = $li.find('img');
            var $cancel = $li.find('.j-uploader-cancel');
            $cancel.on('click',function () {
                uploader.removeFile(file, true);
                $li.empty().remove();
            });
            // $list为容器jQuery实例
            $list.append( $li );

            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。
            // thumbnailWidth x thumbnailHeight 为 100 x 100
            uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    $img.replaceWith('<span>不能预览</span>');
                    return;
                }

                $img.attr( 'src', src );
            }, 100, 100 );
        });
        // 文件上传过程中创建进度条实时显示。
        uploader.on( 'uploadProgress', function( file, percentage ) {
            console.log('uploadProgress', file);
            var $li = $( '#'+file.id ),
                $percent = $li.find('.progress .progress-bar');

            // 避免重复创建
            if ( !$percent.length ) {
                $percent = $('<div class="progress progress-striped active">' +
                    '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                    '</div>' +
                    '</div>').appendTo( $li ).find('.progress-bar');
            }
            $li.find('p.state').text('上传中');

            $percent.css( 'width', percentage * 100 + '%' );
        });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        uploader.on( 'uploadSuccess', function( file, response ) {
            console.log('uploadSuccess', response);
            $( '#'+file.id ).find('p.state').text('已上传');
            $( '#'+file.id )
                .addClass('upload-state-done')
                .attr('media_id',response.data[0].media_id)
                .remove();

            var detailData = _this.state.goodsDetailData;
            var type = _this.props.sourceType;
            switch(type){
                case 'main_picture':
                  detailData[type].value = [
                  {
                    id: response.data[0].id,
                    url: response.data[0].media.full_path
                  }
                  ]
                break;
                case 'detail_picture':
                  detailData[type].value.push(
                    {
                      id: response.data[0].id,
                      url: response.data[0].media.full_path
                    }
                  )
                break;
            }
            Actions.setDetailData(detailData);

        });

        // 文件上传失败，显示上传出错。
        uploader.on( 'uploadError', function( file ) {
            var $li = $( '#'+file.id ),
                $error = $li.find('div.error');

            // 避免重复创建
            if ( !$error.length ) {
                $error = $('<div class="error"></div>').appendTo( $li );
            }

            $error.text('上传失败');
        });

        // 完成上传完了，成功或者失败，先删除进度条。
        uploader.on( 'uploadComplete', function( file ) {
            console.log('uploadComplete');
            $( '#'+file.id ).find('.progress').remove();
        });
    },
    componentDidMount: function() {

        this.initUploader(this.props.opts );
    },
    componentDidUpdate: function() {

        this.initUploader(this.props.opts );
    },
    componentWillUnmount: function() {
    }
});


var TplList = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("goodsDetailStore")],
    getStateFromFlux: function() {
        return flux.store("goodsDetailStore").getState();
    },
    onSetTpl: function (id, item) {
        switch (item.type){
            case 1:
                Actions.setTpl(item);
                Actions.setTplId(id);
                break;
            case 2:
                //Actions.setTpl(item);
                Actions.setMobileTplId(id);
                break;
        }
    },
    render: function () {
        var _this = this;
        var tplList = this.state.tplList;
        var nodes = [];
        var mobileNodes = [];

        var color = ['primary','success','info','warning','danger'];

        if(tplList && tplList.length){
            tplList.map(function (item, i) {
                var node = '';
                switch (item.type){
                    case 1:
                        node = (
                            <Button
                                active={_this.state.tplId == item.id}
                                key = {i}
                                xs outlined style={{marginBottom: 5,marginRight:5}} bsStyle={color[i%4]}
                                tpl_id={item.id}
                                onClick={_this.onSetTpl.bind(null, item.id, item)}
                                >{item.name}</Button>
                        );
                        nodes.push(node);
                        break;
                    case 2:
                        node = (
                            <Button
                                active={_this.state.mobileTplId == item.id}
                                key = {i}
                                xs outlined style={{marginBottom: 5,marginRight:5}} bsStyle={color[i%4]}
                                tpl_id={item.id}
                                onClick={_this.onSetTpl.bind(null, item.id, item)}
                                >{item.name}</Button>
                        );
                        mobileNodes.push(node);
                        break;
                }
            });
        }else{
            return (
                <div>正在加载模板列表...</div>
            )
        }


        return (

            <Row>
                <Col xs={12}>
                    <hr/>
                    <h4>选择模板</h4>
                    <p>PC端</p>
                    <p>
                        {nodes}
                    </p>
                    <p>移动端</p>
                    <p>
                        {mobileNodes}
                    </p>
                    <hr/>
                </Col>
            </Row>
        )
    }
});


var GoodsDetail = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("goodsDetailStore")],
    getStateFromFlux: function() {
        return flux.store("goodsDetailStore").getState();
    },
    getInitialState: function() {
        // console.log('props id',this.props.data);
        Actions.getTplList();
        this.resetData(this.props);
        //Actions.setSkuId(this.props.data.sku_id);
        /*if(this.props.data && this.props.data.template_id && this.props.data.template_id != 0){
            console.log('props id',this.props.data.sku_id);
            Actions.getTpl(this.props.data.template_id);
            Actions.setTplId(this.props.data.template_id);
            Actions.setDetailData(JSON.parse(this.props.data.detail_data));
        }else{
            Actions.setTpl(null);
            Actions.setTplId(null);
            Actions.setDetailData(null);
        }*/
    },
    componentWillReceiveProps: function(newProps){
        console.log('componentWillReceiveProps',newProps);
        this.resetData(newProps);
        //Actions.setSkuId(newProps.data.sku_id);
        /*if(newProps.data && newProps.data.template_id && newProps.data.template_id != 0){
            Actions.getTpl(newProps.data.template_id);
            Actions.setTplId(newProps.data.template_id);
            Actions.setDetailData(JSON.parse(newProps.data.detail_data));
        }else if(newProps.data !== this.props.data){
            Actions.setTpl(null);
            Actions.setTplId(null);
            Actions.setDetailData(null);
        }*/
    },
    resetData: function (props) {
        Actions.setSkuId(props.data.sku_id);
        if(props.data && props.data.template_id && props.data.template_id != 0){
            Actions.getTpl(props.data.template_id);
            Actions.setTplId(props.data.template_id);
            Actions.setMobileTplId(props.data.mobile_template_id);
            Actions.setDetailData(JSON.parse(props.data.detail_data));
        }else if(props.data !== this.props.data){
            Actions.setTpl(null);
            Actions.setTplId(null);
            //Actions.setMobileTplId(null);
            Actions.setDetailData(null);
        }

    },
    handleChange: function (e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        //console.log(name,value);
        var keys = name.split('_');

        var detailData = this.state.goodsDetailData;

        switch(keys.length){
            case 1:
                detailData[keys[0]].value = value;
                break;
            case 2:
                //detailData[keys[0]][keys[1]].value = value;
                console.log('keys.length=2');
                break;
            case 3:
                detailData[keys[0]].value[keys[1]][keys[2]] = value;
                break;
        }

        Actions.setDetailData(detailData);

    },
    handleDelete:function(e){
        var _this = this;
        var el = e.target;
        var name = $(el).attr('name');
        console.log(name);
        var keys = name.split('_');

        var detailData = this.state.goodsDetailData;

        switch(keys.length){
            case 1:
                //detailData[keys[0]].value = value;
                console.log('keys.length=2');
                break;
            case 2:
                detailData[keys[0]].value.splice(keys[1],1);
                //console.log('keys.length=2');
                break;
        }

        Actions.setDetailData(detailData);

    },
    handleAddItem: function (e) {
        var _this = this;
        var el = e.target;
        var name = $(el).attr('name');
        console.log(name);
        var keys = name.split('_');

        var detailData = this.state.goodsDetailData;

        switch(keys.length){
            case 1:
                detailData[keys[0]].value.push({
                    content:'',
                    title:''
                });
                break;
        }

        Actions.setDetailData(detailData);

    },


    render: function() {
        //console.log('render',this.state);
        var _this = this;
        var sku_id = this.props.data.sku_id;
        var tplSource = this.state.tplSource;
        var detailData = this.state.goodsDetailData;
        var html = '';
        if(tplSource){
            var tplRender = Handlebars.compile(tplSource.template);
            var data = detailData ? detailData : JSON.parse(tplSource.data);
            html = tplRender(data);

            var nodes = [];
            var node;
            var key;
            var item, name,  value, format;
            var i = 0;
            for(key in data){
                //console.log(key, data[key]);
                item = data[key];
                name = item.name;
                value = item.value;
                format = item.format;
                if(format == 'text'){
                    if(typeof value == 'string'){
                        //console.log('string');
                        node = (
                            <FormGroup key={i++}>
                                <Label control sm={3} htmlFor={item}>{name}</Label>
                                <Col sm={9}>
                                    <Textarea
                                        className='inline'
                                        row='3'
                                        id={key}
                                        name={key}
                                        value={value}
                                        placeholder=''
                                        style={{width:'50%'}}
                                        onChange={_this.handleChange}/>
                                </Col>
                            </FormGroup>
                        );
                    }else{
                        node = (
                            <FormGroup key={i++}>
                                <Label control sm={3} htmlFor={item}>{name}</Label>
                                <Col sm={9}>

                                    <Table>
                                        <thead>
                                        <tr>
                                            <th style={{paddingTop:'3px'}}>标题</th>
                                            <th style={{paddingTop:'3px'}}>内容</th>
                                            <th style={{paddingTop:'3px',width:'4em'}}>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {value.map(function(_item, _i){
                                            return (
                                                <tr key={_i}>
                                                    <td>
                                                        <Input
                                                            type='text'
                                                            id={key+'_ipt_'+_i}
                                                            name={key+'_'+_i+'_title'}
                                                            value={_item.title}
                                                            placeholder=''
                                                            onChange={_this.handleChange}/>
                                                    </td>
                                                    <td>
                                                        <Textarea
                                                            row='3'
                                                            id={key+'_ta_'+_i}
                                                            name={key+'_'+_i+'_content'}
                                                            value={_item.content}
                                                            placeholder=''
                                                            onChange={_this.handleChange}/>
                                                    </td>
                                                    <td>
                                                        <BLabel bsStyle='danger'
                                                                className='pointer'
                                                                name={key+'_'+_i}
                                                                onClick={_this.handleDelete}>删除</BLabel>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </Table>
                                    <div>
                                        <Button
                                            bsStyle='success'
                                            name={key}
                                            onClick={_this.handleAddItem}>
                                            增加一项
                                        </Button>
                                    </div>
                                </Col>
                            </FormGroup>
                        );
                    }
                }else{
                    node = (
                        <FormGroup key={i++}>
                            <Label control sm={3}>{name}</Label>
                            <Col sm={9}>
                                使用中的图片
                                <Uploader opts={{
                                    _list: 'j-tpl-uploader-list-01-'+i,
                                    _id: 'j-tpl-uploader-01-'+i,
                                    pick: '#j-tpl-uploader-01-'+i,
                                    formData:{
                                        entity: 'goods_sku',
                                        entity_id: sku_id,
                                        type_id: 3
                                    }
                                }} sourceType={key}></Uploader>
                            </Col>
                        </FormGroup>
                    );
                }
                nodes.push(node);
            }

        }else{
            console.log('未加载 tpl');
            return (
                <Grid>
                    <TplList></TplList>
                    <div>未选择模板或模板加载中...</div>
                </Grid>
            )
        }
        return (

        <Grid>
            <TplList></TplList>
            <Row>
                <Col xs={12}>
                    <Form horizontal>
                    {nodes}
                    </Form>
                </Col>
            </Row>
            <Row>
                <Frame html={html}></Frame>
            </Row>
        </Grid>
        );
    }
});



var Body = React.createClass({
    render: function() {
        return (
            <div>
                <GoodsDetail flux = {flux} data={this.props.data}></GoodsDetail>
            </div>
        );
    }
});


module.exports = Body;
