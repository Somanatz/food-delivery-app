// pricingValidation.js

const Joi = require('joi');

// Validation schema for price calculation request
const calculatePriceSchema = Joi.object({
    zone: Joi.string().required(),
    organization_id: Joi.string().required(),
    total_distance: Joi.number().min(0).required(),
    item_type: Joi.string().valid('perishable', 'non-perishable').required(),
});

module.exports = {
    calculatePriceSchema,
};
