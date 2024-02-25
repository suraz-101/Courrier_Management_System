const JWT = require("jsonwebtoken");
const crypto = require("crypto");

const generateToken = (payload) => {
  return JWT.sign(payload, process.env.SECRETE, {
    expiresIn: process.env.DURATION,
  });
};

const verifyToken = (token) => {
  return JWT.verify(token, process.env.SECRETE);
};

const generateOtpCode = () => {
  return crypto.randomInt(100000, 999999);
};

module.exports = { generateToken, verifyToken, generateOtpCode };
