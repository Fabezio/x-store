const mongoose = require('mongoose')
// const db = "x-store"
// const User = require('../models/User')
const localUrl = 'mongodb://localhost:27017/x-store'
mongoose.connect(localUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB')
})
// const { model, Schema } = mongoose
