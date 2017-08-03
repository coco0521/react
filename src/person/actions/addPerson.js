export default function addPerson(obj) {
  const url = "/xyre/user/docreate";
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
