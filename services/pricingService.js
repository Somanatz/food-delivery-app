// pricingService.js

const Pricing = require('../models/pricing');
const { mockPricingDetails } = require('./mockData');

// Service method to calculate the total price
const calculatePrice = async (zone, organization_id, total_distance, item_type) => {
    try {
        // Fetch pricing details from the database based on provided parameters
        // In a real application, this would be replaced with an actual database query
        // For demonstration purposes, we'll use the mock pricing details
        const pricingDetails = mockPricingDetails;

        if (!pricingDetails) {
            throw new Error('Pricing details not found for the provided organization and zone');
        }

        // Calculate total price based on pricing details and distance
        let totalPrice = pricingDetails.fix_price; // Base price
        const additionalDistance = Math.max(0, total_distance - pricingDetails.base_distance_in_km);
        totalPrice += additionalDistance * (item_type === 'perishable' ? pricingDetails.km_price : pricingDetails.km_price);

        return totalPrice;
    } catch (error) {
        throw new Error('Failed to calculate price: ' + error.message);
    }
};

module.exports = {
    calculatePrice,
};
