/** @jsx React.DOM */
/**
 * 模板筛选
 */

var ArticleStore = require('../../../modules/stores/preSale/listStore.jsx');

var liteFlux = require('lite-flux');


var Template = React.createClass({
    getInitialState: function () {
        return {
            dataList: {}
        }
    },
    componentDidMount: function(){
        var _this = this;
        var request_data = {
            type: 'page-presale'
        };
        liteFlux.action("preSale").getPreSaleTemplates(request_data,function(data){/**/
            _this.setState({
                dataList: data
            })
        });
    },
    onChangeStatus: function(type,e){
        var value = e.target.value;
        this.props.callBackTemplate(value,type);
    },
    render: function(){

        var _this = this;
        var dataList = this.state.dataList;
        var webList = [], mobileList = [];
       /* dataList.forEach(function(item,key){
            item.web = item.web || {};
            item.mobile = item.mobile || {};
            if(item.web.name){
                webList.push(item.web.name);
            }
            if(item.mobile.name){
                mobileList.push(item.mobile.name);
            }
        });*/
        for(var key in dataList){
            dataList[key].web = dataList[key].web || {};
            dataList[key].mobile = dataList[key].mobile || {};
            if(dataList[key].web.name){
                webList.push(dataList[key].web.name);
            }
            if(dataList[key].mobile.name){
                mobileList.push(dataList[key].mobile.name);
            }
        }

        var source = _this.props.source || {};

        return (
            <div>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>商品PC模板:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Select id='article_id' value={source.template} onChange={this.onChangeStatus.bind(null,'PC')} className="wa fl mr0">
                            <option value="-1">请选择模板</option>
                            {
                                webList.map(function (item, i) {
                                    return (
                                        <option key={i}>{item}</option>
                                    )
                                })
                            }
                        </Select>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={3} className='right_padding'>商品M端模板:</Label>
                    <Col sm={9} className="mb15 pr0">
                        <Select id='article_id' value={source.m_template} onChange={this.onChangeStatus.bind(null,'M')} className="wa fl mr0">
                            <option value="-1">请选择模板</option>
                            {
                                mobileList.map(function (item, i) {
                                    return (
                                        <option key={i}>{item}</option>
                                    )
                                })
                            }
                        </Select>
                    </Col>
                </FormGroup>
            </div>
        )
    }
});

module.exports = Template;
