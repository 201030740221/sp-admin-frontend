/** @jsx React.DOM */
var host = Sp.config.host;
var classSet = React.addons.classSet;
var cache = Sp.cache = Sp.cache || {};
var categoryAction = {

    baseUrl: Sp.config.host + '/api/',
    //baseUrl: 'http://admin.sipin.dev/api/',
    path: {
        getList: 'category/getList'
    },
    get: function (id) {
        return $.ajax({
            url: id ? this.baseUrl + this.path.getList + id : this.baseUrl + this.path.getList,
            type: 'GET',
            dataType: 'json'
    });
  }
};

var CategorySelector = React.createClass({
    getInitialState: function () {
        var _this = this;
        categoryAction.get().done(function (data) {
            cache.categorys = data;
            _this.setState({
                data: data
            });
        });

        return {
            selectBoxActive: false,
            data: cache.categorys || {data: []},
            category1: {
                name: '',
                children: []
            },
            category2: {
                name: '',
                children: []
            },
            category3: {
                name: '',
                children: []
            }
        };
    },
    componentDidMount: function () {
        var _this = this;

    },
    componentWillUnmount: function () {

    },
    updateEvt: function (item, category) {
        var reset = {
            name: '',
            children: []
        };
        switch (category) {
            case '1':
                this.setState({
                    category1: item,
                    category2: reset,
                    category3: reset
                });
                break;
            case '2':
                this.setState({
                    category2: item,
                    category3: reset
                });
                if(item.children && !item.children.length){
                    this.setState({
                        selectBoxActive: false
                    });
                    //callback
                    typeof this.props.callback === 'function' &&  this.props.callback.call(this, item);
                }
                break;
            case '3':
                this.setState({
                    category3: item
                });
                this.setState({
                    selectBoxActive: false
                });
                //callback
                typeof this.props.callback === 'function' &&  this.props.callback.call(this, item);
                break;
        }
  },
  handleClick: function(){
    this.setState({
      selectBoxActive: !this.state.selectBoxActive
    });
    console.log(this.state.selectBoxActive)
  },
  render: function(){
    this.resaults = [
      this.state.category1,
      this.state.category2,
      this.state.category3
    ];
    var classes = classSet({
      'hidden': !this.state.selectBoxActive,
      'bg-white': true
    });
    return(
        <Grid className='bg-white'>
          <Row>
            <Col sm={12} onClick={this.handleClick} style={{padding:0}}>
              <ResaultBox resaults={this.resaults}></ResaultBox>
            </Col>
          </Row>
          <Row className={classes.trim()}>
            <Col sm={4}>
              <SelectBox data={this.state.data.data} evt={this.updateEvt} category='1' selectedName={this.state.category1.name}></SelectBox>
            </Col>
            <Col sm={4}>
              <SelectBox data={this.state.category1.children} evt={this.updateEvt} category='2' selectedName={this.state.category2.name}></SelectBox>
            </Col>
            <Col sm={4}>
              <SelectBox data={this.state.category2.children} evt={this.updateEvt} category='3' selectedName={this.state.category3.name}></SelectBox>
            </Col>
          </Row>
          <Row><p></p></Row>
        </Grid>
    );
  }

});

var ResaultBox = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    render: function () {
        this.resaults = this.props.resaults;
        var node = this.resaults.map(function (item, i) {
            if(item.name || i == 0){
                return (
                    <BLink active key={i} style={{cursor:'pointer',background:'#65A9F3',padding:'5',color:'#fff',borderRadius:'6px',marginRight:'6'}}>{item.name ? item.name : '请选择'}</BLink>
                )
            }else{
                return ''
            }
        });
        return (
            <Breadcrumb style={{margin: 0, padding: '2px 0'}}>
                {node}
            </Breadcrumb>
        );
    }
});

var SelectBox = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    clickEvt: function (item) {
        this.props.evt(item, this.props.category);
    },
    render: function () {
        var _this = this;
        this.data = this.props.data;
        var node = this.data.map(function (item, i) {
            var classes = classSet({
                'active': (_this.props.selectedName == item.name)
            });
            return (
                <Button bsStyle='info' outlined1 className={classes.trim()} onClick={_this.clickEvt.bind(null, item)} key={i}>{item.name}</Button>
            );
        });
        return (
            <ButtonGroup style={{width: '100%'}} vertical>
          {node}
            </ButtonGroup>
        );
    }
});


module.exports = CategorySelector;
