import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    enterpriseList: [],
    industryList: [],
    scaleList: [],
    sessionList: [],
  }
}

export default function createCompanyReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_ENTERPRISE_REG_INFO':
      let enterpriseList = _.clone(state.enterpriseList);
      enterpriseList.push(action.enterpriseId);
      return objectAssign({}, state, {enterpriseList});

    case 'RECEIVE_INDUSTRY_LIST':
      let industryList = _.clone(state.industryList);
      industryList.push(action.industrylist);
      return objectAssign({}, state, {industryList});

    case 'RECEIVE_SCALE_LIST':
      let scaleList = _.clone(state.scaleList);
      scaleList.push(action.scalelist);
      return objectAssign({}, state, {scaleList});
      
    case 'RECEIVE_SESSION_LIST':
      let sessionList = _.clone(state.sessionList);
      sessionList.push(action.sessionlist);
      return objectAssign({}, state, {sessionList});   
    default:
      return state;
  }
}
