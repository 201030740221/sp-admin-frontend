var Sp = require('../../widgets/Sp.jsx');
var api = {
    attributeApi : new Sp.Model({
        api:{
            create:'/api/attribute/create',
            update:'/api/attribute/update',
            remove:'/api/attribute/delete',
            list:'/api/attribute/group/value',
            sort:'/api/attribute/sort'
        }
    }),
    attributeValueApi : new Sp.Model({
        api:{
            create:'/api/attribute/value/create',
            update:'/api/attribute/value/update',
            remove:'/api/attribute/value/delete',
            list:'/api/attribute/value'
        }
    }),
    attributeGroupApi : new Sp.Model({
        api:{
            create:'/api/attribute/group/create',
            update:'/api/attribute/group/update',
            remove:'/api/attribute/group/delete',
            list:'/api/attribute/group',
            detail: '/api/attribute/group/detail'
        }
    }),
    sectionApi : new Sp.Model({
        api:{
            create:'/api/attribute/section/create',
            update:'/api/attribute/section/update',
            remove:'/api/attribute/section/delete',
            list:'/api/attribute/section',
            bind: '/api/attribute/section/bind',
            sort: '/api/attribute/section/sort'
        }
    }),
    goodApi : new Sp.Model({
        api: {
            create: '/api/goods/create',
            update: '/api/goods/update',
            remove: '/api/goods/delete',
            list: '/api/goods/getList',
            unit: '/api/goods/getUnit',
            getAttributeByID: '/api/goods/getAttributeByID',
            view: '/api/goods/view'
        }
    }),
    skuApi : new Sp.Model({
        api: {
            create: '/api/goodsSku/create',
            update: '/api/goodsSku/update',
            remove: '/api/goodsSku/delete',
            getListByGoodsID: '/api/goodsSku/getListByGoodsID',
            updatePrimarySkuId : '/api/goods/update',
            view: '/api/goodsSku/view'
        }
    }),
    articleApi: new Sp.Model({
        api: {
            list: '/api/articles',
            getDetail: '/api/articles/detail',
            update: '/api/articles/update',
            create: '/api/articles/create',
            remove: '/api/articles/delete',
            updateStatus: '/api/articles/updateStatus'
        }
    }),
    // 订单API
    orderApi: new Sp.Model({
        api: {
            list: '/api/order/order',
            search: '/api/order/search',
            RESTful: '/api/order/order',
            trashed: '/api/order/getTrashedOrder',
            restore: '/api/order/restoreOrder'
        }
    }),
    // 物流订单API
    expressApi: new Sp.Model({
        api: {
            update: "/api/order/express"
        }
    }),
    articleCategoryApi: new Sp.Model({
        api: {
            list: '/api/articles/category',
            create: '/api/articles/category/create',
            update: '/api/articles/category/update',
            remove: '/api/articles/category/delete',
            updateStatus: '/api/articles/category/updateStatus'
        }
    }),
    memberApi: new Sp.Model({
        api: {
            list: '/api/member'
        }
    }),
    password:new Sp.Model({
        api: {
            update: '/api/user/changePassword'
        }
    }),
    userApi: new Sp.Model({
        api: {
            list: '/api/user',
            update: '/api/user/update',
            create: '/api/user/create',
            remove: '/api/user/delete',
            login: '/api/user/login',
            logout: '/api/user/logout',
            check: '/api/user/checkLogin'
        }
    }),
    roleApi: new Sp.Model({
        api: {
            list: '/api/privilege/roles',
            RESTful: '/api/privilege/roles',
            resource: '/api/privilege/resources',
            log: '/api/privilege/log'
        }
    }),
    // 物流订单API
    aftersaleApi: new Sp.Model({
        api: {
            list: "/api/aftersales/aftersales"
        }
    }),
    //优惠券api
    couponApi: new Sp.Model({
        api: {
            list: "/api/coupon/task",
            RESTful: "/api/coupon/task"
        }
    }),
    coupon: new Sp.Model({
        api: {
            list: "/api/coupon"
        }
    })
};

module.exports = api;
