/** @jsx React.DOM */
var GoodsSpuList = require('./radioIndex.jsx');

var showSpuRadioButton = React.createClass({
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
                <GoodsSpuList selectedArr={this.props.selectedArr}  finishCallback={_this.getFinishSelect} callbackCancel={_this.getCancel}></GoodsSpuList>
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

module.exports = showSpuRadioButton;