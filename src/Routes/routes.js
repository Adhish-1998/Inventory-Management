const express = require('express')
const router = express.Router()

const {createGrn, getGrn, updateGrn, deleteGrn, updateGrnStatus} = require('../Controller/grnController')
const {addGrnLineItem} = require('../Controller/grnLineItemController')
const {createOrder, getOrder, updateOrder, deleteOrder, updateOrderStatus} = require('../Controller/orderController')
const {addOrderLIneItem} = require('../Controller/orderLIneItemController')
const {addItem,getItem} = require('../Controller/ItemController')


//-------------For grn------------------//
router.post("/grn", createGrn )
router.get("/grn", getGrn )
router.put("/grn/:id", updateGrn )
router.delete("/grn/:id", deleteGrn )
router.post('/grn/update-status/:id', updateGrnStatus)

//-------------For grnLineItem-------------//
router.post("/grnLineItem", addGrnLineItem )

//-------------For order------------------//
router.post("/order", createOrder )
router.get("/order", getOrder )
router.put("/order/:id", updateOrder )
router.delete("/order/:id", deleteOrder )
router.post('/order/update-status/:id', updateOrderStatus)


//-------------For grnLineItem-------------//
router.post("/orderLIneItem", addOrderLIneItem )

//-------For Item----------//
router.post('/item', addItem)
router.get('/item', getItem)

router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Invalid URL !!!"
    })
})




module.exports = router