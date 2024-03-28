// pricing.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pricing = sequelize.define('Pricing', {
    organization_id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    zone: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    km_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fix_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Pricing;
