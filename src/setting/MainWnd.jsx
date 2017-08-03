import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import * as actions from './actions';
import './style'

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>setting</div>
    );
  }

}

module.exports = connect(
(state) => {
  return {
    config: state.settingReducer.config || [],
  };
}
)(MainWnd);
