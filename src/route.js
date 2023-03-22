//create user  // 
//get user //admin
//getuserbyid
//update user 
//delete user

const { getAllUser, createUser, findUserByID } = require('./controller/user.controller')

const router = require('express').Router()

router.get("/getalluser", getAllUser)

router.post('/createUser', createUser)

router.get("/findByID/:ID", findUserByID)

module.exports = router

