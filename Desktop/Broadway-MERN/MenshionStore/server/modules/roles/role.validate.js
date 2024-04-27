const Joi = require("joi");

const Schema = Joi.object({
  role: Joi.string(),
});

const roleValidation = (req, res, next) => {
  const { error } = Schema.validate(req.body);

  error
    ? res.status(400).json({ message: error.details[0].message })
    : next(error);
};

module.exports = { roleValidation };
