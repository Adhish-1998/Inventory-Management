
const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    productName :{
        type : String,
        unique : true   
    },
    quantity : {
        type : Number,
        default: 0 
    },
    stockPrice : Number,
    sellPrice : Number,
    deleted : {
        type : Boolean,
        default: false
    }
},{timestamps : true});

module.exports = mongoose.model('Item', ItemSchema)