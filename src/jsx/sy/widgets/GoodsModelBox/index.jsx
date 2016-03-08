/** @jsx React.DOM */

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/goods/goodsSpuListStore.jsx');

var GoodsSpuBox = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('goodsSpuList')],
    getInitialState: function(){
        return {
            goods_ids: this.props.goods_ids,
            source: {},
            selectNode: []
        }
    },
    searchSource: function(request_data){
        var _this = this;
        var goods_ids = this.state.selectNode;

        liteFlux.action("goodsSpuList").getGoodsSpuList(request_data,function(data){
            var list = data.data;
           /* for(var key in goods_ids){
                for(var i in list){
                    if(goods_ids[key].id==list[i].id){
                        list[i].isChecked = true;
                    }
                }
            }*/
            for(var i in list){
                list[i].isChecked = false;
            }
            data.data = list;
            _this.setState({
                source: data
            });
        });
    },
    searchSelectSource: function(list){
        var _this = this;
        var request_data = {
            id : list,
            size: 100,
            page: 1
        };
        liteFlux.action("goodsSpuList").getGoodsSpuList(request_data,function(data){
            data.data.map(function (item, index) {
                item.isChecked = false;
            });
            _this.setState({
                selectNode: data.data
            })
        });
    },

    handleSearch: function (type) {
        var page = this.state.source.current_page;
        var title = $('#member-search').val();
        switch(type){
            case 'previous':
                page--;
                break;
            case 'next':
                page++;
                break;
            case 'search':
                page=1;
                break;
        }
        var request_data = {
            page_size: 10,
            page: page,
            title: title
        };
        this.searchSource(request_data);
    },

    componentDidMount: function(){
        var request_data = {
            page_size: 10,
            page: 1
        };

        this.searchSource(request_data);

        var list = this.state.goods_ids;
        if(list.length==0){
            return false;
        }
        this.searchSelectSource(list);

    },
    show: function(e){
        e.preventDefault();
        e.stopPropagation();
    },

    /*node*/
    showNode: function(data,type){
        var _this = this;
        var _this_node = data.map(function (item, key) {
            var url = '';

            item.primary_goods_sku = item.primary_goods_sku||{}, item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover||{};
            item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media||{};
            if(item.primary_goods_sku.has_cover.media.full_path){
                url = item.primary_goods_sku.has_cover.media.full_path+'?imageView2/1/w/100';
            }
            return (
                <Row key={key}>
                    <Col xs={2}>
                        <input
                            className='each_checkbox'
                            type="checkbox"
                            value={item.id}
                            onChange={_this.onChangeCheckBox.bind(null,type)}
                            checked={item.isChecked}
                            />
                    </Col>
                    <Col xs={4}>{item.title}</Col>
                    <Col xs={4}><img src={url} alt="" width='100'/></Col>
                </Row>
            )
        });
        return _this_node;
    },

    /*去除重复元素*/
    uniQueue: function(array){
        var arr=[];
        var m;
        while(array.length>0){
            m=array[0];
            arr.push(m);
            array=$.grep(array,function(n,i){
                return n==m;
            },true);
        }
        return arr;
    },
    addSelectGoods: function(){
        var _this = this,
            source = this.state.source,
            list = source.data || [],
            goods_ids = this.state.goods_ids;
        list.map(function (item, index) {
            if(item.isChecked){
                goods_ids.push(item.id);
                return false;
            }
        });

        var ids_arr = this.uniQueue(goods_ids);
        console.log(ids_arr,'9999');
        this.searchSelectSource(ids_arr);
        this.setState({
            goods_ids: ids_arr
        });
        this.props.callbackGoodsIds(ids_arr);
    },
    removeSelectGoods: function(){

        var _this = this;
        var source = this.state.source,
            list = source.data || [];

        var selectNode = this.state.selectNode;
        var goods_arr = [];

        var node_length = 0;
        selectNode.map(function (item, index) {
            if(!item.isChecked){
                goods_arr.push(item.id);
            }else{
                for(var key in list){
                    if(list[key].id==item.id){
                        list[key].isChecked = false;
                        source.data = list;
                        _this.setState({
                            source: source
                        });

                    }
                }
            }

            if(item.isChecked){
                node_length++;
            }
        });

        if(selectNode.length==node_length){
            alert('亲，不能全部移除哦！');
            return false;
        }

        if(selectNode.length<=1){
            alert('亲，不能少于1个了！');
            return false;
        }
        this.searchSelectSource(goods_arr);
        this.setState({
            goods_ids: goods_arr
        });
        this.props.callbackGoodsIds(goods_arr);

    },

    onChangeCheckBox: function (type,e) {
        var value = e.target.value;
        var  _this = this;
        if(type=='source'){
            var  source = this.state.source,
                list = source.data || [];

            list.map(function (item, index) {
                if(item.id==+value){
                    if(e.target.checked){
                        item.isChecked = true;
                    }
                    else{
                        item.isChecked = false;
                    }
                }
            });
            source.data = list;
            this.setState({
                source: source
            });

            console.log(this.state.source);
        }
        if(type=='select'){
            var  selectNode = this.state.selectNode;

            selectNode.map(function (item, index) {
                if(item.id==+value){
                    if(e.target.checked){
                        item.isChecked = true;
                    }
                    else{
                        item.isChecked = false;
                    }
                }
            });
            this.setState({
                selectNode: selectNode
            });

            console.log(this.state.selectNode);
        }

    },

    render: function(){

        var _this = this;
        var source = _this.state.source;
        var list = source.data || [];

        var pagerNode = function () {
            var prev = '';
            var next = '';
            var line = '';
            if (source) {
                if (source.current_page > 1) {
                    line=<hr/>;
                    prev = <a href="javascript:;" onClick={_this.handleSearch.bind(null,'previous')}>上一页</a>
                }

                if (source.current_page < source.last_page) {
                    line=<hr/>;
                    next = <a href="javascript:;"  onClick={_this.handleSearch.bind(null,'next')}>下一页</a>
                }

            }
            return (
                <Row>
                    {line}
                    <Pager>
                        {prev}
                        {next}
                    </Pager>
                </Row>
            )
        };

        var selectNode = this.state.selectNode;
        return (
            <Grid>
                <Row style={{marginBottom: '20px'}}>
                    <Col xs={10}>
                        <Input
                            ref='search'
                            type='text'
                            id='member-search'
                            name='member-search'
                            placeholder='输入关键字'/>
                    </Col>
                    <Col xs={2}>
                        <Button sm bsStyle='primary' onClick={this.handleSearch.bind(null,'search')}>搜索</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <Grid>
                            <Row>
                                <h5>商品列表</h5>
                            </Row>
                            <Row>
                                <Col xs={12} style={{padding:0,background:'#efefef'}}>
                                    <Col xs={2}></Col>
                                    <Col xs={4}>商品名</Col>
                                    <Col xs={4}>图片</Col>
                                </Col>
                            </Row>
                            {
                               this.showNode(list,'source')
                            }
                            {pagerNode()}
                        </Grid>
                    </Col>
                    <Col xs={2} className="text-center">
                        <div style={{marginTop: '115px'}}>
                            <Button sm bsStyle='primary' onClick={this.addSelectGoods}> &gt; </Button>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Button sm bsStyle='primary' onClick={this.removeSelectGoods}> &lt; </Button>
                        </div>
                    </Col>
                    <Col xs={5} style={{height:'800',overflowY:'scroll'}}>
                        <Row>
                            <h5>已选商品</h5>
                        </Row>
                        <Row>
                            <Col xs={12} style={{padding:0,background:'#efefef'}}>
                                <Col xs={2}></Col>
                                <Col xs={4}>商品名</Col>
                                <Col xs={4}>图片</Col>
                            </Col>
                        </Row>
                        {
                            this.showNode(selectNode,'select')
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = GoodsSpuBox;