liteFlux = require 'lite-flux'
store = liteFlux.store "coupon-detail-scope",
    data:
        data: null
    actions:
        reset: () ->
            @setStore
                data: null

        getCategoryList: (data) ->

            param =
                size: 999
            param = Object.assign param, data
            webapi.goods.getCategoryList(param).then (res) =>
                if res.code is 0
                    @setStore data: res.data
        getGoodsList: (data) ->
            param =
                size: 999
            param = Object.assign param, data
            webapi.goods.getSpuList(param).then (res) =>
                if res.code is 0
                    @setStore data: res.data.data

module.exports = store
