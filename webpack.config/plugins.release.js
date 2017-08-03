const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({
        DEV_LOCAL: JSON.stringify(false),
        DEV_REMOTE: JSON.stringify(false),
        RELEASE: JSON.stringify(true),
        VERSION: JSON.stringify("1.0")
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/login.html'),
        filename: './login.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/messager.html'),
        filename: './messager.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/setting.html'),
        filename: './setting.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/reg.html'),
        filename: './reg.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/createcompany.html'),
        filename: './createcompany.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/index.html'),
        filename: './index.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/post.html'),
        filename: './post.html'
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/person.html'),
        filename: './person.html'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //   }
    // }),
    new CopyWebpackPlugin([
        {from: 'public/lib/**/*', to: '.'}
    ]),
    new ExtractTextPlugin("styles.css")
  ]
