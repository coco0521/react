export default function editPerson(obj) {
  const url = "/xyre/user/doupdate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      contentType: 'application/json',
      data:JSON.stringify(obj),
  		success:function(json) {
	        if(json.stateCode == '0') {
	          window.location.reload();
	        }
  		}
  	})
  }
}

function receivePostList(json) {
	return {
		type: 'RECEIVE_POST_LIST',
		postlist: json
	}
}