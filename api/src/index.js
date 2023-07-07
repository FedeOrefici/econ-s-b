const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use('/api', userRoutes)

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongodb'))
.catch((err) => console.log(err))

//start to server
app.listen(port, () => {
    console.log(`server working on ${port}`)
})