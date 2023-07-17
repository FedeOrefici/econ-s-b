const express = require('express')
const bcryptjs = require('bcrypt')
const routerRegister = express.Router()
const User = require('../../models/user')

routerRegister.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.json({message: 'El correo electrónico ya está registrado'})
        }
    const newUser = new User({name, email, password})
    const passwordHash = await bcryptjs.hash(newUser.password, 8)
    newUser.password = passwordHash

    await newUser.save()
    res.json({message: 'Registro exitoso'})
    } catch (error) {
        console.log({message: error.message})
        res.status(500).json({message: 'Error en el servidor'})
    }
})

module.exports = routerRegister;