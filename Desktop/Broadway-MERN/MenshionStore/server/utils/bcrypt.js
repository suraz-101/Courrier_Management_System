require("dotenv").config();
const bcrypt = require("bcryptjs");

const hashThePassword = (password) => {
  return bcrypt.hashSync(password, Number(process.env.SALT_ROUND));
};

const compareHashedPassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { hashThePassword, compareHashedPassword };
