import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import EditDepartForm from './Forms/EditDepartForm';
import EditEnterpriseForm from './Forms/EditEnterpriseForm';
import './SettingModal.scss';

class SettingModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible:false
		};
	}

	showModal() {
		this.setState({
			visible:true
		});
	}

	handleOk(e) {
		console.log(e);
		this.setState({
			visible:false,
		});
	}

	handleCancel(e) {
		console.log(e);
		this.setState({
			visible:false,
		});
	}

	render() {
		const { sessionList, dispatch, orgInfo, industryList, scaleList, orgTreeData, personList } = this.props;
		const obj = new Object();
		obj.id = sessionList.enterpriseId;
		obj.name = sessionList.enterpriseName;
		let change = orgInfo.type ? orgInfo.type : sessionList.enterpriseType;
		if(change == 'dept') {
			return (
				<div>
					<Button onClick={this.showModal.bind(this)}>部门编辑</Button>
					<Modal 
						title="编辑部门" 
						className="setting-modal"
						visible={this.state.visible} 
						onOk={this.handleOk.bind(this)} 
						onCancel={this.handleCancel.bind(this)}
					>
					<EditDepartForm
						departinfo={orgInfo}
						dispatch={dispatch}
						orgTreeData={orgTreeData}
						personList={personList}
					/>
					</Modal>
				</div>
			)
		}else if(change == 'unit'){
			return(
				<div>
					<Button onClick={this.showModal.bind(this)}>单位编辑</Button>
					<Modal 
						title="编辑单位" 
						className="setting-modal"
						visible={this.state.visible} 
						onOk={this.handleOk.bind(this)} 
						onCancel={this.handleCancel.bind(this)}
					>
					<EditDepartForm
						depart={obj}
						dispatch={this.props.dispatch}
					/>
					</Modal>
				</div>
			)
		}else if(change == 'enterprise'){
			return(
				<div>
					<Button onClick={this.showModal.bind(this)}>设置</Button>
					<Modal 
						title="编辑企业" 
						className="setting-modal"
						visible={this.state.visible} 
						onOk={this.handleOk.bind(this)} 
						onCancel={this.handleCancel.bind(this)}
					>
					<EditEnterpriseForm
						enterpriseinfo={obj}
						dispatch={this.props.dispatch}
						scaleList={scaleList}
						industryList={industryList}
					/>
					</Modal>
				</div>
			)
		}else if(change == 'group'){
			return(
				<div>
					<Button onClick={this.showModal.bind(this)}>设置</Button>
					<Modal 
						title="编辑集团" 
						className="setting-modal"
						visible={this.state.visible} 
						onOk={this.handleOk.bind(this)} 
						onCancel={this.handleCancel.bind(this)}
					>
					<EditDepartForm
						depart={obj}
						dispatch={this.props.dispatch}
					/>
					</Modal>
				</div>
			)
		}
		return(
			<Button onClick={this.showModal.bind(this)}>设置</Button>
		)
	}
}
export default SettingModal;


