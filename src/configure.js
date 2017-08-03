// 配置后端API地址前缀
const PREFIX_API = '/platform-app/';

const getDomain = () => {
    if (typeof(document) != 'undefined') {
      const port = location.port;
      const hostname = location.hostname;
      if (port) {
        return runtimeDomain = `http://${hostname}:${port}`;
      }
      return runtimeDomain =  'http://' + hostname;
  } else {
    return '';
  }
}
let runtimeDomain = getDomain();

const HOST = {
  LOCAL: 'http://localhost:1337',
  REMOTE: 'http://10.17.4.173:8080',
  // RELEASE: 'http://192.168.3.84:8080',
  RELEASE: (runtimeDomain)? runtimeDomain : 'http://127.0.0.1:8080',
  // RELEASE: 'http://127.0.0.1:10086',
};

const PLATFORM = {
  LOCAL: `${HOST.LOCAL}${PREFIX_API}`,
  REMOTE: `${HOST.REMOTE}${PREFIX_API}`,
  RELEASE: `${HOST.RELEASE}${PREFIX_API}`,
};

module.exports = {
  PREFIX_API,
  HOST,
  PLATFORM
}
