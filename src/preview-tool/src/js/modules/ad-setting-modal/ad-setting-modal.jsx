'use strict';

import {
  Modal,
  message,
  Tag,
  Tabs,
  Switch
} from 'antd';
const TabPane = Tabs.TabPane;
import GoodsSelectModal from 'modules/goods-select-box/goods-select-box';
import PictureUploader from 'modules/picture-uploader/picture-uploader';
import ArticlesSelector from 'modules/articles-selector-modal/index';

/**
 * 广告类型定义
 */
const TYPE_INIT = 0;
const TYPE_TEXT = 1;
const TYPE_PICTURE = 2;

const AdInfoModal = React.createClass({
  mixins: [
    liteFlux.mixins.storeMixin('recommendation'), liteFlux.mixins.linkedStoreMixin
  ],
  getInitialState: function () {
    return {loading: false, visible: false, render_goods_slect_box_box: false, tab: 1};
  },
  getDefaultProps() {
    return {
      disablePictureType: false, // 图片类型可用
      disableGoodsType: false // 商品类型可用
    };
  },
  componentDidMount: function () {
    let self = this;
    liteFlux.event.on('change-banner-tab', function (tabNum) {
      self.setState({tab: tabNum});
    });
  },
  componentWillUnmount: function () {
    liteFlux.event.off('change-banner-tab');
    liteFlux.store('recommendation').reset();
  },
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data);
  },
  getStatus() {
    let store = S('recommendation');
    return {type: store.data.type};
  },
  updatePreviewPosition(res) {
    var self = this;
    var store = S('recommendation');

    if (res && res.code === 0) {
      var data = {
        type: self.getStatus().type,
        status: store.data.status
      };

      if (res.data.ad_attachment_id) {
        data.ad_id = res.data.id || store.data.ad_id;
        data.type = this.getStatus().type || 1;
      } else if (res.data.goods_sku_id || res.data.goods_sku_id === 0) {
        data.recommendation_id = res.data.id || store.data.recommendation_id;
        data.type = this.getStatus().type || 2;
        if (res.data.recommendation_id === 0) {
          data.recommendation_id = 0;
          data.type = 0;
          data.status = 0;
        }
      }

      A('ad-banner').updatePosition(store.data.id, data);

      message.success('修改成功！');
      this.setState({loading: false});

      liteFlux.store('recommendation').reset();
      this.switchGoodsPicture();
      this.props.data.callback();
    } else if (res && res.code === 1) {
      self.setState({loading: false});
      message.error('修改失败，请重试！');
    } else if (res) {
      self.setState({loading: false});
      message.error(res.msg);
    }
  },
  // 提交推荐位数据
  handleOk() {
    var self = this;
    this.setState({loading: true});

    var store = S('recommendation');
    var AdStore = store.data.ad;
    var RecommendationStore = store.data.recommendation;

    if (this.state.tab === 1) { // 创建图片类型
      if (store.data.ad_id) {

        var ad_data = {};

        if ((AdStore.picture_remove || !AdStore.attachment_id) && AdStore.ad_type === TYPE_PICTURE) {
          message.error('广告类型的图片不能为空');
          self.setState({loading: false});
        } else if (AdStore.ad_type === TYPE_TEXT && !AdStore.ad_title) {
          message.error('文字广告标题不能为空！');
          self.setState({loading: false});
        } else {

          ad_data = {
            ad_url: AdStore.ad_url,
            ad_title: AdStore.ad_title,
            ad_description: AdStore.ad_description,
            ad_attachment_id: AdStore.attachment_id,
            ad_type: AdStore.ad_type,
            attachment: {
              id: AdStore.attachment_id,
              media_id: AdStore.picture_id,
              media: {
                id: AdStore.picture_id,
                full_path: AdStore.picture
              }
            }
          };

          A('ad-banner').updateAd(store.data.id, ad_data);
          self.updatePreviewPosition({code: 0, data: S('recommendation').data.ad});

        }

      } else {
        var add_ad_data = {};

        add_ad_data = {
          frame_name: S('ad-banner').moduleName,
          //ad_type: AdStore.ad_type || TYPE_INIT,
          ad_attachment_id: AdStore.attachment_id,
          ad_url: AdStore.ad_url,
          ad_title: AdStore.ad_title,
          ad_description: AdStore.ad_description
        };

        webapi.frame.getAdTypeFix({frame_name: S('ad-banner').moduleName}).then(function (type_res) {
          if (type_res && !type_res.code) {
            add_ad_data.ad_type = type_res.data;

            if ((AdStore.picture_remove || !add_ad_data.ad_attachment_id) && add_ad_data.ad_type === TYPE_PICTURE) {
              message.error('图片不能为空！');
              self.setState({loading: false});
              return false;
            }

            if (add_ad_data.ad_type === TYPE_TEXT && !add_ad_data.ad_title) {
              message.error('文字广告标题不能为空！');
              self.setState({loading: false});
              return false;
            }

            // 文字类型则去掉图片
            if (type_res.data === 1) {
              add_ad_data.ad_attachment_id = 0;
            }
            webapi.frame.addAd(add_ad_data).then(function (res) {
              if (res && res.code === 0) {
                A('ad-banner').updateAd(store.data.id, res.data);
                self.updatePreviewPosition(res);
              } else {
                self.setState({loading: false});
                message.error('创建失败，请重试！');
              }
            });
          } else {
            message.error(type_res.msg);
          }
        });

      }
    } else { // 创建商品类型

      var recommendation_data = {};
      recommendation_data = {
        recommendation_title: RecommendationStore.recommendation_title,
        recommendation_description: RecommendationStore.recommendation_description,
        goods_sku_id: RecommendationStore.goods_sku_id,
        attachment: {
          id: RecommendationStore.attachment_id,
          media_id: RecommendationStore.picture_id,
          media: {
            id: RecommendationStore.picture_id,
            full_path: RecommendationStore.picture
          }
        },
        goods_sku: {
          attribute_name: RecommendationStore.attribute_name,
          sku_sn: RecommendationStore.sku_sn,
          goods: {
            title: RecommendationStore.name
          },
          has_cover: {
            media_id: RecommendationStore.goods_picture_id,
            media: {
              full_path: RecommendationStore.goods_picture
            }
          }
        }
      };
      if (store.data.recommendation_id) {

        if (RecommendationStore.picture_id) {
          recommendation_data.recommendation_attachment_id = RecommendationStore.attachment_id;
          recommendation_data.attachment.media_id = RecommendationStore.picture_id;
        } else {
          recommendation_data.recommendation_attachment_id = 0;
          recommendation_data.attachment.media_id = 0;
        }
        A('ad-banner').updateRecommendation(store.data.id, recommendation_data);
        self.updatePreviewPosition({code: 0, data: S('recommendation').data.recommendation});

      } else {

        var add_recommendation_data = {
          recommendation_attachment_id: RecommendationStore.attachment_id || 0,
          goods_sku_id: RecommendationStore.goods_sku_id,
          recommendation_title: RecommendationStore.recommendation_title,
          recommendation_description: RecommendationStore.recommendation_description,
          type: 0
        };

        if (self.props.params.page === 'index' && self.props.params.module === 'sku-list') {
          add_recommendation_data.type = 3;
        }

        webapi.frame.addRecommendation(add_recommendation_data).then(function (res) {
          if (res && res.code === 0) {
            A('ad-banner').updateRecommendation(store.data.id, res.data);
            self.updatePreviewPosition(res);
          } else {
            self.setState({loading: false});
            message.error('创建失败，请重试！');
          }
        });

      }
    }
  },
  handleCancel() {
    this.setState({loading: false, visible: false, render_goods_slect_box: false, tab: 1});
    liteFlux.store('recommendation').reset();
    this.props.data.visibleCallback(false);
  },
  switchGoodsSelect(val) {
    this.setState({
      render_goods_slect_box: val || true
    });
  },
  switchGoodsPicture() {
    this.setState({render_goods_slect_box: false});
  },
  tabChange(key) {
    this.setState({tab: key});
  },
  selectGoodsSuccess(data) {
    var store = S('recommendation');
    store.goods_selected = data;
    store.data.recommendation.goods_sku_id = data.sku_id;
    store.data.recommendation.goods_picture = data.goods_picture;
    store.data.recommendation.goods_picture_id = data.picture_id;
    store.data.recommendation.attribute_name = data.attribute_name;
    store.data.recommendation.name = data.name;
    S('recommendation', store);
  },
  renderGoodSelect() {
    return <GoodsSelectModal
      goBack={this.switchGoodsPicture}
      selected={S('recommendation').goods_selected}
      success={this.selectGoodsSuccess}/>;
  },
  uploadSuccess(data) {
    var store = S('recommendation');
    if (this.state.tab === 1) {
      store.data.ad.picture = data.url;
      store.data.ad.attachment_id = data.id;
      store.data.ad.picture_id = data.media_id;
      store.data.ad.picture_remove = false;
    } else {
      store.data.recommendation.picture = data.url;
      store.data.recommendation.attachment_id = data.id;
      store.data.recommendation.picture_id = data.media_id;
      store.data.recommendation.picture_remove = false;
    }
    S('recommendation', store);
  },
  removePictureSuccess() {
    var store = S('recommendation');
    if (this.state.tab === 1) {
      store.data.ad.picture = '';
      store.data.ad.picture_id = null;
      store.data.ad.attachment_id = null;
      store.data.ad.picture_remove = true;
    } else {
      store.data.recommendation.picture = '';
      store.data.recommendation.picture_id = null;
      store.data.recommendation.attachment_id = null;
      store.data.recommendation.picture_remove = true;
    }

    S('recommendation', store);
  },
  renderUploadPannel() {
    var data = [];

    if (parseInt(this.state.tab) === 1 && this.state.recommendation.data && this.state.recommendation.data.ad && this.state.recommendation.data.ad.picture) {
      data.push({id: this.state.recommendation.data.ad.picture_id, url: this.state.recommendation.data.ad.picture});
    } else if (parseInt(this.state.tab) === 2 && this.state.recommendation.data && this.state.recommendation.data.recommendation && this.state.recommendation.data.recommendation.picture) {
      data.push({id: this.state.recommendation.data.recommendation.picture_id, url: this.state.recommendation.data.recommendation.picture});
    }

    return (<PictureUploader
      data={data}
      entity="ad"
      entityId="3"
      pictureLength="1"
      removeSuccess={this.removePictureSuccess}
      typeId="0"
      uploadSuccess={this.uploadSuccess}/>);
  },
  // 是否文字广告
  onChangeTextStatus(checked) {
    var store = S('recommendation');
    store.data.ad.ad_type = checked
      ? TYPE_TEXT
      : TYPE_PICTURE;
    S('recommendation', store);
  },
  // 修改图片类型状态
  onChangePictureStatus(checked) {
    var store = S('recommendation');
    store.data.ad.status = checked;

    if (store.data.recommendation.goods_sku_id) {
      store.data.recommendation.status = !checked;
      store.data.type = checked
        ? 1
        : 2;
    } else {
      store.data.type = 1;
      store.data.ad.status = true;
      message.error('当前没有商品类型，必须有一个类型可以显示');
    }
    S('recommendation', store);
  },
  // 修改图片类型状态
  onChangeGoodsStatus(checked) {
    var store = S('recommendation');
    if (store.data.recommendation.goods_sku_id) {
      store.data.ad.status = !checked;
      store.data.type = checked
        ? 2
        : 1;
      store.data.recommendation.status = checked;
    } else {
      message.error('请先选择商品');
      store.data.recommendation.status = false;
    }
    S('recommendation', store);
  },
  setArticleText(data) {
    var store = S('recommendation');
    let host = 'http://' + location.host.replace('admin', 'www');
    var url = host + '/article/' + data.id;

    store.data.ad = store.data.ad || {};
    store.data.ad.ad_title = data.title;
    store.data.ad.ad_url = url;
    S('recommendation', store);
  },
  renderPictureType() {

    var data = this.state.recommendation && this.state.recommendation.data;
    var status = false;
    // if (data && data.type === 1 && data.status === 1) {
    //     status = true;
    // }
    if (data && data.ad && data.ad.status) {
      status = data.ad.status;
    }

    var url = '';
    if (data && data.ad && data.ad.ad_url) {
      url = data.ad.ad_url;
    }

    return (
      <TabPane disabled={this.props.disablePictureType} key="1" tab="广告类型">

        <div
          className="uploadbox-form-horizontal"
          style={{
            overflowY: 'scroll',
            paddingBottom: 20
          }}>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">更换图片：</label>
            <div className="col-20">
              {this.renderUploadPannel()}
            </div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">链接：</label>
            <div className="col-12">
              <div><input
                className="ant-input"
                placeholder="请填写链接"
                type="text"
                valueLink={this.linkStore('recommendation', 'data.ad.ad_url')}/></div>
              <div><ArticlesSelector onChange={this.setArticleText} selected={null}/></div>
            </div>
            <div className="col-8">
              <a className="ant-btn u-ml-10" href={url} role="button" target="_blank">测试链接</a>
            </div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">标题：</label>
            <div className="col-12"><input
              className="ant-input"
              placeholder="请填写自定义标题"
              type="text"
              valueLink={this.linkStore('recommendation', 'data.ad.ad_title')}/></div>
            <div className="col-8"></div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">描述：</label>
            <div className="col-20"><input
              className="ant-input"
              placeholder="请填写自定义描述"
              type="text"
              valueLink={this.linkStore('recommendation', 'data.ad.ad_description')}/></div>
          </div>
          {data.ad && data.ad.type_fix === TYPE_INIT && (
            <div className="uploadbox-form-item row mt20">
              <label className="col-4">是否文字广告：</label>
              <div className="col-20">
                <Switch
                  checked={data.ad.ad_type === 1
                  ? true
                  : false}
                  checkedChildren="是"
                  className="mt5"
                  onChange={this.onChangeTextStatus}
                  unCheckedChildren="否"/>
              </div>
            </div>
          )}
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">启用广告类型：</label>
            <div className="col-20">
              <antd.Row>
                <antd.Col span="3">
                  <Switch
                    checked={status}
                    checkedChildren="开"
                    className="mt5"
                    onChange={this.onChangePictureStatus}
                    unCheckedChildren="关"/>
                </antd.Col>
                <antd.Col span="21" style={{
                  paddingTop: 10
                }}>
                  <span>
                    <i className="anticon anticon-exclamation-circle" style={{
                      color: '#f60'
                    }}></i>此处只决定显示的类型，推荐位的禁用启用请在列表操作。
                  </span>
                </antd.Col>
              </antd.Row>
            </div>
          </div>
        </div>

      </TabPane>
    );
  },
  onClearSelectGoods() {
    var store = S('recommendation');
    store.goods_selected = null;
    //store.data.recommendation.recommendation_id = 0;
    store.data.recommendation.goods_sku_id = 0;
    S('recommendation', store);
  },
  renderGoodsPictureUpload() {
    var self = this;

    var data = this.state.recommendation && this.state.recommendation.data;
    var status = false;

    if (data && data.recommendation && data.recommendation.status) {
      status = data.recommendation.status;
    }

    var sku_id = '';
    if (this.state.recommendation && this.state.recommendation.goods_selected && this.state.recommendation.goods_selected.sku_id) {
      var jump = function () {
        window.open('http://www.sipin.com/item/' + self.state.recommendation.data.recommendation.sku_sn + '.html');
      };
      sku_id = (
        <span className="ml20">已选择：
          <Tag onClick={jump} closable={true} color="yellow" onClose={self.onClearSelectGoods}>{this.state.recommendation.goods_selected.name + ' ：' + this.state.recommendation.goods_selected.attribute_name}</Tag>
        </span>
      );
    }

    return (
      <div className="goods-upload-picture" style={{
        overflowY: 'scroll',
        paddingBottom: 20
      }}>

        <div className="uploadbox-form-horizontal">
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">更换图片：</label>
            <div className="col-20">
              {this.renderUploadPannel()}
            </div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">商品：</label>
            <div className="col-20">
              <button className="ant-btn ant-btn-primary" onClick={this.switchGoodsSelect}>选择商品</button>
              {sku_id}
            </div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">标题：</label>
            <div className="col-12"><input
              className="ant-input"
              placeholder="请填写自定义标题"
              type="text"
              valueLink={this.linkStore('recommendation', 'data.recommendation.recommendation_title')}/></div>
            <div className="col-8"></div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">描述：</label>
            <div className="col-20"><input
              className="ant-input"
              placeholder="请填写自定义描述"
              type="text"
              valueLink={this.linkStore('recommendation', 'data.recommendation.recommendation_description')}/></div>
          </div>
          <div className="uploadbox-form-item row mt20">
            <label className="col-4">启用商品类型：</label>
            <div className="col-20">
              <Switch checked={status} checkedChildren="开" onChange={this.onChangeGoodsStatus} unCheckedChildren="关"/>
              <div className="ant-form-explain">
                <i className="anticon anticon-exclamation-circle" style={{
                  color: '#f60'
                }}></i>此处只决定显示的类型，推荐位的禁用启用请在列表操作。</div>
            </div>
          </div>
        </div>

      </div>
    );
  },
  renderGoodsType() {
    var content = this.renderGoodsPictureUpload();
    if (this.state.render_goods_slect_box) {
      content = this.renderGoodSelect();
    }
    return (
      <TabPane disabled={this.props.disableGoodsType} key="2" tab="商品类型">
        {content}
      </TabPane>
    );
  },
  render() {
    var footer = [< button key = "back" className = "ant-btn ant-btn-lg" onClick = {
        this.handleCancel
      } > 关 闭 < /button>, <button key="submit" className={'ant-btn ant-btn-primary ant-btn-lg ' + (this.state.loading ? 'ant-btn-loading':'')} onClick={this.handleOk}> 确 定 </button >];

    return (
      <Modal
        footer={footer}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        ref="ad-setting-modal"
        title="推荐位管理"
        visible={this.props.data.visible}
        width="900">
        <Tabs activeKey={this.state.tab + ''} defaultActiveKey={this.state.tab + ''} onChange={this.tabChange}>
          {this.renderPictureType()}
          {this.renderGoodsType()}
        </Tabs>
      </Modal>
    );
  }
});

module.exports = AdInfoModal;
