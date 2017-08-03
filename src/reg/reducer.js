import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    userRegList: []
  }
}

export default function regReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_USER_REG_INFO':
      let userRegList = _.clone(state.userRegList);
      userRegList.push(action.userreglist);
      return objectAssign({}, state, {userRegList});

    default:
      return state;
  }
}
