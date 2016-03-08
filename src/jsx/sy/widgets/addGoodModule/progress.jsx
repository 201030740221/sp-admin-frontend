/** @jsx React.DOM */

var Progress = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    getDefaultProps: function(){
      return {
          data:[]
      }
    },
    /*onClick={self.props.trigger.bind(null,"JumpStep",1,self.props.goodId)}*/
    render: function () {
        var self = this;
        var classString = "ui-progress__bar _step-" + this.props.step;
        return (
            <div className="ui-progress _with-3-step">
                <div className={classString}>
                    <div className="ui-progress__No _step-1" >
                        1
                        <div className="ui-progress__No-desc">通用信息</div>
                    </div>
                    <div className="ui-progress__No _step-2">
                        2
                        <div className="ui-progress__No-desc">商品属性</div>
                    </div>
                    <div className="ui-progress__No _step-last" >
                        3
                        <div className="ui-progress__No-desc">预览</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Progress;