'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const path = require('path')
const config = require('../config')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',

  entry: {
    app: ['./src/entry-client.js']
  },

  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },

  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin(),
    new VueSSRClientPlugin()
  ]
})
