Api = require("../../../api/api.jsx");
liteFlux = require 'lite-flux'
store = liteFlux.store "coupon-search",
    data:
        selected: null

    actions:
        reset: () ->
            @setStore
                current_page: 0
                last_page: 1
                data: []

                keyword: ''
                type: -1

                selected: null

        filter: (params)->
            pageNum = 1
            @setStore params # params.keyword, params.type(派发形式)
            @getAction().get pageNum

        get: (type) ->
            store = @getStore()
            page = store.current_page || 0
            if type is 'prev'
                page = page - 1
            else
                page = page + 1

            # 新增一种用法，为数字时直接当做页码数
            # 用于filter方法中
            if !isNaN(type)
                page = type

            page = store.last_page if page > store.last_page
            page = 1 if page < 1

            param =
                size: 10
                page: page
                keyword: store.keyword
                type: store.type

            Api.couponApi.list(param).done (res) =>
                if res.code is 0
                    @setStore res.data

        select: (item) ->
            @setStore
                selected: item

        getSelected: () ->
            store = @getStore()
            store.selected




module.exports = store
