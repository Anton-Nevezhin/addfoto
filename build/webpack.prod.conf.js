/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-new */
/* eslint-disable no-undef */
'use strict'

const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(require('./webpack.base.conf'), {
  output: {
    filename: config().assetsSubDirectory + '/js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin(config().assetsSubDirectory + '/css/[name].[contenthash].css'),
    new UglifyJSPlugin()
  ]
  
})
// eslint-disable-next-line eol-last
