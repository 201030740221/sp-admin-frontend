/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-detail';
var confirmMixins = require('../list/confirmMixins.jsx');
var CreateModal = require('./createModal.jsx');

var View = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName), confirmMixins],
    getInitialState: function() {
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
        Action.updateSubNavigationStatus(data);
    },
    handleEdit: function(item){
        ModalManager.create(this.getCreateModal(item));
    },
    updateNavigation: function(data){
        Action.updateNavigation(data, data.id);
    },
    getCreateModal: function(item){
        var store = this.state[storeName];
        var parent = store.parent;
        var data = {
            id: item.id,
            name: item.name,
            real_uri: item.real_uri,
            sort_id: item.sort_id
        };
        if(item.cover){
            data.cover = item.cover;
        }
        if(parent !=null){
            return (
                <Modal>
                    <CreateModal ok={this.updateNavigation} data={data}></CreateModal>
                </Modal>
            );
        }
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
        var list = store.list;
        var status = ["未启用","已启用"];
        var pc_host = location.origin.replace('admin', 'www') + '/'
        if(list && list.length){
            return list.map(function(item, i){
                var real_uri = item.real_uri ? pc_host + item.real_uri : '';
                var img = '';
                if(item.cover){
                    img = item.cover.media.full_path;
                }
                return (
                    <tr key={i}>
                        <td width="20%">
                            <img src={img} alt="没有图片" width="20%"/>
                            {item.name}
                        </td>
                        <td width="40%"><a href={real_uri}>{real_uri}</a></td>
                        <td width="10%">{status[item.status]}</td>
                        {_this.renderSortActions(item, i, list)}
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
                        <th width="20%">子栏目信息</th>
                        <th width="40%">链接</th>
                        <th width="10%">状态</th>
                        <th width="10%">展示顺序</th>
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
