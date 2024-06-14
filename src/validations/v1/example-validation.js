const Joi = require('joi');

const example = Joi.object({
  id: Joi.number().positive().required(),
  name: Joi.string().max(255).required(),
});

module.exports = {
  example,
}
