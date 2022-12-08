const itemModel = require('../Models/ItemModel')

const addItem = async(req,res) => {
    let data = await itemModel.create(req.body)
    return res.status(201).send({status : 'COMPLETED', data : data})
}

const getItem = async(req,res) => {
    let data = await itemModel.find()
    return res.status(200).send({status: 'COMPLETED', data : data})
}

module.exports = {
    addItem,
    getItem
}