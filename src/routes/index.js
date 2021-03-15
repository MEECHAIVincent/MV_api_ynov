const express = require('express');
const router = express.Router();

const usersRouter = require('./users.route');
const productsRouter = require('./products.route');
const orderRouter = require('./order.route');
const categoryRouter = require('./category.route');

router.use(usersRouter);
router.use(productsRouter);
router.use(orderRouter);
router.use(categoryRouter);

module.exports = router;