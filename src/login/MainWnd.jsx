import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import * as actions from './actions';
import { Button } from 'antd';
import {LoginForm, LoginAlert} from './components/lib';

import './style.scss'

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  goToReg() {
    window.location.pathname="reg.html";
  }

  render() {
    const { loginErrorMsg } = this.props;
    const isShow = loginErrorMsg.isShowAlertMessage;
    return (
      <div className="main-container">
          <div className="main-header">
              <a className="header-title" href="index.html">通讯录管理后台</a>
              <Button className="zhuce" onClick={this.goToReg}>管理员注册</Button>
          </div>
          <div className="msg-container"
            style={
              {
                "display": isShow? "block":"none",
              }
            }
          >
            <LoginAlert
              msg={loginErrorMsg}
            />
          </div>
          <div className="form-container">
              <div className="form-title">管理员登录</div>
              <div className="login-form">
                <LoginForm 
                  dispatch={this.props.dispatch}
                />
              </div>   
          </div>
      </div>
    )
  }

  componentDidMount() {
    if (typeof(JSCallAsFunction) == 'function') {
      JSCallAsFunction("load_complete");
      JSCallAsFunction("show_windows");
    }
  }
}


module.exports = connect(
  // mapStateToProps
  (state) => {
    return {
      userLoginList: state.loginReducer.userLoginList || {},
      loginErrorMsg: state.loginReducer.loginErrorMsg || {},
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
