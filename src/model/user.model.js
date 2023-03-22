//schema 
//model creation
const mongoose = require('mongoose')

const user = mongoose.Schema({
    firstName: String,
    lastName: String, 
    email :String
})
const userModel = mongoose.model('User', user);
module.exports = { userModel }

