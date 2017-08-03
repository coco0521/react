import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';
import * as actions from './login/actions';

import LoginWnd from './login/MainWnd';
import observer from './login/observer';

const loginDom = document.getElementById('app-login-wnd');
if (loginDom) {
  ReactDOM.render(
    <Provider store={store}>
      <LoginWnd/>
    </Provider>,
    loginDom
  );
}

window.UCCCALL = observer;
