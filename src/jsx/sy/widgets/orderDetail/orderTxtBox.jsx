/** @jsx React.DOM */

var actions = flux.actions.orderDetailActions;
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var Store = flux.store("orderDetailStore").getState;

/**
 * 订单跟踪
 */
var OrderRecord = React.createClass({
    render: function () {
        var $processNode = this.props.processLog.reverse().map(function(item){
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
                            <th width="200">时间</th>
                            <th width="*">操作记录</th>
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
            orderId: this.props.orderId,
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
                    Sp.message('获得订单状态标签列表失败','error');
                }
            }
        });
    },
    componentDidMount: function(){
        var self = this;
        var state = this.state;
        state.orderId = this.props.orderId;
        state.orderId = this.props.orderId;

        this._getTags();
    },
    render: function(){
        var self = this;
        return (
            <div className="addAdviceModel">
                <div className="mb10">
                    <Textarea
                        rows="5"
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
                    <a
                        onClick={this.onAddTag}
                        href="javascript:void(0);">
                    添加新标签
                    </a>
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
        var self = this;
        var last = this.props.statusLog[this.props.statusLog.length-1];
        var onChange = function(res){
            self.setState({
                modalData: res
            })
        };

        var model = this.showModal( <AddAdviceModel onChange={onChange} orderId={this.props.orderId} statusId={this.props.statusId} logNote={last['log_note']} /> , '添加用户记录', function(){

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
                url: Sp.config.host + '/api/order/feedbackLog',
                method: "POST",
                data: {
                    feedback: modalData.advice_value,
                    order_id: modalData.orderId
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
                                    "type_id": 1
                                },
                                success: function(){

                                }
                            })
                        });
                        Sp.message("添加用户记录成功");
                        self._getLog();
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
            self = this;

        $.ajax({
            url: Sp.config.host + '/api/order/feedbackLog',
            data: {
                order_id: Store().id
            },
            success: function(res){
                if(res && res.code==0){
                    state.list = res.data;
                    self.setState(state);
                }
            }
        })
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
        var last = this.props.statusLog[this.props.statusLog.length-1];
        return (
            <div className="userRecord">
                <div className="mt20 mb20 clearfix">
                    <div className="fl">
                        当前状态：{last?last['status']:''}   ({last?last['created_at']:''})
                    </div>
                    <div className="fr">
                        <Button onClick={this.addAdvice} className="mr10" bsStyle='warning'>添加记录</Button>
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
 * 付款信息
 */
var PayRecord = React.createClass({
    render: function () {
        var self = this;
        var $paymentNode = this.props.paymentHistoryLog.reverse().map(function(item){
            return (
                <tr key={item.id}>
                    <td></td>
                    <td>
                        ￥{item.total}
                    </td>
                    <td>{self.props.payment && self.props.payment['partner']}({self.props.payment && self.props.payment['account']})</td>
                    <td>{item.type}</td>
                    <td>{item['created_at']}</td>
                </tr>
            )
        });
        return (
            <div className="orderRecord">
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="*">金额</th>
                            <th width="300">交易方式</th>
                            <th width="200">交易说明</th>
                            <th width="200">交易时间</th>
                        </tr>
                    </thead>
                    <tbody>
                    {$paymentNode}
                    </tbody>
                </Table>
            </div>
        )
    }
});


/**
 * 发票信息
 */
var actions = flux.actions.orderDetailActions;
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var Store = flux.store("orderDetailStore").getState;

var EditModal = React.createClass({

    getInitialState: function(){
        var props = this.props;
        var invoiceInfo = props.invoiceInfo;
        var expressInfo = props.expressInfo;
        if(invoiceInfo == undefined || invoiceInfo == null){
            invoiceInfo = {};
        }
        if(expressInfo== undefined || expressInfo==null){
            expressInfo = {};
        }
        console.log(invoiceInfo);
        return {
                "type":invoiceInfo.type!=undefined?invoiceInfo.type:0,
                "title_type":invoiceInfo.title_type!=undefined?invoiceInfo.title_type:0,
                "id":invoiceInfo.id!=undefined?invoiceInfo.id:0,
                "content_type":invoiceInfo.content_type!=undefined?invoiceInfo.content_type:0,
                "if_invoice": typeof invoiceInfo.invoice_tax_no!=""?1:0,
                "company_name":invoiceInfo.company_name!=undefined?invoiceInfo.company_name:"",
                "invoice_tax_no":invoiceInfo.invoice_tax_no,
                "express":{
                    "express_no":expressInfo.express_no!=undefined?expressInfo.express_no:'',
                    "partner_id":expressInfo.partner_id!=undefined?expressInfo.partner_id:2
                }
        }
    },
    onChangeCompanyName: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.company_name=val;
        this.setState(state);
        this.props.onChange(state);
    },
    onChangeCompany: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.title_type=parseInt(val);
        this.setState(state);
        this.props.onChange(state);
    },
    onChangeCompanyPrint: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.if_invoice=val;
        this.setState(state);
        this.props.onChange(state);
    },
    onChangeExpressName: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.express.partner_id=val;
        this.setState(state);
        this.props.onChange(state);
    },
    onChangeInvoiceNo: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.invoice_tax_no=val;
        this.setState(state);
        this.props.onChange(state);
    },
    onChangeExpressNo: function(e){
        var self = this;
        var val = e.target.value;
        var state = this.state;
        state.express.express_no=val;
        this.setState(state);
        this.props.onChange(state);
    },
    componentDidMount: function(){

    },

    render: function(){
        var classes = classSet({
            'hidden': !this.state['title_type'],
            'mb10': true
        });
        /*是否已开发票*/
        var invoice_no_show;
        if(this.state.invoice_tax_no == '') {
            invoice_no_show = '否';
        }
        if(this.state.invoice_tax_no != '') {
            invoice_no_show = '是';
            if(this.state.invoice_tax_no == undefined) {
                invoice_no_show = ' ';
            }
        }
        return (
            <div className="edit_invoiceinfo">
                <div className="mb10">
                    <Select value={this.state.title_type} onChange={this.onChangeCompany}>
                        <option value="0">个人</option>
                        <option value="1">公司</option>
                    </Select>
                </div>
                <div className={classes}>
                    <label>公司：</label>
                    <Input
                        type='text'
                        id="j-invoice-model-company-name"
                        onChange={this.onChangeCompanyName}
                        value={this.state.company_name}
                        placeholder='请输入公司名'
                        />
                </div>
                <div className="mb10">
                    <label>是否已开发票：{invoice_no_show}</label>

                </div>
                <div className="mb10">
                    <label>发票单号：</label>
                    <Input
                        type='text'
                        id="j-invoice-model-invoice-id"
                        onChange={this.onChangeInvoiceNo}
                        value={this.state.invoice_tax_no}
                        placeholder='请输入发票单号'
                        />
                </div>
                <div className="mb10">
                    <label>快递公司：</label>
                    <Select value={this.state.express.partner_id} onChange={this.onChangeExpressName}>
                        <option value="2">顺丰</option>
                    </Select>
                </div>
                <div className="mb10">
                    <label>快递单号：</label>
                    <Input
                        type='text'
                        id="j-invoice-model-express-no"
                        onChange={this.onChangeExpressNo}
                        value={this.state.express.express_no}
                        placeholder='请输入快递单号'
                        />
                </div>
            </div>
        )
    }
});

var InvoiceRecord = React.createClass({
    mixins:[ModalMixins],
    getInitialState: function(){
        return {
            modalData: this.props.invoice
        }
    },
    onShowModel: function(member_id){
        var self = this;
        var props = this.props;
        var expressInfo = props.invoice.express;
        var invoiceInfo = props.invoice;
        var onChange = function(res){
            self.setState({
                modalData : res
            });
        };

        var model = this.showModal( <EditModal onChange={onChange} invoiceInfo={invoiceInfo} expressInfo={expressInfo}/> , '修改发票内容', function(){
            var modalData = self.state.modalData;
            if(modalData)
                actions.onUpdateInvoice(modalData,member_id);
        });
        ModalManager.create(model);
    },
    render: function () {
        var props = this.props;
        var expressInfo = props.invoice.express;
        var invoiceInfo = props.invoice;
        if(invoiceInfo == undefined || invoiceInfo == null){
            invoiceInfo = {};
        }
        if(expressInfo== undefined || expressInfo==null){
            expressInfo = {};
        }
        var type_show , invoice_no_show , expressInfo_show;
        /*发票抬头*/
        switch(invoiceInfo.title_type){
            case 0:
                type_show = '个人';
                break;
            case 1:
                type_show = invoiceInfo.company_name;
                break;
            case undefined:
                type_show = ' ';
                break;
        }
        /*是否已开发票*/
        if(invoiceInfo.invoice_tax_no == '') {
            invoice_no_show = '否';
        }
        if(invoiceInfo.invoice_tax_no != '') {
            invoice_no_show = '是';
            if(invoiceInfo.invoice_tax_no == undefined) {
                invoice_no_show = ' ';
            }
        }
        /*快递公司*/
        switch(expressInfo.partner_id){
            case 2:
                expressInfo_show = '顺丰';
                break;
            case undefined:
                expressInfo_show = ' ';
                break;
        }
        return (
            <div className="invoiceRecord">
                <div className="mt20" style={{textAlign: "right"}}>
                    <Button bsStyle='warning' onClick={this.onShowModel.bind(null,props.member_id)}>修改</Button>
                </div>
                <Table width="100%" className="bg-white mt10" striped>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>发票抬头：</td>
                            <td>{type_show}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>是否已开发票：</td>
                            <td>{invoice_no_show}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>发票单号：</td>
                            <td>{invoiceInfo.invoice_tax_no}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>快递公司：</td>
                            <td>{expressInfo_show}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>快递单号：</td>
                            <td>{expressInfo.express_no}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
});


/**
 * 配送方式
 */

var ExpressModel = React.createClass({
    getInitialState: function(){
        return {
            partner_id: "",
            express_no: ""
        }
    },
    onChangeExpressNo: function(e){
        var val = e.target.value;
        this.setState({express_no: val });
    },
    onChangePartnerId: function(e){
        var val = e.target.value;
        this.setState({partner_id: val });
    },
    componentDidMount: function(){
        var express = this.props.express;
        this.setState({
            partner_id: express!=null ? express['partner_id'] : 2,
            express_no: express!=null ? express['express_no'] : ''
        });
    },
    render: function(){
        var express = this.state;
        return (
            <div className="edit_express">
                <div className="mb10">
                    <Select id="j-express-model-partner-id" onChange={this.onChangePartnerId} value={express['partner_id']}>
                        <option value="0">无需物流</option>
                        <option value="1">卡行天下</option>
                        <option value="2">顺丰快递</option>
                        <option value="3">德邦物流</option>
                        <option value="4">申通快递</option>
                        <option value="5">圆通快递</option>
                        <option value="6">中通快递</option>
                        <option value="7">韵达快递</option>
                        <option value="8">汇通快递</option>
                    </Select>
                </div>
                <div className="mb10">
                    <Input type='text' id="j-express-model-no" onChange={this.onChangeExpressNo} value={express['express_no']} placeholder='请输入运单号' />
                </div>
            </div>
        )
    }
});



var Express = React.createClass({
    mixins:[ModalMixins],
    onShowModel: function(item){
        var store = Store();
        var express = item;
        if( store.detail.status_id==3 || store.detail.status_id==4 ){
            var model = this.showModal( <ExpressModel express={express} /> , '修改配送方式', function(){
                var partner_id = $("#j-express-model-partner-id").val(),
                    num = $("#j-express-model-no").val();
                if(parseInt(partner_id)!=0){
                    if($.trim(num)!=''){
                        if(express)
                            actions.onUpdateExpress(partner_id,num,item.id,false); //修改
                        else
                            actions.onUpdateExpress(partner_id,num,'',true); //新建
                    }else{
                        Sp.message('运单号不能为空');
                    }
                }else{
                    if(express)
                        actions.onUpdateExpress(partner_id,num,item.id,false); //修改
                    else
                        actions.onUpdateExpress(partner_id,num,'',true); //新建
                }
            });
            ModalManager.create(model);
        }else{
            Sp.message("当前状态不可以更改配送方式","error");
        }


    },
    render: function () {
        var _this = this;
        var express = this.props.express;
        var addNode = '';
        if(express==null||express==''){
            addNode = (
                <span className="fl"><Button onClick={_this.onShowModel.bind(null,'')} bsStyle='warning' style={{marginLeft:'150'}}>新加配送方式</Button></span>
            )
        }
        return (
            <div className="orderRecord">
                <div className="mt20 hidden" style={{textAlign: "right"}}>

                </div>
                <h4 className="list-title">
                    <span className="fl list-title__text">配送方式：</span>
                    {addNode}
                </h4>
                {
                    express.map(function(item,key){
                        return(
                            <div className="addLogistics" style={{marginBottom:'30'}}>
                                <div>
                                    <Col sm={2} style={{textAlign:'right'}}>快递公司:</Col><Col sm={10} style={{minHeight:'30'}}>{item.express_partner}</Col>
                                </div>
                                <div>
                                    <Col sm={2} style={{textAlign:'right'}}>运单号:</Col><Col sm={10} style={{minHeight:'30'}}>{item.express_no}</Col>
                                </div>
                                <div>
                                    <Col sm={2}></Col><Col sm={10}><Button onClick={_this.onShowModel.bind(null,item)} bsStyle='warning' style={{marginLeft:'150'}}>修改配送方式</Button></Col>
                                </div>
                                <div style={{clear:'both'}}></div>
                            </div>
                        )
                    })
                }
                <h4 className="list-title">
                    <span className="fl list-title__text">物流跟踪信息：</span>
                </h4>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-orange65 fg-white'>
                        <tr>
                            <th width="50"></th>
                            <th width="200">时间</th>
                            <th width="*">地点</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>暂无记录</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
});

/**
 * 订单记录
 */
var OrderTxtBox = React.createClass({
    handleSelect: function (itemprops) {
        //alert(itemprops.pane);
    },
    render: function () {
        if(this.props.invoice == undefined || this.props.invoice == null){
            this.props.invoice = {};
        }
        if(this.props.invoice.express == undefined || this.props.invoice.express==null){
            this.props.invoice.express = {};
        }
        return (
            <div className="order-record-box">
                <TabList bsStyle='orange75' onTabSelect={this.handleSelect} listName='orderRecord'>
                    <Tab pane='orderRecord:record' active>订单跟踪</Tab>
                    <Tab pane='orderRecord:status'>用户记录</Tab>
                    <Tab pane='orderRecord:pay'>付款信息</Tab>
                    <Tab pane='orderRecord:invoice'>发票信息</Tab>
                    <Tab pane='orderRecord:delivery'>配送信息</Tab>
                </TabList>
                <TabContent>
                    <TabPane ref='orderRecord:record' active>
                        <OrderRecord processLog={this.props.processLog}></OrderRecord>
                    </TabPane>
                    <TabPane ref='orderRecord:status'>
                        <UserLog orderId={this.props.orderId} statusId={this.props.statusId} statusLog={this.props.statusLog}></UserLog>
                    </TabPane>
                    <TabPane ref='orderRecord:pay'>
                        <PayRecord payment={this.props.payment} paymentHistoryLog={this.props.paymentHistoryLog}></PayRecord>
                    </TabPane>
                    <TabPane ref='orderRecord:invoice'>
                        <InvoiceRecord member_id={ this.props.member_id} invoice={this.props.invoice} express={this.props.invoice.express}></InvoiceRecord>
                    </TabPane>
                    <TabPane ref='orderRecord:delivery'>
                        <Express express={this.props.express}></Express>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
});
module.exports = OrderTxtBox;
