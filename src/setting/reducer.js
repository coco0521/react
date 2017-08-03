import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    config: 'config data'
  }
}

export default function settingReducer(state = initState(), action) {
  switch (action.type) {
    default:
      return state;
  }
}
