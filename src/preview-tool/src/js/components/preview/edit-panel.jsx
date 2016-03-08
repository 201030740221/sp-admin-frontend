'use strict';

const myComponent = React.createClass({
  render() {
    let classes = 'edit-panel edit-panel-' + this.props.name;
    return (
      <div className={classes} enter-data={{
        type: 'bottom'
      }}>
        <div className="inner-edit-panel">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = myComponent;
