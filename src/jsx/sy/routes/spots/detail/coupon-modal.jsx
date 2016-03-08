/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/promotion/coupon/search.coffee');
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');
var Action = Store.getAction();
var storeName = 'coupon-search';
var DISCOUNT_TYPE = {
    "0": "满减券",
    "1": "折扣券",
    "2": "安装服务卡",
    "3": "退货保障卡"
};
var TYPE ={
    "0": "用户领取",
    "1": "人工派发",
    "2": "自动派发",
    "3": "线下派发"
};

var Filter = React.createClass({
    getInitialState: function () {
        return {
            keyword: '',
            type: -1
        }
    },
    onKeywordChange: function (e) {
        this.setState({
            'keyword': e.target.value
        });
    },
    onTypeChange: function (e) {
        this.setState({
            'type': e.target.value
        });
    },
    onSearch: function () {
        Action.filter(this.state)
    },
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={4}>
                        <Input placeholder="卡券名称" value={this.state.keyword} onChange={this.onKeywordChange}/>
                    </Col>
                    <Col xs={4}>
                        <Select onChange={this.onTypeChange}>
                            <option value="-1">--请选择派发形式--</option>
                            <option value="0">用户领取</option>
                            <option value="1">人工派发</option>
                            <option value="2">自动派发</option>
                            <option value="3">线下派发</option>
                        </Select>
                    </Col>
                    <Col xs={4}>
                        <Button onClick={this.onSearch} bsStyle='blue'>搜索</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
})

var CouponModal = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],
    getInitialState: function() {
        // Action.reset();
        return {

        };
    },
    componentDidMount: function() {
        Action.get();
    },
    componentWillUnmount: function() {
        Action.reset();
    },
    select: function(item){
        Action.select(item);
    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        var data = store.data || [];
        if(!data.length){
            return [];
        }
        return data.map(function(item, i){
            console.log(store.selected ,item.id);
            var className = '';
            if(store.selected && store.selected.id == item.id){
                className = 'success';
            }
            return (
                <tr key={i} onClick={_this.select.bind(null, item)} className={className}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.value}
                    </td>
                    <td>
                        {DISCOUNT_TYPE[item.discount_type]}
                    </td>
                    <td>
                        {TYPE[item.type]}
                    </td>
                    <td>
                        {item.valid_time_start_at}
                        {' 至 '}
                        {item.valid_time_end_at}
                    </td>
                </tr>
            )
        });
    },
    handleSetSku: function(item){
        var store = this.state[storeName];
        store.theme_collocation_goods[store.tab].goods_sku = item
        store.theme_collocation_goods[store.tab].goods_sku_id = item.sku_id
        Action.onSetStore(store);
        Sp.message('噔噔~~SKU选择成功', 'success');
        ModalManager.remove()
    },
    prev:function(){
        Action.get('prev');
    },
    next:function(){
        Action.get();
    },
    renderPager: function(){
        var store = this.state[storeName];
        var _this = this;
        var prev = '';
        var next = '';
        if(store.data && store.data.length){
            if (store.current_page > 1){
                prev = <Page previous onClick={_this.prev}>上一页</Page>
            }

            if(store.current_page < store.last_page){
                next = <Page next onClick={_this.next}>下一页</Page>
            }
        }
        return (
            <Pager>
                {prev}
                {next}
            </Pager>
        )
    },
    render: function(){

        return (
            <div>
                <Filter/>
                <Table style={{marginBottom:0}}>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>面值</th>
                            <th>类型</th>
                            <th>派发形式</th>
                            <th>有效期</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                        <tr>
                            <td colSpan={5}>
                                {this.renderPager()}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
});


var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],

    showModal: function(){
        var store = this.state[storeName];
        var _this = this;
        this.confirm({
            title: '卡券列表',
            text: <CouponModal></CouponModal>,
            ok: function(){
                if(_this.props.callback){
                    _this.props.callback(Action.getSelected());
                }
            },
            lg: true
        });
    },
    render: function() {
        var store = this.state[storeName];

        return (
            <Button sm bsStyle='info' onClick={this.showModal}>选择卡券</Button>
        )
    }

});



module.exports = View;
