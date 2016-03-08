/** @jsx React.DOM */
/*会员管理*/

var Fluxxor = require("fluxxor");

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

//Api
var Api = require('../../modules/api/api.jsx');
//
var ModalMixins = require('../../widgets/modal/confirmModal.jsx');
//
var roleDetailStore = require("../../modules/stores/roleDetailStore.jsx");
var roleDetailAction = require('../../modules/actions/roleDetailAction.jsx');


var stores = {
    roleDetailStore: new roleDetailStore()
};

var flux = new Fluxxor.Flux( stores, roleDetailAction);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;


//
var classSet = React.addons.classSet;


var HandleMixins = {
    handleChange: function(e) {
        var _this = this;
        var el = e.target;
        var name = el.name;
        var value = el.value;
        var postData = {
            type: name
        };
        postData[name] = value;
        flux.actions.update(postData);
    },
    handleCheckboxChange: function(e){
        var el = e.target;
        var value = el.checked ? 1:0;
        console.log(el);
        switch (el.name){
            case 'group':
                flux.actions.update({
                    type: 'updateGroup',
                    group:{
                        id: this.list.id,
                        value: value
                    }
                });
                break;
            case 'source':
                flux.actions.update({
                    type: 'updateSource',
                    source:{
                        group_id: this.item.group_id,
                        id: this.item.id,
                        value: value
                    }
                });
                if(!value && typeof this.props.callback === 'function'){
                    this.props.callback();
                }
                break;
            default :
                break;
        }
    },
    handleDelete: function () {
        var _this = this;
        var user = this.user;
        var postData = {
            id: user.id
        };
        ModalManager.create(this.showModal('您确定要删除:['+user.name+']?','操作提示', function(){
            flux.actions.removeUser(postData);
        }));
    },
    handleUpdate: function () {
        console.log('ID',this.state.role.id);
        console.log(this.role);
        var id = this.state.role.id;
        var role = this.role;
        var resource_ids = [];
        var error = {};
        role.resource_group.map(function (item, i) {
            item = item || {};
            item.resources = item.resources || [];
            return item.resources.map(function (item1, i) {
                if(item1.role_has_privilege){
                    resource_ids.push(item1.id);
                }
            });
        });
        console.log(resource_ids);
        if(!role.name.length){
            error.name = '角色名称不能为空';
            role.error = error;
            flux.actions.update({
                type: 'update',
                role: role
            });
        }
        if(id>0){
            console.log('save()');
            flux.actions.update({
                type: 'save',
                role:{
                    id: id,
                    name: role.name,
                    remark: role.remark,
                    resource_ids: JSON.stringify(resource_ids)
                }
            });
        }else{
            console.log('create()');
            flux.actions.update({
                type: 'create',
                role:{
                    name: role.name,
                    remark: role.remark,
                    resource_ids: JSON.stringify(resource_ids)
                }
            });
        }
    }
};

var List = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("roleDetailStore"), HandleMixins, ModalMixins],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            roleDetailStore: flux.store("roleDetailStore").getState()
        };
    },

    handleCheck: function(){
        var el = this.refs.group;
        el.setChecked(0);
    },
    render: function(){
        var _this = this;
        var item = this.list = this.props.data;
        var resource = item.resources || [];
        return (
            <FormGroup className="clearfix">
                <Col sm={3}>
                    <Checkbox
                        ref='group'
                        onChange={this.handleCheckboxChange}
                        value={'option'+item.id}
                        name='group'>
                         {item.name}
                    </Checkbox>
                </Col>
                <Col sm={9}>
                    <div className="clearfix">
                    {
                        resource.map(function(item, i){
                            return (
                                <Item
                                    key={i}
                                    data={item}
                                    callback={_this.handleCheck}
                                >
                                </Item>
                            )
                        })
                    }
                    </div>
                </Col>
            </FormGroup>
        )
    }
});
var Item = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("roleDetailStore"), HandleMixins, ModalMixins],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            roleDetailStore: flux.store("roleDetailStore").getState()
        };
    },

    render: function(){
        var item = this.item = this.props.data;
        return (
            <Checkbox
                ref='source'
                checked={!!item.role_has_privilege}
                onChange={this.handleCheckboxChange}
                value={'option'+item.id}
                name='source'>
              {item.name}
            </Checkbox>
        );
    }
});


var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("roleDetailStore"), HandleMixins, ModalMixins],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            roleDetailStore: flux.store("roleDetailStore").getState()
        };
    },
    getInitialState: function() {
        console.log('getInitialState')
        var id = this.props.id;
        console.log('id',id);
        Sp.message('正在获取数据');
        if(isNaN(id) || id < 1){
            id = -1;
            console.log('go');
            flux.actions.update({
                type: 'init',
                role: {
                    name: '',
                    remark: ''
                }
            });
        }else{
            flux.actions.getRole({
                id: id
            });
        }
        console.log('id',id);
        return {
            role: {
                id: id
            }
        }
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps',nextProps);

        Sp.message('正在获取数据');

        var id = nextProps.id;
        var oldId = this.state.role.id;
        if(isNaN(id) || id < 1){
            id = -1;
            console.log('go');
            flux.actions.update({
                type: 'init',
                role: {
                    name: '',
                    remark: ''
                }
            });
        }else{
            flux.actions.getRole({
                id: id
            });
        }
        console.log('id',id);
        this.oldId = oldId;
        this.setState({
            role: {
                id: id
            }
        });
    },
    render: function() {
        console.log('render')
        var role = this.role = this.state.roleDetailStore.role;
        var resource_group = role.resource_group || [];
        var _this = this;

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <div>
                                            <Grid>
                                                <Row className='hidden-print' style={{marginBottom:20}}>
                                                    <Col xs={6} style={{paddingTop: 0}}>
                                                        <a href={'#/app/roleList'}>
                                                            <BLabel bsStyle='info'>返回角色管理列表</BLabel>
                                                        </a>
                                                    </Col>
                                                    <Col xs={6} style={{paddingTop: 0}}>

                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12}>
                                                        <Form horizontal>
                                                            <FormGroup>
                                                                <Label control sm={3} htmlFor='roleName'>角色名称</Label>
                                                                <Col sm={9}>
                                                                    <Input
                                                                        inline
                                                                        value={role.name}
                                                                        type='text'
                                                                        id='roleName'
                                                                        name='name'
                                                                        placeholder='角色名称'
                                                                        onChange={this.handleChange}/>
                                                                    <BLabel bsStyle='danger'>{role.error ? role.error.name : ''}</BLabel>

                                                                </Col>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label control sm={3} htmlFor='roleRemark'>角色描述</Label>
                                                                <Col sm={9}>
                                                                    <Textarea
                                                                        value={role.remark}
                                                                        id='roleRemark'
                                                                        name='remark'
                                                                        placeholder='角色描述'
                                                                        rows='3'
                                                                        onChange={this.handleChange}/>
                                                                    <HelpBlock></HelpBlock>
                                                                </Col>
                                                            </FormGroup>
                                                        </Form>

                                                        <Grid>
                                                            <Row>
                                                                <Col xs={12} className='text-center' collapseLeft collapseRight>
                                                                    <Button
                                                                        onClick={this.handleUpdate}
                                                                        bsStyle='darkgreen45'
                                                                    >{this.state.role.id > 0 ? '保存' : '创建'}</Button>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                        <hr/>


                                                    {
                                                        resource_group.map(function(item, i){
                                                            return (
                                                                <List
                                                                    key={i}
                                                                    data={item}
                                                                >
                                                                </List>
                                                            )
                                                        })
                                                    }
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <hr style={{marginBottom: 20,marginTop:0}}/>

                                            <Grid>
                                                <Row>
                                                    <Col xs={12} className='text-center mt20 mb20' collapseLeft collapseRight>
                                                        <Button
                                                            onClick={this.handleUpdate}
                                                            bsStyle='darkgreen45'
                                                        >{this.state.role.id > 0 ? '保存' : '创建'}</Button>
                                                    </Col>
                                                </Row>
                                            </Grid>
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
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body flux = {flux} id={this.props.id}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
