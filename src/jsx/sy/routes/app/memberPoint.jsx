/** @jsx React.DOM */
/*会员积分*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');

var liteFlux = require('lite-flux');
var Store = require('../../modules/stores/memberPointStore.jsx');
//
var classSet = React.addons.classSet;


var HandleMixins = {
    handleSearch: function (type) {
        var source = this.state.memberPoint;
        var page = source.current_page;
        switch (type) {
            case 'previous':
                page = page - 1;
                var data = {
                    member_id: this.props.id,
                    page: page,
                    size: 10
                }
                liteFlux.action("memberPoint").getMemberPoint(data);
                break;
            case 'next':
                page = page + 1;
                var data = {
                    member_id: this.props.id,
                    page: page,
                    size: 10
                }
                liteFlux.action("memberPoint").getMemberPoint(data);
                break;
            default :
                page = 1;
                break;
        }
    }
};

var List = React.createClass({
    render: function () {
        var item = this.props.data;
        return (
            <tr>
                <td colSpan="8">
                    <table  width="100%">
                        <tr>
                            <td width="10%">{item.type_name}</td>
                            <td width="6%" style={{textAlign:'center'}}>{item.operational_point>0?'+'+item.operational_point:item.operational_point}</td>
                            <td width="15%" style={{textAlign:'center'}}>{item.updated_at}</td>
                            <td width="15%" style={{textAlign:'center'}}>{item.remarks}</td>
                            <td width="15%" style={{textAlign:'center'}}>{item.operator}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        )
    }
});


window.use_point = 0;
var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('memberPoint'), HandleMixins, ModalMixins],
    getInitialState: function () {

    },
    componentDidMount: function () {
        var data = {
            member_id: this.props.id,
            page: 1,
            size: 10
        }
        liteFlux.action("memberPoint").getMemberPoint(data);
    },
    componentWillReceiveProps: function(props) {
        var data = {
            member_id: props.id,
            page: 1,
            size: 10
        }
        this.setStore({
            memberPoint: null
        });
        liteFlux.action("memberPoint").getMemberPoint(data);
    },
    show: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },
    /*积分增减处理*/
    handleScoreNumber: function(e){
        var el = e.target;
        if(el.checked){
            var value = parseInt(el.value);
            if(value == 1){
                document.getElementById('decrease_score').value = '';
            }
            if(value == 2){
                document.getElementById('add_score').value = '';
            }
        }
    },
    /*积分弹出框*/
    handleScore: function(id){
        var _this = this;
        var node = (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Form horizontal>
                            <FormGroup>
                                <Input onClick={this.handleScoreNumber} type="radio" xs={1} name='number' className='fl' value='1'/>
                                <Label  xs={1}>增</Label>
                                <Input id="add_score" type="text" xs={2} style={{float:'left',width:'30%'}}/>
                            </FormGroup>
                            <FormGroup>
                                <Input onClick={this.handleScoreNumber} type="radio" xs={1} name='number' className='fl' value='2'/>
                                <Label  xs={1}>减</Label>
                                <Input id="decrease_score" type="text" xs={2} style={{float:'left',width:'30%'}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label control xs={1}>备注：</Label>
                                <Input id="remark_text" type="text" xs={9} />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
        ModalManager.create(this.showModal(node, '积分调整', function () {
            var value_dec = document.getElementById('decrease_score').value; /*value1 表示减的数值*/
            var value_add = document.getElementById('add_score').value; /*value2 表示加的数值*/
            var remark_value = document.getElementById('remark_text').value; /* 表示备注*/
            if(remark_value.length>50){
                alert('亲,你的文采太好了,备注已经太多了');
                return false;
            }
            if(value_dec == "" && value_add == ""){
                alert('数值不能全为空！');
                return false;
            }
            if(value_dec && value_add){
                alert('不能两个都填写！');
                return false;
            }
            if(value_dec){
                console.log(value_dec);
                if(use_point==0){
                    if(value_dec>0){
                        alert('可用积分不够减!');
                        return false;
                    }
                }
                if(value_dec>parseInt(use_point)){
                    alert('可用积分不够减!');
                    return false;
                }
                var data = {
                    member_id: id,
                    point: -value_dec,
                    remarks: remark_value
                };
                var data2 = {
                    member_id: id,
                    page: 1,
                    size: 10
                };
                liteFlux.action("memberPoint").pointAdjustment(data,data2); /*减*/
            }
            if(value_add){

                var data = {
                    member_id: id,
                    point: value_add,
                    remarks: remark_value
                };
                var data2 = {
                    member_id: id,
                    page: 1,
                    size: 10
                };
                liteFlux.action("memberPoint").pointAdjustment(data,data2); /*加*/
            }
        }));
    },
    render: function () {
       var _this = this;
        var source = this.state.memberPoint || null;
        /*模拟数据*/
        if(source == null || source == undefined){
            return (
                <div style={{textAlign:'center',position:'absolute',top: '50%' ,zIndex:'1000',left: '50%'}}>
                    加载中，请稍等......
                </div>
            )
        }
        if(source.data == null || source.data == undefined){
            return false;
        }
       var list = source.data;

        var pagerNode = function () {
            var prev = '';
            var next = '';
            if (source) {
                if (source.current_page > 1) {
                    prev = <Page previous onClick={_this.handleSearch.bind(null,'previous')}>上一页</Page>
                }

                if (source.current_page < source.last_page) {
                    next = <Page next onClick={_this.handleSearch.bind(null,'next')}>下一页</Page>
                }

            }
            return (
                <Pager>
                    {prev}
                    {next}
                </Pager>
            )
        };
        var $list = list.map(function (item, i) {
            return (
                <List
                    key={i}
                    data={item}
                    >
                </List>
            )
        });
        var available_point, total_point;

        available_point = source.points.available_point;

        total_point = source.points.total_point;

        use_point = available_point;
        return (
            <Container id='body'>
                <div>
                    <a className="a_none_underline" href="#/app/memberList">
                        <Button type='submit' bsStyle='blue' style={{marginLeft:'24',marginBottom:'20'}}>返回用户列表</Button>
                    </a>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <Grid>
                                                <Row className='hidden-print' style={{marginBottom:20}}>
                                                    <Col xs={6}>
                                                        <Col xs={6} style={{fontSize:'24'}}>可用积分：{available_point}</Col>

                                                        <Col xs={6} style={{fontSize:'24',marginLeft:'-70'}}>历史总积分：{total_point}</Col>
                                                    </Col>
                                                    <Col xs={3}>
                                                        <Button bsStyle='blue' onClick={this.handleScore.bind(null,_this.props.id)}>
                                                            积分调整
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>
                                            <Grid>
                                                <Table striped>
                                                    <thead className='bg-orange65 fg-white'>
                                                    <tr>
                                                        <th width="10%">来源/用途</th>
                                                        <th width="6%" style={{textAlign:'center'}}>积分变化</th>
                                                        <th width="15%" style={{textAlign:'center'}}>日期</th>
                                                        <th width="15%" style={{textAlign:'center'}}>备注</th>
                                                        <th width="15%" style={{textAlign:'center'}}>操作人</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {$list}
                                                    </tbody>
                                                </Table>
                                            </Grid>
                                            <hr/>
                                            {pagerNode()}
                                        </div>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
                {this.props.children}
            </Container>
        );
    }
});
var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function () {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body id={this.props.id}>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
