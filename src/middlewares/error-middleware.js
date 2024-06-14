const { ResponseError } = require("../errors/response-error");

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({
      error: err.message
    }).end();
  } else {
    res.status(500).json({
      error: err.message,
    }).end();
  }
};

module.exports = {
  errorMiddleware,
}
