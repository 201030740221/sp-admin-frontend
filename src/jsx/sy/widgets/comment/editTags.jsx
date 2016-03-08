/** @jsx React.DOM */
var liteFlux = require('lite-flux');
var commentStore = require('../../modules/stores/comment/list.jsx');

var EditCommentTags = React.createClass({
    mixins: [liteFlux.mixins.storeMixin('commentList')],
    getInitialState: function () {
        return {
            list: [],
            content: ''
        }
    },
    searchHandle: function(id){
        var _this = this;
        var request_data = {
            goods_id: id
        };
        liteFlux.action("commentList").getCommentTagsList(request_data,function(data){ /*获取评价印象标签*/
            _this.setState({
                list: data.data
            })
        });
    },
    componentDidMount: function () {
        this.searchHandle(this.props.goodId);
    },
    componentDidUpdate: function(){

    },
    componentWillReceiveProps: function (props) {

    },
    showModal: function(content,title,callback) {
        var _this = this;
        title = title || '';
        var fn = function(){
            typeof callback === 'function' && callback();
            ModalManager.remove();
        };
        return (
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    <span>标签名: </span><input className='input_val ml5' type='text'/>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    },
    addHandle: function(){
        var _this = this;
        ModalManager.create(this.showModal('','新增印象标签', function(){
            var val = $('.input_val').val();
            var request_data = {
                goods_id: _this.props.goodId,
                name: val
            };
            liteFlux.action("commentList").addCommentTag(request_data,function(data){
                _this.setState({
                    list: data.data
                })
            });
        }));
    },
    deleteHandle: function(itemId){
        var _this = this;
        liteFlux.action("commentList").deleteCommentTag(itemId,{});
        var list = this.state.list;
        for(var key in list){
            if(list[key].id==itemId){
                list.splice(key,1);
                _this.setState({
                    list: list
                })
            }
        }

    },
    updateHandle: function(itemName,itemId){
        var _this = this;
        ModalManager.create(this.showModal(itemName,'更改印象标签', function(){
            var val = $('.input_val').val();
            var request_data = {
                name: val
            };
            liteFlux.action("commentList").updateCommentTag(itemId,request_data);
            var list = _this.state.list;
            for(var key in list){
                if(list[key].id==itemId){
                    list[key].name = val;
                    _this.setState({
                        list: list
                    })
                }
            }
        }));
    },
    render: function () {
        var _this = this;
        var list = this.state.list;
        var $liNode = list.map(function(item,key){
            return (
                <li className="user-select-none cur-p active mb10" key={item.id}>
                    {item.name}
                    <Icon glyph='icon-feather-square-cross' onClick={_this.deleteHandle.bind(null,item.id)}/>
                </li>
            )
        });
        return (
            <FormGroup>
                <Label control sm={2} >商品买家印象标签</Label>
                <Col sm={10} style={{marginTop:'5'}}>
                    <ul style={{position: 'relative'}}  className="user-select-none collocation-tags can-delete">
                        {$liNode}
                        <li className="user-select-none cur-p active add-tag mb10" onClick={this.addHandle}>
                            新增印象标签+
                        </li>
                    </ul>
                </Col>
            </FormGroup>
        )
    }
});

module.exports = EditCommentTags;
