import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import CreatecompanyWnd from './createcompany/MainWnd';

const createcompanyDom = document.getElementById('app-createcompany-wnd');
if (createcompanyDom) {
  ReactDOM.render(
    <Provider store={store}>
       <CreatecompanyWnd/>
    </Provider>,
    createcompanyDom
  );
}
