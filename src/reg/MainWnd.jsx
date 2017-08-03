import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { RegForm } from './components/lib';
import * as actions from './actions';
import './style.scss'

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main-container">
          <div className="main-header">
              <p className="header-title">通讯录管理后台</p>
          </div>
          <div className="form-container">
              <div className="form-title">管理员注册</div>
              <div className="login-form">
                <RegForm 
                  dispatch={this.props.dispatch}
                >
                </RegForm>
              </div>   
          </div>
      </div>
    );
  }
}

module.exports = connect(
  // mapStateToProps
  (state) => {
    return {
      userRegList: state.regReducer.userRegList || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
