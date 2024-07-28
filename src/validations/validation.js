const {ResponseError} = require("../errors/response-error");

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false, allowUnknown: false
  })
  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
}

module.exports = {
  validate,
}