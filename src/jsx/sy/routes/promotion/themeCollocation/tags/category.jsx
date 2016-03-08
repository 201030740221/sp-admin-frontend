/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/tags/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-tags';

var sortable = require('./sortableMixins.js');
var Tag = require('./tag.jsx');
var CreateModal = require('./createModal.jsx');
var confirmMixins = require('../detail/confirmMixins.jsx');

// Item Component use `ItemMixin`
var Item = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), sortable.ItemMixin, confirmMixins],
    getInitialState: function() {
        return {
            item: this.props.item
        };
    },
    componentWillReceiveProps: function(props) {
        this.setState({ item: props.item });
    },
    handleDelete: function(item, e){
        e.stopPropagation()
        this.confirm('删除分类' ,'确定删除分类: '+ item.name + '?', function(){
            Action.deleteTagCategory({
                id: item.id
            });
        });
    },
    handleShowModal: function(item, e){
        e.stopPropagation();
        ModalManager.create(this.getCreateModal(item));
    },
    createTag: function(data){
        Action.createTag(data);
    },
    getCreateModal: function(item){
        var data = {
            id: item.id
        };
        return (
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>新建标签</h4>
                </ModalHeader>
                <ModalBody>
                    <CreateModal ok={this.createTag} data={data}></CreateModal>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='default' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        var item = {};
        var tags =[];
        store.list.map(function(_item, i){
            if(_item.id == _this.state.item){
                item = _item;
            }
        });
        if(item.tags){
            tags = item.tags.map(function(tag, i){
                return tag.id
            });
        }
        createBtn = <Button xs bsStyle='info' className="mb5 mr5" onClick={this.handleShowModal.bind(null, item)}>新增标签</Button>
        if(item.tags && item.tags.length >= 20){
            createBtn = ''
        }
        return (
            <Well className="width-100-ipt user-select-none cur-p pl5">
                <Grid>
                    <Row>
                        <Col xs={2}>
                            <div className="collocation-category bg-desaturateddarkblue75">{item.name}</div>
                        </Col>
                        <Col xs={9}>
                            <Tag items={tags} cid={item.id}></Tag>
                        </Col>
                        <Col xs={1}>
                            {createBtn}
                            <Button xs bsStyle='danger' onClick={this.handleDelete.bind(null, item)}>删除类别</Button>
                        </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
});

// List Component use `ListMixin`
var List = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), sortable.ListMixin],
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
        this.setState({ items: props.items });
    },
    onResorted: function(items){
        console.log(items);
        var _this = this;
        // var shouldUpdate = false;
        // items.map(function(item, i){
        //     if(item != _this.state.items[i]){
        //         shouldUpdate = true;
        //     }
        // });
        // if(shouldUpdate){
        //     Action.updateTagCategorySortIdMultiply(items);
        // }
        Action.updateTagCategorySortIdMultiply(items);
    },
    render: function() {
        // console.log('render')
        var items = this.state.items.map(function(item, i) {
            // Required props in Item (key/index/movableProps)
            return <Item key={item} item={item} index={i} {...this.movableProps}/>;
        }, this);

        return (
            <div style={{position: 'relative', margin: 20}}>
                {items}
            </div>
        );
    }
});

module.exports = List;
