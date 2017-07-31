const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const path = require('path')
const mainRouter = require('./routers/mainRouter')


const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../client/public')))

app.use('/api', mainRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Listening on port ${PORT}`)
    }
})