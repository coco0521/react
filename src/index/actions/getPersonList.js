export default function getPersonList(id) {
  const url = "/xyre/user/page";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		data: {orgid:id,pageNo:'1',pageSize:'20'},
  		success:function(json) {
	        if(json.stateCode == '0') {
	          dispatch(receivePersonList(json.data.list));
	        }
  		}
  	})
  }
}

function receivePersonList(list) {
	return {
		type: 'RECEIVE_PERSON_LIST',
		personlist: list
	}
}
