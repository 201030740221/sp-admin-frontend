/** @jsx React.DOM */

var Specification = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },
    getDefaultProps: function(){
      return {
          data:[]
      }
    },
    render: function () {
        var self = this;
        var newSpecification = self.props.data.filter(function (item) {
            return self.props.templateType ? parseInt(item['template_type']) : !parseInt(item['template_type']);
        });

        var parameter = $.map(newSpecification, function (item, key) {
            var selected = 0;
            var custom_index = 0;
            // 获取选中ID
            item.value.map(function (value, index) {
                if (value.id == item['current_value']) {
                    //self.props.activeSkuSpecification[index] = value.attribute_value;
                    selected = value.id;
                    custom_index = key;
                }
            });

            var notSelectCustom = React.addons.classSet({
                'specification_item': true,
                'inline': true,
                'hidden': self.props.activeSkuSpecification[key]["active"]
            });

            var showCustom = React.addons.classSet({
                'inline': true,
                'hidden': !self.props.activeSkuSpecification[key]["active"]
            });

            var notCustom = React.addons.classSet({
                'inline': true,
                'hidden': self.props.activeSkuSpecification[key]["active"]
            });

            return (
                <FormGroup key={item.id}>
                    <Label control sm={3} >{item.name}</Label>
                    <Col sm={9}>
                        <Select data-id={item.id} onChange={self.props.trigger.bind(null, "CheckCustomValue", key)} defaultValue={selected} className="specification_item" className={notSelectCustom}>
                            <option value="0" data-template="1">请选择</option>
                            {item.value.map(function (value) {
                                if(parseInt(value['template_type'])!=0){
                                    return (
                                        <option key={value.id} value={value.id} data-template={value['template_type']} >{value.attribute_value}</option>
                                    )
                                }
                            })}
                        </Select>
                        <Input type='text' className={showCustom} onChange={self.props.trigger.bind(null,"UpdateCustomValue",key)} placeholder='请填写自定义值' value={self.props.activeSkuSpecification[key]["value"]} />
                        <a href="#" onClick={self.props.trigger.bind(null, "SelectCommonValue", key, custom_index)} style={{marginLeft: 10}} className={showCustom}>选择通用规格</a>
                        <a href="#" onClick={self.props.trigger.bind(null, "SelectCustomValue", key)} className={notCustom} style={{marginLeft: 10}}>使用自定义规格</a>
                    </Col>
                </FormGroup>
            );
        });


        return (
            <div className="specification-box">
                {parameter}
            </div>
        );
    }
});

module.exports = Specification;