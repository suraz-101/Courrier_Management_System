const route = require("express").Router();

route.get("/", (req, res, next) => {
  try {
    res.json({ message: "You are inside get method of users" });
  } catch (error) {
    next(error);
  }
});

route.post("/", (req, res, next) => {
  try {
    res.json({ message: "You are inside post method of users" });
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

route.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside patch method of users and please update a data of users with id ${id}`,
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

module.exports = route;
