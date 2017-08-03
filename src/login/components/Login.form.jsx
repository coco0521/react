import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal, Checkbox} from 'antd';
const FormItem = Form.Item;
import * as actions from '../actions';
import './Login.form.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible:false
		}
	}
	//提交表单function
	handleSubmit(e) {
		const props = this.props;
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if(!err) {
				props.dispatch(actions.sendUserLoginInfo(values));
				console.log('Received values of form:', values);
			}
		});
	}

	render() {
		const props = this.props;
		const { getFieldDecorator } = this.props.form;
    	return (
	      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
	        <FormItem>
	          {getFieldDecorator('username', {
	            rules: [{ required: true, message: '请输入用户名!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="登录帐号" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: '请输入密码!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" htmlType="submit" className="login-form-button" className="login-btn">
	            登录
	          </Button>
	        </FormItem>
      	  </Form>
	     ) 
	}
}

const LoginForm = Form.create()(SettingForm);

export default LoginForm;