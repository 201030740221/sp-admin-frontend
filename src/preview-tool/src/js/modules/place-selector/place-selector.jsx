'use strict';

import {
  Cascader,
  Icon
}
from 'antd';

const regionNames = ['province', 'city', 'district'];

module.exports = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func,
    style: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      style: {
        width: 200
      }
    };
  },
  getInitialState() {
    return {
      loading: true
    };
  },
  componentDidMount() {
    this.getRegion();
  },
  // 获取服务器数据
  getRegion() {
    let state;
    if (window.regionDataCache) {
      state = {
        loading: false,
        regions: window.regionDataCache
      };

      this.setState(state);
    } else {
      // from api get region and thranslate to component need and cache
      webapi.region.getRegion().then(function (res) {
        if (res && res.code === 0) {
          state = {
            loading: false,
            regions: this.transRegionData(res.data.region)
          };

          window.regionDataCache = state.regions;

          this.setState(state);
        }
      }.bind(this));
    }
  },

  onChange(value) {
    if (!this.props.onChange) {
      return;
    }

    let regionMap = window.regionMapCache || {};
    let _value = {};
    let name;

    value.forEach(function (id, index) {
      name = regionNames[index];
      _value[name] = {
        id: id,
        name: regionMap[id]
      };
    });

    this.props.onChange(_value);
  },

  // 转换地区数据为组件需求格式
  transRegionData(regionData) {
    window.regionMapCache = window.regionMapCache || {};
    let regions = regionData.map(function (region) {
      let _region = {
        label: region.name,
        value: region.id + ''
      };
      window.regionMapCache[region.id] = region.name;

      if (region.children && region.children.length) {
        _region.children = this.transRegionData(region.children);
      }

      return _region;
    }.bind(this));

    return regions;
  },

  render() {
    if (this.state.loading) {
      return (
        <p>
          <Icon type = "loading" /> 加载地区数据中...
        </p>
      );
    }

    return (
      <Cascader defaultValue={this.props.defaultValue} onChange={this.onChange} options={this.state.regions} style={this.props.style} />
    );
  }
});
