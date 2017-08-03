import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import AddPersonForm from './Forms/AddPerson.form';
import './AddPerson.modal.scss';

class AddPersonModal extends React.Component {
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
		return (
			<div>
				<Button onClick={this.showModal.bind(this)} type="primary">增加人员</Button>
				<Modal 
					title="增加人员" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
				<AddPersonForm 
					dispatch={this.props.dispatch}
				/>
				</Modal>
			</div>
		)
	}
}
export default AddPersonModal;


