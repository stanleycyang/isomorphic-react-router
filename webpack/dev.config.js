'use strict'

const webpack = require('webpack')
const assign = require('object-assign')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const prodConfig = require('./prod.config.js')

// Use Object.assign
Object.assign = assign

const BABEL_QUERY = {
  presets: ['react', 'es2015'],
  plugins: [
    ['transform-object-rest-spread'],
    ['transform-class-properties'],
    ['transform-decorators-legacy'],
    [
      'react-transform',
      {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports:    ['react'],
            locals:     ['module']
          }
        ]
      }
    ]
  ]
}

exports.webpackDevConfig = function(app) {
  const config = Object.assign(prodConfig, {
    devtool: 'inline-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './app/react/'
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: BABEL_QUERY
        }
      ]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  })

  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, { noInfo: true }))
  app.use(webpackHotMiddleware(compiler))
}
