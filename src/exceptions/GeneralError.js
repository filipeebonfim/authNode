class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

module.exports = GeneralError;