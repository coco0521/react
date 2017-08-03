import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
import './AddPerson.form.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			visible:false
		}
	}
	//提交表单function
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				//console.log('Received values of form:', values);
				let obj = new Object();
				let loginId = values.loginId;
				obj.loginId = loginId;
				delete values.loginId;
				obj.detail = values;
				this.props.dispatch(actions.addPerson(obj));
			}
		});
	}

	//控制“设置主管”Modal的显示
	showSuperModal() {
		this.setState({
			visible:true
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
    	return (
	      <div className="set-form-container">
	      	<div className="set-title">人员信息</div>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem label="登录帐号">
					{getFieldDecorator('loginId',{
						rules:[{
							required:true, message:'请输入登录帐号',
						}],
					})(
						<Input type="text" placeholder="登录帐号"/>
					)}	
					</FormItem>
					<FormItem label="姓名">
					{getFieldDecorator('name',{
						rules:[{
							required:true, message:'请输入姓名',
						}],
					})(
						<Input type="text" placeholder="姓名"/>
					)}	
					</FormItem>
					<FormItem label="邮箱">
					{getFieldDecorator('email')(
						<Input type="text" placeholder="邮箱"/>
					)}	
					</FormItem>
					<FormItem label="手机号">
					{getFieldDecorator('mobile')(
						<Input type="text" placeholder="手机号"/>
					)}	
					</FormItem>
					<FormItem label="企业邮箱">
					{getFieldDecorator('orgEmail')(
						<Input type="text" placeholder="企业邮箱"/>
					)}	
					</FormItem>
					<FormItem label="工号">
					{getFieldDecorator('jobNumber')(
						<Input type="text" placeholder="工号"/>
					)}	
					</FormItem>
					<FormItem label="办公电话">
					{getFieldDecorator('officePhone')(
						<Input type="text" placeholder="办公电话"/>
					)}	
					</FormItem>
					<FormItem className="set-btns">
						<Button type="primary" htmlType="submit" className="login-form-button">
							保存
						</Button>
						<Button className="login-form-button">
							取消
						</Button>
					</FormItem>	
				</Form>
			</div>
	     ) 
	}
}

const AddPersonForm = Form.create()(SettingForm);

export default AddPersonForm;