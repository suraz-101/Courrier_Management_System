const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name is missing"] },
    email: { type: String, required: [true, "email is missing"], unique: true },
    password: {
      type: String,
      required: [true, "password is missing"],
      select: false,
    },
    profilePic: { type: String },
    roles: { type: [String], default: "user" },
    otp: { type: Number, default: "" },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
