/** @jsx React.DOM */

var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/preSale/listStore.jsx');

var TrList = React.createClass({
    render: function(){
        var item = this.props.item;
        item.member= item.member || {};
        return (
            <tr>
                <td width="50"></td>
                <td className='text_center'>{item.created_at}</td>
                <td className='text_center'>{item.member.name}</td>
                <td className='text_center'>{item.target}</td>
                <td className='text_center'>{item.has_coupon?'有':'没有'}</td>
            </tr>
        )
    }
});

var Widget = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('preSale')],
    getInitialState: function(){
        return {
            source: {}
        }
    },
    searchSource: function(page){
        var _this = this;
        var request_data = {
            page_size: 15,
            page: page
        };
        var id = this.props.id;
        liteFlux.action("preSale").getPreSaleRemind(id,request_data,function(data){
            _this.setState({
                source: data
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

        return (
            <div>
                <Table width="100%" className="bg-white mt10" striped>
                    <thead className='bg-desaturateddarkblue75 fg-white'>
                    <tr>
                        <th width="50"></th>
                        <th className='text_center'>设置时间</th>
                        <th className='text_center'>用户名</th>
                        <th className='text_center'>接收手机号码</th>
                        <th className='text_center'>是否有优惠券</th>
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
