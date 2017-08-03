import React from 'react';
// import classNames from 'classNames'
import { Alert } from 'antd';
import * as actions from '../actions';

class LoginAlert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { msg } = this.props;
    	return (
	      <Alert 
	      	message="错误信息"
	      	description={msg.errorMsg}
	      	type="warning"
	      	closable
           />
	     ) 
	}
}

export default LoginAlert;