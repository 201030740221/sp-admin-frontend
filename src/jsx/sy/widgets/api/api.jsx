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
    goodsTag: new Sp.Model({
        api: {
            list: '/api/tag/goods/sku/getTagList',
            update: '/api/tag/goods/sku/update'
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
    goodsSkuList: new Sp.Model({
        api: {
            list: '/api/goods/getSkuListByGoodsIds'
        }
    }),
    skuApi : new Sp.Model({
        api: {
            create: '/api/goodsSku/create',
            update: '/api/goodsSku/update',
            remove: '/api/goodsSku/delete',
            getListByGoodsID: '/api/goodsSku/getListByGoodsID',
            updatePrimarySkuId : '/api/goods/update',
            view: '/api/goodsSku/view',
            list: '/api/goodsSku/getListByGoodsID'
        }
    }),
    skuStatusApi: new Sp.Model({
        api: {
            update:'/api/goodsSku/changeStatus'
        }
    }),
    skuDisplayApi: new Sp.Model({
        api: {
            update:'/api/goodsSku/changeDisplay'
        }
    }),
    articleApi: new Sp.Model({
        api: {
            getList: '/api/article',
            getDetail: '/api/article/detail',
            update: '/api/article/update'
        }
    }),
    pointListApi: new Sp.Model({
        api: {
            list: '/api/member/getPointList'
        }
    }),
    pointAdjustmentApi: new Sp.Model({
        api: {
            update: '/api/member/pointAdjustment'
        }
    }),
    memberRecommendApi: new Sp.Model({
        api: {
            list: '/api/referral/log'
        }
    }),
    lotteryApi: new Sp.Model({
        api: {
            RESTful: "/api/lottery"
        }
    }),
    lotteryResultApi: new Sp.Model({
        api: {
            list: "/api/lottery/result"
        }
    }),
    couponListApi: new Sp.Model({
        api: {
            list: "/api/coupon/task"
        }
    }),
    seckillApi: new Sp.Model({
        api: {
            list: "/api/flash-sale",
            create: '/api/flash-sale/store',
            remove:'/api/flash-sale/destroy',
            update: '/api/flash-sale/activate'
        }
    }),
    seckillFreezeApi: new Sp.Model({
        api: {
            update: '/api/flash-sale/freeze'
        }
    }),
    seckillDetailApi: new Sp.Model({
        api: {
            list: "/api/flash-sale/show",
            update: '/api/flash-sale/update'
        }
    }),
    seckillRemindLogApi: new Sp.Model({
        api: {
            RESTful: "/api/flash-sale/reminder-users"
        }
    }),
    seckillLogsApi: new Sp.Model({
        api: {
            RESTful: "/api/flash-sale/logs"
        }
    }),
    getGoodsApi: new Sp.Model({
        api: {
            list: "/api/goodsSku/getList"
        }
    })
};

module.exports = api;
