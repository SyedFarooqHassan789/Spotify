var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'public/webpackbundle');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        login: APP_DIR + '/components/frontpage/index.jsx',
        signup: APP_DIR + '/components/signupage/index.jsx',
        mainpage: APP_DIR + '/components/mainpage/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name]bundle.js'
    },
    resolve: {
        // This is so that you don't have to write the file extension while importing it.
        // Instead of import HomeComponent from './HomeComponent.jsx'
        // you can do import HomeComponent from './HomeComponent'
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
