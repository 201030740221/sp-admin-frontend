var constants = require("../constants/orderDetailConstants.jsx");
var Api = require("../api/api.jsx");
var Sp = require("../../widgets/Sp.jsx");

var orderApi = {
    order: Sp.config.host+'/api/order/order/',
    express: Sp.config.host+'/api/order/express',
    delivery: Sp.config.host+'/api/order/delivery/',
    StatusLog: Sp.config.host+'/api/order/statusLog/',
    getLogTags: Sp.config.host+'/api/order/statusLogNote'
};

var action = {};
action.orderDetailActions = {
    // 获取最新订单详情
    onGetOrderDetail: function (callback) {
        var self = this;
        $.ajax({
            url: orderApi.order + self.flux.stores.orderDetailStore.id,
            method:"GET",
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.GET_ORDER_DETAIL, {data: res.data});
                    Sp.message('拉取订单最新详情成功');
                    if(callback) callback(res.data);
                }else{
                    Sp.message('拉取订单最新详情失败','error');
                    if(callback) callback(false);
                }
            }
        });
    },
    // 更新物流订单
    onUpdateExpress: function(id,num,express_id,is_new){
        var self = this;

        if(is_new){
            $.ajax({
                url: orderApi.express,
                method: "POST",
                data:{
                    "order_id":self.flux.stores.orderDetailStore.id,
                    "partner_id": id,
                    "express_no": num
                },
                success: function(res){
                    if(res && res.code ===0){
                        // 更新最新的订单详情
                        self.flux.actions.orderDetailActions.onGetOrderDetail();
                        Sp.message('新增订单物流成功');
                    }else{
                        Sp.message('新增订单物流失败','error');
                    }
                }
            });
        }else{
            $.ajax({
                url: orderApi.express + '/' + express_id,
                method: "PUT",
                data:{
                    "order_id":self.flux.stores.orderDetailStore.id,
                    "partner_id": id,
                    "express_no": num
                },
                success: function(res){
                    if(res && res.code ===0){
                        self.dispatch(constants.GET_EXPRESS, res.data );
                        Sp.message('更新订单物流成功');
                        /*拉取最新订单信息*/
                        self.flux.actions.orderDetailActions.onGetOrderDetail();
                    }else{
                        Sp.message('更新订单物流失败','error');
                    }
                }
            });
        }


    },
    // 更新订单ID
    onUpdateOrderId: function(id){
        this.dispatch(constants.GET_ORDER_ID,id);
    },
    // 更新状态ID
    onUpdateStatusId: function(val){
        var self = this;
        $.ajax({
            url: orderApi.order + self.flux.stores.orderDetailStore.id,
            method:"PUT",
            data:{
                "member_id": self.flux.stores.orderDetailStore.detail.member_id,
                "status_id": val
            },
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.TOGGLE_STATUS,val);
                    Sp.message('更新订单状态成功');
                }else{
                    Sp.message('更新订单状态失败','error');
                }
            }
        });
    },
    // 添加建议
    onAddAdvice: function (id,val) {
        this.dispatch(constants.ADD_ADVICE,id,val);
    },
    // 更新送装时间
    onUpdateDelivery: function( member_address_id, delivery, installation){
        var self = this;
        $.ajax({
            url: orderApi.delivery+self.flux.stores.orderDetailStore.detail.delivery_id,
            method:"PUT",
            data:{
                //"member_address_id": member_address_id,
                "reserve_delivery_time": delivery,
                "reserve_installation_time": installation
            },
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.UPDATE_DELIVERY,res.data);
                    Sp.message('更新送装时间成功');
                }else{
                    Sp.message*('更新送装时间失败','error');
                }
            }
        });
    },
    // 更新运费
    onEditDelivery: function(val){
        var self = this;
        $.ajax({
            url: orderApi.order + self.flux.stores.orderDetailStore.id,
            method:"PUT",
            data:{
                "delivery_abatement": val
            },
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.EDIT_DELIVERY,res.data);
                    Sp.message('更新运费成功');
                }else{
                    Sp.message('更新运费失败','error');
                }
            }
        });
    },
    // 更新安装费
    onEditInstallation: function(val){
        var self = this;
        $.ajax({
            url: orderApi.order + self.flux.stores.orderDetailStore.id,
            method:"PUT",
            data:{
                "installation_abatement": val
            },
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.EDIT_INSTALLATION,res.data);
                    Sp.message('更新安装费成功');
                }else{
                    Sp.message('更新安装费失败','error');
                }
            }
        });
    },
    // 获得订单状态标签列表
    onGetStateLogTags: function(){
        var self = this;
        $.ajax({
            url: orderApi.getLogTags,
            method:"GET",
            success: function(res){
                if(res && res.code ===0){
                    self.dispatch(constants.GET_LOG_TAGS,res.data);
                    Sp.message('获得订单状态标签列表成功');
                }else{
                    Sp.message('获得订单状态标签列表失败','error');
                }
            }
        });
    },
    /* 更新发票信息 */
    onUpdateInvoice: function(data,member_id){
        var self = this;
        var updateInvoiceData = {
            "id": data.id,
            "member_id": member_id,
            "type":data.type,
            "title_type":data.title_type,
            "content_type":data.content_type,
            "company_name": data.company_name,
            "invoice_tax_no":data.invoice_tax_no
        }
        if(data.id){ //已经开发票的情况，就直接更新发票信息
            $.ajax({
                url: Sp.config.host + '/api/member/updateInvoice',
                method: "POST",
                data: updateInvoiceData,
                success: function (res) {
                    console.log(res.data);
                    if(res && res.code==0 ) {
                        if(data.express.partner_id == undefined || data.express.partner_id == null){
                            data.express.partner_id = 2;
                        }
                        $.ajax({
                            url: Sp.config.host + '/api/member/updateInvoicePrint',
                            method: "POST",
                            data: {"id":data.id,"print":1},
                            success: function(res){
                                if (res && res.code==0 ) {

                                }
                            }
                        });
                        $.ajax({
                            url: Sp.config.host + '/api/member/createInvoiceExpress',
                            method: "POST",
                            data: {
                                "invoice_id": res.data.id,
                                "partner_id": data.express.partner_id=='undefined'?2:2,
                                "express_no": data.express.express_no=='undefined'?' ':data.express.express_no
                            },
                            success: function (res) {
                                if (res && res.code == 0) {
                                    self.dispatch(constants.UPDATE_INVOICE,res.data);
                                }
                            }
                        });
                        $.ajax({
                            url: orderApi.order + self.flux.stores.orderDetailStore.id,
                            data: {"invoice_id": res.data.id},
                            method: "PUT",
                            success: function (res) {
                                if (res && res.code == 0) {

                                    Sp.message('发票信息修改成功');
                                } else {
                                    Sp.message('发票信息修改失败', 'error');
                                }
                            }
                        });
                    }
                }
            });

        }
        if(data.id==0){ //没开发票的情况，就创建发票信息
            var re_data = {
                "order_id":self.flux.stores.orderDetailStore.id,
                "member_id": member_id,
                "type":data.type,
                "title_type":data.title_type,
                "content_type":data.content_type,
                "invoice_tax_no":data.invoice_tax_no,
                "company_name": data.company_name
            }
            $.ajax({
                url: Sp.config.host + '/api/member/createInvoice',
                method: "POST",
                data:re_data,
                success: function(res){
                    if(res && res.code ==0){
                        $.ajax({
                            url: Sp.config.host + '/api/member/createInvoiceExpress',
                            method: "POST",
                            data: {
                                "invoice_id": res.data.id,
                                "partner_id": data.express.partner_id=='undefined'?2:2,
                                "express_no": data.express.express_no=='undefined'?'':data.express.express_no
                            },
                            success: function(res){
                                if (res && res.code==0 ){
                                    console.log(res.data);
                                    self.dispatch(constants.UPDATE_INVOICE,res.data);
                                    Sp.message('发票信息创建成功');
                                }
                                else{
                                    Sp.message('发票信息创建失败','error');
                                }
                            }
                        });
                    }
                }
            });
        }

    },
    /* 更新物流地址 */
    onUpdateOrderAddress: function(delivery_id,data){
        var self = this;
        var postData = {
            id: data.addressId,
            member_id: data.memberId,
            province_id: data.place.province.id,
            province_name: data.place.province.name,
            city_id: data.place.city.id,
            city_name: data.place.city.name,
            address: data.address,
            consignee: data.consignee,
            email: data.email,
            mobile: data.mobile,
            second_mobile: data.second_mobile
        };

        if(data.place.district.id > 0){
            postData.district_id = data.place.district.id;
            postData.district_name = data.place.district.name;
        }

        $.ajax({
            url: Sp.config.host + '/api/member/updateAddress',
            method: "POST",
            data: postData,
            success: function(res){
                if (res && res.code===0 ){
                    $.ajax({
                        url: orderApi.delivery+delivery_id,
                        method:"PUT",
                        data:{
                            "member_address_id": res.data.id,
                            'order_id': self.flux.stores.orderDetailStore.id,
                            'member_id': data.memberId
                        },
                        success: function(res){
                            if(res && res.code ===0){
                                self.dispatch(constants.UPDATE_DELIVERY,res.data);
                                Sp.message('配送地址修改成功');
                            }else{
                                Sp.message('配送地址修改失败','error');
                            }
                        }
                    });
                    //console.log(res.data);
                }
            }
        });
    }
};

module.exports = action;
