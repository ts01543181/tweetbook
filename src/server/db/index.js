const Sequelize = require('sequelize')
const db = new Sequelize('tweet_feeds', 'root', '', {dialect: 'mysql'})


const User = db.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    profilePicture: Sequelize.TEXT
})


const Tweet = db.define('Tweet', {
    message: Sequelize.TEXT,
    user: Sequelize.STRING,
    comments: {
        type: Sequelize.TEXT,
        allowNull: true,
        get() {
            return this.getDataValue('comments')
        }
    }
})


db.sync()

module.exports = {
    User,
    Tweet
}