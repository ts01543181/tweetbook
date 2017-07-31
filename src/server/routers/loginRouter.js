const loginRouter = require('express').Router()
const db = require('../db')

loginRouter.get('/login', (req, res) => {
    console.log(req.body)
})

loginRouter.post('/login', (req, res) => {
    console.log(req.body)
})



module.exports = loginRouter