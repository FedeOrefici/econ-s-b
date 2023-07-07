const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

//create user
//use the model to ask the data from the body
router.post('/users', (req, res) => {
    const user = userSchema(req.body)
     user
     .save()
     .then((data) => res.json(data))
     .catch((err) => res.json({message: err.message}))
     
})

//get users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch(((err) => res.json({message: err.message})))
})

//get user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id) //always need an id to find by id
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err.message}))
})

//edit user
router.put('/users/:id', (req, res) => {
    const { id }  = req.params;
    const { name, age, email } = req.body;
    userSchema //2 parameters
        .updateOne( {_id: id}, { $set: {name, age, email} }) //set the data and put in an object 
        .then((data) => res.json((data)))
        .catch((err) => res.json({message: err.message}))
})

//delete user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err.message}))
})






module.exports = router;