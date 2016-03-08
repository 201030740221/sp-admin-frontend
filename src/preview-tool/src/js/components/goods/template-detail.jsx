'use strict';

import {
  Table,
  Popconfirm
} from 'antd';
import GoodsUploadModal from './goods-upload-modal';

/* 商品模板 */
const GoodsTemplate = React.createClass({
  getInitialState: function () {
    return {data: {}};
  },
  componentDidMount: function () {

    let self = this;
    let id = this.props.params.id;

    if (id === 'default') {
      webapi.goods.getGoodsTemplate(1, {}).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取默认模板成功');
          let strJson = res.data.data;
          let obj = eval('(' + strJson + ')');
          self.setState({data: obj});
        } else {
          SP.message.error(res.msg);
        }
      });
    } else {
      webapi.goods.getGoodsDetail(id, {}).then(function (res) {
        if (res && !res.code) {
          SP.message.success('获取数据成功');
          let strJson = res.data.detail_data;
          let obj = eval('(' + strJson + ')');
          self.setState({data: obj});
        } else {
          SP.message.error(res.msg);
        }
      });
    }

  },
  componentDidUpdate: function () {},

  componentWillReceiveProps: function (nextProps) {},

  /*input 或 textarea change*/
  changHandle: function (this_key, e) {
    let val = e.target.value,
      index = e.target.id;
    let data = this.state.data;

    if (index === 'title' || index === 'description') {
      data[index].value = val;
    } else {

      var index_str = index.split('-'),
        f_key = index_str[0],
        s_key = index_str[1];
      var value_arr = data[f_key].value;

      value_arr.forEach(function (item, key) {
        if (this_key === key) {
          item[s_key] = val;
        }
      });

    }

    this.setState({data: data});

  },
  /*click handle*/
  clickHandle: function (which, type, this_key) {

    var data = this.state.data;
    data.info = data.info || {};
    var info = data.info.value || [];

    data.extend = data.extend || {};
    var extend = data.extend.value || [];

    switch (which) {
      case 'info':
        if (type === 'delete') {
          info.splice(this_key, 1);
          data.info.value = info;
        }
        if (type === 'add') {
          info.push({title: '', content: ''});
          data.info.value = info;
        }
        break;
      case 'extend':
        if (type === 'delete') {
          extend.splice(this_key, 1);
          data.extend.value = extend;
        }
        if (type === 'add') {
          extend.push({title: '', content: ''});
          data.extend.value = extend;
        }
        break;
    }

    this.setState({data: data});

  },

  titleAndDecNode: function () {

    let data = this.state.data;
    let description = data.description || {};
    let title = data.title || {};
    let self = this;

    return (
      <div>
        <h3>模板详情</h3>
        <h4 className="ant-form-item">
          <label htmlFor="title" className="col-2" required={true}>标题：</label>
          <div className="col-14">
            <textarea
              className="ant-input"
              id="title"
              placeholder=""
              value={title.value}
              onChange={self.changHandle.bind(null, null)}></textarea>
          </div>
        </h4>
        <h4 className="ant-form-item">
          <label htmlFor="dec" className="col-2" required={true}>描述：</label>
          <div className="col-14">
            <textarea
              className="ant-input"
              id="description"
              placeholder=""
              value={description.value}
              onChange={self.changHandle.bind(null, null)}></textarea>
          </div>
        </h4>
      </div>
    );
  },

  /*信息*/
  baseInfoNode: function () {

    let self = this;

    var columns = [
      {
        title: '标题',
        dataIndex: 'title',
        render: function (text, record, index) {
          return (<input
            type="text"
            className="ant-input"
            id="info-title"
            placeholder=""
            value={record.title}
            onChange={self.changHandle.bind(null, index)}/>);
        }
      }, {
        title: '内容',
        dataIndex: 'content',
        render: function (text, record, index) {
          return (
            <textarea
              className="ant-input"
              id="info-content"
              placeholder=""
              value={record.content}
              onChange={self.changHandle.bind(null, index)}></textarea>
          );
        }
      }, {
        title: '操作',
        dataIndex: null,
        render: function (text, record, index) {
          return (
            <Popconfirm title="确定要删除这个项目吗？" onConfirm={self.clickHandle.bind(null, 'info', 'delete', index)}>
              <a href="javascript:;">删除</a>
            </Popconfirm>
          );

        }
      }
    ];
    let rowKey = function (record, index) {
      return index;
    };

    let data = this.state.data;
    data.info = data.info || {};
    let info = data.info.value || [];

    return (
      <div>
        <h4 className="ant-form-item">
          <label htmlFor="dec" className="col-2">基本信息：</label>
        </h4>
        <div className="ant-form-item">
          <label htmlFor="dec" className="col-2"></label>
          <div className="col-14">
            <Table pagination={false} columns={columns} dataSource={info} rowKey={rowKey}/>
            <div className="add-item-btn u-mt-15">
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-lg"
                onClick={this.clickHandle.bind(null, 'info', 'add', null)}>自定义</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  /*扩展项*/
  extendedInfoNode: function () {

    let self = this;

    var columns = [
      {
        title: '标题',
        dataIndex: 'title',
        render: function (text, record, index) {
          return (<input
            type="text"
            className="ant-input"
            id="extend-title"
            placeholder=""
            value={record.title}
            onChange={self.changHandle.bind(null, index)}/>);
        }
      }, {
        title: '内容',
        dataIndex: 'content',
        render: function (text, record, index) {
          return (
            <textarea
              className="ant-input"
              id="extend-content"
              placeholder=""
              value={record.content}
              onChange={self.changHandle.bind(null, index)}></textarea>
          );
        }
      }, {
        title: '操作',
        dataIndex: null,
        render: function (text, record, index) {
          return (
            <Popconfirm title="确定要删除这个项目吗？" onConfirm={self.clickHandle.bind(null, 'extend', 'delete', index)}>
              <a href="javascript:;">删除</a>
            </Popconfirm>
          );
        }
      }
    ];

    let rowKey = function (record, index) {
      return index;
    };

    let data = this.state.data;
    data.extend = data.extend || {};
    let extend = data.extend.value || [];

    return (
      <div>
        <h4 className="ant-form-item">
          <label htmlFor="dec" className="col-2">扩展项：</label>
        </h4>
        <div className="ant-form-item">
          <label htmlFor="dec" className="col-2"></label>
          <div className="col-14">
            <Table pagination={false} columns={columns} dataSource={extend} rowKey={rowKey}/>
            <div className="add-item-btn u-mt-15">
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-lg"
                onClick={this.clickHandle.bind(null, 'extend', 'add', null)}>自定义</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  successHandle: function (type, data) {

    let dataSource = this.state.data;
    dataSource.main_picture = dataSource.main_picture || {};
    dataSource.detail_picture = dataSource.detail_picture || {};

    switch (type) {
      case 'mainPicture':
        dataSource.main_picture.value = data;
        break;

      case 'detailPicture':
        dataSource.detail_picture.value = data;
        break;
    }
    this.setState({data: dataSource});
  },
  PictureInfoNode: function () {
    let params = {
      entity: 'goods_sku',
      entity_id: this.props.params.sku_id,
      type_id: 0
    };

    let data = this.state.data;
    data.main_picture = data.main_picture || {};
    let main_picture_arr = data.main_picture.value || [];
    let mainPictureData = main_picture_arr;

    let mainImgNode = null;
    let detailImgNode = null;

    if (main_picture_arr.length <= 0) {
      mainImgNode = (
        <p>添加图片</p>
      );
    } else {
      mainImgNode = main_picture_arr.map(function (item, key) {
        return <img key={key} width="100" style={{
          marginRight: 10
        }} src={item.url}/>;
      });
    }

    data.detail_picture = data.detail_picture || {};
    let detail_picture_arr = data.detail_picture.value || [];
    let detailPictureData = detail_picture_arr;

    if (detail_picture_arr.length <= 0) {
      detailImgNode = (
        <p>添加图片</p>
      );
    } else {
      detailImgNode = detail_picture_arr.map(function (item, key) {
        return <img key={key} width="100" style={{
          marginRight: 10
        }} src={item.url}/>;
      });
    }

    return (
      <div>
        <h4 className="ant-form-item">
          <label htmlFor="main" className="col-2">主图：</label>
        </h4>
        <div className="ant-form-item">
          <label htmlFor="dec" className="col-2"></label>
          <div className="col-14">
            <GoodsUploadModal
              pictureData={mainPictureData}
              pictureLength={1}
              params={params}
              successCallBack={this.successHandle.bind(null, 'mainPicture')}
              isDetailPicture={true}>
              {mainImgNode}
            </GoodsUploadModal>
          </div>
        </div>
        <h4 className="ant-form-item">
          <label htmlFor="detail" className="col-2">详情图：</label>
        </h4>
        <div className="ant-form-item">
          <label htmlFor="dec" className="col-2"></label>
          <div className="col-14">
            <GoodsUploadModal
              pictureData={detailPictureData}
              pictureLength={99}
              params={params}
              successCallBack={this.successHandle.bind(null, 'detailPicture')}
              isDetailPicture={true}>
              {detailImgNode}
            </GoodsUploadModal>
          </div>
        </div>
      </div>
    );
  },

  previewInfoNode: function () {

    let data = this.state.data;
    data.main_picture = data.main_picture || {};
    data.detail_picture = data.detail_picture || {};

    let main_picture_arr = data.main_picture.value || [];
    let detail_picture_arr = data.detail_picture.value || [];

    let description = data.description || {};
    let title = data.title || {};

    data.info = data.info || {};
    let info = data.info.value || [];

    data.extend = data.extend || {};
    let extend = data.extend.value || [];

    return (
      <div>
        <h4 className="ant-form-item">
          <label htmlFor="preview" className="col-2">预览：</label>
        </h4>
        <div className="ant-form-item">
          <label htmlFor="dec" className="col-2"></label>
          <div className="col-14">
            <div className="row">
              <div className="col-16">
                {main_picture_arr.map(function (item, key) {
                  return (<img src={item.url} alt="" width="100%" key={key}/>);
                })
}
              </div>
              <div className="col-8" style={{
                paddingLeft: '20'
              }}>
                <h3>{title.value}</h3>
                <p className="u-mt-15">{description.value}</p>
                <p className="u-mt-15">商品信息 | Information</p>
                {info.map(function (item, key) {
                  return (
                    <p key={key}>{item.title}：
                      {item.content}</p>
                  );
                })
}
              </div>
            </div>
            <div className="row u-mt-10">
              {extend.map(function (item, key) {
                return (
                  <div className="col-8" key={key}>
                    <h4>{item.title}</h4>
                    <p style={{
                      paddingRight: '10',
                      marginTop: '5'
                    }}>{item.content}</p>
                  </div>
                );
              })
}
            </div>
            <div className="row u-mt-20">
              {detail_picture_arr.map(function (item, key) {
                return (<img src={item.url} alt="" width="100%" key={key}/>);
              })
}
            </div>
          </div>
        </div>
      </div>
    );
  },

  /*footer btn*/
  return: function () {
    history.go(-1);
  },
  save: function () {

    var self = this;
    let data = this.state.data;
    var data_str = JSON.stringify(data);

    let sku_id = this.props.params.sku_id;
    let request_data = {
      sku_id: sku_id,
      detail: {
        detail_data: data_str,
        template_id: 1,
        mobile_template_id: 2
      }
    };

    webapi.goods.updateGoodsTemplate(request_data).then(function (res) {
      if (res && !res.code) {
        SP.message.success('更新数据成功');
        setTimeout(self.return(), 5000);
      } else {
        SP.message.error(res.msg);
      }
    });
  },
  footerBtnNode: function () {
    return (
      <div className="ant-modal-footer">
        <button type="button" className="ant-btn ant-btn-lg" onClick={this.return}>取 消</button>
        <button type="button" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.save}>保 存</button>
      </div>
    );
  },

  render: function () {
    return (
      <div className="ant-form-horizontal">

        {this.titleAndDecNode()}
        {this.baseInfoNode()}
        {this.extendedInfoNode()}
        {this.PictureInfoNode()}
        {this.previewInfoNode()}
        {this.footerBtnNode()}

      </div>
    );
  }
});

module.exports = GoodsTemplate;
