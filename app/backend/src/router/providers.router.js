const express = require('express');
const providersController = require('../controllers/providers.controller');

const router = express.Router();

router.get('/:id', providersController.getProviderDetails);

module.exports = router;
