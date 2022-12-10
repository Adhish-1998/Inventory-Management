const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema({
    customerName: String,
    customerFullAddress: String,
    orderLineItems:
        [{
            orderLIneItemId: {
                type: ObjectId,
                ref: 'orderLIneItem'
            }

        }],
    date: Date,
    status: {
        type: String,
        enum: ['GENERATED', 'COMPLETED', 'CANCELLED'],
        default: 'GENERATED'
    },
    invoiceNumer: Number,
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)