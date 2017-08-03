export default function editPost(obj) {
  const url = "/xyre/post/doupdate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:obj,
  		success:function(json) {
	        if(json.stateCode == '0') {
	          window.location.reload();
	        }
  		}
  	})
  }
}