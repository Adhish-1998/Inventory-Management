const grnModel = require('../Models/grnModel')

const createGrn = async (req,res) =>{
    req.body.date = Date.now()
    let data = await grnModel.create(req.body)
    return res.status(201).send({status : 'GENERATED', data : data})
}

const getGrn = async (req,res) =>{
    let data = await grnModel.find()
    if(data.length == 0 )
        return res.status(404).send({status: 'CANCELLED', message : "No Data Found !!!"})

    return res.status(201).send({status : 'COMPLETED', data : data})
}

const updateGrn = async (req,res) =>{
    let id = req.params.id
    let updateObj = {deleted : false}
    if(req.body.vendorName) updateObj['vendorName'] = req.body.vendorName
    if(req.body.vendorFullAddress) updateObj['vendorFullAddress'] = req.body.vendorFullAddress
    if(req.body.status) updateObj['status'] = req.body.status
    if(req.body.invoiceNumer) updateObj['invoiceNumer'] = req.body.invoiceNumer

    let data = await grnModel.findOneAndUpdate(
        {_id:id},
        updateObj,
        {new : true}
    )
    return res.status(200).send({status : 'COMPLETED', data: data})
}

const deleteGrn = async (req,res) =>{
    let data = await grnModel.findOneAndUpdate(
        {_id : req.params.id, deleted : false},
        {$set : {deleted : true}}
    )
    if(!data) return res.status(404).send({status: 'CANCELLED', message: "Not Found !!!"})
    return res.status(200).send({status : 'COMPLETED'})

}

const updateGrnStatus = async (req,res) =>{
    let data = await grnModel.findOneAndUpdate(
        {_id:req.params.id, deleted: false },
        {$set : {status : req.body.status} },
        {new : true}
    )
    if(!data) return res.status(404).send({status:'CANCELLED'})
    return res.status(200).send({status:'COMPLETED'})
}

module.exports = {
    createGrn,
    getGrn,
    updateGrn,
    deleteGrn,
    updateGrnStatus
}