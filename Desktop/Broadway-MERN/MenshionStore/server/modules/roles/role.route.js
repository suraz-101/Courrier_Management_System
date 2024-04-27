const route = require("express").Router();
const roleController = require("./role.controller");
const { roleValidation } = require("./role.validate");

route.get("/", async (req, res, next) => {
  try {
    const result = await roleController.getAllRole();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

route.post("/", roleValidation, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await roleController.createRole(data);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

route.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await roleController.updateRole(id, updatedData);
    res.json({
      message: result,
    });
  } catch (error) {
    next(error);
  }
});

route.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside patch method of roles. So, please update a role of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

route.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await roleController.deleteRole(id);
    res.json({
      message: result,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = route;
