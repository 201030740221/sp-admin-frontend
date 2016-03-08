/** @jsx React.DOM */
var Sp = require('../../widgets/Sp.jsx');
var CategorySelector = require('../../widgets/categorySelector/categorySelector.jsx');
var Specification = require('../../widgets/addGoodModule/specification.jsx');


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
                good_type: 0,
                production_type: 0
            }
        }
    },
    componentDidMount: function () {

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

    },
    onChangeUnit: function(e){
        var goodData = this.state.goodData;
        goodData.good_units = e.target.value;
        this.setState(goodData);
    },
    onChangeGoodType: function(e){
        var goodData = this.state.goodData;
        goodData.good_type = +e.target.value;
        this.setState({
            goodData: goodData
        });
    },
    onChangeProduteType: function(e){
        var goodData = this.state.goodData;
        goodData.production_type = +e.target.value;
        this.setState({
            goodData: goodData
        });
    },
    onSubmitGood: function () {

        var self = this;

        var goodData = {
            title: this.refs['good_title'].getInputDOMNode().value,
            subtitle: this.refs['good_subtitle'].getInputDOMNode().value,
            goods_type: this.state.goodData.good_type,
            unit: this.state.goodData.good_units,
            production_type: this.state.goodData.production_type,
            production_cycle: this.refs['good_cycle'].getInputDOMNode().value, // 生产周期
            keywords: this.refs['good_keywords'].getInputDOMNode().value
        };
        console.log(goodData);
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
    render: function () {
        var self = this;
        var classes = React.addons.classSet({
            'pt20': true
        });

        var unitNode = Object.keys(self.props.units).map(function(key){
            return (
                <option key={key} value={key}>{self.props.units[key]}</option>
            )
        });

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
                        <Input type='text' ref="good_title" onChange={this.changeNameLength} data-maxlength="30" defaultValue={self.props.data.title} placeholder='请输入商品名称' />
                        <HelpBlock className='inline' style={this.state.nameHelpBlockStyle}>还能输入{this.state.nameLength}字</HelpBlock>
                        <HelpBlock className='error' ref="title_error"></HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >副标题</Label>
                    <Col sm={10}>
                        <Textarea rows='2' ref="good_subtitle" defaultValue={self.props.data.subtitle} onChange={this.changeDescLength} placeholder='请输入副标题' />
                        <HelpBlock className='inline' style={this.state.descHelpBlockStyle}>还能输入{this.state.descLength}字</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品分类</Label>
                    <Col sm={10}>
                        <CategorySelector callback = {this.updateCategoryId} ></CategorySelector>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品区分</Label>
                    <Col sm={10} style={{marginTop:'5'}}>

                        <Input type='radio' name="attendance" value='0' checked={self.state.goodData.good_type==0?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>普通商品</Label>

                        <Input type='radio' name="attendance" value='1' checked={self.state.goodData.good_type==1?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>积分商品</Label>

                        <Input type='radio' name="attendance" value='2' checked={self.state.goodData.good_type==2?true:false} className='fl' onChange={this.onChangeGoodType}/>
                        <Label className='fl ml5 mr30'>虚拟商品</Label>

                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >数量单位</Label>
                    <Col sm={10}>
                        <Select className='inline' onChange={this.onChangeUnit} ref="good_units" defaultValue='0'>
                            {unitNode}
                        </Select>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >商品类型</Label>
                    <Col sm={10}>
                        <Select className='inline' onChange={this.onChangeProduteType} defaultValue='0'>
                            <option value="0">家私</option>
                            <option value="1">家饰</option>
                        </Select>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >生产周期</Label>
                    <Col sm={10}>
                        <Input type='text' ref="good_cycle" defaultValue={self.props.data.keywords} placeholder='' className='inline' />
                        <HelpBlock className='inline'>天</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >关键字</Label>
                    <Col sm={10}>
                        <Input type='text' ref="good_keywords" defaultValue={self.props.data.keywords} placeholder='' className='inline' />
                        <HelpBlock className='inline'>多个关键字用英文逗号分隔</HelpBlock>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label control sm={2} >
                        <BLabel bsStyle='primary'>商品规格：</BLabel>{' '}</Label>
                    <Col sm={10}>

                    </Col>
                </FormGroup>
                <Specification trigger={self.props.trigger} data={self.props.parameter}  activeSkuSpecification={self.props.activeSkuSpecification} templateType={1}></Specification>
                <FormGroup>
                    <Label control sm={2} ></Label>
                    <Col sm={10} style={{textAlign:"right"}}>
                        <Button lg bsStyle='primary' onClick={this.onSubmitGood}>下一步</Button>
                    </Col>
                </FormGroup>
            </div>
        )
    }
});

module.exports = Default;