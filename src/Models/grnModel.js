const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const grnSchema = new mongoose.Schema({
    vendorName: String,
    vendorFullAddress: String,
    grnLineItems:
        [{
            grnLineItemId: {
                type: ObjectId,
                ref: 'grnLineItem'
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

module.exports = mongoose.model('grn', grnSchema)