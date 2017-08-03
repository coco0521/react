import React from 'react';
// import classNames from 'classNames'
import { Modal, Button } from 'antd';
import AddPostForm from './Forms/AddPost.form';
import './AddPost.modal.scss';

class AddPostModal extends React.Component {
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
				<Button onClick={this.showModal.bind(this)} type="primary">增加岗位</Button>
				<Modal 
					title="增加岗位" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
				<AddPostForm 
					dispatch={this.props.dispatch}
				/>
				</Modal>
			</div>
		)
	}
}
export default AddPostModal;


