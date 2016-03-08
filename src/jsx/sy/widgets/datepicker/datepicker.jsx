/** @jsx React.DOM */

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
      <div className="tether-target">
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
      </div>
    );
  }
});

module.exports = DatePicker;