/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        return {
            open: false,
        };
    },
    componentWillReceiveProps: function(props) {
    },
    handleClick: function(){
        this.setState({
            open: !this.state.open
        });
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        var data = this.props.data;
        var price = data.goods_sku && data.goods_sku.price ? data.goods_sku.price : '';
        var className = classSet({
            'active': this.state.open
        });
        var style = {
            left: data.label_x + '%',
            top: data.label_y + '%'
        };
        return (
            <figure ref="figure" style={style} className={className} onDoubleClick={this.handleClick} onMouseDown={this.start} onMouseMove={this.move} onMouseUp={this.end} onMouseLeave={this.end}>
                <h6>{data.label_name}</h6>
                <div className="detail">
                    <p>{data.label_description || '_'}</p>
                    <em className="price">￥{price}</em>
                </div>
            </figure>
        )
    },
    start: function(e){
        e.stopPropagation();
        e.preventDefault();
        // console.log('start')
        var store = this.state[storeName];
        if(store.tab != this.props.index){
            Action.onChange({
                tab: this.props.index
            });
        }
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

        var store = this.state[storeName];
        var figure = this.refs.figure.getDOMNode();
        var figureOffset = $(figure).offset();
        var figureSize = {
            width: figure.offsetWidth,
            height: figure.offsetHeight
        };
        var boxOffset = this.props.offset()
        var boxSize = this.props.size();
        // var left = e.clientX - boxOffset.left - 30;
        var left = figureOffset.left - boxOffset.left + e.clientX - this.oldOffset.x;
        left = left > 0 ? left : 0;
        left = left > boxSize.width - figureSize.width ? boxSize.width - figureSize.width : left;
        // var top = e.clientY - boxOffset.top - this.mouseoOffset.top - 18;
        var top = figureOffset.top - boxOffset.top + e.clientY - this.oldOffset.y;
        top = top > 0 ? top : 0;
        top = top > boxSize.height - figureSize.height ? boxSize.height - figureSize.height : top;

        this.oldOffset = {
            x: e.clientX,
            y: e.clientY
        }

        // this.update({
        //     x: left/boxSize.width*100,
        //     y: top/boxSize.height*100
        // });
        this.newOffset = {
            x: left/boxSize.width*100,
            y: top/boxSize.height*100
        };
        this.moved = true;
        figure.style.left = this.newOffset.x + '%'
        figure.style.top = this.newOffset.y + '%'
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
        store.theme_collocation_goods[this.props.index].label_x = offset.x;
        store.theme_collocation_goods[this.props.index].label_y = offset.y;
        Action.onSetStore(store);
    }
});
module.exports = View;
