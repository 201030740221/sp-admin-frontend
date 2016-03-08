/** @jsx React.DOM */
var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;

var TrList = React.createClass({
    render: function(){
        var detail = Store().detail;
        return (
            <tr>
                <td></td>
                <td>{detail.member['name']}</td>
                <td>{detail.member['mobile']}</td>
                <td>{detail.member['email']}</td>
            </tr>
        )

    }
});

var Widget = React.createClass({
    render: function () {
        return (
            <div>
                <h4 className="list-title">
                    <span className="fl list-title__text">用户信息：</span>
                </h4>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="200">用户名</th>
                            <th width="200">手机</th>
                            <th width="*">邮箱</th>
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
