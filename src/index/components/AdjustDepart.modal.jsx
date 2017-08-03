import React from 'react';
// import classNames from 'classNames'
import { Modal, Button, Input, Breadcrumb, Checkbox, Icon } from 'antd';
import './AdjustDepart.modal.scss';
const Search = Input.Search;

class AdjustDepartModal extends React.Component {
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
		this.setState({
			visible:false,
		});
	}

	handleCancel(e) {
		this.setState({
			visible:false,
		});
	}
    onChange(e) {
    	console.log(`checked = ${e.target.checked}`);
    }

	render() {
		return (
			<div>
				<Button onClick={this.showModal.bind(this)}>调整部门</Button>
				<Modal 
					title="选择部门" 
					className="setting-modal"
					visible={this.state.visible} 
					onOk={this.handleOk.bind(this)} 
					onCancel={this.handleCancel.bind(this)}
				>
					<div className="choose-depart-modal">
						<div className="modal-l l">
							<p className="modal-l-title">选择部门</p>
							<div className="original-depart">
								<Search
									placeholder="搜索"
									onSearch={value => console.log(value)}
									className="search-depart"
								>
								</Search>
								<Breadcrumb className="bread-crumb">
									<Breadcrumb.Item><a href="">通讯录</a></Breadcrumb.Item>
									<Breadcrumb.Item><a href="">鑫巨</a></Breadcrumb.Item>
								</Breadcrumb>	
								<div className="check-depart">
									<div>
										<Checkbox>全选</Checkbox>
									</div>
									<div>
										<Checkbox><Icon type="folder" style={{color:'#49a9ee'}}/>行政部</Checkbox>
										<a style={{marginLeft:'150px'}}>下级</a>
									</div>
									<div>
										<Checkbox><Icon type="folder" style={{color:'#49a9ee'}}/>信息部</Checkbox>
										<a style={{marginLeft:'150px'}}>下级</a>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-l r">
							<p className="modal-l-title">已选部门</p>
							<div className="original-depart">	
								<div className="check-depart">
									<div>
										<span><Icon type="folder" style={{color:'#49a9ee'}}/>行政部</span>
										<Icon type="close-circle-o" className="close-depart"/>
									</div>
									<div>
										<span><Icon type="folder" style={{color:'#49a9ee'}}/>信息部</span>
										<Icon type="close-circle-o" className="close-depart"/>
									</div>
								</div>
							</div>
						</div>
						<div>
							<Button type="primary">确定</Button>
							<Button>取消</Button>
						</div>
					</div>
				</Modal>
			</div>
		)
	}
	componentDidMount() {
	    
  	}
}
export default AdjustDepartModal;


