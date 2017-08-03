import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal, Select} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
const Option = Select.Option;
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
				let obj = new Object();
				obj.detail = values;
				obj.groupInfo = [];
				let obj2 = new Object();
				obj2.orgId = values.orgId;
				obj2.postId = values.postId;
				obj2.postType = values.postType;
				obj.groupInfo.push(obj2);
				delete obj.detail.orgId;
				delete obj.detail.postId;
				delete obj.detail.postType;
				console.log('>>>' + JSON.stringify(obj));
				this.props.dispatch(actions.editPerson(obj));
			}
		});
	}

	componentWillMount() {
		this.props.dispatch(actions.getOrgData());
		this.props.dispatch(actions.getPostList());
	}

	//控制“设置主管”Modal的显示
	showSuperModal() {
		this.setState({
			visible:true
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { dispatch, selectedRows, orgData, postList } = this.props;

		let orgList = [];
		let postlist = [];
		if(orgData.length > 0) {
			for(let i = 0; i < orgData[0].length; i++) {
				orgList.push(<Option key={orgData[0][i].id}>{orgData[0][i].name}</Option>);
			}
		}
		if(postList.length > 0) {
			for(let j = 0; j < postList[0].length; j++) {
				postlist.push(<Option key={postList[0][j].id}>{postList[0][j].name}</Option>);
			}
		}
    	return (
	      <div className="set-form-container">
	      	<div className="set-title">人员信息</div>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
					{getFieldDecorator('uid',{ initialValue:selectedRows[0].uid })(
						<Input type="text" style={{display:'none'}}/>
					)}	
					</FormItem>
					<FormItem label="姓名">
					{getFieldDecorator('name',{ initialValue:selectedRows[0].name,
						rules:[{
							required:true, message:'请输入姓名',
						}],
					})(
						<Input type="text" placeholder="姓名"/>
					)}	
					</FormItem>
					<FormItem label="邮箱">
					{getFieldDecorator('email',{ initialValue:selectedRows[0].email })(
						<Input type="text" placeholder="邮箱"/>
					)}	
					</FormItem>
					<FormItem label="手机号">
					{getFieldDecorator('mobile',{ initialValue:selectedRows[0].mobile })(
						<Input type="text" placeholder="手机号"/>
					)}	
					</FormItem>
					<FormItem label="企业邮箱">
					{getFieldDecorator('orgEmail',{ initialValue:selectedRows[0].orgEmail })(
						<Input type="text" placeholder="企业邮箱"/>
					)}	
					</FormItem>
					<FormItem label="工号">
					{getFieldDecorator('jobNumber',{ initialValue:selectedRows[0].jobNumber })(
						<Input type="text" placeholder="工号"/>
					)}	
					</FormItem>
					<FormItem label="办公电话">
					{getFieldDecorator('officePhone',{ initialValue:selectedRows[0].officePhone })(
						<Input type="text" placeholder="办公电话"/>
					)}	
					</FormItem>
					<FormItem label="单位/部门">
			          {getFieldDecorator('orgId',{
			          	rules:[{
							required:true, message:'请选择单位/部门',
						}],
			          })(
			            <Select
			            	size="default"
			            	placeholder="单位或者部门"
			            >
			            	{orgList}
			            </Select>
			          )}
	        		</FormItem>
	        		<FormItem label="职位">
			          {getFieldDecorator('postId',{
			          	rules:[{
							required:true, message:'请选择职位',
						}],
			          })(
			            <Select
			            	size="default"
			            	placeholder="职位"
			            >
			            	{postlist}
			            </Select>
			          )}
	        		</FormItem>
	        		<FormItem label="职位类型">
			          {getFieldDecorator('postType')(
			            <Select
			            	size="default"
			            	placeholder="职位"
			            >
			            	<Option value="main">主岗</Option>
			            	<Option value="second">副岗</Option>
			            </Select>
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

const EditPersonForm = Form.create()(SettingForm);

export default EditPersonForm;