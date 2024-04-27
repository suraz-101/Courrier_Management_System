const route = require("express").Router();

route.get("/", (req, res, next) => {
  try {
    res.json({ message: `You are inside get method of reviews` });
  } catch (error) {
    next(error);
  }
});

route.post("/", (req, res, next) => {
  try {
    res.json({ message: `You are inside post method of reviews` });
  } catch (error) {
    next(error);
  }
});

route.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside put method of reviews and please update the data of reviews of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

route.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside patch method of reviews and please update a data of reviews of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

route.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside delete method of reviews and please delete the  reviews of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = route;
