const feedsRouter = require('express').Router()
const db = require('../db')

feedsRouter.get('/', (req, res) => {
    db.Tweet.findAll()
    .then(data => res.send(data))
})

feedsRouter.post('/', (req, res) => {
    db.Tweet.create({
        user: req.body.user,
        message: req.body.message
    })
    .then(() => {
        db.Tweet.findAll()
        .then(data => {
            res.send(data)
        })
    })
})


module.exports = feedsRouter