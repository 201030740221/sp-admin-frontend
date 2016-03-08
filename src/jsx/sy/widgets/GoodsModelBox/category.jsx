/** @jsx React.DOM */

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/goods/categoryListStore.jsx');

window.category_arr = [];

var CategoryBox = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('categoryListStore')],
    getInitialState: function(){
        return {
            source: {},
            category_ids: this.props.category_ids
        }
    },

    /*设置类目选中状态*/
    setCategoryStatus: function(_this_id,list){
        var _this = this;
        list.map(function (item, index) {
            if(item.id==+_this_id){
                item.isChecked = true;

            }else{
                _this.setCategoryStatus(_this_id,item.children);
            }
        });
    },

    searchSource: function(request_data){

        var _this = this;
        var category_ids = this.state.category_ids;

        liteFlux.action("categoryListStore").getCategoryList({},function(data){
            for(var key in category_ids){
                for(var i in data.data){
                    _this.setCategoryStatus(category_ids[key],data.data);
                }
            }
            _this.setState({
                source: data
            });
        });
    },
    componentDidMount: function(){
        var request_data = {
            page_size: 10,
            page: 1
        };

        this.searchSource(request_data);

    },

    show: function(e){
        e.preventDefault();
        e.stopPropagation();
    },

    /*node*/
    showNode: function(list,margin_class){
        var _this = this;
        var _this_node = list.map(function (item, key) {
            return (
                <div key={item.id} className={margin_class}>
                    <Row key={key}>
                        <Col xs={2} className={margin_class}>
                            <input
                                className='each_checkbox'
                                type="checkbox"
                                value={item.id}
                                onChange={_this.onChangeCheckBox}
                                checked={item.isChecked}
                                />
                        </Col>
                        <Col xs={4} className={margin_class}>{item.name}</Col>
                    </Row>
                    {
                        _this.showNode(item.children,'ml20')
                    }
                </div>
            )
        });
        return _this_node;
    },

    getCheckItem: function(list){
        var _this = this;

        list.map(function (item, index) {
            if(item.isChecked){
                category_arr.push(item.id);
            }
            _this.getCheckItem(item.children);

        });
    },

    addAndRemoveMember: function(){
        var _this = this,
            source = this.state.source;
        var list = source.data || [];

        this.setState({
            source: source
        });

        ModalManager.remove();
        this.getCheckItem(list);

        this.props.callbackCategory(category_arr);
        category_arr = [];
    },

    setCheckAllChildren: function(list,type){
        var _this = this;
        list.map(function (item, index) {
           if(type){
               item.isChecked = true;
           }else{
               item.isChecked = false;
           }
            _this.setCheckAllChildren(item.children,type);
        });

    },

    /*设置 选中状态*/
    isCheckHandle: function(list,el){
        var _this = this,
            value = el.target.value;
        list.map(function (item, index) {
            if(item.id==+value){
                if(el.target.checked){
                    item.isChecked = true;
                    _this.setCheckAllChildren(item.children,true);
                }
                else{
                    item.isChecked = false;
                    _this.setCheckAllChildren(item.children,false);
                }
            }else{
                _this.isCheckHandle(item.children,el);
            }
        });
    },
    /*check change*/
    onChangeCheckBox: function (e) {
        var value = e.target.value,
            _this = this,
            source = this.state.source,
            list = source.data || [];

        _this.isCheckHandle(list,e);

        source.data = list;
        this.setState({
            source: source
        });
    },

    render: function(){

        var _this = this;
        var source = _this.state.source;
        var list = source.data || [];

       /* <Col xs={2} className="text-center">
            <div style={{marginTop: '115px'}}>
                <Button sm bsStyle='primary' onClick={this.addAndRemoveMember}> &gt; </Button>
            </div>
            <div style={{marginTop: '20px'}}>
                <Button sm bsStyle='primary' onClick={this.addAndRemoveMember}> &lt; </Button>
            </div>
        </Col>
        <Col xs={5}>
            <Row>
                <h5>已选类目</h5>
            </Row>
            <Row>
            <Col xs={12} style={{padding:0,background:'#efefef'}}>
                <Col xs={2}></Col>
                <Col xs={4}>类目名称</Col>
            </Col>
            </Row>
            {
                        this.showNode(list,'ml0')
            }
        </Col>*/
        return (
            <Grid>
                <Row>
                    <Col xs={8}>
                        <Grid style={{position: 'relative'}}>
                            <Row>
                                <h5>类目列表</h5>
                            </Row>
                            <Row>
                                <Col xs={12} style={{padding:0,background:'#efefef'}}>
                                    <Col xs={2}></Col>
                                    <Col xs={4}>类目名称</Col>
                                </Col>
                            </Row>
                            {
                                this.showNode(list,'ml0')
                            }
                            <Col xs={2} className="text-center">
                                <div style={{position:'fixed',right: '7%',bottom: '2.5%'}}>
                                    <Button sm bsStyle='primary' onClick={this.addAndRemoveMember}> 确定 </Button>
                                </div>
                            </Col>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = CategoryBox;