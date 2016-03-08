/** @jsx React.DOM */
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var events = require('../../widgets/goodAttrModule/events.jsx');

var groupHeader = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    render: function () {
        var self = this;
        // 分组切换样式
        var skuGroupClasses = React.addons.classSet({
            'font-normal': true,
            'color_gray': true,
            'mr20': true,
            'attr_active': parseInt(this.props.type)==0
        });
        var standardGroupClasses = React.addons.classSet({
            'font-normal': true,
            'color_gray': true,
            'mr20': true,
            'attr_active': parseInt(this.props.type)==1
        });
        return (
            <Grid>
                <Row className='hidden-print' style={{marginBottom: 20}}>
                    <Col xs={8}>
                        <h4>
                            <a className={skuGroupClasses} onClick={self.props.trigger.bind(null,"ChangeType", 0)} href="#">SKU属性组</a>
                            <a className={standardGroupClasses} onClick={self.props.trigger.bind(null,"ChangeType", 1)} href="#">规格组</a>
                        </h4>
                    </Col>
                    <Col xs={4} style={{paddingTop: 0}}>
                        <ButtonToolbar className='inbox-toolbar fr'>
                            <ButtonGroup>
                                <Button bsStyle='blue' onClick={self.props.trigger.bind(null,"AddGroup")}>
                                    <Icon glyph='icon-ikons-shopping-cart-add'/>
                                    新建组
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

var ListNode = React.createClass({
    getInitialState: function(){
        return {
            data: []
        }
    },
    // 进入下一级
    onIntoGroup: function(id,e){
        e.preventDefault();
        e.stopPropagation();
        RRouter.routing.navigate('/app/attr/type/'+this.props.data.type+'/group/'+id);
    },
    render: function(){
        var self = this;
        return (
            <tr>
                <td style={{width: 50, display: "none"}}>
                    <Checkbox ref='check' style={{marginBottom: 0}}></Checkbox>
                </td>
                <td >
                    <Input type='text' className='inline' onBlur={self.props.trigger.bind(null,"UpdateGroup",self.props.data.id)} defaultValue={self.props.data.name} placeholder='请输入属性名称' />
                </td>
                <td className='text-center'>
                    <a className="sy_action_icon rubix-icon icon-fontello-cog" href="#" onClick={self.onIntoGroup.bind(null,self.props.data.id)} >查看下一级</a>
                </td>
                <td className='text-center'>
                    <a className="sy_action_icon rubix-icon icon-fontello-cog" href="#" onClick={self.props.trigger.bind(null,"RemoveGroup",self.props.data.id)} >删除</a>
                </td>
            </tr>
        )
    }
});

var Body = React.createClass({
    mixins: [Sp.eventMixin],
    events: events,
    getInitialState: function () {
        return {
            data: [],
            type: 0,
            size: 10,
            currentPage: 1,
            lastPage: 1
        }
    },
    getDefaultProps: function () {
        return {
            data:[]
        }
    },
    componentDidMount: function () {
        var self = this;
        self.trigger("Load");
    },
    // 上一页
    onPrevPage: function () {
        if(this.state.currentPage > 1){
            var page = this.state.currentPage - 1;
            this.trigger("Load",page);
        }else{
            Sp.message('亲，已经是第一页了！');
        }

    },
    // 下一页
    onNextPage: function () {
        if(this.state.currentPage < this.state.lastPage){
            var page = this.state.currentPage + 1;
            this.trigger("Load",page);
        }else{
            Sp.message('亲，已经是最后一页了！');
        }
    },
    render: function () {
        var self = this;
        // 列表
        var listNodes = self.state.data.map(function (data, i) {
            return (
                <ListNode
                    key={data.id}
                    data={data}
                    trigger={self.trigger}
                ></ListNode>
            );
        });

        // 页码
        var pager = ''
        if (this.state.currentPage <= this.state.lastPage) {
            pager = (
                <Pager>
                    <Page previous href='#' onClick={this.onPrevPage}>Previous</Page>{' '}
                    <Page next href='#' onClick={this.onNextPage}>Next</Page>
                </Pager>
            );
        }
        

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <groupHeader type={self.state.type} trigger={self.trigger} ></groupHeader>
                                        <hr style={{marginBottom: 20, marginTop: 0}}/>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <Table className='display' cellSpacing='0' width='100%'>
                                                        <thead>
                                                            <tr>
                                                                <th className='text-left check-td' style={{
                                                                    width: 50,
                                                                    display: "none"
                                                                }}>
                                                                    <Checkbox ref='check'></Checkbox>
                                                                </th>
                                                                <th style={{width: 150}}>名称</th>
                                                                <th width='*' className='text-center'></th>
                                                                <th style={{width: 180}} className='text-center'>操作</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {listNodes}
                                                        </tbody>
                                                    </Table>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <div className="pagers">
                                                                {pager}
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                            </Row>
                                        </Grid>
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

var classSet = React.addons.classSet;
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
                <Body queryId={this.props.id}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;