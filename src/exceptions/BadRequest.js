const GeneralError = require('./GeneralError');

class BadRequest extends GeneralError {
  getCode() {
    if (this instanceof BadRequest) return 400;

    return 500;
  }
}

module.exports = BadRequest;
