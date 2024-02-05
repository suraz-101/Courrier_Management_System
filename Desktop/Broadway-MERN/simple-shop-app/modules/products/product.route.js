const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ message: "You are inside get method " });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json({ message: "You are inside post method " });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside put method and the data to be updated of prodct are of id : ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside path method and the data to be updated is of product of id ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      message: `You are inside delete method  and the data of ${id} id need to be deleted`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
