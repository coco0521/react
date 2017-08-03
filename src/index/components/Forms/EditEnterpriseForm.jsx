import React from 'react';
// import classNames from 'classNames'
import { Form, Icon, Input, Button, Modal, Select} from 'antd';
import * as actions from '../../actions';
const FormItem = Form.Item;
import './EditEnterpriseForm.scss';

class SettingForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			visible:false
		}
	}

	//得到企业所属行业列表和企业规模列表
    componentWillMount() {
    	this.props.dispatch(actions.getIndustryList());
    	this.props.dispatch(actions.getScaleList());
    }

	//提交表单function
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log('Received values of form:', values);
				this.props.dispatch(actions.editEnterpriseInfo(values));
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
		const { enterpriseinfo, dispatch, scaleList, industryList } = this.props;
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
	      <div className="set-form-container">
	      	<div className="set-title">部门信息</div>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator('id',{initialValue:enterpriseinfo.id})(
							<Input type="text" style={{display:'none'}}/>
						)}
					</FormItem>
					<FormItem label="名称" style={{marginTop:'-20px'}}>
						{getFieldDecorator('name',{
							rules:[{required: true, message:'请输入名称'}], initialValue:enterpriseinfo.name
						})(
							<Input type="text" placeholder="企业或者集团名称" />
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
			            >
			            	{scalelist}
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
				<Modal title="选择人员" visible={this.state.visible}>
					<p>...some contents...</p>
				</Modal>
			</div>
	     ) 
	}
}

const EditEnterpriseForm = Form.create()(SettingForm);

export default EditEnterpriseForm;