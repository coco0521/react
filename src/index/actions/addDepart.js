export default function addDepart(obj) {
  const url = "/xyre/org/dept/docreate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:obj,
  		success:function(json) {
        console.log(">>>>>>>>" + JSON.stringify(json));
	      if(json.stateCode == '0') {
	      	window.location.reload();
	      }
  		}
  	})
  }
}

