import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import PostWnd from './post/MainWnd';

const postDom = document.getElementById('app-post-wnd');
if (postDom) {
  ReactDOM.render(
    <Provider store={store}>
      <PostWnd/>
    </Provider>,
    postDom
  );
}
