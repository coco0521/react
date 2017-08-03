import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { CompanyForm } from './components/lib';
import * as actions from './actions';
import './style.scss'

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.dispatch(actions.getSessionList());
  }

  render() {
    return (
      <div className="main-container">
          <div className="main-header">
              <p className="header-title">通讯录管理后台</p>
          </div>
          <div className="form-container">
              <div className="form-title">创建企业</div>
              <div className="login-form">
                <CompanyForm 
                  dispatch={this.props.dispatch}
                  industryList={this.props.industryList}
                  scaleList={this.props.scaleList}
                />
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
      enterpriseList: state.createCompanyReducer.enterpriseList || [],
      industryList: state.createCompanyReducer.industryList || [],
      scaleList: state.createCompanyReducer.scaleList || [], 
      sessionList: state.createCompanyReducer.sessionList || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
