const express = require('express');
const router = express.Router();
const order = require('../controllers/orders.controller');

router.post('/order' ,order.create); 
router.get('/orders' ,order.getOrders); 
router.get('/orders/:id' ,order.getOrder); 

router.post('/orders/update/:id' ,order.updateOrder); 
router.get('/orders/delete/:id' ,order.deleteOrder); 

module.exports = router;