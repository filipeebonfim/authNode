const genericResponse = (response, statusCode, body, info) => {
  response.status(statusCode).send({
    ...info,
    result: body,
  });
};

const successResponse = (response, body, info) => genericResponse(response, 200, body, info);

const badRequestResponse = (response, info) => genericResponse(response, 400, null, info);

const internalErrorResponse = (response, info) => genericResponse(response, 500, null, info);

module.exports = {
  successResponse,
  badRequestResponse,
  internalErrorResponse,
  genericResponse,
};
