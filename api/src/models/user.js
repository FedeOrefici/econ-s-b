const mongoose = require('mongoose')
const Product = require('./product')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    products: [Product.schema]
})

module.exports = mongoose.model('User', userSchema);