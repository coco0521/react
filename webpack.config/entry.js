const path = require('path');

module.exports = {
    login: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/login.jsx')
    ],
    messager: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/messager.jsx')
    ],
    setting: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/setting.jsx')
    ],
    reg: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/reg.jsx')
    ],
    createcompany: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/createcompany.jsx')
    ],
    index: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/index.jsx')
    ],
    post: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/post.jsx')
    ],
    person: [
      'webpack-dev-server/client?http://0.0.0.0:4337',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/person.jsx')
    ],

}
