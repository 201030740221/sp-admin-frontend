/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/list/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-list';
var confirmMixins = require('./confirmMixins.jsx');

var View = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName), confirmMixins],
    getInitialState: function() {
        Action.getNavigationList({
            status: 1
        });
        return {
        };
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
        Action.updateActiveNavigationStatus(data, item);
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
    handleUpdateSort: function(item, i, list, type){
        var tmp;
        tmp = list[i];
        list[i] = list[i + type];
        list[i+type] = tmp;
        // var param = {
        //     ids: [],
        //     sort_ids: []
        // };
        // list.map(function(_item, _i){
        //     param.ids.push(_item.id);
        //     param.sort_ids.push(_i + 1);
        // });
        Action.updateNavigationSortIdMultiply(list);
    },
    renderSortActions: function(item, i, list){
        var _this = this;
        if(list.length < 2){
            return (
                <td width="10%">
                </td>
            )
        }
        if(i == 0){
            return (
                <td width="10%">
                    <BLabel bsStyle="info" onClick={_this.handleUpdateSort.bind(null, item, i, list, 1)}>下移</BLabel>
                </td>
            )
        }else if(i == list.length - 1){
            return (
                <td width="10%">
                    <BLabel bsStyle="info" onClick={_this.handleUpdateSort.bind(null, item, i, list, -1)}>上移</BLabel>{' '}
                </td>
            )
        }else{
            return (
                <td width="10%">
                    <BLabel bsStyle="info" onClick={_this.handleUpdateSort.bind(null, item, i, list, -1)}>上移</BLabel>{' '}
                    <BLabel bsStyle="info" onClick={_this.handleUpdateSort.bind(null, item, i, list, 1)}>下移</BLabel>
                </td>
            )
        }

    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        var list = store.activeList;
        var status = ["未启用","已启用"];
        var empty = (
            <tr>
                <td colSpan={4} className="text_center">暂无数据</td>
            </tr>
        );
        var pc_host = location.origin.replace('admin', 'www') + '/'
        if(list && list.length){
            var items = [];
            list.map(function(item, i){
                var real_uri = item.real_uri ? pc_host + item.real_uri : '';
                if(item.status == 1){
                    items.push(
                        <tr key={i}>
                            <td width="20%">{item.name}</td>
                            <td width="40%"><a href={real_uri}>{real_uri}</a></td>
                            {_this.renderSortActions(item, i, list)}
                            <td width="10%">{status[item.status]}</td>
                            {_this.renderActions(item)}
                        </tr>
                    )
                }
            });
            if(items.length){
                return items;
            }else{
                return empty;
            }
        }else{
            return empty;
        }
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        if(store.activeList === null){
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
                        <th width="10%">排序</th>
                        <th width="10%">状态</th>
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
