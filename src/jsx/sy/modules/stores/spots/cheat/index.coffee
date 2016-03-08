liteFlux = require 'lite-flux'
store = liteFlux.store "spots-cheat-logs",
    data:
        spotsId: null
        scenesId: null
        scenesData: null
        list: null
        q: ''
        t: ''
    actions:
        reset: () ->
            data =
                list: null
                spotsId: null
                scenesId: null
                list: null
                q: ''
                t: ''
                scenesData: null
            @setStore data

        setIds: (spotsId, scenesId) ->
            data =
                spotsId: spotsId
                scenesId: scenesId
            @setStore data

        resetList: () ->
            data =
                list: null
            @setStore data

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data

        getScenesCheatLogs: (data, spotsId, scenesId) ->
            store = @getStore()
            spotsId = spotsId || store.spotsId
            scenesId = scenesId || store.scenesId
            param = data || {}
            webapi.spots.getScenesCheatLogs(spotsId, scenesId, param).then (res) =>
                console.log res
                if res.code is 0
                    @setStore res.data
                else
                    Sp.message res.msg, 'error'

        getScenes: (id) ->
            store = @getStore()
            spotsId = store.spotsId
            scenesId = store.scenesId
            webapi.spots.getScenes(spotsId, scenesId).then (res) =>
                console.log res
                if res.code is 0
                    @setStore scenesData: res.data
                else
                    Sp.message res.msg, 'error'
module.exports = store
