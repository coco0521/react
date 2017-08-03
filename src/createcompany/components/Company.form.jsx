import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal, Checkbox, Select, Radio } from 'antd';
import * as actions from '../actions';
const FormItem = Form.Item;
const Option = Select.Option;
import './Company.form.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.state = {

		}
	}
    //得到企业所属行业列表和企业规模列表
    componentWillMount() {
    	this.props.dispatch(actions.getIndustryList());
    	this.props.dispatch(actions.getScaleList());
    }
	//提交表单function
	handleSubmit(e) {
		const props = this.props;
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				this.props.dispatch(actions.sendEnterpriseRegInfo(values));
				console.log('Received values of form:', values);
			}
		});
	}

	//重置表单
	resetForm() {
		this.props.form.resetFields();
	}

	handleChange(value) {
		console.log(`Selected: ${value}`);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { industryList, scaleList } = this.props;
		const industrylist = [];
		const scalelist = [];
		if(industryList.length > 0) {
			for(let i = 0; i < industryList[0].length; i++) {
				industrylist.push(<Option key={industryList[0][i].id}>{industryList[0][i].name}</Option>);
			}
		}
		if(scaleList.length > 0) {
			for(let j = 0; j < scaleList[0].length; j++) {
				scalelist.push(<Option key={scaleList[0][j].id}>{scaleList[0][j].name}</Option>);
			}
		}
    	return (
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem label="企业名称">
	          {getFieldDecorator('name', {
	            rules: [{
	          	required: true, message: '请输入企业名称！',
	          }],
	      	  })(
	            <Input type="text" placeholder="企业名称" />
	          )}
	        </FormItem>
	        <FormItem label="企业所属行业">
	          {getFieldDecorator('industryId', {
	            rules: [{
	          	required: true, message: '请选择所属行业！',
	          }],
	      	  })(
	            <Select
	            	size="default"
	            	placeholder="选择所属行业"
	            	onChange={this.handleChange.bind(this)}
	            >
	            	{industrylist}
	            </Select>
	          )}
	        </FormItem>
	        <FormItem label="企业规模">
	          {getFieldDecorator('scaleId', {
	            rules: [{
	          	required: true, message: '请选择企业规模！',
	          }],
	      	  })(
	            <Select
	            	size="default"
	            	placeholder="选择企业规模"
	            	onChange={this.handleChange.bind(this)}
	            >
	            	{scalelist}
	            </Select>
	          )}
	        </FormItem>
	        <FormItem label="企业类型">
	          {getFieldDecorator('enterpriseType', {
	            rules: [{
	          	required: true, message: '请选择企业规模！',
	          }],
	      	  })(
	            <Select
	            	size="default"
	            	defaultvalue="group"
	            	onChange={this.handleChange.bind(this)}
	            >
	            	<Option value="group">集团</Option>
	            	<Option value="enterprise">企业</Option>
	            </Select>
	          )}
	        </FormItem>
	        <FormItem label="企业地址">
	          {getFieldDecorator('address')(
	             <Input type="text" placeholder="企业地址" />
	          )}
	        </FormItem>
	        <FormItem label="企业联系人姓名">
	          {getFieldDecorator('contactName')(
	             <Input type="text" placeholder="企业联系人姓名" />
	          )}
	        </FormItem>
	        <FormItem label="企业联系人手机号">
	          {getFieldDecorator('contactMobile')(
	             <Input type="text" placeholder="企业联系人手机号" />
	          )}
	        </FormItem>
	        <FormItem label="企业联系人地址">
	          {getFieldDecorator('contactAddress')(
	             <Input type="text" placeholder="企业联系人地址" />
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" className="login-btn" onClick={this.resetForm} >
	            重置
	          </Button>
	          <Button type="primary" htmlType="submit" className="login-btn">
	            提交
	          </Button>
	        </FormItem>
      	  </Form>
	     ) 
	}
}

const CompanyForm = Form.create()(SettingForm);

export default CompanyForm;