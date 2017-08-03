export default function editEnterpriseInfo(obj) {
  const url = "/xyre/enterprise/doupdate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data:obj,
  		success:function(json) {
	      if(json.stateCode == '0') {
	      	dispatch(updateEnterpriseInfo(obj));
	      }
  		}
  	})
  }
}

function updateEnterpriseInfo(data) {
	return {
		type: 'UPDATE_ENTERPRISE_INFO',
		updateInfo: data
	}
}
