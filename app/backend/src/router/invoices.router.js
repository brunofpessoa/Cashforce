const express = require('express');
const invoicesController = require('../controllers/invoices.controller');

const router = express.Router();

router.get('/', invoicesController.getInvoices);

module.exports = router;
