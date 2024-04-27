const router = require("express").Router();
const productModel = require("./product.controller");
const { validateProductData } = require("./product.validate");
const multer = require("multer");
const { checkRole } = require("../../utils/sessionManager");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    console.log(req.file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res, next) => {
  try {
    const { product, page, limit } = req.query;
    const search = { product };
    const result = await productModel.getAllProduct(search, page, limit);
    res.json({ product: result });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  upload.single("image"),
  checkRole(["user", "admin"]),
  validateProductData,
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = req.file.path.replace("public", "");
      }

      const data = req.body;
      const result = await productModel.createProduct(data);
      res.json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

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

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productModel.deleteProduct(id);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
