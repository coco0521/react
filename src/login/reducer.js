import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    userLoginList: [],
    loginErrorMsg:{}
  }
}

export default function loginReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_USER_LOGON_INFO':
      const userLoginList = _.clone(state.userLoginList);
      userLoginList.push(action.userloginlist);
      return objectAssign({}, state, {userLoginList});
    case 'RECEIVE_LOGIN_ERROR_INFO':
      const loginErrorMsg = _.clone(state.loginErrorMsg);
      loginErrorMsg.errorMsg = action.loginErrorMsg;
      loginErrorMsg.isShowAlertMessage = true;
      return objectAssign({},state,{loginErrorMsg:loginErrorMsg});
    default:
      return state;
  }
}
