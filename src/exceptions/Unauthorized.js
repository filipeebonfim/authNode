const GeneralError = require('./GeneralError');

class Unauthorized extends GeneralError {
  getCode() {
    if (this instanceof Unauthorized) return 401;

    return 500;
  }
}

module.exports = Unauthorized;
