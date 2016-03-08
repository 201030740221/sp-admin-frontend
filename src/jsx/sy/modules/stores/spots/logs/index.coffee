liteFlux = require 'lite-flux'
store = liteFlux.store "spots-logs",
    data:
        spotsId: null
        scenesId: null
        scenesData: null
        type: ''
        list: null
        q: ''
        t: ''
        newResult: 0
    actions:
        reset: () ->
            data =
                list: null
                spotsId: null
                scenesId: null
                type: ''
                list: null
                q: ''
                t: ''
                scenesData: null
            @setStore data

        setIds: (spotsId, scenesId, type) ->
            data =
                spotsId: spotsId
                scenesId: scenesId
                type: type
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

        reloadScenesLogs: () ->
            store = @getStore()
            spotsId = spotsId || store.spotsId
            scenesId = scenesId || store.scenesId
            param =
                page: store.current_page || 1
            @getAction().getScenesLogs param, spotsId, scenesId

        getScenesLogs: (data, spotsId, scenesId) ->
            store = @getStore()
            spotsId = spotsId || store.spotsId
            scenesId = scenesId || store.scenesId
            param = data || {}
            webapi.spots.getScenesLogs(spotsId, scenesId, param).then (res) =>
                console.log res
                if res.code is 0
                    @setStore res.data
                else
                    Sp.message res.msg, 'error'
        getScenesWinners: (data, spotsId, scenesId) ->
            store = @getStore()
            spotsId = spotsId || store.spotsId
            scenesId = scenesId || store.scenesId
            param = data || {}
            webapi.spots.getScenesWinners(spotsId, scenesId, param).then (res) =>
                console.log res
                if res.code is 0
                    @setStore data: res.data
                else
                    Sp.message res.msg, 'error'


        removeScenesLogs: (id, i) ->
            store = @getStore()
            spotsId = store.spotsId
            scenesId = store.scenesId
            data = store.data
            webapi.spots.removeSpotLogs(spotsId, scenesId, id).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '删除成功!', 'success'
                    data.map (item, i) =>
                        if item.id is id
                            item.deleted_at = 1
                    @setStore data: data
                else
                    Sp.message res.msg, 'error'

        resetResult: () ->

            @setStore newResult: 0

        updateScenesLogs: (id, i) ->
            store = @getStore()
            spotsId = store.spotsId
            scenesId = store.scenesId
            # data = store.data
            param =
                result: store.newResult
            webapi.spots.updateSpotLogs(spotsId, scenesId, id, param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '更新成功!', 'success'
                    # data.map (item, i) =>
                    #     if item.id is id
                    #         item.deleted_at = 1
                    # @setStore data: data
                    @getAction().reloadScenesLogs()
                else
                    Sp.message res.msg, 'error'

        publishScenesWinners: () ->
            store = @getStore()
            spotsId = store.spotsId
            scenesId = store.scenesId
            webapi.spots.publishScenesWinners(spotsId, scenesId).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '场景获奖结果发布成功!'
                    window.location.reload()
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
