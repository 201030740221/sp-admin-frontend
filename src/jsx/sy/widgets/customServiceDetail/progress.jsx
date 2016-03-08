/** @jsx React.DOM */

var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;

var csProgress = React.createClass({
    onChangeStatus: function(e){
        var val = e.target.value;
        if(val==0) return;

        var detail = Store().detail;
        Sp.confirm('确认要修改状态?',function(){
            var data = {
                member_id: detail.member_id
            };

            val = val*1;

            if (val>0 && val<=3){
                data.status_id = 2;
                if(val==1){
                    data.audit_id = 1;
                }else{
                    data.audit_id = val;
                }
            }

            if (val>3 && val<=6){
                data.status_id = 3;
                data.type_id = val-3;
            }

            if (val==7)
                data.status_id = 4;

            Actions.onUpAfterSales(data);
        });
    },
    render: function () {
        var detail = Store().detail;
        var self = this;
        var status_id = detail.status_id;
        var audit_id = detail.audit_id;
        var type_id = detail.type_id;

        // 高亮状态ID
        var statusId = function(){
            if(status_id==1) return 1;
            if(status_id==2) return 2;
            if(status_id==3) return 3;
            if(status_id==4 || status_id==5) return 4;
        };
        var classString = "ui-progress__bar _step-" + statusId();

        var $step2Node = function(){
            if(audit_id==3){
                return (
                    <div className="ui-progress__No _step-2">
                        2
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>审核不通过</h6>
                            <span>{detail['status_log'][1]?detail['status_log'][1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }else if (audit_id==2){
                return (
                    <div className="ui-progress__No _step-2">
                        2
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>通过审核</h6>
                            <span>{detail['status_log'][1]?detail['status_log'][1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="ui-progress__No _step-2">
                        2
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>等待审核</h6>
                            <span>{detail['status_log'][1]?detail['status_log'][1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }

        };

        var $step3Node = function(){
            return (
                <div className="ui-progress__No _step-3">
                    3
                    <div className="ui-progress__No-desc" style={{width: "11em"}}>
                        <h6>{detail.process}</h6>
                        <span>{detail['status_log'][2]?detail['status_log'][2]['created_at']:""}</span>
                    </div>
                </div>
            )
        };

        var $step4Node = function(){
            if(status_id==4){
                return (
                    <div className="ui-progress__No _step-last">
                        4
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已完成</h6>
                            <span>{detail['status_log'][detail['status_log'].length-1]?detail['status_log'][detail['status_log'].length-1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }else if (status_id == 5){
                return (
                    <div className="ui-progress__No _step-last">
                        4
                        <div className="ui-progress__No-desc" style={{width: "11em"}}>
                            <h6>已取消</h6>
                            <span>{detail['status_log'][detail['status_log'].length-1]?detail['status_log'][detail['status_log'].length-1]['created_at']:""}</span>
                        </div>
                    </div>
                )
            }

        };


        return (
            <div className="clearfix">
                <h4 className="list-title clearfix">
                    <span className="fl list-title__text">服务进度：</span>
                    <div className="fl">
                        <Select onChange={this.onChangeStatus} value={audit_id} className="wa fl mr10">
                            <option value="0">选择售后状态</option>
                            <option value="1">等待审核</option>
                            <option value="2">通过审核</option>
                            <option value="3">审核不通过</option>
                            <option value="4">上门换新</option>
                            <option value="5">上门维护</option>
                            <option value="6">退货处理中</option>
                            <option value="7">已完成</option>
                        </Select>
                    </div>
                </h4>
                <div className="progress-box">
                    <div className="ui-progress _with-4-step" style={{height: 110}}>
                        <div className={classString}>
                            <div className="ui-progress__No _step-1">
                                1
                                <div className="ui-progress__No-desc" style={{width: "11em"}}>
                                    <h6>提交申请</h6>
                                    <span>{detail['status_log'][0]?detail['status_log'][0]['created_at']:""}</span>
                                </div>
                            </div>
                            {$step2Node()}
                            {$step3Node()}
                            {$step4Node()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});



module.exports = csProgress;
