const { Router } = require('express');
const swaggerUI = require('swagger-ui-express');
const specs = require('../config/swaggerConfig');

const publicController = require('../controllers/public/publicController');
const productsController = require('../controllers/public/productController');

const publicRoutes = new Router();

/* Swagger instance */
publicRoutes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
publicRoutes.use('/public', publicController);

publicRoutes.use('/products', productsController);

module.exports = publicRoutes;
