export default function editDepartInfo(obj) {
  const url = "/xyre/org/dept/doupdate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:obj,
  		success:function(json) {
	      if(json.stateCode == '0') {
	      	dispatch(updateDepartInfo(obj));
          window.location.reload();
	      }
  		}
  	})
  }
}

function updateDepartInfo(data) {
	return {
		type: 'UPDATE_DEPART_INFO',
		updateInfo: data
	}
}
