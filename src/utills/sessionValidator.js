const jwt = require('jsonwebtoken');

module.exports = (token, id) => {
  try {
    const decoded = jwt.verify(token, process.env.APP_AUTH_SECRET);

    return decoded === id;
  } catch (err) {
    return false;
  }
};
