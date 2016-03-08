'use strict';

import {Modal} from 'antd';
import uuid from 'modules/helpers/uuid';

export default class AlertModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: props.modalId || uuid()
    };
  }
  handleOk() {
    if (this.props.onChange()) {
      this.props.setModalVisible(false);
    }
  }
  handleCancel() {
    this.props.setModalVisible(false);
  }
  render() {

    let footer = this.props.bottomBar
      ? [< button key = "back" className = "ant-btn ant-btn-lg" onClick = {
          this.handleCancel
        } > 关 闭 < /button>, <button key="submit" className={'ant-btn ant-btn-primary ant-btn-lg ' + (this.state.loading ? 'ant-btn-loading':'')} onClick={this.handleOk}> 保 存 </button >]
      : null;

    return (
      <Modal
        footer={footer}
        onCancel={this.handleCancel.bind(this)}
        onOk={this.handleOk.bind(this)}
        ref={this.state.ref}
        title={this.props.title}
        visible={this.props.visible}
        width={this.props.width || 500}>
        <div className="theme-select-box">
          <div className="mb10 clearfix">
            {this.props.component || null}
          </div>
        </div>
      </Modal>
    );
  }
}
