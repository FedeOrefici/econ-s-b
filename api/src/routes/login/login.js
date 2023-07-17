const express = require('express')
const bcryptjs = require('bcrypt')
const routerLogin = express.Router()
const User = require('../../models/user')

routerLogin.get('/login', (req, res) => {
    try {
        console.log('login');
    } catch (error) {
        console.log('error');
    }
})

module.exports = routerLogin;