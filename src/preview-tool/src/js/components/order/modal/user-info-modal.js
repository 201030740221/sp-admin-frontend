import { Select } from 'antd';
const Option = Select.Option;

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
var PlaceSelector = require('modules/place-selector/place-selector');
import Event from 'lite-flux/lib/event';

var Selector = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    let record = this.props.record;
    let delivery = record.delivery || {};
    let member_address = delivery.member_address || {};
    return {
      record: record,
      place: {
        region:[],
        province:{
          id: member_address.province_id,
          name: member_address.province_name
        },
        city:{
          id: member_address.city_id,
          name: member_address.city_name
        },
        district:{
          id: member_address.district_id,
          name: member_address.district_name
        }
      }
    };
  },
  componentDidMount: function () {
    let self = this;
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      let record = nextProps.record;
      let delivery = record.delivery || {};
      let member_address = delivery.member_address || {};
      this.setState({
        record: nextProps.record,
        place: {
          region:[],
          province:{
            id: member_address.province_id,
            name: member_address.province_name
          },
          city:{
            id: member_address.city_id,
            name: member_address.city_name
          },
          district:{
            id: member_address.district_id,
            name: member_address.district_name
          }
        }
      });
    }
  },
    // 地区
  onChangePlace: function (res) {
    var state = this.state;
    state.place = res;
    this.setState(state);
  },
  render: function () {

    let self = this;
    let record = this.state.record;
    let delivery = record.delivery || {};
    let member_address = delivery.member_address || {};
    let member = record.member || {};

    let data = [{
      formData: [{
        type: 'input',
        title: '收货人名称',
        key: 'consignee',
        defaultValue: member_address.consignee,
        placeholder: '请输入收货人名称',
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      }, {
        type: 'input',
        title: '手机号',
        key: 'mobile',
        defaultValue: member_address.mobile,
        placeholder: '请输入手机号',
        tips: '',
        validator: {
          required: true,
          message: {
            required: '必填'
          }
        }
      }, {
        type: 'input',
        title: '备用手机号',
        key: 'second_mobile',
        defaultValue: member_address.second_mobile,
        placeholder: '请输入备用手机号',
        tips: ''
      }, {
        title: '地区',
        key: 'region',
        render: function () {
            let _place = self.state.place;
            let placeValue = [];

            if (_place.province) {
                placeValue = [_place.province.id + '', _place.city.id + '', _place.district.id + ''];
              }

            return (
                        <PlaceSelector
                            defaultValue={placeValue}
                            onChange={self.onChangePlace}  />
                    );
          }

      }, {
          type: 'input',
          title: '详细地址',
          key: 'address',
          defaultValue: member_address.address,
          placeholder: '请输入详细地址',
          tips: '',
          validator: {
              required: true,
              message: {
                  required: '必填'
                }
            }
        }, {
            type: 'input',
            title: '邮箱',
            key: 'email',
            defaultValue: member_address.email,
            placeholder: '请输入邮箱',
            tips: ''
          }]
    }];

    let actionButtons = [{
      title: ' 确 定 ',
      onClick: function (validator) {
        validator(function (isValid, validData) {
          if (isValid) {


            let postData = {};
            for (var key in validData) {
              postData = $.extend(postData, validData[key]);
            }



            let record = self.state.record;
            let delivery = record.delivery || {};
            let member_address = delivery.member_address || {};

            let region = postData.region || {};
            let data2 = null;

            if (region.province) {
              region.province = region.province || {};
              region.city = region.city || {};
              region.district = region.district || {};
              data2 = {
                  id: delivery.member_address_id,
                  member_id: record.member_id,
                  province_id: region.province.id,
                  province_name: region.province.name,
                  city_id: region.city.id,
                  city_name: region.city.name,
                  district_id: region.district.id,
                  district_name: region.district.name,
                  address: postData.address,
                  consignee: postData.consignee,
                  email: postData.email,
                  mobile: postData.mobile,
                  second_mobile: postData.second_mobile
                };
            }else {
              data2 = {
                  id: delivery.member_address_id,
                  member_id: record.member_id,
                  province_id: member_address.province_id,
                  province_name: member_address.province_name,
                  city_id: member_address.city_id,
                  city_name: member_address.city_name,
                  district_id: member_address.district_id,
                  district_name: member_address.district_name,
                  address: postData.address,
                  consignee: postData.consignee,
                  email: postData.email,
                  mobile: postData.mobile,
                  second_mobile: postData.second_mobile
                };
            }

            webapi.order.updateAddress(data2).then(function (_res_data) {
              if (_res_data && !_res_data.code) {
                  SP.message.success('更新成功');

                  let _this_data = {
                      member_address_id: _res_data.data.id,
                      order_id: record.id,
                      member_id: _res_data.data.member_id
                    };
                  webapi.order.updateDelivery(record.id, _this_data).then(function (_res) {
                      if (_res && !_res.code) {
                          self.props.setModalVisible(false);
                          self.context.router.push('/order/edit/' + record.id + '/invoiceId/see');
                        }
                    });

                }else {

                  let email_err = _res_data.data.errors.email;
                  let mobile_err = _res_data.data.errors.mobile;
                  if (email_err) {
                      SP.message.error(email_err);
                    }
                  if (mobile_err) {
                      SP.message.error(mobile_err);
                    }
                }
            });

          }
        });
      }
    }];

    let modalProps = {
      title: '用户信息',
      component: <BaseForm
                isNew = {true}
                data = {data}
                actionButtons={actionButtons}
                />,
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps} />;
  }
});

module.exports = Selector;
