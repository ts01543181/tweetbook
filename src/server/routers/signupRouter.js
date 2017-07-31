const signupRouter = require('express').Router()
const db = require('../db')

signupRouter.get('/', (req, res) => {
    console.log(req.body)
})

signupRouter.post('/', (req, res) => {
    db.User.findAll({
        where: {
            username: req.body.username
        }
    })
    .then(data => {
        if (data.length === 0) {
            db.User.create({
                username: req.body.username,
                password: req.body.password
            })
            .then(() => res.send('success'))
        } else {
            res.send('fail')
        }
    })
})





module.exports = signupRouter