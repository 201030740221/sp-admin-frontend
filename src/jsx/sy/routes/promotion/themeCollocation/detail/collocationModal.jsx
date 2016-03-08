/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';
var collocationMixins = require('./collocationMixins.jsx');
var typeMap = {
    '1': '按件满折',
    '2': '优惠价组合'
};

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), collocationMixins],
    componentDidMount: function() {
        var _this = this;
        this.timer = setTimeout(function(){
            _this.refs.keyword1.getDOMNode().focus();
        },50);
    },
    componentWillUnmount: function() {
        clearTimeout(this.timer);
    },
    keyDown: function(e){
        if(e.keyCode == 13){
            this.searchGoodsCollocationList();
        }
    },
    searchGoodsCollocationList:function(){
        var keywords = [];
        var value = '';
        for(var i = 1; i <= 5; i++){
            value = this.refs['keyword'+i].getDOMNode().value;
            if(value){
                keywords.push(value);
            }
        }
        if(!keywords.length){
            Action.onChange({
                goodsCollocationList: {
                    msg: '请填写搜索关键字!!!',
                    type: 'danger'
                }
            });
        }else{
            Action.onChange({
                goodsCollocationList: {
                    msg: '正在搜索...',
                    type: 'info'
                }
            });
            Action.searchGoodsCollocationList({
                keywords: keywords
            });
        }
        // if(!keywords.length){
        //     keywords = [' ']
        // }
        // Action.searchGoodsCollocationList({
        //     keywords: keywords
        // });
    },
    handleSetCollocation: function(item){
        var store = this.state[storeName];
        store.goods_collocation = item;
        store.goods_collocation_id = item.id;
        // theme_collocation_goods是标签
        store.theme_collocation_goods = [];
        item.goods_collocation_details.map(function(item, i){
            store.theme_collocation_goods.push(Action.resetFigure(item.goods_id));
        });
        Action.onSetStore(store);
        Sp.message('噔噔~~搭配组合选择成功', 'success');
        ModalManager.remove()
    },
    renderGoodsCollocationList: function(){
        var store = this.state[storeName];
        var _this = this;
        if(store.goodsCollocationList.length){
            return store.goodsCollocationList.map(function(item, i){
                return (
                    <tr key={i}>
                        <td>{_this.renderGoodsNames(item.goods_collocation_details)}</td>
                        <td>{typeMap[item.type]}</td>
                        <td>
                            <Button sm bsStyle='success' onClick={_this.handleSetCollocation.bind(null, item)}>选择</Button>{' '}
                            <Button sm bsStyle='info' onClick={_this.goToCollocation.bind(null, item.id)}>编辑</Button>
                        </td>
                    </tr>
                )
            });
        }
    },
    goToCollocation: function(id){
        ModalManager.remove()
        RRouter.routing.navigate('/promotion/collocation/edit/' + id);
    },
    goToCollocationList: function(id){
        ModalManager.remove()
        RRouter.routing.navigate('/promotion/collocation/list');
    },
    //renderGoodsNames: func //已移动到collocationMixins
    handleChange: function(e){
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var data = {};
        data[name] = value;
        // Action.onChange(data);
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        var tableNode = '';
        if(store.goodsCollocationList){

            if(typeof(store.goodsCollocationList) == 'object' && store.goodsCollocationList.msg){
                tableNode = (
                    <Table style={{margin:10}}>
                        <thead>
                            <tr className={store.goodsCollocationList.type || info}>
                                <th className="text_center">{store.goodsCollocationList.msg}</th>
                            </tr>
                        </thead>
                    </Table>
                )
            }else{
                tableNode = (
                    <Table style={{marginBottom:0}}>
                        <thead>
                            <tr>
                                <th>搭配名称</th>
                                <th>优惠方式</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGoodsCollocationList()}
                        </tbody>
                    </Table>
                );
            }
        }
        return (
            <div>
                <span>请输入关键字: </span>{' '}
                <Input type='text' ref='keyword1' name='keyword1' placeholder='Enter text' className='inline' onKeyDown={this.keyDown} />{' + '}
                <Input type='text' ref='keyword2' name='keyword2' placeholder='Enter text' className='inline' onKeyDown={this.keyDown} />{' + '}
                <Input type='text' ref='keyword3' name='keyword3' placeholder='Enter text' className='inline' onKeyDown={this.keyDown} />{' + '}
                <Input type='text' ref='keyword4' name='keyword4' placeholder='Enter text' className='inline' onKeyDown={this.keyDown} />{' + '}
                <Input type='text' ref='keyword5' name='keyword5' placeholder='Enter text' className='inline' onKeyDown={this.keyDown} />
                {' '}
                <Button sm bsStyle='primary' onClick={this.searchGoodsCollocationList}>搜 索</Button>
                <Button sm bsStyle='success' className="fr" onClick={this.goToCollocationList}>增加搭配组合 (搭配列表页)</Button>
                {tableNode}
            </div>
        )
    }
});
module.exports = View;
