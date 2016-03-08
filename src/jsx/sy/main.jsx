/** @jsx React.DOM */

'use strict';

/* Initialize Locales */
// l20n.initializeLocales('sy', {
//     'locales': ['ch'],
//     'default': 'ch'
// });

/* Initializing touch events */
React.initializeTouchEvents(true);

/* App Conifg */
window.Sp = require('./widgets/Sp.jsx');
window.Fluxxor = require("fluxxor");
window.FluxMixin = Fluxxor.FluxMixin(React);
window.StoreWatchMixin = Fluxxor.StoreWatchMixin;
window.classSet = React.addons.classSet;
window.Object.assign = require('object-assign');
window.Cookie = require('js-cookie')

// 引用 webapi
window.webapi = require('sipin-admin-api')({
    host: host + '/api',
    crossDomain: true,
    headers: {
        'X-XSRF-TOKEN': function (options) {
            var token = null
            if (options.method.toLowerCase() != 'get') {
                token = Cookie.get('XSRF-TOKEN');
            }

            return token;
        }
    }
});
if (window.jQuery) {
    jQuery.ajaxPrefilter(function (options, originOptions, xhr) {
        if (options.type != 'GET' && xhr.readyState === 0) {
            xhr.setRequestHeader('X-XSRF-TOKEN', Cookie.get('XSRF-TOKEN') || '');
        }

        return true
    })
};

/* APP STORE */
var mainAction = require('./modules/actions/mainAction.jsx');
var mainStore = require("./modules/stores/mainStore.jsx");

window.flux = new Fluxxor.Flux( mainStore, mainAction );

/* APP PAGES */
var dashboard = require('./routes/app/dashboard.jsx');
var goods = require('./routes/app/goods.jsx');
var add_good = require('./routes/app/add_good.jsx');
var edit_good = require('./routes/app/edit_good.jsx');
var edit_good_sku = require('./routes/app/edit_good_sku.jsx');
var edit_good_preview = require('./routes/app/edit_good_preview.jsx');
var category = require('./routes/app/category.jsx');
var add_category = require('./routes/app/add_category.jsx');
var brand = require('./routes/app/brand.jsx');
var add_brand = require('./routes/app/add_brand.jsx');
var add_attr_group = require('./routes/app/add_attr_group.jsx');
var add_attr = require('./routes/app/add_attr.jsx');
var comments = require('./routes/app/comments.jsx');
var recycle = require('./routes/app/recycle.jsx');
var login = require('./routes/user/login.jsx');
var ueditor = require('./routes/app/ueditor.jsx');
var categoryManage = require('./routes/app/categoryManage.jsx');
var orderList = require('./routes/app/orderList.jsx');
var orderTrashedList = require('./routes/app/orderTrashedList.jsx');
var orderDetail = require('./routes/app/orderDetail.jsx');
var purchaseBill = require('./routes/app/purchaseBill.jsx');
var printStore = require('./routes/app/printStore.jsx');
var printDelivery = require('./routes/app/printDelivery.jsx');
var article = require('./routes/app/article.jsx');
var articleCategory = require('./routes/app/articleCategory.jsx');
var articleList = require('./routes/app/articleList.jsx');
var memberList = require('./routes/app/memberList.jsx');
var memberPoint = require('./routes/app/memberPoint.jsx');/*积分*/
var memberRecommendList = require('./routes/app/memberRecommendList.jsx');/*推荐列表*/
var memberCoupon = require('./routes/app/member_coupon.jsx');/*积分*/

var updatePsw = require('./routes/app/updatePsw.jsx');
var userList = require('./routes/app/userList.jsx');
var roleList = require('./routes/app/roleList.jsx');
var roleDetail = require('./routes/app/roleDetail.jsx');
var customerServiceList = require('./routes/app/customerServiceList.jsx');
var customerServiceDetail = require('./routes/app/customerServiceDetail.jsx');
var notfound = require('./routes/404/notfound.jsx');

var goodsDetail = require('./routes/test/goodsDetail.jsx');

/* 促销管理 */
// var couponList = require('./routes/promotion/coupon/list/list.cjsx');
// var couponDetail = require('./routes/promotion/coupon/detail/detail.cjsx');
// var couponEdit = require('./routes/promotion/coupon/edit/edit.cjsx');
var couponList = require('./routes/promotion/coupon/list/list.jsx');
var couponDetail = require('./routes/promotion/coupon/detail/detail.jsx');
var couponEdit = require('./routes/promotion/coupon/edit/edit.jsx');

var raffleList = require('./routes/promotion/raffle/raffleList.jsx');/*抽奖列表*/
var raffleCreate = require('./routes/promotion/raffle/raffleUpdate.jsx');/*创建抽奖活动*/
var raffleUpdate = require('./routes/promotion/raffle/raffleUpdate.jsx');/*修改抽奖活动*/
var winningRecord = require('./routes/promotion/raffle/winningRecord.jsx');/*中奖记录*/

var seckillList = require('./routes/promotion/seckill/seckillList.jsx');/*秒杀*/
var seckillCreate = require('./routes/promotion/seckill/seckillEdit.jsx');
var seckillEdit = require('./routes/promotion/seckill/seckillEdit.jsx');

var themeCollocationDetail = require('./routes/promotion/themeCollocation/detail/index.jsx');
var themeCollocationTags = require('./routes/promotion/themeCollocation/tags/index.jsx');
var themeCollocationList = require('./routes/promotion/themeCollocation/list/index.jsx');
var collocation = require('./routes/promotion/collocation/list.jsx');/*推荐搭配*/
var collocationHandle = require('./routes/promotion/collocation/handle.jsx');/*管理推荐搭配*/
var collocationEdit = require('./routes/promotion/collocation/edit.jsx');
var collocationView = require('./routes/promotion/collocation/view.jsx');
var collocationCreate = require('./routes/promotion/collocation/create.jsx');

/*评价晒单管理*/
var commentPendingList = require('./routes/comment/pendingList.jsx');
var commentList = require('./routes/comment/list.jsx');
var commentSetUp = require('./routes/comment/set.jsx');

/*预售频道*/
var preSale = require('./routes/pre-sale/list/index.jsx');
var preSaleViewEdit = require('./routes/pre-sale/detail/viewEdit.jsx');
var editAddBatch = require('./routes/pre-sale/detail/editAddBatch.jsx');
var preSaleView = require('./routes/pre-sale/detail/view.jsx');

/* 栏目管理 */
var navigationList = require('./routes/navigation/list/index.jsx');
var navigationDetail = require('./routes/navigation/detail/index.jsx');

/* 栏目管理 */
var spotsList = require('./routes/spots/list/index.jsx');
var spotsDetail = require('./routes/spots/detail/index.jsx');
var spotsLogs = require('./routes/spots/logs/index.jsx');
var spotsCheatLogs = require('./routes/spots/cheat/index.jsx');

/* 页面中转 */
var pageForward = require('./routes/app/page-forward.jsx');

/* API */
var Api = require('./modules/api/api.jsx');


/* ROUTES */
var routes = (
    <Routes>
        <Route name='root' path='/' view={dashboard} >
            <Route name='app' path='app'>
                <Route name='goods' path='goods/:id' view={goods} />
                <Route name='add_good' path='good/add' view={add_good} />
                <Route name='edit_good' path='good/edit/:id' view={edit_good} />
                <Route name='edit_good_sku' path='good/sku/:id' view={edit_good_sku} />
                <Route name='edit_good_preview' path='good/preview/:id' view={edit_good_preview} />
                <Route name='category' path='category' view={category} />
                <Route name='add_category' path='add_category' view={add_category} />
                <Route name='brand' path='brand' view={brand} />
                <Route name='add_brand' path='add_brand' view={add_brand} />
                <Route name='attr_group' path='attr/group/:id' view={add_attr_group} />
                <Route name='add_attr' path='attr/type/:type/group/:id' view={add_attr} />
                <Route name='comments' path='comments' view={comments} />
                <Route name='recycle' path='recycle' view={recycle} />
                <Route name='ueditor' path='ueditor' view={ueditor} />
                <Route name='categoryManage' path='categoryManage' view={categoryManage} />
                <Route name='orderList' path='orderList/:uid' view={orderList} />
                <Route name='orderTrashedList' path='orderTrashedList' view={orderTrashedList} />
                <Route name='orderDetail' path='orderDetail/:id' view={orderDetail} />
                <Route name='customerServiceList' path='customerServiceList/:uid' view={customerServiceList} />
                <Route name='customerServiceDetail' path='customerServiceDetail/:id' view={customerServiceDetail} />

                <Route name='purchaseBill' path='purchaseBill/:id/:purchase_id' view={purchaseBill} />
                <Route name='printStore' path='printStore/:purchase_id' view={printStore} />
                <Route name='printDelivery' path='printDelivery/:id' view={printDelivery} />

                <Route name='article' path='article/:id' view={article} />
                <Route name='articleCategory' path='articleCategory' view={articleCategory} />
                <Route name='articleList' path='articleList' view={articleList} />
                <Route name='memberList' path='memberList' view={memberList} />
                <Route name='memberPoint' path='memberPoint/:id' view={memberPoint} />
                <Route name='memberRecommendList' path='memberRecommendList/:id' view={memberRecommendList} />
                <Route name='memberCoupon' path='memberCoupon/:id' view={memberCoupon} />

                <Route name='updatePsw' path='updatePsw' view={updatePsw} />
                <Route name='userList' path='userList' view={userList} />
                <Route name='roleList' path='roleList' view={roleList} />
                <Route name='roleDetail' path='roleDetail/:id' view={roleDetail} />

                <Route name='pageForward' path='page-forward/:pageName' view={pageForward} />
            </Route>
            <Route name='user' path='user'>
                <Route name='login' path='login' view={login} />
            </Route>
            <Route name='login' path='login' view={login} />
            <Route name='notfound' path='/404' view={notfound} />

            <Route name='test' path='test'>
                <Route name='goodsDetail' path='goodsDetail' view={goodsDetail} />
            </Route>
            <Route name='promotion' path='promotion'>
                <Route name='couponList' path='coupon/list' view={couponList} />
                <Route name='couponDetail' path='coupon/detail/:id' view={couponDetail} />
                <Route name='couponCreate' path='coupon/create' view={couponEdit} />
                <Route name='couponEdit' path='coupon/edit/:id' view={couponEdit} />

                <Route name='raffleList' path='raffle/raffleList' view={raffleList} />
                <Route name='raffleCreate' path='raffle/raffleCreate' view={raffleCreate} />
                <Route name='raffleUpdate' path='raffle/raffleUpdate/:id' view={raffleUpdate} />
                <Route name='winningRecord' path='raffle/winningRecord/:id' view={winningRecord} />

                <Route name='seckillList' path='seckill/seckillList' view={seckillList} />
                <Route name='seckillCreate' path='seckill/seckillCreate' view={seckillCreate} />
                <Route name='seckillEdit' path='seckill/seckillEdit/:id' view={seckillEdit} />

                <Route name='themeCollocationDetail' path='collocation/theme/detail/:id' view={themeCollocationDetail} />
                <Route name='themeCollocationTags' path='collocation/theme/tags' view={themeCollocationTags} />
                <Route name='themeCollocationList' path='collocation/theme/list' view={themeCollocationList} />

                <Route name='collocation' path='collocation/list' view={collocation} />
                <Route name='collocationHandle' path='collocation/handle/:id' view={collocationHandle} />
                <Route name='collocationEdit' path='collocation/edit/:id' view={collocationEdit} />
                <Route name='collocationView' path='collocation/view/:id' view={collocationView} />
                <Route name='collocationCreate' path='collocation/create/:id' view={collocationCreate} />


                <Route name='spots' path='spots'>
                    <Route name='spotsList' path='/' view={spotsList} />
                    <Route name='spotsDetail' path='/:id' view={spotsDetail} />
                    <Route name='spotsCheatLogs' path='/:spotsId/scenes/:scenesId/cheat' view={spotsCheatLogs} />
                    <Route name='spotsLogs' path='/:spotsId/scenes/:scenesId/:logsType' view={spotsLogs} />
                </Route>
            </Route>

            <Route name='comment' path='comment'>
                <Route name='pendingAudit' path='pendingList/:id' view={commentPendingList} />
                <Route name='commentList' path='list/:id' view={commentList} />
                <Route name='commentSetUp' path='set' view={commentSetUp} />
            </Route>

            <Route name='preSale' path='preSale'>
                <Route name='preSaleList' path='list' view={preSale} />
                <Route name='preSaleCreate' path='viewEdit/:id/goodsId/:goods_id' view={preSaleViewEdit} />
                <Route name='editAddBatch' path='editAddBatch/:id/goodsId/:goods_id/batchLength/:length' view={editAddBatch} />
                <Route name='preSaleEdit' path='viewEdit/:id/goodsId/:goods_id' view={preSaleViewEdit} />
                <Route name='preSaleView' path='view/:id/goodsId/:goods_id' view={preSaleView} />
            </Route>

            <Route name='navigation' path='navigation'>
                <Route name='navigationList' path='list' view={navigationList} />
                <Route name='navigationDetail' path='detail/:id' view={navigationDetail} />
            </Route>

        </Route>
    </Routes>
);

Pace.once('hide', function () {
    $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});


var renderCallback = function () {
    setTimeout(function () {
        $('body').removeClass('fade-out');
    }, 500);
};

var InitializeRouter = function (View) {

    // cleanup
    if (window.Rubix) window.Rubix.Cleanup();
    Pace.restart();
    /*if (window.hasOwnProperty('ga') && typeof window.ga === 'function') {
        window.ga('send', 'pageview', {
            'page': window.location.pathname + window.location.search + window.location.hash
        });
    }*/

    var user = flux.store("loginStore").getState().user;
    var Actions = flux.actions.loginAction;
    if(!user.id){
        //console.log('木有ID');
        Api.userApi.get('check',{})
            .done(function(res){
                //console.log(res);
                if(res.code == 0){
                    Actions.setUser(res.data);
                    React.renderComponent(<View />, document.getElementById('app-container'), renderCallback);
                }else if(parseInt(res.code) == 40001 || parseInt(res.code) == 1){
                    Sp.message('请登录','error');
                    localStorage.setItem('isLogined', 0);
                    React.renderComponent(<login />, document.getElementById('app-container'), renderCallback);
                }else{
                    Sp.message('你在搞什么?','error');
                    React.renderComponent(<notfound />, document.getElementById('app-container'), renderCallback);
                }
            })
            .fail(function(){
                Sp.message('网络错误','error');
            });
    }else{
        //console.log('有ID');
        React.renderComponent(<View />, document.getElementById('app-container'), renderCallback);
    }


};

RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);
