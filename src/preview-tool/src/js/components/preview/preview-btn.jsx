'use strict';

const myComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onPreview() {
    self.context.router.push('/frame/preview');
  },
  render() {
    return (
      <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={this.onPreview}>预览页面</button>
    );
  }
});
module.exports = myComponent;
