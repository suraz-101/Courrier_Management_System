const route = require("express").Router();
const productRouter = require("../modules/products/product.route");
const userRouter = require("../modules/users/user.route");
const reviewRouter = require("../modules/reviews/review.route");
const roleRouter = require("../modules/roles/role.route");

route.use("/products", productRouter);
route.use("/users", userRouter);
route.use("/reviews", reviewRouter);
route.use("/roles", roleRouter);

module.exports = route;
