const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    photo: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Product', productSchema)