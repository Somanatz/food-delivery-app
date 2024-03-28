// pricingController.js

const { calculatePrice } = require('../services/pricingService');

// Controller method to handle pricing calculation
const calculatePriceController = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type } = req.body;
        const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
        res.json({ total_price: totalPrice });
    } catch (error) {
        console.error('Error in calculatePriceController:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    calculatePriceController,
};
