const orderLineItemModel = require('../Models/orderLIneItemModel')

const addOrderLIneItem = async(req,res) =>{
    let data = await orderLineItemModel.findOne({productName: req.body.productName})

    if(!data){
        data = await orderLineItemModel.create(req.body)
        return res.status(201).send({status: 'GENERATED', data: data})
    }else{
        req.body.quantity += data.quantity
        data = data = await orderLineItemModel.findOneAndUpdate(
            {productName : req.body.productName},
            {$set : {quantity : req.body.quantity}},
            {new : true}
        )
        return res.status(200).send({status: 'GENERATED', data: data})
    }
    
}

module.exports = {
    addOrderLIneItem
}