const express = require('express')
const bcryptjs = require('bcrypt')
const routerLogin = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
require('dotenv').config()
const secret = process.env.SECRET_KEY

routerLogin.post('/login', async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({message: 'Invalid credential. User not found'})
        }
        const passwordMatch = await bcryptjs.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({error: 'Invalid credentials. Wrong password'})
        }

        const token = jwt.sign({userId: user._id, email: user.email, name: user.name}, secret)
        const decodedToken = jwt.verify(token, secret)

        const userInfo = {_id: decodedToken.userId, email: decodedToken.email, name: decodedToken.name}

        return res.status(200).json({message: 'Login successful', token, user: userInfo})

    } catch (error) {
        console.log({message: error.message});
        res.status(500).json({message: 'Server error, Try again'})
    }
})

module.exports = routerLogin;