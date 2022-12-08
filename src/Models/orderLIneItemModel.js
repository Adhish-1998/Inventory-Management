const mongoose = require('mongoose')

const orderLIneItemSchema = new mongoose.Schema({
    productName : String,
    quantity : {
        type : Number,
        default: 0 
    },
    sellPrice : Number,
    deleted : {
        type : Boolean,
        default: false
    }
},{timestamps : true});

module.exports = mongoose.model('orderLIneItem', orderLIneItemSchema)