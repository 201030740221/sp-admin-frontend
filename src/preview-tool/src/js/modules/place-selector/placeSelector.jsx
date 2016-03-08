var Select = antd.Select;
var Option = Select.Option;
var Icon = antd.Icon;

const depthMap = {
  1: 'province',
  2: 'city',
  3: 'district'
};
// 地区选择组件
var PlaceSelector = React.createClass({
  getInitialState: function () {
      let props = this.props;
      console.log(props.place);
      return {
          regionMap: {
              provinces: []
            },
          provinceId: props.place.province.id,
          cityId: props.place.city.id,
          districtId: props.place.district.id,
          loading: true
        };
    },
  changeRegion: function (id) {
      var regionMap = this.state.regionMap
        ,   region = regionMap[id]
        ,   region_name = depthMap[region.depth]
        ,   state = this.state;

      state[region_name + 'Id'] = id;

      if (region_name === 'province') {
          state.cityId = region.children[0].id;
          state.districtId = region.children[0].children[0].id;
        } else if (region_name === 'city') {
          state.districtId = region.children[0].id;
        }

      if (this.props.onChange) {
          this.props.onChange({
              province: {
                  id: state.provinceId,
                  name: regionMap[state.provinceId].name
                },
              city: {
                  id: state.cityId,
                  name: regionMap[state.cityId].name
                },
              district: {
                  id: state.districtId,
                  name: regionMap[state.districtId].name
                }
            });
        }

      this.setState(state);
    },
    // 获取服务器数据
  _getRegion: function (callback) {
      var state;
      if (window.regionMapCache) {
          state = {
              loading: false,
              regionMap: window.regionMapCache
            };

          this.setState(state);
        } else {
            // from api get region and thranslate to map and cache
          webapi.region.getRegion().then(function (res) {
              if (res && res.code === 0) {
                  state = {
                      loading: false,
                      regionMap: this.getRegionMap(res.data.region)
                    };

                  window.regionMapCache = state.regionMap;

                  this.setState(state);
                }
            }.bind(this));
        }
    },

    // 转换地区数据为Map类型
  getRegionMap: function (regionData) {
      regionData.forEach(function (region) {
          this.state.regionMap[region.id] = region;

          if (region.children && region.children.length) {
              this.getRegionMap(region.children);
            }
        }.bind(this));

      this.state.regionMap.provinces = regionData;

      return this.state.regionMap;
    },
  componentDidMount:function () {
      this._getRegion();
    },
  render: function () {

      var state = this.state || {};
      let props = this.props;

      if (state.loading) {
          return (
                <p>
                    <Icon type="loading" /> 加载地区数据中...
                </p>
            );
        }

      var provinces = state.regionMap.provinces
        ,   cities = state.regionMap[state.provinceId].children || []
        ,   districtes = state.regionMap[state.cityId].children || [];

      return (
            <div calssName="row">
                <Select style={{width:150, float:'left', marginRight:10}} value={state.provinceId + ''} onSelect={this.changeRegion}>
                    {provinces.map(function (item) {
                      return (
                            <Option key={item.id + ''}>{item.name}</Option>
                        );
                    })}
                </Select>
                <Select style={{width:150, float:'left', marginRight:10}} value={state.cityId + ''} onSelect={this.changeRegion}>
                    {cities.map(function (item) {
                      return (
                            <Option key={item.id}>{item.name}</Option>
                        );
                    })}
                </Select>
                <Select style={{width:150, float:'left', marginRight:10}} value={state.districtId + ''} onSelect={this.changeRegion} >
                    {districtes.map(function (item) {
                      return (
                            <Option key={item.id}>{item.name}</Option>
                        );
                    })}
                </Select>
            </div>
        );
    }
});

module.exports = PlaceSelector;
