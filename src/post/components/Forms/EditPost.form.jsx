import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
import './AddPost.form.scss';

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
				console.log('Received values of form:', values);
				this.props.dispatch(actions.editPost(values));
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
		const { selectedRows } = this.props;
    	return (
	      <div className="set-form-container">
	      	<div className="set-title">岗位信息</div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<FormItem label="岗位名称">
					{getFieldDecorator('name',{
						rules:[{
							required:true, message:'请输入岗位名称',
						}],
					})(
						<Input type="text" placeholder="岗位名称"/>
					)}	
					</FormItem>
					<FormItem label="排序号">
					{getFieldDecorator('sort',{
						rules:[{
							required:true, message:'请输入排序号',
						}],
					})(
						<Input type="text" placeholder="排序号"/>
					)}	
					</FormItem>
					<FormItem>
					{getFieldDecorator('id',{ initialValue:selectedRows[0].id })(
						<Input type="text" placeholder="" style={{display:'none'}}/>
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

const EditPostForm = Form.create()(SettingForm);

export default EditPostForm;