'use strict';

import {
  Alert,
  Switch,
  Modal,
  message
} from 'antd';
const confirm = Modal.confirm;
require('stores/banner-store');
require('stores/recommendation-store');
import AdSettingModal from 'modules/ad-setting-modal/ad-setting-modal';
import CategorySelector from 'modules/category-selector/category-selector';
import PreviewBtn from './preview-btn';
import TimerModal from './timer-modal';
import SortableMixin from 'modules/sortable/react-sortable-mixin';

const myComponent = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  mixins: [
    SortableMixin, liteFlux.mixins.storeMixin('ad-banner')
  ],
  sortableOptions: {
    ref: 'banners-list',
    model: 'ad-banner|data'
  },
  getInitialState() {
    return {
      mounted: false,
      visible: false,
      previewMode: this.props.query && this.props.query.preview !== 'true',
      disablePictureType: false,
      disableGoodsType: false
    };
  },
  getDefaultProps() {
    return {params: {}};
  },
  handleSort(evt) {
    A('ad-banner').sort(evt.newIndex, evt.oldIndex);
  },
  showModal(id) {
    var self = this;

    A('recommendation').getPosition(id, function (res) {
      if (res) {

        var data = S('recommendation').data;
        if (data && data.recommendation && data.recommendation.recommendation_id && data.recommendation.goods_sku_id) {
          var selected = {
            sku_id: data.recommendation.goods_sku_id,
            name: data.recommendation.name,
            attribute_name: data.recommendation.attribute_name,
            picture: data.recommendation.picture || data.recommendation.goods_picture
          };
          S('recommendation', {goods_selected: selected});
        } else {
          S('recommendation', {goods_selected: null});
        }

        var disablePictureType = false;
        var disableGoodsType = false;

        if (data.type_fix === 1) {
          disableGoodsType = true;
        } else if (data.type_fix === 2) {
          disablePictureType = true;
        }

        var tabNum = data.type === 2
          ? 2
          : (disablePictureType
            ? 2
            : 1);

        self.setState({visible: true, disablePictureType: disablePictureType, disableGoodsType: disableGoodsType});

        // 改变 TAB
        liteFlux.event.emit('change-banner-tab', tabNum);

      } else {
        message.error('请求数据失败，请检查后重试！');
      }
    });

  },
  setModalVisible(val) {

    this.setState({visible: val});

  },
  modalCallback() {

    this.setModalVisible(false);
  },
  onBack() {
    this.context.router.push('/');
  },
  getList(callback) {
    var params = this.props.params;
    var query = this.props.query;

    A('ad-banner').getFrame(params, query, this.state.previewMode, callback);
  },
  componentDidMount() {
    var self = this;
    this.getList(function () {
      if (self.props.query.id) {
        self.showModal(self.props.query.id);
      }
    });
    this.setState({mounted: true});
  },
  componentWillUnmount() {
    liteFlux.store('ad-banner').reset();
    this.setState({mounted: false});
  },
  changeStatus(id, ad_id, type, status) {
    var self = this;
    var data = {
      status: status,
      type: type
    };
    if (id === 0) {
      message.error('修改失败，请重试！');
      return;
    }
    if (type === 0) {
      message.error('请先指定展现类型！');
      return;
    }
    if (type === 1) {
      data.ad_id = ad_id;
    }
    if (type === 2) {
      data.recommendation_id = ad_id;
    }

    // 预览模式修改JSON
    A('ad-banner').updatePosition(id, data);
    if (status === 0) {
      message.success('推荐位已禁用！');
    } else {
      message.success('推荐位已启用！');
    }

  },
  // 保存预览
  onSavePreview(callback) {
    // 保存 JSON，并返回 iframe
    var self = this;
    var params = this.props.params;
    var json_data = {
      module: params.module,
      page: params.page,
      position: S('ad-banner').previewData
    };
    var data = {
      frame_json: JSON.stringify(json_data),
      page: params.page,
      module: params.module,
      // version: 1
    };

    if (params.page === 'goods-detail' && params.module === 'category') {
      data.module = 'similar-list';
    }

    if (this.props.query.category) {
      data.category = this.props.query.category;
    }

    webapi.frame.saveStashFrame(data).then(function (res) {
      if (res && res.code === 0) {

        if (callback && typeof callback === 'function') {
          callback();
        } else {
          if (params.page !== 'index' && params.page !== 'register') {
            message.success('保存成功，此模块目前不可以预览');
          } else if (params.page === 'register') {
            message.success('保存成功');
            A('app').refreshPreview();
            self.context.router.push('/frame/preview?url=/member/register');
          } else {
            message.success('保存成功');
            A('app').refreshPreview();
            self.context.router.push('/frame/preview');
          }

        }

      } else {
        message.error('保存失败');
      }
    });
  },
  // 保存发布
  onSavePublish() {
    var self = this;
    confirm({
      title: '您是否确认要发布到官网',
      content: '确认要发布到官网，推荐位将会立即生效',
      onOk: function () {
        // 保存数据，并返回 iframe
        self.onSavePreview(function () {
          var params = self.props.params;
          var json_data = {
            module: params.module,
            page: params.page,
            position: S('ad-banner').previewData
          };
          var data = {
            frame_json: JSON.stringify(json_data),
            page: params.page,
            module: params.module,
            version: 1
          };

          if (params.page === 'goods-detail' && params.module === 'category') {
            data.module = 'similar-list';
          }

          if (self.props.query.category) {
            data.category = self.props.query.category;
          }
          webapi.frame.publishStashFrame(data).then(function (res) {
            if (res && res.code === 0) {
              message.success('发布成功');
            } else {
              mssage.error('发布失败');
            }
          });
        });

      },
      onCancel: function () {}
    });

  },
  changeCategroy(cate) {
    var self = this;
    this.setState({
      mounted: false
    }, function () {
      self.context.router.push('/frame/module/' + this.props.params.page + '/' + this.props.params.module + '?category=' + cate.id);
      window.location.reload();
    });

  },
  render() {
    self = this;

    var messageTips = function () {
      var msg = '';
      var params = self.props.params;
      // banner 提示
      if (params.page === 'index' && params.module === 'banner') {
        msg = (
          <div>
            <p>1、轮播图建议最多添加8屏</p>
            <p>2、请确保图片尺寸为1600px × 517px，以免影响页面美观</p>
          </div>
        );
      }
      if (params.page === 'index' && params.module === 'category') {
        msg = (
          <div>
            <p>2-1-2规格，请确保处于中间的图片尺寸为760px × 380px</p>
            <p>2-2-2规格，请确保处于中间的图片尺寸为360px × 360px</p>
          </div>
        );
      }
      if (msg) {
        return (<Alert message="温馨提示:" description={msg} type="info"/>);
      }
    };

    var renderModel = function () {
      if (self.state.mounted) {
        return (<AdSettingModal
          data={{
            visible: self.state.visible,
            visibleCallback: self.setModalVisible,
            callback: self.modalCallback
          }}
          disableGoodsType={self.state.disableGoodsType}
          disablePictureType={self.state.disablePictureType}
          previewMode={self.state.previewMode || false}
          params={self.props.params}
          query={self.props.query}/>);
      }
    };

    var renderCategory = function () {
      if (self.props.query && self.props.query.category) {
        return (
          <div className="mb20 ml10 row">
            <div className="col-2">当前对应分类：</div>
            <div className="col-4"><CategorySelector onChange={self.changeCategroy} selected={parseInt(self.props.query.category)}/></div>
          </div>
        );
      }
    };

    var returnBtn = function () {
      var returnBack = function () {
        window.history.back();
      };
      return (
        <div className="fl">
          <button className="ant-btn ant-btn-primary" onClick={returnBack}>
            <span className="anticon anticon-left"></span>
            <span className="ml10">返回</span>
          </button>
        </div>

      );
    };

    return (
      <div>

        <div className="xpage">

          <div className="row mb20 u-mt-20 clearfix">
            {returnBtn()}
            <PreviewBtn/>
            {(this.state.previewMode) && (
              <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={self.onSavePreview}>保存预览</button>
            )}
            {(this.state.previewMode) && (
              <button className="ant-btn ant-btn-primary u-fr u-ml-10" onClick={self.onSavePublish}>发布官网</button>
            )}
          </div>

          {renderModel()}

          {renderCategory()}

          <div className="banners-list row" ref="banners-list">
            {this.state['ad-banner'].data.map(function (item, index) {
              var imgUrl = (
                <div className="banner-img-block"></div>
              );
              var adType = '未指定';
              var bannerTitle = '';

              if (item.type === 1) {
                if (item.ad) {
                  adType = item.ad.ad_type === 0
                    ? '广告类型'
                    : item.ad.ad_type === 1
                      ? '广告类型[文字]'
                      : '广告类型[图片]';
                  bannerTitle = item.ad.ad_title;
                }
                if (item.ad && item.ad.picture) {
                  imgUrl = (<img src={item.ad.picture}/>);
                }

              } else if (item.type === 2) {
                if (item.recommendation) {
                  bannerTitle = item.recommendation.recommendation_title;
                  adType = '商品类型';
                }
                if (item.recommendation && item.recommendation.picture) {
                  imgUrl = (<img src={item.recommendation.picture}/>);
                }

              }
              var ad_id = 0;
              if (item.type === 1) {
                ad_id = item.ad_id;
              }
              if (item.type === 2) {
                ad_id = item.recommendation_id;
              }
              var stateBtn = (<Switch
                checked={false}
                onChange={self.changeStatus.bind(null, item.id, ad_id, item.type, 1)}
                checkedChildren={<i className="anticon anticon-check"></i>}
                unCheckedChildren={<i className="anticon anticon-cross"></i>}/>);
              if (item.status) {

                stateBtn = (<Switch
                  checked={true}
                  onChange={self.changeStatus.bind(null, item.id, ad_id, item.type, 0)}
                  checkedChildren={<i className="anticon anticon-check"></i>}
                  unCheckedChildren={<i className="anticon anticon-cross"></i>}/>);
              }

              // 212或者222图片提示
              var indexTabPicTips = function () {
                return '';
                // if(index==2 && item.name === "2-1-2"){
                //     return '此图片应为760px × 380px'
                // }else if( (index==2 && item.name === "2-2-2") || (index==3 && item.name === "2-2-2") ){
                //     return '此图片应为360px × 360px'
                // }
              };

              return (
                <div className="banner-item col-6 active" key={index}>
                  <div className="inner-banner-item">
                    <div className="banner-flag">
                      {adType}
                    </div>
                    <div className="img-preview clearfix">
                      {imgUrl}
                    </div>
                    <div className="banner-item-title clearfix">
                      {bannerTitle}
                    </div>
                    <div className="pl5 pr5 mb10 mt10 clearfix">
                      <div className="fl">
                        <button className="ant-btn ant-btn-sm" onClick={self.showModal.bind(null, item.id)}>
                          <i className="anticon anticon-edit"></i>
                          编辑
                        </button>
                        <TimerModal id={item.id} schedule={item.schedule}/>
                        <span className="ml10">{indexTabPicTips()}</span>
                      </div>
                      <div className="fr">
                        {stateBtn}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
});

module.exports = myComponent;
