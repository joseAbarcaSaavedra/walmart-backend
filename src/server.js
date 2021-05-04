'use strict'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import Discounts from './api/discounts'
import Products from './api/products'

// Init DB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
mongoose.Promise = global.Promise
var db = mongoose.connection
//Bind connection to error event (to get notification of connection errors)
db.on(
  'error',
  // TODO - handle alert/notification
  console.error.bind(console, 'MongoDB connection error:')
).once('open', function () {
  console.log('CONNECTED!')
})

// Constants
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

// App
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Endpoints
app.use('/api/discounts', Discounts)
app.use('/api/products', Products)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
