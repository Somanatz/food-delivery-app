# Food Delivery App Backend Documentation

## Introduction
This document serves as the documentation for the backend development of a food delivery app. The primary focus of this application is to provide a REST API backend with a dynamic pricing module to calculate the total cost of food delivery based on various factors such as distance and item type.

## Features
### Dynamic Pricing Module
The application includes a dynamic pricing module that calculates delivery costs for different types of food items across various zones based on the distance and item type. Key features of the dynamic pricing module include:
- Base Distance and Price: A base distance and price are defined, with additional charges for distances beyond the base.
- Per Kilometer Price: Different pricing rates are applied for perishable and non-perishable items.
- Zone-specific Pricing: Pricing structures vary based on the zone and item type.

## Database Schema
The application utilizes a PostgreSQL database with the following schema:
- Organization: Stores information about organizations, including their ID and name.
- Item: Contains details about food items, such as type and description.
- Pricing: Defines pricing details linked to organizations and items, including zone-specific base pricing and per kilometer rates.

## Technical Specifications
### API Request and Response Format
- Request: The API expects a JSON object with parameters including zone, organization ID, total distance, and item type.
- Response: The API responds with a JSON object containing the total price for the delivery of specified food items in the given zone.

### Database Models
- Organization: { id, name }
- Item: { id, type, description }
- Pricing: { organization_id, item_id, zone, base_distance_in_km, km_price, fix_price }

### Code Structure
The application code is structured as follows:
- **Controllers**: Handle incoming requests and invoke corresponding service methods.
- **Services**: Contain business logic for various functionalities, including pricing calculations.
- **Models**: Define database models and schemas.
- **Routes**: Define API routes and their associated controller methods.
- **Tests**: Include unit tests for major functionalities and edge cases.

## Deployment
The application can be deployed on a platform like [render.com](https://render.com/) for hosting. A proper Swagger page can be set up to document the API endpoints.

## Node Modules
The `node_modules` directory contains dependencies required by the project. It is generated when running `npm install` or `yarn install` and should not be manually uploaded to version control. To install dependencies, run:
```bash
npm install
# or
yarn install
## Conclusion
The food delivery app backend provides a robust and scalable solution for calculating delivery costs based on various factors. With its dynamic pricing module and efficient database schema, the application offers flexibility and accuracy in determining total prices for food delivery operations.
