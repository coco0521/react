import _ from 'lodash';
import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
import './EditDepartForm.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteDepart = this.deleteDepart.bind(this);
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
				this.props.dispatch(actions.editDepartInfo(values));
			}
		});
	}

	deleteDepart(id) {
		let treeData = this.props.orgTreeData;
		let personList = this.props.personList;
		let flag;
		if(personList[0][0]){
			flag = true;
		}else{
			flag = false;
		}
		_.cloneDeepWith(treeData,(item) => {
	        if(typeof(item) == 'object' && _.has(item,'id') && item.id == this.props.departinfo.id) {
	          if(item.children) {
	          	alert('有下级部门不能删除');
	          }else if(flag){
	          	alert('该部门有人员不能删除');
	          }else{
	          	this.props.dispatch(actions.deleteOrg(this.props.departinfo.id));
	          }
	        }
	    })
	}

	//控制“设置主管”Modal的显示
	showSuperModal() {
		this.setState({
			visible:true
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { departinfo, dispatch, orgTreeData } = this.props;
    	return (
	      <div className="set-form-container">
	      	<div className="set-title">部门信息</div>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator('id',{initialValue:departinfo.id})(
							<Input type="text" style={{display:'none'}}/>
						)}
					</FormItem>
					<FormItem label="部门名称">
						{getFieldDecorator('name',{
							rules:[{required: true, message:'请输入部门名称'}], initialValue:departinfo.title
						})(
							<Input type="text" placeholder="部门名称" />
						)}
					</FormItem>
					<FormItem style={{marginTop:'-20px'}}>
						{getFieldDecorator('parentId',{
							rules:[{required: true, message:'请输入部门名称'}], initialValue:departinfo.parentId
						})(
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
						<Button className="login-form-button" onClick={this.deleteDepart}>
							删除
						</Button>
					</FormItem>	
				</Form>
			</div>
	     ) 
	}
}

const EditDepartForm = Form.create()(SettingForm);

export default EditDepartForm;