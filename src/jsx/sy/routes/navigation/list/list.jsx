/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/list/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-list';
var confirmMixins = require('./confirmMixins.jsx');

var View = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName), confirmMixins],
    getInitialState: function() {
        this.init();
        return {
        };
    },
    init: function(props){
        Action.getNavigationList();
    },
    handleDelete: function(item){
        this.confirm('删除栏目' ,'确定删除: '+ item.name + '?', function(){
            Action.deleteNavigation(item);
        });
    },
    handleSetStatus: function(item){
        var data = {
            id: item.id,
            status: item.status == 1 ? 0 : 1
        };
        Action.updateNavigationStatus(data);
    },
    handleEdit: function(item){
        // Action.deleteNavigation(item);
        RRouter.routing.navigate('/navigation/detail/'+item.id);
    },
    renderActions: function(item){
        var _this = this;
        if(item.status == 1){
            return (
                <td width="20%">
                    <BLabel bsStyle="danger" onClick={_this.handleSetStatus.bind(null, item)}>禁用</BLabel>{' '}
                    <BLabel bsStyle="info" onClick={_this.handleEdit.bind(null, item)}>编辑</BLabel>{' '}
                </td>
            )
        }else{
            return (
                <td width="20%">
                    <BLabel bsStyle="success" onClick={_this.handleSetStatus.bind(null, item)}>启用</BLabel>{' '}
                    <BLabel bsStyle="info" onClick={_this.handleEdit.bind(null, item)}>编辑</BLabel>{' '}
                    <BLabel bsStyle="danger" onClick={_this.handleDelete.bind(null, item)}>删除</BLabel>{' '}
                </td>
            )

        }
    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        var list = store.list;
        var status = ["未启用","已启用"];
        var pc_host = location.origin.replace('admin', 'www') + '/'
        if(list && list.length){
            return list.map(function(item, i){
                var real_uri = item.real_uri ? pc_host + item.real_uri : '';
                return (
                    <tr key={i}>
                        <td width="20%">{item.name}</td>
                        <td width="40%"><a href={real_uri}>{real_uri}</a></td>
                        <td width="20%">{status[item.status]}</td>
                        {_this.renderActions(item)}
                    </tr>
                )
            });
        }else{
            return (
                <tr>
                    <td colSpan={4} className="text_center">暂无数据</td>
                </tr>
            )
        }
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        if(store.list === null){
            return (
                <div className="ionTabs__preloader"></div>
            );
        }
        return (
            <Table striped>
                <thead className='bg-orange65 fg-white'>
                    <tr>
                        <th width="20%">栏目名称</th>
                        <th width="40%">链接</th>
                        <th width="20%">状态</th>
                        <th width="20%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {_this.renderList()}
                </tbody>
            </Table>
        );
    }
});


module.exports = View;
