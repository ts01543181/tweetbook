const feedsRouter = require('express').Router()
const db = require('../db')

feedsRouter.get('/tweets', (req, res) => {
    db.Tweet.findAll()
    .then(data => res.send(data))
})

feedsRouter.post('/tweets', (req, res) => {
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