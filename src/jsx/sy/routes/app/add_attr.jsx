/** @jsx React.DOM */
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var events = require('../../widgets/goodAttrValueModule/events.jsx');

var groupHeader = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    onBack: function () {
        window.history.back(-1);
    },
    render: function () {
        var self = this;
        var doc_title = self.props.type==0?"SKU属性":"规格";
        var selectNode = function(){
            if(self.props.type==0){
                return ''
            }else{
                return (
                    <SelectionModal trigger={self.props.trigger} data={self.props.data}></SelectionModal>
                )
            }
        };
        return (
            <Grid>
                <Row className='hidden-print' style={{marginBottom: 20}}>
                    <Col xs={8}>
                        <h4>
                            {doc_title}管理
                        </h4>
                    </Col>
                    <Col xs={4} style={{paddingTop: 0}}>
                        <ButtonToolbar className='inbox-toolbar fr'>
                            <ButtonGroup style={{float: "left", marginRight: 10}}>
                                <Button bsStyle='blue' onClick={this.onBack}>
                                    返回上一级
                                </Button>
                                <Button bsStyle='blue' onClick={this.props.trigger.bind(null,"AddAttr")}>
                                    新建{doc_title}
                                </Button>
                            </ButtonGroup>
                            {selectNode()}
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

var SelectionModal = React.createClass({
    getInitialState: function () {
        return {
            active: false
        }
    },
    onUpSort: function(id,index,e){
        e.stopPropagation();
        e.preventDefault();

        var order = [];
        this.props.data.map(function(item){
            order.push(item.id);
        });

        var ids = Sp.sortArray(order,index,"up");
        this.props.trigger("UpdateSectionSort", ids);

    },
    onDownSort: function(id,index,e){
        e.stopPropagation();
        e.preventDefault();

        var order = [];
        this.props.data.map(function(item){
            order.push(item.id);
        });

        var ids = Sp.sortArray(order,index,"down");
        this.props.trigger("UpdateSectionSort", ids);

    },
    showModal: function () {
        this.setState({
            active: true
        });
    },
    hideModal: function () {
        this.setState({
            active: false
        });
    },
    render: function () {
        var classes = React.addons.classSet({
            'valueModelShow': this.state.active
        });
        var self = this;
        var editAttrNode = $.map(this.props.data, function (item, index) {
            return (
                <tr key={item.id}>
                    <td winth="*">
                        <Input type='text' className='inline' onBlur={self.props.trigger.bind(null,"UpdateSectionName",item.id)} defaultValue={item.name} placeholder='请输入小节' />
                    </td>
                    <td className='text-center'>
                        <a href="#" style={{marginRight: 10}} onClick={self.props.trigger.bind(null, "RemoveSection", item.id)} >删除</a>
                        <a href="#" style={{marginRight: 10}} onClick={self.onUpSort.bind(null,item.id,index)}>上移</a>
                        <a href="#" onClick={self.onDownSort.bind(null,item.id,index)}>下移</a>
                    </td>
                </tr>
            );
        });

        return (
            <div className="valueModal" style={{float: "left"}}>
                <Button bsStyle='blue' onClick={self.showModal}>
                    小节管理
                </Button>
                <Modal className={classes}>
                    <ModalHeader>
                        <Button onClick={self.hideModal} close />
                        <h4 className='modal-title'>小节编辑</h4>
                    </ModalHeader>
                    <ModalBody>
                        <Table className='editAttrModal' cellSpacing='0' width='100%'>
                            <thead>
                                <tr>
                                    <th style={{width: 150}}>名称</th>
                                    <th style={{width: 180}} className='text-center'>
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#" onClick={self.props.trigger.bind(null,"AddSection")}>添加小节</a>
                                    </td>
                                </tr>
                                {editAttrNode}
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button outlined bsStyle='danger' onClick={self.hideModal}>关闭</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
});

var ValueModal = React.createClass({
    getInitialState: function () {
        return {
            active: false
        }
    },
    showModal: function () {
        this.setState({
            active: true
        });
    },
    hideModal: function () {
        this.setState({
            active: false
        });
    },
    render: function () {
        var classes = React.addons.classSet({
            'valueModelShow': this.state.active
        });
        var self = this;

        var typeTh = function(){
            if(self.props.type!=0){
                return (
                    <th width='*' className='text-center'>是否通用</th>
                )
            }else{
                return '';
            }
        };

        var editAttrNode = $.map(this.props.data.value, function (item) {
            var typeTd = function(){
              if(self.props.type!=0){
                  var selected = item.template_type;
                  return (
                      <td style={{width: 150}}>
                          <Select defaultValue={selected} onChange={self.props.trigger.bind(null,"UpdateAttrTemplateType", item.id,item.attribute_value)}>
                              <option value="0">否</option>
                              <option value="1">是</option>
                          </Select>
                      </td>
                  )
              }else{
                  return ''
              }
            };
            return (
                <tr key={item.id}>
                    <td winth="*">
                        <Input type='text' className='inline' onBlur={self.props.trigger.bind(null, "UpdateAttrValue", item.id)} defaultValue={item.attribute_value} placeholder='请输入值' />
                    </td>
                    {typeTd()}
                    <td className='text-center'>
                        <a href="#" onClick={self.props.trigger.bind(null, "RemoveAttrValue", item.id)} >删除</a>
                    </td>
                </tr>
            );
        });

        return (
            <div className="valueModal">
                <Button onClick={self.showModal}>编辑值</Button>
                <Modal className={'in '+classes} style={{marginTop:'-74'}}>
                    <ModalHeader>
                        <Button onClick={self.hideModal} close />
                        <h4 className='modal-title'>值编辑</h4>
                    </ModalHeader>
                    <ModalBody>
                        <Table className='editAttrModal' cellSpacing='0' width='100%'>
                            <thead>
                                <tr>
                                    <th style={{width: 150}}>名称</th>
                                    {typeTh()}
                                    <th style={{width: 180}} className='text-center'>
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#" onClick={self.props.trigger.bind(null, "AddAttrValue", self.props.data.id, 0)}>添加值</a>
                                    </td>
                                </tr>
                                {editAttrNode}
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button outlined bsStyle='danger' onClick={self.hideModal}>关闭</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
});

var ListNode = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    onUpSort: function(index,e){
        e.stopPropagation();
        e.preventDefault();

        var order = [];
        this.props.parentData.map(function(item){
            order.push(item['goods_attribute_id']);
        });

        var ids = Sp.sortArray(order,index,"up");
        this.props.trigger("UpdateAttrSort", ids);

    },
    onDownSort: function(index,e){
        e.stopPropagation();
        e.preventDefault();

        var order = [];
        this.props.parentData.map(function(item){
            order.push(item['goods_attribute_id']);
        });

        var ids = Sp.sortArray(order,index,"down");
        this.props.trigger("UpdateAttrSort", ids);

    },
    render: function () {
        var self = this;
        var attribute_values = self.props.data.value.map(function (val, index) {
            return (
                <span key={index} style={{display: 'inline-block',marginRight: 10}}>{val.attribute_value}</span>
            )
        });

        var setionNode = function () {
            if(self.props.type!=0){
                var selected = 0;
                var selectedName = '未选择小节';
                var optionNode = self.props.sectionList.map(function (item) {
                    if(self.props.data["section_attribute"] && self.props.data["section_attribute"]["goods_attribute_section_id"]==item.id) {
                        selected = item.id;
                        selectedName = item.name;
                    }
                    return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    );
                });
                return (
                    <div className='text-center'>
                        <Select defaultValue={selected} onChange={self.props.trigger.bind(null,"BindSection",self.props.data.id)}>
                            <option value="0">未选择</option>
                            {optionNode}
                        </Select>
                        <span>当前：{selectedName}</span>
                    </div>
                )
            }else{
                return '';
            }
        };

        var typeIsChangeTd = function(){
            if(self.props.type!=0){
                console.log(self.props.data);
                var selected = self.props.data['template_type'];
                return (
                    <div style={{width: 150}}>
                        <Select defaultValue={selected} onChange={self.props.trigger.bind(null,"UpdateAttrChangeType", self.props.data.id,self.props.data.name)}>
                            <option value="0">可变规格</option>
                            <option value="1">固定规格</option>
                        </Select>
                    </div>
                )
            }else{
                return ''
            }
        };

        return (
            <tr key={self.props.data.id}>
                <td style={{width: 50, display: "none"}}>
                    <Checkbox ref='check' style={{marginBottom: 0}}></Checkbox>
                </td>
                <td >
                    <Input type='text' className='inline' onBlur={self.props.trigger.bind(null, "UpdateAttr",self.props.data.id)} defaultValue={self.props.data.name} placeholder='请输入名称' />
                </td>
                <td className='text-center'>{attribute_values}
                    <ValueModal type={self.props.type} trigger={self.props.trigger} data={self.props.data}></ValueModal>
                </td>
                <td>
                    {typeIsChangeTd()}
                    {setionNode()}
                </td>
                <td className='text-center' style={{width: 140}} >
                    <a href="#" style={{marginRight: 10}} onClick={self.onUpSort.bind(null,self.props.index)}>上移</a>
                    <a href="#" style={{marginRight: 10}} onClick={self.onDownSort.bind(null,self.props.index)}>下移</a>
                    <a href="#" onClick={self.props.trigger.bind(null, "RemoveAttr",self.props.data.id)} >删除</a>
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
            lastPage: 1,
            queryId: null,
            sectionList: []
        }
    },
    getDefaultProps: function () {
        return {
            data: []
        }
    },
    componentDidMount: function () {
        var self = this;
        self.setState({
            queryId: self.props.queryId,
            type: self.props.queryType
        }, function () {
            // 获取属性列表
            self.trigger("Load");
            // 获取小组列表
            self.trigger("GetSectionList")
        });

    },
    onPrevPage: function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger("PrevPage");
    },
    onNextPage: function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger("NextPage");
    },
    render: function () {
        var self = this;
        // 列表
        var listNodes = self.state.data.map(function (data, i) {
            return (
                <ListNode
                    key={data.attribute.id}
                    index = {i}
                    type = {self.state.type}
                    data={data.attribute}
                    parentData = {self.state.data}
                    sectionList={self.state.sectionList}
                    trigger={self.trigger}
                ></ListNode>
            );
        });

        // 页码
        var pager = (
            <Pager>
                <Page previous href='#' onClick={this.onPrevPage}>Previous</Page>{' '}
                <Page next href='#' onClick={this.onNextPage}>Next</Page>
            </Pager>
        );

        var bindSelect_th = function(){
          if(self.state.type!=0){
              return (
                  <th style={{width: 150}} className='text-center'>绑定小节</th>
              )
          }else{
              return '';
          }
        };

        var isChange_th = function(){
            if(self.state.type!=0){
                return (
                    <th style={{width: 150}} className='text-center'>可变规格</th>
                )
            }else{
                return '';
            }
        };

        return (
            <Container id='body'>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelBody>
                                        <groupHeader data={self.state.sectionList} type={self.state.type} trigger={self.trigger} ></groupHeader>
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
                                                                <th width='*' className='text-center'>值管理</th>
                                                                <th style={{width: 150}}>是否显示缩略图</th>
                                                                {bindSelect_th()}
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
                <Body queryId={this.props.id} queryType={this.props.type}>
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
