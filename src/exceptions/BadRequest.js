const GenericError = require('./GenericError');

class BadRequest extends GenericError {
  getCode() {
    if (this instanceof BadRequest) return 400;

    return 500;
  }
}

module.exports = BadRequest;
