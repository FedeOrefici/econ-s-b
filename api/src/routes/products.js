const express = require('express')
const productSchema = require('../models/product')
const userSchema = require('../models/user')

const router = express.Router()

//create product
router.post('/products', async(req, res) => {
    try {
        const userId = req.body.owner
        const user = await userSchema.findById(userId)
        const product = new productSchema(req.body)
        await product.validate()
        const savedProduct = await product.save()
        const allData = user.products.push(savedProduct)
        await user.save()
        res.json(allData)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/products/', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err.message}))
})


router.get('/products/:id', (req, res) => {
    const { id } = req.params
    productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err.message}))
})

router.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { name, description, photo, price } = req.body
    productSchema
        .updateOne( {_id: id,}, { $set: {name, description, photo, price}})
        .then((data) => res.json(data))
        .catch((err) => ({message: err.message}))

})

router.delete('/products/:id', (req, res) => {
    const { id } = req.params
    productSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((err) => ({message: err.message}))
})

module.exports = router