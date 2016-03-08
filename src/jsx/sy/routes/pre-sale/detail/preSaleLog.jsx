/** @jsx React.DOM */

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/preSale/listStore.jsx');

var TrList = React.createClass({
    render: function(){
        var item = this.props.item || {};
        item.order = item.order || {};
        item.order.member = item.order.member || {};

        var create_source = '';
        switch(item.order.create_source){

            case 1: create_source = 'PC网页端';
                    break;
            case 2: create_source = '移动网页端';
                    break;
            case 3: create_source = 'iOS端';
                    break;
            case 4: create_source = 'Android端';
                    break;

        }
        return (
            <tr>
                <td width="50"></td>
                <td>{item.order.created_at}</td>
                <td>{item.order.member.name}</td>
                <td>{item.order.order_no}</td>
                <td>{item.coupon_used==1?'是':'否'}</td>
                <td>{create_source}</td>
            </tr>
        )
    }
});

var Widget = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('preSale')],
    getInitialState: function(){
        return {
            source: {},
            detailData: {}
        }
    },
    searchSource: function(page){
        var _this = this;
        var request_data = {
            page_size: 15,
            page: page
        };
        var id = this.props.id;
        liteFlux.action("preSale").getPreSaleLog(id,request_data,function(data){
            _this.setState({
                source: data
            })
        });
        liteFlux.action("preSale").getPreSaleDetail(id,{},function(data){
            _this.setState({
                detailData: data
            })
        });
    },
    componentDidMount: function () {
        this.searchSource(1);
    },
    componentWillReceiveProps: function (props) {

    },
    handleSearch: function(source,type){
        var page = source.current_page;
        if(type=='previous'){
            page = page-1;
        }
        if(type=='next'){
            page = page+1;
        }
        this.searchSource(page);
    },
    render: function () {

        var source = this.state.source;
        var dataList = source.data || [];

        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={this.handleSearch.bind(null,source,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={this.handleSearch.bind(null,source,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };

        var detailData = this.state.detailData;
        return (
            <div>
                <div className='mb15'>
                    <span className='ml30'>下单总数：{detailData.total_orders}</span>
                    <span className='ml30'>付定金：{detailData.predetermined_orders}</span>
                    <span className='ml30'>支付尾款：{detailData.paid_orders}</span>
                    <span className='ml30'>使用优惠券：{detailData.coupon_orders}</span>
                    <span className='ml30'>PC：{detailData.pc_orders}</span>
                    <span className='ml30'>M：{detailData.m_orders}</span>
                </div>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-desaturateddarkblue75 fg-white'>
                    <tr>
                        <th width="50"></th>
                        <th>下单时间</th>
                        <th>用户名</th>
                        <th>订单编号</th>
                        <th>是否用优惠券</th>
                        <th>渠道</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataList.map(function(item,key){
                            return (
                                <TrList
                                    item={item}
                                    key={key}
                                    />
                            )
                        })
                    }
                    </tbody>
                </Table>
                <hr/>
                {pagerNode()}
            </div>
        )
    }
});

module.exports = Widget;
