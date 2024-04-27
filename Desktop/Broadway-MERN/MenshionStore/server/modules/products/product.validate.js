const Joi = require("joi");

// const { Schema } = require("mongoose");

const Schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  discount: Joi.number(),
  addedBy: Joi.required(),
  image: Joi.string(),
});

const validateProductData = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { validateProductData };
