import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    chatList: []
  }
}

export default function messagerReducer(state = initState(), action) {
  switch (action.type) {
    case 'MESSAGER_SET_CHAT_MESSAGE':
      let chatList = _.clone(state.chatList);
      chatList.push(action.message);
      return objectAssign({}, state, {chatList});

    default:
      return state;
  }
}
