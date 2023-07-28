import Product from "../models/product.model.js";

export async function createProduct(input) {
  return await Product.create(input)
}

export async function findAllProducts(query, options) {
  return await Product.find(query, {}, options)
}

export async function findProduct(query, options = { lean: true }) {
  return await Product.findOne(query, {}, options)
}

export async function findAndUpdateProduct(query, update, options) {
  return await Product.findOneAndUpdate(query, update, options)
}

export async function deleteProduct(query) {
  return await Product.deleteOne(query)
}