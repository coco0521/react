export default function getSessionList() {
  const url = "/xyre/enterpriseAdmin/session";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		success:function(json) {
	        if(json.stateCode == '0') {
	          if(json.data) {
	            dispatch(receiveSessionList(json.data));
	          }else{
	            alert('请先登录');
	            window.location.pathname="login.html";
	          }
	        }
  		}
  	})
  }
}

function receiveSessionList(json) {
	return {
		type: 'RECEIVE_SESSION_LIST',
		sessionlist: json
	}
}
