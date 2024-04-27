const JWT = require("jsonwebtoken");

const tokenGeneration = (payload) => {
  return JWT.sign({ data: payload }, process.env.SECRET_KEY, {
    expiresIn: process.env.DURATION,
  });
};

const tokenVerification = (token) => {
  return JWT.verify(token, process.env.SECRET_KEY);
};

module.exports = { tokenGeneration, tokenVerification };
