/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/tags/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-tags';

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        return {
            error: ''
        };
    },
    componentDidMount: function() {
        var _this = this;
        this.timer = setTimeout(function(){
            _this.refs.ipt.getDOMNode().focus();
        },50);
    },
    componentWillUnmount: function() {
        clearTimeout(this.timer);
    },
    keyDown: function(e){
        if(e.keyCode == 13){
            this.ok();
        }
    },
    ok: function(){
        var ipt = this.refs.ipt.getDOMNode();
        var value = ipt.value;
        var data = this.props.data ? this.props.data : {}
        if(value && value.length <= 10){
            data.name = value;
            this.props.ok(data);
            ModalManager.remove();
        }else if(value && value.length > 10){
            this.setError('名称长度不能大于10个字符!');
            Sp.message('名称长度不能大于10个字符!','error');
        }else{
            this.setError('请输入名称!');
            Sp.message('不能为空!','error');
        }
    },
    setError: function(text){
        this.setState({
            error: text || ''
        });
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        return (
            <div>
                <span>输入名称: </span>{' '}
                <Input type='text' ref='ipt' name='name' placeholder='Enter text' className='inline' onFocus={this.setError.bind(null, '')} onKeyDown={this.keyDown}/>
                {' '}
                <Button sm bsStyle='primary' onClick={this.ok}>确定</Button>
                <HelpBlock>{this.state.error}</HelpBlock>
            </div>
        )
    }
});
module.exports = View;
