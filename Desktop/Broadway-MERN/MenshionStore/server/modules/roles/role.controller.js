const roleSchema = require("./role.model");

const createRole = (payload) => {
  return roleSchema.create(payload);
};

const getAllRole = () => {
  return roleSchema.find();
};

const getRoleById = (_id) => {
  return roleSchema.findOne(_id);
};

const deleteRole = (_id) => {
  return roleSchema.deleteOne({ _id });
};

const updateRole = (_id, payload) => {
  return roleSchema.updateOne({ _id }, payload);
};

module.exports = {
  createRole,
  getAllRole,
  getRoleById,
  deleteRole,
  updateRole,
};
