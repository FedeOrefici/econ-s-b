const express = require('express')
const bcryptjs = require('bcrypt')
const routerLogin = express.Router()
const User = require('../../models/user')

routerLogin.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({error: 'Invalid credential. User not found'})
        }
        const passwordMatch = await bcryptjs.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({error: 'Invalid credentials. Wrong password'})
        }
        return res.status(200).json({message: 'Login successful'})
    } catch (error) {
        res.status(500).json({error: 'Server error, Try again'})
    }
})

module.exports = routerLogin;