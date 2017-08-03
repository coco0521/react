export default function deleteOrg(id) {
  const url = "/xyre/org/dodelete";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:{id:id},
  		success:function(json) {
	      if(json.stateCode == '0') {
          console.log(json.msg);
	      	window.location.reload();
	      }
  		}
  	})
  }
}

