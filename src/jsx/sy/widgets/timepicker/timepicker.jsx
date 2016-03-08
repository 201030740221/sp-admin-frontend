/** @jsx React.DOM */
var moment = require('moment');
var TimePicker = React.createClass({
    getInitialState: function (props) {
        var _moment = props ? moment(props.time, 'HH:mm:ss') : moment(this.props.time, 'HH:mm:ss');
        return {
            time: {
                h: _moment.format('HH'),
                m: _moment.format('mm'),
                s: _moment.format('ss')
            }
        }
    },
    getDefaultProps: function() {
        return {
            time: '00:00:00'
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState(this.getInitialState(newProps));
    },
    handleChange: function (e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var time = this.state.time;
        var callback = this.props.onChange;
        time[name] = value;
        var _moment = moment(time.h + ':' + time.m + ':' + time.s , "HH:mm:ss"),
            _time = _moment.format('HH:mm:ss');
        if(_time == "Invalid date"){
            Sp.message('请输入正确的时间格式!', 'error');
            return false
        }else{
            this.setState({
                time: time
            });
            //typeof callback == 'function' && callback.call(this, _moment);
        }
    },

    handleBlur: function (e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var time = this.state.time;
        var callback = this.props.onChange;
        time[name] = value;
        var _moment = moment(time.h + ':' + time.m + ':' + time.s , "HH:mm:ss"),
            _time = _moment.format('HH:mm:ss');
        if(_time == "Invalid date"){
            Sp.message('请输入正确的时间格式!', 'error');
            console.log('请输入正确的时间格式!' + ' error');
            return false
        }else{
            this.setState({
                time: {
                    h: _moment.format('HH'),
                    m: _moment.format('mm'),
                    s: _moment.format('ss')
                }
                //time: time
            });
            typeof callback == 'function' && callback.call(this, _time, this.props.name);
        }
    },
    handleFocus: function (e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var time = this.state.time;
        time[name] = '';
        this.setState({
            time: time
        });
    },

    render: function () {
        var time = this.state.time;
        var style = {
            width : '3em',
            textAlign: 'center'
        };
        return (
            <div
                name={this.props.name}
                style={{display:'inline-block'}}>
                <input type="text" style={style} value={time.h} onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} ref='h' name='h'/>:
                <input type="text" style={style} value={time.m} onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} ref='m' name='m'/>:
                <input type="text" style={style} value={time.s} onChange={this.handleChange} onBlur={this.handleBlur} onFocus={this.handleFocus} ref='s' name='s'/>
            </div>
        )
    }
});
module.exports = TimePicker;
