/** @jsx React.DOM */

var SortAction = React.createClass({
    getDefaultProps: function() {
      return {
        'container': '#sort-container',
        'item': '.sort-item',
        'onsort': function ($container, $item) {}
      };
    },
    move: function move(e) {
      var $wrap = $(this.props.container)
      ,   $action = $(e.target)
      ,   $item = $action.closest(this.props.item)

      ,   actionType = $action.data('action')
      ,   actions = {
          'up': function () {
             var $prev = $item.prev();
             if (! $prev.length) return;

             $prev.before($item);
          },
          'down': function () {
             var $next = $item.next();
             if (! $next.length) return;

             $next.after($item);
          },
          'top': function () {
             $wrap.prepend($item);
          },
          'bottom': function () {
             $wrap.append($item);
          }
      };

      actions[actionType]();
      this.props.onsort($wrap, $item);
    },
    render: function() {
      return (
        <span className='sort-action-wrap'>
          <span onClick={this.move} data-action="top" title="置顶" className="icon-dripicons-arrow-up icon-dripicons-arrow-up-top"></span>
          <span onClick={this.move} data-action="up" title="上移" className="icon-dripicons-arrow-up"></span>
          <span onClick={this.move} data-action="down" title="下移" className="icon-dripicons-arrow-down"></span>
          <span onClick={this.move} data-action="bottom" title="置底" className="icon-dripicons-arrow-down icon-dripicons-arrow-down-bottom"></span>
        </span>
      );
    }
});

module.exports = SortAction;