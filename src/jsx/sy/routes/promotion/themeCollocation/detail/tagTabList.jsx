/** @jsx React.DOM */
// 这个是可移动标签
var liteFlux = require('lite-flux');
var Store = require('../../../../modules/stores/promotion/themeCollocation/detail/index.coffee');
var Action = Store.getAction();
var storeName = 'theme-collocation-detail';
var collocationMixins = require('./collocationMixins.jsx');
var SkuList = require('./skuModal.jsx');
var validMixins = require('./validMixins.jsx');

var View = React.createClass({
    mixins: [liteFlux.mixins.storeMixin(storeName), collocationMixins, validMixins],
    onChange: function(e){

    },
    handleChange: function(i, e){
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var store = this.state[storeName];
        store.theme_collocation_goods[i][name] = value;
        Action.onSetStore(store);
    },
    handleChangeStatus: function(i){
        var store = this.state[storeName];
        store.theme_collocation_goods[i].status = store.theme_collocation_goods[i].status == 1 ? 0 : 1;
        var item = store.theme_collocation_goods[i];
        if(item.status){
            if(!item.goods_sku){
                Sp.message.error('请先选择关联商品的sku');
                return false;
            }
        }

        Action.onSetStore(store);
    },
    handleSave: function(i, figure){
        var valid = Action.validOneTagInfo(figure, i);
        if(valid){
            Action.updateFigure(figure);
        }
    },
    renderTagDetail: function(item, figure, i){
        var store = this.state[storeName];
        var skuNode = '';
        if(figure.goods_sku){
            skuNode = (
                <span className='ml20'>
                    <span className='ml20 mr20'>已选SKU: </span>
                    <BLabel bsStyle='primary'>id:{figure.goods_sku.sku_id || figure.goods_sku.id}. sn:{figure.goods_sku.sku_sn}.{' '}{figure.goods_sku.attribute_name}</BLabel>
                </span>
            )
        }
        var statusBtn = '';
        if(figure.status == 1){
            statusBtn = <Button bsStyle='danger' onClick={this.handleChangeStatus.bind(null, i)}>禁用标签</Button>
        }else{
            statusBtn = <Button bsStyle='success' onClick={this.handleChangeStatus.bind(null, i)}>启用标签</Button>
        }
        var saveBtn = '';
        if(store.id){
            saveBtn = <Button bsStyle='success' onClick={this.handleSave.bind(null, i, figure)}>保存标签</Button>
        }
        return (
            <Grid style={{paddingTop: 12.5}}>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='figure-name'>标签文字内容（10个字以内）</Label>
                                <Input type='text' id='figure-name' placeholder='标签文字内容' name="label_name" value={figure.label_name || item.goods.title} onChange={this.handleChange.bind(null, i)} onBlur={this.tagValid.bind(null,figure, i, 'label_name')} />
                                <HelpBlock>{this.tagError(figure, 'label_name')}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='figure-description'>商品文案（40个字以内）</Label>
                                <Input type='text' id='figure-description' placeholder='商品文案' name="label_description" value={figure.label_description} onChange={this.handleChange.bind(null, i)} onBlur={this.tagValid.bind(null,figure, i, 'label_description')} />
                                <HelpBlock>{this.tagError(figure, 'label_description')}</HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='name'>
                                    关联商品:
                                    <BLabel bsStyle='warning' className="ml20">{item.goods.title}</BLabel>
                                </Label>
                                <Button sm bsStyle='info' onClick={this.getSku.bind(null, figure.goods_id) }>选择SKU</Button>
                                {skuNode}
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={6}>
                        <Form>
                            <FormGroup>
                                <Label control htmlFor='name'>标签定位（请在场景图中拖动标签的位置）</Label>
                                <Grid>
                                    <Row>
                                        <Col xs={6} collapseLeft collapseRight>
                                            <InputGroup>
                                                <InputGroupAddon>X</InputGroupAddon>
                                                <Input type='text' placeholder='x' value={figure.label_x}  onChange={this.xy} />
                                            </InputGroup>
                                        </Col>
                                        <Col xs={6} collapseRight>
                                            <InputGroup>
                                                <Input type='text' placeholder='y' value={figure.label_y} onChange={this.xy} />
                                                <InputGroupAddon>Y</InputGroupAddon>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Grid>
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{paddingTop: 12.5}} className="text_center">
                        {statusBtn}{' '}
                        {saveBtn}
                    </Col>
                </Row>
            </Grid>
        )
    },
    xy: function(){},
    getSku: function(id){
        // id = 27
        Action.onChange({
            skuList: null
        });
        Action.getSku(id);
        ModalManager.create(this.getSkuModal());
    },
    getSkuModal: function(){
        return (
            <Modal lg>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>Modal title</h4>
                </ModalHeader>
                <ModalBody>
                    <SkuList></SkuList>
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                </ModalFooter>
            </Modal>
        );
    },
    renderTab: function(){
        var store = this.state[storeName];
        var _this = this;
        var goods = [];
        var active = store.tab
        if(store.goods_collocation && store.goods_collocation.goods_collocation_details){
            goods = store.goods_collocation.goods_collocation_details;
        }
        var nodes = goods.map(function(item, i){
            var className = classSet({
                'active': i == active,
                'b-tab': true
            })
            var theme_collocation_goods = store.theme_collocation_goods;
            var label_name = item.goods.title
            if(theme_collocation_goods && theme_collocation_goods.length && theme_collocation_goods[i]){
                label_name = theme_collocation_goods[i].label_name || item.goods.title
            }
            return (
                <li className={className} key={i}>
                    <a href="#" onClick={_this.changeTab.bind(null, i)}>{label_name}</a>
                </li>
            )
        })
        if(nodes.length){
            return (
                <ul className="nav nav-tabs nav-green">
                    {nodes}
                </ul>
            )
        }
    },
    changeTab: function(i, e){
        e.preventDefault();
        e.stopPropagation();
        var store = this.state[storeName];
        if(store.tab == i){
            return false
        }
        Action.onChange({
            tab: i
        });
        return false;
    },
    renderTabContent: function(){
        var store = this.state[storeName];
        var _this = this;
        var goods = [];
        var active = store.tab
        if(store.goods_collocation && store.goods_collocation.goods_collocation_details){
            goods = store.goods_collocation.goods_collocation_details;
        }
        var nodes = goods.map(function(item, i){
            var className = classSet({
                'active': i == active,
                'tab-pane': true
            })
            return (
                <div className={className} key={i}>
                    {_this.renderTagDetail(item, store.theme_collocation_goods[i], i)}
                </div>
            )
        })
        if(nodes.length){
            return (
                <div className="tab-content">
                    {nodes}
                </div>
            )
        }
    },
    render: function() {
        return (
            <div>
                {this.renderTab()}
                {this.renderTabContent()}
            </div>
        )
    }
});

module.exports = View;
