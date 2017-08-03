export default function addPost(obj) {
  const url = "/xyre/post/docreate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:obj,
  		success:function(json) {
	        if(json.stateCode == '0') {
	          dispatch(receivePostList(json.data));
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