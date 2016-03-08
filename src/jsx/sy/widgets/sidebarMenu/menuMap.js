
var menuMap = [
    {
        name: '商品管理',
        menu: [
            {
                name: '商品中心管理',
                url: '/app/page-forward/erp'
            },
            {
                name: '添加商品',
                url: '/app/good/add'
            },
            {
                name: '商品列表',
                url: '/app/goods/0'
            },
            {
                name: '商品分类',
                url: '/app/categoryManage'
            },
            {
                name: '属性规格',
                url: '/app/attr/group/0'
            },
            {
                name: '用户评论',
                url: '/app/comments'
            },
            {
                name: '商品回收站',
                url: '/app/recycle'
            }
        ]
    },
    {
        name: '订单管理',
        menu: [
            {
                name: '订单列表',
                url: '/app/orderList/0'
            },
            {
                name: '订单回收站',
                url: '/app/orderTrashedList'
            }
        ]
    },
    {
        name: '售后管理',
        menu: [
            {
                name: '售后申请列表',
                url: '/app/customerServiceList/0'
            }
        ]
    },
    {
        name: '文章管理',
        menu: [
            {
                name: '文章分类',
                url: '/app/articleCategory'
            },
            {
                name: '文章列表',
                url: '/app/articleList'
            }
        ]
    },
    {
        name: '用户管理',
        menu: [
            {
                name: '用户列表',
                url: '/app/memberList'
            }
        ]
    },
    {
        name: '后台用户管理',
        menu: [
            {
                name: '后台用户列表',
                url: '/app/userList'
            },
            {
                name: '角色管理',
                url: '/app/roleList'
            }
        ]
    },
    {
        name: '卡券管理',
        menu: [
            {
                name: '卡券列表',
                url: '/promotion/coupon/list'
            }
        ]
    },
    {
        name: '促销管理',
        menu: [
            {
                name: '抽奖活动列表',
                url: '/promotion/raffle/raffleList'
            },
            {
                name: '找茬游戏列表',
                url: '/promotion/spots'
            }
        ]
    },
    {
        name: '秒杀管理',
        menu: [
            {
                name: '秒杀活动列表',
                url: '/promotion/seckill/seckillList'
            }
        ]
    },
    {
        name: '搭配套餐管理',
        menu: [
            {
                name: '推荐搭配列表',
                url: '/promotion/collocation/list'
            }
        ]
    },
    {
        name: '主题搭配管理',
        menu: [
            {
                name: '主题搭配列表',
                url: '/promotion/collocation/theme/list'
            },
            {
                name: '标签管理',
                url: '/promotion/collocation/theme/tags'
            }
        ]
    },
    {
        name: '评论晒单管理',
        menu: [
            {
                name: '待审核',
                url: '/comment/pendingList/audit'
            },
            {
                name: '评价晒单',
                url: '/comment/list/all'
            },
            {
                name: '评价晒单积分设置',
                url: '/comment/set'
            }
        ]
    },
    {
        name: '预售管理',
        menu: [
            {
                name: '预售活动列表',
                url: '/preSale/list'
            }
        ]
    },
    {
        name: '栏目管理',
        menu: [
            {
                name: '栏目列表',
                url: '/navigation/list'
            }
        ]
    },
    {
        name: '内容管理',
        menu: [
            {
                name: '页面管理',
                url: '/app/page-forward/content-manager'
            }
        ]
    }
];


var table = {};
menuMap.map(function (menu, k) {
    if(menu.menu.length){
        menu.menu.map(function (item, i) {
            table[item.name] = item.url;
        });
    }
});

module.exports = {
    menu: menuMap,
    table : table
};
