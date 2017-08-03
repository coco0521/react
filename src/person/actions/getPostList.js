export default function getPostList() {
  const url = "/xyre/post/all";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		success:function(json) {
	       if(json.stateCode == '0') {
	         dispatch(receivePostList(json.data));
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