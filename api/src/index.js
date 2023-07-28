const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/products')
const cors = require('cors')
const routerRegister = require('./routes/register/register')
const routerLogin = require('./routes/login/login')
const routermercadopago = require('./routes/mercadoPago')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//Routes
app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', routerRegister)
app.use('/api', routerLogin)
app.use('/api' ,routermercadopago)




//main Route
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