/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var Store = require('../../../modules/stores/spots/logs/index.coffee');
var ConfirmMixins = require('../../../widgets/modal/confirmMixins.jsx');
var Action = Store.getAction();
var storeName = 'spots-logs';
var ThisModal = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],
    getInitialState: function() {
        Action.resetResult();
        return {

        };
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
        Action.resetResult();
    },
    handleChangeInfo: function(e){
        var store = this.state[storeName];
        var el = e.target;
        var name = el.name;
        var value = el.value;
        store[name] = value;
        Action.onSetStore(store);
    },
    render: function(){
        var store = this.state[storeName];

        return (
            <Form>
                <FormGroup>
                    <Label control>原成绩: {this.props.result}毫秒</Label>
                </FormGroup>
                <FormGroup>
                    <Label control htmlFor='newResult'>修改为: </Label>
                    <Input type='text' id='newResult' name='newResult' onChange={this.handleChangeInfo} placeholder='' value={store.newResult} />
                    <HelpBlock>{''}</HelpBlock>
                </FormGroup>
            </Form>
        )
    }
});


var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), ConfirmMixins],
    getInitialState: function() {
        // Action.resetResult();
        return {

        };
    },
    showModal: function(){
        var store = this.state[storeName];
        var _this = this;
        this.confirm({
            title: '请修改游戏成绩',
            text: <ThisModal result={this.props.logs.result}/>,
            ok: function(){
                Action.updateScenesLogs(_this.props.logs.id);
            }
        });
    },
    render: function() {
        var store = this.state[storeName];

        return (
            <Button sm bsStyle='info' onClick={this.showModal}>修改记录</Button>
        )
    }

});



module.exports = View;
