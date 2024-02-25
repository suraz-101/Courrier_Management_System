const { verifyToken } = require("./token");
const userModel = require("../modules/users/user.model");
const checkRole = (sysRole) => {
  return async (req, res, next) => {
    try {
      const { token } = req.headers;
      const { roles, email } = verifyToken(token);
      const checkValidRole = sysRole.some((role) => roles.includes(role));
      if (!checkValidRole) throw new Error("Permission Deniend");
      // const user = await userModel.findOne({ email });
      req.body.email = email;
      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { checkRole };
