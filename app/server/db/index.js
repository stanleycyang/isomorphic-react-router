'use strict'

const config = require('../../../config')
const mongoose = require('mongoose')

/* DB */
const database = config.MONGODB_URI

/* Connect to the DB */
mongoose.connect(database)

/* Grab the connection */
const connection = mongoose.connection

/* Error handling */
connection.on('error', (msg) => {
  console.error(msg)
})

connection.once('open', () => {
  console.log(`db connected to ${database}`)
})

/* Export the database connection */
module.exports =  mongoose
