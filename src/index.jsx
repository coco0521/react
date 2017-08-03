import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import IndexWnd from './index/MainWnd';

const indexDom = document.getElementById('app-index-wnd');
if (indexDom) {
  ReactDOM.render(
    <Provider store={store}>
      <IndexWnd/>
    </Provider>,
    indexDom
  );
}
