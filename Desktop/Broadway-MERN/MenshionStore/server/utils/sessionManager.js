const userModel = require("../modules/users/user.model");
const { tokenVerification } = require("./token");

const checkRole = (sysRole) => {
  return async (req, res, next) => {
    console.log(req.headers);
    const { token } = req.headers;
    if (!token) throw new Error("Token is required");
    const { data } = tokenVerification(token);
    const isValid = sysRole.some((role) => data.role.includes(role));
    if (!isValid) throw new Error("Permission Denied ");
    const { email } = data;
    const user = await userModel.findOne({ email });
    req.body.addedBy = user?._id;
    next();
  };
};

module.exports = { checkRole };
