import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 10);

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true, default: () => `product_${nanoid()}` },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  isInCart: { type: Boolean, required: true, default: false },
}, {
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;