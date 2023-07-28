// import { CreateProductInput, DeleteProductInput, GetProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct, findAllProducts } from "../services/product.service.js";

export async function getAllProductHandler(req, res) {
  const products = await findAllProducts({}, { lean: true });

  return res.send(products);
}

export async function getProductHandler(req, res) {
  const productId = req.params.productId;
  const product = await findProduct({ productId })

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function createProductHandler(req, res) {
  const body = req.body

  const product = await createProduct({ ...body });

  return res.send(product);
}

export async function updateProductHandler(req, res) {
  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
    lean: true,
  });

  return res.send(updatedProduct);
}

export async function deleteProductHandler(req, res) {
  const productId = req.params.productId;
  const product = await findProduct({ productId })

  if (!product) {
    return res.sendStatus(404);
  }

  await deleteProduct({ productId });

  return res.sendStatus(200);
}



