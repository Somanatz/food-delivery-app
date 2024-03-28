// pricingController.test.js

const request = require('supertest');
const app = require('../app');

describe('POST /api/pricing/calculate-price', () => {
    it('should calculate price correctly', async () => {
        const response = await request(app)
            .post('/api/pricing/calculate-price')
            .send({ zone: 'central', organization_id: '005', total_distance: 12, item_type: 'perishable' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('total_price');
    });
});
