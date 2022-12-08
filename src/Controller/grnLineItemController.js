const grnLineItemModel = require('../Models/grnLineItemModel')

const addGrnLineItem = async(req,res) =>{
    let data = await grnLineItemModel.findOne({productName: req.body.productName})

    if(!data){
        data = await grnLineItemModel.create(req.body)
        return res.status(201).send({status: 'GENERATED', data: data})
    }else{
        req.body.quantity += data.quantity
        data = data = await grnLineItemModel.findOneAndUpdate(
            {productName : req.body.productName},
            {$set : {quantity : req.body.quantity}},
            {new : true}
        )
        return res.status(200).send({status: 'GENERATED', data: data})
    }
    
}

module.exports = {
    addGrnLineItem
}