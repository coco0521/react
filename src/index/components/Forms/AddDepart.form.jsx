import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
import './AddDepart.form.scss';

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

				this.props.dispatch(actions.addDepart(values));
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
		const { orgInfo } = this.props;
    	return (
	      <div className="set-form-container">
	      	<div className="set-title">部门信息</div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					<FormItem label="部门名称">
					{getFieldDecorator('name',{
						rules:[{
							required:true, message:'请输入部门名称',
						}],
					})(
						<Input type="text" placeholder="部门名称"/>
					)}	
					</FormItem>
					<FormItem>
					{getFieldDecorator('parentId',{ initialValue:orgInfo.id })(
						<Input type="text" style={{display:'none'}}/>
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

const AddDepartForm = Form.create()(SettingForm);

export default AddDepartForm;