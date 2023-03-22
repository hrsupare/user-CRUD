const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const router = require('./src/route')

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log("mongodb is connected")
}).catch((err) => {
    console.log(err)
})

app.use("/" , router)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`express app is running on ${PORT} `)
})
//mongodb://localhost:27017