/** @jsx React.DOM */
var Sp = require('../../widgets/Sp.jsx');
var Specification = require('../../widgets/addGoodModule/specification.jsx');
var EditCommentTags = require('../../widgets/comment/editTags.jsx');

var Default = React.createClass({
    getInitialState: function () {
        return {
            nameLength: 30,
            nameHelpBlockStyle: {},
            descLength: 100,
            descHelpBlockStyle: {},
            parameter: null,
            goodData: {
                good_units: 0,
                goods_type: this.props.data.goods.goods_type,
                production_type: 0
            }
        }
    },
    componentDidMount: function () {
        this.setState({
            goodData: {
                goods_type: this.props.data.goods.goods_type
            }
        })
    },
    changeNameLength: function (e) {
        var target = e.target,
            value = target.value,
            len = 30 - value.length;

        if (len <= 0) {
            this.setState({
                nameLength: len,
                nameHelpBlockStyle: {
                    color: "red"
                }
            });
        } else {
            this.setState({
                nameLength: len,
                nameHelpBlockStyle: {}
            });
        }

        this.props.trigger("ChangeTitle",value);

    },
    changeDescLength: function (e) {
        var target = e.target,
            value = target.value,
            len = 100 - value.length;

        if (len <= 0) {
            this.setState({
                descLength: len,
                descHelpBlockStyle: {
                    color: "red"
                }
            });
        } else {
            this.setState({
                descLength: len,
                descHelpBlockStyle: {}
            });
        }

        this.props.trigger("ChangeSubTitle",value);

    },
    onChangeUnit: function(e){
        var goodData = this.state.goodData;
        goodData.good_units = e.target.value;
        this.setState(goodData);
    },
    onChangeGoodType: function(e){
        var goodData = this.state.goodData;
        goodData.goods_type = +e.target.value;
        this.setState({
            goodData: goodData
        });
    },
    onChangeProductionType: function(e){
        var goodData = this.state.goodData;
        goodData.production_type = +e.target.value;
        this.setState({
            goodData: goodData
        });
    },
    onChangeCycle: function(e){
        var target = e.target,
            value = target.value;
        this.props.trigger("ChangeCycle",value);
    },
    onChangeKeyWord: function(e){
        var target = e.target,
            value = target.value;
        this.props.trigger("ChangeKeyWord",value);
    },
    onSubmitGood: function () {

        var self = this;

        var goodData = {
            id: this.props.data.goods["id"],
            title: this.refs['good_title'].getInputDOMNode().value,
            goods_type: this.state.goodData.goods_type,
            subtitle: this.refs['good_subtitle'].getInputDOMNode().value,
            unit: this.state.goodData.good_units,
            production_type: this.state.goodData.production_type,
            production_cycle: this.refs['good_cycle'].getInputDOMNode().value, // 生产周期
            keywords: this.refs['good_keywords'].getInputDOMNode().value
        };

        var specification = [];

        $(".specification_item").each(function () {
            var val = $(this).val(),
                id = $(this).data("id");
            specification.push([id,val]);
        });

        if(!goodData.title)
            alert('标题不能为空');
        else
            this.props.trigger("SubmitGood",goodData,specification);

    },
    errorHander: function(res){
        var self = this;
        switch (res.code){
            case 20002:
                $.map(res.data.errors, function(error,key){
                    console.log(key+":"+error[0])
                });
                break;
            default:
                console.log("未知错误");
        }
    },
    onAddParamet: function(e){
        e.preventDefault();
        e.stopPropagation();
        alert('此功能暂时还没有时间做');
    },
    updateCategoryId: function(id){
        this.props.trigger("UpdateCategoryId",id);
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            goodData: {
                good_units: nextProps.data.goods.unit,
                goods_type: nextProps.data.goods.goods_type,
                production_type: nextProps.data.goods.production_type
            }
        })
    },
    render: function () {
        var self = this;
        var classes = React.addons.classSet({
            'pt20': true
        });

        var defalueUnit = '';
        var unitNode = Object.keys(self.props.units).map(function(key){
            if(key==self.props.data.goods.unit){
                defalueUnit = self.props.units[key];
            }
            return (
                <option key={key} value={key}>{self.props.units[key]}</option>
            )
        });
        
        var unitNodes = (
             <Select className='inline' value={this.state.goodData.good_units} onChange={this.onChangeUnit} ref="good_units">
             {unitNode}
             </Select>
        )

        return (
            <div className={classes}>
                <FormGroup>
                    <Label control sm={2} >
                        <BLabel bsStyle='primary'>基本信息：</BLabel>{' '}</Label>
                    <Col sm={10}>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品名称</Label>
                    <Col sm={10}>
                        <Input type='text' ref="good_title" onChange={this.changeNameLength} data-maxlength="30" value={self.props.data.goods.title} placeholder='请输入商品名称' />
                        <HelpBlock className='inline' style={this.state.nameHelpBlockStyle}>还能输入{this.state.nameLength}字</HelpBlock>
                        <HelpBlock className='error' ref="title_error"></HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >副标题</Label>
                    <Col sm={10}>
                        <Textarea rows='2' ref="good_subtitle" value={self.props.data.goods.subtitle} onChange={this.changeDescLength} placeholder='请输入副标题' />
                        <HelpBlock className='inline' style={this.state.descHelpBlockStyle}>还能输入{this.state.descLength}字</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品分类</Label>
                    <Col sm={10}>
                        {self.props.data.goods.name}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品区分</Label>
                    <Col sm={10} style={{marginTop:'5'}}>

                        <Input type='radio' name="good_type" value='0' checked={+self.state.goodData.goods_type==0?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>普通商品</Label>

                        <Input type='radio' name="good_type" value='1' checked={+self.state.goodData.goods_type==1?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>积分商品</Label>

                        <Input type='radio' name="good_type" value='2' checked={+self.state.goodData.goods_type==2?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>虚拟商品</Label>

                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >数量单位</Label>
                    <Col sm={10}>
                        当前为{defalueUnit}；你也可以重新选择
                        {unitNodes}
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品类型</Label>
                    <Col sm={10}>
                        <Select className='inline' value={self.state.goodData.production_type} onChange={this.onChangeProductionType} ref="production_type">
                            <option value="0">家私</option>
                            <option value="1">家饰</option>
                        </Select>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >生产周期</Label>
                    <Col sm={10}>
                        <Input type='text' ref="good_cycle" onChange={self.onChangeCycle} value={self.props.data.goods.production_cycle} placeholder='' className='inline' />
                        <HelpBlock className='inline'>天</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >关键字</Label>
                    <Col sm={10}>
                        <Input type='text' ref="good_keywords"  onChange={self.onChangeKeyWord} value={self.props.data.goods.keywords} placeholder='' className='inline' />
                        <HelpBlock className='inline'>多个关键字用英文逗号分隔</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >
                        <BLabel bsStyle='primary'>商品规格：</BLabel>{' '}</Label>
                    <Col sm={10}>

                    </Col>
                </FormGroup>
                <Specification trigger={self.props.trigger} data={self.props.data.specification}  activeSkuSpecification={self.props.activeSkuSpecification} templateType={1}></Specification>
                <EditCommentTags goodId={self.props.goodId}></EditCommentTags>
                <FormGroup>
                    <Label control sm={2} ></Label>
                    <Col sm={10} style={{textAlign:"right"}}>
                        <Button lg bsStyle='primary' onClick={this.onSubmitGood}>保存</Button>
                    </Col>
                </FormGroup>
            </div>
        )
    }
});

module.exports = Default;