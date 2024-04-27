const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  role: { type: String, default: "Users" },
});

const roleModel = new mongoose.model("Roles", roleSchema);

module.exports = roleModel;
