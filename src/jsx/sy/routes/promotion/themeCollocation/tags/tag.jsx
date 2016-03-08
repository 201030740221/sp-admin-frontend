/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/tags/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-tags';

var sortable = require('./sortableMixins.js');
var confirmMixins = require('../detail/confirmMixins.jsx');

// Item Component use `ItemMixin`
var Item = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), sortable.ItemMixin, confirmMixins],
    getInitialState: function() {
        return {
            item: this.props.item,
            cid: this.props.cid
        };
    },
    componentWillReceiveProps: function(props) {
        this.setState({
            item: props.item,
            cid: props.cid
        });
    },
    handleDelete: function(item, e){
        e.stopPropagation();
        this.confirm('删除标签', '确定删除标签: '+ item.tag.name + '?', function(){
            Action.deleteTag({
                id: item.tag_id,
                theme_collocation_tag_category_id: item.theme_collocation_tag_category_id
            });
        });
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        var item = {
            tag: {}
        };
        var category = {};
        store.list.map(function(_item, i){
            if(_item.id == _this.state.cid){
                category = _item;
            }
        });
        if(category.tags){
            category.tags.map(function(_item, i){
                if(_item.id == _this.state.item){
                    item = _item;
                }
            });
        }
        return (
            <li className="user-select-none cur-p active">
                {item.tag.name}
                <Icon glyph='icon-feather-square-cross' onClick={this.handleDelete.bind(null, item)}/>
            </li>
        )
    }
});

// List Component use `ListMixin`
var List = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), sortable.ListMixin],
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        this.update(this.props);
    },
    // getInitialState: function() {
    //     return {
    //         items: this.props.items
    //     };
    // },
    componentWillReceiveProps: function(props) {
        this.update(props);
    },
    update: function(props){
        // Set items' data, key name `items` required
        this.setState({
            items: props.items,
            cid: props.cid
        });
    },
    onResorted: function(items){
        console.log(items);
        var _this = this;
        Action.updateTagSortIdMultiply(items);
    },
    render: function() {
        var cid = this.state.cid;
        var items = this.state.items.map(function(item, i) {
            // Required props in Item (key/index/movableProps)
            return <Item cid={cid} key={item} item={item} index={i} {...this.movableProps}/>;
        }, this);

        return (
            <ul style={{position: 'relative'}}  className="user-select-none collocation-tags can-delete">
                {items}
            </ul>
        );
    }
});

module.exports = List;
