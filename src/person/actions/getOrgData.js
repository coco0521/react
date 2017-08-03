export default function getOrgData() {
  const url = "/xyre/org/all";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		success:function(json) {
	       if(json.stateCode == '0') {
	       		dispatch(receiveOrgData(json.data));
	       }
  		}
  	})
  }
}

function receiveOrgData(data) {
	return {
		type: 'RECEIVE_ORG_DATA',
		orgdata: data
	}
}
