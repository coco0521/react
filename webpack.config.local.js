module.exports = {
  entry: require('./webpack.config/entry'),

  output: require('./webpack.config/output'),

  module: require('./webpack.config/module'),

  plugins: require('./webpack.config/plugins.local'),

  devtool: require('./webpack.config/devtool'),

  devServer: require('./webpack.config/devServer'),

  resolve: require('./webpack.config/resolve'),
};
