liteFlux = require 'lite-flux'
store = liteFlux.store "navigation-list",
    data:
        list: null
        activeList: null
    actions:
        resetData: () ->
            data =
                list: null
            @setStore data

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data

        getNavigationList: (data) ->
            param = data
            webapi.navigation.getNavigationList(param).then (res) =>
                console.log res
                if res.code is 0
                    if data and data.status is 1
                        @setStore activeList: res.data.nodes
                    else
                        @setStore list: res.data.nodes
                    # @setStore list: res.data.nodes
                else
                    Sp.message res.msg, 'error'
        createNavigation: (data) ->
            store = @getStore()
            list = store.list
            param = data
            param.sort_id = list.length
            webapi.navigation.createNavigation(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '创建成功!'
                    list.push res.data
                    @setStore list: list
                else
                    Sp.message.error res.msg


        deleteNavigation: (data) ->
            store = @getStore()
            list = store.list
            param =
                id: data.id
            webapi.navigation.deleteNavigation(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '删除成功!', 'success'
                    newList = []
                    list.map (item, i) =>
                        if item.id isnt data.id
                            newList.push item
                    @setStore list: newList
                else
                    Sp.message res.msg, 'error'
        updateNavigationStatus: (data) ->
            store = @getStore()
            list = store.list
            param =
                ids: [data.id]
                status: [data.status]
            webapi.navigation.updateNavigationStatusMultiply(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '操作成功!'
                    list.map (item, i) =>
                        if item.id is data.id
                            item.status = data.status
                    @setStore list: list
                else
                    Sp.message.error res.msg

        updateActiveNavigationStatus: (data) ->
            store = @getStore()
            activeList = store.activeList
            param =
                ids: [data.id]
                status: [data.status]
            webapi.navigation.updateNavigationStatusMultiply(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '操作成功!'
                    newList = []
                    activeList.map (item, i) =>
                        if item.id isnt data.id
                            newList.push item
                    @setStore activeList: newList
                else
                    Sp.message.error res.msg
        updateNavigationSortIdMultiply: (data) ->
            store = @getStore()
            list = store.list
            param =
                ids: []
                sort_ids: []
            data.map (item, i) ->
                param.ids.push(item.id);
                param.sort_ids.push(i + 1);

            webapi.navigation.updateNavigationSortIdMultiply(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '操作成功!'
                    @setStore list: data
                else
                    Sp.message.error res.msg

        publish: () ->
            webapi.navigation.publish().then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '操作成功!'
                else
                    Sp.message.error res.msg




module.exports = store
