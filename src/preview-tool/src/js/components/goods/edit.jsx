'use strict';

import {
  Tabs,
  Button
} from 'antd';
const TabPane = Tabs.TabPane;
import Basic from './goods-basic';
import Specifications from './specifications';
import PictureEdit from './description';
import TemplateList from './template-list';

const Info = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onChange: function (key) {
    this.context.router.push('/goods/publish/' + this.props.params.id + '/' + this.props.params.sku_sn + '/' + key);
  },
  previewGoods: function () {
    let sku_sn = this.props.params.sku_sn;
    // 预览
    if (!sku_sn) {
      SP.message.error('无sku，不能预览');
      return;
    }
    let domain = location.host.replace('admin', 'www');
    window.open('http://' + domain + '/item/' + sku_sn + '.html');
  },
  render: function () {
    var id = this.props.params.id;

    const operations = <Button onClick={this.previewGoods}>预览</Button>;

    return (
      <Tabs activeKey={this.props.params.action} onChange={this.onChange} tabBarExtraContent={operations}>
        <TabPane tab="基本信息" key="basic"><Basic id={this.props.params.id}/></TabPane>
        <TabPane tab="销售规格" key="specifications"><Specifications action="specifications" id={this.props.params.id}/></TabPane>
        <TabPane tab="价格信息" key="price"><Specifications action="price" id={this.props.params.id}/></TabPane>
        <TabPane tab="SEO优化" key="seo"><Specifications action="seo" id={this.props.params.id}/></TabPane>
        <TabPane tab="图片编辑" key="pictures"><PictureEdit id={this.props.params.id}/></TabPane>
        <TabPane tab="商品详情" key="templates"><TemplateList id={this.props.params.id}/></TabPane>
      </Tabs>
    );
  }
});

module.exports = Info;
