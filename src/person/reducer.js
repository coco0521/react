import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    sessionList: {},
    personList: [],
    selectedRows: {},
    orgData: [],
    postList: [],
  }
}

export default function personReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_SESSION_LIST':
      let sessionList = _.clone(state.sessionList);
      return objectAssign({}, state, {sessionList: action.sessionlist});

    case 'RECEIVE_PERSON_LIST':
      let personList = _.clone(state.personList);
      personList.push(action.personlist);
      return objectAssign({}, state, {personList});

    case 'GET_SELECTED_ROWS':
      let selectedRows = _.clone(state.selectedRows);
      return objectAssign({}, state, {selectedRows: action.selectedrows});  

    case 'RECEIVE_ORG_DATA':
      let orgData = _.clone(state.orgData);
      orgData.push(action.orgdata);
      return objectAssign({}, state, {orgData});

    case 'RECEIVE_POST_LIST':
      let postList = _.clone(state.postList);
      postList.push(action.postlist);
      return objectAssign({}, state, {postList});  

    default:
      return state;
  }
}
