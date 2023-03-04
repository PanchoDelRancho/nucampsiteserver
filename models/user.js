const mongoose = require('mongoose')
const { String, Boolean } = require('mongoose/lib/schema/index')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: Boolean,
    default: false
  }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
