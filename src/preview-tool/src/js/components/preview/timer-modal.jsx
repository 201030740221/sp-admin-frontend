'use strict';

import BaseModal from 'modules/page-components/base-modal';
import BaseModalMixin from 'modules/page-components/modal-mixin';
import BaseForm from 'modules/page-components/base-form';
import RequestProxy from 'modules/helpers/request-proxy';
import Event from 'lite-flux/lib/event';
import moment from 'moment';
import {
  DatePicker
} from 'antd';

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

import Immutable from 'immutable';
var is = Immutable.is.bind(Immutable),
  getKeys = Object.keys.bind(Object);

function shallowEqualImmutable(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }
  if (objA && !objB) {
    return false;
  }
  if (!objA && objB) {
    return false;
  }
  var keysA = getKeys(objA),
    keysB = getKeys(objB),
    keysAlength = keysA.length,
    keysBlength = keysB.length;

  if (keysAlength !== keysBlength) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysAlength; i++) {
    if (!objB.hasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  // Now we dont need to test for B's keys missing from A,
  // because if length's is same and prev check success - objB hasn't more keys
  return true;
}

var Selector = React.createClass({
  mixins: [BaseModalMixin],
  getInitialState: function () {
    return {
      visible: false,
      schedule: this.props.schedule || null,
      startTime: this.props.schedule
        ? this.props.schedule.on_at !== '0000-00-00 00:00:00'
          ? this.props.schedule.on_at
          : '' : '',
      endTime: this.props.schedule
        ? this.props.schedule.off_at !== '0000-00-00 00:00:00'
          ? this.props.schedule.off_at
          : '' : ''
    };
  },
  onShowModal: function () {
    this.setModalVisible(true);
  },
  componentWillReceiveProps: function (nextProps) {
    if (shallowEqualImmutable(nextProps.schedule, this.props.schedule)) {
      return;
    }
    this.setState({
      schedule: nextProps.schedule || null,
      startTime: nextProps.schedule
        ? nextProps.schedule.on_at !== '0000-00-00 00:00:00'
          ? nextProps.schedule.on_at
          : '' : '',
      endTime: nextProps.schedule
        ? nextProps.schedule.off_at !== '0000-00-00 00:00:00'
          ? nextProps.schedule.off_at
          : '' : ''
    });
  },
  enterTime: function (event) {
    event.preventDefault();
    let self = this;
    // 默认值
    let on_at = this.state.startTime;
    let off_at = this.state.endTime;

    let canUpdate = true;
    let saveSchedule = self.state.schedule
      ? webapi.frame.updateSchedule
      : webapi.frame.saveSchedule;

    if (!on_at && !off_at) {
      SP.message.error('时间不能为空');
      canUpdate = false;
      return;
    }

    if (on_at && moment(on_at).diff(moment()) < 0) {
      SP.message.error('上线时间不能小于当前时间，如需清除上线时间，请先点击清除时间');
      canUpdate = false;
      return;
    }

    if (off_at && moment(off_at).diff(moment()) < 0) {
      SP.message.error('下线时间不能小于当前时间，如需清除下线时间，请先点击清除时间');
      canUpdate = false;
      return;
    }

    if (on_at && off_at && !moment(on_at).diff(off_at)) {
      SP.message.error('上线时间不能大于下线时间');
      canUpdate = false;
      return;
    }

    let args = [
      {
        position_id: self.props.id,
        on_at: on_at || '',
        off_at: off_at || ''
      }
    ];

    // update 传 id
    if (self.state.schedule) {
      args.unshift(self.state.schedule.id);
    }
    if (canUpdate) {
      saveSchedule.apply(self, args).then(RequestProxy(function (res) {
        SP.message.success('设置时间成功');
        // 设置 store 里的计划时间
        A('ad-banner').updatePosition(self.props.id, {schedule: res});
        self.setModalVisible(false);
      }));
    }
  },
  clearTime: function (event) {
    event.preventDefault();
    let self = this;
    if (self.state.schedule) {
      webapi.frame.updateSchedule(self.state.schedule.id, {
        position_id: self.props.id,
        on_at: '',
        off_at: ''
      }).then(RequestProxy(function (res) {
        SP.message.success('清除时间成功');
        // 设置 store 里的计划时间
        A('ad-banner').updatePosition(self.props.id, {schedule: res});
        self.setModalVisible(false);
      }));
    } else {
      SP.message.success('当前推荐位并没有设置时间');
    }
  },
  handleDatepickerChange: function (type, val) {
    let self = this;
    val = val
      ? moment(val).format('YYYY-MM-DD HH:mm:ss')
      : null;
    switch (type) {
      case 'startTime':
        self.setState({startTime: val});
        break;
      case 'endTime':
        self.setState({endTime: val});
        break;
      default:
        break;
    }
  },
  render: function () {
    let self = this;

    let buttonClass = 'ant-btn ant-btn-sm u-ml-10';
    if (this.state.schedule && (this.state.schedule.on_at !== '0000-00-00 00:00:00' || this.state.schedule.off_at !== '0000-00-00 00:00:00')) {
      buttonClass += ' ant-btn-primary';
    }

    let selectBtn = (
      <button className={buttonClass} onClick={self.onShowModal}>
        <i className="anticon anticon-clock-circle"></i>
      </button>
    );

    let msg = (
      <div>
        <p>1、此功能用于推荐位在规定时间上线与下线的自动化操作</p>
        <p>2、若不使用计划时间，请点击清除时间</p>
      </div>
    );

    let renderModalComponent = function () {
      let handleSubmit = function () {};
      if (self.state.visible) {
        return (
          <form className="ant-form-horizontal">
            <div className="ant-form-item">
              <label className="col-6">上线时间：</label>
              <div className="col-6">
                <div>
                  <DatePicker
                    style={{
                      width: 200
                    }}
                    onChange={self.handleDatepickerChange.bind(self, 'startTime')}
                    disabled={false}
                    value={self.state.startTime}
                    showTime={true}
                    format="yyyy-MM-dd HH:mm:ss"/>
                </div>
              </div>
            </div>
            <div className="ant-form-item">
              <label className="col-6">下线时间：</label>
              <div className="col-6">
                <div>
                  <DatePicker
                    style={{
                      width: 200
                    }}
                    onChange={self.handleDatepickerChange.bind(self, 'endTime')}
                    disabled={false}
                    value={self.state.endTime}
                    showTime={true}
                    format="yyyy-MM-dd HH:mm:ss"/>
                </div>
              </div>
            </div>
            <div className="ant-form-item">
              <label className="col-6"></label>
              <div className="col-6">
                <button type="submit" className="ant-btn ant-btn-primary u-mr-10" onClick={self.enterTime}>
                  <span>设置时间</span>
                </button>
                <button type="submit" className="ant-btn ant-btn-primary" onClick={self.clearTime}>
                  <span>清除时间</span>
                </button>
              </div>
            </div>
          </form>
        );
      }

      return null;
    };

    let modalProps = {
      title: '推荐位自动上下线',
      component: renderModalComponent(),
      setModalVisible: this.setModalVisible,
      visible: this.state.visible,
      width: 800,
      bottomBar: false, // 不要底栏
    };

    return (
      <span>
        <BaseModal {...modalProps}/>
        {selectBtn}
      </span>
    );
  }
});

module.exports = Selector;
