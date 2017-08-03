export default function getSubList(id) {
  const url = "/xyre/org/list/dirSub";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
        data:{id:id},
  		success:function(json) {
	       if(json.stateCode == '0') {
	       		dispatch(receiveSubList(json.data));
	       }
  		}
  	})
  }
}

function receiveSubList(data) {
	return {
		type: 'RECEIVE_SUB_LIST',
		subdata: data
	}
}
