const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    loaders: [{
      test: /[\.jsx|\.js]$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"}
      )
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  }
