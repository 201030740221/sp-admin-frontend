/** @jsx React.DOM */
var actions = flux.actions.orderDetailActions;
var StatusBar = React.createClass({
    onChangeStatus: function (e) {
        if(0 == parseInt(e.target.value))
            return;
        var statusName = e.target[e.target.selectedIndex].label;
        Sp.confirm("你确定要修改当前订单的状态为"+statusName+"？",function(){
            actions.onUpdateStatusId(e.target.value);
        });
    },
    render: function () {
        return (
            <div className="status_bar fr mt5 clearfix">
                <div className="fl mr10">
                    <Select id="changeStatusId" className="wa" onChange={this.onChangeStatus}>
                        <option key="0" value="0">请选择修改状态</option>
                        {this.props.opreation && $.map(this.props.opreation,function(name,id){
                            return (
                                <option key={id} value={id}>{name}</option>
                            )
                        })}
                    </Select>
                </div>
            </div>
        )
    }
});

module.exports = StatusBar;
