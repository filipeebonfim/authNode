const GeneralError = require('../exceptions/GeneralError');

const ExceptionHandler = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'Error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: err.message,
  });
};

module.exports = ExceptionHandler;
