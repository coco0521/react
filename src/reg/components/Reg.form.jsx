import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal, Checkbox} from 'antd';
import * as actions from '../actions';
const FormItem = Form.Item;
import './Reg.form.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmDirty:false
		}
	}
	//校验重复密码
	checkPassword(rule, value, callback) {
		const form = this.props.form;
		if(value && value!==form.getFieldValue('password')) {
			callback('两次输入的密码不同');
		}else{
			callback();
		}
	}
	//校验登录帐号的合法性
	/*checkLoginId(rule, value, callback) {
		const form = this.props.form;
		const reg = /^[a-zA-z]\w{1,31}$/;
		if(!reg.test(value)) {
			callback('登录帐号必须由字母、数字、下划线组成，长度最小2位最长32位');
		}else{
			callback();
		}
	}*/
	//重置表单
	resetForm() {
		this.props.form.resetFields();
	}
	//提交表单function
	handleSubmit(e) {
		const props = this.props;
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				props.dispatch(actions.sendUserRegInfo(values));
				console.log('Received values of form:', values);
				//window.location.pathname="login.html";
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
    	return (
	      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
	      	<FormItem label="邮箱地址">
	          {getFieldDecorator('email', {
	            rules: [{
	          	required: true, message: '请输入邮箱地址！',
	          }],
	      	  })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="登录帐号" />
	          )}
	        </FormItem>
	        <FormItem label="用户名">
	          {getFieldDecorator('username', {
	            rules: [{
	          	required: true, message: '请输入用户名！',
	          }],
	      	  })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
	          )}
	        </FormItem>
	        <FormItem label="密码">
	          {getFieldDecorator('password', {
	            rules: [{
	          	required: true, message: '请输入密码！',
	          }],
	      	  })(
	            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="密码" />
	          )}
	        </FormItem>
	        <FormItem label="确认密码">
	          {getFieldDecorator('repassword', {
	            rules: [{
	          	required: true, message: '请再次输入密码！',
	          },{
	          	validator: this.checkPassword.bind(this),
	          }],
	      	  })(
	            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="确认密码" />
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" htmlType="reset" className="login-btn" onClick={this.resetForm.bind(this)} >
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

const RegForm = Form.create()(SettingForm);

export default RegForm;