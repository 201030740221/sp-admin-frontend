/** @jsx React.DOM */

var TitleBar = React.createClass({
    onBack: function () {
        window.history.back(-1);
    },
    render: function () {
        return (
            <h4 className="list-title">
                <Button bsStyle='blue' type='submit' onClick={this.onBack} className="fl mr10" >返回</Button>
                <span className="fl list-title__text">订单详情</span>
            </h4>
        )
    }
});

module.exports = TitleBar;