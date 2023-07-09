const express = require('express')
const productSchema = require('../models/product')

const router = express.Router()

//create product
router.post('/product', (req, res) => {
    const product = productSchema(req.body)
    product
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err.message}))
})

router.get('/product', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err.message}))
})

module.exports = router