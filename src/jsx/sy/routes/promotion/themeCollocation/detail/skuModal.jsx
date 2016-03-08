/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],
    renderSkuList: function(){
        var store = this.state[storeName];
        var _this = this;
        var skuList = store.skuList || [];
        if(!skuList.length){
            return [];
        }
        return skuList.map(function(item, i){
            return (
                <tr key={i}>
                    <td>
                        <BLabel bsStyle='primary'>id:{item.sku_id}. sn:{item.sku_sn}.{' '}{item.attribute_name}</BLabel>
                    </td>
                    <td>
                        <Button sm bsStyle='success' onClick={_this.handleSetSku.bind(null, item)}>选择</Button>{' '}
                    </td>
                </tr>
            )
        });
    },
    handleSetSku: function(item){
        var store = this.state[storeName];
        store.theme_collocation_goods[store.tab].goods_sku = item
        store.theme_collocation_goods[store.tab].goods_sku_id = item.sku_id
        Action.onSetStore(store);
        Sp.message('噔噔~~SKU选择成功', 'success');
        ModalManager.remove()
    },
    render: function() {
        return (
            <Table style={{marginBottom:0}}>
                <thead>
                    <tr>
                        <th>sku</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSkuList()}
                </tbody>
            </Table>
        )
    }
});
module.exports = View;
