const mongoose = require('mongoose')

const grnLineItemsSchema = new mongoose.Schema({
    productName : String,
    quantity : {
        type : Number,
        default: 0 
    },
    stockPrice : Number,
    deleted : {
        type : Boolean,
        default: false
    }
},{timestamps : true});

module.exports = mongoose.model('grnLineItems', grnLineItemsSchema)