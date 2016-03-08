'use strict';

import {
  Table,
  Radio
} from 'antd';
const RadioGroup = Radio.Group;
const T = React.PropTypes;

import BaseForm from 'modules/page-components/base-form';

const RG = React.createClass({
  propsTypes: {
    onChange: T.func,
    name: T.string
  },
  getDefaultProps: function () {
    return {onChange: function () {}, name: ''};
  },
  onChange: function (e) {
    this.props.onChange(e, this.props.name);
  },
  render: function () {
    return (<RadioGroup {...this.props} onChange={this.onChange}>
      {this.props.children}</RadioGroup>);
  }
});

const DTable = React.createClass({
  onChange: function (e, key) {
    this.props.onChange(this.props.index, key, e.target.value);
  },

  render: function () {
    var _this = this;

    if (!_this.props.value)
      return null;

    var col = [
      {
        title: '维度',
        dataIndex: 'dimension'
      }, {
        title: '颜色区间',
        dataIndex: 'range',
        render: function (text) {
          return (
            <RG onChange={_this.onChange} name={text} value={_this.props.value[text]}>
              <Radio value="1">
                <span className="label-color" style={{
                  backgroundColor: '#5FBC29'
                }}>&nbsp;</span>
              </Radio>
              <Radio value="2">
                <span className="label-color" style={{
                  backgroundColor: '#FDE023'
                }}>&nbsp;</span>
              </Radio>
              <Radio value="3">
                <span className="label-color" style={{
                  backgroundColor: '#E01515'
                }}>&nbsp;</span>
              </Radio>
            </RG>
          );
        }
      }
    ];

    var data = this.props.data.map((item, index) => {
      return {key: index.toString(), dimension: item.title, range: item.key};
    });

    return (
      <div className="col-16 col-offset-4 u-mb-20">
        <Table columns={col} dataSource={data} pagination={false}/>
      </div>
    );
  }
});

const TheForm = React.createClass({
  render: function () {
    var _this = this;

    let data = [
      {
        title: '基本信息',
        formData: [
          {
            type: 'input',
            title: '供应商编号',
            key: 'no',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '供应商名称',
            key: 'name',
            defaultValue: '',
            placeholder: '请输入供应商名称，100字节内',
            validator: {
              required: true,
              maxLength: 100,
              message: {
                required: '必填，100字内'
              }
            }
          }, {
            type: 'select',
            title: '供应商类型',
            key: 'type',
            defaultValue: '1',
            values: [
              {
                name: '制造商',
                key: '1',
                disabled: false
              }, {
                name: '贸易公司',
                key: '2',
                disabled: false
              }
            ]
          }, {
            type: 'input',
            title: '工厂全称',
            key: 'factory_name',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              maxLength: 100,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '工厂编号',
            key: 'factory_no',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'radio',
            title: '是否品牌',
            key: 'is_brand',
            defaultValue: '1',
            values: [
              {
                name: '否',
                key: '0',
                disabled: false
              }, {
                name: '是',
                key: '1',
                disabled: false
              }
            ]
          }, {
            type: 'radio',
            title: '是否通过初审',
            key: 'first_audit',
            defaultValue: '0',
            values: [
              {
                name: '否',
                key: '0',
                disabled: false
              }, {
                name: '是',
                key: '1',
                disabled: false
              }
            ]
          }, {
            type: 'datepicker',
            title: '首次合作时间',
            key: 'cooperation_time',
            defaultValue: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '下一步行动',
            key: 'next_step',
            defaultValue: '',
            placeholder: ''
          }, {
            type: 'input',
            title: '工厂地址',
            key: 'factory_address',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '税率',
            key: 'tax_rate',
            defaultValue: '',
            placeholder: '',
            validator: {
              number: true,
              message: {
                number: '数字'
              }
            }
          }, {
            type: 'input',
            title: '斯品负责人',
            key: 'principal',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'textarea',
            title: '备注',
            key: 'note',
            defaultValue: '',
            placeholder: ''
          }
        ]
      }, {
        title: '供应商联系方式',
        formData: [
          {
            type: 'input',
            title: '姓名',
            key: 'supplier_contact_name',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '职位',
            key: 'supplier_contact_job',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '电子邮箱',
            key: 'supplier_contact_email',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              email: true,
              message: {
                required: '必填',
                email: '邮箱格式'
              }
            }
          }, {
            type: 'input',
            title: '联系电话',
            key: 'supplier_contact_tel',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }
        ]
      }, {
        title: '工厂联系方式',
        formData: [
          {
            type: 'input',
            title: '姓名',
            key: 'factory_contact_name',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '职位',
            key: 'factory_contact_job',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }, {
            type: 'input',
            title: '电子邮箱',
            key: 'factory_contact_email',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              email: true,
              message: {
                required: '必填',
                email: '邮箱格式'
              }
            }
          }, {
            type: 'input',
            title: '联系电话',
            key: 'factory_contact_tel',
            defaultValue: '',
            placeholder: '',
            validator: {
              required: true,
              message: {
                required: '必填'
              }
            }
          }
        ]
      }, {
        title: '综合评估',
        sectionType: 'custom',
        formData: [
          {
            title: '技术/质量',
            key: 'technique',
            defaultValue: '1'
          }, {
            title: '交期',
            key: 'lead_time',
            defaultValue: '1'
          }, {
            title: '配合度',
            key: 'cooperation',
            defaultValue: '1'
          }, {
            title: '综合',
            key: 'comprehensive',
            defaultValue: '1'
          }
        ],
        render: function () {
          return (<DTable/>);
        }
      }
    ];

    let propsData = this.props.data;

    if (propsData) {
      data.map((item) => {
        item.formData.map((item2) => {
          var val = propsData[item2.key];
          item2.defaultValue = typeof val === 'number'
            ? val.toString()
            : val;
        });
      });
    }

    let actionButtons = [
      {
        title: '保 存',
        onClick: function (validator) {
          validator(function (isValid, validData) {
            if (!isValid) {
              SP.message.error('填写有误！');
            } else {
              _this.props.onSubmit(validData);
            }
          });
        }
      }
    ];
    // 属性改变导致的二次渲染，其中radio，select类型的选中值不会随之改变
    return (<BaseForm data={data} actionButtons={actionButtons}/>);

  }
});

module.exports = TheForm;
