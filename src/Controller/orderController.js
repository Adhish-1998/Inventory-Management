const orderModel = require('../Models/orderModel')

const createOrder = async(req,res) =>{
   req.body.date = Date.now() 
   let data = await orderModel.create(req.body) 
   return res.status(201).send({status: 'GENERATED', data: data})
}

const getOrder = async (req,res) =>{
    let data = await orderModel.find()
    if(data.length == 0 )
        return res.status(404).send({status: 'CANCELLED', message : "No Data Found !!!"})

    return res.status(201).send({status : 'COMPLETED', data : data})
}

const updateOrder = async (req,res) =>{
    let id = req.params.id
    let updateObj = {deleted : false}
    if(req.body.customerName) updateObj['customerName'] = req.body.customerName
    if(req.body.customerFullAddress) updateObj['customerFullAddress'] = req.body.customerFullAddress
    if(req.body.status) updateObj['status'] = req.body.status
    if(req.body.invoiceNumer) updateObj['invoiceNumer'] = req.body.invoiceNumer

    let data = await orderModel.findOneAndUpdate(
        {_id:id},
        updateObj,
        {new : true}
    )
    return res.status(200).send({status : 'COMPLETED', data: data})
}

const deleteOrder = async (req,res) =>{
    let data = await orderModel.findOneAndUpdate(
        {_id : req.params.id, deleted : false},
        {$set : {deleted : true}}
    )
    if(!data) return res.status(404).send({status: 'CANCELLED', message: "Not Found !!!"})
    return res.status(200).send({status : 'COMPLETED'})
}

const updateOrderStatus = async(req,res) =>{
    let data = await orderModel.findOneAndUpdate(
        {_id:req.params.id, deleted: false },
        {$set : {status : req.body.status} },
        {new : true}
    )
    if(!data) return res.status(404).send({status:'CANCELLED'})
    return res.status(200).send({status:'COMPLETED'})
}

module.exports = {
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    updateOrderStatus
}