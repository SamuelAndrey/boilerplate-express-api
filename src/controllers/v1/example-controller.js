const exampleService = require('../../services/v1/example-service')
const example = async (req, res, next) => {
  try {
    const example = await exampleService.example();
    res.status(200).json({
      data: example
    });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  example,
}