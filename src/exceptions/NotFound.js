const GenericError = require('./GenericError');

class NotFound extends GenericError {
  getCode() {
    if (this instanceof NotFound) return 404;

    return 500;
  }
}

module.exports = NotFound;
