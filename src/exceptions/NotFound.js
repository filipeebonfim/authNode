const GeneralError = require('./GeneralError');

class NotFound extends GeneralError {
  getCode() {
    if (this instanceof NotFound) return 404;

    return 500;
  }
}

module.exports = NotFound;
