/** @jsx React.DOM */

var View = React.createClass({

    ok: function(){
        this.props.ok();
        ModalManager.remove();
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        return (
            <div>
                {this.props.text}
                <Button sm bsStyle='primary' onClick={this.ok}>确定</Button>
            </div>
        )
    }
});
module.exports = View;
