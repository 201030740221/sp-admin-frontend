/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/detail/scenes.coffee');
var Action = Store.getAction();
var storeName = 'spots-scenes';


var Item = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],

    start1: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.canMove1 = true;
        this.moved1 = false;
        this.oldOffset1 = {
            x: e.clientX,
            y: e.clientY
        };
    },
    move1: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.canMove1 !== true){
            return false;
        }

        var item = this.refs.item.getDOMNode();
        var itemOffset = $(item).offset();
        var itemSize = {
            width: item.offsetWidth,
            height: item.offsetHeight
        };

        var box = this.props.getParent();
        var $box = $(box);
        var boxOffset = $box.offset();
        var boxSize = {
            width: $box.width(),
            height: $box.height()
        };

        var width = itemSize.width + e.clientX - this.oldOffset1.x;
        width = width > 0 ? width : 0;
        width = width > boxSize.width ? boxSize.width : width;
        var height  = itemSize.height + e.clientY - this.oldOffset1.y;
        height  = height  > 0 ? height  : 0;
        height  = height  > boxSize.height ? boxSize.height : height ;

        this.oldOffset1 = {
            x: e.clientX,
            y: e.clientY
        };

        this.newSize = {
            width: width/boxSize.width*100,
            height: height/boxSize.height*100
        };
        this.moved1 = true;
        item.style.width = this.newSize.width + '%';
        item.style.height = this.newSize.height + '%';
    },
    end1: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.canMove1 && this.moved1){
            this.update1({
                width: this.newSize.width,
                height: this.newSize.height
            });
        }
        this.canMove1 = false;
        this.moved1 = false;
    },
    update1: function(size){
        var store = this.state[storeName];
        store.items[this.props.index].width = size.width;
        store.items[this.props.index].height = size.height;
        Action.onSetStore(store);
    },

    render: function() {
        var data = this.props.data;
        var style = {
            left: data.x + '%',
            top: data.y + '%',
            width: data.width + '%',
            height: data.height + '%'
        };
        return (
            <div className="spots-scenes-item" ref="item" style={style} onMouseDown={this.start} onMouseMove={this.move} onMouseUp={this.end} onMouseLeave={this.end}>
                {+this.props.index+1}
                <i ref="resize" onMouseDown={this.start1} onMouseMove={this.move1} onMouseUp={this.end1} onMouseLeave={this.end1} onMouseOut={this.end1}></i>
            </div>
        );
    },
    start: function(e){
        e.stopPropagation();
        e.preventDefault();
        // console.log('start')
        this.canMove = true;
        this.moved = false;
        this.oldOffset = {
            x: e.clientX,
            y: e.clientY
        }
    },
    move: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.canMove !== true){
            return false;
        }

        var item = this.refs.item.getDOMNode();
        var itemOffset = $(item).offset();
        var itemSize = {
            width: item.offsetWidth,
            height: item.offsetHeight
        };
        var box = this.props.getParent();
        var $box = $(box);
        var boxOffset = $box.offset()
        var boxSize = {
            width: $box.width(),
            height: $box.height()
        };

        var left = itemOffset.left - boxOffset.left + e.clientX - this.oldOffset.x;
        left = left > 0 ? left : 0;
        left = left > boxSize.width  - itemSize.width  ? boxSize.width  - itemSize.width  : left;
        var top  = itemOffset.top  - boxOffset.top  + e.clientY - this.oldOffset.y;
        top  = top  > 0 ? top  : 0;
        top  = top  > boxSize.height - itemSize.height ? boxSize.height - itemSize.height : top ;

        this.oldOffset = {
            x: e.clientX,
            y: e.clientY
        }

        this.newOffset = {
            x: left/boxSize.width*100,
            y: top/boxSize.height*100
        };
        this.moved = true;
        item.style.left = this.newOffset.x + '%'
        item.style.top = this.newOffset.y + '%'
    },
    end: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.canMove && this.moved){
            this.update({
                x: this.newOffset.x,
                y: this.newOffset.y
            });
        }
        this.canMove = false;
        this.moved = false;
    },
    update: function(offset){
        var store = this.state[storeName];
        store.items[this.props.index].x = offset.x;
        store.items[this.props.index].y = offset.y;
        Action.onSetStore(store);
    }

});

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],
    getParent: function(){
        return this.refs.box.getDOMNode();
    },
    renderList: function(){
        var store = this.state[storeName];
        var _this = this;
        return store.items.map(function(item, i){
            return <Item key={i} getParent={_this.getParent} data={item} index={i} />
        });
    },
    render: function() {
        return (
            <div ref="box" className="spots-scenes-items">
                {this.renderList()}
            </div>
        );
    }

});

module.exports = View;
