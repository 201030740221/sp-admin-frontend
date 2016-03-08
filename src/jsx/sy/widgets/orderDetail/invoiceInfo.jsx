/** @jsx React.DOM */

var actions = flux.actions.orderDetailActions;
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
var Store = flux.store("orderDetailStore").getState;

var EditModal = React.createClass({
    getInitialState: function(){
        return {
            companyName: '',
            company: 0
        }
    },
    onChangeCompanyName: function(e){
        var val = e.target.value;
        this.setState({
            companyName: val
        });
        this.props.onChange(this.state);
    },
    onChangeCompany: function(e){
        var val = e.target.value;
        this.setState({
            company: parseInt(val)
        });
        this.props.onChange(this.state);
    },
    componentDidMount: function(){
        var store = Store();
        var invoiceInfo = store.detail.invoice;
        this.setState({
            companyName: typeof invoiceInfo.company_name != "undefined"?invoiceInfo.company_name:'',
            company: typeof invoiceInfo.title_type !="undefined"?invoiceInfo.title_type:''
        })
    },
    render: function(){
        var classes = classSet({
            'hidden': !this.state.company,
            'mb10': true
        });
        return (
            <div className="edit_invoiceinfo">
                <div className="mb10">
                    <Select value={this.state.company} onChange={this.onChangeCompany}>
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
                        value={this.state['companyName']}
                        placeholder='请输入公司名'
                    />
                </div>
            </div>
        )
    }
});

var InvoiceInfo = React.createClass({
    mixins:[ModalMixins],
    getInitialState: function(){
        return {
            modalData: null
        }
    },
    onShowModel: function(){
        var self = this;

        var onChange = function(res){
            self.setState({
                modalData : res
            });
        };

        var model = this.showModal( <EditModal onChange={onChange} /> , '修改发票内容', function(){
            var modalData = self.state.modalData;
            console.log(modalData);
            if(modalData)
                actions.onUpdateInvoice(modalData);
        });
        ModalManager.create(model);
    },
    render: function(){
        var store = Store();
        return this.renderList();
    },
    renderList: function () {
        var store = Store();
        var invoiceInfo = store.detail.invoice;
        return (
            <div className="invoiceInfo clearfix">
                <h4 className="list-title">
                    <span className="fl list-title__text">发票：</span>
                </h4>
                <div className="mt20" style={{textAlign: "right"}}>
                    <Button bsStyle='warning' onClick={this.onShowModel}>修改</Button>
                </div>
                <div className="userInfoTable">
                    <Table width="100%" className="bg-white mt10" striped>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>抬头：</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>内容：</td>
                                <td>（商品清单）</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
});

module.exports = InvoiceInfo;
