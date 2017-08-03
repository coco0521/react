export default function getIndustryList() {
  const url = "/xyre/industry/list";
  return function(dispatch) {
  	$.ajax({
  		type:'POST',
  		url:url,
  		dataType:'json',
  		success:function(json) {
        if(json.stateCode == '0') {
          dispatch(receiveIndustryList(json.data));
        }
  		}
  	})
  }
}

function receiveIndustryList(json) {
	return {
		type: 'RECEIVE_INDUSTRY_LIST',
		industrylist: json
	}
}
