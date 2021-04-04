const { Router } = require('express');

const { requireAuth } = require('../middleware/AuthMiddleware');
const productsController = require('../controllers/productController');

const userRoutes = new Router();

userRoutes.use(requireAuth);
userRoutes.use('/products', productsController);

module.exports = userRoutes;
