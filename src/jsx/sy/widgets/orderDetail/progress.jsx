/** @jsx React.DOM */

var Progress = React.createClass({
    render: function () {
        var self = this;
        var props = self.props;
        var statusLog = props.statusLog;
        var last = statusLog[statusLog.length-2];

        // 高亮状态ID
        var statusId = function(){
            if(props['statusId']==6){
                //已取消状态
                if(last && (last['status_id']==1 || last['status_id']==2 ))
                    return 2;
                else
                    return last['status_id']>5?5:last['status_id'];
            }else if(props['statusId']==1 || props['statusId']==2){
                return 2;
            }else{
                return props['statusId']>5?"5":props['statusId'];
            }
        };
        var classString = "ui-progress__bar _step-" + statusId();

        var $step2Node = function(){
            if( props['statusId']==6 && last && (last['status_id']==1 || last['status_id']==2 )){
                return (
                    <div className="ui-progress__No _step-2">
                        2
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已取消</h6>
                            <span>{statusLog[statusLog.length - 1]?statusLog[statusLog.length - 1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }else{
                if (props['statusId'] == 1){
                    return (
                        <div className="ui-progress__No _step-2">
                            2
                            <div className="ui-progress__No-desc" style={{width: "11em"}}>
                                <h6>等待付款</h6>
                                <span>{statusLog[0]?statusLog[0]['created_at']:""}</span>
                            </div>
                        </div>
                    )
                }else{
                    return (
                        <div className="ui-progress__No _step-2">
                            2
                            <div className="ui-progress__No-desc" style={{width: "11em"}}>
                                <h6>付款成功</h6>
                                <span>{statusLog[1]?statusLog[1]['created_at']:""}</span>
                            </div>
                        </div>
                    )
                }
            }

        };

        var $step3Node = function(){
            if( props['statusId']==6 && last && (last['status_id']==3 )){
                return (
                    <div className="ui-progress__No _step-3">
                        3
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已取消</h6>
                            <span>{statusLog[statusLog.length - 1]['created_at']}</span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="ui-progress__No _step-3">
                        3
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>等待发货</h6>
                            <span>{statusLog[2]?statusLog[2]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }
        };

        var $step4Node = function(){
            if( props['statusId']==6 && last && (last['status_id']==4 )){
                return (
                    <div className="ui-progress__No _step-4">
                        4
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已取消</h6>
                            <span>{statusLog[statusLog.length - 1]['created_at']}</span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="ui-progress__No _step-4">
                        4
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>等待收货</h6>
                            <span>{statusLog[3]?statusLog[3]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }
        };

        var $step5Node = function(){
            if( props['statusId']==6 && last && (last['status_id']==5 )){
                return (
                    <div className="ui-progress__No _step-last">
                        5
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已取消</h6>
                            <span>{statusLog[statusLog.length - 1]['created_at']}</span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="ui-progress__No _step-last">
                        5
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已完成</h6>
                            <span>{statusLog[4]?statusLog[4]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }
        };

        return (
            <div className="progress-box">
                <div className="ui-progress _with-5-step" style={{height: 110}}>
                    <div className={classString}>
                        <div className="ui-progress__No _step-1">
                            1
                            <div className="ui-progress__No-desc" style={{width: "11em"}}>
                                <h6>提交订单</h6>
                                <span>{props['createdAt']}</span>
                            </div>
                        </div>
                        {$step2Node()}
                        {$step3Node()}
                        {$step4Node()}
                        {$step5Node()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Progress;
