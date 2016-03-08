/** @jsx React.DOM */
/*秒杀列表*/

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var liteFlux = require('lite-flux');
var commentStore = require('../../modules/stores/comment/list.jsx');

//
var classSet = React.addons.classSet;


var Body = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('commentList')],
    getInitialState: function(){
        return{
            source: []
        }
    },

    turnJson: function(source){
        var json = {};
        for(var key in source){
            var _this_key = '';
            if(source[key].key == 'comment-point-bonus'){
                _this_key = 'comment_point_bonus';
            }
            if(source[key].key == 'pic-comment-point-bonus'){
                _this_key = 'pic_comment_point_bonus';
            }
            if(source[key].key == 'top-comment-limit'){
                _this_key = 'top_comment_limit';
            }
            if(source[key].key == 'top-comment-multiplier'){
                _this_key = 'top_comment_multiplier';
            }
            json[_this_key] = source[key];
        }
        JSON.stringify(json);
        json.comment_point_bonus = json.comment_point_bonus || {};
        json.pic_comment_point_bonus = json.pic_comment_point_bonus || {};
        json.top_comment_limit = json.top_comment_limit || {};
        json.top_comment_multiplier = json.top_comment_multiplier || {};
        return json;
    },

    componentDidMount: function(){
        var request_data = {},
            _this = this;
        liteFlux.action("commentList").getCommentConfigList(request_data,function(data){
            _this.setState({
                source: data
            })
        });
    },
    componentDidUpdate: function(){
        var source = this.state.source;
        var json = this.turnJson(source);
        $('#comment-point-bonus').val(json.comment_point_bonus.value),
        $('#pic-comment-point-bonus').val(json.pic_comment_point_bonus.value),
        $('#top-comment-limit').val(json.top_comment_limit.value),
        $('#top-comment-multiplier').val(json.top_comment_multiplier.value);
    },

    submitHandle: function(){
        var comment_point = $('#comment-point-bonus').val(),
            pic_point = $('#pic-comment-point-bonus').val(),
            top_limit = $('#top-comment-limit').val(),
            top_point = $('#top-comment-multiplier').val();
        if(!comment_point){
            alert('亲，你还没填写评价奖励积分');
            return false;
        }
        if(!pic_point){
            alert('亲，你还没填写晒单奖励积分');
            return false;
        }
        if(!top_limit){
            alert('亲，抢先评价奖励');
            return false;
        }
        if(!top_point){
            alert('亲，抢先评价奖励');
            return false;
        }
        var request_data = {
            configs: [
                {
                    "key": "comment-point-bonus",
                    "value": comment_point
                },
                {
                    "key": "pic-comment-point-bonus",
                    "value": pic_point
                },
                {
                    "key": "top-comment-limit",
                    "value": top_limit
                },
                {
                    "key": "top-comment-multiplier",
                    "value": top_point
                }
            ]
        };
        liteFlux.action("commentList").setComment(request_data);
    },
    cancel: function(){
         $('#comment-point-bonus').val('');
         $('#pic-comment-point-bonus').val('');
         $('#top-comment-limit').val('');
         $('#top-comment-multiplier').val('');
    },
    render: function () {
        var source = this.state.source;
        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div style={{marginLeft:'23%',fontSize:'20px',color:'#656464'}}>评价晒单积分设置</div>
                                        <Form horizontal style={{paddingTop:'50',paddingBottom:'130'}}>
                                            <FormGroup>
                                                <Label className='right_padding' sm={5}>评价奖励积分:</Label>
                                                <Col sm={7}>
                                                    <Input id='comment-point-bonus' type='text' placeholder='' className='inline'/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className='right_padding' sm={5}>晒单奖励积分:</Label>
                                                <Col sm={7}>
                                                    <Input id='pic-comment-point-bonus' type='text' placeholder='' className='inline'/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label className='right_padding' sm={5}>抢先评价奖励:</Label>
                                                <Col sm={7}>
                                                    <span>前</span>
                                                    <input id='top-comment-limit' type="text" style={{marginLeft:'10',width:'60'}}/>
                                                    <span>名</span>
                                                    <span style={{marginLeft:'10'}}>评价晒单的用户奖励</span>
                                                    <input id='top-comment-multiplier' type="text"  style={{marginLeft:'10',width:'60'}}/>
                                                    <span style={{marginLeft:'10'}}>倍  积分</span>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup style={{marginLeft:'120',marginTop:'30'}}>
                                                <Col className='right_padding' sm={5}>
                                                    <Button bsStyle='primary' onClick={this.submitHandle}>提交</Button>
                                                </Col>
                                                <Col sm={7}>
                                                    <Button bsStyle='primary' onClick={this.cancel}>取消</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        );
    }
});
var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body>
                <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
