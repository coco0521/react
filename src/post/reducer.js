import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    sessionList: {},
    postList: [],
    selectedRows: {},
  }
}

export default function postReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_SESSION_LIST':
      let sessionList = _.clone(state.sessionList);
      return objectAssign({}, state, {sessionList: action.sessionlist});

    case 'RECEIVE_POST_LIST':
      let postList = _.clone(state.postList);
      postList.push(action.postlist);
      return objectAssign({}, state, {postList});

    case 'GET_SELECTED_ROWS':
      let selectedRows = _.clone(state.selectedRows);
      return objectAssign({}, state, {selectedRows: action.selectedrows});

    default:
      return state;
  }
}
