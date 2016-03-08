/** @jsx React.DOM */
// 属性分类标签
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';
var collocationMixins = require('./collocationMixins.jsx');

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],
    componentDidMount: function() {
        var store = this.state[storeName];
        Action.getTagList();
        // if(!store.tagList){
        //     Action.getTagList();
        // }
    },
    renderCategory: function(){
        var store = this.state[storeName];
        var _this = this;
        var tagList = store.tagList;
        if(!tagList || !tagList.length){
            return '';
        }
        return tagList.map(function(item, i){

            return (
                <Well className="width-100-ipt user-select-none pl5" key={i}>
                    <Grid>
                        <Row>
                            <Col xs={2}>
                                <div className="collocation-category bg-desaturateddarkblue75">{item.name}</div>
                            </Col>
                            <Col xs={9}>
                                <ul className="user-select-none collocation-tags">
                                    {_this.renderTags(item)}
                                </ul>
                            </Col>
                            <Col xs={1}>
                                <Button xs bsStyle='danger' className="mb5 mr5" onClick={_this.resetTags.bind(null, item)}>重置</Button>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            )
        });
    },
    resetTags: function(category){
        var store = this.state[storeName];
        var _this = this;
        var theme_collocation_tags = store.theme_collocation_tags || [];
        var newTags = theme_collocation_tags;
        category.tags.map(function(item, i){
            theme_collocation_tags = newTags;
            newTags = [];
            theme_collocation_tags.map(function(tag, i){
                if(+tag.tag_id != +item.tag_id){
                    newTags.push(tag);
                }
            });
        });
        Action.onChange({
            theme_collocation_tags: newTags
        });
    },
    renderTags: function(category){
        var store = this.state[storeName];
        var _this = this;
        var tags = category.tags || []
        var theme_collocation_tags = store.theme_collocation_tags || [];
        return category.tags.map(function(item, i){
            var active = false;
            theme_collocation_tags.map(function(tag, i){
                if(+tag.tag_id == +item.tag_id){
                    active = true;
                }
            });
            className = classSet({
                'cur-p': true,
                'active': active
            });
            return (
                <li className={className} key={i} onClick={_this.setTag.bind(null, item, active)}>
                    {item.tag.name}
                </li>
            );
        });
    },
    setTag: function(item, active){
        var store = this.state[storeName];
        var tags = store.theme_collocation_tags || [];
        if(active){
            var newTags = []
            tags.map(function(tag, i){
                if(+tag.id != +item.id){
                    newTags.push(tag);
                }
            });
            Action.onChange({
                theme_collocation_tags: newTags
            });
        }else{
            tags.push(item);
            Action.onChange({
                theme_collocation_tags: tags
            });
        }
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        return (
            <div>
                <Well xs className="user-select-none bg-desaturateddarkblue75">
                    <Grid>
                        <Row>
                            <Col xs={2} className="text_center">
                                分类名称
                            </Col>
                            <Col xs={9} className="text_center">
                                标签列表
                            </Col>
                            <Col xs={1} className="text_center">
                                操作
                            </Col>
                        </Row>
                    </Grid>
                </Well>
                {this.renderCategory()}
            </div>
        )
    }
});
module.exports = View;
