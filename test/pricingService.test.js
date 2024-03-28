// pricingService.test.js

const { calculatePrice } = require('../services/pricingService');
const { mockPricingDetails, mockInputParams } = require('../services/mockData');
const Pricing = require('../models/pricing');

describe('calculatePrice', () => {
    it('should calculate price correctly', async () => {
        // Mock the Sequelize findOne method to return mock pricing details
        jest.spyOn(Pricing, 'findOne').mockResolvedValue(mockPricingDetails);

        // Call the calculatePrice method with mock input parameters
        const totalPrice = await calculatePrice(
            mockInputParams.zone,
            mockInputParams.organization_id,
            mockInputParams.total_distance,
            mockInputParams.item_type
        );

        // Expected total price calculation
        // Base price = 10 euros
        // Additional distance = (12 - 5) km * 1.5 EUR/km = 10.5 euros
        // Total price = Base price + Additional distance = 10 + 10.5 = 20.5 euros
        expect(totalPrice).toBe(20.5);
    });
});
