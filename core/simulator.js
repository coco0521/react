const glob = require('glob');
const {PREFIX_API} = require('../src/configure');
/**
 *
 * api路由
 * app.use('/api', require('../routes/api/orgs'));
 *
 * 该路由加载暂时适用于测试开发阶段,只针对api进行路由，需要继续优化修改
 * by 2017.01.13 genbin
 */
const sysRouters = (app) => {
  return glob('./simulator/**/*.js', {}, (er, files) => {
    let routeFiles = [];

    files.map((file) => {
      let items = file.split('/');
      let url = items.slice(2);
      let jsFile = url[url.length - 1].replace('.js', '');

      // 改写路径
      url[url.length - 1] = jsFile;

      // 改写require的模块路径
      items[0] = '..';
      items[items.length - 1] = jsFile;

      routeFiles.push(items.join('/'));

    });

    // 批量加载路由
    console.info('  --> ::::::::  加载自定义路由 ::::::::::::');
    routeFiles.map( (routeFile, key) => {
      console.info(`  --> ${++key} ${PREFIX_API}${routeFile}`);
      app.use(PREFIX_API, require(routeFile))
    }
    );

  });
};

module.exports = { sysRouters };
