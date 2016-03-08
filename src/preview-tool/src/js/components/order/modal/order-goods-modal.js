import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
var Table = antd.Table;
import Event from 'lite-flux/lib/event';

const imageView = '?imageView2/2/w/80';
const frontHost = location.host.replace('admin', 'www');

var Selector = React.createClass({
  getInitialState: function () {
    return {
      source: this.props.record || {}
    };
  },
  componentDidMount: function () {

  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({
        source: nextProps.record
      });
    }
  },
  render: function () {

    let self = this;
    let source = this.state.source;

    var columns = [{
      title: '商品	SKU',
      dataIndex: '',
      render: function (text, record) {

        record.goods_sku = record.goods_sku || {};
        let good_name = record.goods_sku.goods || {};
        record.goods_sku.has_cover = record.goods_sku.has_cover || {};
        let img_url = record.goods_sku.has_cover.media || {};

        return (
                    <div className="row">
                        <div className="col-6"><img src={img_url.full_path + imageView} alt=""/></div>
                        <a className="col-6" target="_blank" href={'http://' + frontHost + '/item/' + record.goods_sku.sku_sn + '.html'}>{good_name.title}</a>
                        <span className="col-12">{record.goods_sku.name}</span>
                    </div>
                );
      }
    }, {
      title: '单价',
      dataIndex: '',
      render: function (text, record) {
        return (
                        <span>
                            {record.price}
                        </span>
                );
      }
    }, {
      title: '数量',
      dataIndex: '',
      render: function (text, record) {
        return (
                        <span>
                            {record.amount}
                        </span>
                );
      }
    }, {
      title: '小计',
      dataIndex: '',
      render: function (text, record) {
        return (<span>
                            ￥{record.amount * record.price}
                        </span>);
      }
    }];

    let rowKey = function (record, index) {
      return index;
    };


    var data = source.goods || [];

    let modalProps = {
      title: this.props.record ? this.props.record.modal_title : '',
      component:
                <div>
                    <Table columns={columns} dataSource={data} pagination={false} rowKey={rowKey}
                        />
                    <div style={{textAlign:'right'}} className="u-mt-20">
                        <span>运费:￥{source.total_delivery}</span>
                        <span className="u-ml-20 u-mr-20">+</span>
                        <span>安装费:￥{source.total_installation}</span>
                        <span className="u-ml-20 u-mr-20">+</span>
                        <span>商品合计:￥{source.total_price}</span>
                        <span className="u-ml-20 u-mr-20">=</span>
                        <span>总计:￥{source.total}</span>
                    </div>
                </div>
               ,
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps} />;
  }
});

module.exports = Selector;
