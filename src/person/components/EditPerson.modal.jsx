import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import EditPersonForm from './Forms/EditPerson.form';
import './AddPerson.modal.scss';

class EditPersonModal extends React.Component {
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
		const { dispatch, selectedRows,orgData, postList } = this.props;
		return (
			<div>
				<Button onClick={this.showModal.bind(this)}>编辑人员</Button>
				<Modal 
					title="编辑人员" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
				<EditPersonForm 
					dispatch={dispatch}
					selectedRows={selectedRows}
					orgData={orgData}
					postList={postList}
				/>
				</Modal>
			</div>
		)
	}
}
export default EditPersonModal;


