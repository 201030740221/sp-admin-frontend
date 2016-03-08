liteFlux = require 'lite-flux'
store = liteFlux.store "theme-collocation-tags",
    data:
        list: null

    actions:
        resetData: () ->
            data =
                "name": ""
            @setStore data

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data

        getTagList: (data) ->
            webapi.themeCollocation.getTagList(data).then (res) =>
                console.log res
                if res.code is 0
                    @setStore list: res.data
                else
                    Sp.message res.msg, 'error'

        createTagCategory: (data) ->
            store = @getStore()
            list = store.list || []
            length = list.length
            param =
                name: if data then data.name else '新分类'
                keywords: 0
                description: 0
                sort_id: length + 1
                status: 1
            webapi.themeCollocation.createTagCategory(param).then (res) =>
                console.log res
                if res.code is 0
                    list.push res.data
                    @setStore list: list
                    Sp.message '分类创建成功!', 'success'
                else
                    Sp.message res.msg, 'error'



        deleteTagCategory: (data) ->
            store = @getStore()
            list = store.list

            param =
                id: data.id
            webapi.themeCollocation.deleteTagCategory(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '分类删除成功!', 'success'
                    newList = []
                    list.map (item, i) =>
                        if item.id isnt data.id
                            newList.push item

                    @setStore list: newList
                else
                    Sp.message res.msg, 'error'

        updateTagCategorySortIdMultiply: (data) ->
            param =
                ids : {}
            data.map (item, i) =>
                param.ids[item] = i
            console.log param
            webapi.themeCollocation.updateTagCategorySortIdMultiply(param).then (res) =>
                console.log res
                if res.code is 0

                    # Sp.message res.msg, 'success'
                else
                    Sp.message res.msg, 'error'


        updateTagSortIdMultiply: (data) ->
            param =
                ids : {}
            data.map (item, i) =>
                param.ids[item] = i
            console.log param
            webapi.themeCollocation.updateTagSortIdMultiply(param).then (res) =>
                console.log res
                if res.code is 0
                    # Sp.message res.msg, 'success'
                else
                    Sp.message res.msg, 'error'


        createTag: (data) ->
            store = @getStore()
            list = store.list || []
            category = null
            list.map (item, i) =>
                if item.id is data.id
                    category = item
            if category is null || !(data.id > 0)
                console.log 'data:', data
                Sp.message '出错了', 'error'
                return false
            if not category.tags or not category.tags.length
                category.tags = []
            param =
                name: if data then data.name else '新标签'
                theme_collocation_tag_category_id: data.id
                sort_id: category.tags.length + 1
            webapi.themeCollocation.createTag(param).then (res) =>
                console.log res
                if res.code is 0
                    list.map (item, i) =>
                        if item.id is data.id
                            item.tags.push res.data
                    @setStore list: list
                    Sp.message '标签创建成功!', 'success'
                else
                    Sp.message res.msg, 'error'



        deleteTag: (data) ->
            store = @getStore()
            list = store.list
            theme_collocation_tag_category_id = data.theme_collocation_tag_category_id
            param =
                id: data.id
            webapi.themeCollocation.deleteTag(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '标签删除成功!', 'success'
                    newTags = []
                    list.map (item, i) =>
                        if +item.id is +theme_collocation_tag_category_id
                            item.tags.map (tag, i) ->
                                if tag.tag_id isnt data.id
                                    newTags.push tag
                            item.tags = newTags
                    @setStore list: list
                else
                    Sp.message res.msg, 'error'


module.exports = store
