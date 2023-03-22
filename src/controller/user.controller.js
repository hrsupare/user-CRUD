const { userModel } = require("../model/user.model");



async function getAllUser(req, res) {
   const data = await userModel.find()
   return res.send({ data: data })
}

async function createUser(req, res) {
   const data = req.body
   const create = await userModel.create(data)
   console.log(create)
   return res.send({ data: create })
}


async function findUserByID(req, res) {
   const params = req.params
  console.log(params.ID)
   const user = await userModel.findById(params.ID)
   console.log(user)
   return res.send({ data: user })
}


module.exports = { getAllUser, createUser, findUserByID }
