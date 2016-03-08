import { Tag } from 'antd';
import {Form, Input, Select, Checkbox, Radio} from 'antd';
const FormItem = Form.Item;
var Modal = antd.Modal;

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import Event from 'lite-flux/lib/event';


var ThisForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      source: [],
      note_box: 'hidden'
    };
  },
  componentDidMount: function () {

    let self = this;
    let request_data = {

    };
    webapi.order.getFeedbackNote(request_data).then(function (res) {
      if (res && !res.code) {

        res.data.forEach(function (item) {
          item.class_style = 'blue';
        });

        self.setState({
          source: res.data
        });
      }else {
        SP.message.error(res.msg);
      }
    });


  },
  componentWillReceiveProps(nextProps) {

  },
  clickHandle(noteId, e) {

    let self = this;
    let source = this.state.source;

    source.forEach(function (item, index) {
      if (item.id === noteId) {
        if (item.class_style !== 'red') {
          item.class_style = 'red';
        }
                else {
          item.class_style = 'blue';
        }
      }
    });
    this.setState({
      source:source
    });

  },
  onClose() {
    this.props.setModalVisible(false);
  },
  onSave() {

    let self = this;
    let source = this.state.source;
    let active_note_ids = [];
    source.forEach(function (item, index) {
      if (item.class_style === 'red') {
        active_note_ids.push(item.id);
      }
    });
    let log = $('#control-textarea').val();
    let orderId = this.props.orderId;

    console.log(log, active_note_ids, orderId, '+++');
    if (active_note_ids.length > 0 && log) {

      let request_data = {
        feedback: log,
        order_id: orderId
      };
      webapi.order.updateFeedbackLog(request_data).then(function (res) {
        if (res && !res.code) {
          let _data = {
            feedback_log_id: res.data.id,
            note_ids: active_note_ids,
            type_id: res.data.creater_type
          };
          webapi.order.updateFeedbackLogNote(_data).then(function (_res) {
            if (_res && !_res.code) {
              self.props.setModalVisible(false);
              self.context.router.push('/order/edit/' + orderId + '/invoiceId/see');
            }else {
              SP.message.error(_res.msg);
            }
          });
        }else {
          SP.message.error(res.msg);
        }
      });
    }else {
      SP.message.error('要填写记录或者选择印象标签哦');
    }
  },
  cancelNote() {
    this.setState({
      note_box: 'hidden'
    });
  },
  sureNote() {

    let self = this;
    let source = this.state.source;
    let _note_text = $('#add_note').val();
    let _data = {
      name: _note_text
    };

    if (_note_text) {
      webapi.order.addFeedbackNote(_data).then(function (_res) {
        if (_res && !_res.code) {
          let _item = _res.data;
          _item.class_style = 'blue';
          source.push(_item);
        }else {
          SP.message.error(_res.msg);
        }

        self.setState({
          note_box: 'hidden'
        });
        self.setState({
          source: source
        });
      });
    }
  },

  addNote() {
    this.setState({
      note_box: 'shown'
    });
  },
  render: function () {

    let self = this;
    let source = this.state.source;

    return (
            <div className="">
                <Form horizontal={true}>
                    <FormItem
                        id="control-textarea"
                        label="记录："
                        labelCol={{span: 6}}
                        wrapperCol={{span: 14}}>
                        <Input type="textarea" id="control-textarea" rows="5" />
                    </FormItem>
                </Form>
                <div className="row">
                    <div className="col-6">.</div>
                    <div className="col-14">
                        <div>
                            {
                                source.map(function (item) {
                                  return (
                                        <Tag color={item.class_style} onClick={self.clickHandle.bind(null, item.id)} key={item.id}>{item.name}</Tag>
                                    );
                                })
                            }
                        </div>
                        <div className={self.state.note_box}><span><input type="text" id='add_note' />   <Tag onClick={self.cancelNote}>取消</Tag>  <Tag color="green" onClick={self.sureNote}>确定</Tag> </span></div>
                        <div><a href="javascript:;" className='u-ml-10' onClick={self.addNote}>添加新标签</a></div>
                    </div>
                </div>
                <div className="row u-mt-30" style={{paddingTop:'22px', borderTop:'1px solid #EAEAEA'}}>
                    <button type="button" style={{float:'right'}} className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.onSave}>保存</button>
                    <button type="button" style={{float:'right', marginRight:'10'}} className="ant-btn ant-btn-lg" onClick={this.onClose}>关闭</button>
                </div>
            </div>
        );
  }
});


var Selector = React.createClass({
  getInitialState: function () {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    let self = this;
  },
  componentWillReceiveProps(nextProps) {

  },
  render: function () {

    let self = this;

    let modalProps = {
      title: '添加记录',
      component: <ThisForm setModalVisible={this.props.setModalVisible} orderId={this.props.record.orderId} />,
      setModalVisible: this.props.setModalVisible,
      visible: this.props.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return <BaseModal {...modalProps} />;
  }
});

module.exports = Selector;
