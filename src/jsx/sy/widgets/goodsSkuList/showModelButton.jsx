/** @jsx React.DOM */
var GoodsSkuList = require('../../widgets/goodsSkuList/index.jsx');

var showButton = React.createClass({
    getInitialState: function () {
        return {
            shown: false
        }
    },
    selectSku: function(){
        var _this = this;
        _this.setState({
            shown: true
        });
    },
    cancel: function(){
        var _this = this;
        _this.setState({
            shown: false
        });
    },
    getFinishSelect: function(data){
        console.log(data);
        this.props.callbackFinishSelectSource(data);
        this.setState({
            shown: false
        });
    },
    getCancel: function(){
        this.setState({
            shown: false
        })
    },

    render: function () {
        var skuNode = '',
            _this = this;
        if(_this.state.shown) {
            skuNode = (
                <GoodsSkuList sku_sn={_this.props.sku_sn} callbackFinishSelect={_this.getFinishSelect} callbackCancel={_this.getCancel}></GoodsSkuList>
            );
        }else{
            skuNode = '';
        }

        return (
                <div>
                    <a href="javascript:;" className="inline" onClick={_this.selectSku}>选择</a>
                    {skuNode}
                </div>
            )

    }
});

module.exports = showButton;