/** @jsx React.DOM */
var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;

var TrList = React.createClass({
    render: function(){
        var detail = Store().detail;
        return (
            <tr>
                <td></td>
                <td>{detail.id}</td>
                <td>{detail.order_no}</td>
                <td>{detail.created_at}</td>
                <td>{detail.status}</td>
            </tr>
        )
    }
});

var Widget = React.createClass({
    render: function () {
        return (
            <div>
                <h4 className="list-title">
                    <span className="fl list-title__text">售后信息：</span>
                </h4>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th>服务单号</th>
                            <th>原订单号</th>
                            <th>申请时间</th>
                            <th>售后状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrList />
                    </tbody>
                </Table>
            </div>
        )
    }
});

module.exports = Widget;
