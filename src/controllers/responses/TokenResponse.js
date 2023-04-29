const jwt = require('jsonwebtoken');

module.exports = (user) => {
  const dateNow = Math.floor(Date.now() / 1000);

  const userInfo = {
    id: user.id,
    name: user.name,
    email: user.email,
    login: user.login,
    role: user.role.type,
    iat: dateNow,
    expiresIn: dateNow + (3 * 60 * 60), // three hours
  };

  const authSecret = process.env.APP_AUTH_SECRET;

  return {
    ...userInfo,
    token: jwt.sign(userInfo, authSecret),
  };
};
