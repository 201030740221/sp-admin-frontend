liteFlux = require 'lite-flux'
store = liteFlux.store "spots-detail",
    data:
        id: ''
        title: ''
        tactic_tip: ''
        success_tip: ''
        fail_tip: ''
        rule_title: ''
        rule_content: ''
        more_activity_title: ''
        more_activity_thumb: ''
        more_activity_thumb_url: ''
        more_activity_href: ''
        additional_title: ''
        additional_content: ''
        # * @apiParam {String} title 活动标题
        # * @apiParam {String} tactic_tip 游戏攻略
        # * @apiParam {String} success_tip 游戏通过
        # * @apiParam {String} fail_tip 游戏失败
        # * @apiParam {String} rule_title 规则标题
        # * @apiParam {String} rule_content 规则内容
        # * @apiParam {String} more_activity_title 更多活动标题
        # * @apiParam {Number} more_activity_thumb 更多活动宣传图
        # * @apiParam {String} more_activity_href 更多活动链接
        # * @apiParam {String} additional_title 活动活动补充说明标题
        # * @apiParam {String} additional_content 活动活动补充说明内容
    actions:
        reset: () ->
            @setStore
                id: null
                title: ''
                tactic_tip: ''
                success_tip: ''
                fail_tip: ''
                rule_title: ''
                rule_content: ''
                more_activity_title: ''
                more_activity_thumb: ''
                more_activity_thumb_url: ''
                more_activity_href: ''
                additional_title: ''
                additional_content: ''

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data

        getSpotList: (data) ->
            param = data || {}
            webapi.spots.getSpotList(param).then (res) =>
                console.log res
                if res.code is 0
                    @setStore
                        list: res.data.nodes
                        parent: res.data.parent_node
                else
                    Sp.message res.msg, 'error'
        getSpot: (id) ->
            webapi.spots.getSpot(id).then (res) =>
                console.log res
                if res.code is 0
                    @setStore res.data
                else if res.code is 1
                    Sp.message '非法id!'
                    RRouter.routing.navigate('/promotion/spots');
                else
                    Sp.message res.msg, 'error'
        createSpot: (data) ->
            store = @getStore()
            param = data ||
                title: store.title
                tactic_tip: store.tactic_tip
                success_tip: store.success_tip
                fail_tip: store.fail_tip
                rule_title: store.rule_title
                rule_content: store.rule_content
                more_activity_title: store.more_activity_title
                more_activity_thumb: store.more_activity_thumb
                more_activity_href: store.more_activity_href
                additional_title: store.additional_title
                additional_content: store.additional_content

            webapi.spots.createSpot(param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '创建成功!'
                    RRouter.routing.navigate('/promotion/spots/'+res.data.id);
                else
                    Sp.message.error res.msg

        updateSpot: () ->
            store = @getStore()
            id = store.id
            param =
                spotId: id
                title: store.title
                tactic_tip: store.tactic_tip
                success_tip: store.success_tip
                fail_tip: store.fail_tip
                rule_title: store.rule_title
                rule_content: store.rule_content
                more_activity_title: store.more_activity_title
                more_activity_thumb: store.more_activity_thumb
                more_activity_href: store.more_activity_href
                additional_title: store.additional_title
                additional_content: store.additional_content
            webapi.spots.updateSpot(id, param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '更新成功!'
                    @setStore res.data
                else
                    Sp.message.error res.msg
        # deleteSpot: (data) ->
        #     store = @getStore()
        #     param =
        #         id: data.id
        #     webapi.spots.deleteSpot(param).then (res) =>
        #         console.log res
        #         if res.code is 0
        #             Sp.message '删除成功!', 'success'
        #             newList = []
        #             list.map (item, i) =>
        #                 if item.id isnt data.id
        #                     newList.push item
        #             @setStore list: newList
        #         else
        #             Sp.message res.msg, 'error'


# * @apiParam {String} title 活动标题
# * @apiParam {String} tactic_tip 游戏攻略
# * @apiParam {String} success_tip 游戏通过
# * @apiParam {String} fail_tip 游戏失败
# * @apiParam {String} rule_title 规则标题
# * @apiParam {String} rule_content 规则内容
# * @apiParam {String} more_activity_title 更多活动标题
# * @apiParam {Number} more_activity_thumb 更多活动宣传图
# * @apiParam {String} more_activity_href 更多活动链接
# * @apiParam {String} additional_title 活动活动补充说明标题
# * @apiParam {String} additional_content 活动活动补充说明内容
Validator = liteFlux.validator
validatorData = Validator store,{
    'title':
        required: true
        message:
            required: "活动标题 不能为空"
    'tactic_tip':
        required: true
        message:
            required: "游戏攻略 不能为空"
    'success_tip':
        required: true
        message:
            required: "游戏通过 不能为空"
    'fail_tip':
        required: true
        message:
            required: "规则标题 不能为空"
    'rule_title':
        required: true
        message:
            required: "活动标题 不能为空"
    'rule_content':
        required: true
        message:
            required: "规则内容 不能为空"
    'more_activity_title':
        required: true
        message:
            required: "更多活动标题 不能为空"
    'more_activity_thumb':
        required: true
        message:
            required: "更多活动宣传图 不能为空"
    'more_activity_href':
        required: true
        message:
            required: "更多活动链接 不能为空"
    'additional_title':
        required: true
        message:
            required: "活动活动补充说明标题 不能为空"
    'additional_content':
        required: true
        message:
            required: "活动活动补充说明内容 不能为空"
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
