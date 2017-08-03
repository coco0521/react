import fetch from 'isomorphic-fetch';
import {API_HOST} from '../../configureAction'

export default function sendUserRegInfo(userRegInfo) {
  return function(dispatch) {
    const url = `${API_HOST}reg/docreate/`;
    const option = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userRegInfo)
    };

    return fetch(url, option)
      .then(response => response.json())
      .then(json => {
        if(json.success) {
          alert(json.msg);
          dispatch(receiveUserRegInfo(json.result));
          window.location = "login.html"
        }else{
          alert(json.msg);
        }
      });
  }
}

function receiveUserRegInfo(json) {
	return {
		type: 'RECEIVE_USER_REG_INFO',
		userreglist: json
	}
}
