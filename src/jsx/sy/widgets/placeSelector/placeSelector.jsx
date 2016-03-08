/** @jsx React.DOM */
// 地区选择组件
var PlaceSelector = React.createClass({
    getInitialState: function(){
        return {
            region:[],
            province:{
                id: 0,
                name: '',
                child: []
            },
            city:{
                id: 0,
                name: '',
                child: []
            },
            district:{
                id: 0,
                name: '',
                child: []
            }
        }
    },
    changeProvince: function(e){
        this._getRegionData(parseInt(e.target.value));
        this.props.onChange(this.state);
    },
    changeCity: function(e){
        this._getRegionData(this.state.province.id,parseInt(e.target.value));
        this.props.onChange(this.state);
    },
    changeDistrict: function(e){
        this._getRegionData(this.state.province.id,this.state.city.id,parseInt(e.target.value));
        this.props.onChange(this.state);
    },
    // 获取服务器数据
    _getRegion: function(callback){
        var self = this,
            state = this.state;
        if(!state.region.length) {
            $.ajax({
                url: host + '/api/region/region',
                method: "GET",
                success: function (res) {
                    if (res && res.code == 0) {
                        state.region = res.data.region;
                        //更新相关数据
                        self.setState(state,function(){
                            self._initData();
                        });
                    }
                }
            })
        }
    },
    // 初始化数据
    _initData: function(){
        var self = this,
            state = this.state;
        if(state.province.id>0){
            state.region.map(function(province,i){
                if(province.id == state.province.id){
                    state.province.name = province.name;
                    state.province.child = province.children;
                    province.children.map(function(city){
                        if(city.id == state.city.id ){
                            state.city.name = city.name;
                            state.city.child = city.children;
                            city.children.map(function(district,i){
                                if(district.id == state.district.id){
                                    state.district.name = district.name;
                                    state.district.child = district.children
                                }
                            })
                        }
                    });
                }
            });
            self.setState(state);
        }else{
            self._getRegionData(state.region[0].id);
            this.props.onChange(this.state);
        }

    },
    // 抽取地区数据
    _getRegionData: function(province_id,city_id,district_id){
        var self = this,
            state = this.state;

        state.region.map(function(province){
            // 省
            if(province.id == province_id){
                state.province.id = province.id;
                state.province.name = province.name;
                state.province.child = province.children;
                // 市
                if(city_id && province.children.length){
                    province.children.map(function(city){
                        if(city.id == city_id){
                            state.city.id = city.id;
                            state.city.name = city.name;
                            state.city.child = city.children;
                            // 区
                            if(district_id && city.children.length ){
                                city.children.map(function (district) {
                                    if (district.id == district_id) {
                                        state.district.id = district.id;
                                        state.district.name = district.name;
                                        state.district.child = district.children;
                                    }
                                })
                            }else{
                                if(city.children[0].children.length){
                                    state.district.id = city.children[0].children[0].id
                                    state.district.name = city.children[0].children[0].name
                                    state.district.child = city.children[0].children[0].children
                                }else{
                                    state.district.id = 0
                                    state.district.name = ''
                                    state.district.child = []
                                }
                            }

                        }
                    })
                }else{
                    state.city.id = province.children[0].id
                    state.city.name = province.children[0].name
                    state.city.child = province.children[0].children

                    //区
                    if(province.children[0].children.length){
                        state.district.id = province.children[0].children[0].id
                        state.district.name = province.children[0].children[0].name
                        state.district.child = province.children[0].children[0].children
                    }else{
                        state.district.id = 0
                        state.district.name = ''
                        state.district.child = []
                    }
                }

            }
        });
        self.setState(state);
    },
    componentDidMount:function(){
        var state = this.state,
            props = this.props,
            self = this;
        state.province.id = props.place.province.id;
        state.city.id = props.place.city.id;
        state.district.id = props.place.district.id;
        this.setState(state);

        this._getRegion();
    },
    render: function () {
        var state = this.state;
        var province_classes = classSet({
            'province': true
        });
        var city_classes = classSet({
            'city': true,
            'hidden': !state['province']['child'].length
        });
        var district_classes = classSet({
            'district': true,
            'hidden': !state['city']['child'].length
        });
        return (
            <div calssName="PlaceSelector clearfix">
                <Select style={{width:150,float:"left",marginRight:10}} value={state.province.id} onChange={this.changeProvince} className={province_classes} inline>
                {state.region.map(function(item){
                    return (
                        <option key={'province_'+item.id} value={item.id}>{item.name}</option>
                    )
                })}
                </Select>
                <Select style={{width:150,float:"left",marginRight:10}} value={state.city.id} onChange={this.changeCity} className={city_classes} inline>
                    {state.province.child.map(function(item){
                        return (
                            <option key={'city_'+item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </Select>
                <Select style={{width:150,float:"left",marginRight:10}} value={state.district.id} onChange={this.changeDistrict} className={district_classes} inline>
                    {state.city.child.map(function(item){
                        return (
                            <option key={'district_'+item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </Select>
            </div>
        )
    },
});

module.exports = PlaceSelector;
