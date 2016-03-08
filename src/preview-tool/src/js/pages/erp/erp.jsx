'use strict';


import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import {Provider} from 'react-redux';
// import createHistory from 'history/lib/createHashHistory';
// const history = createHistory({queryKey: false});

import App from 'components/common/app';
import Products from 'components/product/list';
import RecycleBin from 'components/product/recycle-bin';
import AddProduct from 'components/product/add';
import AddProductSku from 'components/product/add-sku';

import Goods from 'components/goods/list';
import EditGoods from 'components/goods/edit';
import GoodsTemplateDetail from 'components/goods/template-detail';
import GoodsCategory from 'components/goods/category';
import AttributeGroupTabs from 'components/goods/attribute-group-tabs';
import AttributeList from 'components/goods/attribute-list';

import ProductCategory from 'components/product/category';

import Supplier from 'components/supplier/list';
import AddSupplier from 'components/supplier/add';
import SupplierInfo from 'components/supplier/info';

import PrivilegeUsers from 'components/privilege/users/index';
import PrivilegeRoles from 'components/privilege/roles/index';
import PrivilegeRolesEdit from 'components/privilege/roles/edit';

import LoginPage from 'components/user/login';

import ArticleAdd from 'components/article/add';
import ArticleList from 'components/article/list';
import ArticleCategory from 'components/article/category';
import ArticleSyncList from 'components/article/sync';
import NodeList from 'components/article/node';
import ArticleHeadlines from 'components/article/headlines';

import TopicList from 'components/topic/list';
import TopicAdd from 'components/topic/add';
import TopicResources from 'components/topic/resources';

import Order from 'components/order/list';
import OrderEdit from 'components/order/edit';
import OrderPrint from 'components/order/print';
import OrderRecycle from 'components/order/recycle';

import MemberList from 'components/member/list';
import PointList from 'components/member/point';
import ReferralList from 'components/member/referral';
import MemberCouponList from 'components/member/coupon';
import MemberRegister from 'components/member/register';

import CommentList from 'components/comment/list.jsx';
import CommentConfig from 'components/comment/config.jsx';

import NavigationList from 'components/navigation/list';
import TagsList from 'components/tags/list';

import CouponList from 'components/coupon/list';
import CouponDetail from 'components/coupon/detail';
import CouponCreate from 'components/coupon/create';

import ActivityList from 'components/activity/list';


// 登录验证
function requireAuth() {
  if (!localStorage.getItem('sp-admin-uid')) {
    location.hash = '/user/login';
    return false;
  }
}

require('stores/app');
import EditPanel from 'components/preview/edit-panel';
import pagesPage from 'components/preview/page-pages';
import PreviewBox from 'components/preview/app';

const moduleFramePage = React.createClass({
  showPage() {
    const query = this.props.location.query;

    switch (this.props.params.module) {
        // 暂时去掉首页主题搭配管理  2016-01-07
        // case "theme" :
        //     var ThemePage = require('components/preview/page-theme');
        //     return <ThemePage params={this.props.params} query={query}/>
        // break;
      case 'category-list':
        const CategoryListPage = require('components/preview/page-category-list');
        return <CategoryListPage params={this.props.params} query={query}/>;
      case 'similar-list':
        if (query.category) {
          const BannerPage = require('components/preview/page-banner');
          return <BannerPage params={this.props.params} query={query}/>;
        }
        const SimilarPage = require('components/preview/page-category-list');
        return <SimilarPage params={this.props.params} query={query}/>;
      default:
        const BannerPage = require('components/preview/page-banner');
        return <BannerPage params={this.props.params} query={query}/>;
    }
  },
  render() {
    return (
      <EditPanel name="module">
        {this.showPage()}
      </EditPanel>
    );
  }
});

import configure from '../../reducers/store';

const store = configure();

const routes = (
  <Provider store={store}>
    <Router history={appHistory}>
      {/* 内容管理页面预览 */}
      <Route onEnter={requireAuth} component={PreviewBox} path="/frame/preview"/>

      {/* 用户管理 */}
      <Route path="user">
        <Route component={LoginPage} path="login" breadcrumbName="登录"/>
      </Route>

      <Route onEnter={requireAuth} component={App} path="/" breadcrumbName="首页">

        {/* 内容管理 */}
        <Route onEnter={requireAuth} path="frame" breadcrumbName="推荐位管理">
          <IndexRoute component={pagesPage}/>
          <Route onEnter={requireAuth} component={pagesPage} path="pages/:platform/:name" breadcrumbName="页面列表"/>
          <Route onEnter={requireAuth} component={moduleFramePage} path="module/:page/:module" breadcrumbName="编辑推荐位"/>
        </Route>

        {/* 专题管理 */}
        <Route onEnter={requireAuth} path="topic" breadcrumbName="专题管理">
          <IndexRoute component={TopicList}/>
          <Route onEnter={requireAuth} component={TopicAdd} path="add" breadcrumbName="添加专题"/>
          <Route onEnter={requireAuth} component={TopicAdd} path="edit/:id" breadcrumbName="专题编辑"/>
          <Route onEnter={requireAuth} component={TopicResources} path="resources/:id" breadcrumbName="图片管理"/>
        </Route>

        {/* 文章管理 */}
        <Route onEnter={requireAuth} path="article" breadcrumbName="文章管理">
          <IndexRoute component={ArticleList}/>
          <Route onEnter={requireAuth} component={ArticleList} path="list" breadcrumbName="文章列表"/>
          <Route onEnter={requireAuth} component={ArticleSyncList} path="sync" breadcrumbName="文章同步"/>
          <Route onEnter={requireAuth} component={ArticleAdd} path="add" breadcrumbName="添加文章"/>
          <Route onEnter={requireAuth} component={ArticleAdd} path="edit/:id" breadcrumbName="编辑文章"/>
          <Route onEnter={requireAuth} component={ArticleCategory} path="category" breadcrumbName="文章分类"/>
          <Route onEnter={requireAuth} path="node/:parent_id" breadcrumbName="节点管理">
            <IndexRoute component={NodeList}/>
            <Route onEnter={requireAuth} component={ArticleHeadlines} path="headlines" breadcrumbName="头条管理"/>
          </Route>
        </Route>

        {/* 商品管理 */}
        <Route onEnter={requireAuth} path="goods" breadcrumbName="商品管理">
          <IndexRoute component={Goods}/>
          <Route onEnter={requireAuth} component={EditGoods} path="publish/:id/:sku_sn/:action" breadcrumbName="商品编辑"/>
          <Route onEnter={requireAuth} component={GoodsTemplateDetail} path="sku/:sku_id/template-detail/:id" breadcrumbName="商品详情编辑"/>
          <Route onEnter={requireAuth} component={GoodsCategory} path="category" breadcrumbName="商品分类"/>
          <Route onEnter={requireAuth} path="attribute/:typeId" breadcrumbName="属性规格组">
            <IndexRoute component={AttributeGroupTabs}/>
            <Route onEnter={requireAuth} component={AttributeList} path=":groupId" breadcrumbName="属性规格列表"/>
          </Route>
          <Route onEnter={requireAuth} component={TagsList} path="tags/:type" breadcrumbName="商品标签管理"/>
        </Route>

        {/* 产品管理 */}
        <Route onEnter={requireAuth} path="product" breadcrumbName="产品管理">
          <IndexRoute component={Products}/>
          <Route onEnter={requireAuth} component={RecycleBin} path="recycle-bin" breadcrumbName="产品回收站"/>
          <Route onEnter={requireAuth} component={AddProduct} path="add" breadcrumbName="添加产品"/>
          <Route onEnter={requireAuth} component={AddProduct} path="edit/:id" breadcrumbName="产品编辑"/>
          <Route onEnter={requireAuth} component={AddProductSku} path="sku/:id" breadcrumbName="SKU编辑"/>
          <Route onEnter={requireAuth} component={ProductCategory} path="category" breadcrumbName="产品分类"/>
        </Route>

        {/* 用户管理 */}
        <Route onEnter={requireAuth} path="member" breadcrumbName="用户管理">
          <IndexRoute component={MemberList}/>
          <Route onEnter={requireAuth} component={PointList} path=":id/point" breadcrumbName="积分"/>
          <Route onEnter={requireAuth} component={ReferralList} path=":id/referral" breadcrumbName="推荐"/>
          <Route onEnter={requireAuth} component={MemberCouponList} path=":id/coupon" breadcrumbName="卡券"/>
          <Route onEnter={requireAuth} component={MemberRegister} path="register" breadcrumbName="注册统计"/>
        </Route>

        {/* 供应商管理 */}
        <Route onEnter={requireAuth} path="supplier" breadcrumbName="供应商管理">
          <IndexRoute component={Supplier}/>
          <Route onEnter={requireAuth} component={AddSupplier} path="add" breadcrumbName="添加供应商"/>
          <Route onEnter={requireAuth} component={SupplierInfo} path="edit/:id/:tab" breadcrumbName="供应商信息"/>
        </Route>

        {/* 栏目管理 */}
        <Route onEnter={requireAuth} path="navigation" breadcrumbName="栏目管理">
          <IndexRoute component={NavigationList}/>
          <Route onEnter={requireAuth} component={NavigationList} path=":id" breadcrumbName="子栏目管理"/>
        </Route>

        {/* 权限管理 */}
        <Route onEnter={requireAuth} path="privilege">
          <Route onEnter={requireAuth} component={PrivilegeUsers} path="users" breadcrumbName="后台用户管理"/>
          <Route onEnter={requireAuth} path="/privilege/roles" breadcrumbName="角色管理">
            <IndexRoute component={PrivilegeRoles}/>
            <Route onEnter={requireAuth} component={PrivilegeRolesEdit} path="edit/:id" breadcrumbName="角色编辑"/>
          </Route>
        </Route>

        {/* 订单管理 */}
        <Route onEnter={requireAuth} path="order" breadcrumbName="订单管理">
          <IndexRoute component={Order}/>
          <Route onEnter={requireAuth} component={Order} path="member/:id" breadcrumbName="用户订单列表"/>
          <Route onEnter={requireAuth} component={OrderRecycle} path="recycle" breadcrumbName="订单回收站"/>
          <Route onEnter={requireAuth} component={OrderEdit} path="edit/:id/invoiceId/:invoiceId" breadcrumbName="订单详情"/>
          <Route onEnter={requireAuth} component={OrderPrint} path="print/:id" breadcrumbName="发货单"/>
        </Route>

        {/* 评价管理 */}
        <Route onEnter={requireAuth} path="comment" breadcrumbName="评价晒单管理">
          <IndexRoute component={CommentList}/>
          <Route onEnter={requireAuth} component={CommentList} path="list" breadcrumbName="评价列表"/>
          <Route onEnter={requireAuth} component={CommentConfig} path="config" breadcrumbName="积分设置" />
        </Route>


        {/* 卡券管理 */}
        <Route onEnter={requireAuth} component={CouponList} path="coupon" breadcrumbName="卡券列表">
          <Route onEnter={requireAuth} component={CouponCreate} path="create" breadcrumbName="添加卡券"/>
          <Route onEnter={requireAuth} component={CouponDetail} path=":id" breadcrumbName="卡券详情"/>
        </Route>

        {/* 活动管理 */}
        <Route onEnter={requireAuth} path="activity" breadcrumbName="活动管理">
          <IndexRoute component={ActivityList}/>
          <Route onEnter={requireAuth} component={ActivityList} path="add" breadcrumbName="创建活动"/>
          <Route onEnter={requireAuth} component={ActivityList} path="edit/:id" breadcrumbName="编辑活动"/>
        </Route>

      </Route>
    </Router>
  </Provider>
);

ReactDom.render(routes, document.getElementById('app-container'));
