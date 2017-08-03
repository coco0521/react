export default function sendEnterpriseRegInfo(enterpriseRegInfo) {
  const url = "/xyre/enterprise/docreate";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		data:enterpriseRegInfo,
  		success:function(json) {
  			if(json.stateCode == '0') {
  				dispatch(receiveEnterpriseRegInfo(json.data));
          window.location.pathname = "index.html";
  			}
  		}
  	})
  }
}

function receiveEnterpriseRegInfo(json) {
	return {
		type: 'RECEIVE_ENTERPRISE_REG_INFO',
		enterpriseId: json
	}
}
