import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_HOST} from './configureAction';

import { Provider } from 'react-redux';
import { store } from './configureStore';

import SettingWnd from './setting/MainWnd';

const settingDom = document.getElementById('app-setting-wnd');
if (settingDom) {
  ReactDOM.render(
    <Provider store={store}>
       <SettingWnd/>
    </Provider>,
    settingDom
  );
}
