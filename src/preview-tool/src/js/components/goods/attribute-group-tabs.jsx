'use strict';

import {
  Tabs
} from 'antd';
const TabPane = Tabs.TabPane;
import AttributeGroup from './attribute-group';

const Info = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onChange(key) {
    let typeId = key.replace('attr-', '');
    this.context.router.push('/goods/attribute/' + typeId);
  },
  previewGoods() {
    let skuSn = this.props.params.sku_sn;
    // 预览
    if (!skuSn) {
      SP.message.error('无sku，不能预览');
      return;
    }
    let domain = location.host.replace('admin', 'www');
    window.open('http://' + domain + '/item/' + skuSn + '.html');
  },
  render() {
    return (
      <Tabs activeKey={'attr-' + this.props.params.typeId} onChange={this.onChange}>
        <TabPane key={'attr-0'} tab="属性组">
          <AttributeGroup typeId={0}/>
        </TabPane>
        <TabPane key={'attr-1'} tab="规格组">
          <AttributeGroup typeId={1}/>
        </TabPane>
      </Tabs>
    );
  }
});

module.exports = Info;
