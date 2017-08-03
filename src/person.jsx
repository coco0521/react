import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';
import * as actions from './person/actions';

import PersonWnd from './person/MainWnd';

const personDom = document.getElementById('app-person-wnd');
if (personDom) {
  ReactDOM.render(
    <Provider store={store}>
      <PersonWnd/>
    </Provider>,
    personDom
  );
}
