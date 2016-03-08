/** @jsx React.DOM */

var Widget = React.createClass({
    onBack: function () {
        window.history.back(-1);
    },
    render: function () {
        return (
            <h4 className="list-title">
                <Button type='submit' bsStyle='blue' onClick={this.onBack} className="fl mr10" >返回</Button>
                <span className="fl list-title__text">售后申请详情</span>
            </h4>
        )
    }
});

module.exports = Widget;
