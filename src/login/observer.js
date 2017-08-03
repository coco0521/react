import { store } from '../configureStore';
import * as actions from './actions';

/**
 * 接受来自服务端的推送
 * @param  {[type]} fnType [description]
 * @return {[type]}        [description]
 */
export default function observer (fnType) {
  const args = arguments.length;
  for (let i=0; i<args; i++) {
    alert(arguments[i]);
  }
  const jsonStr = JSCallAsFunction("getRet", fnType);
  // window.alert(`bingo type: ${typeof(jsonStr)}`);
  // window.alert(`bingo ~~ ${fnType} , ${jsonStr}`);
  // console.info('bingo ~~', fnType, jsonStr);
  alert('bingo ~~');

  const jsonData = typeof(jsonStr) == 'string'? JSON.parse(jsonStr):{};
  switch (fnType) {
    case 'set_user_login_info':
      store.dispatch(actions.setUserLoginInfo(jsonData));
      break;

    default:
      break;

  }
}
