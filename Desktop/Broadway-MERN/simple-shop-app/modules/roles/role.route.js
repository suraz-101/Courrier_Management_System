const route = require("express").Router();

route.get("/", (req, res, next) => {
  try {
    res.json({ message: `You are inside get method of roles` });
  } catch (error) {
    next(error);
  }
});

route.post("/", (req, res, next) => {
  try {
    res.json({ message: `You are inside post method of roles` });
  } catch (error) {
    next(error);
  }
});

route.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside put method of roles. So, please update the role of id ${id}`,
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

route.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside delete method of roles. So, please delete role of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = route;
