var constants = require("../constants/customerServiceDetailConstants.jsx");
var Api = require("../api/api.jsx");
var Sp = require("../../widgets/Sp.jsx");

var action = {};
action.csDetailActions = {
    // 拉取售后申请最新详情
    onGetDetail: function () {
        var self = this;
        var state = this.flux.store("csDetailStore").getState();
        $.ajax({
            url: Sp.config.host + '/api/aftersales/aftersales/' + state.id,
            method:"GET",
            success: function(res){
                if(res && res.code ==0){
                    self.dispatch(constants.GET_DETAIL, {data: res.data});
                    Sp.message('拉取售后申请最新详情成功');
                }else{
                    Sp.message('拉取售后申请最新详情失败','error');
                }
            }
        });
    },
    // 更新申请单ID
    onUpdateId: function(id){
        this.dispatch(constants.UPDATE_ID,id);
    },
    // 更新预定时间
    onChangeBookTime: function(date){
        this.dispatch(constants.UPDATE_BOOKEDAT,date);
    },
    // 修改电话
    onChangeMobile: function(req){
        this.dispatch(constants.UPDATE_MOBILE,req);
    },
    // 修改联系人
    onChangeName: function(req){
        this.dispatch(constants.UPDATE_NAME,req);
    },
    // 修改联系人
    onChangeAddress: function(req){
        this.dispatch(constants.UPDATE_ADDRESS,req);
    },
    // 更改商品处理方式
    onChangeType: function(req){
        this.dispatch(constants.UPDATE_TYPE,req);
    },
    // 更改商品处理金额
    onChangeRefund: function(req){
        this.dispatch(constants.UPDATE_REFUND,req);
    },
    // 更新返回方式
    onChangeReturnMode: function(req){
        this.dispatch(constants.UPDATE_RETURNMODE,req);
    },
    onUpAfterSales: function(data){
        var self = this;
        var state = this.flux.store("csDetailStore").getState();
        $.ajax({
            url: Sp.config.host + '/api/aftersales/aftersales/' + state.id,
            method:"PUT",
            data: data,
            success: function(res){
                if(res && res.code ==0){
                    self.dispatch(constants.GET_DETAIL, {data: res.data});
                    Sp.message('修改售后信息成功');
                }else{
                    Sp.message('修改售后信息失败','error');
                }
            }
        });
    },
    /* 新建物流地址 */
    onCreateAddress: function(data,cb){
        var self = this;
        var postData = {
            member_id: data.memberId,
            province_id: data.place.province.id,
            province_name: data.place.province.name,
            city_id: data.place.city.id,
            city_name: data.place.city.name,
            address: data.address,
            consignee: data.consignee,
            email: data.email,
            mobile: data.mobile
        };

        if(data.second_mobile){
            postData.second_mobile = data.second_mobile;
        }

        if(data.place.district.id > 0){
            postData.district_id = data.place.district.id;
            postData.district_name = data.place.district.name;
        }

        $.ajax({
            url: Sp.config.host + '/api/member/createAddress',
            method: "POST",
            data: postData,
            success: function(res){
                if (res && res.code==0 ){
                    cb(res);
                }else{
                    Sp.message('创建换货订单失败','error');
                }
            }
        })
    },
    /* 新建换货订单 */
    onCreateAftersalesOrder: function(data){

        var self = this;
        var postData = {
            member_address_id: data.member_address_id,
            reserve_delivery_time: data.reserve_delivery_time,
            reserve_installation_time: data.reserve_installation_time,
            order_goods_id: data.order_goods_id,
            after_sales_id: data.after_sales_id,
            member_id: data.member_id,
            delivery_type_id: data.delivery_type_id,
            installation_type_id: data.installation_type_id,

            source: 1 // 1 pc端 2 移动端
        }

        $.ajax({
            url: Sp.config.host + '/api/aftersales/order',
            method: "POST",
            data: postData,
            success: function(res){
                if (res && res.code==0 ){
                    cb(res);
                }else{
                    Sp.message('创建换货订单失败','error');
                }
            }
        })

    }
};

module.exports = action;
