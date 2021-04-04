const jwt = require('jsonwebtoken');
const Unauthorized = require('../exceptions/Unauthorized');

const requireAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) throw new Error('Authorization header not found');

    const decoded = jwt.verify(token, process.env.APP_AUTH_SECRET);

    req.user = decoded;

    return next();
  } catch (e) {
    throw new Unauthorized(e.message);
  }
};

module.exports = { requireAuth };
