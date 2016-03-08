/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/coupon/detail-scope.coffee');
var ConfirmMixins = require('../../../../widgets/modal/confirmMixins.jsx');
var Action = Store.getAction();
var storeName = 'coupon-detail-scope';

var ScopeDetail = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],
    getInitialState: function() {
        Action.reset();
        return {};
    },
    componentDidMount: function() {
        if(+this.props.scope == 1){
            Action.getCategoryList({
                id: this.props.id
            });
        }
        if(+this.props.scope == 2){
            Action.getGoodsList({
                id: this.props.id
            });
        }
    },
    componentWillUnmount: function() {
        Action.reset();
    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        var data = store.data || [];
        if(!data.length){
            return [];
        }
        if(+this.props.scope == 1){
            return data.map(function(item, i){
                return (
                    <Row key={i}>
                        <Col xs={12}>
                            <div>{item.name}</div>
                        </Col>
                    </Row>
                )
            });
        }
        if(+this.props.scope == 2){
            return data.map(function(item, i){

                item.primary_goods_sku = item.primary_goods_sku || {};
                item.primary_goods_sku.has_cover = item.primary_goods_sku.has_cover || {};
                item.primary_goods_sku.has_cover.media = item.primary_goods_sku.has_cover.media || {};

                var imgNode = '';
                if(item.primary_goods_sku.has_cover.media){
                    imgNode = (
                        <img src={item.primary_goods_sku.has_cover.media.full_path + '?imageView2/2/w/100/h/100/q/80'} />
                    )
                }
                return (
                    <Row key={i}>
                        <Col xs={2}>
                            {imgNode}
                        </Col>
                        <Col xs={10}>
                            <div>{item.title}</div>
                            <div>{item.subtitle}</div>
                        </Col>
                    </Row>
                )
            });
        }
    },
    render: function(){

        return (
            <Grid>
                {this.renderList()}
            </Grid>
        )
    }
});


var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],

    showModal: function(){
        var store = this.state[storeName];
        var _this = this;
        this.confirm({
            title: '适用范围',
            text: <ScopeDetail scope={this.props.scope} id={this.props.id} />,
            showOk: false,
            lg: true
        });
    },
    render: function() {
        return (
            <Button sm bsStyle='info' onClick={this.showModal}>查看</Button>
        )
    }

});



module.exports = View;
