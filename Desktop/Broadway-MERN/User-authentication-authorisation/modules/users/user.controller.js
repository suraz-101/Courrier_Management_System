const userModel = require("./user.model");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const { mailer } = require("../../services/mailer");
const { generateToken, generateOtpCode } = require("../../utils/token");

//To register user into database
const registerUser = async (payload) => {
  const { password, email } = payload;
  const hashedPass = await hashPassword(password);
  payload.password = hashedPass;
  const user = await userModel.create(payload);
  if (!user) throw new Error("Registration Failed");
  const mailing = await mailer(
    email,
    "Registration Status",
    "Registration Completed"
  );
  if (!mailing) throw new Error("Registration Failed");
  return "Registration Completed Successfully";
};

// To login into the system
const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("email or password is missing");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("user does not exists!");
  const comparingPassword = await comparePassword(password, user.password);
  console.log(comparingPassword);
  if (!comparingPassword) throw new Error("password does not matched!!");
  const jwtPayload = { name: user.name, email: user.email, roles: user.roles };
  console.log(jwtPayload);
  const token = await generateToken(jwtPayload);
  return token;
};

// generate otp and store into the database after user clicks forget password link
const generateOtp = async (payload) => {
  const { email } = payload;
  if (!email) throw new Error("email is required");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("user not found");
  const otp = await generateOtpCode();
  console.log(otp);
  payload.otp = otp;
  await userModel.updateOne({ _id: user._id }, payload);
  await mailer(email, "OTP CODE", `This is an otp code: ${otp}`);
  return "otp sent !!";
};

// to change the password use otp from database and the otp sent by user along with new password and change into the database
const verifyOtpChangePassword = async (payload) => {
  const { email, otp, newPassword } = payload;
  if (!email || !otp || !newPassword)
    throw new Error("email or otp or newPassword is missing");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("user not found");
  if (user.otp !== otp) throw new Error("Invalid OTP code");
  const hashedPassword = await hashPassword(newPassword);
  const updatedUser = await userModel.updateOne(
    { _id: user._id },
    { password: hashedPassword, otp: "" }
  );
  if (!updatedUser) throw new Error("Password failed to change");
  return "password changed successfully!!";
};

const userList = async (search, page = 1, limit = 2) => {
  const query = [];
  query.push({
    $sort: {
      createdAt: -1,
    },
  });

  if (search?.name) {
    query.push({
      $match: {
        name: new RegExp(search.name, "gi"),
      },
    });
  }

  query.push(
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        roles: 1,
        profilePic: 1,
      },
    },
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit,
          },
          {
            $limit: +limit,
          },
        ],
      },
    }
  );

  const result = await userModel.aggregate(query);
  if (result[0].data.length === 0) throw new Error("user not found");
  return {
    data: result[0].data,
    total: result[0].metadata[0].total,
    page: +page,
    limit: +limit,
  };
};

const deleteUser = async (_id) => {
  return await userModel.deleteOne({ _id });
};

const updateUsersDetails = async (_id, payload) => {
  const user = await userModel.findOne({ _id });
  console.log(user);
  if (!user) throw new Error("user not found");
  return await userModel.updateOne({ _id }, payload);
};

const getSingleUser = async (email) => {
  return await userModel.findOne({ email });
};

const resetPassword = async (_id, payload) => {
  const { newPassword } = payload;
  console.log(newPassword);
  if (!_id || !newPassword)
    throw new Error("please provide id and newPassword");
  const user = await userModel.findOne({ _id }).select("+password");
  if (!user) throw new Error("user not found");
  const createHash = await hashPassword(newPassword);
  const result = await userModel.updateOne({ _id }, { password: createHash });
  return result;
};

const changePassword = async (email, payload) => {
  const { oldPassword, newPassword } = payload;
  if (!email || !oldPassword || !newPassword)
    throw new Error("Something is missing!!");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("user does not found");
  const hash = user.password;
  console.log(hash);
  const comparingPassword = await comparePassword(oldPassword, hash);
  if (!comparingPassword) throw new Error("password does not match");
  const createHash = await hashPassword(newPassword);
  const result = await userModel.updateOne({ email }, { password: createHash });
  return result;
};

const updateUserRole = async (_id, payload) => {
  if (!_id) throw new Error("Id is required, Please, enter valid id");
  const user = await userModel.findOne({ _id });
  if (!user) throw new Error("user node found ");
  return await userModel.updateOne({ _id }, payload);
};

module.exports = {
  registerUser,
  loginUser,
  generateOtp,
  verifyOtpChangePassword,
  userList,
  deleteUser,
  updateUsersDetails,
  getSingleUser,
  resetPassword,
  updateUserRole,
  changePassword,
};
