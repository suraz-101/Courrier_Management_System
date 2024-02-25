const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  return await bcrypt.hashSync(password, Number(process.env.SALT));
};

const comparePassword = async (password, hashedPass) => {
  return await bcrypt.compareSync(password, hashedPass);
};
module.exports = { hashPassword, comparePassword };
