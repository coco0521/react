import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import MessagerWnd from './messager/MainWnd';

const messagerDom = document.getElementById('app-messager-wnd');
if (messagerDom) {
  ReactDOM.render(
    <Provider store={store}>
       <MessagerWnd/>
    </Provider>,
    messagerDom
  );
}
