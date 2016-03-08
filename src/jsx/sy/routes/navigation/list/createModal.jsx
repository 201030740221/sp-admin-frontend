/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/navigation/list/index.coffee');
var Action = Store.getAction();
var storeName = 'navigation-list';

var View = React.createClass({
    // mixins: [liteFlux.mixins.storeMixin(storeName)],
    getInitialState: function() {
        // return this.init(this.props);
        return {
            error: {}
        }
    },
    init: function(props){
        // var ret = {
        //     error: {}
        // };
        // if(props.data){
        //     ret = Object.assign(ret, props.data);
        // }
        // return ret;
    },
    componentWillReceiveProps: function(props) {
        // this.setState(this.init(props));
    },
    componentDidMount: function() {
        var _this = this;
        this.timer = setTimeout(function(){
            _this.refs['name'].getDOMNode().focus();
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
        var data = this.props.data ? this.props.data : {};
        var valid = this.valid('name','real_uri');
        if(valid.valid){
            data = Object.assign(data, valid.data);
            this.props.ok(data);
            ModalManager.remove();
        }
    },
    valid: function(){
        var _this = this;
        var valid = true;
        var data = {};
        [].map.call(arguments, function(item, i){
            console.log(item, i);
            var ipt = _this.refs[item].getDOMNode();
            var value = ipt.value;
            if(!value){
                _this.setError(item, item + '不能为空!');
                Sp.message(item + '不能为空!','error');
                valid = false;
                data[item] = false;
            }else if(item == 'name' && value && value.length > 10){
                _this.setError(item, '名称长度不能大于10个字符!');
                Sp.message('名称长度不能大于10个字符!','error');
                valid = false;
                data[item] = false;
            }else{
                data[item] = value;
            }
        });
        return {
            valid: valid,
            data: data
        }
    },
    setError: function(name, text){
        var error = this.state.error;
        error[name] = text || '';
        this.setState({
            error: error
        });
    },
    render: function() {
        var store = this.state[storeName];
        var _this = this;
        var error = this.state.error || {};
        var data = this.props.data || {}
        var pc_host = location.origin.replace('admin', 'www') + '/'
        return (
            <div>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>新建栏目</h4>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <span className="mr10">栏目名称: </span>
                        <Input type='text' ref='name' name='name' placeholder='Enter text' className='inline' onFocus={this.setError.bind(null, 'name', '')} onKeyDown={this.keyDown} defaultValue={data['name'] || ''} />
                        <HelpBlock>{error['name']}</HelpBlock>
                    </div>
                    <div>
                        <span className="mr10">栏目链接: </span>
                        {pc_host}
                        <Input type='text' ref='real_uri' name='real_uri' placeholder='Enter text' className='inline' onFocus={this.setError.bind(null, 'real_uri', '')} onKeyDown={this.keyDown} defaultValue={data['real_uri'] || ''} />
                        <HelpBlock>{error['real_uri']}</HelpBlock>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='default' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                    <Button outlined bsStyle='primary' onClick={this.ok}>OK</Button>
                </ModalFooter>
            </div>
        )
    }
});
module.exports = View;
