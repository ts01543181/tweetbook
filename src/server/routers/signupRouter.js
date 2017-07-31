const signupRouter = require('express').Router()
const db = require('../db')

signupRouter.get('/login', (req, res) => {
    console.log(req.body)
})

signupRouter.post('/login', (req, res) => {
    console.log(req.body)
})





module.exports = signupRouter