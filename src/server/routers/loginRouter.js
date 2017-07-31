const loginRouter = require('express').Router()
const db = require('../db')

loginRouter.get('/', (req, res) => {
    
})

loginRouter.post('/', (req, res) => {
    db.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(data => {
        if (data) {
            res.send(data)
        } else {
            res.send('fail')
        }
    })
})



module.exports = loginRouter