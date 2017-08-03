export default function getScaleList() {
  const url = "/xyre/scale/list";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		success:function(json) {
        if(json.stateCode == '0') {
          dispatch(receiveScaleList(json.data));
        }
  		}
  	})
  }
}

function receiveScaleList(json) {
	return {
		type: 'RECEIVE_SCALE_LIST',
		scalelist: json
	}
}
