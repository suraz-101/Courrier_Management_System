const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name must be provided"] },
  price: {
    type: Number,
    required: [true, "Please give the price of the product"],
  },
  addedBy: { type: ObjectId, ref: "Users", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  discount: { type: Number, default: 0 },
  image: { type: String },
});

const productModel = new mongoose.model("Product", productSchema);

module.exports = productModel;
