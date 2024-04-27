const route = require("express").Router();
const userController = require("./user.controller");
const { userValidation } = require("./user.validate");
const { checkRole } = require("../../utils/sessionManager");

route.get("/", async (req, res, next) => {
  try {
    const result = await userController.getAllUsers();
    res.json({ users: result });
  } catch (error) {
    next(error);
  }
});

route.post("/", userValidation, async (req, res, next) => {
  try {
    // const userData = req.body;
    const result = await userController.registerUser(req.body);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

route.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside put method of users and please update the data of users with id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

route.patch("/", (req, res, next) => {
  try {
    // const { id } = req.params;
    res.json({
      message: `You are inside patch method of users and please update a data of users with id `,
    });
  } catch (error) {
    next(error);
  }
});

route.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside delete method of users and please delete  users with id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

route.post("/login", async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

route.patch("/resetPassword", checkRole(["user"]), async (req, res, next) => {
  try {
    const result = await userController.resetPassword(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = route;
