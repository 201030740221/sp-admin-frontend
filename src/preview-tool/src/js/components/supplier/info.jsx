'use strict';

import {
  Tabs
} from 'antd';
const TabPane = Tabs.TabPane;
import Basic from './basic';
import Visit from './visit';
import Talk from './talk';

const Info = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onChange: function (key) {
    this.context.router.push('/supplier/edit/' + this.props.params.id + '/' + key);
  },
  render: function () {
    const id = this.props.params.id;
    return (
      <Tabs activeKey={this.props.params.tab} onChange={this.onChange}>
        <TabPane tab="基本信息" key="basic"><Basic id={id}/></TabPane>
        <TabPane tab="拜访纪录" key="visit"><Visit id={id}/></TabPane>
        <TabPane tab="谈判纪录" key="talk"><Talk id={id}/></TabPane>
      </Tabs>
    );
  }
});

module.exports = Info;
