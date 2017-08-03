import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import AddDepartForm from './Forms/AddDepart.form';
import './AddDepart.modal.scss';

class AddDepartModal extends React.Component {
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
		const { dispatch, orgInfo } = this.props;
		return (
			<div>
				<Button onClick={this.showModal.bind(this)}>添加子部门</Button>
				<Modal 
					title="添加部门" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
				<AddDepartForm
					dispatch={dispatch}
					orgInfo={orgInfo}
				/>
				</Modal>
			</div>
		)
	}
}
export default AddDepartModal;


