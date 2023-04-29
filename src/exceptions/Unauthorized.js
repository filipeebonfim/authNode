const GenericError = require('./GenericError');

class Unauthorized extends GenericError {
  getCode() {
    if (this instanceof Unauthorized) return 401;

    return 500;
  }
}

module.exports = Unauthorized;
