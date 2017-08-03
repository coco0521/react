import fetch from 'isomorphic-fetch';
import {API_HOST} from '../../configureAction'

export default function sendUserLoginInfo(userLoginInfo) {
  return function(dispatch) {
    const url = `${API_HOST}reg/dologin/`;
    const option = {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginInfo)
    };

    return fetch(url, option)
      .then(response => response.json())
      .then(json => {
        if(json.success) {
          alert(json.msg);
          dispatch(receiveUserLoginInfo(json.result));
          window.location = "index.html";
        }else{
          dispatch(receiveLoginErrorInfo(json.msg));
        }
      })
  }  
}

function receiveUserLoginInfo(json) {
	return{
		type: 'RECEIVE_USER_LOGON_INFO',
		userloginlist:json
	}
}

function receiveLoginErrorInfo(msg) {
  return{
    type: 'RECEIVE_LOGIN_ERROR_INFO',
    loginErrorMsg: msg
  }
}
