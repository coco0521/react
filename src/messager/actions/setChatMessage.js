/**
 *
 * @return {[type]} [description]
 */
export default function setChatMessage(message) {
  return {
    type: 'MESSAGER_SET_CHAT_MESSAGE',
    message,
  };
}
