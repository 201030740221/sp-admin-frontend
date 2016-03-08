/** @jsx React.DOM */
/**
 * @tofishes
 * 封装DatePicker，默认掌管了状态变化，同时也可以通过onDateChange反馈变化给调用者
 * 修改DatePicker的容器标签为 span
 */
var moment = require('moment');

var Popover = require('./popover.jsx');
var DateUtil = require('./util/date.js');
var Calendar = require('./calendar.jsx');
var DateInput = require('./date_input.jsx');

var DatePicker = React.createClass({
  getInitialState: function() {
    return {
      focus: false
    };
  },

  handleFocus: function() {
    this.setState({
      focus: true
    });
  },

  hideCalendar: function() {
    setTimeout(function() {
      this.setState({
        focus: false
      });
    }.bind(this), 0);
  },

  handleSelect: function(date) {
    this.setSelected(date);

    setTimeout(function(){
      this.hideCalendar();
    }.bind(this), 200);
  },

  setSelected: function(date) {
    this.props.onChange(date.moment());
  },

  onInputClick: function() {
    this.setState({
      focus: true
    });
  },

  calendar: function() {
    if (this.state.focus) {
      return (
        <Popover>
          <Calendar
            selected={this.props.selected}
            onSelect={this.handleSelect}
            hideCalendar={this.hideCalendar}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate} />
        </Popover>
      );
    }
  },

  render: function() {

    return (
      <span>
        <DateInput
          name={this.props.name}
          date={this.props.selected}
          dateFormat={this.props.dateFormat}
          focus={this.state.focus}
          onFocus={this.handleFocus}
          handleClick={this.onInputClick}
          handleEnter={this.hideCalendar}
          setSelected={this.setSelected}
          hideCalendar={this.hideCalendar}
          placeholderText={this.props.placeholderText} />
        {this.calendar()}
      </span>
    );
  }
});

var SimpleDatePicker = React.createClass({
    getInitialState: function () {
      console.log(this.props, '****,&&&')
        return {
            'selectedDate': this.props.initDate ? moment(this.props.initDate) : null
        }
    },
    // 父级更新传递新的值，这里可以接收
    componentWillReceiveProps: function (newProps) {
        newProps.initDate && this.setState({
            'selectedDate': moment(newProps.initDate)
        });
    },
    onChangeDate: function (date) {
        this.setState({
            'selectedDate': date
        });
        
        var callback = this.props.onDateChange || function(){};
        callback.call(this, date);
    },
    render: function () {
        return (
            <DatePicker name={this.props.name} key={this.props.key} dateFormat={this.props.dateFormat || 'YYYY-MM-DD'} onChange={this.onChangeDate} placeholderText={this.props.placeholderText || '点选日期'} selected={this.state.selectedDate} />
        )
    }
});

module.exports = SimpleDatePicker;