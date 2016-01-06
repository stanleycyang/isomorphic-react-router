'use strict'

const path = require('path')
const config = require('../../config')
const bodyParser = require('body-parser')
const express = require('express')

/* connect the database */
const database = require('./db/')

/* start the app */
const app = express()

app.use(require('compression')({
  flush: require('zlib').Z_SYNC_FLUSH
}))

/* favicon */
//app.use(require('serve-favicon')(path.resolve(__dirname, '../../static/favicon.ico')))

/* Views */
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'jade')

/* Logging */
app.use(require('morgan')('dev'))

/* POST parsing */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('cookie-parser')())

app.use(express.static(path.join(__dirname, '../../static'), {
  maxAge: 86400000
}))

/* catch 404s */
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.static = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app
