import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import EditPostForm from './Forms/EditPost.form';
import './AddPost.modal.scss';

class EditPostModal extends React.Component {
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
		const { selectedRows } = this.props;
		return (
			<div>
				<Button onClick={this.showModal.bind(this)}>编辑岗位</Button>
				<Modal 
					title="编辑岗位" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
				<EditPostForm 
					dispatch={this.props.dispatch}
					selectedRows={selectedRows}
				/>
				</Modal>
			</div>
		)
	}
}
export default EditPostModal;


