// pricingRoutes.js

const express = require('express');
const router = express.Router();
const { calculatePriceController } = require('../controllers/pricingController');

// Define route handler for calculating price
router.post('/calculate-price', calculatePriceController);

module.exports = router;
