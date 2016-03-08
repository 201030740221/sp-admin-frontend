liteFlux = require 'lite-flux'
store = liteFlux.store "spots-list",
    data:
        list: null
        activeList: null
    actions:
        getSpotList: (data, loaded) ->
            param = data || {}
            webapi.spots.getSpotList(param).then (res) =>
                console.log res
                if res.code is 0
                    @setStore res.data
                    loaded res.data.data
                else
                    Sp.message res.msg, 'error'
        removeSpot: (id)->
            param =
                id: id
            webapi.spots.removeSpot(param).then (res) =>
                if res.code is 0
                    @setStore
                        list: []
                else
                    Sp.message res.msg, 'error'

module.exports = store
