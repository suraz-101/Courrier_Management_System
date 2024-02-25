const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com"] } }),
  password: Joi.string().required(),
  profilePic: Joi.string(),
  roles: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com"] } }),
  password: Joi.string().required(),
});

const forgetPassword = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com"] } }),
  otp: Joi.number().required(),
  newPassword: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string(),
  email: Joi.string().email({ tlds: { allow: true } }),
  profilePic: Joi.string(),
});

const updateRole = Joi.object({
  id: Joi.string().required(),
  roles: Joi.string().required(),
});

const changePassword = Joi.object({
  email: Joi.string(),
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});

const updateUserValidation = (req, res, next) => {
  const { error } = updateUserSchema.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

const userValidation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

const loginValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

const forgetPasswordValidation = (req, res, next) => {
  const { error } = forgetPassword.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

const updateRoleValidation = (req, res, next) => {
  const { error } = updateRole.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

const changePasswordValidation = (req, res, next) => {
  const { error } = changePassword.validate(req.body);
  error ? res.status(500).json({ message: error.details[0].message }) : next();
};

module.exports = {
  userValidation,
  loginValidation,
  forgetPasswordValidation,
  updateUserValidation,
  updateRoleValidation,
  changePasswordValidation,
};
