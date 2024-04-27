const userModel = require("./user.model");
const {
  hashThePassword,
  compareHashedPassword,
} = require("../../utils/bcrypt");
const { mailer } = require("../../services/mailer");
const { tokenGeneration } = require("../../utils/token");

const createUser = (payload) => {
  return userModel.create(payload);
};

const getAllUsers = () => {
  return userModel.find();
};

const getUser = (_id) => {};

const updateUserDetails = (_id, payload) => {};
const deleteUser = (_id) => {};

const registerUser = async (payload) => {
  const { email, password } = payload;
  const hashedPass = await hashThePassword(password);
  payload.password = hashedPass;
  const userRegistration = await userModel.create(payload);
  if (!userRegistration) throw new Error("Registration Failed");
  await mailer(
    email,
    "Registration Success",
    "CONGRATULATIONS!! You have successfully Registered into our system"
  );
  // if (!mailStatus) throw new Error(" Email failed to send!!");
  return "Registration Successfull, CONGRATULATIONS!!";
};

const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("email or password is missing!!");
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) throw new Error(" User does not exist. Please enter valid email");
  const { password: hashPassword } = await user;
  const passwordComparision = await compareHashedPassword(
    password,
    hashPassword
  );
  if (!passwordComparision) throw new Error("Password does not matched!!");
  const tokenPayload = { name: user.name, email: user.email, role: user.roles };
  const token = await tokenGeneration(tokenPayload);
  return token;
};

const resetPassword = async (payload) => {
  const { id, newPassword } = payload;
  if (!id || !newPassword) throw new Error("id or newPassword is missing");
  const user = await userModel.findOne({ _id: id }).select("+password");
  if (!user) throw new Error("user not found");
  const hashedNewPassword = await hashThePassword(newPassword);
  await userModel.updateOne({ _id: user.id }, { password: hashedNewPassword });
  return "password reset successfully";
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUserDetails,
  deleteUser,
  loginUser,
  registerUser,
  resetPassword,
};
