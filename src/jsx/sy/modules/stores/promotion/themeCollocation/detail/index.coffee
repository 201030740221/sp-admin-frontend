liteFlux = require 'lite-flux'
store = liteFlux.store "theme-collocation-detail",
    data:
        imgSize:
            width: 640
            height: 640
        goodsCollocationList: null
        skuList: null
        tagList: null
        tab: 0

    actions:
        resetData: () ->
            data =
                "name": "",
                "goods_collocation_id": "",
                "status": 0,
                "sort_id": 0,
                "template_id": 0,
                "mobile_template_id": 0,
                "content": "",
                "mobile_content": "",
                "summary": "",
                "description": "",
                "share_qqzone": "",
                "share_weibo": "",
                "share_weixin_title": "",
                "share_weixin_content": "",
                "goods_collocation": null
                    # "id": 1,
                    # "name": "套餐一",
                    # "type": 1,
                    # "description": "描述",
                    # "deleted_at": null,
                    # "goods_collocation_details": []
                "theme_collocation_goods":[]
                "theme_collocation_tags":[]
                "primary_cover_id": null
                "primary_cover": null
                "album_ids": []
                "album": []
                "content_attachment_ids": []
                "content_attachment": []


            @setStore id: ''
            @setStore data

        resetFigure: (goods_id) ->
            data =
                # "theme_collocation_id"
                "goods_id": goods_id || 0
                "goods_sku_id": 0
                "label_name": ""
                "label_description": ""
                "label_x": 0
                "label_y": 0
                "status": 0
                "goods_sku": null

        resetTag: () ->
            data =
                # "theme_collocation_id"
                "tag_id": 0
                "sort_id": 0


        reset: () ->

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data

        searchGoodsCollocationList: (data) ->
            store = @getStore()
            # data =
            #     keywords: []
            # for i in [1..5]
            #     data.keywords.push store['keyword'+i] if store['keyword'+i]
            # console.log data
            webapi.collocation.searchGoodsCollocationList(data).then (res) =>
                console.log res
                if res.code is 0
                    if res.data.length
                        @setStore
                            goodsCollocationList: res.data
                    else
                        @setStore
                            goodsCollocationList:
                                msg: '搜索木有结果!',
                                type: 'warning'
                else
                    @setStore
                        goodsCollocationList:
                            msg: res.msg,
                            type: 'danger'
                    Sp.message res.msg, 'error'

        getSku: (id) ->
            data =
                goods_ids: id
                status: 1
            webapi.themeCollocation.getSku(data).then (res) =>
                console.log res
                if res.code is 0
                    @setStore
                        skuList: res.data
                else
                    Sp.message res.msg, 'error'
        # changeFigureStatus: (data) ->
        #     store = @getStore()
        #     if store.data.id > 0
        #         @getAction().updateFigure data

        updateFigure: (data) ->
            store = @getStore()
            param =
                theme_collocation_id: store.id
                ids: [data.id]
                goods_id: [data.goods_id]
                goods_sku_id: [data.goods_sku_id]
                label_name: [data.label_name]
                label_description:[data.label_description]
                label_x: [data.label_x]
                label_y: [data.label_y]
                status: [data.status]
            webapi.themeCollocation.UpdateThemeCollocationGoods(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message res.msg, 'success'
                else
                    Sp.message res.msg, 'error'

        getTagList: (data) ->
            webapi.themeCollocation.getTagList(data).then (res) =>
                console.log res
                if res.code is 0
                    @setStore
                        tagList: res.data
                else
                    Sp.message res.msg, 'error'

        createThemeCollocation: () ->
            store = @getStore()
            param =
                name: store.name
                goods_collocation_id: store.goods_collocation_id
                status: store.status
                sort_id: 1
                template_id: 1
                mobile_template_id: 1
                content: ''
                mobile_content: ''
                summary: store.summary
                description: store.description
                share_qqzone: store.share_qqzone
                share_weibo: store.share_weibo
                share_weixin_title: store.share_weixin_title
                share_weixin_content: store.share_weixin_content
                primary_cover_id: store.primary_cover_id
                album_ids: store.album_ids
                content_attachment_ids: store.content_attachment_ids
            param.theme_collocation_goods = store.theme_collocation_goods.map (item, i) =>
                ret =
                    # theme_collocation_id
                    goods_id: item.goods_id
                    goods_sku_id: item.goods_sku_id
                    label_name: item.label_name
                    label_description: item.label_description
                    label_x: item.label_x
                    label_y: item.label_y
                    status: item.status

            param.theme_collocation_tags = store.theme_collocation_tags.map (item, i) =>
                ret =
                    tag_id: item.tag_id
                    sort_id: item.sort_id


            webapi.themeCollocation.createThemeCollocation(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message res.msg, 'success'
                    # @setStore
                    #     data: res.data
                    RRouter.routing.navigate('/promotion/collocation/theme/detail/' + res.data.id);
                else
                    Sp.message res.msg, 'error'

        updateThemeCollocation: () ->
            store = @getStore()
            param =
                id: store.id
                name: store.name
                goods_collocation_id: store.goods_collocation_id
                status: store.status
                sort_id: 1
                template_id: 1
                mobile_template_id: 1
                content: ''
                mobile_content: ''
                summary: store.summary
                description: store.description
                share_qqzone: store.share_qqzone
                share_weibo: store.share_weibo
                share_weixin_title: store.share_weixin_title
                share_weixin_content: store.share_weixin_content
                primary_cover_id: store.primary_cover_id
                album_ids: store.album_ids
                content_attachment_ids: store.content_attachment_ids
            param.theme_collocation_goods = store.theme_collocation_goods.map (item, i) =>
                ret =
                    id: item.id
                    theme_collocation_id: store.id
                    goods_id: item.goods_id
                    goods_sku_id: item.goods_sku_id
                    label_name: item.label_name
                    label_description: item.label_description
                    label_x: item.label_x
                    label_y: item.label_y
                    status: item.status
            param.theme_collocation_tags = store.theme_collocation_tags.map (item, i) =>
                ret =
                    theme_collocation_id: store.id
                    tag_id: item.tag_id
                    sort_id: item.sort_id


            webapi.themeCollocation.updateThemeCollocation(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message res.msg, 'success'
                    RRouter.routing.navigate('/promotion/collocation/theme/list');
                    # @setStore
                    #     skuList: res.data
                else
                    Sp.message res.msg, 'error'




        getThemeCollocation: (data) ->
            webapi.themeCollocation.getThemeCollocation(data).then (res) =>
                console.log res
                if res.code is 0
                    data = res.data
                    if data.primary_cover and data.primary_cover.length
                        data.primary_cover_id = data.primary_cover[0].id
                    else
                        data.primary_cover_id = null
                    if data.album and data.album.length
                        data.album_ids = data.album.map (item, i) ->
                            item.id
                    else
                        data.album_ids = [];

                    if data.content_attachment and data.content_attachment.length
                        data.content_attachment_ids = data.content_attachment.map (item, i) ->
                            item.id
                    else
                        data.album_ids = [];

                    if data.tags and data.tags.length
                        data.theme_collocation_tags = data.tags
                    else
                        data.theme_collocation_tags = []

                    # @setStore
                    #     data: data
                        # goodsCollocation: data.goods_collocation

                    # theme_collocation_goods 被清除则reset theme_collocation_goods
                    if data.goods_collocation and data.goods_collocation.goods_collocation_details and data.goods_collocation.goods_collocation_details.length and (not data.theme_collocation_goods or not data.theme_collocation_goods.length)
                        data.theme_collocation_goods = []
                        data.goods_collocation.goods_collocation_details.map (item, i) =>
                            data.theme_collocation_goods.push @getAction().resetFigure item.goods_id
                    # theme_collocation_goods存在 则检查是否完整  若不完整则对应位置插入默认的值
                    else if data.goods_collocation and data.goods_collocation.goods_collocation_details and data.goods_collocation.goods_collocation_details.length and data.theme_collocation_goods.length
                        # data.theme_collocation_goods = []
                        new_goods = []
                        data.goods_collocation.goods_collocation_details.map (item, i) =>
                            exist = no
                            data.theme_collocation_goods.map (item2, i2) =>
                                if item2.goods_id is item.goods_id
                                    new_goods.push item2
                                    exist = yes
                            if exist is no
                                new_goods.push @getAction().resetFigure item.goods_id
                        data.theme_collocation_goods = new_goods
                    @setStore data

                else
                    Sp.message res.msg, 'error'
                    RRouter.routing.navigate('/promotion/collocation/theme/list');


        validAllTagInfo: () ->
            store = @getStore()
            valid = yes
            theme_collocation_goods = store.theme_collocation_goods.map (item, i) =>
                validInfo = @getAction().validTagInfo item, i
                valid = no if not validInfo.valid
                validInfo.item
            @setStore
                theme_collocation_goods: theme_collocation_goods
            valid
        validOneTagInfo: (item, i) ->
            store = @getStore()
            validInfo = @getAction().validTagInfo item, i
            theme_collocation_goods = store.theme_collocation_goods
            theme_collocation_goods[i] = validInfo.item
            @setStore
                theme_collocation_goods: theme_collocation_goods
            validInfo.valid


        validTagInfo: (item, i) ->
            valid = yes

            item.fieldError = {}
            if item.label_name.length > 10
                Sp.message '标签' + (i + 1) + ': 标签文字内容 不能超过10个字符', 'error'
                item.fieldError.label_name = ['标签文字内容 不能超过10个字符']
                valid = no
            else
                item.fieldError.label_name = []

            if item.label_description.length > 40
                Sp.message '标签' + (i + 1) + ': 商品文案 不能超过40个字符', 'error'
                item.fieldError.label_description = ['商品文案 不能超过40个字符']
                valid = no
            else
                item.fieldError.label_description = []

            valid: valid
            item: item



Validator = liteFlux.validator
validatorData = Validator store,{
    'name':
        required: true
        message:
            required: "搭配名称 不能为空"
    'summary':
        maxLength: 30
        message:
            maxLength: "内容概括 不能多于30个字符"
    'description':
        maxLength: 100
        message:
            maxLength: "内容概括 不能多于100个字符"
    'album_ids':
        minLength: 1
        message:
            minLength: "相册图片 不能为空"
    'content_attachment_ids':
        minLength: 1
        message:
            minLength: "主题详情描述 不能为空"
    'share_weixin_title':
        maxLength: 40
        message:
            maxLength: "微信分享标题 不能多于40个字符"
    'share_weixin_content':
        maxLength: 40
        message:
            maxLength: "微信分享描述 不能多于40个字符"
    'share_weibo':
        maxLength: 129
        message:
            maxLength: "微博分享内容 不能多于129个字符"
    # 'theme_collocation_tags':
    #     minLength: 1
    #     message:
    #         minLength: "标签 不能为空"
},{
    #oneError: true
}

store.addAction 'valid', (name)->
    valid = validatorData.valid(name)
    store = @getStore()
    if store.fieldError
        if name
            if store.fieldError[name].length
                Sp.message store.fieldError[name][0], 'error'
        else
            for key, error of store.fieldError
                if error.length
                    Sp.message error[0], 'error'
    valid





module.exports = store
