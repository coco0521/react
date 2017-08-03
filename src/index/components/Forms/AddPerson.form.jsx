import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal} from 'antd';
const FormItem = Form.Item;
import './AddPerson.form.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible:false
		}
	}
	//提交表单function
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log('Received values of form:', values);
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
	      	<div className="set-title">添加成员</div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<FormItem label="登录帐号">
					{getFieldDecorator('loginId',{
						rules:[{
							required:true, message:'请分配登录帐号',
						}],
					})(
						<Input type="text" placeholder="请分配登录帐号"/>
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
					<FormItem label="所属部门">
					{getFieldDecorator('orgId',{
						rules:[{
							required:true, message:'请输入所属部门',
						}],
					})(
						<Input type="text" placeholder="所属部门"/>
					)}	
					</FormItem>
					<FormItem label="岗位">
					{getFieldDecorator('postId',{
						rules:[{
							required:true, message:'请输入岗位',
						}],
					})(
						<Input type="text" placeholder="岗位"/>
					)}	
					</FormItem>
					<FormItem label="岗位类型">
					{getFieldDecorator('postType',{
						rules:[{
							required:true, message:'请输入岗位类型',
						}],
					})(
						<Input type="text" placeholder="岗位类型"/>
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
				<Modal title="选择人员" visible={this.state.visible}>
					<p>...some contents...</p>
				</Modal>
			</div>
	     ) 
	}
}

const AddPersonForm = Form.create()(SettingForm);

export default AddPersonForm;