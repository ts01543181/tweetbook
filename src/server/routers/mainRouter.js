const router = require('express').Router()
const feedsRouter = require('./feedsRouter')
const userRouter = require('./userRouter')
const loginRouter = require('./loginRouter')
const signupRouter = require('./signupRouter')



router.use('/tweets', feedsRouter)

router.use('/login', loginRouter)

router.use('/signup', signupRouter)

router.use('/user', userRouter)


module.exports = router