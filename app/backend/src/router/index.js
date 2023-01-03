const express = require('express');
const ordersRouter = require('./orders.router');
const providersRouter = require('./providers.router');

const router = express.Router();

router.use('/', ordersRouter);
router.use('/provider', providersRouter);

module.exports = router;
