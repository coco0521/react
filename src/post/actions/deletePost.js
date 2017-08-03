export default function deletePost(id) {
  const url = "/xyre/post/dodelete";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:{id:id},
  		success:function(json) {
	        if(json.stateCode == '0') {
	          window.location.reload();
	        }
  		}
  	})
  }
}