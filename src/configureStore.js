import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux';

import loginReducer from './login/reducer';
import messagerReducer from './messager/reducer';
import settingReducer from './setting/reducer';
import regReducer from './reg/reducer';
import createCompanyReducer from './createcompany/reducer';
import indexReducer from './index/reducer';
import postReducer from './post/reducer';
import personReducer from './person/reducer'; 

const loggerMiddleware = createLogger({level: 'log', collapsed: true});

export const store = createStore(
  combineReducers( {
    messagerReducer,
    settingReducer,
    loginReducer,
    regReducer,
    createCompanyReducer,
    indexReducer,
    postReducer,
    personReducer,
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

let unsubscribe = store.subscribe(() => {
});
