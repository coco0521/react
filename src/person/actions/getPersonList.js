export default function getPersonList() {
  const url = "/xyre/user/page";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
      data: {orgid:'-1',pageNo:'1',pageSize:'20'},
  		success:function(json) {
	        if(json.stateCode == '0') {
	          dispatch(receivePersonList(json.data.list));
	        }
  		}
  	})
  }
}

function receivePersonList(json) {
	return {
		type: 'RECEIVE_PERSON_LIST',
		personlist: json
	}
}