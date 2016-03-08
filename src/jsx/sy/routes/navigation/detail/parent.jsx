/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-detail';
var confirmMixins = require('../list/confirmMixins.jsx');

var View = React.createClass({

    mixins: [liteFlux.mixins.storeMixin(storeName), confirmMixins],
    getInitialState: function() {
        return {
            error: {}
        };
    },
    // handleDelete: function(item){
    //     this.confirm('删除栏目' ,'确定删除: '+ item.name + '?', function(){
    //         Action.deleteNavigation(item);
    //     });
    // },
    handleSetStatus: function(item){
        var data = {
            id: item.id,
            status: item.status == 1 ? 0 : 1
        };
        Action.updateNavigationStatus(data);
    },
    handleEdit: function(item){
        Action.onSetStore({
            edit: 1
        });
    },
    handleSave: function(item){
        var valid = this.valid('name','real_uri');
        if(valid.valid){
            this.setState({
                error: {}
            });
            Action.onSetStore({
                edit: 0
            });
            Action.updateNavigation({
                id: item.id,
                name: this.refs['name'].getDOMNode().value,
                real_uri: this.refs['real_uri'].getDOMNode().value,
                sort_id: item.sort_id
            });
        }
    },
    valid: function(){
        var _this = this;
        var valid = true;
        var data = {};
        [].map.call(arguments, function(item, i){
            console.log(item, i);
            var ipt = _this.refs[item].getDOMNode();
            var value = ipt.value;
            if(!value){
                _this.setError(item, item + '不能为空!');
                Sp.message(item + '不能为空!','error');
                valid = false;
                data[item] = false;
            }else if(item == 'name' && value && value.length > 10){
                _this.setError(item, '名称长度不能大于10个字符!');
                Sp.message('名称长度不能大于10个字符!','error');
                valid = false;
                data[item] = false;
            }else{
                data[item] = value;
            }
        });
        return {
            valid: valid,
            data: data
        }
    },
    setError: function(name, text){
        var error = this.state.error;
        error[name] = text || '';
        this.setState({
            error: error
        });
    },
    renderActions: function(item){
        var store = this.state[storeName];
        var _this = this;
        if(store.edit == 0){
            editBtn = <BLabel bsStyle="info" onClick={_this.handleEdit.bind(null, item)}>编辑</BLabel>;
        }else{
            editBtn = <BLabel bsStyle="success" onClick={_this.handleSave.bind(null, item)}>保存</BLabel>;
        }
        if(item.status == 1){
            return (
                <td width="20%">
                    <BLabel bsStyle="danger" onClick={_this.handleSetStatus.bind(null, item)}>禁用</BLabel>{' '}
                </td>
            )
        }else{
            return (
                <td width="20%">
                    <BLabel bsStyle="success" onClick={_this.handleSetStatus.bind(null, item)}>启用</BLabel>{' '}
                    {editBtn}
                </td>
            )

        }
    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        var parent = store.parent;
        var status = ["未启用","已启用"];
        var error = this.state.error || {};
        var pc_host = location.origin.replace('admin', 'www') + '/'
        if(parent != null){
            var item = parent;
            var real_uri = item.real_uri ? pc_host + item.real_uri : '';
            var url = <a href={real_uri}>{real_uri}</a>
            var name = item.name, path;
            if(store.edit == 1){
                name = <Input defaultValue={item.name} ref="name" onFocus={this.setError.bind(null, 'name', '')} />
                path = <Input defaultValue={item.real_uri} ref="real_uri" onFocus={this.setError.bind(null, 'real_uri', '')} />
                url = <div className="form-inline">{pc_host}{path}</div>
            }
            return (
                <tr>
                    <td width="20%">
                        {name}
                        <HelpBlock>{error['name']}</HelpBlock>
                    </td>
                    <td width="40%">
                        {url}
                        <HelpBlock>{error['real_uri']}</HelpBlock>
                    </td>
                    <td width="20%">{status[item.status]}</td>
                    {_this.renderActions(item)}
                </tr>
            )
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
        if(store.parent === null){
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
