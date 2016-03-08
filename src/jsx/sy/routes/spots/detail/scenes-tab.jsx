/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var SpotsStore = require('../../../modules/stores/spots/detail/index.coffee');
var Store = require('../../../modules/stores/spots/detail/scenes.coffee');
var Action = Store.getAction();
var storeName = 'spots-scenes';
var spotsStoreName = 'spots-detail';
var Scenes = require('./scenes.jsx');

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName, spotsStoreName)],
    getInitialState: function() {
        this.init();
        return {};
    },
    init: function(){
        var spotId = liteFlux.store(spotsStoreName).getStore().id
        Action.getScenesList();
    },
    onChange: function(e){

    },
    renderTab: function(){
        var store = this.state[storeName];
        var _this = this;
        var active = store.tab;
        var items = store.list || [];
        var nodes = items.map(function(item, i){
            var className = classSet({
                'ionTabs__tab_state_active': i == active,
                'ionTabs__tab': true
            });
            return (
                <li className={className} key={i} onClick={_this.changeTab.bind(null, i)}>
                    <span>{item.title}</span>
                </li>
            )
        })
        if(nodes.length){
            return (
                <ul className="ionTabs__head">
                    {nodes}
                </ul>
            )
        }
    },
    changeTab: function(i, e){
        e.preventDefault();
        e.stopPropagation();
        var store = this.state[storeName];
        if(store.tab == i){
            return false
        }
        Action.onChangeTab({
            tab: i
        });
        return false;
    },
    renderTabContent: function(){
        var store = this.state[storeName];
        var _this = this;
        var active = store.tab
        var items = store.list || [];
        var nodes = items.map(function(item, i){
            var className = classSet({
                'ionTabs__item_state_active': i == active,
                'ionTabs__item': true
            })
            if(i == active){
                return (
                    <div className={className} key={i}>
                        <Scenes></Scenes>
                    </div>
                )
            }else{
                <div key={i}></div>
            }
        })
        if(nodes.length){
            return (
                <div className="ionTabs__body">
                    {nodes}
                </div>
            )
        }
    },
    addScenes: function(){
        Action.addScenes();
    },
    render: function() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} className="text_center">
                            <Button xs bsStyle='success' className="ml20" onClick={this.addScenes}>新增场景</Button>
                        </Col>
                    </Row>
                </Grid>
                <div className="ionTabs">
                    {this.renderTab()}
                    {this.renderTabContent()}
                </div>
            </div>
        )
    }
});

module.exports = View;
