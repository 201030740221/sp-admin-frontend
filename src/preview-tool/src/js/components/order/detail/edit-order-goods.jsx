import { Table } from 'antd';
const frontHost = location.host.replace('admin', 'www');

var thisComponent = React.createClass({
  getInitialState() {
      return {
          orderData: this.props.orderData
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          orderData: nextProps.orderData
        });
    },
  render: function ()  {

      let self = this;
      let orderData = this.state.orderData;
      let goods = orderData.goods || [];

      let  columns = [{
          title: '商品编号',
          render: function (text, record, index) {
              return (
                    <span>{record.goods_sku.sku_sn}</span>
                );
            }
        }, {
          title: '商品图',
          render: function (text, record, index) {
              return (
                    <span><img src={record.goods_sku.has_cover.media.full_path + '?imageView2/1/w/80'} width="80" alt=""/></span>
                );
            }
        }, {
          title: '商品名',
          render: function (text, record, index) {
              return (
                    <a target="_blank" href={'http://' + frontHost + '/item/' + record.goods_sku.sku_sn+'.html'}>{record.goods_sku.goods.title}</a>
                );
            }
        }, {
          title: 'SKU',
          render: function (text, record, index) {
              return (
                    <span>{record.goods_sku.attribute_name}</span>
                );
            }
        }, {
          title: '单价',
          render: function (text, record, index) {
              return (
                    <span>￥{record.price}</span>
                );
            }
        }, {
          title: '数量',
          render: function (text, record, index) {
              return (
                    <span>{record.amount}</span>
                );
            }
        }, {
          title: '小计',
          render: function (text, record, index) {
              return (
                    <span>￥{record.amount * record.price}</span>
                );
            }
        }];

      let rowKey = function (record, index) {
          return index;
        };

      return (
            <div className='u-mt-50'>
                <h2 className='u-mb-20'>商品清单：</h2>
                <Table columns={columns} dataSource={goods} rowKey={rowKey} pagination={false} />
            </div>
        );
    }

});

module.exports = thisComponent;
