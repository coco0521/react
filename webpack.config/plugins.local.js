const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    new webpack.DefinePlugin({
        DEV_LOCAL: JSON.stringify(true),
        DEV_REMOTE: JSON.stringify(false),
        RELEASE: JSON.stringify(false),
        VERSION: JSON.stringify("1.0")
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/login.html'),
        filename: './login.html',
        chunks: ['login']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/messager.html'),
        filename: './messager.html',
        chunks: ['messager']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/setting.html'),
        filename: './setting.html',
        chunks: ['setting']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/reg.html'),
        filename: './reg.html',
        chunks: ['reg']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/createcompany.html'),
        filename: './createcompany.html',
        chunks: ['createcompany']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/index.html'),
        filename: './index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/post.html'),
        filename: './post.html',
        chunks: ['post']
    }),
    new HtmlWebpackPlugin({
        title: 'QQ',
        template: path.resolve(__dirname, '../src/person.html'),
        filename: './person.html',
        chunks: ['person']
    }),
    new ExtractTextPlugin("styles.css")
  ]
