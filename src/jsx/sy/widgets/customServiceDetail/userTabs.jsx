/** @jsx React.DOM */

var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var Actions = flux.actions.csDetailActions;
var Store = flux.store("csDetailStore").getState;


/**
 * 跟踪信息
 */
var InfoBox = React.createClass({
    render: function (){
        var detail = Store().detail;
        var $processNode = detail.process_log.reverse().map(function(item){
            return (
                <tr key={item.id}>
                    <td></td>
                    <td>
                        {item['created_at']}
                    </td>
                    <td>{item['description']} <span className="fg-orange65">{item['note']!=''?'(备注：'+item['note']+')':''}</span></td>
                    <td>{item['creater_type']==2?"用户":"系统"}</td>
                </tr>
            )
        });
        return (
            <div className="orderRecord">
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="200">处理时间</th>
                            <th width="*">处理信息</th>
                            <th width="100">操作人</th>
                        </tr>
                    </thead>
                    <tbody>
                        {$processNode}
                    </tbody>
                </Table>
            </div>
        )
    }
});


/**
 * 用户记录
 */
// 建议
var AddAdviceModel = React.createClass({
    getInitialState: function(){
        return {
            advice_value: "",
            statusLogTags: [],
            selectTagIds:[]
        }
    },
    onChangeValue: function () {
        var val = $("#advice_value").val();
        this.setState({
            advice_value: val
        });
        this.props.onChange(this.state);
    },
    onAddTag: function(){
        var self = this;
        Sp.prompt("请输入新的标签",function(val){
            $.ajax({
                url: Sp.config.host + '/api/feedback/feedbackNote',
                method: "POST",
                data: {
                    name: val
                },
                success: function(res){
                    if(res && res.code ==0 ){
                        self._getTags();
                    }else{
                        Sp.message("添加新标签失败","error");
                    }
                }
            });

        });
    },
    onSelectTag: function(id){
        var selectTagIds = this.state.selectTagIds;
        var index = $.inArray(id,selectTagIds);
        if(index>=0){
            selectTagIds = Sp.removeArray(selectTagIds,index);
        }else{
            selectTagIds.push(id);
        }
        this.setState({
            selectTagIds:selectTagIds
        });
        this.props.onChange(this.state);
    },
    _getTags: function(){
        var self = this;
        $.ajax({
            url: Sp.config.host+'/api/feedback/feedbackNote',
            method:"GET",
            success: function(res){
                if(res && res.code ==0){
                    self.setState({
                        statusLogTags: res.data
                    });
                    self.props.onChange(this.state);
                }else{
                    Sp.message('获得状态标签列表失败','error');
                }
            }
        });
    },
    componentDidMount: function(){
        this._getTags();
    },
    render: function(){
        var self = this;
        return (
            <div className="addAdviceModel">
                <div className="mb10">
                    <Textarea r
                        ows="5"
                        id="advice_value"
                        value={this.state.advice_value}
                        onChange={this.onChangeValue}
                        placeholder='请输入记录'>
                    </Textarea>
                </div>
                <div className="mb10">
                    {this.state.statusLogTags.map(function(item){
                        return (
                            <Button
                                key={item.id}
                                onClick={self.onSelectTag.bind(self,item.id)}
                                className="mr10" bsStyle={$.inArray(item.id,self.state.selectTagIds)>=0?"info":"warning"}>
                            {item.name}
                            </Button>
                        )
                    })}
                    <a onClick={this.onAddTag} href="javascript:void(0);">添加新标签</a>
                </div>
            </div>
        )
    }
});




var UserLog = React.createClass({
    mixins:[ModalMixins],
    getInitialState: function(){
        return {
            list: [],
            modalData : null
        }
    },
    addAdvice: function () {
        var detail = Store().detail;
        var self = this;
        var last = detail['status_log'][detail['status_log'].length-1];
        var onChange = function(res){
            self.setState({
                modalData: res
            })
        };

        var model = this.showModal( <AddAdviceModel onChange={onChange} statusId={this.props.statusId} logNote={last['log_note']} /> , '添加用户记录', function(){

            var modalData = self.state.modalData;

            if(!modalData) return;

            if(!modalData.selectTagIds.length){
                Sp.message("标签必须选择一个或者以上","error");
                return;
            }
            if(!modalData.advice_value.length){
                Sp.message("记录不能为空","error");
                return;
            }

            $.ajax({
                url: Sp.config.host + '/api/aftersales/feedbackLog',
                method: "POST",
                data: {
                    feedback: modalData.advice_value,
                    after_sales_id: Store().id
                },
                success: function(res){
                    if(res && res.code ==0 ){
                        // 绑定标签
                        modalData.selectTagIds.map(function(tag){
                            $.ajax({
                                url: Sp.config.host + '/api/feedback/feedbackLogNote',
                                method: "POST",
                                data: {
                                    "feedback_log_id": res.data.id,
                                    "note_id": tag,
                                    "type_id": 2
                                },
                                success: function(){

                                }
                            })
                        });
                        self._getLog();
                        Sp.message("添加用户记录成功");
                    }else{
                        Sp.message("添加用户记录失败","error");
                    }
                }
            });

        });
        ModalManager.create(model);
    },
    _getLog: function(){
        var state = this.state,
            self = this,
            detail = Store().detail;
        $.ajax({
            url: Sp.config.host + '/api/aftersales/feedbackLog',
            data: {
                after_sales_id: Store().id
            },
            success: function(res){
                if(res && res.code==0){
                    state.list = res.data;
                    self.setState(state);
                }
            }
        });
    },
    componentDidMount: function(){
        this._getLog();
    },
    render: function () {

        var $statusNode = this.state.list.map(function(item){
            return (
                <tr key={item.id}>
                    <td></td>
                    <td>
                            {item['created_at']}
                    </td>
                    <td>
                            {item['status']}
                    </td>
                    <td>
                            {item['feedback']}
                    </td>
                    <td>
                            {item['log_note'].map(function(log){
                                return (
                                    <span key={log.id} className="mr10">{log['note']['name']}</span>
                                )
                            })}
                    </td>
                    <td>{item['created_by']}</td>
                </tr>
            )

        });

        var detail = Store().detail;
        var last = detail['status_log'][detail['status_log'].length-1];

        return (
            <div className="userRecord">
                <div className="mt20 mb20 clearfix">
                    <div className="fl">
                        当前状态：{last?last['status']:''}   ({last?last['created_at']:''})
                    </div>
                    <div className="fr">
                        <Button
                            onClick={this.addAdvice}
                            className="mr10"
                            bsStyle='warning'>
                        添加记录
                        </Button>
                    </div>
                </div>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="200">时间</th>
                            <th width="100">状态</th>
                            <th width="*">用户反馈记录</th>
                            <th width="300"> 标签 </th>
                            <th width="100">操作人</th>
                        </tr>
                    </thead>
                    <tbody>
                        {$statusNode}
                    </tbody>
                </Table>
            </div>
        )
    }
});

/**
 * Widget
 */
var Widget = React.createClass({
    render: function () {
        return (
            <div className="order-record-box">
                <TabList bsStyle='orange75' listName='orderRecord'>
                    <Tab pane='orderRecord:record' active>跟踪信息</Tab>
                    <Tab pane='orderRecord:log'>用户记录</Tab>
                </TabList>
                <TabContent>
                    <TabPane ref='orderRecord:record' active>
                        <InfoBox />
                    </TabPane>
                    <TabPane ref='orderRecord:log'>
                        <UserLog />
                    </TabPane>
                </TabContent>
            </div>
        )
    }
});

module.exports = Widget;
