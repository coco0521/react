module.exports = {
  entry: require('./webpack.config/entry.release'),

  output: require('./webpack.config/output.release'),

  module: require('./webpack.config/module'),

  plugins: require('./webpack.config/plugins.release'),

  devtool: require('./webpack.config/devtool'),

  devServer: require('./webpack.config/devServer'),

  resolve: require('./webpack.config/resolve'),
};
