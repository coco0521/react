const {PREFIX_API, PLATFORM, HOST} = require('./configure');

// 配置后端API地址前缀
let API_HOST = PLATFORM.REMOTE;

if (DEV_LOCAL) {
  API_HOST = PLATFORM.LOCAL;
  console.info( '  -->   sim/本地开发，模拟api环境，【本地】接口, API_HOST: %s/...', API_HOST );
} else if (DEV_REMOTE) {
  API_HOST = PLATFORM.REMOTE;
  console.info( '  -->   dev/开发环境，【后台】接口, API_HOST:%s/...', API_HOST );
} else if (RELEASE) {
  API_HOST = PLATFORM.RELEASE;
  console.info( '  -->   release/!!!正式发布环境, API_HOST: %s/...', API_HOST );
}

module.exports = {
	API_HOST
}
