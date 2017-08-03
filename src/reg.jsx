import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import RegWnd from './reg/MainWnd';

const regDom = document.getElementById('app-reg-wnd');
if (regDom) {
  ReactDOM.render(
    <Provider store={store}>
       <RegWnd/>
    </Provider>,
    regDom
  );
}
