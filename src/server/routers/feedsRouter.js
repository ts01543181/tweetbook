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

feedsRouter.get('/comments/:username', (req, res) => {
    db.User.findOne({
        where: {
            username: req.params.username
        }
    })
    .then(data => res.send(data))
})

feedsRouter.post('/comments', (req, res) => {
    db.Tweet.findOne({
        where: {
            id: req.body.feed.id
        }
    })
    .then(tweet => {
        // tweet.comments = req.body.comment
        let previousComments = tweet.get().comments
  
        let newComments =  previousComments + ',' + req.body.user + ':' + req.body.comment
        tweet.update({
            comments: newComments
        })
        res.send(tweet)
    })
})

feedsRouter.get('/showComments/:feedId', (req, res) => {
    db.Tweet.findOne({
        where: {
            id: req.params.feedId
        }
    })
    .then(data => {
        let comments = data.comments.split(',').slice(1)
        res.send(comments)
    })
})
module.exports = feedsRouter