liteFlux = require 'lite-flux'
SpotsStore = require './index.coffee'
spotsStoreName = 'spots-detail'
store = liteFlux.store "spots-scenes",
    data:
        list: null
        tab: 0
        id: 0
        spotId: null
        origin_img: ''
        origin_img_url: ''
        game_img: ''
        game_img_url: ''
        title: ''
        href: ''
        weixin_share_title: ''
        weixin_share_content: ''
        weibo_share_content: ''
        begin_at: moment().format('YYYY-MM-DD HH:mm:ss')
        end_at: moment().format('YYYY-MM-DD HH:mm:ss')
        during_time: ''
        error_cut_time: ''
        additional_time: ''
        is_publish: 0
        items: [
            # scene_id: 1
            # x: 0
            # y: 0
            # width: 10
            # height: 10
        ]
        prizes: [
            # scene_id: null
            begin_position: ''
            end_position: ''
            prize_type: 0
            prize_value: ''
        ,
            # scene_id: null
            begin_position: -1
            end_position: 0
            prize_type: 0
            prize_value: ''
        ]
        release_time: moment().format('YYYY-MM-DD HH:mm:ss')
        # * @apiName 创建一个scene
        # * @apiParam {String} spotId 游戏id
        # * @apiParam {Number} origin_img 原图
        # * @apiParam {Number} game_img 游戏图
        # * @apiParam {String} title 场景标题
        # * @apiParam {String} href 场景图链接
        # * @apiParam {String} weixin_share_title 微信分享标题
        # * @apiParam {String} weixin_share_content 微信分享内容
        # * @apiParam {String} weibo_share_content 微博分享内容
        # * @apiParam {String} begin_at 开放时间
        # * @apiParam {String} end_at 结束时间
        # * @apiParam {Number} during_time 游戏时间
        # * @apiParam {Number} error_cut_time 错误扣减
        # * @apiParam {Number} additional_time 额外获得
        # * @apiParam {Boolean} is_publish 是否发布
        # * @apiParam {Array} items 找茬个数
        # * scene_id  场景ID
        # * x         x坐标
        # * y         y坐标
        # * width     宽度
        # * height    高度
        # * @apiParam {Array} prizes 奖品数
        # * 'scene_id'       => 'required', # 场景ID
        # * 'begin_position' => 'required', # 起始排名
        # * 'end_position'   => 'required', # 截止排名
        # * 'prize_type'     => 'required', # 奖项类型
        # * 'prize_value'    => 'required', # 奖项内容
        # * @apiParam {String} release_time 公布时间
    actions:
        reset: () ->
            data =
                list: null
                tab: 0
            data = Object.assign data, @getAction().defaultScenes()
            console.log 'test', data
            @setStore data
        defaultScenes: () ->

            id: null
            spotId: null
            origin_img: ''
            origin_img_url: ''
            game_img: ''
            game_img_url: ''
            title: ''
            href: ''
            weixin_share_title: ''
            weixin_share_content: ''
            weibo_share_content: ''
            begin_at: moment().format('YYYY-MM-DD HH:mm:ss')
            end_at: moment().format('YYYY-MM-DD HH:mm:ss')
            during_time: ''
            error_cut_time: ''
            additional_time: ''
            is_publish: 0
            items: []
            prizes: [
                # scene_id: null
                begin_position: ''
                end_position: ''
                prize_type: 0
                prize_value: ''
            ,
                # scene_id: null
                begin_position: -1
                end_position: 0
                prize_type: 0
                prize_value: ''
            ]
            release_time: moment().format('YYYY-MM-DD HH:mm:ss')


        resetPrizes: () ->
            store = @getStore()
            [
                # scene_id: store.id
                begin_position: ''
                end_position: ''
                prize_type: 0
                prize_value: ''
            ,
                # scene_id: store.id
                begin_position: -1
                end_position: 0
                prize_type: 0
                prize_value: ''
            ]

        defaultPrize: () ->
            store = @getStore()

            # scene_id: store.id
            begin_position: ''
            end_position: ''
            prize_type: 0
            prize_value: ''
        addPrize: () ->
            store = @getStore()
            prizes = store.prizes
            if prizes.length
                prizes.push @getAction().defaultPrize()
            else
                prizes = @getAction().resetPrize()
            @setStore store
        delPrize: (index) ->
            store = @getStore()
            prizes = store.prizes
            newPrizes = []
            if prizes.length
                prizes.map (item, i) =>
                    newPrizes.push item if i isnt index
            store.prizes = newPrizes
            @setStore store

        onChange: (data) ->
            store = @getStore()

            @setStore Object.assign store, data

        onSetStore: (data) ->
            @setStore data
        defaultItem: () ->
            store = @getStore()
            # scene_id: store.id
            x: 0
            y: 0
            width: 10
            height: 10

        setItems: (n) ->
            store = @getStore()
            A = @getAction()
            items = store.items
            length = items.length
            console.log items, n

            if n > length
                i = n - length + 1
                items.push A.defaultItem() while i -= 1
            else if n < length
                i = length - n + 1
                items.pop() while i -= 1
            console.log items, n
            @setStore
                items: items

        getSceneData:(data) ->
            data = data || @getStore()

            prizes = data.prizes
            if not prizes or not prizes.length
                prizes = @getAction().resetPrizes()
            ret =
                origin_img: data.origin_img
                origin_img_url:data.origin_img_url
                game_img: data.game_img
                game_img_url: data.game_img_url
                title: data.title
                href: data.href
                weixin_share_title: data.weixin_share_title
                weixin_share_content: data.weixin_share_content
                weibo_share_content: data.weibo_share_content
                begin_at: data.begin_at
                end_at: data.end_at
                during_time: data.during_time
                error_cut_time: data.error_cut_time
                additional_time: data.additional_time
                is_publish: data.is_publish
                items: data.items
                prizes: prizes
                release_time: data.release_time
            if data.id > 0
                ret.id = data.id
            else
                ret.id = null

            ret

        onChangeTab: (data) ->
            store = @getStore()
            oldTab = store.tab
            store.list[oldTab] = @getAction().getSceneData()
            scene = @getAction().getSceneData store.list[data.tab]
            @setStore Object.assign scene, data



        addScenes: () ->
            store = @getStore()
            tab = store.tab
            list = store.list || []
            if list.length
                list[tab] = @getAction().getSceneData()
            list.push @getAction().defaultScenes()
            store.list = list
            store.tab = list.length - 1

            store = Object.assign store, @getAction().defaultScenes()

            @setStore store

        getScenesList: (data) ->
            spotId = liteFlux.store(spotsStoreName).getStore().id
            if not spotId
                return no
            if data and data.spotId
                spotId = data.spotId
            param = data || {}
            console.log spotId, param
            webapi.spots.getScenesList(spotId, param).then (res) =>
                console.log res
                if res.code is 0
                    if res.data.data and res.data.data.length
                        scene = @getAction().getSceneData res.data.data[0]
                    else
                        scene = @getAction().defaultScenes()
                    # @setStore
                    #     list: res.data
                    #     tab: 0
                    @setStore Object.assign scene, {tab: 0, list: res.data.data}
                else
                    Sp.message res.msg, 'error'

        getScenes: (id) ->
            spotId = liteFlux.store(spotsStoreName).getStore().id
            if not spotId
                return no
            webapi.spots.getScenes(spotId, id).then (res) =>
                console.log res
                if res.code is 0
                    @setStore res.data
                else
                    Sp.message res.msg, 'error'
        createScenes: (data) ->
            spotId = liteFlux.store(spotsStoreName).getStore().id
            if not spotId
                return no
            store = @getStore()
            param = data || @getAction().getSceneData()
            if not (param.id > 0)
                delete param.id

            # 设置默认信息
            param = @getAction().setDefaultShareInfo param

            if not @getAction().scenesValid param
                Sp.message '输入信息有误!'
                return no
            webapi.spots.createScenes(spotId, param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '创建成功!'
                    @setStore res.data
                else
                    Sp.message.error res.msg

        updateScenes: () ->
            spotId = liteFlux.store(spotsStoreName).getStore().id
            if not spotId
                return no
            store = @getStore()
            param = @getAction().getSceneData()
            # 设置默认信息
            param = @getAction().setDefaultShareInfo param
            if not @getAction().scenesValid param
                Sp.message.error '输入信息有误!'
                return no
            webapi.spots.updateScenes(spotId, store.id, param).then (res) =>
                console.log res
                if res.code is 0
                    Sp.message '更新成功!'
                    @setStore res.data
                else
                    Sp.message.error res.msg

        scenesValid: (data) ->
            ret = yes
            if not moment(data.begin_at).isBefore(data.end_at)
                Sp.message.error '场景开放 开始时间 必须早于 结束时间'
                ret = no

            if not moment(data.end_at).isBefore(data.release_time)
                Sp.message.error '排名奖发放/公布时间 必须晚于 场景开放 结束时间'
                ret = no

            if data.prizes and data.prizes.length
                data.prizes.map (item, i) =>
                    if not (item.prize_value and item.prize_value >= 0)
                        Sp.message.error '奖品 不能为空'
                        ret = no
                    if not (item.prize_img and item.prize_img >= 0)
                        Sp.message.error '奖品图片 不能为空'
                        ret = no


                    if item.begin_position is -1
                        if not (item.end_position >= 0)
                            Sp.message.error '参与奖 数量 不能为空 且 必须大于等于0'
                            ret = no
                    else
                        if not (item.begin_position and item.begin_position > 0)
                            Sp.message.error '名次 不能为空 且 必须大于0'
                            ret = no
                        if not (item.end_position and item.end_position > 0)
                            Sp.message.error '名次 不能为空 且 必须大于0'
                            ret = no





            ret

        setDefaultShareInfo: (data) ->
            if not data.weixin_share_title or not (data.weixin_share_title.length > 0)
                data.weixin_share_title = '我在斯品家居玩找茬，参与即有奖，一起来玩吧。'

            if not data.weixin_share_content or not (data.weixin_share_content.length > 0)
                data.weixin_share_content = '我在@斯品家居玩找茬，还差一点点就能赢到奖品啦，一起来玩吧。'

            if not data.weibo_share_content or not (data.weibo_share_content.length > 0)
                data.weibo_share_content = '玩找茬赢大奖，斯品11月，游戏大奖，折扣秒杀，更多福利，斯品不止是双十一'

            data

        deleteScenes: (id, i) ->
            spotId = liteFlux.store(spotsStoreName).getStore().id
            if not spotId
                return no
            store = @getStore()
            list = store.list
            if id > 0
                webapi.spots.removeScenes(spotId, id).then (res) =>
                    console.log res
                    if res.code is 0
                        Sp.message '删除成功!', 'success'
                        newList = []
                        list.map (item, i) =>
                            if item.id isnt id
                                newList.push item
                        if newList.length
                            scene = @getAction().getSceneData newList[0]
                        else
                            scene = @getAction().defaultScenes()
                        @setStore Object.assign scene, {tab: 0, list: newList}

                    else
                        Sp.message res.msg, 'error'
            else
                list.splice i, 1

                if list.length
                    scene = @getAction().getSceneData list[0]
                else
                    scene = @getAction().defaultScenes()
                @setStore Object.assign scene, {tab: 0, list: list}

# * @apiName 创建一个scene
# * @apiParam {String} spotId 游戏id
# * @apiParam {Number} origin_img 原图
# * @apiParam {Number} game_img 游戏图
# * @apiParam {String} title 场景标题
# * @apiParam {String} href 场景图链接
# * @apiParam {String} weixin_share_title 微信分享标题
# * @apiParam {String} weixin_share_content 微信分享内容
# * @apiParam {String} weibo_share_content 微博分享内容
# * @apiParam {String} begin_at 开放时间
# * @apiParam {String} end_at 结束时间
# * @apiParam {Number} during_time 游戏时间
# * @apiParam {Number} error_cut_time 错误扣减
# * @apiParam {Number} additional_time 额外获得
# * @apiParam {Boolean} is_publish 是否发布
# * @apiParam {String} items 找茬个数
# * @apiParam {Array} prizes 奖品数
# * 'scene_id'       => 'required', # 场景ID
# * 'begin_position' => 'required', # 起始排名
# * 'end_position'   => 'required', # 截止排名
# * 'prize_type'     => 'required', # 奖项类型
# * 'prize_value'    => 'required', # 奖项内容
# * @apiParam {String} release_time 公布时间
Validator = liteFlux.validator
validatorData = Validator store,{
    'origin_img':
        required: true
        message:
            required: "原图 不能为空"
    'game_img':
        required: true
        message:
            required: "游戏图 不能为空"
    'title':
        required: true
        message:
            required: "场景标题 不能为空"
    'href':
        required: true
        message:
            required: "场景图链接 不能为空"
    'weixin_share_title':
        maxLength: 40
        message:
            required: "微信分享 标题 必须是40个字以内"
    'weixin_share_content':
        maxLength: 40
        message:
            required: "微信分享 描述 必须是40个字以内"
    'weibo_share_content':
        maxLength: 129
        message:
            required: "微博分享 描述 必须是40个字以内"
    'during_time':
        required: true
        message:
            required: "游戏时间 不能为空"
    'error_cut_time':
        required: true
        message:
            required: "错误扣减时间 不能为空"
    'additional_time':
        required: true
        message:
            required: "额外获得时间 不能为空"
    'items':
        minLength: 1
        message:
            minLength: "找茬个数必须大于0"
},{
    #oneError: true
}


# validatorData.rule('max', function(val) {
#     return val <= max;
# });
# validatorData.rule('min', function(val) {
#     return val >= min;
# });

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
