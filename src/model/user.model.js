//schema 
//model creation
const mongoose = require('mongoose')

const user = mongoose.Schema({
    firstName : String,
    lastName:String
})

export const userModel = mongoose.model('User', user);



