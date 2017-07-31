const userRouter = require('express').Router()
const db = require('../db')

userRouter.get('/:username', (req, res) => {
    db.Tweet.findAll({
        where: {
            user: req.params.username
        }
    })
    .then(data => res.send(data))
})

userRouter.get('/img/:username', (req, res) => {
    db.User.findOne({
        where: {
            username: req.params.username
        }
    })
    .then(data => res.send(data))
})

userRouter.post('/img', (req, res) => {
    
    db.User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(data => {
        data.updateAttributes({
            profilePicture: req.body.imgURL
        })
    })
})


module.exports = userRouter