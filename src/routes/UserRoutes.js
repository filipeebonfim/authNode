const { Router } = require('express');

const { userAuth } = require('../middleware/AuthMiddleware');

const userRoutes = new Router();

userRoutes.use('/user', userAuth);

module.exports = userRoutes;
