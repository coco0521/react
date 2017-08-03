const path = require('path');

module.exports = {
  login: path.resolve(__dirname, '../src/login.jsx'),
  messager: path.resolve(__dirname, '../src/messager.jsx'),
  setting: path.resolve(__dirname, '../src/setting.jsx'),
  reg: path.resolve(__dirname, '../src/reg.jsx'),
  createcompany: path.resolve(__dirname, '../src/createcompany.jsx'),
  index: path.resolve(__dirname, '../src/index.jsx'),
  post: path.resolve(__dirname, '../src/post.jsx'),
  person: path.resolve(__dirname, '../src/person.jsx'),
  common: [
    'lodash', 'react', 'object-assign', 'classnames', 'react-redux', 'uuid',
    'isomorphic-fetch'
  ]
}
